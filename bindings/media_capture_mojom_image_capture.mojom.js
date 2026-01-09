// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/image_capture.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: BackgroundBlurMode
media.mojom.BackgroundBlurMode = {
  OFF: 0,
  BLUR: 1,
};

// Enum: EyeGazeCorrectionMode
media.mojom.EyeGazeCorrectionMode = {
  OFF: 0,
  ON: 1,
  STARE: 2,
};

// Enum: MeteringMode
media.mojom.MeteringMode = {
  NONE: 0,
  MANUAL: 1,
  SINGLE_SHOT: 2,
  CONTINUOUS: 3,
};

// Enum: RedEyeReduction
media.mojom.RedEyeReduction = {
  NEVER: 0,
  ALWAYS: 1,
  CONTROLLABLE: 2,
};

// Enum: FillLightMode
media.mojom.FillLightMode = {
  OFF: 0,
  AUTO: 1,
  FLASH: 2,
};

// Interface: ImageCapture
media.mojom.ImageCapturePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.ImageCaptureRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ImageCapture';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.ImageCapturePendingReceiver,
      handle);
    this.$ = new media.mojom.ImageCaptureRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.ImageCaptureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPhotoState(source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.ImageCapture_GetPhotoState_ParamsSpec.$,
      media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec.$,
      [source_id]);
  }

  setPhotoOptions(source_id, settings) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec.$,
      media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec.$,
      [source_id, settings]);
  }

  takePhoto(source_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.ImageCapture_TakePhoto_ParamsSpec.$,
      media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec.$,
      [source_id]);
  }

};

media.mojom.ImageCapture.getRemote = function() {
  let remote = new media.mojom.ImageCaptureRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ImageCapture',
    'context');
  return remote.$;
}};

// ParamsSpec for GetPhotoState
media.mojom.ImageCapture_GetPhotoState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.GetPhotoState_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.GetPhotoState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPhotoOptions
media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.SetPhotoOptions_Params',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.SetPhotoOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for TakePhoto
media.mojom.ImageCapture_TakePhoto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.TakePhoto_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ImageCapture.TakePhoto_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
media.mojom.ImageCapturePtr = media.mojom.ImageCaptureRemote;
media.mojom.ImageCaptureRequest = media.mojom.ImageCapturePendingReceiver;

