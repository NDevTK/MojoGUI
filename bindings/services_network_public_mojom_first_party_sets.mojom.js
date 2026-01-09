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
      packedSize: 24,
      fields: [
        { name: 'primary', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'site_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SiteTypeSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'frame_entry', packedOffset: 0, packedBitOffset: 0, type: network.mojom.FirstPartySetEntrySpec, nullable: true },
        { name: 'top_frame_entry', packedOffset: 8, packedBitOffset: 0, type: network.mojom.FirstPartySetEntrySpec, nullable: true },
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
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: network.mojom.FirstPartySetEntrySpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'customizations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'aliases', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'browser_run_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'public_sets_version', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.VersionSpec, nullable: false },
        { name: 'sets', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'aliases', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'manual_config', packedOffset: 24, packedBitOffset: 0, type: network.mojom.FirstPartySetsContextConfigSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
