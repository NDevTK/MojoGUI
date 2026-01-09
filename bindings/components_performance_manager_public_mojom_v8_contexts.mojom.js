// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/v8_contexts.mojom
// Module: performance_manager.mojom

'use strict';

// Module namespace
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};


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
performance_manager.mojom.IframeAttributionDataSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.IframeAttributionData',
      packedSize: 16,
      fields: [
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: V8ContextDescription
performance_manager.mojom.V8ContextDescriptionSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.V8ContextDescription',
      packedSize: 16,
      fields: [
        { name: 'execution_context_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
