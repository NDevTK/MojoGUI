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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindUsbDeviceManagerInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindUsbDeviceManagerInterface (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: BindTestInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTestInterface (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindUsbDeviceManagerInterface');
          const result = this.impl.bindUsbDeviceManagerInterface(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.UsbInternalsPageHandler_BindTestInterface_ParamsSpec.$, message.header.headerSize);
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

