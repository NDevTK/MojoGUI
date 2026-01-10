// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/power_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.PowerMonitor = {};
device.mojom.PowerMonitor.$interfaceName = 'device.mojom.PowerMonitor';
device.mojom.PowerMonitor_AddClient_ParamsSpec = { $: {} };
device.mojom.PowerMonitorClient = {};
device.mojom.PowerMonitorClient.$interfaceName = 'device.mojom.PowerMonitorClient';
device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec = { $: {} };
device.mojom.PowerMonitorClient_Suspend_ParamsSpec = { $: {} };
device.mojom.PowerMonitorClient_Resume_ParamsSpec = { $: {} };

// Interface: PowerMonitor
mojo.internal.Struct(
    device.mojom.PowerMonitor_AddClient_ParamsSpec, 'device.mojom.PowerMonitor_AddClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.PowerMonitorClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.PowerMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PowerMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PowerMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PowerMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.PowerMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.PowerMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PowerMonitor_AddClient_ParamsSpec,
      null,
      [client],
      false);
  }

};

device.mojom.PowerMonitor.getRemote = function() {
  let remote = new device.mojom.PowerMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PowerMonitor',
    'context');
  return remote.$;
};

device.mojom.PowerMonitorReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.PowerMonitor_AddClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStruct(device.mojom.PowerMonitor_AddClient_ParamsSpec.$, message.header.headerSize);
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

device.mojom.PowerMonitorReceiver = device.mojom.PowerMonitorReceiver;

device.mojom.PowerMonitorPtr = device.mojom.PowerMonitorRemote;
device.mojom.PowerMonitorRequest = device.mojom.PowerMonitorPendingReceiver;


// Interface: PowerMonitorClient
mojo.internal.Struct(
    device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec, 'device.mojom.PowerMonitorClient_PowerStateChange_Params', [
      mojo.internal.StructField('battery_power_status', 0, 0, mojo_base.mojom.BatteryPowerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.PowerMonitorClient_Suspend_ParamsSpec, 'device.mojom.PowerMonitorClient_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PowerMonitorClient_Resume_ParamsSpec, 'device.mojom.PowerMonitorClient_Resume_Params', [
    ],
    [[0, 8]]);

device.mojom.PowerMonitorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PowerMonitorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PowerMonitorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PowerMonitorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.PowerMonitorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.PowerMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  powerStateChange(battery_power_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec,
      null,
      [battery_power_status],
      false);
  }

  suspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.PowerMonitorClient_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.PowerMonitorClient_Resume_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.PowerMonitorClient.getRemote = function() {
  let remote = new device.mojom.PowerMonitorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PowerMonitorClient',
    'context');
  return remote.$;
};

device.mojom.PowerMonitorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PowerStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PowerStateChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Suspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.PowerMonitorClient_Suspend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suspend (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.PowerMonitorClient_Resume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
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
          const params = decoder.decodeStruct(device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.powerStateChange');
          const result = this.impl.powerStateChange(params.battery_power_status);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.PowerMonitorClient_Suspend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suspend');
          const result = this.impl.suspend();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.PowerMonitorClient_Resume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.PowerMonitorClientReceiver = device.mojom.PowerMonitorClientReceiver;

device.mojom.PowerMonitorClientPtr = device.mojom.PowerMonitorClientRemote;
device.mojom.PowerMonitorClientRequest = device.mojom.PowerMonitorClientPendingReceiver;

