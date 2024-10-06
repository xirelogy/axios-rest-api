import { xw } from '@xirelogy/xwts';
import AxiosRestApiClientNetworkError from './AxiosRestApiClientNetworkError';

import moduleI18nInit from '../internals/locale-setup';

const _l = moduleI18nInit('AxiosRestApiClientHttpNetworkError');


/**
 * Internal error
 */
export default class AxiosRestApiClientHttpNetworkError extends AxiosRestApiClientNetworkError {
  /**
   * @constructor
   * @param statusCode
   */
  constructor(statusCode: string|number) {
    super(xw.format(_l('HTTP/{0} network error'), statusCode));
  }
}