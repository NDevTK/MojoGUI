// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/bluetooth/public/mojom/web_bluetooth.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.BluetoothDeviceAccessProvider = {};
chromecast.mojom.BluetoothDeviceAccessProvider.$interfaceName = 'chromecast.mojom.BluetoothDeviceAccessProvider';
chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec = { $: {} };
chromecast.mojom.BluetoothDeviceAccessProviderClient = {};
chromecast.mojom.BluetoothDeviceAccessProviderClient.$interfaceName = 'chromecast.mojom.BluetoothDeviceAccessProviderClient';
chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec = { $: {} };
chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec = { $: {} };

// Interface: BluetoothDeviceAccessProvider
mojo.internal.Struct(
    chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec, 'chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.BluetoothDeviceAccessProviderClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.BluetoothDeviceAccessProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.BluetoothDeviceAccessProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.BluetoothDeviceAccessProviderPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.BluetoothDeviceAccessProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDeviceAccess(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec,
      null,
      [client],
      false);
  }

};

chromecast.mojom.BluetoothDeviceAccessProvider.getRemote = function() {
  let remote = new chromecast.mojom.BluetoothDeviceAccessProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.BluetoothDeviceAccessProvider',
    'context');
  return remote.$;
};

chromecast.mojom.BluetoothDeviceAccessProviderReceiver = class {
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
        
        // Try Method 0: RequestDeviceAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDeviceAccess (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestDeviceAccess');
          const result = this.impl.requestDeviceAccess(params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderReceiver = chromecast.mojom.BluetoothDeviceAccessProviderReceiver;

chromecast.mojom.BluetoothDeviceAccessProviderPtr = chromecast.mojom.BluetoothDeviceAccessProviderRemote;
chromecast.mojom.BluetoothDeviceAccessProviderRequest = chromecast.mojom.BluetoothDeviceAccessProviderPendingReceiver;


// Interface: BluetoothDeviceAccessProviderClient
mojo.internal.Struct(
    chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec, 'chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec, 'chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_Params', [
    ],
    [[0, 8]]);

chromecast.mojom.BluetoothDeviceAccessProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.BluetoothDeviceAccessProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.BluetoothDeviceAccessProviderClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.BluetoothDeviceAccessProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  grantAccess(address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec,
      null,
      [address],
      false);
  }

  grantAccessToAllDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.mojom.BluetoothDeviceAccessProviderClient.getRemote = function() {
  let remote = new chromecast.mojom.BluetoothDeviceAccessProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.BluetoothDeviceAccessProviderClient',
    'context');
  return remote.$;
};

chromecast.mojom.BluetoothDeviceAccessProviderClientReceiver = class {
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
        
        // Try Method 0: GrantAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GrantAccess (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GrantAccessToAllDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GrantAccessToAllDevices (1)');
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
          const params = decoder.decodeStruct(chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.grantAccess');
          const result = this.impl.grantAccess(params.address);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.grantAccessToAllDevices');
          const result = this.impl.grantAccessToAllDevices();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderClientReceiver = chromecast.mojom.BluetoothDeviceAccessProviderClientReceiver;

chromecast.mojom.BluetoothDeviceAccessProviderClientPtr = chromecast.mojom.BluetoothDeviceAccessProviderClientRemote;
chromecast.mojom.BluetoothDeviceAccessProviderClientRequest = chromecast.mojom.BluetoothDeviceAccessProviderClientPendingReceiver;

