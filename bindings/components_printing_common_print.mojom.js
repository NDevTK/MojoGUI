// Auto-generated MojoJS binding
// Source: chromium_src/components/printing/common/print.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: PrintFailureReason
printing.mojom.PrintFailureReason = {
  kGeneralFailure: 0,
  kInvalidPageRange: 1,
  kPrintingInProgress: 2,
};

// Interface: PrintRenderer
printing.mojom.PrintRenderer = {};

printing.mojom.PrintRendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintRendererRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintRenderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintRendererPendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintRendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintRendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPreviewDocument(job_settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec,
      printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec,
      [job_settings]);
  }

};

printing.mojom.PrintRenderer.getRemote = function() {
  let remote = new printing.mojom.PrintRendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintRenderer',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePreviewDocument
printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderer.CreatePreviewDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'job_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderer.CreatePreviewDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'preview_document_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrintRendererPtr = printing.mojom.PrintRendererRemote;
printing.mojom.PrintRendererRequest = printing.mojom.PrintRendererPendingReceiver;


// Interface: PrintPreviewUI
printing.mojom.PrintPreviewUI = {};

printing.mojom.PrintPreviewUIPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintPreviewUIRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintPreviewUI';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintPreviewUIPendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintPreviewUIRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintPreviewUIRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setOptionsFromDocument(params, request_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec,
      null,
      [params, request_id]);
  }

  didPrepareDocumentForPreview(document_cookie, request_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  didPreviewPage(params, request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec,
      null,
      [params, request_id]);
  }

  metafileReadyForPrinting(params, request_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec,
      null,
      [params, request_id]);
  }

  printPreviewFailed(document_cookie, request_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  printPreviewCancelled(document_cookie, request_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  printerSettingsInvalid(document_cookie, request_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  didGetDefaultPageLayout(page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec,
      null,
      [page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id]);
  }

  didStartPreview(params, request_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec,
      null,
      [params, request_id]);
  }

};

printing.mojom.PrintPreviewUI.getRemote = function() {
  let remote = new printing.mojom.PrintPreviewUIRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintPreviewUI',
    'context');
  return remote.$;
};

// ParamsSpec for SetOptionsFromDocument
printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.SetOptionsFromDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidPrepareDocumentForPreview
printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidPrepareDocumentForPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidPreviewPage
printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidPreviewPage_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MetafileReadyForPrinting
printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.MetafileReadyForPrinting_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintPreviewFailed
printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.PrintPreviewFailed_Params',
      packedSize: 24,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintPreviewCancelled
printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.PrintPreviewCancelled_Params',
      packedSize: 24,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrinterSettingsInvalid
printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.PrinterSettingsInvalid_Params',
      packedSize: 24,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidGetDefaultPageLayout
printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidGetDefaultPageLayout_Params',
      packedSize: 48,
      fields: [
        { name: 'page_layout_in_points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'printable_area_in_points', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'all_pages_have_custom_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'all_pages_have_custom_orientation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'request_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidStartPreview
printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidStartPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrintPreviewUIPtr = printing.mojom.PrintPreviewUIRemote;
printing.mojom.PrintPreviewUIRequest = printing.mojom.PrintPreviewUIPendingReceiver;


// Interface: PrintRenderFrame
printing.mojom.PrintRenderFrame = {};

printing.mojom.PrintRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintRenderFrameRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintRenderFramePendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintRenderFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  printRequestedPages() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec,
      null,
      []);
  }

  printWithParams(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec,
      null,
      [params]);
  }

  printForSystemDialog() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec,
      null,
      []);
  }

  initiatePrintPreview(print_renderer, has_selection) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec,
      null,
      [print_renderer, has_selection]);
  }

  setPrintPreviewUI(preview) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec,
      null,
      [preview]);
  }

  printPreview(settings) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec,
      null,
      [settings]);
  }

  onPrintPreviewDialogClosed() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec,
      null,
      []);
  }

  printFrameContent(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec,
      printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec,
      [params]);
  }

  connectToPdfRenderer() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec,
      null,
      []);
  }

  printingDone(success) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec,
      null,
      [success]);
  }

  printNodeUnderContextMenu() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec,
      null,
      []);
  }

};

printing.mojom.PrintRenderFrame.getRemote = function() {
  let remote = new printing.mojom.PrintRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintRenderFrame',
    'context');
  return remote.$;
};

// ParamsSpec for PrintRequestedPages
printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintRequestedPages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintWithParams
printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintWithParams_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintForSystemDialog
printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintForSystemDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitiatePrintPreview
printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.InitiatePrintPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'print_renderer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'has_selection', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPrintPreviewUI
printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.SetPrintPreviewUI_Params',
      packedSize: 16,
      fields: [
        { name: 'preview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintPreview
printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPrintPreviewDialogClosed
printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.OnPrintPreviewDialogClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintFrameContent
printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintFrameContent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintFrameContent_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToPdfRenderer
printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.ConnectToPdfRenderer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintingDone
printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintingDone_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintNodeUnderContextMenu
printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintNodeUnderContextMenu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrintRenderFramePtr = printing.mojom.PrintRenderFrameRemote;
printing.mojom.PrintRenderFrameRequest = printing.mojom.PrintRenderFramePendingReceiver;


// Interface: PrintManagerHost
printing.mojom.PrintManagerHost = {};

printing.mojom.PrintManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintManagerHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintManagerHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didGetPrintedPagesCount(cookie, number_pages) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec,
      null,
      [cookie, number_pages]);
  }

  getDefaultPrintSettings() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec,
      printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec,
      []);
  }

  didShowPrintDialog() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec,
      null,
      []);
  }

  didPrintDocument(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec,
      printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec,
      [params]);
  }

  isPrintingEnabled() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec,
      printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec,
      []);
  }

  scriptedPrint(params) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec,
      printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec,
      [params]);
  }

  printingFailed(cookie, reason) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec,
      null,
      [cookie, reason]);
  }

  updatePrintSettings(job_settings) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec,
      printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec,
      [job_settings]);
  }

  setupScriptedPrintPreview() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec,
      null,
      []);
  }

  showScriptedPrintPreview(is_modifiable) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec,
      null,
      [is_modifiable]);
  }

  requestPrintPreview(params) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec,
      null,
      [params]);
  }

  checkForCancel(preview_ui_id, request_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec,
      printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec,
      [preview_ui_id, request_id]);
  }

  setAccessibilityTree(cookie, accessibility_tree) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec,
      null,
      [cookie, accessibility_tree]);
  }

};

printing.mojom.PrintManagerHost.getRemote = function() {
  let remote = new printing.mojom.PrintManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for DidGetPrintedPagesCount
printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidGetPrintedPagesCount_Params',
      packedSize: 24,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'number_pages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDefaultPrintSettings
printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.GetDefaultPrintSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.GetDefaultPrintSettings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'default_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidShowPrintDialog
printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidShowPrintDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidPrintDocument
printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidPrintDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidPrintDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsPrintingEnabled
printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.IsPrintingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.IsPrintingEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'printing_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ScriptedPrint
printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.ScriptedPrint_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.ScriptedPrint_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrintingFailed
printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.PrintingFailed_Params',
      packedSize: 24,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdatePrintSettings
printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.UpdatePrintSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'job_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.UpdatePrintSettings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'current_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetupScriptedPrintPreview
printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.SetupScriptedPrintPreview_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowScriptedPrintPreview
printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.ShowScriptedPrintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'is_modifiable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPrintPreview
printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.RequestPrintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CheckForCancel
printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.CheckForCancel_Params',
      packedSize: 24,
      fields: [
        { name: 'preview_ui_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.CheckForCancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cancel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAccessibilityTree
printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.SetAccessibilityTree_Params',
      packedSize: 24,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'accessibility_tree', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PrintManagerHostPtr = printing.mojom.PrintManagerHostRemote;
printing.mojom.PrintManagerHostRequest = printing.mojom.PrintManagerHostPendingReceiver;

