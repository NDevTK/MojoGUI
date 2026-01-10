// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/local_printer.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var mojo_base = mojo_base || {};
var printing = printing || {};
var gfx = gfx || {};
var url = url || {};

crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.SeveritySpec = { $: mojo.internal.Enum() };
crosapi.mojom.DuplexTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.QualityTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.SourceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ServerPrintersFetchingModeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.BackgroundGraphicsModeRestrictionSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PrintJobStatusSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PrintJobSourceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.GetOAuthAccessTokenResultSpec = { $: {} };
crosapi.mojom.LocalDestinationInfoSpec = { $: {} };
crosapi.mojom.PrinterStatusSpec = { $: {} };
crosapi.mojom.StatusReasonSpec = { $: {} };
crosapi.mojom.SizeSpec = { $: {} };
crosapi.mojom.DpiSpec = { $: {} };
crosapi.mojom.SizeOptionSpec = { $: {} };
crosapi.mojom.StringOptionSpec = { $: {} };
crosapi.mojom.DuplexOptionSpec = { $: {} };
crosapi.mojom.BoolOptionSpec = { $: {} };
crosapi.mojom.DpiOptionSpec = { $: {} };
crosapi.mojom.QualityOptionSpec = { $: {} };
crosapi.mojom.ManagedPrintOptionsSpec = { $: {} };
crosapi.mojom.PrintJobSpec = { $: {} };
crosapi.mojom.PrintServersConfigSpec = { $: {} };
crosapi.mojom.PrintServerSpec = { $: {} };
crosapi.mojom.CapabilitiesResponseSpec = { $: {} };
crosapi.mojom.PoliciesSpec = { $: {} };
crosapi.mojom.PrintJobUpdateSpec = { $: {} };
crosapi.mojom.OAuthNotNeededSpec = { $: {} };
crosapi.mojom.OAuthErrorSpec = { $: {} };
crosapi.mojom.OAuthAccessTokenSpec = { $: {} };
crosapi.mojom.PrintServerObserver = {};
crosapi.mojom.PrintServerObserver.$interfaceName = 'crosapi.mojom.PrintServerObserver';
crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec = { $: {} };
crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec = { $: {} };
crosapi.mojom.PrintJobObserver = {};
crosapi.mojom.PrintJobObserver.$interfaceName = 'crosapi.mojom.PrintJobObserver';
crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec = { $: {} };
crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrintersObserver = {};
crosapi.mojom.LocalPrintersObserver.$interfaceName = 'crosapi.mojom.LocalPrintersObserver';
crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter = {};
crosapi.mojom.LocalPrinter.$interfaceName = 'crosapi.mojom.LocalPrinter';
crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec = { $: {} };

// Enum: Reason
crosapi.mojom.Reason = {
  kUnknownReason: 0,
  kDeviceError: 1,
  kDoorOpen: 2,
  kLowOnInk: 3,
  kLowOnPaper: 4,
  kNoError: 5,
  kOutOfInk: 6,
  kOutOfPaper: 7,
  kOutputAreaAlmostFull: 8,
  kOutputFull: 9,
  kPaperJam: 10,
  kPaused: 11,
  kPrinterQueueFull: 12,
  kPrinterUnreachable: 13,
  kStopped: 14,
  kTrayMissing: 15,
  MinVersion: 15,
};

// Enum: Severity
crosapi.mojom.Severity = {
  kUnknownSeverity: 0,
  kReport: 1,
  kWarning: 2,
  kError: 3,
};

// Enum: DuplexType
crosapi.mojom.DuplexType = {
  kUnknownDuplex: 0,
  kOneSided: 1,
  kShortEdge: 2,
  kLongEdge: 3,
};

// Enum: QualityType
crosapi.mojom.QualityType = {
  kUnknownQuality: 0,
  kDraft: 1,
  kNormal: 2,
  kHigh: 3,
};

// Enum: DuplexMode
crosapi.mojom.DuplexMode = {
  kSimplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};

// Enum: Source
crosapi.mojom.Source = {
  kUnknown: -1,
  kPrintPreview: 0,
  kArc: 1,
  kExtension: 2,
  kPrintPreviewIncognito: 3,
  MinVersion: 3,
};

// Enum: ServerPrintersFetchingMode
crosapi.mojom.ServerPrintersFetchingMode = {
  kStandard: 0,
  kSingleServerOnly: 1,
};

// Enum: BackgroundGraphicsModeRestriction
crosapi.mojom.BackgroundGraphicsModeRestriction = {
  kUnset: 0,
  kEnabled: 1,
  kDisabled: 2,
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: PrintJobStatus
crosapi.mojom.PrintJobStatus = {
  kUnknown: 0,
  kCreated: 1,
  kStarted: 2,
  kUpdated: 3,
  kSuspended: 4,
  kResumed: 5,
  kDone: 6,
  kError: 7,
  kCancelled: 8,
};

// Enum: PrintJobSource
crosapi.mojom.PrintJobSource = {
  kAny: 0,
  kExtension: 1,
  MinVersion: 1,
};

// Union: GetOAuthAccessTokenResult
mojo.internal.Union(
    crosapi.mojom.GetOAuthAccessTokenResultSpec, 'crosapi.mojom.GetOAuthAccessTokenResult', {
      'none': {
        'ordinal': 0,
        'type': crosapi.mojom.OAuthNotNeededSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.OAuthErrorSpec.$,
        'nullable': false,
      },
      'token': {
        'ordinal': 2,
        'type': crosapi.mojom.OAuthAccessTokenSpec.$,
        'nullable': false,
      },
    });

// Struct: LocalDestinationInfo
mojo.internal.Struct(
    crosapi.mojom.LocalDestinationInfoSpec, 'crosapi.mojom.LocalDestinationInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('configured_via_policy', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uri', 32, 0, mojo.internal.String, null, true, 3, undefined),
      mojo.internal.StructField('printer_status', 40, 0, crosapi.mojom.PrinterStatusSpec.$, null, true, 4, undefined),
      mojo.internal.StructField('managed_print_options', 48, 0, crosapi.mojom.ManagedPrintOptionsSpec.$, null, true, 5, undefined),
    ],
    [[0, 40], [3, 48], [4, 56], [5, 64]]);

// Struct: PrinterStatus
mojo.internal.Struct(
    crosapi.mojom.PrinterStatusSpec, 'crosapi.mojom.PrinterStatus', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_reasons', 16, 0, mojo.internal.Array(crosapi.mojom.StatusReasonSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StatusReason
mojo.internal.Struct(
    crosapi.mojom.StatusReasonSpec, 'crosapi.mojom.StatusReason', [
      mojo.internal.StructField('reason', 0, 0, crosapi.mojom.ReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('severity', 8, 0, crosapi.mojom.SeveritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kUnknownReason', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Size
mojo.internal.Struct(
    crosapi.mojom.SizeSpec, 'crosapi.mojom.Size', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Dpi
mojo.internal.Struct(
    crosapi.mojom.DpiSpec, 'crosapi.mojom.Dpi', [
      mojo.internal.StructField('horizontal', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SizeOption
mojo.internal.Struct(
    crosapi.mojom.SizeOptionSpec, 'crosapi.mojom.SizeOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.SizeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StringOption
mojo.internal.Struct(
    crosapi.mojom.StringOptionSpec, 'crosapi.mojom.StringOption', [
      mojo.internal.StructField('default_value', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DuplexOption
mojo.internal.Struct(
    crosapi.mojom.DuplexOptionSpec, 'crosapi.mojom.DuplexOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.DuplexTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.DuplexTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BoolOption
mojo.internal.Struct(
    crosapi.mojom.BoolOptionSpec, 'crosapi.mojom.BoolOption', [
      mojo.internal.StructField('allowed_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
      mojo.internal.StructField('default_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'default_value_$value', originalFieldName: 'default_value' }),
      mojo.internal.StructField('default_value_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'default_value_$flag', originalFieldName: 'default_value' }),
    ],
    [[0, 24]]);

// Struct: DpiOption
mojo.internal.Struct(
    crosapi.mojom.DpiOptionSpec, 'crosapi.mojom.DpiOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.DpiSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.DpiSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: QualityOption
mojo.internal.Struct(
    crosapi.mojom.QualityOptionSpec, 'crosapi.mojom.QualityOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.QualityTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.QualityTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedPrintOptions
mojo.internal.Struct(
    crosapi.mojom.ManagedPrintOptionsSpec, 'crosapi.mojom.ManagedPrintOptions', [
      mojo.internal.StructField('media_size', 0, 0, crosapi.mojom.SizeOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_type', 8, 0, crosapi.mojom.StringOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duplex', 16, 0, crosapi.mojom.DuplexOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 24, 0, crosapi.mojom.BoolOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 32, 0, crosapi.mojom.DpiOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quality', 40, 0, crosapi.mojom.QualityOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('print_as_image', 48, 0, crosapi.mojom.BoolOptionSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PrintJob
mojo.internal.Struct(
    crosapi.mojom.PrintJobSpec, 'crosapi.mojom.PrintJob', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, crosapi.mojom.SourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('color_mode', 32, 0, printing.mojom.ColorModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duplex_mode', 40, 0, crosapi.mojom.DuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_size', 48, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_vendor_id', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('kSimplex', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('page_count', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('copies', 80, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: PrintServersConfig
mojo.internal.Struct(
    crosapi.mojom.PrintServersConfigSpec, 'crosapi.mojom.PrintServersConfig', [
      mojo.internal.StructField('fetching_mode', 0, 0, crosapi.mojom.ServerPrintersFetchingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('print_servers', 8, 0, mojo.internal.Array(crosapi.mojom.PrintServerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('kStandard', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrintServer
mojo.internal.Struct(
    crosapi.mojom.PrintServerSpec, 'crosapi.mojom.PrintServer', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CapabilitiesResponse
mojo.internal.Struct(
    crosapi.mojom.CapabilitiesResponseSpec, 'crosapi.mojom.CapabilitiesResponse', [
      mojo.internal.StructField('basic_info', 0, 0, crosapi.mojom.LocalDestinationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capabilities', 8, 0, printing.mojom.PrinterSemanticCapsAndDefaultsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('default_color_mode_deprecated', 16, 0, printing.mojom.ColorModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_duplex_mode_deprecated', 24, 0, printing.mojom.DuplexModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_pin_mode_deprecated', 32, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_color_modes_deprecated', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('allowed_duplex_modes_deprecated', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('allowed_pin_modes_deprecated_version_0', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_secure_protocol', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allowed_pin_modes_deprecated_version_1', 56, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
    ],
    [[0, 64], [1, 72]]);

// Struct: Policies
mojo.internal.Struct(
    crosapi.mojom.PoliciesSpec, 'crosapi.mojom.Policies', [
      mojo.internal.StructField('print_header_footer_allowed', 0, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('print_header_footer_default', 8, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_background_graphics_modes', 16, 0, crosapi.mojom.BackgroundGraphicsModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_graphics_default', 24, 0, crosapi.mojom.BackgroundGraphicsModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('paper_size_default', 32, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('kUnset', 40, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('max_sheets_allowed', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_sheets_allowed_has_value', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allowed_pin_modes', 56, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('default_color_mode', 64, 0, printing.mojom.ColorModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('default_duplex_mode', 72, 0, printing.mojom.DuplexModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('default_pin_mode', 80, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('allowed_color_modes', 88, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('allowed_duplex_modes', 92, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('default_print_pdf_as_image', 96, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 2, undefined),
    ],
    [[0, 64], [1, 104], [2, 112]]);

// Struct: PrintJobUpdate
mojo.internal.Struct(
    crosapi.mojom.PrintJobUpdateSpec, 'crosapi.mojom.PrintJobUpdate', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.PrintJobStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pages_printed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OAuthNotNeeded
mojo.internal.Struct(
    crosapi.mojom.OAuthNotNeededSpec, 'crosapi.mojom.OAuthNotNeeded', [
    ],
    [[0, 8]]);

// Struct: OAuthError
mojo.internal.Struct(
    crosapi.mojom.OAuthErrorSpec, 'crosapi.mojom.OAuthError', [
    ],
    [[0, 8]]);

// Struct: OAuthAccessToken
mojo.internal.Struct(
    crosapi.mojom.OAuthAccessTokenSpec, 'crosapi.mojom.OAuthAccessToken', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PrintServerObserver
mojo.internal.Struct(
    crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec, 'crosapi.mojom.PrintServerObserver_OnPrintServersChanged_Params', [
      mojo.internal.StructField('config', 0, 0, crosapi.mojom.PrintServersConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec, 'crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.PrintServerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.PrintServerObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintServerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.PrintServerObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.PrintServerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.PrintServerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrintServersChanged(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec,
      null,
      [config],
      false);
  }

  onServerPrintersChanged() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.PrintServerObserver.getRemote = function() {
  let remote = new crosapi.mojom.PrintServerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintServerObserver',
    'context');
  return remote.$;
};

crosapi.mojom.PrintServerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPrintServersChanged(params.config);
          break;
        }
        case 1: {
          const params = crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onServerPrintersChanged();
          break;
        }
      }
    }});
  }
};

crosapi.mojom.PrintServerObserverReceiver = crosapi.mojom.PrintServerObserverReceiver;

crosapi.mojom.PrintServerObserverPtr = crosapi.mojom.PrintServerObserverRemote;
crosapi.mojom.PrintServerObserverRequest = crosapi.mojom.PrintServerObserverPendingReceiver;


// Interface: PrintJobObserver
mojo.internal.Struct(
    crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec, 'crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, crosapi.mojom.PrintJobStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec, 'crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update', 8, 0, crosapi.mojom.PrintJobUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

crosapi.mojom.PrintJobObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.PrintJobObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintJobObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.PrintJobObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.PrintJobObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.PrintJobObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrintJobUpdateDeprecated(printer_id, job_id, status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec,
      null,
      [printer_id, job_id, status],
      false);
  }

  onPrintJobUpdate(printer_id, job_id, update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [printer_id, job_id, update],
      false);
  }

};

crosapi.mojom.PrintJobObserver.getRemote = function() {
  let remote = new crosapi.mojom.PrintJobObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintJobObserver',
    'context');
  return remote.$;
};

crosapi.mojom.PrintJobObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPrintJobUpdateDeprecated(params.printer_id, params.job_id, params.status);
          break;
        }
        case 1: {
          const params = crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPrintJobUpdate(params.printer_id, params.job_id, params.update);
          break;
        }
      }
    }});
  }
};

crosapi.mojom.PrintJobObserverReceiver = crosapi.mojom.PrintJobObserverReceiver;

crosapi.mojom.PrintJobObserverPtr = crosapi.mojom.PrintJobObserverRemote;
crosapi.mojom.PrintJobObserverRequest = crosapi.mojom.PrintJobObserverPendingReceiver;


// Interface: LocalPrintersObserver
mojo.internal.Struct(
    crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec, 'crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_Params', [
      mojo.internal.StructField('printers', 0, 0, mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.LocalPrintersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LocalPrintersObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrintersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LocalPrintersObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LocalPrintersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.LocalPrintersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLocalPrintersUpdated(printers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec,
      null,
      [printers],
      false);
  }

};

crosapi.mojom.LocalPrintersObserver.getRemote = function() {
  let remote = new crosapi.mojom.LocalPrintersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrintersObserver',
    'context');
  return remote.$;
};

crosapi.mojom.LocalPrintersObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLocalPrintersUpdated(params.printers);
          break;
        }
      }
    }});
  }
};

crosapi.mojom.LocalPrintersObserverReceiver = crosapi.mojom.LocalPrintersObserverReceiver;

crosapi.mojom.LocalPrintersObserverPtr = crosapi.mojom.LocalPrintersObserverRemote;
crosapi.mojom.LocalPrintersObserverRequest = crosapi.mojom.LocalPrintersObserverPendingReceiver;


// Interface: LocalPrinter
mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinters_ResponseParams', [
      mojo.internal.StructField('printers', 0, 0, mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetCapability_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetCapability_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, crosapi.mojom.CapabilitiesResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetEulaUrl_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetStatus_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.PrinterStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec, 'crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec, 'crosapi.mojom.LocalPrinter_CreatePrintJob_Params', [
      mojo.internal.StructField('job', 0, 0, crosapi.mojom.PrintJobSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec, 'crosapi.mojom.LocalPrinter_CancelPrintJob_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParams', [
      mojo.internal.StructField('attempted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrintServersConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, crosapi.mojom.PrintServersConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec, 'crosapi.mojom.LocalPrinter_ChoosePrintServers_Params', [
      mojo.internal.StructField('print_server_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintServerObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.PrintServerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPolicies_ResponseParams', [
      mojo.internal.StructField('policies', 0, 0, crosapi.mojom.PoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParams', [
      mojo.internal.StructField('username', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParams', [
      mojo.internal.StructField('deny_list', 0, 0, mojo.internal.Array(printing.mojom.PrinterTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintJobObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.PrintJobObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, crosapi.mojom.PrintJobSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetOAuthAccessToken_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParams', [
      mojo.internal.StructField('oauth_result', 0, 0, crosapi.mojom.GetOAuthAccessTokenResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetIppClientInfo_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParams', [
      mojo.internal.StructField('settings', 0, 0, mojo.internal.Array(printing.mojom.IppClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.LocalPrintersObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParams', [
      mojo.internal.StructField('printers', 0, 0, mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.LocalPrinterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LocalPrinterRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrinter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LocalPrinterPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LocalPrinterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.LocalPrinterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrinters() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec,
      [],
      false);
  }

  getCapability(printer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec,
      [printer_id],
      false);
  }

  getEulaUrl(printer_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec,
      [printer_id],
      false);
  }

  getStatus(printer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec,
      [printer_id],
      false);
  }

  showSystemPrintSettings() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec,
      crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec,
      [],
      false);
  }

  createPrintJob(job) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec,
      crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec,
      [job],
      false);
  }

  cancelPrintJob(printer_id, job_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec,
      crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec,
      [printer_id, job_id],
      false);
  }

  getPrintServersConfig() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec,
      [],
      false);
  }

  choosePrintServers(print_server_ids) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec,
      crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec,
      [print_server_ids],
      false);
  }

  addPrintServerObserver(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec,
      crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  getPolicies() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec,
      [],
      false);
  }

  getUsernamePerPolicy() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getPrinterTypeDenyList() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec,
      [],
      false);
  }

  addPrintJobObserver(observer, source) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec,
      crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec,
      [observer, source],
      false);
  }

  getOAuthAccessToken(printer_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec,
      [printer_id],
      false);
  }

  getIppClientInfo(printer_id) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec,
      [printer_id],
      false);
  }

  addLocalPrintersObserver(observer) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec,
      crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec,
      [observer],
      false);
  }

};

crosapi.mojom.LocalPrinter.getRemote = function() {
  let remote = new crosapi.mojom.LocalPrinterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrinter',
    'context');
  return remote.$;
};

crosapi.mojom.LocalPrinterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPrinters();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCapability(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getEulaUrl(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStatus(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showSystemPrintSettings();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPrintJob(params.job);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelPrintJob(params.printer_id, params.job_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPrintServersConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec.$.decode(message.payload);
          const result = this.impl.choosePrintServers(params.print_server_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addPrintServerObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPolicies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUsernamePerPolicy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPrinterTypeDenyList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addPrintJobObserver(params.observer, params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getOAuthAccessToken(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getIppClientInfo(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addLocalPrintersObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

crosapi.mojom.LocalPrinterReceiver = crosapi.mojom.LocalPrinterReceiver;

crosapi.mojom.LocalPrinterPtr = crosapi.mojom.LocalPrinterRemote;
crosapi.mojom.LocalPrinterRequest = crosapi.mojom.LocalPrinterPendingReceiver;

