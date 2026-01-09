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

// Struct: Range
media.mojom.Range = class {
  constructor(values = {}) {
    this.step = values.step !== undefined ? values.step : 0;
  }
};

// Struct: PhotoState
media.mojom.PhotoState = class {
  constructor(values = {}) {
    this.current_background_segmentation_mask_state = values.current_background_segmentation_mask_state !== undefined ? values.current_background_segmentation_mask_state : 0;
  }
};

// Struct: Point2D
media.mojom.Point2D = class {
  constructor(values = {}) {
    this.y = values.y !== undefined ? values.y : 0;
  }
};

// Struct: PhotoSettings
media.mojom.PhotoSettings = class {
  constructor(values = {}) {
    this.background_segmentation_mask_state = values.background_segmentation_mask_state !== undefined ? values.background_segmentation_mask_state : 0;
  }
};

// Struct: Blob
media.mojom.Blob = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Interface: ImageCapture
media.mojom.ImageCapturePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.ImageCapture';
  }

  getPhotoState(source_id) {
    // Method: GetPhotoState
    return new Promise((resolve) => {
      // Call: GetPhotoState(source_id)
      resolve({});
    });
  }

  setPhotoOptions(source_id, settings) {
    // Method: SetPhotoOptions
    return new Promise((resolve) => {
      // Call: SetPhotoOptions(source_id, settings)
      resolve({});
    });
  }

  takePhoto(source_id) {
    // Method: TakePhoto
    return new Promise((resolve) => {
      // Call: TakePhoto(source_id)
      resolve({});
    });
  }

};

media.mojom.ImageCaptureRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
