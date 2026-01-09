// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/user_agent/user_agent_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: UserAgentBrandVersion
blink.mojom.UserAgentBrandVersionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserAgentBrandVersion',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserAgentMetadata
blink.mojom.UserAgentMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserAgentMetadata',
      packedSize: 16,
      fields: [
        { name: 'form_factors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserAgentOverride
blink.mojom.UserAgentOverrideSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserAgentOverride',
      packedSize: 16,
      fields: [
        { name: 'ua_metadata_override', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
