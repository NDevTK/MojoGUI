// Auto-generated MojoJS binding
// Source: chromium_src/components/printing/common/print.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: PrintFailureReason
printing.mojom.PrintFailureReason = {
};

// Struct: PreviewIds
printing.mojom.PreviewIds = class {
  constructor(values = {}) {
  }
};

// Struct: RequestPrintPreviewParams
printing.mojom.RequestPrintPreviewParams = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: PrintFrameContentParams
printing.mojom.PrintFrameContentParams = class {
  constructor(values = {}) {
    this.document_cookie = values.document_cookie !== undefined ? values.document_cookie : 0;
  }
};

// Struct: OptionsFromDocumentParams
printing.mojom.OptionsFromDocumentParams = class {
  constructor(values = {}) {
    this.duplex = values.duplex !== undefined ? values.duplex : 0;
  }
};

// Struct: DidPrintContentParams
printing.mojom.DidPrintContentParams = class {
  constructor(values = {}) {
    this.subframe_content_info = values.subframe_content_info !== undefined ? values.subframe_content_info : 0;
  }
};

// Struct: DidStartPreviewParams
printing.mojom.DidStartPreviewParams = class {
  constructor(values = {}) {
    this.pages_per_sheet = values.pages_per_sheet !== undefined ? values.pages_per_sheet : 0;
    this.fit_to_page_scaling = values.fit_to_page_scaling !== undefined ? values.fit_to_page_scaling : 0;
  }
};

// Struct: DidPreviewPageParams
printing.mojom.DidPreviewPageParams = class {
  constructor(values = {}) {
    this.document_cookie = values.document_cookie !== undefined ? values.document_cookie : 0;
  }
};

// Struct: DidPreviewDocumentParams
printing.mojom.DidPreviewDocumentParams = class {
  constructor(values = {}) {
    this.expected_pages_count = values.expected_pages_count !== undefined ? values.expected_pages_count : 0;
  }
};

// Struct: PrintParams
printing.mojom.PrintParams = class {
  constructor(values = {}) {
    this.margins = values.margins !== undefined ? values.margins : 0;
    this.printable_area = values.printable_area !== undefined ? values.printable_area : null;
    this.false = values.false !== undefined ? values.false : 0;
    this.false = values.false !== undefined ? values.false : 0;
    this.kNone = values.kNone !== undefined ? values.kNone : 0;
  }
};

// Struct: PrintPagesParams
printing.mojom.PrintPagesParams = class {
  constructor(values = {}) {
    this.params = values.params !== undefined ? values.params : 0;
    this.pages = values.pages !== undefined ? values.pages : 0;
  }
};

// Struct: DidPrintDocumentParams
printing.mojom.DidPrintDocumentParams = class {
  constructor(values = {}) {
    this.physical_offsets = values.physical_offsets !== undefined ? values.physical_offsets : 0;
  }
};

// Struct: ScriptedPrintParams
printing.mojom.ScriptedPrintParams = class {
  constructor(values = {}) {
    this.margin_type = values.margin_type !== undefined ? values.margin_type : 0;
  }
};

// Struct: PrintWithParamsResultData
printing.mojom.PrintWithParamsResultData = class {
  constructor(values = {}) {
    this.kNone = values.kNone !== undefined ? values.kNone : 0;
  }
};

// Interface: PrintRenderer
printing.mojom.PrintRendererPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintRenderer';
  }

  createPreviewDocument(job_settings) {
    // Method: CreatePreviewDocument
    return new Promise((resolve) => {
      // Call: CreatePreviewDocument(job_settings)
      resolve({});
    });
  }

};

printing.mojom.PrintRendererRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintPreviewUI
printing.mojom.PrintPreviewUIPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintPreviewUI';
  }

  setOptionsFromDocument(params, request_id) {
    // Method: SetOptionsFromDocument
    // Call: SetOptionsFromDocument(params, request_id)
  }

  didPrepareDocumentForPreview(document_cookie, request_id) {
    // Method: DidPrepareDocumentForPreview
    // Call: DidPrepareDocumentForPreview(document_cookie, request_id)
  }

  didPreviewPage(params, request_id) {
    // Method: DidPreviewPage
    // Call: DidPreviewPage(params, request_id)
  }

  metafileReadyForPrinting(params, request_id) {
    // Method: MetafileReadyForPrinting
    // Call: MetafileReadyForPrinting(params, request_id)
  }

  printPreviewFailed(document_cookie, request_id) {
    // Method: PrintPreviewFailed
    // Call: PrintPreviewFailed(document_cookie, request_id)
  }

  printPreviewCancelled(document_cookie, request_id) {
    // Method: PrintPreviewCancelled
    // Call: PrintPreviewCancelled(document_cookie, request_id)
  }

  printerSettingsInvalid(document_cookie, request_id) {
    // Method: PrinterSettingsInvalid
    // Call: PrinterSettingsInvalid(document_cookie, request_id)
  }

  didGetDefaultPageLayout(page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id) {
    // Method: DidGetDefaultPageLayout
    // Call: DidGetDefaultPageLayout(page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id)
  }

  didStartPreview(params, request_id) {
    // Method: DidStartPreview
    // Call: DidStartPreview(params, request_id)
  }

};

printing.mojom.PrintPreviewUIRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintRenderFrame
printing.mojom.PrintRenderFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintRenderFrame';
  }

  printRequestedPages() {
    // Method: PrintRequestedPages
    // Call: PrintRequestedPages()
  }

  printWithParams(params) {
    // Method: PrintWithParams
    // Call: PrintWithParams(params)
  }

  printForSystemDialog() {
    // Method: PrintForSystemDialog
    // Call: PrintForSystemDialog()
  }

  initiatePrintPreview(print_renderer, has_selection) {
    // Method: InitiatePrintPreview
    // Call: InitiatePrintPreview(print_renderer, has_selection)
  }

  setPrintPreviewUI(preview) {
    // Method: SetPrintPreviewUI
    // Call: SetPrintPreviewUI(preview)
  }

  printPreview(settings) {
    // Method: PrintPreview
    // Call: PrintPreview(settings)
  }

  onPrintPreviewDialogClosed() {
    // Method: OnPrintPreviewDialogClosed
    // Call: OnPrintPreviewDialogClosed()
  }

  printFrameContent(params) {
    // Method: PrintFrameContent
    return new Promise((resolve) => {
      // Call: PrintFrameContent(params)
      resolve({});
    });
  }

  connectToPdfRenderer() {
    // Method: ConnectToPdfRenderer
    // Call: ConnectToPdfRenderer()
  }

  printingDone(success) {
    // Method: PrintingDone
    // Call: PrintingDone(success)
  }

  printNodeUnderContextMenu() {
    // Method: PrintNodeUnderContextMenu
    // Call: PrintNodeUnderContextMenu()
  }

};

printing.mojom.PrintRenderFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintManagerHost
printing.mojom.PrintManagerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'printing.mojom.PrintManagerHost';
  }

  didGetPrintedPagesCount(cookie, number_pages) {
    // Method: DidGetPrintedPagesCount
    // Call: DidGetPrintedPagesCount(cookie, number_pages)
  }

  getDefaultPrintSettings() {
    // Method: GetDefaultPrintSettings
    return new Promise((resolve) => {
      // Call: GetDefaultPrintSettings()
      resolve({});
    });
  }

  didShowPrintDialog() {
    // Method: DidShowPrintDialog
    // Call: DidShowPrintDialog()
  }

  didPrintDocument(params) {
    // Method: DidPrintDocument
    return new Promise((resolve) => {
      // Call: DidPrintDocument(params)
      resolve({});
    });
  }

  isPrintingEnabled() {
    // Method: IsPrintingEnabled
    return new Promise((resolve) => {
      // Call: IsPrintingEnabled()
      resolve({});
    });
  }

  scriptedPrint(params) {
    // Method: ScriptedPrint
    return new Promise((resolve) => {
      // Call: ScriptedPrint(params)
      resolve({});
    });
  }

  printingFailed(cookie, reason) {
    // Method: PrintingFailed
    // Call: PrintingFailed(cookie, reason)
  }

  updatePrintSettings(job_settings) {
    // Method: UpdatePrintSettings
    return new Promise((resolve) => {
      // Call: UpdatePrintSettings(job_settings)
      resolve({});
    });
  }

  setupScriptedPrintPreview() {
    // Method: SetupScriptedPrintPreview
    // Call: SetupScriptedPrintPreview()
  }

  showScriptedPrintPreview(is_modifiable) {
    // Method: ShowScriptedPrintPreview
    // Call: ShowScriptedPrintPreview(is_modifiable)
  }

  requestPrintPreview(params) {
    // Method: RequestPrintPreview
    // Call: RequestPrintPreview(params)
  }

  checkForCancel(preview_ui_id, request_id) {
    // Method: CheckForCancel
    return new Promise((resolve) => {
      // Call: CheckForCancel(preview_ui_id, request_id)
      resolve({});
    });
  }

  setAccessibilityTree(cookie, accessibility_tree) {
    // Method: SetAccessibilityTree
    // Call: SetAccessibilityTree(cookie, accessibility_tree)
  }

};

printing.mojom.PrintManagerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
