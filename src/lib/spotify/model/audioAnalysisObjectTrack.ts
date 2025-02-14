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
import type { Loudness } from './loudness';
import type { Tempo } from './tempo';
import type { TimeSignature } from './timeSignature';
import type { Key } from './key';
import type { Mode } from './mode';

export type AudioAnalysisObjectTrack = {
  /** The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`. */
  num_samples?: number;
  /** Length of the track in seconds. */
  duration?: number;
  /** This field will always contain the empty string. */
  sample_md5?: string;
  /** An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.) */
  offset_seconds?: number;
  /** The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.) */
  window_seconds?: number;
  /** The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify. */
  analysis_sample_rate?: number;
  /** The number of channels used for analysis. If 1, all channels are summed together to mono before analysis. */
  analysis_channels?: number;
  /** The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0. */
  end_of_fade_in?: number;
  /** The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length. */
  start_of_fade_out?: number;
  loudness?: Loudness;
  tempo?: Tempo;
  /**
   * The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.
   * @minimum 0
   * @maximum 1
   */
  tempo_confidence?: number;
  time_signature?: TimeSignature;
  /**
   * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.
   * @minimum 0
   * @maximum 1
   */
  time_signature_confidence?: number;
  key?: Key;
  /**
   * The confidence, from 0.0 to 1.0, of the reliability of the `key`.
   * @minimum 0
   * @maximum 1
   */
  key_confidence?: number;
  mode?: Mode;
  /**
   * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
   * @minimum 0
   * @maximum 1
   */
  mode_confidence?: number;
  /** An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track. */
  codestring?: string;
  /** A version number for the Echo Nest Musical Fingerprint format used in the codestring field. */
  code_version?: number;
  /** An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track. */
  echoprintstring?: string;
  /** A version number for the EchoPrint format used in the echoprintstring field. */
  echoprint_version?: number;
  /** A [Synchstring](https://github.com/echonest/synchdata) for this track. */
  synchstring?: string;
  /** A version number for the Synchstring used in the synchstring field. */
  synch_version?: number;
  /** A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
  rhythmstring?: string;
  /** A version number for the Rhythmstring used in the rhythmstring field. */
  rhythm_version?: number;
};
