// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/first_party_sets.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: SiteType
network.mojom.SiteType = {
  kPrimary: 0,
  kAssociated: 1,
  kService: 2,
};

// Struct: FirstPartySetEntry
network.mojom.FirstPartySetEntrySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetEntry',
      packedSize: 16,
      fields: [
        { name: 'site_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FirstPartySetMetadata
network.mojom.FirstPartySetMetadataSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetMetadata',
      packedSize: 16,
      fields: [
        { name: 'top_frame_entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FirstPartySetEntryOverride
network.mojom.FirstPartySetEntryOverrideSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetEntryOverride',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FirstPartySetsContextConfig
network.mojom.FirstPartySetsContextConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetsContextConfig',
      packedSize: 16,
      fields: [
        { name: 'aliases', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FirstPartySetsCacheFilter
network.mojom.FirstPartySetsCacheFilterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetsCacheFilter',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GlobalFirstPartySets
network.mojom.GlobalFirstPartySetsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.GlobalFirstPartySets',
      packedSize: 16,
      fields: [
        { name: 'manual_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
