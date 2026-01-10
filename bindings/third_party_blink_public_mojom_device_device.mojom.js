// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device/device.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Union: DeviceAttributeResult
blink.mojom.DeviceAttributeResultSpec = { $: mojo.internal.Union(
    'blink.mojom.DeviceAttributeResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'attribute': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      }},
    })
};

// Interface: ManagedConfigurationObserver
blink.mojom.ManagedConfigurationObserver = {};

blink.mojom.ManagedConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManagedConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManagedConfigurationObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ManagedConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManagedConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConfigurationChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.ManagedConfigurationObserver.getRemote = function() {
  let remote = new blink.mojom.ManagedConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnConfigurationChanged
blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManagedConfigurationObserver.OnConfigurationChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.ManagedConfigurationObserverPtr = blink.mojom.ManagedConfigurationObserverRemote;
blink.mojom.ManagedConfigurationObserverRequest = blink.mojom.ManagedConfigurationObserverPendingReceiver;


// Interface: DeviceAPIService
blink.mojom.DeviceAPIService = {};

blink.mojom.DeviceAPIServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DeviceAPIServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DeviceAPIService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DeviceAPIServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.DeviceAPIServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DeviceAPIServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDirectoryId() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec,
      blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec,
      []);
  }

  getHostname() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DeviceAPIService_GetHostname_ParamsSpec,
      blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec,
      []);
  }

  getSerialNumber() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec,
      blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec,
      []);
  }

  getAnnotatedAssetId() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec,
      blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec,
      []);
  }

  getAnnotatedLocation() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec,
      blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec,
      []);
  }

};

blink.mojom.DeviceAPIService.getRemote = function() {
  let remote = new blink.mojom.DeviceAPIServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DeviceAPIService',
    'context');
  return remote.$;
};

// ParamsSpec for GetDirectoryId
blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetDirectoryId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetDirectoryId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceAttributeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetHostname
blink.mojom.DeviceAPIService_GetHostname_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetHostname_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetHostname_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceAttributeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetSerialNumber
blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetSerialNumber_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetSerialNumber_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceAttributeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetAnnotatedAssetId
blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetAnnotatedAssetId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetAnnotatedAssetId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceAttributeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetAnnotatedLocation
blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetAnnotatedLocation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeviceAPIService.GetAnnotatedLocation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceAttributeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.DeviceAPIServicePtr = blink.mojom.DeviceAPIServiceRemote;
blink.mojom.DeviceAPIServiceRequest = blink.mojom.DeviceAPIServicePendingReceiver;


// Interface: ManagedConfigurationService
blink.mojom.ManagedConfigurationService = {};

blink.mojom.ManagedConfigurationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManagedConfigurationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManagedConfigurationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.ManagedConfigurationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManagedConfigurationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getManagedConfiguration(keys) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec,
      blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec,
      [keys]);
  }

  subscribeToManagedConfiguration(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec,
      null,
      [observer]);
  }

};

blink.mojom.ManagedConfigurationService.getRemote = function() {
  let remote = new blink.mojom.ManagedConfigurationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationService',
    'context');
  return remote.$;
};

// ParamsSpec for GetManagedConfiguration
blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManagedConfigurationService.GetManagedConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManagedConfigurationService.GetManagedConfiguration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'configurations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubscribeToManagedConfiguration
blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManagedConfigurationService.SubscribeToManagedConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ManagedConfigurationServicePtr = blink.mojom.ManagedConfigurationServiceRemote;
blink.mojom.ManagedConfigurationServiceRequest = blink.mojom.ManagedConfigurationServicePendingReceiver;

