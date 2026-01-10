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


// Enum: PrintFailureReason
printing.mojom.mojom.PrintFailureReason = {
  kGeneralFailure: 0,
  kInvalidPageRange: 1,
  kPrintingInProgress: 2,
};
printing.mojom.mojom.PrintFailureReasonSpec = { $: mojo.internal.Enum() };

// Struct: PreviewIds
printing.mojom.mojom.PreviewIdsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PreviewIds',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'ui_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RequestPrintPreviewParams
printing.mojom.mojom.RequestPrintPreviewParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.RequestPrintPreviewParams',
      packedSize: 16,
      fields: [
        { name: 'is_from_arc', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_modifiable', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webnode_only', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_selection', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'selection_only', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PrintFrameContentParams
printing.mojom.mojom.PrintFrameContentParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintFrameContentParams',
      packedSize: 24,
      fields: [
        { name: 'printable_area', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'document_cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OptionsFromDocumentParams
printing.mojom.mojom.OptionsFromDocumentParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.OptionsFromDocumentParams',
      packedSize: 24,
      fields: [
        { name: 'is_scaling_disabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'copies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'duplex', packedOffset: 4, packedBitOffset: 0, type: printing.mojom.DuplexModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DidPrintContentParams
printing.mojom.mojom.DidPrintContentParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.DidPrintContentParams',
      packedSize: 24,
      fields: [
        { name: 'metafile_data_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
        { name: 'subframe_content_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo_base.mojom.UnguessableTokenSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DidStartPreviewParams
printing.mojom.mojom.DidStartPreviewParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.DidStartPreviewParams',
      packedSize: 40,
      fields: [
        { name: 'page_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pages_to_render', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'pages_per_sheet', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'page_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false, minVersion: 0 },
        { name: 'fit_to_page_scaling', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DidPreviewPageParams
printing.mojom.mojom.DidPreviewPageParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.DidPreviewPageParams',
      packedSize: 24,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPrintContentParamsSpec, nullable: false, minVersion: 0 },
        { name: 'page_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'document_cookie', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DidPreviewDocumentParams
printing.mojom.mojom.DidPreviewDocumentParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.DidPreviewDocumentParams',
      packedSize: 24,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPrintContentParamsSpec, nullable: false, minVersion: 0 },
        { name: 'document_cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'expected_pages_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrintParams
printing.mojom.mojom.PrintParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintParams',
      packedSize: 128,
      fields: [
        { name: 'page_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false, minVersion: 0 },
        { name: 'content_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false, minVersion: 0 },
        { name: 'printable_area', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'margin_top', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'margin_left', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'page_orientation', packedOffset: 80, packedBitOffset: 0, type: printing.mojom.PageOrientationSpec, nullable: false, minVersion: 0 },
        { name: 'dpi', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'document_cookie', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'selection_only', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'preview_ui_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'preview_request_id', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_first_request', packedOffset: 116, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'print_scaling_option', packedOffset: 96, packedBitOffset: 0, type: printing.mojom.PrintScalingOptionSpec, nullable: false, minVersion: 0 },
        { name: 'print_to_pdf', packedOffset: 116, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_header_footer', packedOffset: 116, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'header_template', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'footer_template', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'rasterize_pdf', packedOffset: 116, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rasterize_pdf_dpi', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'should_print_backgrounds', packedOffset: 116, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'printed_doc_type', packedOffset: 104, packedBitOffset: 0, type: printing.mojom.SkiaDocumentTypeSpec, nullable: false, minVersion: 0 },
        { name: 'prefer_css_page_size', packedOffset: 116, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pages_per_sheet', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'generate_tagged_pdf_$flag', packedOffset: 116, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'generate_tagged_pdf_$value', originalFieldName: 'generate_tagged_pdf' } },
        { name: 'generate_tagged_pdf_$value', packedOffset: 117, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'generate_tagged_pdf_$flag', originalFieldName: 'generate_tagged_pdf' } },
        { name: 'generate_document_outline', packedOffset: 112, packedBitOffset: 0, type: printing.mojom.GenerateDocumentOutlineSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 128}]
    }
  }
};

// Struct: PrintPagesParams
printing.mojom.mojom.PrintPagesParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPagesParams',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PrintParamsSpec, nullable: false, minVersion: 0 },
        { name: 'pages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.PageRangeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DidPrintDocumentParams
printing.mojom.mojom.DidPrintDocumentParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.DidPrintDocumentParams',
      packedSize: 48,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPrintContentParamsSpec, nullable: false, minVersion: 0 },
        { name: 'document_cookie', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'page_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'content_area', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'physical_offsets', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ScriptedPrintParams
printing.mojom.mojom.ScriptedPrintParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.ScriptedPrintParams',
      packedSize: 24,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'expected_pages_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'has_selection', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_scripted', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'margin_type', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.MarginTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrintWithParamsResultData
printing.mojom.mojom.PrintWithParamsResultDataSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintWithParamsResultData',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPrintDocumentParamsSpec, nullable: false, minVersion: 0 },
        { name: 'accessibility_tree', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'generate_document_outline', packedOffset: 16, packedBitOffset: 0, type: printing.mojom.GenerateDocumentOutlineSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PrintRenderer
printing.mojom.mojom.PrintRenderer = {};

printing.mojom.mojom.PrintRendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PrintRendererRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintRenderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PrintRendererPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PrintRendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PrintRendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPreviewDocument(job_settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec,
      printing.mojom.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec,
      [job_settings]);
  }

};

printing.mojom.mojom.PrintRenderer.getRemote = function() {
  let remote = new printing.mojom.mojom.PrintRendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintRenderer',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePreviewDocument
printing.mojom.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderer.CreatePreviewDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'job_settings', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderer.CreatePreviewDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'preview_document_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PrintRendererPtr = printing.mojom.mojom.PrintRendererRemote;
printing.mojom.mojom.PrintRendererRequest = printing.mojom.mojom.PrintRendererPendingReceiver;


// Interface: PrintPreviewUI
printing.mojom.mojom.PrintPreviewUI = {};

printing.mojom.mojom.PrintPreviewUIPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PrintPreviewUIRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintPreviewUI';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PrintPreviewUIPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PrintPreviewUIRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PrintPreviewUIRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setOptionsFromDocument(params, request_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec,
      null,
      [params, request_id]);
  }

  didPrepareDocumentForPreview(document_cookie, request_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  didPreviewPage(params, request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec,
      null,
      [params, request_id]);
  }

  metafileReadyForPrinting(params, request_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec,
      null,
      [params, request_id]);
  }

  printPreviewFailed(document_cookie, request_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  printPreviewCancelled(document_cookie, request_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  printerSettingsInvalid(document_cookie, request_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec,
      null,
      [document_cookie, request_id]);
  }

  didGetDefaultPageLayout(page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec,
      null,
      [page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id]);
  }

  didStartPreview(params, request_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec,
      null,
      [params, request_id]);
  }

};

printing.mojom.mojom.PrintPreviewUI.getRemote = function() {
  let remote = new printing.mojom.mojom.PrintPreviewUIRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintPreviewUI',
    'context');
  return remote.$;
};

// ParamsSpec for SetOptionsFromDocument
printing.mojom.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.SetOptionsFromDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.OptionsFromDocumentParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidPrepareDocumentForPreview
printing.mojom.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidPrepareDocumentForPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidPreviewPage
printing.mojom.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidPreviewPage_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPreviewPageParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MetafileReadyForPrinting
printing.mojom.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.MetafileReadyForPrinting_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPreviewDocumentParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PrintPreviewFailed
printing.mojom.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.PrintPreviewFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrintPreviewCancelled
printing.mojom.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.PrintPreviewCancelled_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrinterSettingsInvalid
printing.mojom.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.PrinterSettingsInvalid_Params',
      packedSize: 16,
      fields: [
        { name: 'document_cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidGetDefaultPageLayout
printing.mojom.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidGetDefaultPageLayout_Params',
      packedSize: 32,
      fields: [
        { name: 'page_layout_in_points', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PageSizeMarginsSpec, nullable: false, minVersion: 0 },
        { name: 'printable_area_in_points', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'all_pages_have_custom_size', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'all_pages_have_custom_orientation', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DidStartPreview
printing.mojom.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintPreviewUI.DidStartPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidStartPreviewParamsSpec, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PrintPreviewUIPtr = printing.mojom.mojom.PrintPreviewUIRemote;
printing.mojom.mojom.PrintPreviewUIRequest = printing.mojom.mojom.PrintPreviewUIPendingReceiver;


// Interface: PrintRenderFrame
printing.mojom.mojom.PrintRenderFrame = {};

printing.mojom.mojom.PrintRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PrintRenderFrameRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PrintRenderFramePendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PrintRenderFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PrintRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  printRequestedPages() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec,
      null,
      []);
  }

  printWithParams(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec,
      null,
      [params]);
  }

  printForSystemDialog() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec,
      null,
      []);
  }

  initiatePrintPreview(print_renderer, has_selection) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec,
      null,
      [print_renderer, has_selection]);
  }

  setPrintPreviewUI(preview) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec,
      null,
      [preview]);
  }

  printPreview(settings) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_PrintPreview_ParamsSpec,
      null,
      [settings]);
  }

  onPrintPreviewDialogClosed() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec,
      null,
      []);
  }

  printFrameContent(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec,
      printing.mojom.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec,
      [params]);
  }

  connectToPdfRenderer() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec,
      null,
      []);
  }

  printingDone(success) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_PrintingDone_ParamsSpec,
      null,
      [success]);
  }

  printNodeUnderContextMenu() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec,
      null,
      []);
  }

};

printing.mojom.mojom.PrintRenderFrame.getRemote = function() {
  let remote = new printing.mojom.mojom.PrintRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintRenderFrame',
    'context');
  return remote.$;
};

// ParamsSpec for PrintRequestedPages
printing.mojom.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintRequestedPages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PrintWithParams
printing.mojom.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintWithParams_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PrintPagesParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrintForSystemDialog
printing.mojom.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintForSystemDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for InitiatePrintPreview
printing.mojom.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.InitiatePrintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'print_renderer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'has_selection', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPrintPreviewUI
printing.mojom.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.SetPrintPreviewUI_Params',
      packedSize: 16,
      fields: [
        { name: 'preview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrintPreview
printing.mojom.mojom.PrintRenderFrame_PrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPrintPreviewDialogClosed
printing.mojom.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.OnPrintPreviewDialogClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PrintFrameContent
printing.mojom.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintFrameContent_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PrintFrameContentParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintFrameContent_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'document_cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPrintContentParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ConnectToPdfRenderer
printing.mojom.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.ConnectToPdfRenderer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PrintingDone
printing.mojom.mojom.PrintRenderFrame_PrintingDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintingDone_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrintNodeUnderContextMenu
printing.mojom.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintRenderFrame.PrintNodeUnderContextMenu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PrintRenderFramePtr = printing.mojom.mojom.PrintRenderFrameRemote;
printing.mojom.mojom.PrintRenderFrameRequest = printing.mojom.mojom.PrintRenderFramePendingReceiver;


// Interface: PrintManagerHost
printing.mojom.mojom.PrintManagerHost = {};

printing.mojom.mojom.PrintManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PrintManagerHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PrintManagerHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PrintManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PrintManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didGetPrintedPagesCount(cookie, number_pages) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec,
      null,
      [cookie, number_pages]);
  }

  getDefaultPrintSettings() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec,
      printing.mojom.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec,
      []);
  }

  didShowPrintDialog() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec,
      null,
      []);
  }

  didPrintDocument(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec,
      printing.mojom.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec,
      [params]);
  }

  isPrintingEnabled() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      printing.mojom.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec,
      printing.mojom.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec,
      []);
  }

  scriptedPrint(params) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      printing.mojom.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec,
      printing.mojom.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec,
      [params]);
  }

  printingFailed(cookie, reason) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      printing.mojom.mojom.PrintManagerHost_PrintingFailed_ParamsSpec,
      null,
      [cookie, reason]);
  }

  updatePrintSettings(job_settings) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      printing.mojom.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec,
      printing.mojom.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec,
      [job_settings]);
  }

  setupScriptedPrintPreview() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      printing.mojom.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec,
      null,
      []);
  }

  showScriptedPrintPreview(is_modifiable) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      printing.mojom.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec,
      null,
      [is_modifiable]);
  }

  requestPrintPreview(params) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      printing.mojom.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec,
      null,
      [params]);
  }

  checkForCancel(preview_ui_id, request_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      printing.mojom.mojom.PrintManagerHost_CheckForCancel_ParamsSpec,
      printing.mojom.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec,
      [preview_ui_id, request_id]);
  }

  setAccessibilityTree(cookie, accessibility_tree) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      printing.mojom.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec,
      null,
      [cookie, accessibility_tree]);
  }

};

printing.mojom.mojom.PrintManagerHost.getRemote = function() {
  let remote = new printing.mojom.mojom.PrintManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for DidGetPrintedPagesCount
printing.mojom.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidGetPrintedPagesCount_Params',
      packedSize: 16,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'number_pages', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDefaultPrintSettings
printing.mojom.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.GetDefaultPrintSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

printing.mojom.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.GetDefaultPrintSettings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'default_settings', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PrintParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidShowPrintDialog
printing.mojom.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidShowPrintDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DidPrintDocument
printing.mojom.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidPrintDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.DidPrintDocumentParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.DidPrintDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsPrintingEnabled
printing.mojom.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.IsPrintingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

printing.mojom.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.IsPrintingEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'printing_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScriptedPrint
printing.mojom.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.ScriptedPrint_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.ScriptedPrintParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.ScriptedPrint_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PrintPagesParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrintingFailed
printing.mojom.mojom.PrintManagerHost_PrintingFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.PrintingFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 4, packedBitOffset: 0, type: printing.mojom.PrintFailureReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdatePrintSettings
printing.mojom.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.UpdatePrintSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'job_settings', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.UpdatePrintSettings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'current_settings', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.PrintPagesParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetupScriptedPrintPreview
printing.mojom.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.SetupScriptedPrintPreview_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowScriptedPrintPreview
printing.mojom.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.ShowScriptedPrintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'is_modifiable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestPrintPreview
printing.mojom.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.RequestPrintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.RequestPrintPreviewParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckForCancel
printing.mojom.mojom.PrintManagerHost_CheckForCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.CheckForCancel_Params',
      packedSize: 16,
      fields: [
        { name: 'preview_ui_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.CheckForCancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cancel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAccessibilityTree
printing.mojom.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrintManagerHost.SetAccessibilityTree_Params',
      packedSize: 24,
      fields: [
        { name: 'cookie', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'accessibility_tree', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PrintManagerHostPtr = printing.mojom.mojom.PrintManagerHostRemote;
printing.mojom.mojom.PrintManagerHostRequest = printing.mojom.mojom.PrintManagerHostPendingReceiver;

