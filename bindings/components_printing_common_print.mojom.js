// Auto-generated MojoJS binding
// Source: chromium_src/components/printing/common/print.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};

printing.mojom.PrintFailureReasonSpec = { $: mojo.internal.Enum() };
printing.mojom.PreviewIdsSpec = { $: {} };
printing.mojom.RequestPrintPreviewParamsSpec = { $: {} };
printing.mojom.PrintFrameContentParamsSpec = { $: {} };
printing.mojom.OptionsFromDocumentParamsSpec = { $: {} };
printing.mojom.DidPrintContentParamsSpec = { $: {} };
printing.mojom.DidStartPreviewParamsSpec = { $: {} };
printing.mojom.DidPreviewPageParamsSpec = { $: {} };
printing.mojom.DidPreviewDocumentParamsSpec = { $: {} };
printing.mojom.PrintParamsSpec = { $: {} };
printing.mojom.PrintPagesParamsSpec = { $: {} };
printing.mojom.DidPrintDocumentParamsSpec = { $: {} };
printing.mojom.ScriptedPrintParamsSpec = { $: {} };
printing.mojom.PrintWithParamsResultDataSpec = { $: {} };
printing.mojom.PrintRenderer = {};
printing.mojom.PrintRenderer.$interfaceName = 'printing.mojom.PrintRenderer';
printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec = { $: {} };
printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI = {};
printing.mojom.PrintPreviewUI.$interfaceName = 'printing.mojom.PrintPreviewUI';
printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec = { $: {} };
printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame = {};
printing.mojom.PrintRenderFrame.$interfaceName = 'printing.mojom.PrintRenderFrame';
printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec = { $: {} };
printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost = {};
printing.mojom.PrintManagerHost.$interfaceName = 'printing.mojom.PrintManagerHost';
printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec = { $: {} };
printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec = { $: {} };

// Enum: PrintFailureReason
printing.mojom.PrintFailureReason = {
  kGeneralFailure: 0,
  kInvalidPageRange: 1,
  kPrintingInProgress: 2,
};

// Struct: PreviewIds
mojo.internal.Struct(
    printing.mojom.PreviewIdsSpec, 'printing.mojom.PreviewIds', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('ui_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RequestPrintPreviewParams
mojo.internal.Struct(
    printing.mojom.RequestPrintPreviewParamsSpec, 'printing.mojom.RequestPrintPreviewParams', [
      mojo.internal.StructField('is_from_arc', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_modifiable', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webnode_only', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_selection', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('selection_only', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PrintFrameContentParams
mojo.internal.Struct(
    printing.mojom.PrintFrameContentParamsSpec, 'printing.mojom.PrintFrameContentParams', [
      mojo.internal.StructField('printable_area', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OptionsFromDocumentParams
mojo.internal.Struct(
    printing.mojom.OptionsFromDocumentParamsSpec, 'printing.mojom.OptionsFromDocumentParams', [
      mojo.internal.StructField('is_scaling_disabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('copies', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('duplex', 8, 0, printing.mojom.DuplexModeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPrintContentParams
mojo.internal.Struct(
    printing.mojom.DidPrintContentParamsSpec, 'printing.mojom.DidPrintContentParams', [
      mojo.internal.StructField('metafile_data_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, true, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo_base.mojom.UnguessableTokenSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidStartPreviewParams
mojo.internal.Struct(
    printing.mojom.DidStartPreviewParamsSpec, 'printing.mojom.DidStartPreviewParams', [
      mojo.internal.StructField('page_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pages_to_render', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_size', 24, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('fit_to_page_scaling', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DidPreviewPageParams
mojo.internal.Struct(
    printing.mojom.DidPreviewPageParamsSpec, 'printing.mojom.DidPreviewPageParams', [
      mojo.internal.StructField('content', 0, 0, printing.mojom.DidPrintContentParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPreviewDocumentParams
mojo.internal.Struct(
    printing.mojom.DidPreviewDocumentParamsSpec, 'printing.mojom.DidPreviewDocumentParams', [
      mojo.internal.StructField('content', 0, 0, printing.mojom.DidPrintContentParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('expected_pages_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintParams
mojo.internal.Struct(
    printing.mojom.PrintParamsSpec, 'printing.mojom.PrintParams', [
      mojo.internal.StructField('page_size', 0, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('content_size', 8, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('printable_area', 16, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('margin_top', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('margin_left', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('page_orientation', 32, 0, printing.mojom.PageOrientationSpec, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 40, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_only', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('preview_ui_id', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('preview_request_id', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_first_request', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('print_scaling_option', 76, 0, printing.mojom.PrintScalingOptionSpec, null, false, 0, undefined),
      mojo.internal.StructField('print_to_pdf', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_header_footer', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('title', 88, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('url', 96, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('header_template', 104, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('footer_template', 112, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('rasterize_pdf', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rasterize_pdf_dpi', 124, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('should_print_backgrounds', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('printed_doc_type', 132, 0, printing.mojom.SkiaDocumentTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('prefer_css_page_size', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 140, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('generate_tagged_pdf_$flag', 144, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'generate_tagged_pdf_$value', originalFieldName: 'generate_tagged_pdf' }),
      mojo.internal.StructField('generate_tagged_pdf_$value', 144, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'generate_tagged_pdf_$flag', originalFieldName: 'generate_tagged_pdf' }),
      mojo.internal.StructField('generate_document_outline', 148, 0, printing.mojom.GenerateDocumentOutlineSpec, null, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: PrintPagesParams
mojo.internal.Struct(
    printing.mojom.PrintPagesParamsSpec, 'printing.mojom.PrintPagesParams', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.PrintParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('pages', 8, 0, mojo.internal.Array(printing.mojom.PageRangeSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPrintDocumentParams
mojo.internal.Struct(
    printing.mojom.DidPrintDocumentParamsSpec, 'printing.mojom.DidPrintDocumentParams', [
      mojo.internal.StructField('content', 0, 0, printing.mojom.DidPrintContentParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_size', 16, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('content_area', 24, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('physical_offsets', 32, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScriptedPrintParams
mojo.internal.Struct(
    printing.mojom.ScriptedPrintParamsSpec, 'printing.mojom.ScriptedPrintParams', [
      mojo.internal.StructField('cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('expected_pages_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_selection', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_scripted', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('margin_type', 12, 0, printing.mojom.MarginTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintWithParamsResultData
mojo.internal.Struct(
    printing.mojom.PrintWithParamsResultDataSpec, 'printing.mojom.PrintWithParamsResultData', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPrintDocumentParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('accessibility_tree', 8, 0, ax.mojom.AXTreeUpdateSpec, null, false, 0, undefined),
      mojo.internal.StructField('generate_document_outline', 16, 0, printing.mojom.GenerateDocumentOutlineSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PrintRenderer
mojo.internal.Struct(
    printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec, 'printing.mojom.PrintRenderer_CreatePreviewDocument_Params', [
      mojo.internal.StructField('job_settings', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec, 'printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParams', [
      mojo.internal.StructField('preview_document_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

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

printing.mojom.PrintRendererPtr = printing.mojom.PrintRendererRemote;
printing.mojom.PrintRendererRequest = printing.mojom.PrintRendererPendingReceiver;


// Interface: PrintPreviewUI
mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec, 'printing.mojom.PrintPreviewUI_SetOptionsFromDocument_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.OptionsFromDocumentParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidPreviewPage_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPreviewPageParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec, 'printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPreviewDocumentParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec, 'printing.mojom.PrintPreviewUI_PrintPreviewFailed_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec, 'printing.mojom.PrintPreviewUI_PrintPreviewCancelled_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec, 'printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_Params', [
      mojo.internal.StructField('page_layout_in_points', 0, 0, printing.mojom.PageSizeMarginsSpec, null, false, 0, undefined),
      mojo.internal.StructField('printable_area_in_points', 8, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('all_pages_have_custom_size', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('all_pages_have_custom_orientation', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidStartPreview_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidStartPreviewParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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

printing.mojom.PrintPreviewUIPtr = printing.mojom.PrintPreviewUIRemote;
printing.mojom.PrintPreviewUIRequest = printing.mojom.PrintPreviewUIPendingReceiver;


// Interface: PrintRenderFrame
mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintRequestedPages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintWithParams_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.PrintPagesParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintForSystemDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec, 'printing.mojom.PrintRenderFrame_InitiatePrintPreview_Params', [
      mojo.internal.StructField('print_renderer', 0, 0, mojo.internal.AssociatedInterfaceProxy(printing.mojom.PrintRendererRemote), null, true, 0, undefined),
      mojo.internal.StructField('has_selection', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec, 'printing.mojom.PrintRenderFrame_SetPrintPreviewUI_Params', [
      mojo.internal.StructField('preview', 0, 0, mojo.internal.AssociatedInterfaceProxy(printing.mojom.PrintPreviewUIRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintPreview_Params', [
      mojo.internal.StructField('settings', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec, 'printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintFrameContent_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.PrintFrameContentParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec, 'printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParams', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, printing.mojom.DidPrintContentParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec, 'printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintingDone_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_Params', [
    ],
    [[0, 8]]);

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

printing.mojom.PrintRenderFramePtr = printing.mojom.PrintRenderFrameRemote;
printing.mojom.PrintRenderFrameRequest = printing.mojom.PrintRenderFramePendingReceiver;


// Interface: PrintManagerHost
mojo.internal.Struct(
    printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec, 'printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_Params', [
      mojo.internal.StructField('cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('number_pages', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec, 'printing.mojom.PrintManagerHost_GetDefaultPrintSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParams', [
      mojo.internal.StructField('default_settings', 0, 0, printing.mojom.PrintParamsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec, 'printing.mojom.PrintManagerHost_DidShowPrintDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec, 'printing.mojom.PrintManagerHost_DidPrintDocument_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPrintDocumentParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParams', [
      mojo.internal.StructField('completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec, 'printing.mojom.PrintManagerHost_IsPrintingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParams', [
      mojo.internal.StructField('printing_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec, 'printing.mojom.PrintManagerHost_ScriptedPrint_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.ScriptedPrintParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParams', [
      mojo.internal.StructField('settings', 0, 0, printing.mojom.PrintPagesParamsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec, 'printing.mojom.PrintManagerHost_PrintingFailed_Params', [
      mojo.internal.StructField('cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('reason', 4, 0, printing.mojom.PrintFailureReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec, 'printing.mojom.PrintManagerHost_UpdatePrintSettings_Params', [
      mojo.internal.StructField('job_settings', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParams', [
      mojo.internal.StructField('current_settings', 0, 0, printing.mojom.PrintPagesParamsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec, 'printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec, 'printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_Params', [
      mojo.internal.StructField('is_modifiable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec, 'printing.mojom.PrintManagerHost_RequestPrintPreview_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.RequestPrintPreviewParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec, 'printing.mojom.PrintManagerHost_CheckForCancel_Params', [
      mojo.internal.StructField('preview_ui_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_CheckForCancel_ResponseParams', [
      mojo.internal.StructField('cancel', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec, 'printing.mojom.PrintManagerHost_SetAccessibilityTree_Params', [
      mojo.internal.StructField('cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('accessibility_tree', 8, 0, ax.mojom.AXTreeUpdateSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec,
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

printing.mojom.PrintManagerHostPtr = printing.mojom.PrintManagerHostRemote;
printing.mojom.PrintManagerHostRequest = printing.mojom.PrintManagerHostPendingReceiver;

