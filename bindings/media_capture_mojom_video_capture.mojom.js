// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoCaptureState
media.mojom.VideoCaptureState = {
  STARTED: 0,
  PAUSED: 1,
  RESUMED: 2,
  STOPPED: 3,
  ENDED: 4,
};

// Interface: VideoCaptureObserver
media.mojom.VideoCaptureObserver = {};

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
      [result]);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle]);
  }

  onBufferReady(buffer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec,
      null,
      [buffer]);
  }

  onBufferDestroyed(buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec,
      null,
      [buffer_id]);
  }

  onFrameDropped(reason) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec,
      null,
      [reason]);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version]);
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

// ParamsSpec for OnStateChanged
media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureObserver.OnStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNewBuffer
media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureObserver.OnNewBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoBufferHandleSpec, nullable: false },
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBufferReady
media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureObserver.OnBufferReady_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.ReadyBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBufferDestroyed
media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureObserver.OnBufferDestroyed_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameDropped
media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureObserver.OnFrameDropped_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFrameDropReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNewCaptureVersion
media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureObserver.OnNewCaptureVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'capture_version', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CaptureVersionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoCaptureObserverPtr = media.mojom.VideoCaptureObserverRemote;
media.mojom.VideoCaptureObserverRequest = media.mojom.VideoCaptureObserverPendingReceiver;


// Interface: VideoCaptureHost
media.mojom.VideoCaptureHost = {};

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
      [device_id, session_id, params, observer]);
  }

  stop(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoCaptureHost_Stop_ParamsSpec,
      null,
      [device_id]);
  }

  pause(device_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoCaptureHost_Pause_ParamsSpec,
      null,
      [device_id]);
  }

  resume(device_id, session_id, params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoCaptureHost_Resume_ParamsSpec,
      null,
      [device_id, session_id, params]);
  }

  requestRefreshFrame(device_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec,
      null,
      [device_id]);
  }

  releaseBuffer(device_id, buffer_id, feedback) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec,
      null,
      [device_id, buffer_id, feedback]);
  }

  getDeviceSupportedFormats(device_id, session_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec,
      media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec,
      [device_id, session_id]);
  }

  getDeviceFormatsInUse(device_id, session_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec,
      media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec,
      [device_id, session_id]);
  }

  onLog(device_id, message) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.VideoCaptureHost_OnLog_ParamsSpec,
      null,
      [device_id, message]);
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

// ParamsSpec for Start
media.mojom.VideoCaptureHost_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.Start_Params',
      packedSize: 40,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoCaptureParamsSpec, nullable: false },
        { name: 'observer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
media.mojom.VideoCaptureHost_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Pause
media.mojom.VideoCaptureHost_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.Pause_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Resume
media.mojom.VideoCaptureHost_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.Resume_Params',
      packedSize: 32,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoCaptureParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestRefreshFrame
media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.RequestRefreshFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReleaseBuffer
media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.ReleaseBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'feedback', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoCaptureFeedbackSpec, nullable: false },
        { name: 'buffer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceSupportedFormats
media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.GetDeviceSupportedFormats_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.GetDeviceSupportedFormats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'formats_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceFormatsInUse
media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.GetDeviceFormatsInUse_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.GetDeviceFormatsInUse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'formats_in_use', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLog
media.mojom.VideoCaptureHost_OnLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureHost.OnLog_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoCaptureHostPtr = media.mojom.VideoCaptureHostRemote;
media.mojom.VideoCaptureHostRequest = media.mojom.VideoCaptureHostPendingReceiver;

