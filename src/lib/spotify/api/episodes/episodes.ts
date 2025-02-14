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
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import useSwr from 'swr'
import type {
  Key,
  SWRConfiguration
} from 'swr'
import useSWRMutation from 'swr/mutation'
import type {
  SWRMutationConfiguration
} from 'swr/mutation'
import type {
  ArrayOfBooleansResponse,
  CheckUsersSavedEpisodesParams,
  ForbiddenResponse,
  GetAnEpisodeParams,
  GetMultipleEpisodesParams,
  GetUsersSavedEpisodesParams,
  ManyEpisodesResponse,
  OneEpisodeResponse,
  PagingSavedEpisodeObjectResponse,
  RemoveEpisodesUserBody,
  RemoveEpisodesUserParams,
  SaveEpisodesUserBody,
  SaveEpisodesUserParams,
  TooManyRequestsResponse,
  UnauthorizedResponse
} from '../../model'


  
  /**
 * Get Spotify catalog information for a single episode identified by its
unique Spotify ID.

 * @summary Get Episode

 */
export const getAnEpisode = (
    id: string,
    params?: GetAnEpisodeParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<OneEpisodeResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/episodes/${id}`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetAnEpisodeKey = (id: string,
    params?: GetAnEpisodeParams,) => [`https://api.spotify.com/v1/episodes/${id}`, ...(params ? [params]: [])] as const;

export type GetAnEpisodeQueryResult = NonNullable<Awaited<ReturnType<typeof getAnEpisode>>>
export type GetAnEpisodeQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Get Episode

 */
export const useGetAnEpisode = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  id: string,
    params?: GetAnEpisodeParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getAnEpisode>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetAnEpisodeKey(id,params) : null);
  const swrFn = () => getAnEpisode(id,params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Get Spotify catalog information for several episodes based on their Spotify IDs.

 * @summary Get Several Episodes

 */
export const getMultipleEpisodes = (
    params: GetMultipleEpisodesParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ManyEpisodesResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/episodes`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetMultipleEpisodesKey = (params: GetMultipleEpisodesParams,) => [`https://api.spotify.com/v1/episodes`, ...(params ? [params]: [])] as const;

export type GetMultipleEpisodesQueryResult = NonNullable<Awaited<ReturnType<typeof getMultipleEpisodes>>>
export type GetMultipleEpisodesQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Get Several Episodes

 */
export const useGetMultipleEpisodes = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: GetMultipleEpisodesParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getMultipleEpisodes>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetMultipleEpisodesKey(params) : null);
  const swrFn = () => getMultipleEpisodes(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

 * @summary Get User's Saved Episodes

 */
export const getUsersSavedEpisodes = (
    params?: GetUsersSavedEpisodesParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PagingSavedEpisodeObjectResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/me/episodes`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetUsersSavedEpisodesKey = (params?: GetUsersSavedEpisodesParams,) => [`https://api.spotify.com/v1/me/episodes`, ...(params ? [params]: [])] as const;

export type GetUsersSavedEpisodesQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersSavedEpisodes>>>
export type GetUsersSavedEpisodesQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Get User's Saved Episodes

 */
export const useGetUsersSavedEpisodes = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params?: GetUsersSavedEpisodesParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getUsersSavedEpisodes>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetUsersSavedEpisodesKey(params) : null);
  const swrFn = () => getUsersSavedEpisodes(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

 * @summary Save Episodes for Current User

 */
export const saveEpisodesUser = (
    saveEpisodesUserBody: SaveEpisodesUserBody,
    params: SaveEpisodesUserParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.put(
      `https://api.spotify.com/v1/me/episodes`,
      saveEpisodesUserBody,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getSaveEpisodesUserMutationFetcher = (params: SaveEpisodesUserParams, options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: SaveEpisodesUserBody }): Promise<AxiosResponse<void>> => {
    return saveEpisodesUser(arg, params, options);
  }
}
export const getSaveEpisodesUserMutationKey = (params: SaveEpisodesUserParams,) => [`https://api.spotify.com/v1/me/episodes`, ...(params ? [params]: [])] as const;

export type SaveEpisodesUserMutationResult = NonNullable<Awaited<ReturnType<typeof saveEpisodesUser>>>
export type SaveEpisodesUserMutationError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Save Episodes for Current User

 */
export const useSaveEpisodesUser = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: SaveEpisodesUserParams, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof saveEpisodesUser>>, TError, Key, SaveEpisodesUserBody, Awaited<ReturnType<typeof saveEpisodesUser>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getSaveEpisodesUserMutationKey(params);
  const swrFn = getSaveEpisodesUserMutationFetcher(params, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

 * @summary Remove User's Saved Episodes

 */
export const removeEpisodesUser = (
    removeEpisodesUserBody: RemoveEpisodesUserBody,
    params: RemoveEpisodesUserParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.delete(
      `https://api.spotify.com/v1/me/episodes`,{data:
      removeEpisodesUserBody, 
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getRemoveEpisodesUserMutationFetcher = (params: RemoveEpisodesUserParams, options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: RemoveEpisodesUserBody }): Promise<AxiosResponse<void>> => {
    return removeEpisodesUser(arg, params, options);
  }
}
export const getRemoveEpisodesUserMutationKey = (params: RemoveEpisodesUserParams,) => [`https://api.spotify.com/v1/me/episodes`, ...(params ? [params]: [])] as const;

export type RemoveEpisodesUserMutationResult = NonNullable<Awaited<ReturnType<typeof removeEpisodesUser>>>
export type RemoveEpisodesUserMutationError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Remove User's Saved Episodes

 */
export const useRemoveEpisodesUser = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: RemoveEpisodesUserParams, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof removeEpisodesUser>>, TError, Key, RemoveEpisodesUserBody, Awaited<ReturnType<typeof removeEpisodesUser>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getRemoveEpisodesUserMutationKey(params);
  const swrFn = getRemoveEpisodesUserMutationFetcher(params, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..

 * @summary Check User's Saved Episodes

 */
export const checkUsersSavedEpisodes = (
    params: CheckUsersSavedEpisodesParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ArrayOfBooleansResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/me/episodes/contains`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getCheckUsersSavedEpisodesKey = (params: CheckUsersSavedEpisodesParams,) => [`https://api.spotify.com/v1/me/episodes/contains`, ...(params ? [params]: [])] as const;

export type CheckUsersSavedEpisodesQueryResult = NonNullable<Awaited<ReturnType<typeof checkUsersSavedEpisodes>>>
export type CheckUsersSavedEpisodesQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Check User's Saved Episodes

 */
export const useCheckUsersSavedEpisodes = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: CheckUsersSavedEpisodesParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof checkUsersSavedEpisodes>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getCheckUsersSavedEpisodesKey(params) : null);
  const swrFn = () => checkUsersSavedEpisodes(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
