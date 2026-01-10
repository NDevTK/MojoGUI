// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/print_preview_cros.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: ScalingType
crosapi.mojom.ScalingType = {
  kFitToPage: 0,
  kFitToPaper: 1,
  kCustom: 2,
};
crosapi.mojom.ScalingTypeSpec = { $: mojo.internal.Enum() };

// Struct: MarginsCustom
crosapi.mojom.MarginsCustomSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.MarginsCustom',
      packedSize: 24,
      fields: [
        { name: 'margin_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'margin_left', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'margin_top', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'margin_bottom', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediaSize
crosapi.mojom.MediaSizeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.MediaSize',
      packedSize: 64,
      fields: [
        { name: 'height_microns', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'width_microns', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'imageable_area_bottom_microns', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'imageable_area_left_microns', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'imageable_area_right_microns', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'imageable_area_top_microns', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'custom_display_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'is_default_$flag', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' } },
        { name: 'is_default_$value', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' } },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: PrintSettings
crosapi.mojom.PrintSettingsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintSettings',
      packedSize: 184,
      fields: [
        { name: 'preview_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_first_request', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'printer_type', packedOffset: 120, packedBitOffset: 0, type: printing.mojom.PrinterTypeSpec, nullable: false, minVersion: 0 },
        { name: 'margin_type', packedOffset: 124, packedBitOffset: 0, type: printing.mojom.MarginTypeSpec, nullable: false, minVersion: 0 },
        { name: 'scaling_type', packedOffset: 128, packedBitOffset: 0, type: crosapi.mojom.ScalingTypeSpec, nullable: false, minVersion: 0 },
        { name: 'collate', packedOffset: 168, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'copies', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 136, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false, minVersion: 0 },
        { name: 'duplex', packedOffset: 140, packedBitOffset: 0, type: printing.mojom.DuplexModeSpec, nullable: false, minVersion: 0 },
        { name: 'landscape', packedOffset: 168, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rasterize_pdf', packedOffset: 168, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pages_per_sheet', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'dpi_horizontal', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'dpi_vertical', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'margins_custom', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.MarginsCustomSpec, nullable: false, minVersion: 0 },
        { name: 'page_range', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'header_footer_enabled', packedOffset: 168, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'media_size', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.MediaSizeSpec, nullable: false, minVersion: 0 },
        { name: 'should_print_backgrounds', packedOffset: 168, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_print_selection_only', packedOffset: 168, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'advanced_settings', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.ValueSpec, false), nullable: true, minVersion: 0 },
        { name: 'rasterize_pdf_dpi_$flag', packedOffset: 168, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'rasterize_pdf_dpi_$value', originalFieldName: 'rasterize_pdf_dpi' } },
        { name: 'rasterize_pdf_dpi_$value', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'rasterize_pdf_dpi_$flag', originalFieldName: 'rasterize_pdf_dpi' } },
        { name: 'borderless_$flag', packedOffset: 169, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'borderless_$value', originalFieldName: 'borderless' } },
        { name: 'borderless_$value', packedOffset: 169, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'borderless_$flag', originalFieldName: 'borderless' } },
        { name: 'media_type', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'preview_modifiable_$flag', packedOffset: 169, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'preview_modifiable_$value', originalFieldName: 'preview_modifiable' } },
        { name: 'preview_modifiable_$value', packedOffset: 169, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'preview_modifiable_$flag', originalFieldName: 'preview_modifiable' } },
        { name: 'send_user_info_$flag', packedOffset: 169, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'send_user_info_$value', originalFieldName: 'send_user_info' } },
        { name: 'send_user_info_$value', packedOffset: 169, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'send_user_info_$flag', originalFieldName: 'send_user_info' } },
        { name: 'user_name', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'chromeos_access_oauth_token', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'pin_value', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'ipp_client_info', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.IppClientInfoSpec, false), nullable: true, minVersion: 0 },
        { name: 'printer_manually_selected_$flag', packedOffset: 169, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'printer_manually_selected_$value', originalFieldName: 'printer_manually_selected' } },
        { name: 'printer_manually_selected_$value', packedOffset: 169, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'printer_manually_selected_$flag', originalFieldName: 'printer_manually_selected' } },
        { name: 'printer_status_reason', packedOffset: 96, packedBitOffset: 0, type: StatusReason.ReasonSpec, nullable: true, minVersion: 0 },
        { name: 'capabilities', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'open_pdf_in_preview_$flag', packedOffset: 170, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'open_pdf_in_preview_$value', originalFieldName: 'open_pdf_in_preview' } },
        { name: 'open_pdf_in_preview_$value', packedOffset: 170, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'open_pdf_in_preview_$flag', originalFieldName: 'open_pdf_in_preview' } },
        { name: 'dpi_default_$flag', packedOffset: 170, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'dpi_default_$value', originalFieldName: 'dpi_default' } },
        { name: 'dpi_default_$value', packedOffset: 170, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'dpi_default_$flag', originalFieldName: 'dpi_default' } },
        { name: 'page_count_$flag', packedOffset: 170, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'page_count_$value', originalFieldName: 'page_count' } },
        { name: 'page_count_$value', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'page_count_$flag', originalFieldName: 'page_count' } },
        { name: 'show_system_dialog_$flag', packedOffset: 170, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'show_system_dialog_$value', originalFieldName: 'show_system_dialog' } },
        { name: 'show_system_dialog_$value', packedOffset: 170, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'show_system_dialog_$flag', originalFieldName: 'show_system_dialog' } },
      ],
      versions: [{version: 0, packedSize: 184}]
    }
  }
};

// Interface: PrintPreviewCrosDelegate
crosapi.mojom.PrintPreviewCrosDelegate = {};

crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.RequestPrintPreviewParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [token, params]);
  }

  printPreviewDone(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec,
      crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec,
      [token]);
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

// ParamsSpec for RequestPrintPreview
crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosDelegate.RequestPrintPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.RequestPrintPreviewParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.PrintPreviewCrosDelegate_RequestPrintPreview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosDelegate.RequestPrintPreview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrintPreviewDone
crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosDelegate.PrintPreviewDone_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.PrintPreviewCrosDelegate_PrintPreviewDone_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosDelegate.PrintPreviewDone_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.PrintPreviewCrosDelegatePtr = crosapi.mojom.PrintPreviewCrosDelegateRemote;
crosapi.mojom.PrintPreviewCrosDelegateRequest = crosapi.mojom.PrintPreviewCrosDelegatePendingReceiver;


// Interface: PrintPreviewCrosClient
crosapi.mojom.PrintPreviewCrosClient = {};

crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.PrintSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [token, settings]);
  }

  handleDialogClosed(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec,
      crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec,
      [token]);
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

// ParamsSpec for GeneratePrintPreview
crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosClient.GeneratePrintPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.PrintSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.PrintPreviewCrosClient_GeneratePrintPreview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosClient.GeneratePrintPreview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleDialogClosed
crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosClient.HandleDialogClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.PrintPreviewCrosClient_HandleDialogClosed_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintPreviewCrosClient.HandleDialogClosed_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.PrintPreviewCrosClientPtr = crosapi.mojom.PrintPreviewCrosClientRemote;
crosapi.mojom.PrintPreviewCrosClientRequest = crosapi.mojom.PrintPreviewCrosClientPendingReceiver;

