// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source.mojom
// Module: video_capture.mojom

'use strict';

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
};

video_capture.mojom.PushVideoStreamSubscriptionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activate() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec,
      null,
      [],
      false);
  }

  suspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_Suspend_ResponseParamsSpec,
      [],
      false);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  getPhotoState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec,
      [],
      false);
  }

  setPhotoOptions(settings) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec,
      [settings],
      false);
  }

  takePhoto() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec,
      [],
      false);
  }

  close() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec,
      video_capture.mojom.PushVideoStreamSubscription_Close_ResponseParamsSpec,
      [],
      false);
  }

  processFeedback(feedback) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: Activate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Activate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Suspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suspend (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetPhotoState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPhotoState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetPhotoOptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPhotoOptions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TakePhoto
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakePhoto (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ProcessFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessFeedback (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.activate');
          const result = this.impl.activate();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suspend');
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
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPhotoState');
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
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPhotoOptions');
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
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.takePhoto');
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
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.close');
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
          const params = decoder.decodeStruct(video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processFeedback');
          const result = this.impl.processFeedback(params.feedback);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      mojo.internal.StructField('subscription', 16, 0, mojo.internal.InterfaceRequest(video_capture.mojom.PushVideoStreamSubscriptionSpec), null, false, 0, undefined),
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
};

video_capture.mojom.VideoSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPushSubscription(subscriber, requested_settings, force_reopen_with_new_settings, subscription) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: CreatePushSubscription
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePushSubscription (0)');
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
          const params = decoder.decodeStruct(video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPushSubscription');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.VideoSourceReceiver = video_capture.mojom.VideoSourceReceiver;

video_capture.mojom.VideoSourcePtr = video_capture.mojom.VideoSourceRemote;
video_capture.mojom.VideoSourceRequest = video_capture.mojom.VideoSourcePendingReceiver;

