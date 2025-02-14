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
import type { AudioAnalysisObjectMeta } from './audioAnalysisObjectMeta';
import type { AudioAnalysisObjectTrack } from './audioAnalysisObjectTrack';
import type { TimeIntervalObject } from './timeIntervalObject';
import type { SectionObject } from './sectionObject';
import type { SegmentObject } from './segmentObject';

export interface AudioAnalysisObject {
  meta?: AudioAnalysisObjectMeta;
  track?: AudioAnalysisObjectTrack;
  /** The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats. */
  bars?: TimeIntervalObject[];
  /** The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums. */
  beats?: TimeIntervalObject[];
  /** Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness. */
  sections?: SectionObject[];
  /** Each segment contains a roughly conisistent sound throughout its duration. */
  segments?: SegmentObject[];
  /** A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments). */
  tatums?: TimeIntervalObject[];
}
