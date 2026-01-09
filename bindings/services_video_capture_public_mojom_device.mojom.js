// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/device.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: Device
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
};

video_capture.mojom.DeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(requested_settings, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.Device_Start_ParamsSpec.$,
      null,
      [requested_settings, handler]);
  }

  maybeSuspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.Device_MaybeSuspend_ParamsSpec.$,
      null,
      []);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.Device_Resume_ParamsSpec.$,
      null,
      []);
  }

  getPhotoState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.Device_GetPhotoState_ParamsSpec.$,
      video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec.$,
      []);
  }

  setPhotoOptions(settings) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.Device_SetPhotoOptions_ParamsSpec.$,
      video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec.$,
      [settings]);
  }

  takePhoto() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.Device_TakePhoto_ParamsSpec.$,
      video_capture.mojom.Device_TakePhoto_ResponseParamsSpec.$,
      []);
  }

  processFeedback(feedback) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.Device_ProcessFeedback_ParamsSpec.$,
      null,
      [feedback]);
  }

  requestRefreshFrame() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for Start
video_capture.mojom.Device_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.Start_Params',
      packedSize: 24,
      fields: [
        { name: 'requested_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MaybeSuspend
video_capture.mojom.Device_MaybeSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.MaybeSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Resume
video_capture.mojom.Device_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPhotoState
video_capture.mojom.Device_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.GetPhotoState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.GetPhotoState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPhotoOptions
video_capture.mojom.Device_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.SetPhotoOptions_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.SetPhotoOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TakePhoto
video_capture.mojom.Device_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.TakePhoto_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

video_capture.mojom.Device_TakePhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.TakePhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ProcessFeedback
video_capture.mojom.Device_ProcessFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.ProcessFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestRefreshFrame
video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.Device.RequestRefreshFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.DevicePtr = video_capture.mojom.DeviceRemote;
video_capture.mojom.DeviceRequest = video_capture.mojom.DevicePendingReceiver;

