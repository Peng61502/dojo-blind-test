import { mkdir, writeFile } from "fs/promises";

import openapi from "../openapi.json" assert { type: 'json' };
import { types } from "util";

const targetDirectory = "src/lib/spotify/model";
var imports = ""; // global varialbe for imported types

async function generateSpotifyClient() {
  console.log("\nLaunched generate-spotify-client script");
  console.log('Generating Spotify client from OpenApi spec file...\n')
  await mkdir(targetDirectory, { recursive: true }); // Generate target directory

  const schemas = openapi.components.schemas;
  const typesToGenerate = Object.keys(schemas);

  for (const typeName of typesToGenerate) {
    const typeSchema = schemas[typeName];
    generateType(typeName, typeSchema);
  }
}

function generateType(typeName, typeSchema) {  
  console.log(`Generating type ${typeName}...`);
  const generatedCode = getGeneratedCode(typeName, typeSchema);
  writeFile(`${targetDirectory}/${typeName}.ts`, generatedCode);
  imports = "";
}

function getGeneratedCode(typeName, typeSchema) {
  const generatedType = getGeneratedType(typeSchema);
  if (imports !== "") {
    imports += "\n";
  }
  return `${imports}export type ${typeName} = ${generatedType};`;
}

function getGeneratedType(typeSchema, ignoreType=false) { // ignoreType used for handling object types
  var keyType = "";

  // Types réguliers
  if (typeSchema.type !== undefined && !ignoreType) {
    const schemaType = typeSchema.type;
    switch (schemaType) {
      case "number": return "number";
      case "integer": return "number";
      case "string": {
        if (typeSchema.enum == undefined) {
          return "string";
        }
        else {
          for (const type of typeSchema.enum) {
            keyType += "\"" + type + "\" | ";
          }
          return keyType.substring(0, keyType.length - 3);
        }
      }
      case "boolean": return "boolean";
      case "object": {
        console.log("OBJECT")
        // Get required
        return getGeneratedType(typeSchema, true);
      }
      case "array": {
        var items = typeSchema.items;
        return getGeneratedType(items) + "[]"
      }
      default: {
        return "";
      }
    }
  }

  // Properties
  else if (typeSchema.properties !== undefined) {
    const properties = typeSchema.properties;
    var required = [];
    var body = "{\n";
    if (typeSchema.required !== undefined) {
      required = typeSchema.required;
    }
    for (const key of Object.keys(properties)) {
      keyType = getGeneratedType(properties[key]);
      body += " " + key;
      if (!required.includes(key)) {
        body += "?"
      }
      body += ": " + keyType + ";\n";
    }
    return body + "}";
  }

  // Imported type
  else if (typeSchema.$ref !== undefined) {6
    keyType = typeSchema.$ref;
    keyType = keyType.match(/[^/]+$/)[0];
    if (!(imports.includes("import { " + keyType + " } from \"./" + keyType + "\";"))) 
      imports += "import { " + keyType + " } from \"./" + keyType + "\";\n";
    return keyType;
  }

  // oneOf
  else if (typeSchema.oneOf !== undefined) {
    keyType = "("
    for (const type of typeSchema.oneOf) {
      keyType += getGeneratedType(type) + " | ";
    }
    return keyType.substring(0, keyType.length - 3) + ")";
  }

  // allOf
  else if (typeSchema.allOf !== undefined) {
    console.log("ALLOF");
    keyType = "";
    for (const type of typeSchema.allOf) {
      var genType = getGeneratedType(type);
      console.log(genType);
      keyType += genType +" & ";
    }
    return keyType.substring(0, keyType.length - 3);
  }
}
generateSpotifyClient();