// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/proto_wrapper.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.ProtoWrapperSpec = { $: {} };

// Struct: ProtoWrapper
mojo.internal.Struct(
    mojo_base.mojom.ProtoWrapperSpec, 'mojo_base.mojom.ProtoWrapper', [
      mojo.internal.StructField('proto_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('smuggled', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
