// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fenced_frame/fenced_frame_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ReportingDestination
blink.mojom.ReportingDestination = {
  kBuyer: 0,
  kSeller: 1,
  kComponentSeller: 2,
  kSharedStorageSelectUrl: 3,
  kDirectSeller: 4,
};

// Enum: DeprecatedFencedFrameMode
blink.mojom.DeprecatedFencedFrameMode = {
  kDefault: 0,
  kOpaqueAds: 1,
};

// Enum: Opaque
blink.mojom.Opaque = {
  kOpaque: 0,
};

// Enum: AutomaticBeaconType
blink.mojom.AutomaticBeaconType = {
  kDeprecatedTopNavigation: 0,
  kTopNavigationStart: 1,
  kTopNavigationCommit: 2,
};

// Struct: AdAuctionData
blink.mojom.AdAuctionDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionData',
      packedSize: 16,
      fields: [
        { name: 'interest_group_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URNConfigPair
blink.mojom.URNConfigPairSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.URNConfigPair',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedStorageBudgetMetadata
blink.mojom.SharedStorageBudgetMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageBudgetMetadata',
      packedSize: 16,
      fields: [
        { name: 'top_navigated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ParentPermissionsInfo
blink.mojom.ParentPermissionsInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ParentPermissionsInfo',
      packedSize: 16,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FencedFrameConfig
blink.mojom.FencedFrameConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FencedFrameConfig',
      packedSize: 16,
      fields: [
        { name: 'parent_permissions_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FencedFrameProperties
blink.mojom.FencedFramePropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FencedFrameProperties',
      packedSize: 16,
      fields: [
        { name: 'allow_cross_origin_event_reporting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
