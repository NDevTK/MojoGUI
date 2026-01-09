// Auto-generated MojoJS binding
// Source: chromium_src/content/utility/sandbox_delegate_data.mojom
// Module: content.mojom.sandbox

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
content.mojom.sandbox = content.mojom.sandbox || {};


// Struct: UtilityConfig
content.mojom.sandbox.UtilityConfigSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.sandbox.UtilityConfig',
      packedSize: 24,
      fields: [
        { name: 'preload_libraries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bootstrap_event_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
