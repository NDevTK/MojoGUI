// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Enum: CreatePushSubscriptionSuccessCode
video_capture.mojom.mojom.CreatePushSubscriptionSuccessCode = {
  kCreatedWithRequestedSettings: 0,
  kCreatedWithDifferentSettings: 1,
};
video_capture.mojom.mojom.CreatePushSubscriptionSuccessCodeSpec = { $: mojo.internal.Enum() };

// Union: CreatePushSubscriptionResultCode
video_capture.mojom.mojom.CreatePushSubscriptionResultCodeSpec = { $: mojo.internal.Union(
    'video_capture.mojom.CreatePushSubscriptionResultCode', {
      'success_code': {
        'ordinal': 0,
        'type': video_capture.mojom.CreatePushSubscriptionSuccessCodeSpec,
      }},
      'error_code': {
        'ordinal': 1,
        'type': media.mojom.VideoCaptureErrorSpec,
      }},
    })
};

// Interface: PushVideoStreamSubscription
video_capture.mojom.mojom.PushVideoStreamSubscription = {};

video_capture.mojom.mojom.PushVideoStreamSubscriptionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.mojom.PushVideoStreamSubscriptionRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.PushVideoStreamSubscription';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.mojom.PushVideoStreamSubscriptionPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.mojom.PushVideoStreamSubscriptionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.mojom.PushVideoStreamSubscriptionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activate() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_Activate_ParamsSpec,
      null,
      []);
  }

  suspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_Resume_ParamsSpec,
      null,
      []);
  }

  getPhotoState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec,
      video_capture.mojom.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec,
      []);
  }

  setPhotoOptions(settings) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec,
      video_capture.mojom.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec,
      [settings]);
  }

  takePhoto() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec,
      video_capture.mojom.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec,
      []);
  }

  close() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_Close_ParamsSpec,
      null,
      []);
  }

  processFeedback(feedback) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      video_capture.mojom.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec,
      null,
      [feedback]);
  }

};

video_capture.mojom.mojom.PushVideoStreamSubscription.getRemote = function() {
  let remote = new video_capture.mojom.mojom.PushVideoStreamSubscriptionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.PushVideoStreamSubscription',
    'context');
  return remote.$;
};

// ParamsSpec for Activate
video_capture.mojom.mojom.PushVideoStreamSubscription_Activate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Activate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Suspend
video_capture.mojom.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
video_capture.mojom.mojom.PushVideoStreamSubscription_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetPhotoState
video_capture.mojom.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.GetPhotoState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

video_capture.mojom.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.GetPhotoState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PhotoStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPhotoOptions
video_capture.mojom.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.SetPhotoOptions_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: media.mojom.PhotoSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

video_capture.mojom.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.SetPhotoOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TakePhoto
video_capture.mojom.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.TakePhoto_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

video_capture.mojom.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.TakePhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: media.mojom.BlobSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Close
video_capture.mojom.mojom.PushVideoStreamSubscription_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ProcessFeedback
video_capture.mojom.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.ProcessFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.mojom.PushVideoStreamSubscriptionPtr = video_capture.mojom.mojom.PushVideoStreamSubscriptionRemote;
video_capture.mojom.mojom.PushVideoStreamSubscriptionRequest = video_capture.mojom.mojom.PushVideoStreamSubscriptionPendingReceiver;


// Interface: VideoSource
video_capture.mojom.mojom.VideoSource = {};

video_capture.mojom.mojom.VideoSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.mojom.VideoSourceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.mojom.VideoSourcePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.mojom.VideoSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.mojom.VideoSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPushSubscription(subscriber, requested_settings, force_reopen_with_new_settings, subscription) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.mojom.VideoSource_CreatePushSubscription_ParamsSpec,
      video_capture.mojom.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec,
      [subscriber, requested_settings, force_reopen_with_new_settings, subscription]);
  }

};

video_capture.mojom.mojom.VideoSource.getRemote = function() {
  let remote = new video_capture.mojom.mojom.VideoSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoSource',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePushSubscription
video_capture.mojom.mojom.VideoSource_CreatePushSubscription_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSource.CreatePushSubscription_Params',
      packedSize: 32,
      fields: [
        { name: 'subscriber', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'requested_settings', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureParamsSpec, nullable: false, minVersion: 0 },
        { name: 'force_reopen_with_new_settings', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'subscription', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

video_capture.mojom.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSource.CreatePushSubscription_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: video_capture.mojom.CreatePushSubscriptionResultCodeSpec, nullable: false, minVersion: 0 },
        { name: 'settings_source_was_opened_with', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoCaptureParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.mojom.VideoSourcePtr = video_capture.mojom.mojom.VideoSourceRemote;
video_capture.mojom.mojom.VideoSourceRequest = video_capture.mojom.mojom.VideoSourcePendingReceiver;

