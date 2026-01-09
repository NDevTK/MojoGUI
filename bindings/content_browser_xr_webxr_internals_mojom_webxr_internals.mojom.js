// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/xr/webxr_internals/mojom/webxr_internals.mojom
// Module: webxr.mojom

'use strict';

// Module namespace
var webxr = webxr || {};
webxr.mojom = webxr.mojom || {};


// Struct: DeviceInfo
webxr.mojom.DeviceInfo = class {
  constructor(values = {}) {
    this.gpu_gl_renderer = values.gpu_gl_renderer !== undefined ? values.gpu_gl_renderer : "";
  }
};

// Struct: SessionRequestedRecord
webxr.mojom.SessionRequestedRecord = class {
  constructor(values = {}) {
    this.requested_time = values.requested_time !== undefined ? values.requested_time : null;
  }
};

// Struct: SessionRejectedRecord
webxr.mojom.SessionRejectedRecord = class {
  constructor(values = {}) {
    this.rejected_features = values.rejected_features !== undefined ? values.rejected_features : 0;
  }
};

// Struct: SessionStartedRecord
webxr.mojom.SessionStartedRecord = class {
  constructor(values = {}) {
    this.started_time = values.started_time !== undefined ? values.started_time : 0;
  }
};

// Struct: SessionStoppedRecord
webxr.mojom.SessionStoppedRecord = class {
  constructor(values = {}) {
    this.stopped_time = values.stopped_time !== undefined ? values.stopped_time : 0;
  }
};

// Struct: RuntimeInfo
webxr.mojom.RuntimeInfo = class {
  constructor(values = {}) {
    this.is_ar_blend_mode_supported = values.is_ar_blend_mode_supported !== undefined ? values.is_ar_blend_mode_supported : false;
  }
};

// Interface: WebXrInternalsHandler
webxr.mojom.WebXrInternalsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webxr.mojom.WebXrInternalsHandler';
  }

  getDeviceInfo() {
    // Method: GetDeviceInfo
    return new Promise((resolve) => {
      // Call: GetDeviceInfo()
      resolve({});
    });
  }

  getActiveRuntimes() {
    // Method: GetActiveRuntimes
    return new Promise((resolve) => {
      // Call: GetActiveRuntimes()
      resolve({});
    });
  }

  subscribeToEvents(listener) {
    // Method: SubscribeToEvents
    // Call: SubscribeToEvents(listener)
  }

};

webxr.mojom.WebXrInternalsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: XRInternalsSessionListener
webxr.mojom.XRInternalsSessionListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webxr.mojom.XRInternalsSessionListener';
  }

  logXrSessionRequested(session_requested_record) {
    // Method: LogXrSessionRequested
    // Call: LogXrSessionRequested(session_requested_record)
  }

  logXrSessionRejected(session_rejected_record) {
    // Method: LogXrSessionRejected
    // Call: LogXrSessionRejected(session_rejected_record)
  }

  logXrSessionStarted(session_started_record) {
    // Method: LogXrSessionStarted
    // Call: LogXrSessionStarted(session_started_record)
  }

  logXrSessionStopped(session_stopped_record) {
    // Method: LogXrSessionStopped
    // Call: LogXrSessionStopped(session_stopped_record)
  }

  logXrRuntimeAdded(runtime_added_record) {
    // Method: LogXrRuntimeAdded
    // Call: LogXrRuntimeAdded(runtime_added_record)
  }

  logXrRuntimeRemoved(device_id) {
    // Method: LogXrRuntimeRemoved
    // Call: LogXrRuntimeRemoved(device_id)
  }

  logFrameData(xrframe_statistics) {
    // Method: LogFrameData
    // Call: LogFrameData(xrframe_statistics)
  }

  logConsoleMessages(xrlogging_statistics) {
    // Method: LogConsoleMessages
    // Call: LogConsoleMessages(xrlogging_statistics)
  }

};

webxr.mojom.XRInternalsSessionListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
