// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/isolation_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: IsolationInfoRequestType
network.mojom.IsolationInfoRequestType = {
  kMainFrame: 0,
  kSubFrame: 1,
  kOther: 2,
};
network.mojom.IsolationInfoRequestTypeSpec = { $: mojo.internal.Enum() };

// Enum: IsolationInfoFrameAncestorRelation
network.mojom.IsolationInfoFrameAncestorRelation = {
  kSameOrigin: 0,
  kSameSite: 1,
  kCrossSite: 2,
};
network.mojom.IsolationInfoFrameAncestorRelationSpec = { $: mojo.internal.Enum() };

// Struct: IsolationInfo
network.mojom.IsolationInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IsolationInfo',
      packedSize: 56,
      fields: [
        { name: 'request_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IsolationInfoRequestTypeSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'nonce', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 32, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'network_isolation_partition', packedOffset: 4, packedBitOffset: 0, type: network.mojom.NetworkIsolationPartitionSpec, nullable: false, minVersion: 0 },
        { name: 'frame_ancestor_relation', packedOffset: 40, packedBitOffset: 0, type: network.mojom.IsolationInfoFrameAncestorRelationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
