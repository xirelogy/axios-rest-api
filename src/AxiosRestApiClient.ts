import {
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios';


/**
 * REST API client implemented using Axios
 */
export default interface AxiosRestApiClient {
  /**
   * Make a GET request
   * @param config
   * @returns
   */
  get(config: AxiosRequestConfig): AxiosPromise;

  /**
   * Make a POST request
   * @param config
   * @returns
   */
  post(config: AxiosRequestConfig): AxiosPromise;

  /**
   * Make a PUT request
   * @param config
   * @returns
   */
  put(config: AxiosRequestConfig): AxiosPromise;

  /**
   * Make a DELETE request
   * @param config
   * @returns
   */
  delete(config: AxiosRequestConfig): AxiosPromise;
}