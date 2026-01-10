// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/facedetection_provider.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};

shape_detection.mojom.FaceDetectionProvider = {};
shape_detection.mojom.FaceDetectionProvider.$interfaceName = 'shape_detection.mojom.FaceDetectionProvider';
shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec = { $: {} };

// Interface: FaceDetectionProvider
mojo.internal.Struct(
    shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec, 'shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(shape_detection.mojom.FaceDetectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, shape_detection.mojom.FaceDetectorOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

shape_detection.mojom.FaceDetectionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.FaceDetectionProviderRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.FaceDetectionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.FaceDetectionProviderPendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.FaceDetectionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shape_detection.mojom.FaceDetectionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFaceDetection(receiver, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec,
      null,
      [receiver, options],
      false);
  }

};

shape_detection.mojom.FaceDetectionProvider.getRemote = function() {
  let remote = new shape_detection.mojom.FaceDetectionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.FaceDetectionProvider',
    'context');
  return remote.$;
};

shape_detection.mojom.FaceDetectionProviderReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateFaceDetection
        try {
             decoder.decodeStruct(shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFaceDetection (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createFaceDetection');
          const result = this.impl.createFaceDetection(params.receiver, params.options);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

shape_detection.mojom.FaceDetectionProviderReceiver = shape_detection.mojom.FaceDetectionProviderReceiver;

shape_detection.mojom.FaceDetectionProviderPtr = shape_detection.mojom.FaceDetectionProviderRemote;
shape_detection.mojom.FaceDetectionProviderRequest = shape_detection.mojom.FaceDetectionProviderPendingReceiver;

