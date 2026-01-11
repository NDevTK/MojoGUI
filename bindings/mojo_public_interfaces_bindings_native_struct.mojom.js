// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/interfaces/bindings/native_struct.mojom
// Module: mojo.native

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo = mojo || {};
mojo.native = mojo.native || {};

mojo.native.SerializedHandleTypeSpec = { $: mojo.internal.Enum() };
mojo.native.SerializedHandleSpec = { $: {} };
mojo.native.NativeStructSpec = { $: {} };

// Enum: SerializedHandleType
mojo.native.SerializedHandleType = {
  MOJO_HANDLE: 0,
  PLATFORM_FILE: 1,
  WIN_HANDLE: 2,
  MACH_PORT: 3,
  FUCHSIA_HANDLE: 4,
};

// Struct: SerializedHandle
mojo.internal.Struct(
    mojo.native.SerializedHandleSpec, 'mojo.native.SerializedHandle', [
      mojo.internal.StructField('type', 0, 0, mojo.native.SerializedHandleTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('the_handle', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NativeStruct
mojo.internal.Struct(
    mojo.native.NativeStructSpec, 'mojo.native.NativeStruct', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('handles', 8, 0, mojo.internal.Array(mojo.native.SerializedHandleSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);
