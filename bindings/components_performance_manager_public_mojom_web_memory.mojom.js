// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/web_memory.mojom
// Module: performance_manager.mojom

'use strict';

// Module namespace
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};

performance_manager.mojom.ScopeSpec = { $: mojo.internal.Enum() };
performance_manager.mojom.ModeSpec = { $: mojo.internal.Enum() };
performance_manager.mojom.WebMemoryAttributionSpec = { $: {} };
performance_manager.mojom.WebMemoryBreakdownEntrySpec = { $: {} };
performance_manager.mojom.WebMemoryMeasurementSpec = { $: {} };

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
mojo.internal.Struct(
    performance_manager.mojom.WebMemoryAttributionSpec, 'performance_manager.mojom.WebMemoryAttribution', [
      mojo.internal.StructField('kCrossOriginAggregated', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebMemoryBreakdownEntry
mojo.internal.Struct(
    performance_manager.mojom.WebMemoryBreakdownEntrySpec, 'performance_manager.mojom.WebMemoryBreakdownEntry', [
      mojo.internal.StructField('memory', 0, 0, mojo_base.mojom.ByteSizeSpec, null, true, 0, undefined),
      mojo.internal.StructField('canvas_memory', 8, 0, mojo_base.mojom.ByteSizeSpec, null, true, 0, undefined),
      mojo.internal.StructField('attribution', 16, 0, mojo.internal.Array(performance_manager.mojom.WebMemoryAttributionSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebMemoryMeasurement
mojo.internal.Struct(
    performance_manager.mojom.WebMemoryMeasurementSpec, 'performance_manager.mojom.WebMemoryMeasurement', [
      mojo.internal.StructField('kDefault', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
