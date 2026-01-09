// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/fetch_retry_options.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: FetchRetryOptions
network.mojom.FetchRetryOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FetchRetryOptions',
      packedSize: 48,
      fields: [
        { name: 'initial_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'backoff_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
        { name: 'max_age', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'max_attempts', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'retry_after_unload', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'retry_non_idempotent', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'retry_only_if_server_unreached', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
