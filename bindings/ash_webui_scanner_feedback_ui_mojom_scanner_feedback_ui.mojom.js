// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/scanner_feedback_ui/mojom/scanner_feedback_ui.mojom
// Module: ash.mojom.scanner_feedback_ui

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.scanner_feedback_ui = ash.mojom.scanner_feedback_ui || {};
var url = url || {};

ash.mojom.scanner_feedback_ui.FeedbackInfoSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler = {};
ash.mojom.scanner_feedback_ui.PageHandler.$interfaceName = 'ash.mojom.scanner_feedback_ui.PageHandler';
ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec = { $: {} };

// Struct: FeedbackInfo
mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.FeedbackInfoSpec, 'ash.mojom.scanner_feedback_ui.FeedbackInfo', [
      mojo.internal.StructField('action_details', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('screenshot_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandler
mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParams', [
      mojo.internal.StructField('feedback_info', 0, 0, ash.mojom.scanner_feedback_ui.FeedbackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_Params', [
      mojo.internal.StructField('user_description', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mojom.scanner_feedback_ui.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.scanner_feedback_ui.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.scanner_feedback_ui.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.scanner_feedback_ui.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.scanner_feedback_ui.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.scanner_feedback_ui.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFeedbackInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec,
      ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec,
      [],
      false);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec,
      null,
      [],
      false);
  }

  sendFeedback(user_description) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec,
      null,
      [user_description],
      false);
  }

};

ash.mojom.scanner_feedback_ui.PageHandler.getRemote = function() {
  let remote = new ash.mojom.scanner_feedback_ui.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.scanner_feedback_ui.PageHandler',
    'context');
  return remote.$;
};

ash.mojom.scanner_feedback_ui.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetFeedbackInfo
        try {
             decoder.decodeStruct(ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeedbackInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: CloseDialog
        try {
             decoder.decodeStruct(ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseDialog (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: SendFeedback
        try {
             decoder.decodeStruct(ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendFeedback (2)');
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
          const params = decoder.decodeStruct(ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFeedbackInfo');
          const result = this.impl.getFeedbackInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeDialog');
          const result = this.impl.closeDialog();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendFeedback');
          const result = this.impl.sendFeedback(params.user_description);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.scanner_feedback_ui.PageHandlerReceiver = ash.mojom.scanner_feedback_ui.PageHandlerReceiver;

ash.mojom.scanner_feedback_ui.PageHandlerPtr = ash.mojom.scanner_feedback_ui.PageHandlerRemote;
ash.mojom.scanner_feedback_ui.PageHandlerRequest = ash.mojom.scanner_feedback_ui.PageHandlerPendingReceiver;

