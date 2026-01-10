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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'lens.mojom.LensSidePanelPageHandlerFactory',
    'context');
  return remote.$;
};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'lens.mojom.LensSidePanelPageHandler',
    'context');
  return remote.$;
};

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
      mojo.internal.StructField('should_show_error_page', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, lens.mojom.SidePanelResultStatusSpec.$, null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'lens.mojom.LensSidePanelPage',
    'context');
  return remote.$;
};

lens.mojom.LensSidePanelPagePtr = lens.mojom.LensSidePanelPageRemote;
lens.mojom.LensSidePanelPageRequest = lens.mojom.LensSidePanelPagePendingReceiver;

