// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/xr/webxr_internals/mojom/webxr_internals.mojom
// Module: webxr.mojom

'use strict';

// Module namespace
var webxr = webxr || {};
webxr.mojom = webxr.mojom || {};

webxr.mojom.DeviceInfoSpec = { $: {} };
webxr.mojom.SessionRequestedRecordSpec = { $: {} };
webxr.mojom.SessionRejectedRecordSpec = { $: {} };
webxr.mojom.SessionStartedRecordSpec = { $: {} };
webxr.mojom.SessionStoppedRecordSpec = { $: {} };
webxr.mojom.RuntimeInfoSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler = {};
webxr.mojom.WebXrInternalsHandler.$interfaceName = 'webxr.mojom.WebXrInternalsHandler';
webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener = {};
webxr.mojom.XRInternalsSessionListener.$interfaceName = 'webxr.mojom.XRInternalsSessionListener';
webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec = { $: {} };

// Struct: DeviceInfo
mojo.internal.Struct(
    webxr.mojom.DeviceInfoSpec, 'webxr.mojom.DeviceInfo', [
      mojo.internal.StructField('operating_system_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('operating_system_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gpu_gl_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gpu_gl_renderer', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SessionRequestedRecord
mojo.internal.Struct(
    webxr.mojom.SessionRequestedRecordSpec, 'webxr.mojom.SessionRequestedRecord', [
      mojo.internal.StructField('options', 0, 0, device.mojom.XRSessionOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('requested_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SessionRejectedRecord
mojo.internal.Struct(
    webxr.mojom.SessionRejectedRecordSpec, 'webxr.mojom.SessionRejectedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('failure_reason', 32, 0, device.mojom.RequestSessionErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('rejected_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('failure_reason_description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rejected_features', 24, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SessionStartedRecord
mojo.internal.Struct(
    webxr.mojom.SessionStartedRecordSpec, 'webxr.mojom.SessionStartedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 16, 0, device.mojom.XRDeviceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('started_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SessionStoppedRecord
mojo.internal.Struct(
    webxr.mojom.SessionStoppedRecordSpec, 'webxr.mojom.SessionStoppedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stopped_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RuntimeInfo
mojo.internal.Struct(
    webxr.mojom.RuntimeInfoSpec, 'webxr.mojom.RuntimeInfo', [
      mojo.internal.StructField('device_id', 8, 0, device.mojom.XRDeviceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('supported_features', 0, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('is_ar_blend_mode_supported', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebXrInternalsHandler
mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_info', 0, 0, webxr.mojom.DeviceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParams', [
      mojo.internal.StructField('active_runtimes', 0, 0, mojo.internal.Array(webxr.mojom.RuntimeInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(webxr.mojom.XRInternalsSessionListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

webxr.mojom.WebXrInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webxr.mojom.WebXrInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'webxr.mojom.WebXrInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webxr.mojom.WebXrInternalsHandlerPendingReceiver,
      handle);
    this.$ = new webxr.mojom.WebXrInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webxr.mojom.WebXrInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec,
      webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec,
      []);
  }

  getActiveRuntimes() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec,
      webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec,
      []);
  }

  subscribeToEvents(listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec,
      null,
      [listener]);
  }

};

webxr.mojom.WebXrInternalsHandler.getRemote = function() {
  let remote = new webxr.mojom.WebXrInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webxr.mojom.WebXrInternalsHandler',
    'context');
  return remote.$;
};

webxr.mojom.WebXrInternalsHandlerPtr = webxr.mojom.WebXrInternalsHandlerRemote;
webxr.mojom.WebXrInternalsHandlerRequest = webxr.mojom.WebXrInternalsHandlerPendingReceiver;


// Interface: XRInternalsSessionListener
mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_Params', [
      mojo.internal.StructField('session_requested_record', 0, 0, webxr.mojom.SessionRequestedRecordSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_Params', [
      mojo.internal.StructField('session_rejected_record', 0, 0, webxr.mojom.SessionRejectedRecordSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_Params', [
      mojo.internal.StructField('session_started_record', 0, 0, webxr.mojom.SessionStartedRecordSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_Params', [
      mojo.internal.StructField('session_stopped_record', 0, 0, webxr.mojom.SessionStoppedRecordSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_Params', [
      mojo.internal.StructField('runtime_added_record', 0, 0, webxr.mojom.RuntimeInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_Params', [
      mojo.internal.StructField('device_id', 0, 0, device.mojom.XRDeviceIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogFrameData_Params', [
      mojo.internal.StructField('xrframe_statistics', 0, 0, device.mojom.XrFrameStatisticsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_Params', [
      mojo.internal.StructField('xrlogging_statistics', 0, 0, device.mojom.XrLogMessageSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

webxr.mojom.XRInternalsSessionListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webxr.mojom.XRInternalsSessionListenerRemote = class {
  static get $interfaceName() {
    return 'webxr.mojom.XRInternalsSessionListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webxr.mojom.XRInternalsSessionListenerPendingReceiver,
      handle);
    this.$ = new webxr.mojom.XRInternalsSessionListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webxr.mojom.XRInternalsSessionListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logXrSessionRequested(session_requested_record) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec,
      null,
      [session_requested_record]);
  }

  logXrSessionRejected(session_rejected_record) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec,
      null,
      [session_rejected_record]);
  }

  logXrSessionStarted(session_started_record) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec,
      null,
      [session_started_record]);
  }

  logXrSessionStopped(session_stopped_record) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec,
      null,
      [session_stopped_record]);
  }

  logXrRuntimeAdded(runtime_added_record) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec,
      null,
      [runtime_added_record]);
  }

  logXrRuntimeRemoved(device_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec,
      null,
      [device_id]);
  }

  logFrameData(xrframe_statistics) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec,
      null,
      [xrframe_statistics]);
  }

  logConsoleMessages(xrlogging_statistics) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec,
      null,
      [xrlogging_statistics]);
  }

};

webxr.mojom.XRInternalsSessionListener.getRemote = function() {
  let remote = new webxr.mojom.XRInternalsSessionListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webxr.mojom.XRInternalsSessionListener',
    'context');
  return remote.$;
};

webxr.mojom.XRInternalsSessionListenerPtr = webxr.mojom.XRInternalsSessionListenerRemote;
webxr.mojom.XRInternalsSessionListenerRequest = webxr.mojom.XRInternalsSessionListenerPendingReceiver;

