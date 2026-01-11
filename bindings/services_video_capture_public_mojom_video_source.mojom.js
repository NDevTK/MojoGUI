// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source.mojom
// Module: video_capture.mojom

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};

video_capture.mojom.CreatePushSubscriptionSuccessCodeSpec = { $: mojo.internal.Enum() };
video_capture.mojom.CreatePushSubscriptionResultCodeSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription = {};
video_capture.mojom.PushVideoStreamSubscription.$interfaceName = 'video_capture.mojom.PushVideoStreamSubscription';
video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_Suspend_ResponseParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_Close_ResponseParamsSpec = { $: {} };
video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec = { $: {} };
video_capture.mojom.VideoSource = {};
video_capture.mojom.VideoSource.$interfaceName = 'video_capture.mojom.VideoSource';
video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec = { $: {} };
video_capture.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec = { $: {} };

// Enum: CreatePushSubscriptionSuccessCode
video_capture.mojom.CreatePushSubscriptionSuccessCode = {
  kCreatedWithRequestedSettings: 0,
  kCreatedWithDifferentSettings: 1,
};

// Union: CreatePushSubscriptionResultCode
mojo.internal.Union(
    video_capture.mojom.CreatePushSubscriptionResultCodeSpec, 'video_capture.mojom.CreatePushSubscriptionResultCode', {
      'success_code': {
        'ordinal': 0,
        'type': video_capture.mojom.CreatePushSubscriptionSuccessCodeSpec.$,
        'nullable': false,
      },
      'error_code': {
        'ordinal': 1,
        'type': media.mojom.VideoCaptureErrorSpec.$,
        'nullable': false,
      },
    });

// Interface: PushVideoStreamSubscription
mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_Activate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_Suspend_ResponseParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_Suspend_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, media.mojom.PhotoStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_Params', [
      mojo.internal.StructField('settings', 0, 0, media.mojom.PhotoSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_TakePhoto_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, media.mojom.BlobSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_Close_ResponseParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_Close_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec, 'video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.PushVideoStreamSubscriptionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.PushVideoStreamSubscriptionRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.PushVideoStreamSubscription';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.PushVideoStreamSubscriptionPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.PushVideoStreamSubscriptionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  activate() {
    return this.$.activate();
  }
  suspend() {
    return this.$.suspend();
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
  close() {
    return this.$.close();
  }
  processFeedback(feedback) {
    return this.$.processFeedback(feedback);
  }
};

video_capture.mojom.PushVideoStreamSubscriptionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PushVideoStreamSubscription', [
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

  activate() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec,
      null,
      [],
      false);
  }

  suspend() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_Suspend_ResponseParamsSpec,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  getPhotoState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec,
      [],
      false);
  }

  setPhotoOptions(settings) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec,
      [settings],
      false);
  }

  takePhoto() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec,
      [],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_Close_ResponseParamsSpec,
      [],
      false);
  }

  processFeedback(feedback) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

};

video_capture.mojom.PushVideoStreamSubscription.getRemote = function() {
  let remote = new video_capture.mojom.PushVideoStreamSubscriptionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.PushVideoStreamSubscription',
    'context');
  return remote.$;
};

video_capture.mojom.PushVideoStreamSubscriptionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PushVideoStreamSubscription', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec.$.structSpec);
          const result = this.impl.activate();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec.$.structSpec);
          const result = this.impl.suspend();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.PushVideoStreamSubscription_Suspend_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec.$.structSpec);
          const result = this.impl.getPhotoState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec.$.structSpec);
          const result = this.impl.setPhotoOptions(params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec.$.structSpec);
          const result = this.impl.takePhoto();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec.$.structSpec);
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.PushVideoStreamSubscription_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.processFeedback(params.feedback);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.PushVideoStreamSubscriptionReceiver = video_capture.mojom.PushVideoStreamSubscriptionReceiver;

video_capture.mojom.PushVideoStreamSubscriptionPtr = video_capture.mojom.PushVideoStreamSubscriptionRemote;
video_capture.mojom.PushVideoStreamSubscriptionRequest = video_capture.mojom.PushVideoStreamSubscriptionPendingReceiver;


// Interface: VideoSource
mojo.internal.Struct(
    video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec, 'video_capture.mojom.VideoSource_CreatePushSubscription_Params', [
      mojo.internal.StructField('subscriber', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('requested_settings', 8, 0, media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subscription', 16, 0, mojo.internal.InterfaceRequest(video_capture.mojom.PushVideoStreamSubscriptionRemote), null, false, 0, undefined),
      mojo.internal.StructField('force_reopen_with_new_settings', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec, 'video_capture.mojom.VideoSource_CreatePushSubscription_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, video_capture.mojom.CreatePushSubscriptionResultCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings_source_was_opened_with', 8, 0, media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

video_capture.mojom.VideoSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoSourceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoSourcePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPushSubscription(subscriber, requested_settings, force_reopen_with_new_settings, subscription) {
    return this.$.createPushSubscription(subscriber, requested_settings, force_reopen_with_new_settings, subscription);
  }
};

video_capture.mojom.VideoSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoSource', [
      { explicit: null },
    ]);
  }

  createPushSubscription(subscriber, requested_settings, force_reopen_with_new_settings, subscription) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec,
      video_capture.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec,
      [subscriber, requested_settings, force_reopen_with_new_settings, subscription],
      false);
  }

};

video_capture.mojom.VideoSource.getRemote = function() {
  let remote = new video_capture.mojom.VideoSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoSource',
    'context');
  return remote.$;
};

video_capture.mojom.VideoSourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoSource', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec.$.structSpec);
          const result = this.impl.createPushSubscription(params.subscriber, params.requested_settings, params.force_reopen_with_new_settings, params.subscription);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.VideoSourceReceiver = video_capture.mojom.VideoSourceReceiver;

video_capture.mojom.VideoSourcePtr = video_capture.mojom.VideoSourceRemote;
video_capture.mojom.VideoSourceRequest = video_capture.mojom.VideoSourcePendingReceiver;

