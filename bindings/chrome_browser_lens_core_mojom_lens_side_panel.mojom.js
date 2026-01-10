// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_side_panel.mojom
// Module: lens.mojom

'use strict';

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(lens.mojom.LensSidePanelPageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(lens.mojom.LensSidePanelPageSpec), null, false, 0, undefined),
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
};

lens.mojom.LensSidePanelPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createSidePanelPageHandler(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateSidePanelPageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSidePanelPageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createSidePanelPageHandler');
          const result = this.impl.createSidePanelPageHandler(params.handler, params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

lens.mojom.LensSidePanelPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  popAndLoadQueryFromHistory() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec,
      null,
      [],
      false);
  }

  getIsContextualSearchbox() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec,
      lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec,
      [],
      false);
  }

  onScrollToMessage(text_fragments, pdf_page_number) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec,
      null,
      [text_fragments, pdf_page_number],
      false);
  }

  requestSendFeedback() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec,
      null,
      [],
      false);
  }

  onAimMessage(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  onImageQueryWithEmptyText() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PopAndLoadQueryFromHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PopAndLoadQueryFromHistory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetIsContextualSearchbox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsContextualSearchbox (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnScrollToMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScrollToMessage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestSendFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSendFeedback (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnAimMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAimMessage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnImageQueryWithEmptyText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImageQueryWithEmptyText (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.popAndLoadQueryFromHistory');
          const result = this.impl.popAndLoadQueryFromHistory();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getIsContextualSearchbox');
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
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onScrollToMessage');
          const result = this.impl.onScrollToMessage(params.text_fragments, params.pdf_page_number);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestSendFeedback');
          const result = this.impl.requestSendFeedback();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAimMessage');
          const result = this.impl.onAimMessage(params.message);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onImageQueryWithEmptyText');
          const result = this.impl.onImageQueryWithEmptyText();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

lens.mojom.LensSidePanelPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  loadResultsInFrame(results_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec,
      null,
      [results_url],
      false);
  }

  setIsLoadingResults(is_loading) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec,
      null,
      [is_loading],
      false);
  }

  setPageContentUploadProgress(progress) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec,
      null,
      [progress],
      false);
  }

  setBackArrowVisible(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  setShowErrorPage(should_show_error_page, status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec,
      null,
      [should_show_error_page, status],
      false);
  }

  suppressGhostLoader() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec,
      null,
      [],
      false);
  }

  pageContentTypeChanged(new_page_content_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec,
      null,
      [new_page_content_type],
      false);
  }

  showToast(message) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec,
      null,
      [message],
      false);
  }

  sendClientMessageToAim(serialized_message) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec,
      null,
      [serialized_message],
      false);
  }

  aimHandshakeReceived() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec,
      null,
      [],
      false);
  }

  aimResultsChanged(on_aim) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec,
      null,
      [on_aim],
      false);
  }

  focusResultsFrame() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec,
      null,
      [],
      false);
  }

  setIsOverlayShowing(is_showing) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec,
      null,
      [is_showing],
      false);
  }

  focusSearchbox() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LoadResultsInFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadResultsInFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetIsLoadingResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsLoadingResults (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPageContentUploadProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageContentUploadProgress (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBackArrowVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackArrowVisible (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetShowErrorPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetShowErrorPage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SuppressGhostLoader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuppressGhostLoader (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PageContentTypeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageContentTypeChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowToast
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowToast (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SendClientMessageToAim
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendClientMessageToAim (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AimHandshakeReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AimHandshakeReceived (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AimResultsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AimResultsChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: FocusResultsFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusResultsFrame (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetIsOverlayShowing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsOverlayShowing (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: FocusSearchbox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusSearchbox (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.loadResultsInFrame');
          const result = this.impl.loadResultsInFrame(params.results_url);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setIsLoadingResults');
          const result = this.impl.setIsLoadingResults(params.is_loading);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setPageContentUploadProgress');
          const result = this.impl.setPageContentUploadProgress(params.progress);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setBackArrowVisible');
          const result = this.impl.setBackArrowVisible(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setShowErrorPage');
          const result = this.impl.setShowErrorPage(params.should_show_error_page, params.status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.suppressGhostLoader');
          const result = this.impl.suppressGhostLoader();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.pageContentTypeChanged');
          const result = this.impl.pageContentTypeChanged(params.new_page_content_type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showToast');
          const result = this.impl.showToast(params.message);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.sendClientMessageToAim');
          const result = this.impl.sendClientMessageToAim(params.serialized_message);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.aimHandshakeReceived');
          const result = this.impl.aimHandshakeReceived();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.aimResultsChanged');
          const result = this.impl.aimResultsChanged(params.on_aim);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.focusResultsFrame');
          const result = this.impl.focusResultsFrame();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setIsOverlayShowing');
          const result = this.impl.setIsOverlayShowing(params.is_showing);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.focusSearchbox');
          const result = this.impl.focusSearchbox();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

lens.mojom.LensSidePanelPageReceiver = lens.mojom.LensSidePanelPageReceiver;

lens.mojom.LensSidePanelPagePtr = lens.mojom.LensSidePanelPageRemote;
lens.mojom.LensSidePanelPageRequest = lens.mojom.LensSidePanelPagePendingReceiver;

