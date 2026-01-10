// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/serial/serial.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var bluetooth = bluetooth || {};
var mojo_base = mojo_base || {};
var device = device || {};

blink.mojom.SerialPortInfoSpec = { $: {} };
blink.mojom.SerialPortFilterSpec = { $: {} };
blink.mojom.SerialService = {};
blink.mojom.SerialService.$interfaceName = 'blink.mojom.SerialService';
blink.mojom.SerialService_SetClient_ParamsSpec = { $: {} };
blink.mojom.SerialService_GetPorts_ParamsSpec = { $: {} };
blink.mojom.SerialService_GetPorts_ResponseParamsSpec = { $: {} };
blink.mojom.SerialService_RequestPort_ParamsSpec = { $: {} };
blink.mojom.SerialService_RequestPort_ResponseParamsSpec = { $: {} };
blink.mojom.SerialService_OpenPort_ParamsSpec = { $: {} };
blink.mojom.SerialService_OpenPort_ResponseParamsSpec = { $: {} };
blink.mojom.SerialService_ForgetPort_ParamsSpec = { $: {} };
blink.mojom.SerialService_ForgetPort_ResponseParamsSpec = { $: {} };
blink.mojom.SerialServiceClient = {};
blink.mojom.SerialServiceClient.$interfaceName = 'blink.mojom.SerialServiceClient';
blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec = { $: {} };

// Struct: SerialPortInfo
mojo.internal.Struct(
    blink.mojom.SerialPortInfoSpec, 'blink.mojom.SerialPortInfo', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bluetooth_service_class_id', 8, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('usb_vendor_id', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('usb_product_id', 18, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_usb_vendor_id', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_usb_product_id', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connected', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SerialPortFilter
mojo.internal.Struct(
    blink.mojom.SerialPortFilterSpec, 'blink.mojom.SerialPortFilter', [
      mojo.internal.StructField('bluetooth_service_class_id', 0, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vendor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('product_id', 12, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_vendor_id', 14, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_product_id', 14, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SerialService
mojo.internal.Struct(
    blink.mojom.SerialService_SetClient_ParamsSpec, 'blink.mojom.SerialService_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SerialServiceClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_GetPorts_ParamsSpec, 'blink.mojom.SerialService_GetPorts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SerialService_GetPorts_ResponseParamsSpec, 'blink.mojom.SerialService_GetPorts_ResponseParams', [
      mojo.internal.StructField('ports', 0, 0, mojo.internal.Array(blink.mojom.SerialPortInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_RequestPort_ParamsSpec, 'blink.mojom.SerialService_RequestPort_Params', [
      mojo.internal.StructField('filters', 0, 0, mojo.internal.Array(blink.mojom.SerialPortFilterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('allowed_bluetooth_service_class_ids', 8, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SerialService_RequestPort_ResponseParamsSpec, 'blink.mojom.SerialService_RequestPort_ResponseParams', [
      mojo.internal.StructField('port', 0, 0, blink.mojom.SerialPortInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_OpenPort_ParamsSpec, 'blink.mojom.SerialService_OpenPort_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, device.mojom.SerialConnectionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SerialService_OpenPort_ResponseParamsSpec, 'blink.mojom.SerialService_OpenPort_ResponseParams', [
      mojo.internal.StructField('port', 0, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_ForgetPort_ParamsSpec, 'blink.mojom.SerialService_ForgetPort_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_ForgetPort_ResponseParamsSpec, 'blink.mojom.SerialService_ForgetPort_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.SerialServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SerialServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SerialService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SerialServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SerialServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SerialServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SerialService_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  getPorts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SerialService_GetPorts_ParamsSpec,
      blink.mojom.SerialService_GetPorts_ResponseParamsSpec,
      [],
      false);
  }

  requestPort(filters, allowed_bluetooth_service_class_ids) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SerialService_RequestPort_ParamsSpec,
      blink.mojom.SerialService_RequestPort_ResponseParamsSpec,
      [filters, allowed_bluetooth_service_class_ids],
      false);
  }

  openPort(token, options, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SerialService_OpenPort_ParamsSpec,
      blink.mojom.SerialService_OpenPort_ResponseParamsSpec,
      [token, options, client],
      false);
  }

  forgetPort(token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SerialService_ForgetPort_ParamsSpec,
      blink.mojom.SerialService_ForgetPort_ResponseParamsSpec,
      [token],
      false);
  }

};

blink.mojom.SerialService.getRemote = function() {
  let remote = new blink.mojom.SerialServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SerialService',
    'context');
  return remote.$;
};

blink.mojom.SerialServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: SetClient
        try {
             decoder.decodeStruct(blink.mojom.SerialService_SetClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetPorts
        try {
             decoder.decodeStruct(blink.mojom.SerialService_GetPorts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPorts (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: RequestPort
        try {
             decoder.decodeStruct(blink.mojom.SerialService_RequestPort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPort (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OpenPort
        try {
             decoder.decodeStruct(blink.mojom.SerialService_OpenPort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenPort (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: ForgetPort
        try {
             decoder.decodeStruct(blink.mojom.SerialService_ForgetPort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForgetPort (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SerialService_SetClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SerialService_GetPorts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPorts');
          const result = this.impl.getPorts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SerialService_GetPorts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SerialService_RequestPort_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPort');
          const result = this.impl.requestPort(params.filters, params.allowed_bluetooth_service_class_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SerialService_RequestPort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SerialService_OpenPort_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openPort');
          const result = this.impl.openPort(params.token, params.options, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SerialService_OpenPort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SerialService_ForgetPort_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forgetPort');
          const result = this.impl.forgetPort(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SerialService_ForgetPort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SerialServiceReceiver = blink.mojom.SerialServiceReceiver;

blink.mojom.SerialServicePtr = blink.mojom.SerialServiceRemote;
blink.mojom.SerialServiceRequest = blink.mojom.SerialServicePendingReceiver;


// Interface: SerialServiceClient
mojo.internal.Struct(
    blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec, 'blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_Params', [
      mojo.internal.StructField('port_info', 0, 0, blink.mojom.SerialPortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SerialServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SerialServiceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SerialServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SerialServiceClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SerialServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SerialServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPortConnectedStateChanged(port_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec,
      null,
      [port_info],
      false);
  }

};

blink.mojom.SerialServiceClient.getRemote = function() {
  let remote = new blink.mojom.SerialServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SerialServiceClient',
    'context');
  return remote.$;
};

blink.mojom.SerialServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: OnPortConnectedStateChanged
        try {
             decoder.decodeStruct(blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPortConnectedStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPortConnectedStateChanged');
          const result = this.impl.onPortConnectedStateChanged(params.port_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SerialServiceClientReceiver = blink.mojom.SerialServiceClientReceiver;

blink.mojom.SerialServiceClientPtr = blink.mojom.SerialServiceClientRemote;
blink.mojom.SerialServiceClientRequest = blink.mojom.SerialServiceClientPendingReceiver;

