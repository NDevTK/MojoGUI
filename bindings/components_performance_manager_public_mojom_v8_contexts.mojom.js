// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/v8_contexts.mojom
// Module: performance_manager.mojom

'use strict';

// Module namespace
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};
var blink = blink || {};


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
performance_manager.mojom.V8ContextWorldTypeSpec = { $: mojo.internal.Enum() };

// Struct: IframeAttributionData
performance_manager.mojom.IframeAttributionDataSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.IframeAttributionData',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'src', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: V8ContextDescription
performance_manager.mojom.V8ContextDescriptionSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.V8ContextDescription',
      packedSize: 48,
      fields: [
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.V8ContextTokenSpec, nullable: false, minVersion: 0 },
        { name: 'world_type', packedOffset: 32, packedBitOffset: 0, type: performance_manager.mojom.V8ContextWorldTypeSpec, nullable: false, minVersion: 0 },
        { name: 'world_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'execution_context_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ExecutionContextTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
