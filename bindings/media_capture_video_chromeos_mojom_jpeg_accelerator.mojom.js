// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/jpeg_accelerator.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var components = components || {};
var components = components || {};

cros.mojom.JpegAcceleratorProvider = {};
cros.mojom.JpegAcceleratorProvider.$interfaceName = 'cros.mojom.JpegAcceleratorProvider';
cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec = { $: {} };
cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec = { $: {} };

// Interface: JpegAcceleratorProvider
mojo.internal.Struct(
    cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec, 'cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_Params', [
      mojo.internal.StructField('jea', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.JpegEncodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec, 'cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_Params', [
      mojo.internal.StructField('jda', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.MjpegDecodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.JpegAcceleratorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.JpegAcceleratorProviderRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.JpegAcceleratorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.JpegAcceleratorProviderPendingReceiver,
      handle);
    this.$ = new cros.mojom.JpegAcceleratorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.JpegAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getJpegEncodeAccelerator(jea) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec,
      null,
      [jea],
      false);
  }

  getMjpegDecodeAccelerator(jda) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

};

cros.mojom.JpegAcceleratorProvider.getRemote = function() {
  let remote = new cros.mojom.JpegAcceleratorProviderRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'cros.mojom.JpegAcceleratorProvider',
    'context');
  return remote.$;
};

cros.mojom.JpegAcceleratorProviderPtr = cros.mojom.JpegAcceleratorProviderRemote;
cros.mojom.JpegAcceleratorProviderRequest = cros.mojom.JpegAcceleratorProviderPendingReceiver;

