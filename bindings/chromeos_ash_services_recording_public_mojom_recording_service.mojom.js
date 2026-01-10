// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/recording/public/mojom/recording_service.mojom
// Module: recording.mojom

'use strict';

// Module namespace
var recording = recording || {};
recording.mojom = recording.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var viz = viz || {};
var gfx = gfx || {};

recording.mojom.RecordingStatusSpec = { $: mojo.internal.Enum() };
recording.mojom.DriveFsQuotaDelegate = {};
recording.mojom.DriveFsQuotaDelegate.$interfaceName = 'recording.mojom.DriveFsQuotaDelegate';
recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec = { $: {} };
recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec = { $: {} };
recording.mojom.RecordingServiceClient = {};
recording.mojom.RecordingServiceClient.$interfaceName = 'recording.mojom.RecordingServiceClient';
recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec = { $: {} };
recording.mojom.RecordingService = {};
recording.mojom.RecordingService.$interfaceName = 'recording.mojom.RecordingService';
recording.mojom.RecordingService_RecordFullscreen_ParamsSpec = { $: {} };
recording.mojom.RecordingService_RecordWindow_ParamsSpec = { $: {} };
recording.mojom.RecordingService_RecordRegion_ParamsSpec = { $: {} };
recording.mojom.RecordingService_StopRecording_ParamsSpec = { $: {} };
recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec = { $: {} };
recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec = { $: {} };
recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec = { $: {} };

// Enum: RecordingStatus
recording.mojom.RecordingStatus = {
  kSuccess: 0,
  kServiceClosing: 1,
  kVizVideoCapturerDisconnected: 2,
  kAudioEncoderInitializationFailure: 3,
  kVideoEncoderInitializationFailure: 4,
  kAudioEncodingError: 5,
  kVideoEncodingError: 6,
  kIoError: 7,
  kLowDiskSpace: 8,
  kLowDriveFsQuota: 9,
  kVideoEncoderReconfigurationFailure: 10,
};

// Interface: DriveFsQuotaDelegate
mojo.internal.Struct(
    recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec, 'recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec, 'recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParams', [
      mojo.internal.StructField('free_remaining_bytes', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

recording.mojom.DriveFsQuotaDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.DriveFsQuotaDelegateRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.DriveFsQuotaDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.DriveFsQuotaDelegatePendingReceiver,
      handle);
    this.$ = new recording.mojom.DriveFsQuotaDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.DriveFsQuotaDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDriveFsFreeSpaceBytes() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec,
      recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec,
      [],
      false);
  }

};

recording.mojom.DriveFsQuotaDelegate.getRemote = function() {
  let remote = new recording.mojom.DriveFsQuotaDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.DriveFsQuotaDelegate',
    'context');
  return remote.$;
};

recording.mojom.DriveFsQuotaDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDriveFsFreeSpaceBytes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDriveFsFreeSpaceBytes (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDriveFsFreeSpaceBytes');
          const result = this.impl.getDriveFsFreeSpaceBytes();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

recording.mojom.DriveFsQuotaDelegateReceiver = recording.mojom.DriveFsQuotaDelegateReceiver;

recording.mojom.DriveFsQuotaDelegatePtr = recording.mojom.DriveFsQuotaDelegateRemote;
recording.mojom.DriveFsQuotaDelegateRequest = recording.mojom.DriveFsQuotaDelegatePendingReceiver;


// Interface: RecordingServiceClient
mojo.internal.Struct(
    recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec, 'recording.mojom.RecordingServiceClient_OnRecordingEnded_Params', [
      mojo.internal.StructField('status', 0, 0, recording.mojom.RecordingStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail', 8, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

recording.mojom.RecordingServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.RecordingServiceClientRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.RecordingServiceClientPendingReceiver,
      handle);
    this.$ = new recording.mojom.RecordingServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.RecordingServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRecordingEnded(status, thumbnail) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec,
      null,
      [status, thumbnail],
      false);
  }

};

recording.mojom.RecordingServiceClient.getRemote = function() {
  let remote = new recording.mojom.RecordingServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingServiceClient',
    'context');
  return remote.$;
};

recording.mojom.RecordingServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnRecordingEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordingEnded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRecordingEnded');
          const result = this.impl.onRecordingEnded(params.status, params.thumbnail);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

recording.mojom.RecordingServiceClientReceiver = recording.mojom.RecordingServiceClientReceiver;

recording.mojom.RecordingServiceClientPtr = recording.mojom.RecordingServiceClientRemote;
recording.mojom.RecordingServiceClientRequest = recording.mojom.RecordingServiceClientPendingReceiver;


// Interface: RecordingService
mojo.internal.Struct(
    recording.mojom.RecordingService_RecordFullscreen_ParamsSpec, 'recording.mojom.RecordingService_RecordFullscreen_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(recording.mojom.RecordingServiceClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('video_capturer', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(recording.mojom.DriveFsQuotaDelegateSpec), null, true, 0, undefined),
      mojo.internal.StructField('output_file_path', 40, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 48, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_size_dip', 56, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_RecordWindow_ParamsSpec, 'recording.mojom.RecordingService_RecordWindow_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(recording.mojom.RecordingServiceClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('video_capturer', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(recording.mojom.DriveFsQuotaDelegateSpec), null, true, 0, undefined),
      mojo.internal.StructField('output_file_path', 40, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 48, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_size_dip', 56, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subtree_capture_id', 64, 0, viz.mojom.SubtreeCaptureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_size_dip', 72, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_RecordRegion_ParamsSpec, 'recording.mojom.RecordingService_RecordRegion_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(recording.mojom.RecordingServiceClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('video_capturer', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(recording.mojom.DriveFsQuotaDelegateSpec), null, true, 0, undefined),
      mojo.internal.StructField('output_file_path', 40, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 48, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_size_dip', 56, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('crop_region_dip', 64, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 88]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_StopRecording_ParamsSpec, 'recording.mojom.RecordingService_StopRecording_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec, 'recording.mojom.RecordingService_OnRecordedWindowChangingRoot_Params', [
      mojo.internal.StructField('new_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_frame_sink_size_dip', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_device_scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec, 'recording.mojom.RecordingService_OnRecordedWindowSizeChanged_Params', [
      mojo.internal.StructField('new_window_size_dip', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec, 'recording.mojom.RecordingService_OnFrameSinkSizeChanged_Params', [
      mojo.internal.StructField('new_frame_sink_size_dip', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_device_scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

recording.mojom.RecordingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.RecordingServiceRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.RecordingServicePendingReceiver,
      handle);
    this.$ = new recording.mojom.RecordingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.RecordingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordFullscreen(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.RecordingService_RecordFullscreen_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor],
      false);
  }

  recordWindow(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      recording.mojom.RecordingService_RecordWindow_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip],
      false);
  }

  recordRegion(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      recording.mojom.RecordingService_RecordRegion_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip],
      false);
  }

  stopRecording() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      recording.mojom.RecordingService_StopRecording_ParamsSpec,
      null,
      [],
      false);
  }

  onRecordedWindowChangingRoot(new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec,
      null,
      [new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor],
      false);
  }

  onRecordedWindowSizeChanged(new_window_size_dip) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec,
      null,
      [new_window_size_dip],
      false);
  }

  onFrameSinkSizeChanged(new_frame_sink_size_dip, new_device_scale_factor) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec,
      null,
      [new_frame_sink_size_dip, new_device_scale_factor],
      false);
  }

};

recording.mojom.RecordingService.getRemote = function() {
  let remote = new recording.mojom.RecordingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingService',
    'context');
  return remote.$;
};

recording.mojom.RecordingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RecordFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingService_RecordFullscreen_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordFullscreen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RecordWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingService_RecordWindow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordWindow (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RecordRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingService_RecordRegion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordRegion (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopRecording
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingService_StopRecording_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopRecording (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnRecordedWindowChangingRoot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordedWindowChangingRoot (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnRecordedWindowSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecordedWindowSizeChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnFrameSinkSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameSinkSizeChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingService_RecordFullscreen_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordFullscreen');
          const result = this.impl.recordFullscreen(params.client, params.video_capturer, params.microphone_stream_factory, params.system_audio_stream_factory, params.drive_fs_quota_delegate, params.output_file_path, params.frame_sink_id, params.frame_sink_size_dip, params.device_scale_factor);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingService_RecordWindow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordWindow');
          const result = this.impl.recordWindow(params.client, params.video_capturer, params.microphone_stream_factory, params.system_audio_stream_factory, params.drive_fs_quota_delegate, params.output_file_path, params.frame_sink_id, params.frame_sink_size_dip, params.device_scale_factor, params.subtree_capture_id, params.window_size_dip);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingService_RecordRegion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordRegion');
          const result = this.impl.recordRegion(params.client, params.video_capturer, params.microphone_stream_factory, params.system_audio_stream_factory, params.drive_fs_quota_delegate, params.output_file_path, params.frame_sink_id, params.frame_sink_size_dip, params.device_scale_factor, params.crop_region_dip);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingService_StopRecording_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopRecording');
          const result = this.impl.stopRecording();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRecordedWindowChangingRoot');
          const result = this.impl.onRecordedWindowChangingRoot(params.new_frame_sink_id, params.new_frame_sink_size_dip, params.new_device_scale_factor);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRecordedWindowSizeChanged');
          const result = this.impl.onRecordedWindowSizeChanged(params.new_window_size_dip);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameSinkSizeChanged');
          const result = this.impl.onFrameSinkSizeChanged(params.new_frame_sink_size_dip, params.new_device_scale_factor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

recording.mojom.RecordingServiceReceiver = recording.mojom.RecordingServiceReceiver;

recording.mojom.RecordingServicePtr = recording.mojom.RecordingServiceRemote;
recording.mojom.RecordingServiceRequest = recording.mojom.RecordingServicePendingReceiver;

