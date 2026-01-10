// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/usb_internals/usb_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};
var services = services || {};
var services = services || {};

mojom.UsbInternalsPageHandler = {};
mojom.UsbInternalsPageHandler.$interfaceName = 'mojom.UsbInternalsPageHandler';
mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec = { $: {} };
mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec = { $: {} };

// Interface: UsbInternalsPageHandler
mojo.internal.Struct(
    mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec, 'mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec, 'mojom.UsbInternalsPageHandler_BindTestInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceManagerTestRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTestInterface(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

mojom.UsbInternalsPageHandler.getRemote = function() {
  let remote = new mojom.UsbInternalsPageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'mojom.UsbInternalsPageHandler',
    'context');
  return remote.$;
};

mojom.UsbInternalsPageHandlerPtr = mojom.UsbInternalsPageHandlerRemote;
mojom.UsbInternalsPageHandlerRequest = mojom.UsbInternalsPageHandlerPendingReceiver;

