// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onStateChanged(result) {
    return this.$.onStateChanged(result);
  }
  onNewBuffer(buffer_id, buffer_handle) {
    return this.$.onNewBuffer(buffer_id, buffer_handle);
  }
  onBufferReady(buffer) {
    return this.$.onBufferReady(buffer);
  }
  onBufferDestroyed(buffer_id) {
    return this.$.onBufferDestroyed(buffer_id);
  }
  onFrameDropped(reason) {
    return this.$.onFrameDropped(reason);
  }
  onNewCaptureVersion(capture_version) {
    return this.$.onNewCaptureVersion(capture_version);
  }
};

media.mojom.VideoCaptureObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStateChanged(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec,
      null,
      [result],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  onBufferReady(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferDestroyed(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onFrameDropped(reason) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  onNewCaptureVersion(capture_version) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onStateChanged(params.result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferReady(params.buffer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferDestroyed(params.buffer_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec.$.structSpec);
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
      }
      } catch (err) {}
    }});
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
      mojo.internal.StructField('observer', 24, 0, mojo.internal.InterfaceProxy(media.mojom.VideoCaptureObserverRemote), null, false, 0, undefined),
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
  start(device_id, session_id, params, observer) {
    return this.$.start(device_id, session_id, params, observer);
  }
  stop(device_id) {
    return this.$.stop(device_id);
  }
  pause(device_id) {
    return this.$.pause(device_id);
  }
  resume(device_id, session_id, params) {
    return this.$.resume(device_id, session_id, params);
  }
  requestRefreshFrame(device_id) {
    return this.$.requestRefreshFrame(device_id);
  }
  releaseBuffer(device_id, buffer_id, feedback) {
    return this.$.releaseBuffer(device_id, buffer_id, feedback);
  }
  getDeviceSupportedFormats(device_id, session_id) {
    return this.$.getDeviceSupportedFormats(device_id, session_id);
  }
  getDeviceFormatsInUse(device_id, session_id) {
    return this.$.getDeviceFormatsInUse(device_id, session_id);
  }
  onLog(device_id, message) {
    return this.$.onLog(device_id, message);
  }
};

media.mojom.VideoCaptureHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  start(device_id, session_id, params, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoCaptureHost_Start_ParamsSpec,
      null,
      [device_id, session_id, params, observer],
      false);
  }

  stop(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoCaptureHost_Stop_ParamsSpec,
      null,
      [device_id],
      false);
  }

  pause(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.VideoCaptureHost_Pause_ParamsSpec,
      null,
      [device_id],
      false);
  }

  resume(device_id, session_id, params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.VideoCaptureHost_Resume_ParamsSpec,
      null,
      [device_id, session_id, params],
      false);
  }

  requestRefreshFrame(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec,
      null,
      [device_id],
      false);
  }

  releaseBuffer(device_id, buffer_id, feedback) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec,
      null,
      [device_id, buffer_id, feedback],
      false);
  }

  getDeviceSupportedFormats(device_id, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec,
      media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec,
      [device_id, session_id],
      false);
  }

  getDeviceFormatsInUse(device_id, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec,
      media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec,
      [device_id, session_id],
      false);
  }

  onLog(device_id, message) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_Pause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoCaptureHost_OnLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.device_id, params.session_id, params.params, params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop(params.device_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_Pause_ParamsSpec.$.structSpec);
          const result = this.impl.pause(params.device_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume(params.device_id, params.session_id, params.params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec.$.structSpec);
          const result = this.impl.requestRefreshFrame(params.device_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.releaseBuffer(params.device_id, params.buffer_id, params.feedback);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceSupportedFormats(params.device_id, params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceFormatsInUse(params.device_id, params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoCaptureHost_OnLog_ParamsSpec.$.structSpec);
          const result = this.impl.onLog(params.device_id, params.message);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.VideoCaptureHostReceiver = media.mojom.VideoCaptureHostReceiver;

media.mojom.VideoCaptureHostPtr = media.mojom.VideoCaptureHostRemote;
media.mojom.VideoCaptureHostRequest = media.mojom.VideoCaptureHostPendingReceiver;

