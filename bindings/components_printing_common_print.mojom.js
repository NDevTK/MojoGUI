// Auto-generated MojoJS binding
// Source: chromium_src/components/printing/common/print.mojom
// Module: printing.mojom

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
var ax = ax || {};
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
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('ui_id', 4, 0, mojo.internal.Int32, -1, false, 0, undefined),
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
      mojo.internal.StructField('printable_area', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OptionsFromDocumentParams
mojo.internal.Struct(
    printing.mojom.OptionsFromDocumentParamsSpec, 'printing.mojom.OptionsFromDocumentParams', [
      mojo.internal.StructField('duplex', 0, 0, printing.mojom.DuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('copies', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_scaling_disabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPrintContentParams
mojo.internal.Struct(
    printing.mojom.DidPrintContentParamsSpec, 'printing.mojom.DidPrintContentParams', [
      mojo.internal.StructField('metafile_data_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidStartPreviewParams
mojo.internal.Struct(
    printing.mojom.DidStartPreviewParamsSpec, 'printing.mojom.DidStartPreviewParams', [
      mojo.internal.StructField('pages_to_render', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('page_size', 8, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('fit_to_page_scaling', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DidPreviewPageParams
mojo.internal.Struct(
    printing.mojom.DidPreviewPageParamsSpec, 'printing.mojom.DidPreviewPageParams', [
      mojo.internal.StructField('content', 0, 0, printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPreviewDocumentParams
mojo.internal.Struct(
    printing.mojom.DidPreviewDocumentParamsSpec, 'printing.mojom.DidPreviewDocumentParams', [
      mojo.internal.StructField('content', 0, 0, printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('expected_pages_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintParams
mojo.internal.Struct(
    printing.mojom.PrintParamsSpec, 'printing.mojom.PrintParams', [
      mojo.internal.StructField('page_size', 0, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_size', 8, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printable_area', 16, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_orientation', 24, 0, printing.mojom.PageOrientationSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('dpi', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 40, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('print_scaling_option', 48, 0, printing.mojom.PrintScalingOptionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('title', 56, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 64, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('header_template', 72, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('footer_template', 80, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('printed_doc_type', 88, 0, printing.mojom.SkiaDocumentTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('generate_document_outline', 96, 0, printing.mojom.GenerateDocumentOutlineSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('margin_top', 104, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('margin_left', 108, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 112, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('preview_ui_id', 116, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('preview_request_id', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rasterize_pdf_dpi', 124, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 128, 0, mojo.internal.Uint32, 1, false, 0, undefined),
      mojo.internal.StructField('selection_only', 132, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_first_request', 132, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('print_to_pdf', 132, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_header_footer', 132, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rasterize_pdf', 132, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_print_backgrounds', 132, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefer_css_page_size', 132, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('generate_tagged_pdf_$flag', 132, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'generate_tagged_pdf_$value', originalFieldName: 'generate_tagged_pdf' }),
      mojo.internal.StructField('generate_tagged_pdf_$value', 133, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'generate_tagged_pdf_$flag', originalFieldName: 'generate_tagged_pdf' }),
    ],
    [[0, 144]]);

// Struct: PrintPagesParams
mojo.internal.Struct(
    printing.mojom.PrintPagesParamsSpec, 'printing.mojom.PrintPagesParams', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.PrintParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pages', 8, 0, mojo.internal.Array(printing.mojom.PageRangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPrintDocumentParams
mojo.internal.Struct(
    printing.mojom.DidPrintDocumentParamsSpec, 'printing.mojom.DidPrintDocumentParams', [
      mojo.internal.StructField('content', 0, 0, printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_area', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('physical_offsets', 24, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScriptedPrintParams
mojo.internal.Struct(
    printing.mojom.ScriptedPrintParamsSpec, 'printing.mojom.ScriptedPrintParams', [
      mojo.internal.StructField('margin_type', 0, 0, printing.mojom.MarginTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('expected_pages_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_selection', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_scripted', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrintWithParamsResultData
mojo.internal.Struct(
    printing.mojom.PrintWithParamsResultDataSpec, 'printing.mojom.PrintWithParamsResultData', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPrintDocumentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accessibility_tree', 8, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('generate_document_outline', 16, 0, printing.mojom.GenerateDocumentOutlineSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PrintRenderer
mojo.internal.Struct(
    printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec, 'printing.mojom.PrintRenderer_CreatePreviewDocument_Params', [
      mojo.internal.StructField('job_settings', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec, 'printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParams', [
      mojo.internal.StructField('preview_document_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
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
  createPreviewDocument(job_settings) {
    return this.$.createPreviewDocument(job_settings);
  }
};

printing.mojom.PrintRendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintRenderer', [
      { explicit: null },
    ]);
  }

  createPreviewDocument(job_settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec,
      printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec,
      [job_settings],
      false);
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

printing.mojom.PrintRendererReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintRenderer', [
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
             decoder.decodeStructInline(printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec.$.structSpec);
          const result = this.impl.createPreviewDocument(params.job_settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PrintRendererReceiver = printing.mojom.PrintRendererReceiver;

printing.mojom.PrintRendererPtr = printing.mojom.PrintRendererRemote;
printing.mojom.PrintRendererRequest = printing.mojom.PrintRendererPendingReceiver;


// Interface: PrintPreviewUI
mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec, 'printing.mojom.PrintPreviewUI_SetOptionsFromDocument_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.OptionsFromDocumentParamsSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPreviewPageParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec, 'printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPreviewDocumentParamsSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('page_layout_in_points', 0, 0, printing.mojom.PageSizeMarginsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printable_area_in_points', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('all_pages_have_custom_size', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('all_pages_have_custom_orientation', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidStartPreview_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidStartPreviewParamsSpec.$, null, false, 0, undefined),
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
  setOptionsFromDocument(params, request_id) {
    return this.$.setOptionsFromDocument(params, request_id);
  }
  didPrepareDocumentForPreview(document_cookie, request_id) {
    return this.$.didPrepareDocumentForPreview(document_cookie, request_id);
  }
  didPreviewPage(params, request_id) {
    return this.$.didPreviewPage(params, request_id);
  }
  metafileReadyForPrinting(params, request_id) {
    return this.$.metafileReadyForPrinting(params, request_id);
  }
  printPreviewFailed(document_cookie, request_id) {
    return this.$.printPreviewFailed(document_cookie, request_id);
  }
  printPreviewCancelled(document_cookie, request_id) {
    return this.$.printPreviewCancelled(document_cookie, request_id);
  }
  printerSettingsInvalid(document_cookie, request_id) {
    return this.$.printerSettingsInvalid(document_cookie, request_id);
  }
  didGetDefaultPageLayout(page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id) {
    return this.$.didGetDefaultPageLayout(page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id);
  }
  didStartPreview(params, request_id) {
    return this.$.didStartPreview(params, request_id);
  }
};

printing.mojom.PrintPreviewUIRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintPreviewUI', [
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

  setOptionsFromDocument(params, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec,
      null,
      [params, request_id],
      false);
  }

  didPrepareDocumentForPreview(document_cookie, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec,
      null,
      [document_cookie, request_id],
      false);
  }

  didPreviewPage(params, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec,
      null,
      [params, request_id],
      false);
  }

  metafileReadyForPrinting(params, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec,
      null,
      [params, request_id],
      false);
  }

  printPreviewFailed(document_cookie, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec,
      null,
      [document_cookie, request_id],
      false);
  }

  printPreviewCancelled(document_cookie, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec,
      null,
      [document_cookie, request_id],
      false);
  }

  printerSettingsInvalid(document_cookie, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec,
      null,
      [document_cookie, request_id],
      false);
  }

  didGetDefaultPageLayout(page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec,
      null,
      [page_layout_in_points, printable_area_in_points, all_pages_have_custom_size, all_pages_have_custom_orientation, request_id],
      false);
  }

  didStartPreview(params, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec,
      null,
      [params, request_id],
      false);
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

printing.mojom.PrintPreviewUIReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintPreviewUI', [
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
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec.$.structSpec);
          const result = this.impl.setOptionsFromDocument(params.params, params.request_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec.$.structSpec);
          const result = this.impl.didPrepareDocumentForPreview(params.document_cookie, params.request_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec.$.structSpec);
          const result = this.impl.didPreviewPage(params.params, params.request_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec.$.structSpec);
          const result = this.impl.metafileReadyForPrinting(params.params, params.request_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec.$.structSpec);
          const result = this.impl.printPreviewFailed(params.document_cookie, params.request_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec.$.structSpec);
          const result = this.impl.printPreviewCancelled(params.document_cookie, params.request_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec.$.structSpec);
          const result = this.impl.printerSettingsInvalid(params.document_cookie, params.request_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec.$.structSpec);
          const result = this.impl.didGetDefaultPageLayout(params.page_layout_in_points, params.printable_area_in_points, params.all_pages_have_custom_size, params.all_pages_have_custom_orientation, params.request_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec.$.structSpec);
          const result = this.impl.didStartPreview(params.params, params.request_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PrintPreviewUIReceiver = printing.mojom.PrintPreviewUIReceiver;

printing.mojom.PrintPreviewUIPtr = printing.mojom.PrintPreviewUIRemote;
printing.mojom.PrintPreviewUIRequest = printing.mojom.PrintPreviewUIPendingReceiver;


// Interface: PrintRenderFrame
mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintRequestedPages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintWithParams_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.PrintPagesParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintForSystemDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec, 'printing.mojom.PrintRenderFrame_InitiatePrintPreview_Params', [
      mojo.internal.StructField('print_renderer', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('has_selection', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec, 'printing.mojom.PrintRenderFrame_SetPrintPreviewUI_Params', [
      mojo.internal.StructField('preview', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintPreview_Params', [
      mojo.internal.StructField('settings', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec, 'printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintFrameContent_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.PrintFrameContentParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec, 'printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
  printRequestedPages() {
    return this.$.printRequestedPages();
  }
  printWithParams(params) {
    return this.$.printWithParams(params);
  }
  printForSystemDialog() {
    return this.$.printForSystemDialog();
  }
  initiatePrintPreview(print_renderer, has_selection) {
    return this.$.initiatePrintPreview(print_renderer, has_selection);
  }
  setPrintPreviewUI(preview) {
    return this.$.setPrintPreviewUI(preview);
  }
  printPreview(settings) {
    return this.$.printPreview(settings);
  }
  onPrintPreviewDialogClosed() {
    return this.$.onPrintPreviewDialogClosed();
  }
  printFrameContent(params) {
    return this.$.printFrameContent(params);
  }
  connectToPdfRenderer() {
    return this.$.connectToPdfRenderer();
  }
  printingDone(success) {
    return this.$.printingDone(success);
  }
  printNodeUnderContextMenu() {
    return this.$.printNodeUnderContextMenu();
  }
};

printing.mojom.PrintRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintRenderFrame', [
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

  printRequestedPages() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec,
      null,
      [],
      false);
  }

  printWithParams(params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec,
      null,
      [params],
      false);
  }

  printForSystemDialog() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec,
      null,
      [],
      false);
  }

  initiatePrintPreview(print_renderer, has_selection) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec,
      null,
      [print_renderer, has_selection],
      false);
  }

  setPrintPreviewUI(preview) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec,
      null,
      [preview],
      false);
  }

  printPreview(settings) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec,
      null,
      [settings],
      false);
  }

  onPrintPreviewDialogClosed() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec,
      null,
      [],
      false);
  }

  printFrameContent(params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec,
      printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec,
      [params],
      false);
  }

  connectToPdfRenderer() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  printingDone(success) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec,
      null,
      [success],
      false);
  }

  printNodeUnderContextMenu() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec,
      null,
      [],
      false);
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

printing.mojom.PrintRenderFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintRenderFrame', [
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
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec.$.structSpec);
          const result = this.impl.printRequestedPages();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec.$.structSpec);
          const result = this.impl.printWithParams(params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec.$.structSpec);
          const result = this.impl.printForSystemDialog();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec.$.structSpec);
          const result = this.impl.initiatePrintPreview(params.print_renderer, params.has_selection);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec.$.structSpec);
          const result = this.impl.setPrintPreviewUI(params.preview);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec.$.structSpec);
          const result = this.impl.printPreview(params.settings);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onPrintPreviewDialogClosed();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec.$.structSpec);
          const result = this.impl.printFrameContent(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.connectToPdfRenderer();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec.$.structSpec);
          const result = this.impl.printingDone(params.success);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.printNodeUnderContextMenu();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PrintRenderFrameReceiver = printing.mojom.PrintRenderFrameReceiver;

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
      mojo.internal.StructField('default_settings', 0, 0, printing.mojom.PrintParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec, 'printing.mojom.PrintManagerHost_DidShowPrintDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec, 'printing.mojom.PrintManagerHost_DidPrintDocument_Params', [
      mojo.internal.StructField('params', 0, 0, printing.mojom.DidPrintDocumentParamsSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('params', 0, 0, printing.mojom.ScriptedPrintParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParams', [
      mojo.internal.StructField('settings', 0, 0, printing.mojom.PrintPagesParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec, 'printing.mojom.PrintManagerHost_PrintingFailed_Params', [
      mojo.internal.StructField('reason', 0, 0, printing.mojom.PrintFailureReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec, 'printing.mojom.PrintManagerHost_UpdatePrintSettings_Params', [
      mojo.internal.StructField('job_settings', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParams', [
      mojo.internal.StructField('current_settings', 0, 0, printing.mojom.PrintPagesParamsSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('params', 0, 0, printing.mojom.RequestPrintPreviewParamsSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('accessibility_tree', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
  didGetPrintedPagesCount(cookie, number_pages) {
    return this.$.didGetPrintedPagesCount(cookie, number_pages);
  }
  getDefaultPrintSettings() {
    return this.$.getDefaultPrintSettings();
  }
  didShowPrintDialog() {
    return this.$.didShowPrintDialog();
  }
  didPrintDocument(params) {
    return this.$.didPrintDocument(params);
  }
  isPrintingEnabled() {
    return this.$.isPrintingEnabled();
  }
  scriptedPrint(params) {
    return this.$.scriptedPrint(params);
  }
  printingFailed(cookie, reason) {
    return this.$.printingFailed(cookie, reason);
  }
  updatePrintSettings(job_settings) {
    return this.$.updatePrintSettings(job_settings);
  }
  setupScriptedPrintPreview() {
    return this.$.setupScriptedPrintPreview();
  }
  showScriptedPrintPreview(is_modifiable) {
    return this.$.showScriptedPrintPreview(is_modifiable);
  }
  requestPrintPreview(params) {
    return this.$.requestPrintPreview(params);
  }
  checkForCancel(preview_ui_id, request_id) {
    return this.$.checkForCancel(preview_ui_id, request_id);
  }
  setAccessibilityTree(cookie, accessibility_tree) {
    return this.$.setAccessibilityTree(cookie, accessibility_tree);
  }
};

printing.mojom.PrintManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintManagerHost', [
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

  didGetPrintedPagesCount(cookie, number_pages) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec,
      null,
      [cookie, number_pages],
      false);
  }

  getDefaultPrintSettings() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec,
      printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec,
      [],
      false);
  }

  didShowPrintDialog() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec,
      null,
      [],
      false);
  }

  didPrintDocument(params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec,
      printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec,
      [params],
      false);
  }

  isPrintingEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec,
      printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec,
      [],
      false);
  }

  scriptedPrint(params) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec,
      printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec,
      [params],
      false);
  }

  printingFailed(cookie, reason) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec,
      null,
      [cookie, reason],
      false);
  }

  updatePrintSettings(job_settings) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec,
      printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec,
      [job_settings],
      false);
  }

  setupScriptedPrintPreview() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec,
      printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec,
      [],
      false);
  }

  showScriptedPrintPreview(is_modifiable) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec,
      null,
      [is_modifiable],
      false);
  }

  requestPrintPreview(params) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec,
      null,
      [params],
      false);
  }

  checkForCancel(preview_ui_id, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec,
      printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec,
      [preview_ui_id, request_id],
      false);
  }

  setAccessibilityTree(cookie, accessibility_tree) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec,
      null,
      [cookie, accessibility_tree],
      false);
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

printing.mojom.PrintManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintManagerHost', [
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
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec.$.structSpec);
          const result = this.impl.didGetPrintedPagesCount(params.cookie, params.number_pages);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec.$.structSpec);
          const result = this.impl.getDefaultPrintSettings();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec.$.structSpec);
          const result = this.impl.didShowPrintDialog();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec.$.structSpec);
          const result = this.impl.didPrintDocument(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.isPrintingEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec.$.structSpec);
          const result = this.impl.scriptedPrint(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec.$.structSpec);
          const result = this.impl.printingFailed(params.cookie, params.reason);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec.$.structSpec);
          const result = this.impl.updatePrintSettings(params.job_settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec.$.structSpec);
          const result = this.impl.setupScriptedPrintPreview();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec.$.structSpec);
          const result = this.impl.showScriptedPrintPreview(params.is_modifiable);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec.$.structSpec);
          const result = this.impl.requestPrintPreview(params.params);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec.$.structSpec);
          const result = this.impl.checkForCancel(params.preview_ui_id, params.request_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec.$.structSpec);
          const result = this.impl.setAccessibilityTree(params.cookie, params.accessibility_tree);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PrintManagerHostReceiver = printing.mojom.PrintManagerHostReceiver;

printing.mojom.PrintManagerHostPtr = printing.mojom.PrintManagerHostRemote;
printing.mojom.PrintManagerHostRequest = printing.mojom.PrintManagerHostPendingReceiver;

