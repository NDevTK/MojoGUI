// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/user_agent/user_agent_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: UserAgentBrandVersion
blink.mojom.mojom.UserAgentBrandVersionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserAgentBrandVersion',
      packedSize: 24,
      fields: [
        { name: 'brand', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UserAgentMetadata
blink.mojom.mojom.UserAgentMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserAgentMetadata',
      packedSize: 88,
      fields: [
        { name: 'brand_version_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.UserAgentBrandVersionSpec, false), nullable: false, minVersion: 0 },
        { name: 'brand_full_version_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.UserAgentBrandVersionSpec, false), nullable: false, minVersion: 0 },
        { name: 'full_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'platform', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'platform_version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'architecture', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'model', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mobile', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bitness', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'wow64', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'form_factors', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: UserAgentOverride
blink.mojom.mojom.UserAgentOverrideSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserAgentOverride',
      packedSize: 24,
      fields: [
        { name: 'ua_string_override', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'ua_metadata_override', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.UserAgentMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
