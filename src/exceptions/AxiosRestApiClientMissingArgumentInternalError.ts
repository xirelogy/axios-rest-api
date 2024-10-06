import { xw } from '@xirelogy/xwts';
import AxiosRestApiClientInternalError from './AxiosRestApiClientInternalError';

import moduleI18nInit from '../internals/locale-setup';

const _l = moduleI18nInit('AxiosRestApiClientMissingArgumentInternalError');


/**
 * Internal error: missing argument
 */
export default class AxiosRestApiClientMissingArgumentInternalError extends AxiosRestApiClientInternalError {
  constructor(key: string) {
    super(xw.format(_l('API client internal error - argument \'{0}\' missing'), key));
  }
}