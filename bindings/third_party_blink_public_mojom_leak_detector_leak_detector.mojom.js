// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/leak_detector/leak_detector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.LeakDetectorPtr = blink.mojom.LeakDetectorRemote;
blink.mojom.LeakDetectorRequest = blink.mojom.LeakDetectorPendingReceiver;

