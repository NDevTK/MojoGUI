// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/xr/webxr_internals/mojom/webxr_internals.mojom
// Module: webxr.mojom

'use strict';

// Module namespace
var webxr = webxr || {};
webxr.mojom = webxr.mojom || {};


// Struct: DeviceInfo
webxr.mojom.mojom.DeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.DeviceInfo',
      packedSize: 40,
      fields: [
        { name: 'operating_system_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'operating_system_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gpu_gl_vendor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gpu_gl_renderer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SessionRequestedRecord
webxr.mojom.mojom.SessionRequestedRecordSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.SessionRequestedRecord',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRSessionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'requested_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SessionRejectedRecord
webxr.mojom.mojom.SessionRejectedRecordSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.SessionRejectedRecord',
      packedSize: 48,
      fields: [
        { name: 'trace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'failure_reason', packedOffset: 32, packedBitOffset: 0, type: device.mojom.RequestSessionErrorSpec, nullable: false, minVersion: 0 },
        { name: 'rejected_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'failure_reason_description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'rejected_features', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: SessionStartedRecord
webxr.mojom.mojom.SessionStartedRecordSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.SessionStartedRecord',
      packedSize: 32,
      fields: [
        { name: 'trace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: device.mojom.XRDeviceIdSpec, nullable: false, minVersion: 0 },
        { name: 'started_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SessionStoppedRecord
webxr.mojom.mojom.SessionStoppedRecordSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.SessionStoppedRecord',
      packedSize: 24,
      fields: [
        { name: 'trace_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'stopped_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RuntimeInfo
webxr.mojom.mojom.RuntimeInfoSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.RuntimeInfo',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRDeviceIdSpec, nullable: false, minVersion: 0 },
        { name: 'supported_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_ar_blend_mode_supported', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebXrInternalsHandler
webxr.mojom.mojom.WebXrInternalsHandler = {};

webxr.mojom.mojom.WebXrInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webxr.mojom.mojom.WebXrInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'webxr.mojom.WebXrInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webxr.mojom.mojom.WebXrInternalsHandlerPendingReceiver,
      handle);
    this.$ = new webxr.mojom.mojom.WebXrInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webxr.mojom.mojom.WebXrInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webxr.mojom.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec,
      webxr.mojom.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec,
      []);
  }

  getActiveRuntimes() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webxr.mojom.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec,
      webxr.mojom.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec,
      []);
  }

  subscribeToEvents(listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webxr.mojom.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec,
      null,
      [listener]);
  }

};

webxr.mojom.mojom.WebXrInternalsHandler.getRemote = function() {
  let remote = new webxr.mojom.mojom.WebXrInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webxr.mojom.WebXrInternalsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDeviceInfo
webxr.mojom.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetDeviceInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webxr.mojom.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetDeviceInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: webxr.mojom.DeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetActiveRuntimes
webxr.mojom.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetActiveRuntimes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

webxr.mojom.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetActiveRuntimes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'active_runtimes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(webxr.mojom.RuntimeInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubscribeToEvents
webxr.mojom.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.SubscribeToEvents_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webxr.mojom.mojom.WebXrInternalsHandlerPtr = webxr.mojom.mojom.WebXrInternalsHandlerRemote;
webxr.mojom.mojom.WebXrInternalsHandlerRequest = webxr.mojom.mojom.WebXrInternalsHandlerPendingReceiver;


// Interface: XRInternalsSessionListener
webxr.mojom.mojom.XRInternalsSessionListener = {};

webxr.mojom.mojom.XRInternalsSessionListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webxr.mojom.mojom.XRInternalsSessionListenerRemote = class {
  static get $interfaceName() {
    return 'webxr.mojom.XRInternalsSessionListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webxr.mojom.mojom.XRInternalsSessionListenerPendingReceiver,
      handle);
    this.$ = new webxr.mojom.mojom.XRInternalsSessionListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webxr.mojom.mojom.XRInternalsSessionListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logXrSessionRequested(session_requested_record) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec,
      null,
      [session_requested_record]);
  }

  logXrSessionRejected(session_rejected_record) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec,
      null,
      [session_rejected_record]);
  }

  logXrSessionStarted(session_started_record) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec,
      null,
      [session_started_record]);
  }

  logXrSessionStopped(session_stopped_record) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec,
      null,
      [session_stopped_record]);
  }

  logXrRuntimeAdded(runtime_added_record) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec,
      null,
      [runtime_added_record]);
  }

  logXrRuntimeRemoved(device_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec,
      null,
      [device_id]);
  }

  logFrameData(xrframe_statistics) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec,
      null,
      [xrframe_statistics]);
  }

  logConsoleMessages(xrlogging_statistics) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      webxr.mojom.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec,
      null,
      [xrlogging_statistics]);
  }

};

webxr.mojom.mojom.XRInternalsSessionListener.getRemote = function() {
  let remote = new webxr.mojom.mojom.XRInternalsSessionListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webxr.mojom.XRInternalsSessionListener',
    'context');
  return remote.$;
};

// ParamsSpec for LogXrSessionRequested
webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionRequested_Params',
      packedSize: 16,
      fields: [
        { name: 'session_requested_record', packedOffset: 0, packedBitOffset: 0, type: webxr.mojom.SessionRequestedRecordSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogXrSessionRejected
webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionRejected_Params',
      packedSize: 16,
      fields: [
        { name: 'session_rejected_record', packedOffset: 0, packedBitOffset: 0, type: webxr.mojom.SessionRejectedRecordSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogXrSessionStarted
webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'session_started_record', packedOffset: 0, packedBitOffset: 0, type: webxr.mojom.SessionStartedRecordSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogXrSessionStopped
webxr.mojom.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionStopped_Params',
      packedSize: 16,
      fields: [
        { name: 'session_stopped_record', packedOffset: 0, packedBitOffset: 0, type: webxr.mojom.SessionStoppedRecordSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogXrRuntimeAdded
webxr.mojom.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrRuntimeAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'runtime_added_record', packedOffset: 0, packedBitOffset: 0, type: webxr.mojom.RuntimeInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogXrRuntimeRemoved
webxr.mojom.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrRuntimeRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XRDeviceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogFrameData
webxr.mojom.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogFrameData_Params',
      packedSize: 16,
      fields: [
        { name: 'xrframe_statistics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrFrameStatisticsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogConsoleMessages
webxr.mojom.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogConsoleMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'xrlogging_statistics', packedOffset: 0, packedBitOffset: 0, type: device.mojom.XrLogMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webxr.mojom.mojom.XRInternalsSessionListenerPtr = webxr.mojom.mojom.XRInternalsSessionListenerRemote;
webxr.mojom.mojom.XRInternalsSessionListenerRequest = webxr.mojom.mojom.XRInternalsSessionListenerPendingReceiver;

