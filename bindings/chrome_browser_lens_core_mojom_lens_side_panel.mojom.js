// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_side_panel.mojom
// Module: lens.mojom

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var url = url || {};

lens.mojom.SidePanelResultStatusSpec = { $: mojo.internal.Enum() };
lens.mojom.LensSidePanelPageHandlerFactory = {};
lens.mojom.LensSidePanelPageHandlerFactory.$interfaceName = 'lens.mojom.LensSidePanelPageHandlerFactory';
lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPageHandler = {};
lens.mojom.LensSidePanelPageHandler.$interfaceName = 'lens.mojom.LensSidePanelPageHandler';
lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec = { $: {} };
lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage = {};
lens.mojom.LensSidePanelPage.$interfaceName = 'lens.mojom.LensSidePanelPage';
lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec = { $: {} };
lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec = { $: {} };

// Enum: SidePanelResultStatus
lens.mojom.SidePanelResultStatus = {
  kUnknown: 0,
  kResultShown: 1,
  kErrorPageShownOffline: 2,
  kErrorPageShownStartQueryError: 3,
  kErrorPageShownProtected: 4,
};

// Interface: LensSidePanelPageHandlerFactory
mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec, 'lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(lens.mojom.LensSidePanelPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(lens.mojom.LensSidePanelPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

lens.mojom.LensSidePanelPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensSidePanelPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensSidePanelPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensSidePanelPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new lens.mojom.LensSidePanelPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createSidePanelPageHandler(handler, page) {
    return this.$.createSidePanelPageHandler(handler, page);
  }
};

lens.mojom.LensSidePanelPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LensSidePanelPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createSidePanelPageHandler(handler, page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec,
      null,
      [handler, page],
      false);
  }

};

lens.mojom.LensSidePanelPageHandlerFactory.getRemote = function() {
  let remote = new lens.mojom.LensSidePanelPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensSidePanelPageHandlerFactory',
    'context');
  return remote.$;
};

lens.mojom.LensSidePanelPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LensSidePanelPageHandlerFactory', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createSidePanelPageHandler(params.handler, params.page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

lens.mojom.LensSidePanelPageHandlerFactoryReceiver = lens.mojom.LensSidePanelPageHandlerFactoryReceiver;

lens.mojom.LensSidePanelPageHandlerFactoryPtr = lens.mojom.LensSidePanelPageHandlerFactoryRemote;
lens.mojom.LensSidePanelPageHandlerFactoryRequest = lens.mojom.LensSidePanelPageHandlerFactoryPendingReceiver;


// Interface: LensSidePanelPageHandler
mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec, 'lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParams', [
      mojo.internal.StructField('is_contextual_searchbox', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_Params', [
      mojo.internal.StructField('text_fragments', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('pdf_page_number', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_OnAimMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_Params', [
    ],
    [[0, 8]]);

lens.mojom.LensSidePanelPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensSidePanelPageHandlerRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensSidePanelPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensSidePanelPageHandlerPendingReceiver,
      handle);
    this.$ = new lens.mojom.LensSidePanelPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  popAndLoadQueryFromHistory() {
    return this.$.popAndLoadQueryFromHistory();
  }
  getIsContextualSearchbox() {
    return this.$.getIsContextualSearchbox();
  }
  onScrollToMessage(text_fragments, pdf_page_number) {
    return this.$.onScrollToMessage(text_fragments, pdf_page_number);
  }
  requestSendFeedback() {
    return this.$.requestSendFeedback();
  }
  onAimMessage(message) {
    return this.$.onAimMessage(message);
  }
  onImageQueryWithEmptyText() {
    return this.$.onImageQueryWithEmptyText();
  }
};

lens.mojom.LensSidePanelPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LensSidePanelPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  popAndLoadQueryFromHistory() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec,
      null,
      [],
      false);
  }

  getIsContextualSearchbox() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec,
      lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec,
      [],
      false);
  }

  onScrollToMessage(text_fragments, pdf_page_number) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec,
      null,
      [text_fragments, pdf_page_number],
      false);
  }

  requestSendFeedback() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec,
      null,
      [],
      false);
  }

  onAimMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  onImageQueryWithEmptyText() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec,
      null,
      [],
      false);
  }

};

lens.mojom.LensSidePanelPageHandler.getRemote = function() {
  let remote = new lens.mojom.LensSidePanelPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensSidePanelPageHandler',
    'context');
  return remote.$;
};

lens.mojom.LensSidePanelPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LensSidePanelPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec.$.structSpec);
          const result = this.impl.popAndLoadQueryFromHistory();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec.$.structSpec);
          const result = this.impl.getIsContextualSearchbox();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onScrollToMessage(params.text_fragments, params.pdf_page_number);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.requestSendFeedback();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onAimMessage(params.message);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec.$.structSpec);
          const result = this.impl.onImageQueryWithEmptyText();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

lens.mojom.LensSidePanelPageHandlerReceiver = lens.mojom.LensSidePanelPageHandlerReceiver;

lens.mojom.LensSidePanelPageHandlerPtr = lens.mojom.LensSidePanelPageHandlerRemote;
lens.mojom.LensSidePanelPageHandlerRequest = lens.mojom.LensSidePanelPageHandlerPendingReceiver;


// Interface: LensSidePanelPage
mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec, 'lens.mojom.LensSidePanelPage_LoadResultsInFrame_Params', [
      mojo.internal.StructField('results_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetIsLoadingResults_Params', [
      mojo.internal.StructField('is_loading', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetBackArrowVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetShowErrorPage_Params', [
      mojo.internal.StructField('status', 0, 0, lens.mojom.SidePanelResultStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('should_show_error_page', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec, 'lens.mojom.LensSidePanelPage_SuppressGhostLoader_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec, 'lens.mojom.LensSidePanelPage_PageContentTypeChanged_Params', [
      mojo.internal.StructField('new_page_content_type', 0, 0, lens.mojom.PageContentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec, 'lens.mojom.LensSidePanelPage_ShowToast_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec, 'lens.mojom.LensSidePanelPage_SendClientMessageToAim_Params', [
      mojo.internal.StructField('serialized_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec, 'lens.mojom.LensSidePanelPage_AimHandshakeReceived_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec, 'lens.mojom.LensSidePanelPage_AimResultsChanged_Params', [
      mojo.internal.StructField('on_aim', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec, 'lens.mojom.LensSidePanelPage_FocusResultsFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetIsOverlayShowing_Params', [
      mojo.internal.StructField('is_showing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec, 'lens.mojom.LensSidePanelPage_FocusSearchbox_Params', [
    ],
    [[0, 8]]);

lens.mojom.LensSidePanelPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lens.mojom.LensSidePanelPageRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensSidePanelPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lens.mojom.LensSidePanelPagePendingReceiver,
      handle);
    this.$ = new lens.mojom.LensSidePanelPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  loadResultsInFrame(results_url) {
    return this.$.loadResultsInFrame(results_url);
  }
  setIsLoadingResults(is_loading) {
    return this.$.setIsLoadingResults(is_loading);
  }
  setPageContentUploadProgress(progress) {
    return this.$.setPageContentUploadProgress(progress);
  }
  setBackArrowVisible(visible) {
    return this.$.setBackArrowVisible(visible);
  }
  setShowErrorPage(should_show_error_page, status) {
    return this.$.setShowErrorPage(should_show_error_page, status);
  }
  suppressGhostLoader() {
    return this.$.suppressGhostLoader();
  }
  pageContentTypeChanged(new_page_content_type) {
    return this.$.pageContentTypeChanged(new_page_content_type);
  }
  showToast(message) {
    return this.$.showToast(message);
  }
  sendClientMessageToAim(serialized_message) {
    return this.$.sendClientMessageToAim(serialized_message);
  }
  aimHandshakeReceived() {
    return this.$.aimHandshakeReceived();
  }
  aimResultsChanged(on_aim) {
    return this.$.aimResultsChanged(on_aim);
  }
  focusResultsFrame() {
    return this.$.focusResultsFrame();
  }
  setIsOverlayShowing(is_showing) {
    return this.$.setIsOverlayShowing(is_showing);
  }
  focusSearchbox() {
    return this.$.focusSearchbox();
  }
};

lens.mojom.LensSidePanelPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LensSidePanelPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  loadResultsInFrame(results_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec,
      null,
      [results_url],
      false);
  }

  setIsLoadingResults(is_loading) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec,
      null,
      [is_loading],
      false);
  }

  setPageContentUploadProgress(progress) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec,
      null,
      [progress],
      false);
  }

  setBackArrowVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  setShowErrorPage(should_show_error_page, status) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec,
      null,
      [should_show_error_page, status],
      false);
  }

  suppressGhostLoader() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec,
      null,
      [],
      false);
  }

  pageContentTypeChanged(new_page_content_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec,
      null,
      [new_page_content_type],
      false);
  }

  showToast(message) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec,
      null,
      [message],
      false);
  }

  sendClientMessageToAim(serialized_message) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec,
      null,
      [serialized_message],
      false);
  }

  aimHandshakeReceived() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec,
      null,
      [],
      false);
  }

  aimResultsChanged(on_aim) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec,
      null,
      [on_aim],
      false);
  }

  focusResultsFrame() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec,
      null,
      [],
      false);
  }

  setIsOverlayShowing(is_showing) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec,
      null,
      [is_showing],
      false);
  }

  focusSearchbox() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec,
      null,
      [],
      false);
  }

};

lens.mojom.LensSidePanelPage.getRemote = function() {
  let remote = new lens.mojom.LensSidePanelPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensSidePanelPage',
    'context');
  return remote.$;
};

lens.mojom.LensSidePanelPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LensSidePanelPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec.$.structSpec);
          const result = this.impl.loadResultsInFrame(params.results_url);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec.$.structSpec);
          const result = this.impl.setIsLoadingResults(params.is_loading);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec.$.structSpec);
          const result = this.impl.setPageContentUploadProgress(params.progress);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setBackArrowVisible(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec.$.structSpec);
          const result = this.impl.setShowErrorPage(params.should_show_error_page, params.status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec.$.structSpec);
          const result = this.impl.suppressGhostLoader();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.pageContentTypeChanged(params.new_page_content_type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec.$.structSpec);
          const result = this.impl.showToast(params.message);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec.$.structSpec);
          const result = this.impl.sendClientMessageToAim(params.serialized_message);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec.$.structSpec);
          const result = this.impl.aimHandshakeReceived();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.aimResultsChanged(params.on_aim);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec.$.structSpec);
          const result = this.impl.focusResultsFrame();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec.$.structSpec);
          const result = this.impl.setIsOverlayShowing(params.is_showing);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec.$.structSpec);
          const result = this.impl.focusSearchbox();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

lens.mojom.LensSidePanelPageReceiver = lens.mojom.LensSidePanelPageReceiver;

lens.mojom.LensSidePanelPagePtr = lens.mojom.LensSidePanelPageRemote;
lens.mojom.LensSidePanelPageRequest = lens.mojom.LensSidePanelPagePendingReceiver;

