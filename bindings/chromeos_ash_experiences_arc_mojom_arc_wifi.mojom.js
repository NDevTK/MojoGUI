// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_wifi.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.WifiScanResultSpec = { $: {} };
arc.mojom.ArcWifiHost = {};
arc.mojom.ArcWifiHost.$interfaceName = 'arc.mojom.ArcWifiHost';
arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_StartScan_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance = {};
arc.mojom.ArcWifiInstance.$interfaceName = 'arc.mojom.ArcWifiInstance';
arc.mojom.ArcWifiInstance_Init_ParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec = { $: {} };

// Struct: WifiScanResult
mojo.internal.Struct(
    arc.mojom.WifiScanResultSpec, 'arc.mojom.WifiScanResult', [
      mojo.internal.StructField('hex_ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, arc.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rssi', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ArcWifiHost
mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec, 'arc.mojom.ArcWifiHost_GetWifiEnabledState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec, 'arc.mojom.ArcWifiHost_SetWifiEnabledState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('enabled_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_StartScan_ParamsSpec, 'arc.mojom.ArcWifiHost_StartScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec, 'arc.mojom.ArcWifiHost_GetScanResults_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec, 'arc.mojom.ArcWifiHost_GetScanResults_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.Array(arc.mojom.WifiScanResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ArcWifiHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ArcWifiHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcWifiHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ArcWifiHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ArcWifiHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ArcWifiHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWifiEnabledState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec,
      arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec,
      [],
      false);
  }

  setWifiEnabledState(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec,
      arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec,
      [enabled],
      false);
  }

  startScan() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ArcWifiHost_StartScan_ParamsSpec,
      null,
      [],
      false);
  }

  getScanResults() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec,
      arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.ArcWifiHost.getRemote = function() {
  let remote = new arc.mojom.ArcWifiHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcWifiHost',
    'context');
  return remote.$;
};

arc.mojom.ArcWifiHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
    this.ordinalMap.set(3, 2); // Default ordinal 3 -> Index 2
    this.ordinalMap.set(4, 3); // Default ordinal 4 -> Index 3
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
        
        // Try Method 0: GetWifiEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWifiEnabledState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SetWifiEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWifiEnabledState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: StartScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ArcWifiHost_StartScan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartScan (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetScanResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScanResults (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
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
          const params = decoder.decodeStruct(arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getWifiEnabledState');
          const result = this.impl.getWifiEnabledState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setWifiEnabledState');
          const result = this.impl.setWifiEnabledState(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcWifiHost_StartScan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startScan');
          const result = this.impl.startScan();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getScanResults');
          const result = this.impl.getScanResults();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec);
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

arc.mojom.ArcWifiHostReceiver = arc.mojom.ArcWifiHostReceiver;

arc.mojom.ArcWifiHostPtr = arc.mojom.ArcWifiHostRemote;
arc.mojom.ArcWifiHostRequest = arc.mojom.ArcWifiHostPendingReceiver;


// Interface: ArcWifiInstance
mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_Init_ParamsSpec, 'arc.mojom.ArcWifiInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ArcWifiHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec, 'arc.mojom.ArcWifiInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec, 'arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec, 'arc.mojom.ArcWifiInstance_ScanCompleted_Params', [
    ],
    [[0, 8]]);

arc.mojom.ArcWifiInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ArcWifiInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcWifiInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ArcWifiInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ArcWifiInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ArcWifiInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ArcWifiInstance_Init_ParamsSpec,
      arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  wifiEnabledStateChanged(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  scanCompleted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.ArcWifiInstance.getRemote = function() {
  let remote = new arc.mojom.ArcWifiInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcWifiInstance',
    'context');
  return remote.$;
};

arc.mojom.ArcWifiInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
    this.ordinalMap.set(3, 2); // Default ordinal 3 -> Index 2
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ArcWifiInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: WifiEnabledStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WifiEnabledStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ScanCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScanCompleted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
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
          const params = decoder.decodeStruct(arc.mojom.ArcWifiInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.wifiEnabledStateChanged');
          const result = this.impl.wifiEnabledStateChanged(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.scanCompleted');
          const result = this.impl.scanCompleted();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ArcWifiInstanceReceiver = arc.mojom.ArcWifiInstanceReceiver;

arc.mojom.ArcWifiInstancePtr = arc.mojom.ArcWifiInstanceRemote;
arc.mojom.ArcWifiInstanceRequest = arc.mojom.ArcWifiInstancePendingReceiver;

