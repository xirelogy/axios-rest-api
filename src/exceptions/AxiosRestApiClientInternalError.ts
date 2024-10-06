import AxiosRestApiClientError from './AxiosRestApiClientError';

import moduleI18nInit from '../internals/locale-setup';

const _l = moduleI18nInit('AxiosRestApiClientInternalError');


/**
 * Internal error
 */
export default class AxiosRestApiClientInternalError extends AxiosRestApiClientError {
  /**
   * @constructor
   * @param message
   */
  constructor(message?: string) {
    super(message ?? _l('API client internal error'));
  }
}