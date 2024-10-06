import {
  Stringable,
  XwError,
} from '@xirelogy/xwts';


/**
 * All errors related to API client
 */
export default class AxiosRestApiClientError extends XwError
{
  /**
   * @constructor
   * @param message
   */
  constructor(message?: string|Stringable) {
    super(message);
  }
}