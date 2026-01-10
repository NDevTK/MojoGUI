// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/camera.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var cros = cros || {};

arc.mojom.CameraDeviceInfoSpec = { $: {} };
arc.mojom.CameraSupportedFormatSpec = { $: {} };
arc.mojom.CameraService = {};
arc.mojom.CameraService.$interfaceName = 'arc.mojom.CameraService';
arc.mojom.CameraService_Connect_ParamsSpec = { $: {} };
arc.mojom.CameraService_Connect_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_Disconnect_ParamsSpec = { $: {} };
arc.mojom.CameraService_Disconnect_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOn_ParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOn_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOff_ParamsSpec = { $: {} };
arc.mojom.CameraService_StreamOff_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec = { $: {} };
arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec = { $: {} };
arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec = { $: {} };
arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec = { $: {} };
arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec = { $: {} };
arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec = { $: {} };
arc.mojom.CameraHost = {};
arc.mojom.CameraHost.$interfaceName = 'arc.mojom.CameraHost';
arc.mojom.CameraHost_StartCameraService_ParamsSpec = { $: {} };
arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec = { $: {} };
arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec = { $: {} };
arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec = { $: {} };
arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec = { $: {} };
arc.mojom.CameraInstance = {};
arc.mojom.CameraInstance.$interfaceName = 'arc.mojom.CameraInstance';
arc.mojom.CameraInstance_Init_ParamsSpec = { $: {} };
arc.mojom.CameraInstance_Init_ResponseParamsSpec = { $: {} };

// Struct: CameraDeviceInfo
mojo.internal.Struct(
    arc.mojom.CameraDeviceInfoSpec, 'arc.mojom.CameraDeviceInfo', [
      mojo.internal.StructField('device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('usb_vid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('usb_pid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lens_info_available_focal_lengths', 24, 0, mojo.internal.Array(mojo.internal.Float, false), null, true, 1, undefined),
      mojo.internal.StructField('lens_facing', 32, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('sensor_orientation', 36, 0, mojo.internal.Int32, 0, false, 1, undefined),
      mojo.internal.StructField('frames_to_skip_after_streamon', 40, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('horizontal_view_angle_16_9', 44, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('horizontal_view_angle_4_3', 48, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('lens_info_minimum_focus_distance', 52, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('lens_info_optimal_focus_distance', 56, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('vertical_view_angle_16_9', 60, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('vertical_view_angle_4_3', 64, 0, mojo.internal.Float, 0, false, 1, undefined),
    ],
    [[0, 32], [1, 80]]);

// Struct: CameraSupportedFormat
mojo.internal.Struct(
    arc.mojom.CameraSupportedFormatSpec, 'arc.mojom.CameraSupportedFormat', [
      mojo.internal.StructField('frameRates', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fourcc', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CameraService
mojo.internal.Struct(
    arc.mojom.CameraService_Connect_ParamsSpec, 'arc.mojom.CameraService_Connect_Params', [
      mojo.internal.StructField('device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_Connect_ResponseParamsSpec, 'arc.mojom.CameraService_Connect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_Disconnect_ParamsSpec, 'arc.mojom.CameraService_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_Disconnect_ResponseParamsSpec, 'arc.mojom.CameraService_Disconnect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOn_ParamsSpec, 'arc.mojom.CameraService_StreamOn_Params', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_rate', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOn_ResponseParamsSpec, 'arc.mojom.CameraService_StreamOn_ResponseParams', [
      mojo.internal.StructField('fds', 0, 0, mojo.internal.Array(mojo.internal.Handle, false), null, false, 0, undefined),
      mojo.internal.StructField('buffer_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('result', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOff_ParamsSpec, 'arc.mojom.CameraService_StreamOff_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_StreamOff_ResponseParamsSpec, 'arc.mojom.CameraService_StreamOff_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec, 'arc.mojom.CameraService_GetNextFrameBuffer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec, 'arc.mojom.CameraService_GetNextFrameBuffer_ResponseParams', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec, 'arc.mojom.CameraService_ReuseFrameBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec, 'arc.mojom.CameraService_ReuseFrameBuffer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec, 'arc.mojom.CameraService_GetDeviceSupportedFormats_Params', [
      mojo.internal.StructField('device_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec, 'arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParams', [
      mojo.internal.StructField('supported_formats', 0, 0, mojo.internal.Array(arc.mojom.CameraSupportedFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec, 'arc.mojom.CameraService_GetCameraDeviceInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec, 'arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParams', [
      mojo.internal.StructField('device_infos', 0, 0, mojo.internal.Array(arc.mojom.CameraDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.CameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraServicePendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(device_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.CameraService_Connect_ParamsSpec,
      arc.mojom.CameraService_Connect_ResponseParamsSpec,
      [device_path],
      false);
  }

  disconnect() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.CameraService_Disconnect_ParamsSpec,
      arc.mojom.CameraService_Disconnect_ResponseParamsSpec,
      [],
      false);
  }

  streamOn(width, height, pixel_format, frame_rate) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.CameraService_StreamOn_ParamsSpec,
      arc.mojom.CameraService_StreamOn_ResponseParamsSpec,
      [width, height, pixel_format, frame_rate],
      false);
  }

  streamOff() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.CameraService_StreamOff_ParamsSpec,
      arc.mojom.CameraService_StreamOff_ResponseParamsSpec,
      [],
      false);
  }

  getNextFrameBuffer() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec,
      arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec,
      [],
      false);
  }

  reuseFrameBuffer(buffer_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec,
      arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec,
      [buffer_id],
      false);
  }

  getDeviceSupportedFormats(device_path) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec,
      arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec,
      [device_path],
      false);
  }

  getCameraDeviceInfos() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec,
      arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.CameraService.getRemote = function() {
  let remote = new arc.mojom.CameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraService',
    'context');
  return remote.$;
};

arc.mojom.CameraServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.CameraService_Connect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connect(params.device_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.CameraService_Disconnect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disconnect();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_Disconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.CameraService_StreamOn_ParamsSpec.$.decode(message.payload);
          const result = this.impl.streamOn(params.width, params.height, params.pixel_format, params.frame_rate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_StreamOn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.CameraService_StreamOff_ParamsSpec.$.decode(message.payload);
          const result = this.impl.streamOff();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_StreamOff_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = arc.mojom.CameraService_GetNextFrameBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getNextFrameBuffer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_GetNextFrameBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = arc.mojom.CameraService_ReuseFrameBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reuseFrameBuffer(params.buffer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_ReuseFrameBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = arc.mojom.CameraService_GetDeviceSupportedFormats_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceSupportedFormats(params.device_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_GetDeviceSupportedFormats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = arc.mojom.CameraService_GetCameraDeviceInfos_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCameraDeviceInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraService_GetCameraDeviceInfos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

arc.mojom.CameraServiceReceiver = arc.mojom.CameraServiceReceiver;

arc.mojom.CameraServicePtr = arc.mojom.CameraServiceRemote;
arc.mojom.CameraServiceRequest = arc.mojom.CameraServicePendingReceiver;


// Interface: CameraHost
mojo.internal.Struct(
    arc.mojom.CameraHost_StartCameraService_ParamsSpec, 'arc.mojom.CameraHost_StartCameraService_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec, 'arc.mojom.CameraHost_StartCameraService_ResponseParams', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CameraServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClientLegacy_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec, 'arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.CameraHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CameraHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startCameraService() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.CameraHost_StartCameraService_ParamsSpec,
      arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec,
      [],
      false);
  }

  registerCameraHalClientLegacy(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec,
      null,
      [client],
      false);
  }

  registerCameraHalClient(client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec,
      arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec,
      [client],
      false);
  }

};

arc.mojom.CameraHost.getRemote = function() {
  let remote = new arc.mojom.CameraHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraHost',
    'context');
  return remote.$;
};

arc.mojom.CameraHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.CameraHost_StartCameraService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startCameraService();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraHost_StartCameraService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.CameraHost_RegisterCameraHalClientLegacy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerCameraHalClientLegacy(params.client);
          break;
        }
        case 2: {
          const params = arc.mojom.CameraHost_RegisterCameraHalClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerCameraHalClient(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraHost_RegisterCameraHalClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

arc.mojom.CameraHostReceiver = arc.mojom.CameraHostReceiver;

arc.mojom.CameraHostPtr = arc.mojom.CameraHostRemote;
arc.mojom.CameraHostRequest = arc.mojom.CameraHostPendingReceiver;


// Interface: CameraInstance
mojo.internal.Struct(
    arc.mojom.CameraInstance_Init_ParamsSpec, 'arc.mojom.CameraInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CameraHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CameraInstance_Init_ResponseParamsSpec, 'arc.mojom.CameraInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.CameraInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CameraInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.CameraInstance_Init_ParamsSpec,
      arc.mojom.CameraInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.CameraInstance.getRemote = function() {
  let remote = new arc.mojom.CameraInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraInstance',
    'context');
  return remote.$;
};

arc.mojom.CameraInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.CameraInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CameraInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

arc.mojom.CameraInstanceReceiver = arc.mojom.CameraInstanceReceiver;

arc.mojom.CameraInstancePtr = arc.mojom.CameraInstanceRemote;
arc.mojom.CameraInstanceRequest = arc.mojom.CameraInstancePendingReceiver;

