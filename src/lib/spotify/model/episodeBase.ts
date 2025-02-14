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
import type { ExternalUrlObject } from './externalUrlObject';
import type { ImageObject } from './imageObject';
import type { EpisodeBaseReleaseDatePrecision } from './episodeBaseReleaseDatePrecision';
import type { ResumePointObject } from './resumePointObject';
import type { EpisodeBaseType } from './episodeBaseType';
import type { EpisodeRestrictionObject } from './episodeRestrictionObject';

export interface EpisodeBase {
  /**
   * A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.

   * @nullable
   */
  audio_preview_url: string | null;
  /** A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
 */
  description: string;
  /** A description of the episode. This field may contain HTML tags.
 */
  html_description: string;
  /** The episode length in milliseconds.
 */
  duration_ms: number;
  /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
 */
  explicit: boolean;
  /** External URLs for this episode.
 */
  external_urls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the episode.
 */
  href: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
 */
  id: string;
  /** The cover art for the episode in various sizes, widest first.
 */
  images: ImageObject[];
  /** True if the episode is hosted outside of Spotify's CDN.
 */
  is_externally_hosted: boolean;
  /** True if the episode is playable in the given market. Otherwise false.
 */
  is_playable: boolean;
  /**
   * The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.

   * @deprecated
   */
  language?: string;
  /** A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
 */
  languages: string[];
  /** The name of the episode.
 */
  name: string;
  /** The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
 */
  release_date: string;
  /** The precision with which `release_date` value is known.
 */
  release_date_precision: EpisodeBaseReleaseDatePrecision;
  /** The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
 */
  resume_point: ResumePointObject;
  /** The object type.
 */
  type: EpisodeBaseType;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
 */
  uri: string;
  /** Included in the response when a content restriction is applied.
 */
  restrictions?: EpisodeRestrictionObject;
}
