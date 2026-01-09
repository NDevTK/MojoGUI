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
