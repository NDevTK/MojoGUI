// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/interfaces/bindings/native_struct.mojom
// Module: mojo.native

'use strict';

// Module namespace
var mojo = mojo || {};
mojo.native = mojo.native || {};


// Enum: SerializedHandleType
mojo.native.SerializedHandleType = {
  MOJO_HANDLE: 0,
  PLATFORM_FILE: 1,
  WIN_HANDLE: 2,
  MACH_PORT: 3,
  FUCHSIA_HANDLE: 4,
};
mojo.native.SerializedHandleTypeSpec = { $: mojo.internal.Enum() };

// Struct: SerializedHandle
mojo.native.SerializedHandleSpec = {
  $: {
    structSpec: {
      name: 'mojo.native.SerializedHandle',
      packedSize: 16,
      fields: [
        { name: 'the_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 4, packedBitOffset: 0, type: mojo.native.SerializedHandleTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NativeStruct
mojo.native.NativeStructSpec = {
  $: {
    structSpec: {
      name: 'mojo.native.NativeStruct',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'handles', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.native.SerializedHandleSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
