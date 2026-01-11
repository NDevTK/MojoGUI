// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/scanner_feedback_ui/mojom/scanner_feedback_ui.mojom
// Module: ash.mojom.scanner_feedback_ui

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
  getFeedbackInfo() {
    return this.$.getFeedbackInfo();
  }
  closeDialog() {
    return this.$.closeDialog();
  }
  sendFeedback(user_description) {
    return this.$.sendFeedback(user_description);
  }
};

ash.mojom.scanner_feedback_ui.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getFeedbackInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec,
      ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec,
      [],
      false);
  }

  closeDialog() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec,
      null,
      [],
      false);
  }

  sendFeedback(user_description) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getFeedbackInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec.$.structSpec);
          const result = this.impl.closeDialog();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.sendFeedback(params.user_description);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.mojom.scanner_feedback_ui.PageHandlerReceiver = ash.mojom.scanner_feedback_ui.PageHandlerReceiver;

ash.mojom.scanner_feedback_ui.PageHandlerPtr = ash.mojom.scanner_feedback_ui.PageHandlerRemote;
ash.mojom.scanner_feedback_ui.PageHandlerRequest = ash.mojom.scanner_feedback_ui.PageHandlerPendingReceiver;

