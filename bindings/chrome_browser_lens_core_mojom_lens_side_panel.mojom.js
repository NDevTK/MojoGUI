// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_side_panel.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Enum: SidePanelResultStatus
lens.mojom.SidePanelResultStatus = {
  kUnknown: 0,
  kResultShown: 1,
  kErrorPageShownOffline: 2,
  kErrorPageShownStartQueryError: 3,
  kErrorPageShownProtected: 4,
};

// Interface: LensSidePanelPageHandlerFactory
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
      lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec.$,
      null,
      [handler, page]);
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

// ParamsSpec for CreateSidePanelPageHandler
lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandlerFactory.CreateSidePanelPageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
lens.mojom.LensSidePanelPageHandlerFactoryPtr = lens.mojom.LensSidePanelPageHandlerFactoryRemote;
lens.mojom.LensSidePanelPageHandlerFactoryRequest = lens.mojom.LensSidePanelPageHandlerFactoryPendingReceiver;


// Interface: LensSidePanelPageHandler
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
      lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec.$,
      null,
      []);
  }

  getIsContextualSearchbox() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec.$,
      lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec.$,
      []);
  }

  onScrollToMessage(text_fragments, pdf_page_number) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec.$,
      null,
      [text_fragments, pdf_page_number]);
  }

  requestSendFeedback() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec.$,
      null,
      []);
  }

  onAimMessage(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec.$,
      null,
      [message]);
  }

  onImageQueryWithEmptyText() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for PopAndLoadQueryFromHistory
lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandler.PopAndLoadQueryFromHistory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetIsContextualSearchbox
lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandler.GetIsContextualSearchbox_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandler.GetIsContextualSearchbox_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_contextual_searchbox', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScrollToMessage
lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandler.OnScrollToMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'text_fragments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pdf_page_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestSendFeedback
lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandler.RequestSendFeedback_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAimMessage
lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandler.OnAimMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImageQueryWithEmptyText
lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPageHandler.OnImageQueryWithEmptyText_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
lens.mojom.LensSidePanelPageHandlerPtr = lens.mojom.LensSidePanelPageHandlerRemote;
lens.mojom.LensSidePanelPageHandlerRequest = lens.mojom.LensSidePanelPageHandlerPendingReceiver;


// Interface: LensSidePanelPage
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
      lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec.$,
      null,
      [results_url]);
  }

  setIsLoadingResults(is_loading) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec.$,
      null,
      [is_loading]);
  }

  setPageContentUploadProgress(progress) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec.$,
      null,
      [progress]);
  }

  setBackArrowVisible(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec.$,
      null,
      [visible]);
  }

  setShowErrorPage(should_show_error_page, status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec.$,
      null,
      [should_show_error_page, status]);
  }

  suppressGhostLoader() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec.$,
      null,
      []);
  }

  pageContentTypeChanged(new_page_content_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec.$,
      null,
      [new_page_content_type]);
  }

  showToast(message) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec.$,
      null,
      [message]);
  }

  sendClientMessageToAim(serialized_message) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec.$,
      null,
      [serialized_message]);
  }

  aimHandshakeReceived() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec.$,
      null,
      []);
  }

  aimResultsChanged(on_aim) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec.$,
      null,
      [on_aim]);
  }

  focusResultsFrame() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec.$,
      null,
      []);
  }

  setIsOverlayShowing(is_showing) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec.$,
      null,
      [is_showing]);
  }

  focusSearchbox() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for LoadResultsInFrame
lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.LoadResultsInFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'results_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsLoadingResults
lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.SetIsLoadingResults_Params',
      packedSize: 16,
      fields: [
        { name: 'is_loading', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPageContentUploadProgress
lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.SetPageContentUploadProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBackArrowVisible
lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.SetBackArrowVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetShowErrorPage
lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.SetShowErrorPage_Params',
      packedSize: 24,
      fields: [
        { name: 'should_show_error_page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SuppressGhostLoader
lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.SuppressGhostLoader_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PageContentTypeChanged
lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.PageContentTypeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_page_content_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowToast
lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.ShowToast_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendClientMessageToAim
lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.SendClientMessageToAim_Params',
      packedSize: 16,
      fields: [
        { name: 'serialized_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AimHandshakeReceived
lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.AimHandshakeReceived_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AimResultsChanged
lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.AimResultsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'on_aim', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusResultsFrame
lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.FocusResultsFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsOverlayShowing
lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.SetIsOverlayShowing_Params',
      packedSize: 16,
      fields: [
        { name: 'is_showing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusSearchbox
lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LensSidePanelPage.FocusSearchbox_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
lens.mojom.LensSidePanelPagePtr = lens.mojom.LensSidePanelPageRemote;
lens.mojom.LensSidePanelPageRequest = lens.mojom.LensSidePanelPagePendingReceiver;

