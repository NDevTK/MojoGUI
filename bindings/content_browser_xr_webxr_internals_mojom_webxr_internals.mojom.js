// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/xr/webxr_internals/mojom/webxr_internals.mojom
// Module: webxr.mojom

'use strict';

// Module namespace
var webxr = webxr || {};
webxr.mojom = webxr.mojom || {};
var device = device || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('options', 0, 0, device.mojom.XRSessionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('requested_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SessionRejectedRecord
mojo.internal.Struct(
    webxr.mojom.SessionRejectedRecordSpec, 'webxr.mojom.SessionRejectedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('failure_reason', 8, 0, device.mojom.RequestSessionErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rejected_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('failure_reason_description', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rejected_features', 32, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SessionStartedRecord
mojo.internal.Struct(
    webxr.mojom.SessionStartedRecordSpec, 'webxr.mojom.SessionStartedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('started_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SessionStoppedRecord
mojo.internal.Struct(
    webxr.mojom.SessionStoppedRecordSpec, 'webxr.mojom.SessionStoppedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stopped_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RuntimeInfo
mojo.internal.Struct(
    webxr.mojom.RuntimeInfoSpec, 'webxr.mojom.RuntimeInfo', [
      mojo.internal.StructField('device_id', 0, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supported_features', 8, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_ar_blend_mode_supported', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: WebXrInternalsHandler
mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_info', 0, 0, webxr.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParams', [
      mojo.internal.StructField('active_runtimes', 0, 0, mojo.internal.Array(webxr.mojom.RuntimeInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(webxr.mojom.XRInternalsSessionListenerSpec), null, false, 0, undefined),
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
      [],
      false);
  }

  getActiveRuntimes() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec,
      webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec,
      [],
      false);
  }

  subscribeToEvents(listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec,
      null,
      [listener],
      false);
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

webxr.mojom.WebXrInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDeviceInfo
        try {
             decoder.decodeStruct(webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetActiveRuntimes
        try {
             decoder.decodeStruct(webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActiveRuntimes (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: SubscribeToEvents
        try {
             decoder.decodeStruct(webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToEvents (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeviceInfo');
          const result = this.impl.getDeviceInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getActiveRuntimes');
          const result = this.impl.getActiveRuntimes();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.subscribeToEvents');
          const result = this.impl.subscribeToEvents(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

webxr.mojom.WebXrInternalsHandlerReceiver = webxr.mojom.WebXrInternalsHandlerReceiver;

webxr.mojom.WebXrInternalsHandlerPtr = webxr.mojom.WebXrInternalsHandlerRemote;
webxr.mojom.WebXrInternalsHandlerRequest = webxr.mojom.WebXrInternalsHandlerPendingReceiver;


// Interface: XRInternalsSessionListener
mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_Params', [
      mojo.internal.StructField('session_requested_record', 0, 0, webxr.mojom.SessionRequestedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_Params', [
      mojo.internal.StructField('session_rejected_record', 0, 0, webxr.mojom.SessionRejectedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_Params', [
      mojo.internal.StructField('session_started_record', 0, 0, webxr.mojom.SessionStartedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_Params', [
      mojo.internal.StructField('session_stopped_record', 0, 0, webxr.mojom.SessionStoppedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_Params', [
      mojo.internal.StructField('runtime_added_record', 0, 0, webxr.mojom.RuntimeInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_Params', [
      mojo.internal.StructField('device_id', 0, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogFrameData_Params', [
      mojo.internal.StructField('xrframe_statistics', 0, 0, device.mojom.XrFrameStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_Params', [
      mojo.internal.StructField('xrlogging_statistics', 0, 0, device.mojom.XrLogMessageSpec.$, null, false, 0, undefined),
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
      [session_requested_record],
      false);
  }

  logXrSessionRejected(session_rejected_record) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec,
      null,
      [session_rejected_record],
      false);
  }

  logXrSessionStarted(session_started_record) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec,
      null,
      [session_started_record],
      false);
  }

  logXrSessionStopped(session_stopped_record) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec,
      null,
      [session_stopped_record],
      false);
  }

  logXrRuntimeAdded(runtime_added_record) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec,
      null,
      [runtime_added_record],
      false);
  }

  logXrRuntimeRemoved(device_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec,
      null,
      [device_id],
      false);
  }

  logFrameData(xrframe_statistics) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec,
      null,
      [xrframe_statistics],
      false);
  }

  logConsoleMessages(xrlogging_statistics) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec,
      null,
      [xrlogging_statistics],
      false);
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

webxr.mojom.XRInternalsSessionListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LogXrSessionRequested
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionRequested (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: LogXrSessionRejected
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionRejected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: LogXrSessionStarted
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionStarted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: LogXrSessionStopped
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionStopped (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: LogXrRuntimeAdded
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrRuntimeAdded (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: LogXrRuntimeRemoved
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrRuntimeRemoved (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: LogFrameData
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogFrameData (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: LogConsoleMessages
        try {
             decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogConsoleMessages (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionRequested');
          const result = this.impl.logXrSessionRequested(params.session_requested_record);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionRejected');
          const result = this.impl.logXrSessionRejected(params.session_rejected_record);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionStarted');
          const result = this.impl.logXrSessionStarted(params.session_started_record);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionStopped');
          const result = this.impl.logXrSessionStopped(params.session_stopped_record);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logXrRuntimeAdded');
          const result = this.impl.logXrRuntimeAdded(params.runtime_added_record);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logXrRuntimeRemoved');
          const result = this.impl.logXrRuntimeRemoved(params.device_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logFrameData');
          const result = this.impl.logFrameData(params.xrframe_statistics);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logConsoleMessages');
          const result = this.impl.logConsoleMessages(params.xrlogging_statistics);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

webxr.mojom.XRInternalsSessionListenerReceiver = webxr.mojom.XRInternalsSessionListenerReceiver;

webxr.mojom.XRInternalsSessionListenerPtr = webxr.mojom.XRInternalsSessionListenerRemote;
webxr.mojom.XRInternalsSessionListenerRequest = webxr.mojom.XRInternalsSessionListenerPendingReceiver;

