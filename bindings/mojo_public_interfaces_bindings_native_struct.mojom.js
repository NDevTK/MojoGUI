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

// Struct: SerializedHandle
mojo.native.SerializedHandleSpec = {
  $: {
    structSpec: {
      name: 'mojo.native.SerializedHandle',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NativeStruct
mojo.native.NativeStructSpec = {
  $: {
    structSpec: {
      name: 'mojo.native.NativeStruct',
      packedSize: 16,
      fields: [
        { name: 'handles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
