// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/leak_detector/leak_detector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: LeakDetectionResult
blink.mojom.LeakDetectionResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LeakDetectionResult',
      packedSize: 56,
      fields: [
        { name: 'number_of_live_audio_nodes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_documents', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_nodes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_layout_objects', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_resources', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_context_lifecycle_state_observers', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_frames', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_v8_per_context_data', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_worker_global_scopes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_ua_css_resources', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'number_of_live_resource_fetchers', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: LeakDetector
blink.mojom.LeakDetector = {};

blink.mojom.LeakDetectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LeakDetectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LeakDetector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LeakDetectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.LeakDetectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LeakDetectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  performLeakDetection() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LeakDetector_PerformLeakDetection_ParamsSpec,
      blink.mojom.LeakDetector_PerformLeakDetection_ResponseParamsSpec,
      []);
  }

};

blink.mojom.LeakDetector.getRemote = function() {
  let remote = new blink.mojom.LeakDetectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LeakDetector',
    'context');
  return remote.$;
};

// ParamsSpec for PerformLeakDetection
blink.mojom.LeakDetector_PerformLeakDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LeakDetector.PerformLeakDetection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.LeakDetector_PerformLeakDetection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LeakDetector.PerformLeakDetection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LeakDetectionResultSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LeakDetectorPtr = blink.mojom.LeakDetectorRemote;
blink.mojom.LeakDetectorRequest = blink.mojom.LeakDetectorPendingReceiver;

