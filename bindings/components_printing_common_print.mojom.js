// Auto-generated MojoJS binding
// Source: chromium_src/components/printing/common/print.mojom
// Module: printing.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: CreatePreviewDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePreviewDocument (0)');
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
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPreviewDocument');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: SetOptionsFromDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOptionsFromDocument (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidPrepareDocumentForPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidPrepareDocumentForPreview (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidPreviewPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidPreviewPage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MetafileReadyForPrinting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MetafileReadyForPrinting (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: PrintPreviewFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintPreviewFailed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PrintPreviewCancelled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintPreviewCancelled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PrinterSettingsInvalid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrinterSettingsInvalid (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DidGetDefaultPageLayout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidGetDefaultPageLayout (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DidStartPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStartPreview (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOptionsFromDocument');
          const result = this.impl.setOptionsFromDocument(params.params, params.request_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didPrepareDocumentForPreview');
          const result = this.impl.didPrepareDocumentForPreview(params.document_cookie, params.request_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didPreviewPage');
          const result = this.impl.didPreviewPage(params.params, params.request_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.metafileReadyForPrinting');
          const result = this.impl.metafileReadyForPrinting(params.params, params.request_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printPreviewFailed');
          const result = this.impl.printPreviewFailed(params.document_cookie, params.request_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printPreviewCancelled');
          const result = this.impl.printPreviewCancelled(params.document_cookie, params.request_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printerSettingsInvalid');
          const result = this.impl.printerSettingsInvalid(params.document_cookie, params.request_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didGetDefaultPageLayout');
          const result = this.impl.didGetDefaultPageLayout(params.page_layout_in_points, params.printable_area_in_points, params.all_pages_have_custom_size, params.all_pages_have_custom_orientation, params.request_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStartPreview');
          const result = this.impl.didStartPreview(params.params, params.request_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: PrintRequestedPages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintRequestedPages (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PrintWithParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintWithParams (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PrintForSystemDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintForSystemDialog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: InitiatePrintPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitiatePrintPreview (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetPrintPreviewUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPrintPreviewUI (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PrintPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintPreview (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnPrintPreviewDialogClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintPreviewDialogClosed (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PrintFrameContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintFrameContent (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ConnectToPdfRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToPdfRenderer (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PrintingDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintingDone (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: PrintNodeUnderContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintNodeUnderContextMenu (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printRequestedPages');
          const result = this.impl.printRequestedPages();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printWithParams');
          const result = this.impl.printWithParams(params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printForSystemDialog');
          const result = this.impl.printForSystemDialog();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initiatePrintPreview');
          const result = this.impl.initiatePrintPreview(params.print_renderer, params.has_selection);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPrintPreviewUI');
          const result = this.impl.setPrintPreviewUI(params.preview);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printPreview');
          const result = this.impl.printPreview(params.settings);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintPreviewDialogClosed');
          const result = this.impl.onPrintPreviewDialogClosed();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printFrameContent');
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
          console.log('[GeneratedReceiver] Calling impl.connectToPdfRenderer');
          const result = this.impl.connectToPdfRenderer();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printingDone');
          const result = this.impl.printingDone(params.success);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printNodeUnderContextMenu');
          const result = this.impl.printNodeUnderContextMenu();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: DidGetPrintedPagesCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidGetPrintedPagesCount (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDefaultPrintSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultPrintSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidShowPrintDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidShowPrintDialog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidPrintDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidPrintDocument (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: IsPrintingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsPrintingEnabled (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ScriptedPrint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScriptedPrint (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PrintingFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintingFailed (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdatePrintSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePrintSettings (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetupScriptedPrintPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetupScriptedPrintPreview (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ShowScriptedPrintPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowScriptedPrintPreview (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RequestPrintPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPrintPreview (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: CheckForCancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckForCancel (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetAccessibilityTree
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccessibilityTree (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didGetPrintedPagesCount');
          const result = this.impl.didGetPrintedPagesCount(params.cookie, params.number_pages);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDefaultPrintSettings');
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
          console.log('[GeneratedReceiver] Calling impl.didShowPrintDialog');
          const result = this.impl.didShowPrintDialog();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didPrintDocument');
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
          console.log('[GeneratedReceiver] Calling impl.isPrintingEnabled');
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
          console.log('[GeneratedReceiver] Calling impl.scriptedPrint');
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
          console.log('[GeneratedReceiver] Calling impl.printingFailed');
          const result = this.impl.printingFailed(params.cookie, params.reason);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePrintSettings');
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
          console.log('[GeneratedReceiver] Calling impl.setupScriptedPrintPreview');
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
          console.log('[GeneratedReceiver] Calling impl.showScriptedPrintPreview');
          const result = this.impl.showScriptedPrintPreview(params.is_modifiable);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPrintPreview');
          const result = this.impl.requestPrintPreview(params.params);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkForCancel');
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
          console.log('[GeneratedReceiver] Calling impl.setAccessibilityTree');
          const result = this.impl.setAccessibilityTree(params.cookie, params.accessibility_tree);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.PrintManagerHostReceiver = printing.mojom.PrintManagerHostReceiver;

printing.mojom.PrintManagerHostPtr = printing.mojom.PrintManagerHostRemote;
printing.mojom.PrintManagerHostRequest = printing.mojom.PrintManagerHostPendingReceiver;

