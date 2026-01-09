// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer_extensions.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: FrameTextureInfo
media.mojom.FrameTextureInfo = class {
  constructor(values = {}) {
    this.token = values.token !== undefined ? values.token : null;
  }
};

// Struct: FramePoolInitializationParameters
media.mojom.FramePoolInitializationParameters = class {
  constructor(values = {}) {
    this.texture_size = values.texture_size !== undefined ? values.texture_size : [];
  }
};

// Interface: FlingingRendererClientExtension
media.mojom.FlingingRendererClientExtensionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.FlingingRendererClientExtension';
  }

  onRemotePlayStateChange(state) {
    // Method: OnRemotePlayStateChange
    // Call: OnRemotePlayStateChange(state)
  }

};

media.mojom.FlingingRendererClientExtensionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaFoundationRendererExtension
media.mojom.MediaFoundationRendererExtensionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaFoundationRendererExtension';
  }

  getDCOMPSurface() {
    // Method: GetDCOMPSurface
    return new Promise((resolve) => {
      // Call: GetDCOMPSurface()
      resolve({});
    });
  }

  setVideoStreamEnabled(enabled) {
    // Method: SetVideoStreamEnabled
    // Call: SetVideoStreamEnabled(enabled)
  }

  setOutputRect(rect) {
    // Method: SetOutputRect
    return new Promise((resolve) => {
      // Call: SetOutputRect(rect)
      resolve({});
    });
  }

};

media.mojom.MediaFoundationRendererExtensionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaFoundationRendererObserver
media.mojom.MediaFoundationRendererObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaFoundationRendererObserver';
  }

};

media.mojom.MediaFoundationRendererObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaFoundationRendererNotifier
media.mojom.MediaFoundationRendererNotifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaFoundationRendererNotifier';
  }

  mediaFoundationRendererCreated(observer) {
    // Method: MediaFoundationRendererCreated
    // Call: MediaFoundationRendererCreated(observer)
  }

};

media.mojom.MediaFoundationRendererNotifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
