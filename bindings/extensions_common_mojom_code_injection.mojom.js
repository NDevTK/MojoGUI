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
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'script_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
      packedSize: 56,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'world', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'world_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wants_result', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.WantResultOptionSpec, nullable: false },
        { name: 'user_gesture', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.UserActivationOptionSpec, nullable: false },
        { name: 'wait_for_promise', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.PromiseResultOptionSpec, nullable: false },
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
