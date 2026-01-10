// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/code_injection.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};
var url = url || {};


// Enum: Operation
extensions.mojom.mojom.Operation = {
  kAdd: 0,
  kRemove: 1,
};
extensions.mojom.mojom.OperationSpec = { $: mojo.internal.Enum() };

// Union: CodeInjection
extensions.mojom.mojom.CodeInjectionSpec = { $: mojo.internal.Union(
    'extensions.mojom.CodeInjection', {
      'css': {
        'ordinal': 0,
        'type': extensions.mojom.CSSInjectionSpec,
      }},
      'js': {
        'ordinal': 1,
        'type': extensions.mojom.JSInjectionSpec,
      }},
    })
};

// Struct: JSSource
extensions.mojom.mojom.JSSourceSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.JSSource',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'script_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CSSSource
extensions.mojom.mojom.CSSSourceSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.CSSSource',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: JSInjection
extensions.mojom.mojom.JSInjectionSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.JSInjection',
      packedSize: 40,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(extensions.mojom.JSSourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'world', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.ExecutionWorldSpec, nullable: false, minVersion: 0 },
        { name: 'world_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'wants_result', packedOffset: 20, packedBitOffset: 0, type: blink.mojom.WantResultOptionSpec, nullable: false, minVersion: 0 },
        { name: 'user_gesture', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.UserActivationOptionSpec, nullable: false, minVersion: 0 },
        { name: 'wait_for_promise', packedOffset: 28, packedBitOffset: 0, type: blink.mojom.PromiseResultOptionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CSSInjection
extensions.mojom.mojom.CSSInjectionSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.CSSInjection',
      packedSize: 16,
      fields: [
        { name: 'kAdd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
