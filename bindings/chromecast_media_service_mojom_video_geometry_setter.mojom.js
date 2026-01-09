// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/media/service/mojom/video_geometry_setter.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};


// Interface: VideoGeometryChangeClient
chromecast.media.mojom.VideoGeometryChangeClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.media.mojom.VideoGeometryChangeClient';
  }

  onVideoGeometryChange(rect_f, transform) {
    // Method: OnVideoGeometryChange
    // Call: OnVideoGeometryChange(rect_f, transform)
  }

};

chromecast.media.mojom.VideoGeometryChangeClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoGeometryChangeSubscriber
chromecast.media.mojom.VideoGeometryChangeSubscriberPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.media.mojom.VideoGeometryChangeSubscriber';
  }

  subscribeToVideoGeometryChange(overlay_plane_id, client_pending_remote) {
    // Method: SubscribeToVideoGeometryChange
    // Call: SubscribeToVideoGeometryChange(overlay_plane_id, client_pending_remote)
  }

};

chromecast.media.mojom.VideoGeometryChangeSubscriberRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoGeometrySetter
chromecast.media.mojom.VideoGeometrySetterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.media.mojom.VideoGeometrySetter';
  }

  setVideoGeometry(rect_f, transform, overlay_plane_id) {
    // Method: SetVideoGeometry
    // Call: SetVideoGeometry(rect_f, transform, overlay_plane_id)
  }

};

chromecast.media.mojom.VideoGeometrySetterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
