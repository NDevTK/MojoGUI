// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/barcodedetection_provider.mojom
// Module: shape_detection.mojom

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};

shape_detection.mojom.BarcodeDetectorOptionsSpec = { $: {} };
shape_detection.mojom.BarcodeDetectionProvider = {};
shape_detection.mojom.BarcodeDetectionProvider.$interfaceName = 'shape_detection.mojom.BarcodeDetectionProvider';
shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec = { $: {} };
shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec = { $: {} };
shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec = { $: {} };

// Struct: BarcodeDetectorOptions
mojo.internal.Struct(
    shape_detection.mojom.BarcodeDetectorOptionsSpec, 'shape_detection.mojom.BarcodeDetectorOptions', [
      mojo.internal.StructField('formats', 0, 0, mojo.internal.Array(shape_detection.mojom.BarcodeFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: BarcodeDetectionProvider
mojo.internal.Struct(
    shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec, 'shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(shape_detection.mojom.BarcodeDetectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, shape_detection.mojom.BarcodeDetectorOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec, 'shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec, 'shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams', [
      mojo.internal.StructField('supported_formats', 0, 0, mojo.internal.Array(shape_detection.mojom.BarcodeFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

shape_detection.mojom.BarcodeDetectionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.BarcodeDetectionProviderRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.BarcodeDetectionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.BarcodeDetectionProviderPendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.BarcodeDetectionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createBarcodeDetection(receiver, options) {
    return this.$.createBarcodeDetection(receiver, options);
  }
  enumerateSupportedFormats() {
    return this.$.enumerateSupportedFormats();
  }
};

shape_detection.mojom.BarcodeDetectionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BarcodeDetectionProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createBarcodeDetection(receiver, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec,
      null,
      [receiver, options],
      false);
  }

  enumerateSupportedFormats() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec,
      shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec,
      [],
      false);
  }

};

shape_detection.mojom.BarcodeDetectionProvider.getRemote = function() {
  let remote = new shape_detection.mojom.BarcodeDetectionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.BarcodeDetectionProvider',
    'context');
  return remote.$;
};

shape_detection.mojom.BarcodeDetectionProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BarcodeDetectionProvider', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec.$.structSpec);
          const result = this.impl.createBarcodeDetection(params.receiver, params.options);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec.$.structSpec);
          const result = this.impl.enumerateSupportedFormats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

shape_detection.mojom.BarcodeDetectionProviderReceiver = shape_detection.mojom.BarcodeDetectionProviderReceiver;

shape_detection.mojom.BarcodeDetectionProviderPtr = shape_detection.mojom.BarcodeDetectionProviderRemote;
shape_detection.mojom.BarcodeDetectionProviderRequest = shape_detection.mojom.BarcodeDetectionProviderPendingReceiver;

