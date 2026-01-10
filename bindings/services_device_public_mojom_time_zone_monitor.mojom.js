// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/time_zone_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.TimeZoneMonitor = {};
device.mojom.TimeZoneMonitor.$interfaceName = 'device.mojom.TimeZoneMonitor';
device.mojom.TimeZoneMonitor_AddClient_ParamsSpec = { $: {} };
device.mojom.TimeZoneMonitorClient = {};
device.mojom.TimeZoneMonitorClient.$interfaceName = 'device.mojom.TimeZoneMonitorClient';
device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec = { $: {} };

// Interface: TimeZoneMonitor
mojo.internal.Struct(
    device.mojom.TimeZoneMonitor_AddClient_ParamsSpec, 'device.mojom.TimeZoneMonitor_AddClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.TimeZoneMonitorClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.TimeZoneMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.TimeZoneMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.TimeZoneMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.TimeZoneMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.TimeZoneMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.TimeZoneMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.TimeZoneMonitor_AddClient_ParamsSpec,
      null,
      [client],
      false);
  }

};

device.mojom.TimeZoneMonitor.getRemote = function() {
  let remote = new device.mojom.TimeZoneMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.TimeZoneMonitor',
    'context');
  return remote.$;
};

device.mojom.TimeZoneMonitorReceiver = class {
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
        
        // Try Method 0: AddClient
        try {
             decoder.decodeStruct(device.mojom.TimeZoneMonitor_AddClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddClient (0)');
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
          const params = decoder.decodeStruct(device.mojom.TimeZoneMonitor_AddClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addClient');
          const result = this.impl.addClient(params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.TimeZoneMonitorReceiver = device.mojom.TimeZoneMonitorReceiver;

device.mojom.TimeZoneMonitorPtr = device.mojom.TimeZoneMonitorRemote;
device.mojom.TimeZoneMonitorRequest = device.mojom.TimeZoneMonitorPendingReceiver;


// Interface: TimeZoneMonitorClient
mojo.internal.Struct(
    device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec, 'device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_Params', [
      mojo.internal.StructField('tz_info', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.TimeZoneMonitorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.TimeZoneMonitorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.TimeZoneMonitorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.TimeZoneMonitorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.TimeZoneMonitorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.TimeZoneMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTimeZoneChange(tz_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec,
      null,
      [tz_info],
      false);
  }

};

device.mojom.TimeZoneMonitorClient.getRemote = function() {
  let remote = new device.mojom.TimeZoneMonitorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.TimeZoneMonitorClient',
    'context');
  return remote.$;
};

device.mojom.TimeZoneMonitorClientReceiver = class {
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
        
        // Try Method 0: OnTimeZoneChange
        try {
             decoder.decodeStruct(device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTimeZoneChange (0)');
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
          const params = decoder.decodeStruct(device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTimeZoneChange');
          const result = this.impl.onTimeZoneChange(params.tz_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.TimeZoneMonitorClientReceiver = device.mojom.TimeZoneMonitorClientReceiver;

device.mojom.TimeZoneMonitorClientPtr = device.mojom.TimeZoneMonitorClientRemote;
device.mojom.TimeZoneMonitorClientRequest = device.mojom.TimeZoneMonitorClientPendingReceiver;

