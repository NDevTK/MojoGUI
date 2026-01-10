// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/cast_demo.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.shell.mojom = chromecast.shell.shell.mojom || {};


// Interface: CastDemoVolumeChangeObserver
chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserver = {};

chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.CastDemoVolumeChangeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverPendingReceiver,
      handle);
    this.$ = new chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  volumeChanged(level) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec,
      null,
      [level]);
  }

};

chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserver.getRemote = function() {
  let remote = new chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.CastDemoVolumeChangeObserver',
    'context');
  return remote.$;
};

// ParamsSpec for VolumeChanged
chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserver_VolumeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemoVolumeChangeObserver.VolumeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverPtr = chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverRemote;
chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverRequest = chromecast.shell.shell.mojom.mojom.CastDemoVolumeChangeObserverPendingReceiver;


// Interface: CastDemo
chromecast.shell.shell.mojom.mojom.CastDemo = {};

chromecast.shell.shell.mojom.mojom.CastDemoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.shell.mojom.mojom.CastDemoRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.CastDemo';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.shell.mojom.mojom.CastDemoPendingReceiver,
      handle);
    this.$ = new chromecast.shell.shell.mojom.mojom.CastDemoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.shell.mojom.mojom.CastDemoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordEvent(event_name, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_RecordEvent_ParamsSpec,
      null,
      [event_name, data]);
  }

  setRetailerName(retailer_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_SetRetailerName_ParamsSpec,
      null,
      [retailer_name]);
  }

  setStoreId(store_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_SetStoreId_ParamsSpec,
      null,
      [store_id]);
  }

  getRetailerName() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_GetRetailerName_ParamsSpec,
      chromecast.shell.shell.mojom.mojom.CastDemo_GetRetailerName_ResponseParamsSpec,
      []);
  }

  getStoreId() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_GetStoreId_ParamsSpec,
      chromecast.shell.shell.mojom.mojom.CastDemo_GetStoreId_ResponseParamsSpec,
      []);
  }

  setDefaultVolumeLevel(level) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec,
      null,
      [level]);
  }

  getDefaultVolumeLevel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec,
      chromecast.shell.shell.mojom.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec,
      []);
  }

  applyDefaultVolume() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec,
      null,
      []);
  }

  setWifiCredentials(ssid, psk) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_SetWifiCredentials_ParamsSpec,
      null,
      [ssid, psk]);
  }

  getAvailableWifiNetworks() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec,
      chromecast.shell.shell.mojom.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec,
      []);
  }

  getConnectionStatus() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_GetConnectionStatus_ParamsSpec,
      chromecast.shell.shell.mojom.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec,
      []);
  }

  addVolumeChangeObserver(observer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec,
      null,
      [observer]);
  }

  persistLocalStorage() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromecast.shell.shell.mojom.mojom.CastDemo_PersistLocalStorage_ParamsSpec,
      null,
      []);
  }

};

chromecast.shell.shell.mojom.mojom.CastDemo.getRemote = function() {
  let remote = new chromecast.shell.shell.mojom.mojom.CastDemoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.CastDemo',
    'context');
  return remote.$;
};

// ParamsSpec for RecordEvent
chromecast.shell.shell.mojom.mojom.CastDemo_RecordEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.RecordEvent_Params',
      packedSize: 32,
      fields: [
        { name: 'event_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetRetailerName
chromecast.shell.shell.mojom.mojom.CastDemo_SetRetailerName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetRetailerName_Params',
      packedSize: 16,
      fields: [
        { name: 'retailer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetStoreId
chromecast.shell.shell.mojom.mojom.CastDemo_SetStoreId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetStoreId_Params',
      packedSize: 16,
      fields: [
        { name: 'store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRetailerName
chromecast.shell.shell.mojom.mojom.CastDemo_GetRetailerName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetRetailerName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.shell.shell.mojom.mojom.CastDemo_GetRetailerName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetRetailerName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'retailer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStoreId
chromecast.shell.shell.mojom.mojom.CastDemo_GetStoreId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetStoreId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.shell.shell.mojom.mojom.CastDemo_GetStoreId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetStoreId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'store_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDefaultVolumeLevel
chromecast.shell.shell.mojom.mojom.CastDemo_SetDefaultVolumeLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetDefaultVolumeLevel_Params',
      packedSize: 16,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDefaultVolumeLevel
chromecast.shell.shell.mojom.mojom.CastDemo_GetDefaultVolumeLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetDefaultVolumeLevel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.shell.shell.mojom.mojom.CastDemo_GetDefaultVolumeLevel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetDefaultVolumeLevel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApplyDefaultVolume
chromecast.shell.shell.mojom.mojom.CastDemo_ApplyDefaultVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.ApplyDefaultVolume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetWifiCredentials
chromecast.shell.shell.mojom.mojom.CastDemo_SetWifiCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.SetWifiCredentials_Params',
      packedSize: 24,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'psk', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetAvailableWifiNetworks
chromecast.shell.shell.mojom.mojom.CastDemo_GetAvailableWifiNetworks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetAvailableWifiNetworks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.shell.shell.mojom.mojom.CastDemo_GetAvailableWifiNetworks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetAvailableWifiNetworks_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'network_list', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetConnectionStatus
chromecast.shell.shell.mojom.mojom.CastDemo_GetConnectionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetConnectionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.shell.shell.mojom.mojom.CastDemo_GetConnectionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.GetConnectionStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddVolumeChangeObserver
chromecast.shell.shell.mojom.mojom.CastDemo_AddVolumeChangeObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.AddVolumeChangeObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.shell.mojom.CastDemoVolumeChangeObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PersistLocalStorage
chromecast.shell.shell.mojom.mojom.CastDemo_PersistLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.CastDemo.PersistLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromecast.shell.shell.mojom.mojom.CastDemoPtr = chromecast.shell.shell.mojom.mojom.CastDemoRemote;
chromecast.shell.shell.mojom.mojom.CastDemoRequest = chromecast.shell.shell.mojom.mojom.CastDemoPendingReceiver;

