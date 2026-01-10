// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/camera.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: CameraDeviceInfo
arc.mojom.mojom.CameraDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraDeviceInfo',
      packedSize: 80,
      fields: [
        { name: 'device_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'usb_vid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'usb_pid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'lens_facing', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'sensor_orientation', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 1 },
        { name: 'frames_to_skip_after_streamon', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'horizontal_view_angle_16_9', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
        { name: 'horizontal_view_angle_4_3', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
        { name: 'lens_info_available_focal_lengths', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: true, minVersion: 1 },
        { name: 'lens_info_minimum_focus_distance', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
        { name: 'lens_info_optimal_focus_distance', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
        { name: 'vertical_view_angle_16_9', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
        { name: 'vertical_view_angle_4_3', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 80}]
    }
  }
};

// Struct: CameraSupportedFormat
arc.mojom.mojom.CameraSupportedFormatSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraSupportedFormat',
      packedSize: 32,
      fields: [
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fourcc', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frameRates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: CameraService
arc.mojom.mojom.CameraService = {};

arc.mojom.mojom.CameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.CameraServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.CameraServicePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.CameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.CameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(device_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.CameraService_Connect_ParamsSpec,
      arc.mojom.mojom.CameraService_Connect_ResponseParamsSpec,
      [device_path]);
  }

  disconnect() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.CameraService_Disconnect_ParamsSpec,
      null,
      []);
  }

  streamOn(width, height, pixel_format, frame_rate) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.CameraService_StreamOn_ParamsSpec,
      arc.mojom.mojom.CameraService_StreamOn_ResponseParamsSpec,
      [width, height, pixel_format, frame_rate]);
  }

  streamOff() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.CameraService_StreamOff_ParamsSpec,
      arc.mojom.mojom.CameraService_StreamOff_ResponseParamsSpec,
      []);
  }

  getNextFrameBuffer() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.CameraService_GetNextFrameBuffer_ParamsSpec,
      arc.mojom.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec,
      []);
  }

  reuseFrameBuffer(buffer_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.CameraService_ReuseFrameBuffer_ParamsSpec,
      arc.mojom.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec,
      [buffer_id]);
  }

  getDeviceSupportedFormats(device_path) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec,
      arc.mojom.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec,
      [device_path]);
  }

  getCameraDeviceInfos() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec,
      arc.mojom.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.CameraService.getRemote = function() {
  let remote = new arc.mojom.mojom.CameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraService',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
arc.mojom.mojom.CameraService_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'device_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.CameraService_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.Connect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Disconnect
arc.mojom.mojom.CameraService_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.Disconnect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StreamOn
arc.mojom.mojom.CameraService_StreamOn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.StreamOn_Params',
      packedSize: 24,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pixel_format', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frame_rate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.CameraService_StreamOn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.StreamOn_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'fds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Handle, false), nullable: false, minVersion: 0 },
        { name: 'buffer_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StreamOff
arc.mojom.mojom.CameraService_StreamOff_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.StreamOff_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.CameraService_StreamOff_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.StreamOff_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNextFrameBuffer
arc.mojom.mojom.CameraService_GetNextFrameBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.GetNextFrameBuffer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.GetNextFrameBuffer_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_size', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReuseFrameBuffer
arc.mojom.mojom.CameraService_ReuseFrameBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.ReuseFrameBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.ReuseFrameBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDeviceSupportedFormats
arc.mojom.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.GetDeviceSupportedFormats_Params',
      packedSize: 16,
      fields: [
        { name: 'device_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.GetDeviceSupportedFormats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported_formats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.CameraSupportedFormatSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCameraDeviceInfos
arc.mojom.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.GetCameraDeviceInfos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraService.GetCameraDeviceInfos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.CameraDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.CameraServicePtr = arc.mojom.mojom.CameraServiceRemote;
arc.mojom.mojom.CameraServiceRequest = arc.mojom.mojom.CameraServicePendingReceiver;


// Interface: CameraHost
arc.mojom.mojom.CameraHost = {};

arc.mojom.mojom.CameraHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.CameraHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.CameraHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.CameraHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.CameraHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startCameraService() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.CameraHost_StartCameraService_ParamsSpec,
      arc.mojom.mojom.CameraHost_StartCameraService_ResponseParamsSpec,
      []);
  }

  registerCameraHalClientLegacy(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec,
      null,
      [client]);
  }

  registerCameraHalClient(client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec,
      arc.mojom.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec,
      [client]);
  }

};

arc.mojom.mojom.CameraHost.getRemote = function() {
  let remote = new arc.mojom.mojom.CameraHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraHost',
    'context');
  return remote.$;
};

// ParamsSpec for StartCameraService
arc.mojom.mojom.CameraHost_StartCameraService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraHost.StartCameraService_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.CameraHost_StartCameraService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraHost.StartCameraService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterCameraHalClientLegacy
arc.mojom.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraHost.RegisterCameraHalClientLegacy_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterCameraHalClient
arc.mojom.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraHost.RegisterCameraHalClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraHost.RegisterCameraHalClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.CameraHostPtr = arc.mojom.mojom.CameraHostRemote;
arc.mojom.mojom.CameraHostRequest = arc.mojom.mojom.CameraHostPendingReceiver;


// Interface: CameraInstance
arc.mojom.mojom.CameraInstance = {};

arc.mojom.mojom.CameraInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.CameraInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.CameraInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.CameraInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.CameraInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.CameraInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.CameraInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.CameraInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.CameraInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CameraInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.CameraInstancePtr = arc.mojom.mojom.CameraInstanceRemote;
arc.mojom.mojom.CameraInstanceRequest = arc.mojom.mojom.CameraInstancePendingReceiver;

