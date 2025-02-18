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
  CheckUsersSavedShowsParams,
  ForbiddenResponse,
  GetAShowParams,
  GetAShowsEpisodesParams,
  GetMultipleShowsParams,
  GetUsersSavedShowsParams,
  ManySimplifiedShowsResponse,
  OneShowResponse,
  PagingSavedShowObjectResponse,
  PagingSimplifiedEpisodeObjectResponse,
  RemoveShowsUserBody,
  RemoveShowsUserParams,
  SaveShowsUserBody,
  SaveShowsUserParams,
  TooManyRequestsResponse,
  UnauthorizedResponse
} from '../../model'


  
  /**
 * Get Spotify catalog information for a single show identified by its
unique Spotify ID.

 * @summary Get Show

 */
export const getAShow = (
    id: string,
    params?: GetAShowParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<OneShowResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/shows/${id}`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetAShowKey = (id: string,
    params?: GetAShowParams,) => [`https://api.spotify.com/v1/shows/${id}`, ...(params ? [params]: [])] as const;

export type GetAShowQueryResult = NonNullable<Awaited<ReturnType<typeof getAShow>>>
export type GetAShowQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Get Show

 */
export const useGetAShow = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  id: string,
    params?: GetAShowParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getAShow>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetAShowKey(id,params) : null);
  const swrFn = () => getAShow(id,params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Get Spotify catalog information for several shows based on their Spotify IDs.

 * @summary Get Several Shows

 */
export const getMultipleShows = (
    params: GetMultipleShowsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ManySimplifiedShowsResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/shows`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetMultipleShowsKey = (params: GetMultipleShowsParams,) => [`https://api.spotify.com/v1/shows`, ...(params ? [params]: [])] as const;

export type GetMultipleShowsQueryResult = NonNullable<Awaited<ReturnType<typeof getMultipleShows>>>
export type GetMultipleShowsQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Get Several Shows

 */
export const useGetMultipleShows = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: GetMultipleShowsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getMultipleShows>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetMultipleShowsKey(params) : null);
  const swrFn = () => getMultipleShows(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

 * @summary Get Show Episodes

 */
export const getAShowsEpisodes = (
    id: string,
    params?: GetAShowsEpisodesParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PagingSimplifiedEpisodeObjectResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/shows/${id}/episodes`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetAShowsEpisodesKey = (id: string,
    params?: GetAShowsEpisodesParams,) => [`https://api.spotify.com/v1/shows/${id}/episodes`, ...(params ? [params]: [])] as const;

export type GetAShowsEpisodesQueryResult = NonNullable<Awaited<ReturnType<typeof getAShowsEpisodes>>>
export type GetAShowsEpisodesQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Get Show Episodes

 */
export const useGetAShowsEpisodes = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  id: string,
    params?: GetAShowsEpisodesParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getAShowsEpisodes>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetAShowsEpisodesKey(id,params) : null);
  const swrFn = () => getAShowsEpisodes(id,params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

 * @summary Get User's Saved Shows

 */
export const getUsersSavedShows = (
    params?: GetUsersSavedShowsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PagingSavedShowObjectResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/me/shows`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetUsersSavedShowsKey = (params?: GetUsersSavedShowsParams,) => [`https://api.spotify.com/v1/me/shows`, ...(params ? [params]: [])] as const;

export type GetUsersSavedShowsQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersSavedShows>>>
export type GetUsersSavedShowsQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Get User's Saved Shows

 */
export const useGetUsersSavedShows = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params?: GetUsersSavedShowsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getUsersSavedShows>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetUsersSavedShowsKey(params) : null);
  const swrFn = () => getUsersSavedShows(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Save one or more shows to current Spotify user's library.

 * @summary Save Shows for Current User

 */
export const saveShowsUser = (
    saveShowsUserBody: SaveShowsUserBody,
    params: SaveShowsUserParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.put(
      `https://api.spotify.com/v1/me/shows`,
      saveShowsUserBody,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getSaveShowsUserMutationFetcher = (params: SaveShowsUserParams, options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: SaveShowsUserBody }): Promise<AxiosResponse<void>> => {
    return saveShowsUser(arg, params, options);
  }
}
export const getSaveShowsUserMutationKey = (params: SaveShowsUserParams,) => [`https://api.spotify.com/v1/me/shows`, ...(params ? [params]: [])] as const;

export type SaveShowsUserMutationResult = NonNullable<Awaited<ReturnType<typeof saveShowsUser>>>
export type SaveShowsUserMutationError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Save Shows for Current User

 */
export const useSaveShowsUser = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: SaveShowsUserParams, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof saveShowsUser>>, TError, Key, SaveShowsUserBody, Awaited<ReturnType<typeof saveShowsUser>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getSaveShowsUserMutationKey(params);
  const swrFn = getSaveShowsUserMutationFetcher(params, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Delete one or more shows from current Spotify user's library.

 * @summary Remove User's Saved Shows

 */
export const removeShowsUser = (
    removeShowsUserBody: RemoveShowsUserBody,
    params: RemoveShowsUserParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.delete(
      `https://api.spotify.com/v1/me/shows`,{data:
      removeShowsUserBody, 
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getRemoveShowsUserMutationFetcher = (params: RemoveShowsUserParams, options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: RemoveShowsUserBody }): Promise<AxiosResponse<void>> => {
    return removeShowsUser(arg, params, options);
  }
}
export const getRemoveShowsUserMutationKey = (params: RemoveShowsUserParams,) => [`https://api.spotify.com/v1/me/shows`, ...(params ? [params]: [])] as const;

export type RemoveShowsUserMutationResult = NonNullable<Awaited<ReturnType<typeof removeShowsUser>>>
export type RemoveShowsUserMutationError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Remove User's Saved Shows

 */
export const useRemoveShowsUser = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: RemoveShowsUserParams, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof removeShowsUser>>, TError, Key, RemoveShowsUserBody, Awaited<ReturnType<typeof removeShowsUser>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getRemoveShowsUserMutationKey(params);
  const swrFn = getRemoveShowsUserMutationFetcher(params, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Check if one or more shows is already saved in the current Spotify user's library.

 * @summary Check User's Saved Shows

 */
export const checkUsersSavedShows = (
    params: CheckUsersSavedShowsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ArrayOfBooleansResponse>> => {
    return axios.get(
      `https://api.spotify.com/v1/me/shows/contains`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getCheckUsersSavedShowsKey = (params: CheckUsersSavedShowsParams,) => [`https://api.spotify.com/v1/me/shows/contains`, ...(params ? [params]: [])] as const;

export type CheckUsersSavedShowsQueryResult = NonNullable<Awaited<ReturnType<typeof checkUsersSavedShows>>>
export type CheckUsersSavedShowsQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>

/**
 * @summary Check User's Saved Shows

 */
export const useCheckUsersSavedShows = <TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | TooManyRequestsResponse>>(
  params: CheckUsersSavedShowsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof checkUsersSavedShows>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getCheckUsersSavedShowsKey(params) : null);
  const swrFn = () => checkUsersSavedShows(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
