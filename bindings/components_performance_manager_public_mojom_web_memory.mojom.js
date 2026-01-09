// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/web_memory.mojom
// Module: performance_manager.mojom

'use strict';

// Module namespace
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};


// Enum: Scope
performance_manager.mojom.Scope = {
  kCrossOriginAggregated: 0,
  kWindow: 1,
  kDedicatedWorker: 2,
  kServiceWorker: 3,
  kSharedWorker: 4,
};

// Enum: Mode
performance_manager.mojom.Mode = {
  kDefault: 0,
  kEager: 1,
};

// Struct: WebMemoryAttribution
performance_manager.mojom.WebMemoryAttributionSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.WebMemoryAttribution',
      packedSize: 16,
      fields: [
        { name: 'kCrossOriginAggregated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebMemoryBreakdownEntry
performance_manager.mojom.WebMemoryBreakdownEntrySpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.WebMemoryBreakdownEntry',
      packedSize: 16,
      fields: [
        { name: 'attribution', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebMemoryMeasurement
performance_manager.mojom.WebMemoryMeasurementSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.WebMemoryMeasurement',
      packedSize: 16,
      fields: [
        { name: 'kDefault', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
