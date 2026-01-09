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
        { name: 'request_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'top_frame_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'frame_origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'nonce', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'site_for_cookies', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'network_isolation_partition', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_ancestor_relation', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
