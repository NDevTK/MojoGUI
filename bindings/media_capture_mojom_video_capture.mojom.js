// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.VideoCaptureStateSpec = { $: mojo.internal.Enum() };
media.mojom.VideoCaptureResultSpec = { $: {} };
media.mojom.VideoCaptureObserver = {};
media.mojom.VideoCaptureObserver.$interfaceName = 'media.mojom.VideoCaptureObserver';
media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec = { $: {} };
media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec = { $: {} };
media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec = { $: {} };
media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec = { $: {} };
media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec = { $: {} };
media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost = {};
media.mojom.VideoCaptureHost.$interfaceName = 'media.mojom.VideoCaptureHost';
media.mojom.VideoCaptureHost_Start_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_Stop_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_Pause_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_Resume_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec = { $: {} };
media.mojom.VideoCaptureHost_OnLog_ParamsSpec = { $: {} };

// Enum: VideoCaptureState
media.mojom.VideoCaptureState = {
  STARTED: 0,
  PAUSED: 1,
  RESUMED: 2,
  STOPPED: 3,
  ENDED: 4,
};

// Union: VideoCaptureResult
mojo.internal.Union(
    media.mojom.VideoCaptureResultSpec, 'media.mojom.VideoCaptureResult', {
      'state': {
        'ordinal': 0,
        'type': media.mojom.VideoCaptureStateSpec.$,
        'nullable': false,
      },
      'error_code': {
        'ordinal': 1,
        'type': media.mojom.VideoCaptureErrorSpec.$,
        'nullable': false,
      },
    });

// Interface: VideoCaptureObserver
mojo.internal.Struct(
    media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnStateChanged_Params', [
      mojo.internal.StructField('result', 0, 0, media.mojom.VideoCaptureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnBufferReady_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.ReadyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnBufferDestroyed_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnFrameDropped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.VideoCaptureFrameDropReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('capture_version', 0, 0, media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoCaptureObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoCaptureObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoCaptureObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoCaptureObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoCaptureObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoCaptureObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStateChanged(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec,
      null,
      [result],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  onBufferReady(buffer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferDestroyed(buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onFrameDropped(reason) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

};

media.mojom.VideoCaptureObserver.getRemote = function() {
  let remote = new media.mojom.VideoCaptureObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoCaptureObserver',
    'context');
  return remote.$;
};

media.mojom.VideoCaptureObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStateChanged(params.result);
          break;
        }
        case 1: {
          const params = media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 2: {
          const params = media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBufferReady(params.buffer);
          break;
        }
        case 3: {
          const params = media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBufferDestroyed(params.buffer_id);
          break;
        }
        case 4: {
          const params = media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 5: {
          const params = media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
      }
    });
  }
};

media.mojom.VideoCaptureObserverReceiver = media.mojom.VideoCaptureObserverReceiver;

media.mojom.VideoCaptureObserverPtr = media.mojom.VideoCaptureObserverRemote;
media.mojom.VideoCaptureObserverRequest = media.mojom.VideoCaptureObserverPendingReceiver;


// Interface: VideoCaptureHost
mojo.internal.Struct(
    media.mojom.VideoCaptureHost_Start_ParamsSpec, 'media.mojom.VideoCaptureHost_Start_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 16, 0, media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 24, 0, mojo.internal.InterfaceProxy(media.mojom.VideoCaptureObserverSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_Stop_ParamsSpec, 'media.mojom.VideoCaptureHost_Stop_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_Pause_ParamsSpec, 'media.mojom.VideoCaptureHost_Pause_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_Resume_ParamsSpec, 'media.mojom.VideoCaptureHost_Resume_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 16, 0, media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec, 'media.mojom.VideoCaptureHost_RequestRefreshFrame_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec, 'media.mojom.VideoCaptureHost_ReleaseBuffer_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feedback', 8, 0, media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams', [
      mojo.internal.StructField('formats_supported', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams', [
      mojo.internal.StructField('formats_in_use', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoCaptureHost_OnLog_ParamsSpec, 'media.mojom.VideoCaptureHost_OnLog_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.VideoCaptureHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoCaptureHostRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoCaptureHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoCaptureHostPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoCaptureHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoCaptureHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(device_id, session_id, params, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoCaptureHost_Start_ParamsSpec,
      null,
      [device_id, session_id, params, observer],
      false);
  }

  stop(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoCaptureHost_Stop_ParamsSpec,
      null,
      [device_id],
      false);
  }

  pause(device_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoCaptureHost_Pause_ParamsSpec,
      null,
      [device_id],
      false);
  }

  resume(device_id, session_id, params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoCaptureHost_Resume_ParamsSpec,
      null,
      [device_id, session_id, params],
      false);
  }

  requestRefreshFrame(device_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec,
      null,
      [device_id],
      false);
  }

  releaseBuffer(device_id, buffer_id, feedback) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec,
      null,
      [device_id, buffer_id, feedback],
      false);
  }

  getDeviceSupportedFormats(device_id, session_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec,
      media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec,
      [device_id, session_id],
      false);
  }

  getDeviceFormatsInUse(device_id, session_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec,
      media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec,
      [device_id, session_id],
      false);
  }

  onLog(device_id, message) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.VideoCaptureHost_OnLog_ParamsSpec,
      null,
      [device_id, message],
      false);
  }

};

media.mojom.VideoCaptureHost.getRemote = function() {
  let remote = new media.mojom.VideoCaptureHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoCaptureHost',
    'context');
  return remote.$;
};

media.mojom.VideoCaptureHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoCaptureHost_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start(params.device_id, params.session_id, params.params, params.observer);
          break;
        }
        case 1: {
          const params = media.mojom.VideoCaptureHost_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop(params.device_id);
          break;
        }
        case 2: {
          const params = media.mojom.VideoCaptureHost_Pause_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pause(params.device_id);
          break;
        }
        case 3: {
          const params = media.mojom.VideoCaptureHost_Resume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resume(params.device_id, params.session_id, params.params);
          break;
        }
        case 4: {
          const params = media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestRefreshFrame(params.device_id);
          break;
        }
        case 5: {
          const params = media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.releaseBuffer(params.device_id, params.buffer_id, params.feedback);
          break;
        }
        case 6: {
          const params = media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceSupportedFormats(params.device_id, params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 7: {
          const params = media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeviceFormatsInUse(params.device_id, params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 8: {
          const params = media.mojom.VideoCaptureHost_OnLog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLog(params.device_id, params.message);
          break;
        }
      }
    });
  }
};

media.mojom.VideoCaptureHostReceiver = media.mojom.VideoCaptureHostReceiver;

media.mojom.VideoCaptureHostPtr = media.mojom.VideoCaptureHostRemote;
media.mojom.VideoCaptureHostRequest = media.mojom.VideoCaptureHostPendingReceiver;

