// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/external_begin_frame_controller.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: ExternalBeginFrameController
viz.mojom.ExternalBeginFrameControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.ExternalBeginFrameController';
  }

  issueExternalBeginFrame(args, force) {
    // Method: IssueExternalBeginFrame
    return new Promise((resolve) => {
      // Call: IssueExternalBeginFrame(args, force)
      resolve({});
    });
  }

  issueExternalBeginFrameNoAck(args) {
    // Method: IssueExternalBeginFrameNoAck
    // Call: IssueExternalBeginFrameNoAck(args)
  }

  issueExternalVSync(params) {
    // Method: IssueExternalVSync
    // Call: IssueExternalVSync(params)
  }

  setSupportedDisplayLinkId(display_id, is_supported) {
    // Method: SetSupportedDisplayLinkId
    // Call: SetSupportedDisplayLinkId(display_id, is_supported)
  }

};

viz.mojom.ExternalBeginFrameControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ExternalBeginFrameControllerClient
viz.mojom.ExternalBeginFrameControllerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.ExternalBeginFrameControllerClient';
  }

  setNeedsBeginFrame(needs_begin_frames) {
    // Method: SetNeedsBeginFrame
    // Call: SetNeedsBeginFrame(needs_begin_frames)
  }

  needsBeginFrameWithId(display_id, needs_begin_frames) {
    // Method: NeedsBeginFrameWithId
    // Call: NeedsBeginFrameWithId(display_id, needs_begin_frames)
  }

  setPreferredInterval(interval) {
    // Method: SetPreferredInterval
    // Call: SetPreferredInterval(interval)
  }

};

viz.mojom.ExternalBeginFrameControllerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
