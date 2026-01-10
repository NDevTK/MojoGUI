// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/barcodedetection_provider.mojom
// Module: shape_detection.mojom

'use strict';

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
};

shape_detection.mojom.BarcodeDetectionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBarcodeDetection(receiver, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec,
      null,
      [receiver, options],
      false);
  }

  enumerateSupportedFormats() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createBarcodeDetection(params.receiver, params.options);
          break;
        }
        case 1: {
          const params = shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec.$.decode(message.payload);
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
      }
    }});
  }
};

shape_detection.mojom.BarcodeDetectionProviderReceiver = shape_detection.mojom.BarcodeDetectionProviderReceiver;

shape_detection.mojom.BarcodeDetectionProviderPtr = shape_detection.mojom.BarcodeDetectionProviderRemote;
shape_detection.mojom.BarcodeDetectionProviderRequest = shape_detection.mojom.BarcodeDetectionProviderPendingReceiver;

