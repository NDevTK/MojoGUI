// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Enum: CreatePushSubscriptionSuccessCode
video_capture.mojom.CreatePushSubscriptionSuccessCode = {
  kCreatedWithRequestedSettings: 0,
  kCreatedWithDifferentSettings: 1,
};

// Interface: PushVideoStreamSubscription
video_capture.mojom.PushVideoStreamSubscription = {};

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
      video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec.$,
      null,
      []);
  }

  suspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec.$,
      null,
      []);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec.$,
      null,
      []);
  }

  getPhotoState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec.$,
      video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec.$,
      []);
  }

  setPhotoOptions(settings) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec.$,
      video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec.$,
      [settings]);
  }

  takePhoto() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec.$,
      video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec.$,
      []);
  }

  close() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec.$,
      null,
      []);
  }

  processFeedback(feedback) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec.$,
      null,
      [feedback]);
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

// ParamsSpec for Activate
video_capture.mojom.PushVideoStreamSubscription_Activate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Activate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Suspend
video_capture.mojom.PushVideoStreamSubscription_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Resume
video_capture.mojom.PushVideoStreamSubscription_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPhotoState
video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.GetPhotoState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.PushVideoStreamSubscription_GetPhotoState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.GetPhotoState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPhotoOptions
video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.SetPhotoOptions_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.PushVideoStreamSubscription_SetPhotoOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.SetPhotoOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TakePhoto
video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.TakePhoto_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.PushVideoStreamSubscription_TakePhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.TakePhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Close
video_capture.mojom.PushVideoStreamSubscription_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ProcessFeedback
video_capture.mojom.PushVideoStreamSubscription_ProcessFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.PushVideoStreamSubscription.ProcessFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.PushVideoStreamSubscriptionPtr = video_capture.mojom.PushVideoStreamSubscriptionRemote;
video_capture.mojom.PushVideoStreamSubscriptionRequest = video_capture.mojom.PushVideoStreamSubscriptionPendingReceiver;


// Interface: VideoSource
video_capture.mojom.VideoSource = {};

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
      video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec.$,
      video_capture.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec.$,
      [subscriber, requested_settings, force_reopen_with_new_settings, subscription]);
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

// ParamsSpec for CreatePushSubscription
video_capture.mojom.VideoSource_CreatePushSubscription_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSource.CreatePushSubscription_Params',
      packedSize: 40,
      fields: [
        { name: 'subscriber', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'requested_settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'force_reopen_with_new_settings', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'subscription', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.VideoSource_CreatePushSubscription_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoSource.CreatePushSubscription_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'settings_source_was_opened_with', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.VideoSourcePtr = video_capture.mojom.VideoSourceRemote;
video_capture.mojom.VideoSourceRequest = video_capture.mojom.VideoSourcePendingReceiver;

