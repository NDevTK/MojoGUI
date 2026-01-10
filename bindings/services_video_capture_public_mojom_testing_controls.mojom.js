// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/testing_controls.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};

video_capture.mojom.TestingControls = {};
video_capture.mojom.TestingControls.$interfaceName = 'video_capture.mojom.TestingControls';
video_capture.mojom.TestingControls_Crash_ParamsSpec = { $: {} };

// Interface: TestingControls
mojo.internal.Struct(
    video_capture.mojom.TestingControls_Crash_ParamsSpec, 'video_capture.mojom.TestingControls_Crash_Params', [
    ],
    [[0, 8]]);

video_capture.mojom.TestingControlsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.TestingControlsRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.TestingControls';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.TestingControlsPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.TestingControlsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.TestingControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  crash() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.TestingControls_Crash_ParamsSpec,
      null,
      [],
      false);
  }

};

video_capture.mojom.TestingControls.getRemote = function() {
  let remote = new video_capture.mojom.TestingControlsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.TestingControls',
    'context');
  return remote.$;
};

video_capture.mojom.TestingControlsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Crash
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.TestingControls_Crash_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Crash (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.TestingControls_Crash_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.crash');
          const result = this.impl.crash();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.TestingControlsReceiver = video_capture.mojom.TestingControlsReceiver;

video_capture.mojom.TestingControlsPtr = video_capture.mojom.TestingControlsRemote;
video_capture.mojom.TestingControlsRequest = video_capture.mojom.TestingControlsPendingReceiver;

