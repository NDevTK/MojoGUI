// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_completion_status.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: BlockedByResponseReasonWrapper
network.mojom.BlockedByResponseReasonWrapperSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.BlockedByResponseReasonWrapper',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLLoaderCompletionStatus
network.mojom.URLLoaderCompletionStatusSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderCompletionStatus',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
