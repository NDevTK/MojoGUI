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
      packedSize: 24,
      fields: [
        { name: 'interest_group_owner', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'interest_group_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'urn', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FencedFrameConfigSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false },
        { name: 'budget_to_charge', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'top_navigated', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'parsed_permissions_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
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
      packedSize: 96,
      fields: [
        { name: 'mapped_url', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueURLSpec, nullable: true },
        { name: 'container_size', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true },
        { name: 'content_size', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true },
        { name: 'deprecated_should_freeze_initial_size', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueBoolSpec, nullable: true },
        { name: 'ad_auction_data', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueAdAuctionDataSpec, nullable: true },
        { name: 'nested_configs', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueConfigVectorSpec, nullable: true },
        { name: 'shared_storage_budget_metadata', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec, nullable: true },
        { name: 'urn_uuid', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'mode', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.DeprecatedFencedFrameModeSpec, nullable: false },
        { name: 'effective_enabled_permissions', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'parent_permissions_info', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.ParentPermissionsInfoSpec, nullable: true },
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
      packedSize: 96,
      fields: [
        { name: 'mapped_url', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueURLSpec, nullable: true },
        { name: 'container_size', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true },
        { name: 'content_size', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true },
        { name: 'deprecated_should_freeze_initial_size', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueBoolSpec, nullable: true },
        { name: 'ad_auction_data', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueAdAuctionDataSpec, nullable: true },
        { name: 'nested_urn_config_pairs', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueURNConfigVectorSpec, nullable: true },
        { name: 'shared_storage_budget_metadata', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec, nullable: true },
        { name: 'mode', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.DeprecatedFencedFrameModeSpec, nullable: false },
        { name: 'effective_enabled_permissions', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'parent_permissions_info', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.ParentPermissionsInfoSpec, nullable: true },
        { name: 'can_disable_untrusted_network', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_cross_origin_content', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_cross_origin_event_reporting', packedOffset: 80, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
