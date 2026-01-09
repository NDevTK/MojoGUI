// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/lobster/lobster.mojom
// Module: lobster.mojom

'use strict';

// Module namespace
var lobster = lobster || {};
lobster.mojom = lobster.mojom || {};


// Enum: StatusCode
lobster.mojom.StatusCode = {
};

// Enum: WebUIMetricEvent
lobster.mojom.WebUIMetricEvent = {
};

// Struct: Candidate
lobster.mojom.Candidate = class {
  constructor(values = {}) {
    this.data_url = values.data_url !== undefined ? values.data_url : 0;
  }
};

// Struct: Error
lobster.mojom.Error = class {
  constructor(values = {}) {
  }
};

// Struct: FeedbackPreview
lobster.mojom.FeedbackPreview = class {
  constructor(values = {}) {
    this.preview_data_url = values.preview_data_url !== undefined ? values.preview_data_url : "";
  }
};

// Interface: UntrustedLobsterPageHandler
lobster.mojom.UntrustedLobsterPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lobster.mojom.UntrustedLobsterPageHandler';
  }

};

lobster.mojom.UntrustedLobsterPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
