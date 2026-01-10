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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindUsbDeviceManagerInterface');
          const result = this.impl.bindUsbDeviceManagerInterface(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindTestInterface');
          const result = this.impl.bindTestInterface(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.UsbInternalsPageHandlerReceiver = mojom.UsbInternalsPageHandlerReceiver;

mojom.UsbInternalsPageHandlerPtr = mojom.UsbInternalsPageHandlerRemote;
mojom.UsbInternalsPageHandlerRequest = mojom.UsbInternalsPageHandlerPendingReceiver;

