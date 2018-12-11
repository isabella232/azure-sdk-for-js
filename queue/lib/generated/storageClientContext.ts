/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

const packageName = "";
const packageVersion = "";

export class StorageClientContext extends msRest.ServiceClient {
  url: string;
  version: string;

  /**
   * @class
   * Initializes a new instance of the StorageClientContext class.
   * @constructor
   *
   * @param {string} url - The URL of the service account, queue or message that is the targe of the desired operation.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(url: string, options?: msRest.ServiceClientOptions) {
    if (url === null || url === undefined) {
      throw new Error('\'url\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.version = '2018-03-28';
    this.baseUri = "{url}";
    this.requestContentType = "application/json; charset=utf-8";
    this.url = url;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
  }
}
