// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/oblivious_http_request.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ObliviousHttpRequestBody
network.mojom.ObliviousHttpRequestBody = class {
  constructor(values = {}) {
    this.content_type = values.content_type !== undefined ? values.content_type : "";
  }
};

// Struct: ObliviousHttpResponse
network.mojom.ObliviousHttpResponse = class {
  constructor(values = {}) {
    this.response_code = values.response_code !== undefined ? values.response_code : 0;
    this.response_body = values.response_body !== undefined ? values.response_body : "";
  }
};

// Struct: ObliviousHttpPaddingParameters
network.mojom.ObliviousHttpPaddingParameters = class {
  constructor(values = {}) {
    this.exponential_mean = values.exponential_mean !== undefined ? values.exponential_mean : 0;
    this.pad_to_next_power_of_two = values.pad_to_next_power_of_two !== undefined ? values.pad_to_next_power_of_two : false;
  }
};

// Struct: ObliviousHttpRequest
network.mojom.ObliviousHttpRequest = class {
  constructor(values = {}) {
    this.timeout_duration = values.timeout_duration !== undefined ? values.timeout_duration : null;
    this.resource_url = values.resource_url !== undefined ? values.resource_url : "";
    this.padding_params = values.padding_params !== undefined ? values.padding_params : "";
  }
};

// Interface: ObliviousHttpClient
network.mojom.ObliviousHttpClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ObliviousHttpClient';
  }

  onCompleted(response) {
    // Method: OnCompleted
    // Call: OnCompleted(response)
  }

};

network.mojom.ObliviousHttpClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
