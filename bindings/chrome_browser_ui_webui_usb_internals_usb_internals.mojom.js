// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/usb_internals/usb_internals.mojom
// Module: mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  bindUsbDeviceManagerInterface(receiver) {
    return this.$.bindUsbDeviceManagerInterface(receiver);
  }
  bindTestInterface(receiver) {
    return this.$.bindTestInterface(receiver);
  }
};

mojom.UsbInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbInternalsPageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindUsbDeviceManagerInterface(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTestInterface(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbInternalsPageHandler', [
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
             decoder.decodeStructInline(mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec.$.structSpec);
          const result = this.impl.bindUsbDeviceManagerInterface(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec.$.structSpec);
          const result = this.impl.bindTestInterface(params.receiver);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mojom.UsbInternalsPageHandlerReceiver = mojom.UsbInternalsPageHandlerReceiver;

mojom.UsbInternalsPageHandlerPtr = mojom.UsbInternalsPageHandlerRemote;
mojom.UsbInternalsPageHandlerRequest = mojom.UsbInternalsPageHandlerPendingReceiver;

