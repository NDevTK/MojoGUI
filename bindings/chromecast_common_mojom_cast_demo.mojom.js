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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.volumeChanged(params.level);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordEvent(params.event_name, params.data);
          break;
        }
        case 1: {
          const params = chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setRetailerName(params.retailer_name);
          break;
        }
        case 2: {
          const params = chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setStoreId(params.store_id);
          break;
        }
        case 3: {
          const params = chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRetailerName();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStoreId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDefaultVolumeLevel(params.level);
          break;
        }
        case 6: {
          const params = chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDefaultVolumeLevel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 7: {
          const params = chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.applyDefaultVolume();
          break;
        }
        case 8: {
          const params = chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWifiCredentials(params.ssid, params.psk);
          break;
        }
        case 9: {
          const params = chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAvailableWifiNetworks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 10: {
          const params = chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getConnectionStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 11: {
          const params = chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addVolumeChangeObserver(params.observer);
          break;
        }
        case 12: {
          const params = chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.persistLocalStorage();
          break;
        }
      }
    });
  }
};

chromecast.shell.mojom.CastDemoReceiver = chromecast.shell.mojom.CastDemoReceiver;

chromecast.shell.mojom.CastDemoPtr = chromecast.shell.mojom.CastDemoRemote;
chromecast.shell.mojom.CastDemoRequest = chromecast.shell.mojom.CastDemoPendingReceiver;

