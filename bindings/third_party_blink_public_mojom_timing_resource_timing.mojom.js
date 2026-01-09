// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/timing/resource_timing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: CacheState
blink.mojom.CacheState = {
  kNone: 0,
  kLocal: 1,
  kValidated: 2,
};

// Struct: ServerTimingInfo
blink.mojom.ServerTimingInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServerTimingInfo',
      packedSize: 16,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResourceTimingInfo
blink.mojom.ResourceTimingInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceTimingInfo',
      packedSize: 16,
      fields: [
        { name: 'service_worker_response_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
