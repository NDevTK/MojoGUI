// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/cast_demo.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};
var mojo_base = mojo_base || {};

chromecast.shell.mojom.CastDemoVolumeChangeObserver = {};
chromecast.shell.mojom.CastDemoVolumeChangeObserver.$interfaceName = 'chromecast.shell.mojom.CastDemoVolumeChangeObserver';
chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo = {};
chromecast.shell.mojom.CastDemo.$interfaceName = 'chromecast.shell.mojom.CastDemo';
chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec = { $: {} };
chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec = { $: {} };

// Interface: CastDemoVolumeChangeObserver
mojo.internal.Struct(
    chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec, 'chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_Params', [
      mojo.internal.StructField('level', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.shell.mojom.CastDemoVolumeChangeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.mojom.CastDemoVolumeChangeObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.CastDemoVolumeChangeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.mojom.CastDemoVolumeChangeObserverPendingReceiver,
      handle);
    this.$ = new chromecast.shell.mojom.CastDemoVolumeChangeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.mojom.CastDemoVolumeChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  volumeChanged(level) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec,
      null,
      [level],
      false);
  }

};

chromecast.shell.mojom.CastDemoVolumeChangeObserver.getRemote = function() {
  let remote = new chromecast.shell.mojom.CastDemoVolumeChangeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.CastDemoVolumeChangeObserver',
    'context');
  return remote.$;
};

chromecast.shell.mojom.CastDemoVolumeChangeObserverReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: VolumeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VolumeChanged (0)');
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
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.volumeChanged');
          const result = this.impl.volumeChanged(params.level);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.shell.mojom.CastDemoVolumeChangeObserverReceiver = chromecast.shell.mojom.CastDemoVolumeChangeObserverReceiver;

chromecast.shell.mojom.CastDemoVolumeChangeObserverPtr = chromecast.shell.mojom.CastDemoVolumeChangeObserverRemote;
chromecast.shell.mojom.CastDemoVolumeChangeObserverRequest = chromecast.shell.mojom.CastDemoVolumeChangeObserverPendingReceiver;


// Interface: CastDemo
mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec, 'chromecast.shell.mojom.CastDemo_RecordEvent_Params', [
      mojo.internal.StructField('event_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec, 'chromecast.shell.mojom.CastDemo_SetRetailerName_Params', [
      mojo.internal.StructField('retailer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec, 'chromecast.shell.mojom.CastDemo_SetStoreId_Params', [
      mojo.internal.StructField('store_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec, 'chromecast.shell.mojom.CastDemo_GetRetailerName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec, 'chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParams', [
      mojo.internal.StructField('retailer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec, 'chromecast.shell.mojom.CastDemo_GetStoreId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec, 'chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParams', [
      mojo.internal.StructField('store_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec, 'chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_Params', [
      mojo.internal.StructField('level', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec, 'chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec, 'chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParams', [
      mojo.internal.StructField('level', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec, 'chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec, 'chromecast.shell.mojom.CastDemo_SetWifiCredentials_Params', [
      mojo.internal.StructField('ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('psk', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec, 'chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec, 'chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParams', [
      mojo.internal.StructField('network_list', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec, 'chromecast.shell.mojom.CastDemo_GetConnectionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec, 'chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec, 'chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.shell.mojom.CastDemoVolumeChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec, 'chromecast.shell.mojom.CastDemo_PersistLocalStorage_Params', [
    ],
    [[0, 8]]);

chromecast.shell.mojom.CastDemoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.mojom.CastDemoRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.CastDemo';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.mojom.CastDemoPendingReceiver,
      handle);
    this.$ = new chromecast.shell.mojom.CastDemoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.mojom.CastDemoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordEvent(event_name, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec,
      null,
      [event_name, data],
      false);
  }

  setRetailerName(retailer_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec,
      null,
      [retailer_name],
      false);
  }

  setStoreId(store_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec,
      null,
      [store_id],
      false);
  }

  getRetailerName() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec,
      [],
      false);
  }

  getStoreId() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec,
      [],
      false);
  }

  setDefaultVolumeLevel(level) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec,
      null,
      [level],
      false);
  }

  getDefaultVolumeLevel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec,
      [],
      false);
  }

  applyDefaultVolume() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec,
      null,
      [],
      false);
  }

  setWifiCredentials(ssid, psk) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec,
      null,
      [ssid, psk],
      false);
  }

  getAvailableWifiNetworks() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec,
      [],
      false);
  }

  getConnectionStatus() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec,
      [],
      false);
  }

  addVolumeChangeObserver(observer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  persistLocalStorage() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.shell.mojom.CastDemo.getRemote = function() {
  let remote = new chromecast.shell.mojom.CastDemoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.CastDemo',
    'context');
  return remote.$;
};

chromecast.shell.mojom.CastDemoReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RecordEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetRetailerName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRetailerName (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetStoreId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStoreId (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetRetailerName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRetailerName (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetStoreId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStoreId (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetDefaultVolumeLevel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDefaultVolumeLevel (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetDefaultVolumeLevel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultVolumeLevel (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ApplyDefaultVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyDefaultVolume (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetWifiCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWifiCredentials (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetAvailableWifiNetworks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAvailableWifiNetworks (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetConnectionStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetConnectionStatus (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AddVolumeChangeObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddVolumeChangeObserver (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: PersistLocalStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PersistLocalStorage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.recordEvent');
          const result = this.impl.recordEvent(params.event_name, params.data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setRetailerName');
          const result = this.impl.setRetailerName(params.retailer_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setStoreId');
          const result = this.impl.setStoreId(params.store_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getRetailerName');
          const result = this.impl.getRetailerName();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getStoreId');
          const result = this.impl.getStoreId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setDefaultVolumeLevel');
          const result = this.impl.setDefaultVolumeLevel(params.level);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getDefaultVolumeLevel');
          const result = this.impl.getDefaultVolumeLevel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.applyDefaultVolume');
          const result = this.impl.applyDefaultVolume();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setWifiCredentials');
          const result = this.impl.setWifiCredentials(params.ssid, params.psk);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAvailableWifiNetworks');
          const result = this.impl.getAvailableWifiNetworks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getConnectionStatus');
          const result = this.impl.getConnectionStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addVolumeChangeObserver');
          const result = this.impl.addVolumeChangeObserver(params.observer);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.persistLocalStorage');
          const result = this.impl.persistLocalStorage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.shell.mojom.CastDemoReceiver = chromecast.shell.mojom.CastDemoReceiver;

chromecast.shell.mojom.CastDemoPtr = chromecast.shell.mojom.CastDemoRemote;
chromecast.shell.mojom.CastDemoRequest = chromecast.shell.mojom.CastDemoPendingReceiver;

