// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/isolation_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var url = url || {};

network.mojom.IsolationInfoRequestTypeSpec = { $: mojo.internal.Enum() };
network.mojom.IsolationInfoFrameAncestorRelationSpec = { $: mojo.internal.Enum() };
network.mojom.IsolationInfoSpec = { $: {} };

// Enum: IsolationInfoRequestType
network.mojom.IsolationInfoRequestType = {
  kMainFrame: 0,
  kSubFrame: 1,
  kOther: 2,
};

// Enum: IsolationInfoFrameAncestorRelation
network.mojom.IsolationInfoFrameAncestorRelation = {
  kSameOrigin: 0,
  kSameSite: 1,
  kCrossSite: 2,
};

// Struct: IsolationInfo
mojo.internal.Struct(
    network.mojom.IsolationInfoSpec, 'network.mojom.IsolationInfo', [
      mojo.internal.StructField('request_type', 0, 0, network.mojom.IsolationInfoRequestTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame_origin', 16, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('nonce', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 32, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_isolation_partition', 40, 0, network.mojom.NetworkIsolationPartitionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_ancestor_relation', 48, 0, network.mojom.IsolationInfoFrameAncestorRelationSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);
