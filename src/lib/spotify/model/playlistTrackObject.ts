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
import type { PlaylistUserObject } from './playlistUserObject';
import type { PlaylistTrackObjectTrack } from './playlistTrackObjectTrack';

export interface PlaylistTrackObject {
  /** The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._
 */
  added_at?: string;
  /** The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._
 */
  added_by?: PlaylistUserObject;
  /** Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.
 */
  is_local?: boolean;
  /** Information about the track or episode. */
  track?: PlaylistTrackObjectTrack;
}
