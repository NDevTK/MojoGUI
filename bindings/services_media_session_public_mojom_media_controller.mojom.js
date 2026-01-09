// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_controller.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Interface: MediaControllerManager
media_session.mojom.MediaControllerManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaControllerManager';
  }

};

media_session.mojom.MediaControllerManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaController
media_session.mojom.MediaControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaController';
  }

};

media_session.mojom.MediaControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaControllerObserver
media_session.mojom.MediaControllerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaControllerObserver';
  }

};

media_session.mojom.MediaControllerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaControllerImageObserver
media_session.mojom.MediaControllerImageObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaControllerImageObserver';
  }

};

media_session.mojom.MediaControllerImageObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
