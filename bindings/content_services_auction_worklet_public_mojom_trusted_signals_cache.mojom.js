// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/trusted_signals_cache.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Enum: TrustedSignalsCompressionScheme
auction_worklet.mojom.TrustedSignalsCompressionScheme = {
};

// Struct: TrustedSignalsCacheKey
auction_worklet.mojom.TrustedSignalsCacheKey = class {
  constructor(values = {}) {
    this.compression_group_token = values.compression_group_token !== undefined ? values.compression_group_token : null;
    this.fetched = values.fetched !== undefined ? values.fetched : null;
    this.decoded = values.decoded !== undefined ? values.decoded : null;
    this.partition_id = values.partition_id !== undefined ? values.partition_id : 0;
  }
};

// Interface: TrustedSignalsCacheClient
auction_worklet.mojom.TrustedSignalsCacheClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.TrustedSignalsCacheClient';
  }

  onSuccess(compression_scheme, compression_group_data) {
    // Method: OnSuccess
    // Call: OnSuccess(compression_scheme, compression_group_data)
  }

  onError(error_message) {
    // Method: OnError
    // Call: OnError(error_message)
  }

};

auction_worklet.mojom.TrustedSignalsCacheClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TrustedSignalsCache
auction_worklet.mojom.TrustedSignalsCachePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.TrustedSignalsCache';
  }

  getTrustedSignals(compression_group_token, client) {
    // Method: GetTrustedSignals
    // Call: GetTrustedSignals(compression_group_token, client)
  }

};

auction_worklet.mojom.TrustedSignalsCacheRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
