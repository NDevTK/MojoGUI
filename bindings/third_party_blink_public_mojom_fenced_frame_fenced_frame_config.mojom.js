// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fenced_frame/fenced_frame_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var url = url || {};


// Enum: ReportingDestination
blink.mojom.mojom.ReportingDestination = {
  kBuyer: 0,
  kSeller: 1,
  kComponentSeller: 2,
  kSharedStorageSelectUrl: 3,
  kDirectSeller: 4,
};
blink.mojom.mojom.ReportingDestinationSpec = { $: mojo.internal.Enum() };

// Enum: DeprecatedFencedFrameMode
blink.mojom.mojom.DeprecatedFencedFrameMode = {
  kDefault: 0,
  kOpaqueAds: 1,
};
blink.mojom.mojom.DeprecatedFencedFrameModeSpec = { $: mojo.internal.Enum() };

// Enum: Opaque
blink.mojom.mojom.Opaque = {
  kOpaque: 0,
};
blink.mojom.mojom.OpaqueSpec = { $: mojo.internal.Enum() };

// Enum: AutomaticBeaconType
blink.mojom.mojom.AutomaticBeaconType = {
  kDeprecatedTopNavigation: 0,
  kTopNavigationStart: 1,
  kTopNavigationCommit: 2,
};
blink.mojom.mojom.AutomaticBeaconTypeSpec = { $: mojo.internal.Enum() };

// Union: PotentiallyOpaqueURL
blink.mojom.mojom.PotentiallyOpaqueURLSpec = { $: mojo.internal.Union(
    'blink.mojom.PotentiallyOpaqueURL', {
      'transparent': {
        'ordinal': 0,
        'type': url.mojom.UrlSpec,
      }},
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec,
      }},
    })
};

// Union: PotentiallyOpaqueSize
blink.mojom.mojom.PotentiallyOpaqueSizeSpec = { $: mojo.internal.Union(
    'blink.mojom.PotentiallyOpaqueSize', {
      'transparent': {
        'ordinal': 0,
        'type': gfx.mojom.SizeSpec,
      }},
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec,
      }},
    })
};

// Union: PotentiallyOpaqueBool
blink.mojom.mojom.PotentiallyOpaqueBoolSpec = { $: mojo.internal.Union(
    'blink.mojom.PotentiallyOpaqueBool', {
      'transparent': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec,
      }},
    })
};

// Union: PotentiallyOpaqueAdAuctionData
blink.mojom.mojom.PotentiallyOpaqueAdAuctionDataSpec = { $: mojo.internal.Union(
    'blink.mojom.PotentiallyOpaqueAdAuctionData', {
      'transparent': {
        'ordinal': 0,
        'type': blink.mojom.AdAuctionDataSpec,
      }},
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec,
      }},
    })
};

// Union: PotentiallyOpaqueConfigVector
blink.mojom.mojom.PotentiallyOpaqueConfigVectorSpec = { $: mojo.internal.Union(
    'blink.mojom.PotentiallyOpaqueConfigVector', {
      'transparent': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.FencedFrameConfigSpec, false),
      }},
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec,
      }},
    })
};

// Union: PotentiallyOpaqueURNConfigVector
blink.mojom.mojom.PotentiallyOpaqueURNConfigVectorSpec = { $: mojo.internal.Union(
    'blink.mojom.PotentiallyOpaqueURNConfigVector', {
      'transparent': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.URNConfigPairSpec, false),
      }},
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec,
      }},
    })
};

// Union: PotentiallyOpaqueSharedStorageBudgetMetadata
blink.mojom.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec = { $: mojo.internal.Union(
    'blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadata', {
      'transparent': {
        'ordinal': 0,
        'type': blink.mojom.SharedStorageBudgetMetadataSpec,
      }},
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec,
      }},
    })
};

// Struct: AdAuctionData
blink.mojom.mojom.AdAuctionDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionData',
      packedSize: 24,
      fields: [
        { name: 'interest_group_owner', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'interest_group_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: URNConfigPair
blink.mojom.mojom.URNConfigPairSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.URNConfigPair',
      packedSize: 24,
      fields: [
        { name: 'urn', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FencedFrameConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SharedStorageBudgetMetadata
blink.mojom.mojom.SharedStorageBudgetMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedStorageBudgetMetadata',
      packedSize: 32,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'budget_to_charge', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'top_navigated', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ParentPermissionsInfo
blink.mojom.mojom.ParentPermissionsInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ParentPermissionsInfo',
      packedSize: 24,
      fields: [
        { name: 'parsed_permissions_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FencedFrameConfig
blink.mojom.mojom.FencedFrameConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FencedFrameConfig',
      packedSize: 152,
      fields: [
        { name: 'mapped_url', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueURLSpec, nullable: true, minVersion: 0 },
        { name: 'container_size', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true, minVersion: 0 },
        { name: 'content_size', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true, minVersion: 0 },
        { name: 'deprecated_should_freeze_initial_size', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueBoolSpec, nullable: true, minVersion: 0 },
        { name: 'ad_auction_data', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueAdAuctionDataSpec, nullable: true, minVersion: 0 },
        { name: 'nested_configs', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueConfigVectorSpec, nullable: true, minVersion: 0 },
        { name: 'shared_storage_budget_metadata', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'urn_uuid', packedOffset: 112, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 136, packedBitOffset: 0, type: blink.mojom.DeprecatedFencedFrameModeSpec, nullable: false, minVersion: 0 },
        { name: 'effective_enabled_permissions', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.PermissionsPolicyFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'parent_permissions_info', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.ParentPermissionsInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 152}]
    }
  }
};

// Struct: FencedFrameProperties
blink.mojom.mojom.FencedFramePropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FencedFrameProperties',
      packedSize: 144,
      fields: [
        { name: 'mapped_url', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueURLSpec, nullable: true, minVersion: 0 },
        { name: 'container_size', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true, minVersion: 0 },
        { name: 'content_size', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSizeSpec, nullable: true, minVersion: 0 },
        { name: 'deprecated_should_freeze_initial_size', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueBoolSpec, nullable: true, minVersion: 0 },
        { name: 'ad_auction_data', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueAdAuctionDataSpec, nullable: true, minVersion: 0 },
        { name: 'nested_urn_config_pairs', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueURNConfigVectorSpec, nullable: true, minVersion: 0 },
        { name: 'shared_storage_budget_metadata', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'mode', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.DeprecatedFencedFrameModeSpec, nullable: false, minVersion: 0 },
        { name: 'effective_enabled_permissions', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.PermissionsPolicyFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'parent_permissions_info', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.ParentPermissionsInfoSpec, nullable: true, minVersion: 0 },
        { name: 'can_disable_untrusted_network', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_cross_origin_content', packedOffset: 132, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_cross_origin_event_reporting', packedOffset: 132, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 144}]
    }
  }
};
