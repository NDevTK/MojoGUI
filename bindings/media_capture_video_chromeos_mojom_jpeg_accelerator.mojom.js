// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/jpeg_accelerator.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Interface: JpegAcceleratorProvider
cros.mojom.mojom.JpegAcceleratorProvider = {};

cros.mojom.mojom.JpegAcceleratorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.JpegAcceleratorProviderRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.JpegAcceleratorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.JpegAcceleratorProviderPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.JpegAcceleratorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.JpegAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getJpegEncodeAccelerator(jea) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec,
      null,
      [jea]);
  }

  getMjpegDecodeAccelerator(jda) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec,
      null,
      [jda]);
  }

};

cros.mojom.mojom.JpegAcceleratorProvider.getRemote = function() {
  let remote = new cros.mojom.mojom.JpegAcceleratorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.JpegAcceleratorProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetJpegEncodeAccelerator
cros.mojom.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.JpegAcceleratorProvider.GetJpegEncodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jea', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMjpegDecodeAccelerator
cros.mojom.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.JpegAcceleratorProvider.GetMjpegDecodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jda', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.JpegAcceleratorProviderPtr = cros.mojom.mojom.JpegAcceleratorProviderRemote;
cros.mojom.mojom.JpegAcceleratorProviderRequest = cros.mojom.mojom.JpegAcceleratorProviderPendingReceiver;

