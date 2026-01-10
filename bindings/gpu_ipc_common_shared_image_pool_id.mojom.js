// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_pool_id.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var mojo_base = mojo_base || {};

gpu.mojom.SharedImagePoolIdSpec = { $: {} };

// Struct: SharedImagePoolId
mojo.internal.Struct(
    gpu.mojom.SharedImagePoolIdSpec, 'gpu.mojom.SharedImagePoolId', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);
