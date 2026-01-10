// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_foundation_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: GpuInfoObserver
media.mojom.mojom.GpuInfoObserver = {};

media.mojom.mojom.GpuInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.GpuInfoObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.GpuInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.GpuInfoObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.GpuInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.GpuInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGpuInfoUpdate(gpu_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec,
      null,
      [gpu_info]);
  }

};

media.mojom.mojom.GpuInfoObserver.getRemote = function() {
  let remote = new media.mojom.mojom.GpuInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.GpuInfoObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnGpuInfoUpdate
media.mojom.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.GpuInfoObserver.OnGpuInfoUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'gpu_info', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.GpuInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.GpuInfoObserverPtr = media.mojom.mojom.GpuInfoObserverRemote;
media.mojom.mojom.GpuInfoObserverRequest = media.mojom.mojom.GpuInfoObserverPendingReceiver;


// Interface: MediaFoundationService
media.mojom.mojom.MediaFoundationService = {};

media.mojom.mojom.MediaFoundationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MediaFoundationServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MediaFoundationServicePendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MediaFoundationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MediaFoundationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isKeySystemSupported(key_system) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec,
      media.mojom.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec,
      [key_system]);
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec,
      null,
      [factory, frame_interfaces]);
  }

};

media.mojom.mojom.MediaFoundationService.getRemote = function() {
  let remote = new media.mojom.mojom.MediaFoundationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationService',
    'context');
  return remote.$;
};

// ParamsSpec for IsKeySystemSupported
media.mojom.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationService.IsKeySystemSupported_Params',
      packedSize: 16,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationService.IsKeySystemSupported_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_supported', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'key_system_capability', packedOffset: 0, packedBitOffset: 0, type: media.mojom.KeySystemCapabilitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateInterfaceFactory
media.mojom.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationService.CreateInterfaceFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'frame_interfaces', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.MediaFoundationServicePtr = media.mojom.mojom.MediaFoundationServiceRemote;
media.mojom.mojom.MediaFoundationServiceRequest = media.mojom.mojom.MediaFoundationServicePendingReceiver;


// Interface: MediaFoundationServiceBroker
media.mojom.mojom.MediaFoundationServiceBroker = {};

media.mojom.mojom.MediaFoundationServiceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MediaFoundationServiceBrokerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationServiceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MediaFoundationServiceBrokerPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MediaFoundationServiceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MediaFoundationServiceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateGpuInfo(gpu_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec,
      media.mojom.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec,
      [gpu_info]);
  }

  getService(cdm_path, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec,
      null,
      [cdm_path, receiver]);
  }

};

media.mojom.mojom.MediaFoundationServiceBroker.getRemote = function() {
  let remote = new media.mojom.mojom.MediaFoundationServiceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationServiceBroker',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateGpuInfo
media.mojom.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationServiceBroker.UpdateGpuInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'gpu_info', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.GpuInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationServiceBroker.UpdateGpuInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'gpu_info_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetService
media.mojom.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationServiceBroker.GetService_Params',
      packedSize: 24,
      fields: [
        { name: 'cdm_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.MediaFoundationServiceBrokerPtr = media.mojom.mojom.MediaFoundationServiceBrokerRemote;
media.mojom.mojom.MediaFoundationServiceBrokerRequest = media.mojom.mojom.MediaFoundationServiceBrokerPendingReceiver;

