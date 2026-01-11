// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/crosapi/mojom/print_preview_cros.mojom
 // Module: crosapi.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};
mojo.internal.bindings.printing = mojo.internal.bindings.printing || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.crosapi.mojom.ScalingTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.MarginsCustomSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.MediaSizeSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintSettingsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate = {};
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateSpec = { $ : {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate.$interfaceName = 'crosapi.mojom.PrintPreviewCrosDelegate';
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient = {};
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientSpec = { $ : {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient.$interfaceName = 'crosapi.mojom.PrintPreviewCrosClient';
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec = { $: {} };

// Enum: ScalingType
mojo.internal.bindings.crosapi.mojom.ScalingType = {
  kDefault: 0,
  kFitToPage: 1,
  kFitToPaper: 2,
  kCustom: 3,
};

// Struct: MarginsCustom
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.MarginsCustomSpec, 'crosapi.mojom.MarginsCustom', [
      mojo.internal.StructField('arg_margin_right', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_left', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_top', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_bottom', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaSize
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.MediaSizeSpec, 'crosapi.mojom.MediaSize', [
      mojo.internal.StructField('arg_vendor_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_display_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_height_microns', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width_microns', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_imageable_area_bottom_microns', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_imageable_area_left_microns', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_imageable_area_right_microns', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_imageable_area_top_microns', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_default_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_default_$value', originalFieldName: 'arg_is_default' }),
      mojo.internal.StructField('arg_is_default_$value', 48, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_default_$flag', originalFieldName: 'arg_is_default' }),
    ],
    [[0, 64]]);

// Struct: PrintSettings
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintSettingsSpec, 'crosapi.mojom.PrintSettings', [
      mojo.internal.StructField('arg_printer_type', 0, 0, mojo.internal.bindings.printing.mojom.PrinterTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_margin_type', 8, 0, mojo.internal.bindings.printing.mojom.MarginTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scaling_type', 16, 0, mojo.internal.bindings.crosapi.mojom.ScalingTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 24, 0, mojo.internal.bindings.printing.mojom.ColorModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duplex', 32, 0, mojo.internal.bindings.printing.mojom.DuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 40, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_margins_custom', 48, 0, mojo.internal.bindings.crosapi.mojom.MarginsCustomSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_range', 56, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 64, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 72, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_media_size', 80, 0, mojo.internal.bindings.crosapi.mojom.MediaSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_advanced_settings', 88, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_media_type', 96, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_name', 104, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_chromeos_access_oauth_token', 112, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pin_value', 120, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ipp_client_info', 128, 0, mojo.internal.Array(mojo.internal.bindings.printing.mojom.IppClientInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_printer_status_reason', 136, 0, mojo.internal.bindings.StatusReason.ReasonSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_capabilities', 144, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_preview_id', 152, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 156, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_copies', 160, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scale_factor', 164, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pages_per_sheet', 168, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dpi_horizontal', 172, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dpi_vertical', 176, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rasterize_pdf_dpi_$value', 180, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_rasterize_pdf_dpi_$flag', originalFieldName: 'arg_rasterize_pdf_dpi' }),
      mojo.internal.StructField('arg_page_count_$value', 184, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_page_count_$flag', originalFieldName: 'arg_page_count' }),
      mojo.internal.StructField('arg_is_first_request', 188, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_collate', 188, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_landscape', 188, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_rasterize_pdf', 188, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_header_footer_enabled', 188, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_print_backgrounds', 188, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_print_selection_only', 188, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_rasterize_pdf_dpi_$flag', 188, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_rasterize_pdf_dpi_$value', originalFieldName: 'arg_rasterize_pdf_dpi' }),
      mojo.internal.StructField('arg_borderless_$flag', 189, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_borderless_$value', originalFieldName: 'arg_borderless' }),
      mojo.internal.StructField('arg_borderless_$value', 189, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_borderless_$flag', originalFieldName: 'arg_borderless' }),
      mojo.internal.StructField('arg_preview_modifiable_$flag', 189, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_preview_modifiable_$value', originalFieldName: 'arg_preview_modifiable' }),
      mojo.internal.StructField('arg_preview_modifiable_$value', 189, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_preview_modifiable_$flag', originalFieldName: 'arg_preview_modifiable' }),
      mojo.internal.StructField('arg_send_user_info_$flag', 189, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_send_user_info_$value', originalFieldName: 'arg_send_user_info' }),
      mojo.internal.StructField('arg_send_user_info_$value', 189, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_send_user_info_$flag', originalFieldName: 'arg_send_user_info' }),
      mojo.internal.StructField('arg_printer_manually_selected_$flag', 189, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_printer_manually_selected_$value', originalFieldName: 'arg_printer_manually_selected' }),
      mojo.internal.StructField('arg_printer_manually_selected_$value', 189, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_printer_manually_selected_$flag', originalFieldName: 'arg_printer_manually_selected' }),
      mojo.internal.StructField('arg_open_pdf_in_preview_$flag', 190, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_open_pdf_in_preview_$value', originalFieldName: 'arg_open_pdf_in_preview' }),
      mojo.internal.StructField('arg_open_pdf_in_preview_$value', 190, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_open_pdf_in_preview_$flag', originalFieldName: 'arg_open_pdf_in_preview' }),
      mojo.internal.StructField('arg_dpi_default_$flag', 190, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_dpi_default_$value', originalFieldName: 'arg_dpi_default' }),
      mojo.internal.StructField('arg_dpi_default_$value', 190, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_dpi_default_$flag', originalFieldName: 'arg_dpi_default' }),
      mojo.internal.StructField('arg_page_count_$flag', 190, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_page_count_$value', originalFieldName: 'arg_page_count' }),
      mojo.internal.StructField('arg_show_system_dialog_$flag', 190, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_show_system_dialog_$value', originalFieldName: 'arg_show_system_dialog' }),
      mojo.internal.StructField('arg_show_system_dialog_$value', 190, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_show_system_dialog_$flag', originalFieldName: 'arg_show_system_dialog' }),
    ],
    [[0, 200]]);

// Interface: PrintPreviewCrosDelegate
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.printing.mojom.RequestPrintPreviewParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintPreviewCrosDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegatePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestPrintPreview(arg_token, arg_params) {
    return this.$.requestPrintPreview(arg_token, arg_params);
  }
  printPreviewDone(arg_token) {
    return this.$.printPreviewDone(arg_token);
  }
};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.PrintPreviewCrosDelegate', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  requestPrintPreview(arg_token, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec,
      [arg_token, arg_params],
      false);
  }

  printPreviewDone(arg_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec,
      [arg_token],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintPreviewCrosDelegate',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.PrintPreviewCrosDelegate', [
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: RequestPrintPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPrintPreview (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PrintPreviewDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintPreviewDone (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPrintPreview');
          const result = this.impl.requestPrintPreview(params.arg_token, params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPrintPreview FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printPreviewDone');
          const result = this.impl.printPreviewDone(params.arg_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrintPreviewDone FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateReceiver = mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateReceiver;

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegatePtr = mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateRemote;
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegateRequest = mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosDelegatePendingReceiver;


// Interface: PrintPreviewCrosClient
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.bindings.crosapi.mojom.PrintSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintPreviewCrosClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  generatePrintPreview(arg_token, arg_settings) {
    return this.$.generatePrintPreview(arg_token, arg_settings);
  }
  handleDialogClosed(arg_token) {
    return this.$.handleDialogClosed(arg_token);
  }
};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.PrintPreviewCrosClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  generatePrintPreview(arg_token, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec,
      [arg_token, arg_settings],
      false);
  }

  handleDialogClosed(arg_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec,
      [arg_token],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintPreviewCrosClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.PrintPreviewCrosClient', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: GeneratePrintPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GeneratePrintPreview (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HandleDialogClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleDialogClosed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generatePrintPreview');
          const result = this.impl.generatePrintPreview(params.arg_token, params.arg_settings);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GeneratePrintPreview FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleDialogClosed');
          const result = this.impl.handleDialogClosed(params.arg_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HandleDialogClosed FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientReceiver = mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientReceiver;

mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientPtr = mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientRemote;
mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientRequest = mojo.internal.bindings.crosapi.mojom.PrintPreviewCrosClientPendingReceiver;

