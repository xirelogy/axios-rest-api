import AxiosRestApiClientError from './AxiosRestApiClientError';

import moduleI18nInit from '../internals/locale-setup';

const _l = moduleI18nInit('AxiosRestApiClientNetworkError');


/**
 * Internal error
 */
export default class AxiosRestApiClientNetworkError extends AxiosRestApiClientError {
  /**
   * @constructor
   * @param message
   */
  constructor(message?: string) {
    super(message ?? _l('Network error'));
  }
}