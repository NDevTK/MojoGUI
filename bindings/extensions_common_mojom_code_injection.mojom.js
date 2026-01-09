// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/code_injection.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Enum: Operation
extensions.mojom.Operation = {
  kAdd: 0,
  kRemove: 1,
};

// Struct: JSSource
extensions.mojom.JSSourceSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.JSSource',
      packedSize: 16,
      fields: [
        { name: 'script_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSSSource
extensions.mojom.CSSSourceSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.CSSSource',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: JSInjection
extensions.mojom.JSInjectionSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.JSInjection',
      packedSize: 16,
      fields: [
        { name: 'wait_for_promise', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSSInjection
extensions.mojom.CSSInjectionSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.CSSInjection',
      packedSize: 16,
      fields: [
        { name: 'kAdd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
