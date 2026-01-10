// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source_provider.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

video_capture.mojom.GetSourceInfosResultSpec = { $: mojo.internal.Enum() };
video_capture.mojom.VideoSourceProvider = {};
video_capture.mojom.VideoSourceProvider.$interfaceName = 'video_capture.mojom.VideoSourceProvider';
video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_Close_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_Close_ResponseParamsSpec = { $: {} };

// Enum: GetSourceInfosResult
video_capture.mojom.GetSourceInfosResult = {
  kSuccess: 0,
  kErrorDroppedRequest: 1,
};

// Interface: VideoSourceProvider
mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_GetSourceInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec, 'video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, video_capture.mojom.GetSourceInfosResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_infos', 8, 0, mojo.internal.Array(media.mojom.VideoCaptureDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_GetVideoSource_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stream', 8, 0, mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_Params', [
      mojo.internal.StructField('device_info', 0, 0, media.mojom.VideoCaptureDeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('producer', 8, 0, mojo.internal.InterfaceProxy(video_capture.mojom.ProducerRemote), null, false, 0, undefined),
      mojo.internal.StructField('virtual_device_receiver', 16, 0, mojo.internal.InterfaceRequest(video_capture.mojom.SharedMemoryVirtualDeviceRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_Params', [
      mojo.internal.StructField('device_info', 0, 0, media.mojom.VideoCaptureDeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('virtual_device_receiver', 8, 0, mojo.internal.InterfaceRequest(video_capture.mojom.TextureVirtualDeviceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.DevicesChangedObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('raise_event_if_virtual_devices_already_present', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.DevicesChangedObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_Close_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_Close_ResponseParamsSpec, 'video_capture.mojom.VideoSourceProvider_Close_ResponseParams', [
    ],
    [[0, 8]]);

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
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec,
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec,
      [],
      false);
  }

  getVideoSource(source_id, stream) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec,
      null,
      [source_id, stream],
      false);
  }

  addSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec,
      null,
      [device_info, producer, virtual_device_receiver],
      false);
  }

  addTextureVirtualDevice(device_info, virtual_device_receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec,
      null,
      [device_info, virtual_device_receiver],
      false);
  }

  registerVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec,
      null,
      [observer, raise_event_if_virtual_devices_already_present],
      false);
  }

  registerDevicesChangedObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  close() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.VideoSourceProvider_Close_ParamsSpec,
      video_capture.mojom.VideoSourceProvider_Close_ResponseParamsSpec,
      [],
      false);
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

video_capture.mojom.VideoSourceProviderPtr = video_capture.mojom.VideoSourceProviderRemote;
video_capture.mojom.VideoSourceProviderRequest = video_capture.mojom.VideoSourceProviderPendingReceiver;

