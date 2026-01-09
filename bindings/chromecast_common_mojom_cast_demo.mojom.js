// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/cast_demo.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};


// Interface: CastDemoVolumeChangeObserver
chromecast.shell.mojom.CastDemoVolumeChangeObserver = {};

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
      [level]);
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

// ParamsSpec for VolumeChanged
chromecast.shell.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemoVolumeChangeObserver.VolumeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.shell.mojom.CastDemoVolumeChangeObserverPtr = chromecast.shell.mojom.CastDemoVolumeChangeObserverRemote;
chromecast.shell.mojom.CastDemoVolumeChangeObserverRequest = chromecast.shell.mojom.CastDemoVolumeChangeObserverPendingReceiver;


// Interface: CastDemo
chromecast.shell.mojom.CastDemo = {};

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
      [event_name, data]);
  }

  setRetailerName(retailer_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec,
      null,
      [retailer_name]);
  }

  setStoreId(store_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec,
      null,
      [store_id]);
  }

  getRetailerName() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec,
      []);
  }

  getStoreId() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec,
      []);
  }

  setDefaultVolumeLevel(level) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec,
      null,
      [level]);
  }

  getDefaultVolumeLevel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec,
      []);
  }

  applyDefaultVolume() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec,
      null,
      []);
  }

  setWifiCredentials(ssid, psk) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec,
      null,
      [ssid, psk]);
  }

  getAvailableWifiNetworks() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec,
      []);
  }

  getConnectionStatus() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec,
      chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec,
      []);
  }

  addVolumeChangeObserver(observer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec,
      null,
      [observer]);
  }

  persistLocalStorage() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec,
      null,
      []);
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

// ParamsSpec for RecordEvent
chromecast.shell.mojom.CastDemo_RecordEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.RecordEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetRetailerName
chromecast.shell.mojom.CastDemo_SetRetailerName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetRetailerName_Params',
      packedSize: 16,
      fields: [
        { name: 'retailer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetStoreId
chromecast.shell.mojom.CastDemo_SetStoreId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetStoreId_Params',
      packedSize: 16,
      fields: [
        { name: 'store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRetailerName
chromecast.shell.mojom.CastDemo_GetRetailerName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetRetailerName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.shell.mojom.CastDemo_GetRetailerName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetRetailerName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'retailer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStoreId
chromecast.shell.mojom.CastDemo_GetStoreId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetStoreId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.shell.mojom.CastDemo_GetStoreId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetStoreId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDefaultVolumeLevel
chromecast.shell.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetDefaultVolumeLevel_Params',
      packedSize: 16,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDefaultVolumeLevel
chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetDefaultVolumeLevel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.shell.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetDefaultVolumeLevel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ApplyDefaultVolume
chromecast.shell.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.ApplyDefaultVolume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWifiCredentials
chromecast.shell.mojom.CastDemo_SetWifiCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetWifiCredentials_Params',
      packedSize: 24,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'psk', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAvailableWifiNetworks
chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetAvailableWifiNetworks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.shell.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetAvailableWifiNetworks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'network_list', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetConnectionStatus
chromecast.shell.mojom.CastDemo_GetConnectionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetConnectionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.shell.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetConnectionStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddVolumeChangeObserver
chromecast.shell.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.AddVolumeChangeObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PersistLocalStorage
chromecast.shell.mojom.CastDemo_PersistLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.PersistLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.shell.mojom.CastDemoPtr = chromecast.shell.mojom.CastDemoRemote;
chromecast.shell.mojom.CastDemoRequest = chromecast.shell.mojom.CastDemoPendingReceiver;

