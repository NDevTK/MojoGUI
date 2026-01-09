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

// Enum: IsolationInfoFrameAncestorRelation
network.mojom.IsolationInfoFrameAncestorRelation = {
  kSameOrigin: 0,
  kSameSite: 1,
  kCrossSite: 2,
};

// Struct: IsolationInfo
network.mojom.IsolationInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IsolationInfo',
      packedSize: 64,
      fields: [
        { name: 'request_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IsolationInfoRequestTypeSpec, nullable: false },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'frame_origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'nonce', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'site_for_cookies', packedOffset: 40, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false },
        { name: 'network_isolation_partition', packedOffset: 48, packedBitOffset: 0, type: network.mojom.NetworkIsolationPartitionSpec, nullable: false },
        { name: 'frame_ancestor_relation', packedOffset: 56, packedBitOffset: 0, type: network.mojom.IsolationInfoFrameAncestorRelationSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
