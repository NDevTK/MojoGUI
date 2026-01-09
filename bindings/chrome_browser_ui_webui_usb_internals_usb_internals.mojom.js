// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/usb_internals/usb_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: UsbInternalsPageHandler
mojom.UsbInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.UsbInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.UsbInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.UsbInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new mojom.UsbInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.UsbInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindUsbDeviceManagerInterface(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec.$,
      null,
      [receiver]);
  }

  bindTestInterface(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec.$,
      null,
      [receiver]);
  }

};

mojom.UsbInternalsPageHandler.getRemote = function() {
  let remote = new mojom.UsbInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.UsbInternalsPageHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for BindUsbDeviceManagerInterface
mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.UsbInternalsPageHandler.BindUsbDeviceManagerInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindTestInterface
mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.UsbInternalsPageHandler.BindTestInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
mojom.UsbInternalsPageHandlerPtr = mojom.UsbInternalsPageHandlerRemote;
mojom.UsbInternalsPageHandlerRequest = mojom.UsbInternalsPageHandlerPendingReceiver;

