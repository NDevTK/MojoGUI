// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/device.mojom
// Module: video_capture.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};

video_capture.mojom.Device = {};
video_capture.mojom.Device.$interfaceName = 'video_capture.mojom.Device';
video_capture.mojom.Device_Start_ParamsSpec = { $: {} };
video_capture.mojom.Device_MaybeSuspend_ParamsSpec = { $: {} };
video_capture.mojom.Device_Resume_ParamsSpec = { $: {} };
video_capture.mojom.Device_GetPhotoState_ParamsSpec = { $: {} };
video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec = { $: {} };
video_capture.mojom.Device_SetPhotoOptions_ParamsSpec = { $: {} };
video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec = { $: {} };
video_capture.mojom.Device_TakePhoto_ParamsSpec = { $: {} };
video_capture.mojom.Device_TakePhoto_ResponseParamsSpec = { $: {} };
video_capture.mojom.Device_ProcessFeedback_ParamsSpec = { $: {} };
video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec = { $: {} };

// Interface: Device
mojo.internal.Struct(
    video_capture.mojom.Device_Start_ParamsSpec, 'video_capture.mojom.Device_Start_Params', [
      mojo.internal.StructField('requested_settings', 0, 0, media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.Device_MaybeSuspend_ParamsSpec, 'video_capture.mojom.Device_MaybeSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.Device_Resume_ParamsSpec, 'video_capture.mojom.Device_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.Device_GetPhotoState_ParamsSpec, 'video_capture.mojom.Device_GetPhotoState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec, 'video_capture.mojom.Device_GetPhotoState_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, media.mojom.PhotoStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_SetPhotoOptions_ParamsSpec, 'video_capture.mojom.Device_SetPhotoOptions_Params', [
      mojo.internal.StructField('settings', 0, 0, media.mojom.PhotoSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec, 'video_capture.mojom.Device_SetPhotoOptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_TakePhoto_ParamsSpec, 'video_capture.mojom.Device_TakePhoto_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.Device_TakePhoto_ResponseParamsSpec, 'video_capture.mojom.Device_TakePhoto_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, media.mojom.BlobSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_ProcessFeedback_ParamsSpec, 'video_capture.mojom.Device_ProcessFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec, 'video_capture.mojom.Device_RequestRefreshFrame_Params', [
    ],
    [[0, 8]]);

video_capture.mojom.DevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.DeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.Device';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.DevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.DeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(requested_settings, handler) {
    return this.$.start(requested_settings, handler);
  }
  maybeSuspend() {
    return this.$.maybeSuspend();
  }
  resume() {
    return this.$.resume();
  }
  getPhotoState() {
    return this.$.getPhotoState();
  }
  setPhotoOptions(settings) {
    return this.$.setPhotoOptions(settings);
  }
  takePhoto() {
    return this.$.takePhoto();
  }
  processFeedback(feedback) {
    return this.$.processFeedback(feedback);
  }
  requestRefreshFrame() {
    return this.$.requestRefreshFrame();
  }
};

video_capture.mojom.DeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Device', [
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

  start(requested_settings, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.Device_Start_ParamsSpec,
      null,
      [requested_settings, handler],
      false);
  }

  maybeSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.Device_MaybeSuspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.Device_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  getPhotoState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      video_capture.mojom.Device_GetPhotoState_ParamsSpec,
      video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec,
      [],
      false);
  }

  setPhotoOptions(settings) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      video_capture.mojom.Device_SetPhotoOptions_ParamsSpec,
      video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec,
      [settings],
      false);
  }

  takePhoto() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      video_capture.mojom.Device_TakePhoto_ParamsSpec,
      video_capture.mojom.Device_TakePhoto_ResponseParamsSpec,
      [],
      false);
  }

  processFeedback(feedback) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      video_capture.mojom.Device_ProcessFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  requestRefreshFrame() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec,
      null,
      [],
      false);
  }

};

video_capture.mojom.Device.getRemote = function() {
  let remote = new video_capture.mojom.DeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.Device',
    'context');
  return remote.$;
};

video_capture.mojom.DeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Device', [
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
             decoder.decodeStructInline(video_capture.mojom.Device_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Device_MaybeSuspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Device_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Device_GetPhotoState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Device_SetPhotoOptions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Device_TakePhoto_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Device_ProcessFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.requested_settings, params.handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_MaybeSuspend_ParamsSpec.$.structSpec);
          const result = this.impl.maybeSuspend();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_GetPhotoState_ParamsSpec.$.structSpec);
          const result = this.impl.getPhotoState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_SetPhotoOptions_ParamsSpec.$.structSpec);
          const result = this.impl.setPhotoOptions(params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_TakePhoto_ParamsSpec.$.structSpec);
          const result = this.impl.takePhoto();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.Device_TakePhoto_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_ProcessFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.processFeedback(params.feedback);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec.$.structSpec);
          const result = this.impl.requestRefreshFrame();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.DeviceReceiver = video_capture.mojom.DeviceReceiver;

video_capture.mojom.DevicePtr = video_capture.mojom.DeviceRemote;
video_capture.mojom.DeviceRequest = video_capture.mojom.DevicePendingReceiver;

