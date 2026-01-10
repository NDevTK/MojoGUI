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
      packedSize: 40,
      fields: [
        { name: 'max_attempts', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'initial_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'backoff_factor_$flag', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'backoff_factor_$value', originalFieldName: 'backoff_factor' } },
        { name: 'backoff_factor_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'backoff_factor_$flag', originalFieldName: 'backoff_factor' } },
        { name: 'max_age', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'retry_after_unload', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'retry_non_idempotent', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'retry_only_if_server_unreached', packedOffset: 28, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
