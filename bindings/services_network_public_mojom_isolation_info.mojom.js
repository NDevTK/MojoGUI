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
