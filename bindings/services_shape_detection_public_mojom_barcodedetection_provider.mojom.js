// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/barcodedetection_provider.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Interface: BarcodeDetectionProvider
shape_detection.mojom.BarcodeDetectionProvider = {};

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
      shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec.$,
      null,
      [receiver, options]);
  }

  enumerateSupportedFormats() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec.$,
      shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for CreateBarcodeDetection
shape_detection.mojom.BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.BarcodeDetectionProvider.CreateBarcodeDetection_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnumerateSupportedFormats
shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.BarcodeDetectionProvider.EnumerateSupportedFormats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

shape_detection.mojom.BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.BarcodeDetectionProvider.EnumerateSupportedFormats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported_formats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
shape_detection.mojom.BarcodeDetectionProviderPtr = shape_detection.mojom.BarcodeDetectionProviderRemote;
shape_detection.mojom.BarcodeDetectionProviderRequest = shape_detection.mojom.BarcodeDetectionProviderPendingReceiver;

