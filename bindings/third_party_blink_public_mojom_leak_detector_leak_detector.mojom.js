// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/leak_detector/leak_detector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.LeakDetectionResultSpec = { $: {} };
blink.mojom.LeakDetector = {};
blink.mojom.LeakDetector.$interfaceName = 'blink.mojom.LeakDetector';
blink.mojom.LeakDetector_PerformLeakDetection_ParamsSpec = { $: {} };
blink.mojom.LeakDetector_PerformLeakDetection_ResponseParamsSpec = { $: {} };

// Struct: LeakDetectionResult
mojo.internal.Struct(
    blink.mojom.LeakDetectionResultSpec, 'blink.mojom.LeakDetectionResult', [
      mojo.internal.StructField('number_of_live_audio_nodes', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_documents', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_nodes', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_layout_objects', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_resources', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_context_lifecycle_state_observers', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_frames', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_v8_per_context_data', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_worker_global_scopes', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_ua_css_resources', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_live_resource_fetchers', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: LeakDetector
mojo.internal.Struct(
    blink.mojom.LeakDetector_PerformLeakDetection_ParamsSpec, 'blink.mojom.LeakDetector_PerformLeakDetection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LeakDetector_PerformLeakDetection_ResponseParamsSpec, 'blink.mojom.LeakDetector_PerformLeakDetection_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.LeakDetectionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

blink.mojom.LeakDetectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.LeakDetector_PerformLeakDetection_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.performLeakDetection');
          const result = this.impl.performLeakDetection();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LeakDetector_PerformLeakDetection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.LeakDetectorReceiver = blink.mojom.LeakDetectorReceiver;

blink.mojom.LeakDetectorPtr = blink.mojom.LeakDetectorRemote;
blink.mojom.LeakDetectorRequest = blink.mojom.LeakDetectorPendingReceiver;

