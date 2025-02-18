/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Spotify Web API with fixes and improvements from sonallux
 * You can use Spotify's Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.

In order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth 2.0</a>.

The base URI for all Web API requests is `https://api.spotify.com/v1`.

Need help? See our <a href="https://developer.spotify.com/documentation/web-api/guides/">Web API guides</a> for more information, or visit the <a href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">Spotify for Developers community forum</a> to ask questions and connect with other developers.

 * OpenAPI spec version: 2023.8.30
 */

export type AudioAnalysisObjectMeta = {
  /** The version of the Analyzer used to analyze this track. */
  analyzer_version?: string;
  /** The platform used to read the track's audio data. */
  platform?: string;
  /** A detailed status code for this track. If analysis data is missing, this code may explain why. */
  detailed_status?: string;
  /** The return code of the analyzer process. 0 if successful, 1 if any errors occurred. */
  status_code?: number;
  /** The Unix timestamp (in seconds) at which this track was analyzed. */
  timestamp?: number;
  /** The amount of time taken to analyze this track. */
  analysis_time?: number;
  /** The method used to read the track's audio data. */
  input_process?: string;
};
