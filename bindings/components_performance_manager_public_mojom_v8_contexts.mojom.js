// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/v8_contexts.mojom
// Module: performance_manager.mojom

'use strict';

// Module namespace
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};
var blink = blink || {};

performance_manager.mojom.V8ContextWorldTypeSpec = { $: mojo.internal.Enum() };
performance_manager.mojom.IframeAttributionDataSpec = { $: {} };
performance_manager.mojom.V8ContextDescriptionSpec = { $: {} };

// Enum: V8ContextWorldType
performance_manager.mojom.V8ContextWorldType = {
  kMain: 0,
  kWorkerOrWorklet: 1,
  kShadowRealm: 2,
  kExtension: 3,
  kIsolated: 4,
  kInspector: 5,
  kRegExp: 6,
};

// Struct: IframeAttributionData
mojo.internal.Struct(
    performance_manager.mojom.IframeAttributionDataSpec, 'performance_manager.mojom.IframeAttributionData', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('src', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: V8ContextDescription
mojo.internal.Struct(
    performance_manager.mojom.V8ContextDescriptionSpec, 'performance_manager.mojom.V8ContextDescription', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.V8ContextTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('world_type', 8, 0, performance_manager.mojom.V8ContextWorldTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('world_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('execution_context_token', 24, 0, blink.mojom.ExecutionContextTokenSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);
