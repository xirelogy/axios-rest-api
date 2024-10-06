import {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios';

import queryString from 'query-string';

import AxiosRestApiClient from './AxiosRestApiClient';


/**
 * Check and ensure the 'url' argument is proper
 * @param config
 */
function checkOutArgsUrl(outArgs: AxiosRequestConfig): void {
  if ((outArgs.url ?? '') == '') throw new Error('url is missing');
}


/**
 * Create REST API client using given Axios instance
 * @param instance Axios instance
 * @returns REST API client interface
 */
export default function createAxiosRestApiClient(instance: AxiosInstance): AxiosRestApiClient {
  return {
    /**
     * @inheritdoc
     */
    get(config: AxiosRequestConfig): AxiosPromise {
      // Prepare arguments
      const outArgs = {...config};
      checkOutArgsUrl(outArgs);

      // Translate data into query string
      if (config.data) {
        outArgs.url += `?${queryString.stringify(config.data)}`;
        delete outArgs.data;
      }

      // Customize arguments
      outArgs.method = 'get';

      // Forward
      return instance(outArgs);
    },

    /**
     * @inheritdoc
     */
    post(config: AxiosRequestConfig): AxiosPromise {
      // Prepare arguments
      const outArgs = {...config};
      checkOutArgsUrl(outArgs);

      // Customize arguments
      outArgs.method = 'post';
      outArgs.headers = outArgs.headers || {};
      outArgs.headers['content-type'] = 'application/json';

      // Forward
      return instance(outArgs);
    },

    /**
     * @inheritdoc
     */
    put(config: AxiosRequestConfig): AxiosPromise {
      // Prepare arguments
      const outArgs = {...config};
      checkOutArgsUrl(outArgs);

      // Customize arguments
      outArgs.method = 'put';
      outArgs.headers = outArgs.headers || {};
      outArgs.headers['content-type'] = 'application/json';

      // Forward
      return instance(outArgs);
    },

    /**
     * @inheritdoc
     */
    delete(config: AxiosRequestConfig): AxiosPromise {
      // Prepare arguments
      const outArgs = {...config};
      checkOutArgsUrl(outArgs);

      // Translate data into query string
      if (config.data) {
        outArgs.url += `?${queryString.stringify(config.data)}`;
        delete outArgs.data;
      }

      // Customize arguments
      outArgs.method = 'delete';

      // Forward
      return instance(outArgs);
    }
  };
}