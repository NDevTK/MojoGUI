// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_foundation_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: GpuInfoObserver
media.mojom.GpuInfoObserver = {};

media.mojom.GpuInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.GpuInfoObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.GpuInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.GpuInfoObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.GpuInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.GpuInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGpuInfoUpdate(gpu_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec.$,
      null,
      [gpu_info]);
  }

};

media.mojom.GpuInfoObserver.getRemote = function() {
  let remote = new media.mojom.GpuInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.GpuInfoObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnGpuInfoUpdate
media.mojom.GpuInfoObserver_OnGpuInfoUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.GpuInfoObserver.OnGpuInfoUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'gpu_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.GpuInfoObserverPtr = media.mojom.GpuInfoObserverRemote;
media.mojom.GpuInfoObserverRequest = media.mojom.GpuInfoObserverPendingReceiver;


// Interface: MediaFoundationService
media.mojom.MediaFoundationService = {};

media.mojom.MediaFoundationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationServicePendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isKeySystemSupported(key_system) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec.$,
      media.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec.$,
      [key_system]);
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec.$,
      null,
      [factory, frame_interfaces]);
  }

};

media.mojom.MediaFoundationService.getRemote = function() {
  let remote = new media.mojom.MediaFoundationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationService',
    'context');
  return remote.$;
};

// ParamsSpec for IsKeySystemSupported
media.mojom.MediaFoundationService_IsKeySystemSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationService.IsKeySystemSupported_Params',
      packedSize: 16,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaFoundationService_IsKeySystemSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationService.IsKeySystemSupported_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_system_capability', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateInterfaceFactory
media.mojom.MediaFoundationService_CreateInterfaceFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationService.CreateInterfaceFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_interfaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaFoundationServicePtr = media.mojom.MediaFoundationServiceRemote;
media.mojom.MediaFoundationServiceRequest = media.mojom.MediaFoundationServicePendingReceiver;


// Interface: MediaFoundationServiceBroker
media.mojom.MediaFoundationServiceBroker = {};

media.mojom.MediaFoundationServiceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationServiceBrokerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationServiceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationServiceBrokerPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationServiceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationServiceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateGpuInfo(gpu_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec.$,
      media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec.$,
      [gpu_info]);
  }

  getService(cdm_path, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec.$,
      null,
      [cdm_path, receiver]);
  }

};

media.mojom.MediaFoundationServiceBroker.getRemote = function() {
  let remote = new media.mojom.MediaFoundationServiceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationServiceBroker',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateGpuInfo
media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationServiceBroker.UpdateGpuInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'gpu_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaFoundationServiceBroker_UpdateGpuInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationServiceBroker.UpdateGpuInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'gpu_info_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetService
media.mojom.MediaFoundationServiceBroker_GetService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationServiceBroker.GetService_Params',
      packedSize: 24,
      fields: [
        { name: 'cdm_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaFoundationServiceBrokerPtr = media.mojom.MediaFoundationServiceBrokerRemote;
media.mojom.MediaFoundationServiceBrokerRequest = media.mojom.MediaFoundationServiceBrokerPendingReceiver;

