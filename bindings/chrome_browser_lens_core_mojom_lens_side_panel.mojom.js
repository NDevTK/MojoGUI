// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/lens_side_panel.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Enum: SidePanelResultStatus
lens.mojom.SidePanelResultStatus = {
};

// Interface: LensSidePanelPageHandlerFactory
lens.mojom.LensSidePanelPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensSidePanelPageHandlerFactory';
  }

  createSidePanelPageHandler(handler, page) {
    // Method: CreateSidePanelPageHandler
    // Call: CreateSidePanelPageHandler(handler, page)
  }

};

lens.mojom.LensSidePanelPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LensSidePanelPageHandler
lens.mojom.LensSidePanelPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensSidePanelPageHandler';
  }

  popAndLoadQueryFromHistory() {
    // Method: PopAndLoadQueryFromHistory
    // Call: PopAndLoadQueryFromHistory()
  }

  getIsContextualSearchbox() {
    // Method: GetIsContextualSearchbox
    return new Promise((resolve) => {
      // Call: GetIsContextualSearchbox()
      resolve({});
    });
  }

  onScrollToMessage(text_fragments, pdf_page_number) {
    // Method: OnScrollToMessage
    // Call: OnScrollToMessage(text_fragments, pdf_page_number)
  }

  requestSendFeedback() {
    // Method: RequestSendFeedback
    // Call: RequestSendFeedback()
  }

  onAimMessage(message) {
    // Method: OnAimMessage
    // Call: OnAimMessage(message)
  }

  onImageQueryWithEmptyText() {
    // Method: OnImageQueryWithEmptyText
    // Call: OnImageQueryWithEmptyText()
  }

};

lens.mojom.LensSidePanelPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LensSidePanelPage
lens.mojom.LensSidePanelPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lens.mojom.LensSidePanelPage';
  }

  loadResultsInFrame(results_url) {
    // Method: LoadResultsInFrame
    // Call: LoadResultsInFrame(results_url)
  }

  setIsLoadingResults(is_loading) {
    // Method: SetIsLoadingResults
    // Call: SetIsLoadingResults(is_loading)
  }

  setPageContentUploadProgress(progress) {
    // Method: SetPageContentUploadProgress
    // Call: SetPageContentUploadProgress(progress)
  }

  setBackArrowVisible(visible) {
    // Method: SetBackArrowVisible
    // Call: SetBackArrowVisible(visible)
  }

  setShowErrorPage(should_show_error_page, status) {
    // Method: SetShowErrorPage
    // Call: SetShowErrorPage(should_show_error_page, status)
  }

  suppressGhostLoader() {
    // Method: SuppressGhostLoader
    // Call: SuppressGhostLoader()
  }

  pageContentTypeChanged(new_page_content_type) {
    // Method: PageContentTypeChanged
    // Call: PageContentTypeChanged(new_page_content_type)
  }

  showToast(message) {
    // Method: ShowToast
    // Call: ShowToast(message)
  }

  sendClientMessageToAim(serialized_message) {
    // Method: SendClientMessageToAim
    // Call: SendClientMessageToAim(serialized_message)
  }

  aimHandshakeReceived() {
    // Method: AimHandshakeReceived
    // Call: AimHandshakeReceived()
  }

  aimResultsChanged(on_aim) {
    // Method: AimResultsChanged
    // Call: AimResultsChanged(on_aim)
  }

  focusResultsFrame() {
    // Method: FocusResultsFrame
    // Call: FocusResultsFrame()
  }

  setIsOverlayShowing(is_showing) {
    // Method: SetIsOverlayShowing
    // Call: SetIsOverlayShowing(is_showing)
  }

  focusSearchbox() {
    // Method: FocusSearchbox
    // Call: FocusSearchbox()
  }

};

lens.mojom.LensSidePanelPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
