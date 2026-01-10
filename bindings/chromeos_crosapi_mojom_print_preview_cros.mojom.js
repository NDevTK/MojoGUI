// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/print_preview_cros.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var chromeos = chromeos || {};
var components = components || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

crosapi.mojom.ScalingTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.MarginsCustomSpec = { $: {} };
crosapi.mojom.MediaSizeSpec = { $: {} };
crosapi.mojom.PrintSettingsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosDelegate = {};
crosapi.mojom.PrintPreviewCrosDelegate.$interfaceName = 'crosapi.mojom.PrintPreviewCrosDelegate';
crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosClient = {};
crosapi.mojom.PrintPreviewCrosClient.$interfaceName = 'crosapi.mojom.PrintPreviewCrosClient';
crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec = { $: {} };
crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec = { $: {} };

// Enum: ScalingType
crosapi.mojom.ScalingType = {
  kDefault: 0,
  kFitToPage: 1,
  kFitToPaper: 2,
  kCustom: 3,
};

// Struct: MarginsCustom
mojo.internal.Struct(
    crosapi.mojom.MarginsCustomSpec, 'crosapi.mojom.MarginsCustom', [
      mojo.internal.StructField('margin_right', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('margin_left', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('margin_top', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('margin_bottom', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaSize
mojo.internal.Struct(
    crosapi.mojom.MediaSizeSpec, 'crosapi.mojom.MediaSize', [
      mojo.internal.StructField('height_microns', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('width_microns', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('imageable_area_bottom_microns', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('imageable_area_left_microns', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('imageable_area_right_microns', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('imageable_area_top_microns', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 24, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('custom_display_name', 32, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('is_default_$flag', 40, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' }),
      mojo.internal.StructField('is_default_$value', 40, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' }),
      mojo.internal.StructField('name', 48, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PrintSettings
mojo.internal.Struct(
    crosapi.mojom.PrintSettingsSpec, 'crosapi.mojom.PrintSettings', [
      mojo.internal.StructField('preview_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_first_request', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('printer_type', 12, 0, printing.mojom.PrinterTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('margin_type', 16, 0, printing.mojom.MarginTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('scaling_type', 20, 0, crosapi.mojom.ScalingTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('collate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('copies', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('color', 32, 0, printing.mojom.ColorModelSpec, null, false, 0, undefined),
      mojo.internal.StructField('duplex', 36, 0, printing.mojom.DuplexModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('landscape', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_name', 48, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('scale_factor', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rasterize_pdf', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('dpi_horizontal', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('dpi_vertical', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('margins_custom', 80, 0, crosapi.mojom.MarginsCustomSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_range', 88, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('header_footer_enabled', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('title', 104, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('url', 112, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('media_size', 120, 0, crosapi.mojom.MediaSizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('should_print_backgrounds', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_print_selection_only', 128, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('advanced_settings', 136, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ValueSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('rasterize_pdf_dpi_$flag', 144, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'rasterize_pdf_dpi_$value', originalFieldName: 'rasterize_pdf_dpi' }),
      mojo.internal.StructField('rasterize_pdf_dpi_$value', 148, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'rasterize_pdf_dpi_$flag', originalFieldName: 'rasterize_pdf_dpi' }),
      mojo.internal.StructField('borderless_$flag', 152, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'borderless_$value', originalFieldName: 'borderless' }),
      mojo.internal.StructField('borderless_$value', 152, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'borderless_$flag', originalFieldName: 'borderless' }),
      mojo.internal.StructField('media_type', 160, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('preview_modifiable_$flag', 168, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'preview_modifiable_$value', originalFieldName: 'preview_modifiable' }),
      mojo.internal.StructField('preview_modifiable_$value', 168, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'preview_modifiable_$flag', originalFieldName: 'preview_modifiable' }),
      mojo.internal.StructField('send_user_info_$flag', 168, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_user_info_$value', originalFieldName: 'send_user_info' }),
      mojo.internal.StructField('send_user_info_$value', 168, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'send_user_info_$flag', originalFieldName: 'send_user_info' }),
      mojo.internal.StructField('user_name', 176, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('chromeos_access_oauth_token', 184, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('pin_value', 192, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('ipp_client_info', 200, 0, mojo.internal.Array(printing.mojom.IppClientInfoSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('printer_manually_selected_$flag', 208, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'printer_manually_selected_$value', originalFieldName: 'printer_manually_selected' }),
      mojo.internal.StructField('printer_manually_selected_$value', 208, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'printer_manually_selected_$flag', originalFieldName: 'printer_manually_selected' }),
      mojo.internal.StructField('printer_status_reason', 216, 0, StatusReason.ReasonSpec, null, true, 0, undefined),
      mojo.internal.StructField('capabilities', 224, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('open_pdf_in_preview_$flag', 232, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'open_pdf_in_preview_$value', originalFieldName: 'open_pdf_in_preview' }),
      mojo.internal.StructField('open_pdf_in_preview_$value', 232, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'open_pdf_in_preview_$flag', originalFieldName: 'open_pdf_in_preview' }),
      mojo.internal.StructField('dpi_default_$flag', 232, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'dpi_default_$value', originalFieldName: 'dpi_default' }),
      mojo.internal.StructField('dpi_default_$value', 232, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'dpi_default_$flag', originalFieldName: 'dpi_default' }),
      mojo.internal.StructField('page_count_$flag', 232, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'page_count_$value', originalFieldName: 'page_count' }),
      mojo.internal.StructField('page_count_$value', 236, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'page_count_$flag', originalFieldName: 'page_count' }),
      mojo.internal.StructField('show_system_dialog_$flag', 240, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'show_system_dialog_$value', originalFieldName: 'show_system_dialog' }),
      mojo.internal.StructField('show_system_dialog_$value', 240, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'show_system_dialog_$flag', originalFieldName: 'show_system_dialog' }),
    ],
    [[0, 256]]);

// Interface: PrintPreviewCrosDelegate
mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, printing.mojom.RequestPrintPreviewParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.PrintPreviewCrosDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.PrintPreviewCrosDelegateRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintPreviewCrosDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.PrintPreviewCrosDelegatePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.PrintPreviewCrosDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.PrintPreviewCrosDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPrintPreview(token, params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec,
      crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec,
      [token, params],
      false);
  }

  printPreviewDone(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec,
      crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec,
      [token],
      false);
  }

};

crosapi.mojom.PrintPreviewCrosDelegate.getRemote = function() {
  let remote = new crosapi.mojom.PrintPreviewCrosDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintPreviewCrosDelegate',
    'context');
  return remote.$;
};

crosapi.mojom.PrintPreviewCrosDelegatePtr = crosapi.mojom.PrintPreviewCrosDelegateRemote;
crosapi.mojom.PrintPreviewCrosDelegateRequest = crosapi.mojom.PrintPreviewCrosDelegatePendingReceiver;


// Interface: PrintPreviewCrosClient
mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, crosapi.mojom.PrintSettingsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec, 'crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.PrintPreviewCrosClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.PrintPreviewCrosClientRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintPreviewCrosClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.PrintPreviewCrosClientPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.PrintPreviewCrosClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.PrintPreviewCrosClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generatePrintPreview(token, settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec,
      crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec,
      [token, settings],
      false);
  }

  handleDialogClosed(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec,
      crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec,
      [token],
      false);
  }

};

crosapi.mojom.PrintPreviewCrosClient.getRemote = function() {
  let remote = new crosapi.mojom.PrintPreviewCrosClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintPreviewCrosClient',
    'context');
  return remote.$;
};

crosapi.mojom.PrintPreviewCrosClientPtr = crosapi.mojom.PrintPreviewCrosClientRemote;
crosapi.mojom.PrintPreviewCrosClientRequest = crosapi.mojom.PrintPreviewCrosClientPendingReceiver;

