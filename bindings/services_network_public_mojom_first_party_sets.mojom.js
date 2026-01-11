// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/first_party_sets.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.SiteTypeSpec = { $: mojo.internal.Enum() };
network.mojom.FirstPartySetEntrySpec = { $: {} };
network.mojom.FirstPartySetMetadataSpec = { $: {} };
network.mojom.FirstPartySetEntryOverrideSpec = { $: {} };
network.mojom.FirstPartySetsContextConfigSpec = { $: {} };
network.mojom.FirstPartySetsCacheFilterSpec = { $: {} };
network.mojom.GlobalFirstPartySetsSpec = { $: {} };

// Enum: SiteType
network.mojom.SiteType = {
  kPrimary: 0,
  kAssociated: 1,
  kService: 2,
};

// Struct: FirstPartySetEntry
mojo.internal.Struct(
    network.mojom.FirstPartySetEntrySpec, 'network.mojom.FirstPartySetEntry', [
      mojo.internal.StructField('primary', 0, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_type', 8, 0, network.mojom.SiteTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FirstPartySetMetadata
mojo.internal.Struct(
    network.mojom.FirstPartySetMetadataSpec, 'network.mojom.FirstPartySetMetadata', [
      mojo.internal.StructField('frame_entry', 0, 0, network.mojom.FirstPartySetEntrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('top_frame_entry', 8, 0, network.mojom.FirstPartySetEntrySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FirstPartySetEntryOverride
mojo.internal.Struct(
    network.mojom.FirstPartySetEntryOverrideSpec, 'network.mojom.FirstPartySetEntryOverride', [
      mojo.internal.StructField('entry', 0, 0, network.mojom.FirstPartySetEntrySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FirstPartySetsContextConfig
mojo.internal.Struct(
    network.mojom.FirstPartySetsContextConfigSpec, 'network.mojom.FirstPartySetsContextConfig', [
      mojo.internal.StructField('customizations', 0, 0, mojo.internal.Map(network.mojom.SchemefulSiteSpec.$, network.mojom.FirstPartySetEntryOverrideSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('aliases', 8, 0, mojo.internal.Map(network.mojom.SchemefulSiteSpec.$, network.mojom.SchemefulSiteSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FirstPartySetsCacheFilter
mojo.internal.Struct(
    network.mojom.FirstPartySetsCacheFilterSpec, 'network.mojom.FirstPartySetsCacheFilter', [
      mojo.internal.StructField('filter', 0, 0, mojo.internal.Map(network.mojom.SchemefulSiteSpec.$, mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('browser_run_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GlobalFirstPartySets
mojo.internal.Struct(
    network.mojom.GlobalFirstPartySetsSpec, 'network.mojom.GlobalFirstPartySets', [
      mojo.internal.StructField('public_sets_version', 0, 0, mojo_base.mojom.VersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sets', 8, 0, mojo.internal.Map(network.mojom.SchemefulSiteSpec.$, network.mojom.FirstPartySetEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('aliases', 16, 0, mojo.internal.Map(network.mojom.SchemefulSiteSpec.$, network.mojom.SchemefulSiteSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('manual_config', 24, 0, network.mojom.FirstPartySetsContextConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
