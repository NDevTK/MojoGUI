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

         const p = window.mojoVersion.split('.');
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.printing = mojo.internal.bindings.printing || {};
mojo.internal.bindings.printing.mojom = mojo.internal.bindings.printing.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.printing.mojom.PrintFailureReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PreviewIdsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.RequestPrintPreviewParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintFrameContentParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.OptionsFromDocumentParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.DidPrintContentParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.DidStartPreviewParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.DidPreviewPageParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.DidPreviewDocumentParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPagesParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.DidPrintDocumentParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.ScriptedPrintParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintWithParamsResultDataSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderer = {};
mojo.internal.bindings.printing.mojom.PrintRenderer.$interfaceName = 'printing.mojom.PrintRenderer';
mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI = {};
mojo.internal.bindings.printing.mojom.PrintPreviewUI.$interfaceName = 'printing.mojom.PrintPreviewUI';
mojo.internal.bindings.printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame = {};
mojo.internal.bindings.printing.mojom.PrintRenderFrame.$interfaceName = 'printing.mojom.PrintRenderFrame';
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost = {};
mojo.internal.bindings.printing.mojom.PrintManagerHost.$interfaceName = 'printing.mojom.PrintManagerHost';
mojo.internal.bindings.printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec = { $: {} };

// Enum: PrintFailureReason
mojo.internal.bindings.printing.mojom.PrintFailureReason = {
  kGeneralFailure: 0,
  kInvalidPageRange: 1,
  kPrintingInProgress: 2,
};

// Struct: PreviewIds
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PreviewIdsSpec, 'printing.mojom.PreviewIds', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('arg_ui_id', 4, 0, mojo.internal.Int32, -1, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RequestPrintPreviewParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.RequestPrintPreviewParamsSpec, 'printing.mojom.RequestPrintPreviewParams', [
      mojo.internal.StructField('arg_is_from_arc', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_modifiable', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_webnode_only', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_selection', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_selection_only', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PrintFrameContentParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintFrameContentParamsSpec, 'printing.mojom.PrintFrameContentParams', [
      mojo.internal.StructField('arg_printable_area', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OptionsFromDocumentParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.OptionsFromDocumentParamsSpec, 'printing.mojom.OptionsFromDocumentParams', [
      mojo.internal.StructField('arg_duplex', 0, 0, mojo.internal.bindings.printing.mojom.DuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_copies', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_scaling_disabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPrintContentParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.DidPrintContentParamsSpec, 'printing.mojom.DidPrintContentParams', [
      mojo.internal.StructField('arg_metafile_data_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subframe_content_info', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidStartPreviewParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.DidStartPreviewParamsSpec, 'printing.mojom.DidStartPreviewParams', [
      mojo.internal.StructField('arg_pages_to_render', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_page_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pages_per_sheet', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fit_to_page_scaling', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DidPreviewPageParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.DidPreviewPageParamsSpec, 'printing.mojom.DidPreviewPageParams', [
      mojo.internal.StructField('arg_content', 0, 0, mojo.internal.bindings.printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_document_cookie', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPreviewDocumentParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.DidPreviewDocumentParamsSpec, 'printing.mojom.DidPreviewDocumentParams', [
      mojo.internal.StructField('arg_content', 0, 0, mojo.internal.bindings.printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_expected_pages_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintParamsSpec, 'printing.mojom.PrintParams', [
      mojo.internal.StructField('arg_page_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printable_area', 16, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_orientation', 24, 0, mojo.internal.bindings.printing.mojom.PageOrientationSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dpi', 32, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_factor', 40, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('arg_print_scaling_option', 48, 0, mojo.internal.bindings.printing.mojom.PrintScalingOptionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_title', 56, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 64, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_header_template', 72, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_footer_template', 80, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printed_doc_type', 88, 0, mojo.internal.bindings.printing.mojom.SkiaDocumentTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_generate_document_outline', 96, 0, mojo.internal.bindings.printing.mojom.GenerateDocumentOutlineSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_top', 104, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_left', 108, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_document_cookie', 112, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_preview_ui_id', 116, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('arg_preview_request_id', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rasterize_pdf_dpi', 124, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pages_per_sheet', 128, 0, mojo.internal.Uint32, 1, false, 0, undefined),
      mojo.internal.StructField('arg_selection_only', 132, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_first_request', 132, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_print_to_pdf', 132, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_display_header_footer', 132, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_rasterize_pdf', 132, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_print_backgrounds', 132, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prefer_css_page_size', 132, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_generate_tagged_pdf_$flag', 132, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_generate_tagged_pdf_$value', originalFieldName: 'arg_generate_tagged_pdf' }),
      mojo.internal.StructField('arg_generate_tagged_pdf_$value', 133, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_generate_tagged_pdf_$flag', originalFieldName: 'arg_generate_tagged_pdf' }),
    ],
    [[0, 144]]);

// Struct: PrintPagesParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPagesParamsSpec, 'printing.mojom.PrintPagesParams', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.PrintParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pages', 8, 0, mojo.internal.Array(mojo.internal.bindings.printing.mojom.PageRangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DidPrintDocumentParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.DidPrintDocumentParamsSpec, 'printing.mojom.DidPrintDocumentParams', [
      mojo.internal.StructField('arg_content', 0, 0, mojo.internal.bindings.printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_area', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_physical_offsets', 24, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_cookie', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScriptedPrintParams
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.ScriptedPrintParamsSpec, 'printing.mojom.ScriptedPrintParams', [
      mojo.internal.StructField('arg_margin_type', 0, 0, mojo.internal.bindings.printing.mojom.MarginTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_expected_pages_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_selection', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_scripted', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrintWithParamsResultData
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintWithParamsResultDataSpec, 'printing.mojom.PrintWithParamsResultData', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.DidPrintDocumentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_accessibility_tree', 8, 0, mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_generate_document_outline', 16, 0, mojo.internal.bindings.printing.mojom.GenerateDocumentOutlineSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PrintRenderer
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec, 'printing.mojom.PrintRenderer_CreatePreviewDocument_Params', [
      mojo.internal.StructField('arg_job_settings', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec, 'printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParams', [
      mojo.internal.StructField('arg_preview_document_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.printing.mojom.PrintRendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.printing.mojom.PrintRendererRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintRenderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.printing.mojom.PrintRendererPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.printing.mojom.PrintRendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPreviewDocument(arg_job_settings) {
    return this.$.createPreviewDocument(arg_job_settings);
  }
};

mojo.internal.bindings.printing.mojom.PrintRendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintRenderer', [
      { explicit: null },
    ]);
  }

  createPreviewDocument(arg_job_settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec,
      [arg_job_settings],
      false);
  }

};

mojo.internal.bindings.printing.mojom.PrintRenderer.getRemote = function() {
  let remote = new mojo.internal.bindings.printing.mojom.PrintRendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintRenderer',
    'context');
  return remote.$;
};

mojo.internal.bindings.printing.mojom.PrintRendererReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPreviewDocument');
          const result = this.impl.createPreviewDocument(params.arg_job_settings);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintRenderer_CreatePreviewDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreatePreviewDocument FAILED:', e));
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

mojo.internal.bindings.printing.mojom.PrintRendererReceiver = mojo.internal.bindings.printing.mojom.PrintRendererReceiver;

mojo.internal.bindings.printing.mojom.PrintRendererPtr = mojo.internal.bindings.printing.mojom.PrintRendererRemote;
mojo.internal.bindings.printing.mojom.PrintRendererRequest = mojo.internal.bindings.printing.mojom.PrintRendererPendingReceiver;


// Interface: PrintPreviewUI
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec, 'printing.mojom.PrintPreviewUI_SetOptionsFromDocument_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.OptionsFromDocumentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_Params', [
      mojo.internal.StructField('arg_document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidPreviewPage_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.DidPreviewPageParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec, 'printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.DidPreviewDocumentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec, 'printing.mojom.PrintPreviewUI_PrintPreviewFailed_Params', [
      mojo.internal.StructField('arg_document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec, 'printing.mojom.PrintPreviewUI_PrintPreviewCancelled_Params', [
      mojo.internal.StructField('arg_document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec, 'printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_Params', [
      mojo.internal.StructField('arg_document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_Params', [
      mojo.internal.StructField('arg_page_layout_in_points', 0, 0, mojo.internal.bindings.printing.mojom.PageSizeMarginsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printable_area_in_points', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_all_pages_have_custom_size', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_all_pages_have_custom_orientation', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec, 'printing.mojom.PrintPreviewUI_DidStartPreview_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.DidStartPreviewParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.printing.mojom.PrintPreviewUIPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.printing.mojom.PrintPreviewUIRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintPreviewUI';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.printing.mojom.PrintPreviewUIPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.printing.mojom.PrintPreviewUIRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setOptionsFromDocument(arg_params, arg_request_id) {
    return this.$.setOptionsFromDocument(arg_params, arg_request_id);
  }
  didPrepareDocumentForPreview(arg_document_cookie, arg_request_id) {
    return this.$.didPrepareDocumentForPreview(arg_document_cookie, arg_request_id);
  }
  didPreviewPage(arg_params, arg_request_id) {
    return this.$.didPreviewPage(arg_params, arg_request_id);
  }
  metafileReadyForPrinting(arg_params, arg_request_id) {
    return this.$.metafileReadyForPrinting(arg_params, arg_request_id);
  }
  printPreviewFailed(arg_document_cookie, arg_request_id) {
    return this.$.printPreviewFailed(arg_document_cookie, arg_request_id);
  }
  printPreviewCancelled(arg_document_cookie, arg_request_id) {
    return this.$.printPreviewCancelled(arg_document_cookie, arg_request_id);
  }
  printerSettingsInvalid(arg_document_cookie, arg_request_id) {
    return this.$.printerSettingsInvalid(arg_document_cookie, arg_request_id);
  }
  didGetDefaultPageLayout(arg_page_layout_in_points, arg_printable_area_in_points, arg_all_pages_have_custom_size, arg_all_pages_have_custom_orientation, arg_request_id) {
    return this.$.didGetDefaultPageLayout(arg_page_layout_in_points, arg_printable_area_in_points, arg_all_pages_have_custom_size, arg_all_pages_have_custom_orientation, arg_request_id);
  }
  didStartPreview(arg_params, arg_request_id) {
    return this.$.didStartPreview(arg_params, arg_request_id);
  }
};

mojo.internal.bindings.printing.mojom.PrintPreviewUIRemoteCallHandler = class {
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

  setOptionsFromDocument(arg_params, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec,
      null,
      [arg_params, arg_request_id],
      false);
  }

  didPrepareDocumentForPreview(arg_document_cookie, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec,
      null,
      [arg_document_cookie, arg_request_id],
      false);
  }

  didPreviewPage(arg_params, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec,
      null,
      [arg_params, arg_request_id],
      false);
  }

  metafileReadyForPrinting(arg_params, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec,
      null,
      [arg_params, arg_request_id],
      false);
  }

  printPreviewFailed(arg_document_cookie, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec,
      null,
      [arg_document_cookie, arg_request_id],
      false);
  }

  printPreviewCancelled(arg_document_cookie, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec,
      null,
      [arg_document_cookie, arg_request_id],
      false);
  }

  printerSettingsInvalid(arg_document_cookie, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec,
      null,
      [arg_document_cookie, arg_request_id],
      false);
  }

  didGetDefaultPageLayout(arg_page_layout_in_points, arg_printable_area_in_points, arg_all_pages_have_custom_size, arg_all_pages_have_custom_orientation, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec,
      null,
      [arg_page_layout_in_points, arg_printable_area_in_points, arg_all_pages_have_custom_size, arg_all_pages_have_custom_orientation, arg_request_id],
      false);
  }

  didStartPreview(arg_params, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec,
      null,
      [arg_params, arg_request_id],
      false);
  }

};

mojo.internal.bindings.printing.mojom.PrintPreviewUI.getRemote = function() {
  let remote = new mojo.internal.bindings.printing.mojom.PrintPreviewUIRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintPreviewUI',
    'context');
  return remote.$;
};

mojo.internal.bindings.printing.mojom.PrintPreviewUIReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_SetOptionsFromDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOptionsFromDocument');
          const result = this.impl.setOptionsFromDocument(params.arg_params, params.arg_request_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPrepareDocumentForPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didPrepareDocumentForPreview');
          const result = this.impl.didPrepareDocumentForPreview(params.arg_document_cookie, params.arg_request_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidPreviewPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didPreviewPage');
          const result = this.impl.didPreviewPage(params.arg_params, params.arg_request_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_MetafileReadyForPrinting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.metafileReadyForPrinting');
          const result = this.impl.metafileReadyForPrinting(params.arg_params, params.arg_request_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printPreviewFailed');
          const result = this.impl.printPreviewFailed(params.arg_document_cookie, params.arg_request_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrintPreviewCancelled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printPreviewCancelled');
          const result = this.impl.printPreviewCancelled(params.arg_document_cookie, params.arg_request_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_PrinterSettingsInvalid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printerSettingsInvalid');
          const result = this.impl.printerSettingsInvalid(params.arg_document_cookie, params.arg_request_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidGetDefaultPageLayout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didGetDefaultPageLayout');
          const result = this.impl.didGetDefaultPageLayout(params.arg_page_layout_in_points, params.arg_printable_area_in_points, params.arg_all_pages_have_custom_size, params.arg_all_pages_have_custom_orientation, params.arg_request_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintPreviewUI_DidStartPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStartPreview');
          const result = this.impl.didStartPreview(params.arg_params, params.arg_request_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.printing.mojom.PrintPreviewUIReceiver = mojo.internal.bindings.printing.mojom.PrintPreviewUIReceiver;

mojo.internal.bindings.printing.mojom.PrintPreviewUIPtr = mojo.internal.bindings.printing.mojom.PrintPreviewUIRemote;
mojo.internal.bindings.printing.mojom.PrintPreviewUIRequest = mojo.internal.bindings.printing.mojom.PrintPreviewUIPendingReceiver;


// Interface: PrintRenderFrame
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintRequestedPages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintWithParams_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.PrintPagesParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintForSystemDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec, 'printing.mojom.PrintRenderFrame_InitiatePrintPreview_Params', [
      mojo.internal.StructField('arg_print_renderer', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.printing.mojom.PrintRendererSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_has_selection', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec, 'printing.mojom.PrintRenderFrame_SetPrintPreviewUI_Params', [
      mojo.internal.StructField('arg_preview', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.printing.mojom.PrintPreviewUISpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintPreview_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec, 'printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintFrameContent_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.PrintFrameContentParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec, 'printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParams', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.DidPrintContentParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec, 'printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintingDone_Params', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec, 'printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.printing.mojom.PrintRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.printing.mojom.PrintRenderFrameRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.printing.mojom.PrintRenderFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.printing.mojom.PrintRenderFrameRemoteCallHandler(this.proxy);
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
  printWithParams(arg_params) {
    return this.$.printWithParams(arg_params);
  }
  printForSystemDialog() {
    return this.$.printForSystemDialog();
  }
  initiatePrintPreview(arg_print_renderer, arg_has_selection) {
    return this.$.initiatePrintPreview(arg_print_renderer, arg_has_selection);
  }
  setPrintPreviewUI(arg_preview) {
    return this.$.setPrintPreviewUI(arg_preview);
  }
  printPreview(arg_settings) {
    return this.$.printPreview(arg_settings);
  }
  onPrintPreviewDialogClosed() {
    return this.$.onPrintPreviewDialogClosed();
  }
  printFrameContent(arg_params) {
    return this.$.printFrameContent(arg_params);
  }
  connectToPdfRenderer() {
    return this.$.connectToPdfRenderer();
  }
  printingDone(arg_success) {
    return this.$.printingDone(arg_success);
  }
  printNodeUnderContextMenu() {
    return this.$.printNodeUnderContextMenu();
  }
};

mojo.internal.bindings.printing.mojom.PrintRenderFrameRemoteCallHandler = class {
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
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec,
      null,
      [],
      false);
  }

  printWithParams(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  printForSystemDialog() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec,
      null,
      [],
      false);
  }

  initiatePrintPreview(arg_print_renderer, arg_has_selection) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec,
      null,
      [arg_print_renderer, arg_has_selection],
      false);
  }

  setPrintPreviewUI(arg_preview) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec,
      null,
      [arg_preview],
      false);
  }

  printPreview(arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec,
      null,
      [arg_settings],
      false);
  }

  onPrintPreviewDialogClosed() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec,
      null,
      [],
      false);
  }

  printFrameContent(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec,
      [arg_params],
      false);
  }

  connectToPdfRenderer() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  printingDone(arg_success) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec,
      null,
      [arg_success],
      false);
  }

  printNodeUnderContextMenu() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.printing.mojom.PrintRenderFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.printing.mojom.PrintRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintRenderFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.printing.mojom.PrintRenderFrameReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintRequestedPages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printRequestedPages');
          const result = this.impl.printRequestedPages();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintWithParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printWithParams');
          const result = this.impl.printWithParams(params.arg_params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintForSystemDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printForSystemDialog');
          const result = this.impl.printForSystemDialog();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_InitiatePrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initiatePrintPreview');
          const result = this.impl.initiatePrintPreview(params.arg_print_renderer, params.arg_has_selection);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_SetPrintPreviewUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPrintPreviewUI');
          const result = this.impl.setPrintPreviewUI(params.arg_preview);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printPreview');
          const result = this.impl.printPreview(params.arg_settings);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_OnPrintPreviewDialogClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintPreviewDialogClosed');
          const result = this.impl.onPrintPreviewDialogClosed();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printFrameContent');
          const result = this.impl.printFrameContent(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintFrameContent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrintFrameContent FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_ConnectToPdfRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToPdfRenderer');
          const result = this.impl.connectToPdfRenderer();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintingDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printingDone');
          const result = this.impl.printingDone(params.arg_success);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintRenderFrame_PrintNodeUnderContextMenu_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.printing.mojom.PrintRenderFrameReceiver = mojo.internal.bindings.printing.mojom.PrintRenderFrameReceiver;

mojo.internal.bindings.printing.mojom.PrintRenderFramePtr = mojo.internal.bindings.printing.mojom.PrintRenderFrameRemote;
mojo.internal.bindings.printing.mojom.PrintRenderFrameRequest = mojo.internal.bindings.printing.mojom.PrintRenderFramePendingReceiver;


// Interface: PrintManagerHost
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec, 'printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_Params', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_number_pages', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec, 'printing.mojom.PrintManagerHost_GetDefaultPrintSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParams', [
      mojo.internal.StructField('arg_default_settings', 0, 0, mojo.internal.bindings.printing.mojom.PrintParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec, 'printing.mojom.PrintManagerHost_DidShowPrintDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec, 'printing.mojom.PrintManagerHost_DidPrintDocument_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.DidPrintDocumentParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParams', [
      mojo.internal.StructField('arg_completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec, 'printing.mojom.PrintManagerHost_IsPrintingEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParams', [
      mojo.internal.StructField('arg_printing_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec, 'printing.mojom.PrintManagerHost_ScriptedPrint_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.ScriptedPrintParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParams', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.printing.mojom.PrintPagesParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec, 'printing.mojom.PrintManagerHost_PrintingFailed_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.printing.mojom.PrintFailureReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec, 'printing.mojom.PrintManagerHost_UpdatePrintSettings_Params', [
      mojo.internal.StructField('arg_job_settings', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParams', [
      mojo.internal.StructField('arg_current_settings', 0, 0, mojo.internal.bindings.printing.mojom.PrintPagesParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec, 'printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec, 'printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_Params', [
      mojo.internal.StructField('arg_is_modifiable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec, 'printing.mojom.PrintManagerHost_RequestPrintPreview_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.printing.mojom.RequestPrintPreviewParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec, 'printing.mojom.PrintManagerHost_CheckForCancel_Params', [
      mojo.internal.StructField('arg_preview_ui_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec, 'printing.mojom.PrintManagerHost_CheckForCancel_ResponseParams', [
      mojo.internal.StructField('arg_cancel', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec, 'printing.mojom.PrintManagerHost_SetAccessibilityTree_Params', [
      mojo.internal.StructField('arg_accessibility_tree', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.printing.mojom.PrintManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.printing.mojom.PrintManagerHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.printing.mojom.PrintManagerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.printing.mojom.PrintManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didGetPrintedPagesCount(arg_cookie, arg_number_pages) {
    return this.$.didGetPrintedPagesCount(arg_cookie, arg_number_pages);
  }
  getDefaultPrintSettings() {
    return this.$.getDefaultPrintSettings();
  }
  didShowPrintDialog() {
    return this.$.didShowPrintDialog();
  }
  didPrintDocument(arg_params) {
    return this.$.didPrintDocument(arg_params);
  }
  isPrintingEnabled() {
    return this.$.isPrintingEnabled();
  }
  scriptedPrint(arg_params) {
    return this.$.scriptedPrint(arg_params);
  }
  printingFailed(arg_cookie, arg_reason) {
    return this.$.printingFailed(arg_cookie, arg_reason);
  }
  updatePrintSettings(arg_job_settings) {
    return this.$.updatePrintSettings(arg_job_settings);
  }
  setupScriptedPrintPreview() {
    return this.$.setupScriptedPrintPreview();
  }
  showScriptedPrintPreview(arg_is_modifiable) {
    return this.$.showScriptedPrintPreview(arg_is_modifiable);
  }
  requestPrintPreview(arg_params) {
    return this.$.requestPrintPreview(arg_params);
  }
  checkForCancel(arg_preview_ui_id, arg_request_id) {
    return this.$.checkForCancel(arg_preview_ui_id, arg_request_id);
  }
  setAccessibilityTree(arg_cookie, arg_accessibility_tree) {
    return this.$.setAccessibilityTree(arg_cookie, arg_accessibility_tree);
  }
};

mojo.internal.bindings.printing.mojom.PrintManagerHostRemoteCallHandler = class {
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

  didGetPrintedPagesCount(arg_cookie, arg_number_pages) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec,
      null,
      [arg_cookie, arg_number_pages],
      false);
  }

  getDefaultPrintSettings() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec,
      [],
      false);
  }

  didShowPrintDialog() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec,
      null,
      [],
      false);
  }

  didPrintDocument(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec,
      [arg_params],
      false);
  }

  isPrintingEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec,
      [],
      false);
  }

  scriptedPrint(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec,
      [arg_params],
      false);
  }

  printingFailed(arg_cookie, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec,
      null,
      [arg_cookie, arg_reason],
      false);
  }

  updatePrintSettings(arg_job_settings) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec,
      [arg_job_settings],
      false);
  }

  setupScriptedPrintPreview() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec,
      [],
      false);
  }

  showScriptedPrintPreview(arg_is_modifiable) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec,
      null,
      [arg_is_modifiable],
      false);
  }

  requestPrintPreview(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  checkForCancel(arg_preview_ui_id, arg_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec,
      mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec,
      [arg_preview_ui_id, arg_request_id],
      false);
  }

  setAccessibilityTree(arg_cookie, arg_accessibility_tree) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec,
      null,
      [arg_cookie, arg_accessibility_tree],
      false);
  }

};

mojo.internal.bindings.printing.mojom.PrintManagerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.printing.mojom.PrintManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintManagerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.printing.mojom.PrintManagerHostReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_DidGetPrintedPagesCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didGetPrintedPagesCount');
          const result = this.impl.didGetPrintedPagesCount(params.arg_cookie, params.arg_number_pages);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDefaultPrintSettings');
          const result = this.impl.getDefaultPrintSettings();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintManagerHost_GetDefaultPrintSettings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDefaultPrintSettings FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_DidShowPrintDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didShowPrintDialog');
          const result = this.impl.didShowPrintDialog();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didPrintDocument');
          const result = this.impl.didPrintDocument(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintManagerHost_DidPrintDocument_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DidPrintDocument FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isPrintingEnabled');
          const result = this.impl.isPrintingEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintManagerHost_IsPrintingEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsPrintingEnabled FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scriptedPrint');
          const result = this.impl.scriptedPrint(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintManagerHost_ScriptedPrint_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ScriptedPrint FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_PrintingFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printingFailed');
          const result = this.impl.printingFailed(params.arg_cookie, params.arg_reason);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePrintSettings');
          const result = this.impl.updatePrintSettings(params.arg_job_settings);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintManagerHost_UpdatePrintSettings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdatePrintSettings FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setupScriptedPrintPreview');
          const result = this.impl.setupScriptedPrintPreview();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintManagerHost_SetupScriptedPrintPreview_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetupScriptedPrintPreview FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_ShowScriptedPrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showScriptedPrintPreview');
          const result = this.impl.showScriptedPrintPreview(params.arg_is_modifiable);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_RequestPrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPrintPreview');
          const result = this.impl.requestPrintPreview(params.arg_params);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkForCancel');
          const result = this.impl.checkForCancel(params.arg_preview_ui_id, params.arg_request_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.printing.mojom.PrintManagerHost_CheckForCancel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CheckForCancel FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.printing.mojom.PrintManagerHost_SetAccessibilityTree_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAccessibilityTree');
          const result = this.impl.setAccessibilityTree(params.arg_cookie, params.arg_accessibility_tree);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.printing.mojom.PrintManagerHostReceiver = mojo.internal.bindings.printing.mojom.PrintManagerHostReceiver;

mojo.internal.bindings.printing.mojom.PrintManagerHostPtr = mojo.internal.bindings.printing.mojom.PrintManagerHostRemote;
mojo.internal.bindings.printing.mojom.PrintManagerHostRequest = mojo.internal.bindings.printing.mojom.PrintManagerHostPendingReceiver;

