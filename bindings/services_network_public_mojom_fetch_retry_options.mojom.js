// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/fetch_retry_options.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.FetchRetryOptionsSpec = { $: {} };

// Struct: FetchRetryOptions
mojo.internal.Struct(
    network.mojom.FetchRetryOptionsSpec, 'network.mojom.FetchRetryOptions', [
      mojo.internal.StructField('max_attempts', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('initial_delay', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('backoff_factor_$flag', 28, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'backoff_factor_$value', originalFieldName: 'backoff_factor' }),
      mojo.internal.StructField('backoff_factor_$value', 8, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'backoff_factor_$flag', originalFieldName: 'backoff_factor' }),
      mojo.internal.StructField('max_age', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('retry_after_unload', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('retry_non_idempotent', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('retry_only_if_server_unreached', 28, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
