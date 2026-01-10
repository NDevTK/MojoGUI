// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fenced_frame/fenced_frame_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.ReportingDestinationSpec = { $: mojo.internal.Enum() };
blink.mojom.DeprecatedFencedFrameModeSpec = { $: mojo.internal.Enum() };
blink.mojom.OpaqueSpec = { $: mojo.internal.Enum() };
blink.mojom.AutomaticBeaconTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.PotentiallyOpaqueURLSpec = { $: {} };
blink.mojom.PotentiallyOpaqueSizeSpec = { $: {} };
blink.mojom.PotentiallyOpaqueBoolSpec = { $: {} };
blink.mojom.PotentiallyOpaqueAdAuctionDataSpec = { $: {} };
blink.mojom.PotentiallyOpaqueConfigVectorSpec = { $: {} };
blink.mojom.PotentiallyOpaqueURNConfigVectorSpec = { $: {} };
blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec = { $: {} };
blink.mojom.AdAuctionDataSpec = { $: {} };
blink.mojom.URNConfigPairSpec = { $: {} };
blink.mojom.SharedStorageBudgetMetadataSpec = { $: {} };
blink.mojom.ParentPermissionsInfoSpec = { $: {} };
blink.mojom.FencedFrameConfigSpec = { $: {} };
blink.mojom.FencedFramePropertiesSpec = { $: {} };

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

// Union: PotentiallyOpaqueURL
mojo.internal.Union(
    blink.mojom.PotentiallyOpaqueURLSpec, 'blink.mojom.PotentiallyOpaqueURL', {
      'transparent': {
        'ordinal': 0,
        'type': url.mojom.UrlSpec.$,
        'nullable': false,
      },
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueSize
mojo.internal.Union(
    blink.mojom.PotentiallyOpaqueSizeSpec, 'blink.mojom.PotentiallyOpaqueSize', {
      'transparent': {
        'ordinal': 0,
        'type': gfx.mojom.SizeSpec.$,
        'nullable': false,
      },
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueBool
mojo.internal.Union(
    blink.mojom.PotentiallyOpaqueBoolSpec, 'blink.mojom.PotentiallyOpaqueBool', {
      'transparent': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueAdAuctionData
mojo.internal.Union(
    blink.mojom.PotentiallyOpaqueAdAuctionDataSpec, 'blink.mojom.PotentiallyOpaqueAdAuctionData', {
      'transparent': {
        'ordinal': 0,
        'type': blink.mojom.AdAuctionDataSpec.$,
        'nullable': false,
      },
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueConfigVector
mojo.internal.Union(
    blink.mojom.PotentiallyOpaqueConfigVectorSpec, 'blink.mojom.PotentiallyOpaqueConfigVector', {
      'transparent': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.FencedFrameConfigSpec.$, false),
        'nullable': false,
      },
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueURNConfigVector
mojo.internal.Union(
    blink.mojom.PotentiallyOpaqueURNConfigVectorSpec, 'blink.mojom.PotentiallyOpaqueURNConfigVector', {
      'transparent': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.URNConfigPairSpec.$, false),
        'nullable': false,
      },
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueSharedStorageBudgetMetadata
mojo.internal.Union(
    blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec, 'blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadata', {
      'transparent': {
        'ordinal': 0,
        'type': blink.mojom.SharedStorageBudgetMetadataSpec.$,
        'nullable': false,
      },
      'opaque': {
        'ordinal': 1,
        'type': blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Struct: AdAuctionData
mojo.internal.Struct(
    blink.mojom.AdAuctionDataSpec, 'blink.mojom.AdAuctionData', [
      mojo.internal.StructField('interest_group_owner', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interest_group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: URNConfigPair
mojo.internal.Struct(
    blink.mojom.URNConfigPairSpec, 'blink.mojom.URNConfigPair', [
      mojo.internal.StructField('urn', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, blink.mojom.FencedFrameConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedStorageBudgetMetadata
mojo.internal.Struct(
    blink.mojom.SharedStorageBudgetMetadataSpec, 'blink.mojom.SharedStorageBudgetMetadata', [
      mojo.internal.StructField('site', 0, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('budget_to_charge', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('top_navigated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ParentPermissionsInfo
mojo.internal.Struct(
    blink.mojom.ParentPermissionsInfoSpec, 'blink.mojom.ParentPermissionsInfo', [
      mojo.internal.StructField('parsed_permissions_policy', 0, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FencedFrameConfig
mojo.internal.Struct(
    blink.mojom.FencedFrameConfigSpec, 'blink.mojom.FencedFrameConfig', [
      mojo.internal.StructField('mapped_url', 0, 0, blink.mojom.PotentiallyOpaqueURLSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('container_size', 8, 0, blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_size', 16, 0, blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_should_freeze_initial_size', 24, 0, blink.mojom.PotentiallyOpaqueBoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ad_auction_data', 32, 0, blink.mojom.PotentiallyOpaqueAdAuctionDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('nested_configs', 40, 0, blink.mojom.PotentiallyOpaqueConfigVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shared_storage_budget_metadata', 48, 0, blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('urn_uuid', 56, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 64, 0, blink.mojom.DeprecatedFencedFrameModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('effective_enabled_permissions', 72, 0, mojo.internal.Array(network.mojom.PermissionsPolicyFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('parent_permissions_info', 80, 0, blink.mojom.ParentPermissionsInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: FencedFrameProperties
mojo.internal.Struct(
    blink.mojom.FencedFramePropertiesSpec, 'blink.mojom.FencedFrameProperties', [
      mojo.internal.StructField('mapped_url', 0, 0, blink.mojom.PotentiallyOpaqueURLSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('container_size', 8, 0, blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_size', 16, 0, blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_should_freeze_initial_size', 24, 0, blink.mojom.PotentiallyOpaqueBoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ad_auction_data', 32, 0, blink.mojom.PotentiallyOpaqueAdAuctionDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('nested_urn_config_pairs', 40, 0, blink.mojom.PotentiallyOpaqueURNConfigVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shared_storage_budget_metadata', 48, 0, blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mode', 56, 0, blink.mojom.DeprecatedFencedFrameModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('effective_enabled_permissions', 64, 0, mojo.internal.Array(network.mojom.PermissionsPolicyFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('parent_permissions_info', 72, 0, blink.mojom.ParentPermissionsInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('can_disable_untrusted_network', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_cross_origin_content', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cross_origin_event_reporting', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);
