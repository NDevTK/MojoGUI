// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/xr/webxr_internals/mojom/webxr_internals.mojom
// Module: webxr.mojom

'use strict';

// Module namespace
var webxr = webxr || {};
webxr.mojom = webxr.mojom || {};


// Interface: WebXrInternalsHandler
webxr.mojom.WebXrInternalsHandler = {};

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

// ParamsSpec for GetDeviceInfo
webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetDeviceInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetDeviceInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetActiveRuntimes
webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetActiveRuntimes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.GetActiveRuntimes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'active_runtimes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubscribeToEvents
webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.WebXrInternalsHandler.SubscribeToEvents_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webxr.mojom.WebXrInternalsHandlerPtr = webxr.mojom.WebXrInternalsHandlerRemote;
webxr.mojom.WebXrInternalsHandlerRequest = webxr.mojom.WebXrInternalsHandlerPendingReceiver;


// Interface: XRInternalsSessionListener
webxr.mojom.XRInternalsSessionListener = {};

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

// ParamsSpec for LogXrSessionRequested
webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionRequested_Params',
      packedSize: 16,
      fields: [
        { name: 'session_requested_record', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogXrSessionRejected
webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionRejected_Params',
      packedSize: 16,
      fields: [
        { name: 'session_rejected_record', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogXrSessionStarted
webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'session_started_record', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogXrSessionStopped
webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrSessionStopped_Params',
      packedSize: 16,
      fields: [
        { name: 'session_stopped_record', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogXrRuntimeAdded
webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrRuntimeAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'runtime_added_record', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogXrRuntimeRemoved
webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogXrRuntimeRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogFrameData
webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogFrameData_Params',
      packedSize: 16,
      fields: [
        { name: 'xrframe_statistics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LogConsoleMessages
webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webxr.mojom.XRInternalsSessionListener.LogConsoleMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'xrlogging_statistics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webxr.mojom.XRInternalsSessionListenerPtr = webxr.mojom.XRInternalsSessionListenerRemote;
webxr.mojom.XRInternalsSessionListenerRequest = webxr.mojom.XRInternalsSessionListenerPendingReceiver;

