// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source_provider.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Enum: GetSourceInfosResult
video_capture.mojom.GetSourceInfosResult = {
  kSuccess: 0,
  kErrorDroppedRequest: 1,
};

// Interface: VideoSourceProvider
video_capture.mojom.VideoSourceProvider = {};

video_capture.mojom.VideoSourceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoSourceProviderRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoSourceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoSourceProviderPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoSourceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.VideoSourceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSourceInfos() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec.$,
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec.$,
      []);
  }

  getVideoSource(source_id, stream) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec.$,
      null,
      [source_id, stream]);
  }

  addSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec.$,
      null,
      [device_info, producer, virtual_device_receiver]);
  }

  addTextureVirtualDevice(device_info, virtual_device_receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec.$,
      null,
      [device_info, virtual_device_receiver]);
  }

  registerVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec.$,
      null,
      [observer, raise_event_if_virtual_devices_already_present]);
  }

  registerDevicesChangedObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  close() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.VideoSourceProvider_Close_ParamsSpec.$,
      null,
      []);
  }

};

video_capture.mojom.VideoSourceProvider.getRemote = function() {
  let remote = new video_capture.mojom.VideoSourceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoSourceProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetSourceInfos
video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.GetSourceInfos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.GetSourceInfos_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVideoSource
video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.GetVideoSource_Params',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddSharedMemoryVirtualDevice
video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.AddSharedMemoryVirtualDevice_Params',
      packedSize: 32,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'producer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'virtual_device_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddTextureVirtualDevice
video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.AddTextureVirtualDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'virtual_device_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterVirtualDevicesChangedObserver
video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.RegisterVirtualDevicesChangedObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'raise_event_if_virtual_devices_already_present', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterDevicesChangedObserver
video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.RegisterDevicesChangedObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Close
video_capture.mojom.VideoSourceProvider_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSourceProvider.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.VideoSourceProviderPtr = video_capture.mojom.VideoSourceProviderRemote;
video_capture.mojom.VideoSourceProviderRequest = video_capture.mojom.VideoSourceProviderPendingReceiver;

