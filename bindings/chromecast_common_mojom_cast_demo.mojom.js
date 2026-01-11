// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/cast_demo.mojom
// Module: chromecast.shell.mojom

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
  volumeChanged(level) {
    return this.$.volumeChanged(level);
  }
};

chromecast.shell.mojom.CastDemoVolumeChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastDemoVolumeChangeObserver', [
      { explicit: null },
    ]);
  }

  volumeChanged(level) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CastDemoVolumeChangeObserver', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.volumeChanged(params.level);
          break;
        }
      }
      } catch (err) {}
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.shell.mojom.CastDemoVolumeChangeObserverRemote), null, false, 0, undefined),
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
  recordEvent(event_name, data) {
    return this.$.recordEvent(event_name, data);
  }
  setRetailerName(retailer_name) {
    return this.$.setRetailerName(retailer_name);
  }
  setStoreId(store_id) {
    return this.$.setStoreId(store_id);
  }
  getRetailerName() {
    return this.$.getRetailerName();
  }
  getStoreId() {
    return this.$.getStoreId();
  }
  setDefaultVolumeLevel(level) {
    return this.$.setDefaultVolumeLevel(level);
  }
  getDefaultVolumeLevel() {
    return this.$.getDefaultVolumeLevel();
  }
  applyDefaultVolume() {
    return this.$.applyDefaultVolume();
  }
  setWifiCredentials(ssid, psk) {
    return this.$.setWifiCredentials(ssid, psk);
  }
  getAvailableWifiNetworks() {
    return this.$.getAvailableWifiNetworks();
  }
  getConnectionStatus() {
    return this.$.getConnectionStatus();
  }
  addVolumeChangeObserver(observer) {
    return this.$.addVolumeChangeObserver(observer);
  }
  persistLocalStorage() {
    return this.$.persistLocalStorage();
  }
};

chromecast.shell.mojom.CastDemoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastDemo', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  recordEvent(event_name, data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec,
      null,
      [event_name, data],
      false);
  }

  setRetailerName(retailer_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec,
      null,
      [retailer_name],
      false);
  }

  setStoreId(store_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec,
      null,
      [store_id],
      false);
  }

  getRetailerName() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec,
      [],
      false);
  }

  getStoreId() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec,
      [],
      false);
  }

  setDefaultVolumeLevel(level) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec,
      null,
      [level],
      false);
  }

  getDefaultVolumeLevel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec,
      [],
      false);
  }

  applyDefaultVolume() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec,
      null,
      [],
      false);
  }

  setWifiCredentials(ssid, psk) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec,
      null,
      [ssid, psk],
      false);
  }

  getAvailableWifiNetworks() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec,
      [],
      false);
  }

  getConnectionStatus() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec,
      [],
      false);
  }

  addVolumeChangeObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  persistLocalStorage() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CastDemo', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec.$.structSpec);
          const result = this.impl.recordEvent(params.event_name, params.data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec.$.structSpec);
          const result = this.impl.setRetailerName(params.retailer_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec.$.structSpec);
          const result = this.impl.setStoreId(params.store_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec.$.structSpec);
          const result = this.impl.setDefaultVolumeLevel(params.level);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec.$.structSpec);
          const result = this.impl.applyDefaultVolume();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec.$.structSpec);
          const result = this.impl.setWifiCredentials(params.ssid, params.psk);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addVolumeChangeObserver(params.observer);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec.$.structSpec);
          const result = this.impl.persistLocalStorage();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.shell.mojom.CastDemoReceiver = chromecast.shell.mojom.CastDemoReceiver;

chromecast.shell.mojom.CastDemoPtr = chromecast.shell.mojom.CastDemoRemote;
chromecast.shell.mojom.CastDemoRequest = chromecast.shell.mojom.CastDemoPendingReceiver;

