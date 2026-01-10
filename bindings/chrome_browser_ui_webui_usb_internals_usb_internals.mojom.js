// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/usb_internals/usb_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};
var device = device || {};

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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.UsbInternalsPageHandler',
    'context');
  return remote.$;
};

mojom.UsbInternalsPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindUsbDeviceManagerInterface(params.receiver);
          break;
        }
        case 1: {
          const params = mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTestInterface(params.receiver);
          break;
        }
      }
    }});
  }
};

mojom.UsbInternalsPageHandlerReceiver = mojom.UsbInternalsPageHandlerReceiver;

mojom.UsbInternalsPageHandlerPtr = mojom.UsbInternalsPageHandlerRemote;
mojom.UsbInternalsPageHandlerRequest = mojom.UsbInternalsPageHandlerPendingReceiver;

