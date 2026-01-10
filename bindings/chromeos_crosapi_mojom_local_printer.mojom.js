// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/local_printer.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: Reason
crosapi.mojom.mojom.Reason = {
  kDeviceError: 0,
  kDoorOpen: 1,
  kLowOnInk: 2,
  kLowOnPaper: 3,
  kNoError: 4,
  kOutOfInk: 5,
  kOutOfPaper: 6,
  kOutputAreaAlmostFull: 7,
  kOutputFull: 8,
  kPaperJam: 9,
  kPaused: 10,
  kPrinterQueueFull: 11,
  kPrinterUnreachable: 12,
  kStopped: 13,
  kTrayMissing: 14,
};
crosapi.mojom.mojom.ReasonSpec = { $: mojo.internal.Enum() };

// Enum: Severity
crosapi.mojom.mojom.Severity = {
  kReport: 0,
  kWarning: 1,
  kError: 2,
};
crosapi.mojom.mojom.SeveritySpec = { $: mojo.internal.Enum() };

// Enum: DuplexType
crosapi.mojom.mojom.DuplexType = {
  kOneSided: 0,
  kShortEdge: 1,
  kLongEdge: 2,
};
crosapi.mojom.mojom.DuplexTypeSpec = { $: mojo.internal.Enum() };

// Enum: QualityType
crosapi.mojom.mojom.QualityType = {
  kDraft: 0,
  kNormal: 1,
  kHigh: 2,
};
crosapi.mojom.mojom.QualityTypeSpec = { $: mojo.internal.Enum() };

// Enum: DuplexMode
crosapi.mojom.mojom.DuplexMode = {
  kLongEdge: 0,
  kShortEdge: 1,
};
crosapi.mojom.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };

// Enum: Source
crosapi.mojom.mojom.Source = {
  kPrintPreview: 0,
  kArc: 1,
  kExtension: 2,
  kPrintPreviewIncognito: 3,
};
crosapi.mojom.mojom.SourceSpec = { $: mojo.internal.Enum() };

// Enum: ServerPrintersFetchingMode
crosapi.mojom.mojom.ServerPrintersFetchingMode = {
  kSingleServerOnly: 0,
};
crosapi.mojom.mojom.ServerPrintersFetchingModeSpec = { $: mojo.internal.Enum() };

// Enum: BackgroundGraphicsModeRestriction
crosapi.mojom.mojom.BackgroundGraphicsModeRestriction = {
  kEnabled: 0,
  kDisabled: 1,
};
crosapi.mojom.mojom.BackgroundGraphicsModeRestrictionSpec = { $: mojo.internal.Enum() };

// Enum: OptionalBool
crosapi.mojom.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};
crosapi.mojom.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };

// Enum: PrintJobStatus
crosapi.mojom.mojom.PrintJobStatus = {
  kCreated: 0,
  kStarted: 1,
  kUpdated: 2,
  kSuspended: 3,
  kResumed: 4,
  kDone: 5,
  kError: 6,
  kCancelled: 7,
};
crosapi.mojom.mojom.PrintJobStatusSpec = { $: mojo.internal.Enum() };

// Enum: PrintJobSource
crosapi.mojom.mojom.PrintJobSource = {
  kExtension: 0,
};
crosapi.mojom.mojom.PrintJobSourceSpec = { $: mojo.internal.Enum() };

// Union: GetOAuthAccessTokenResult
crosapi.mojom.mojom.GetOAuthAccessTokenResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.GetOAuthAccessTokenResult', {
      'none': {
        'ordinal': 0,
        'type': crosapi.mojom.OAuthNotNeededSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.OAuthErrorSpec,
      }},
      'token': {
        'ordinal': 2,
        'type': crosapi.mojom.OAuthAccessTokenSpec,
      }},
    })
};

// Struct: LocalDestinationInfo
crosapi.mojom.mojom.LocalDestinationInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalDestinationInfo',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'configured_via_policy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uri', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
        { name: 'printer_status', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.PrinterStatusSpec, nullable: true, minVersion: 4 },
        { name: 'managed_print_options', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.ManagedPrintOptionsSpec, nullable: true, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 3, packedSize: 48}, {version: 4, packedSize: 56}, {version: 5, packedSize: 64}]
    }
  }
};

// Struct: PrinterStatus
crosapi.mojom.mojom.PrinterStatusSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrinterStatus',
      packedSize: 32,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'status_reasons', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.StatusReasonSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: StatusReason
crosapi.mojom.mojom.StatusReasonSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StatusReason',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ReasonSpec, nullable: false, minVersion: 0 },
        { name: 'severity', packedOffset: 12, packedBitOffset: 0, type: crosapi.mojom.SeveritySpec, nullable: false, minVersion: 0 },
        { name: 'kUnknownReason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Size
crosapi.mojom.mojom.SizeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Size',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Dpi
crosapi.mojom.mojom.DpiSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Dpi',
      packedSize: 16,
      fields: [
        { name: 'horizontal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'vertical', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SizeOption
crosapi.mojom.mojom.SizeOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SizeOption',
      packedSize: 24,
      fields: [
        { name: 'default_value', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.SizeSpec, nullable: true, minVersion: 0 },
        { name: 'allowed_values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.SizeSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StringOption
crosapi.mojom.mojom.StringOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StringOption',
      packedSize: 24,
      fields: [
        { name: 'default_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'allowed_values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DuplexOption
crosapi.mojom.mojom.DuplexOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DuplexOption',
      packedSize: 24,
      fields: [
        { name: 'default_value', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.DuplexTypeSpec, nullable: true, minVersion: 0 },
        { name: 'allowed_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.DuplexTypeSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BoolOption
crosapi.mojom.mojom.BoolOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.BoolOption',
      packedSize: 24,
      fields: [
        { name: 'default_value_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'default_value_$value', originalFieldName: 'default_value' } },
        { name: 'default_value_$value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'default_value_$flag', originalFieldName: 'default_value' } },
        { name: 'allowed_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DpiOption
crosapi.mojom.mojom.DpiOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DpiOption',
      packedSize: 24,
      fields: [
        { name: 'default_value', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DpiSpec, nullable: true, minVersion: 0 },
        { name: 'allowed_values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.DpiSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: QualityOption
crosapi.mojom.mojom.QualityOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.QualityOption',
      packedSize: 24,
      fields: [
        { name: 'default_value', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.QualityTypeSpec, nullable: true, minVersion: 0 },
        { name: 'allowed_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.QualityTypeSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ManagedPrintOptions
crosapi.mojom.mojom.ManagedPrintOptionsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ManagedPrintOptions',
      packedSize: 64,
      fields: [
        { name: 'media_size', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.SizeOptionSpec, nullable: false, minVersion: 0 },
        { name: 'media_type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.StringOptionSpec, nullable: false, minVersion: 0 },
        { name: 'duplex', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.DuplexOptionSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.BoolOptionSpec, nullable: false, minVersion: 0 },
        { name: 'dpi', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.DpiOptionSpec, nullable: false, minVersion: 0 },
        { name: 'quality', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.QualityOptionSpec, nullable: false, minVersion: 0 },
        { name: 'print_as_image', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.BoolOptionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: PrintJob
crosapi.mojom.mojom.PrintJobSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintJob',
      packedSize: 80,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'job_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'page_count', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 56, packedBitOffset: 0, type: crosapi.mojom.SourceSpec, nullable: false, minVersion: 0 },
        { name: 'source_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'color_mode', packedOffset: 60, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false, minVersion: 0 },
        { name: 'duplex_mode', packedOffset: 64, packedBitOffset: 0, type: crosapi.mojom.DuplexModeSpec, nullable: false, minVersion: 0 },
        { name: 'media_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'media_vendor_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'copies', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'kSimplex', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: PrintServersConfig
crosapi.mojom.mojom.PrintServersConfigSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintServersConfig',
      packedSize: 32,
      fields: [
        { name: 'fetching_mode', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.ServerPrintersFetchingModeSpec, nullable: false, minVersion: 0 },
        { name: 'print_servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.PrintServerSpec, false), nullable: false, minVersion: 0 },
        { name: 'kStandard', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PrintServer
crosapi.mojom.mojom.PrintServerSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintServer',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CapabilitiesResponse
crosapi.mojom.mojom.CapabilitiesResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CapabilitiesResponse',
      packedSize: 56,
      fields: [
        { name: 'basic_info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.LocalDestinationInfoSpec, nullable: false, minVersion: 0 },
        { name: 'has_secure_protocol', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'capabilities', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.PrinterSemanticCapsAndDefaultsSpec, nullable: true, minVersion: 0 },
        { name: 'allowed_color_modes_deprecated', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'allowed_duplex_modes_deprecated', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'allowed_pin_modes_deprecated_version_0', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'default_color_mode_deprecated', packedOffset: 28, packedBitOffset: 0, type: printing.mojom.ColorModeRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'default_duplex_mode_deprecated', packedOffset: 32, packedBitOffset: 0, type: printing.mojom.DuplexModeRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'default_pin_mode_deprecated', packedOffset: 36, packedBitOffset: 0, type: printing.mojom.PinModeRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'allowed_pin_modes_deprecated_version_1', packedOffset: 44, packedBitOffset: 0, type: printing.mojom.PinModeRestrictionSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 56}]
    }
  }
};

// Struct: Policies
crosapi.mojom.mojom.PoliciesSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Policies',
      packedSize: 80,
      fields: [
        { name: 'print_header_footer_allowed', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.OptionalBoolSpec, nullable: false, minVersion: 0 },
        { name: 'print_header_footer_default', packedOffset: 20, packedBitOffset: 0, type: crosapi.mojom.OptionalBoolSpec, nullable: false, minVersion: 0 },
        { name: 'allowed_background_graphics_modes', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.BackgroundGraphicsModeRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'background_graphics_default', packedOffset: 28, packedBitOffset: 0, type: crosapi.mojom.BackgroundGraphicsModeRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'paper_size_default', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
        { name: 'max_sheets_allowed', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_sheets_allowed_has_value', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allowed_color_modes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'allowed_duplex_modes', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'allowed_pin_modes', packedOffset: 48, packedBitOffset: 0, type: printing.mojom.PinModeRestrictionSpec, nullable: false, minVersion: 1 },
        { name: 'default_color_mode', packedOffset: 52, packedBitOffset: 0, type: printing.mojom.ColorModeRestrictionSpec, nullable: false, minVersion: 1 },
        { name: 'default_duplex_mode', packedOffset: 56, packedBitOffset: 0, type: printing.mojom.DuplexModeRestrictionSpec, nullable: false, minVersion: 1 },
        { name: 'default_pin_mode', packedOffset: 60, packedBitOffset: 0, type: printing.mojom.PinModeRestrictionSpec, nullable: false, minVersion: 1 },
        { name: 'default_print_pdf_as_image', packedOffset: 64, packedBitOffset: 0, type: crosapi.mojom.OptionalBoolSpec, nullable: false, minVersion: 2 },
        { name: 'kUnset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 72}, {version: 2, packedSize: 80}]
    }
  }
};

// Struct: PrintJobUpdate
crosapi.mojom.mojom.PrintJobUpdateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintJobUpdate',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PrintJobStatusSpec, nullable: false, minVersion: 0 },
        { name: 'pages_printed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OAuthNotNeeded
crosapi.mojom.mojom.OAuthNotNeededSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OAuthNotNeeded',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: OAuthError
crosapi.mojom.mojom.OAuthErrorSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OAuthError',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: OAuthAccessToken
crosapi.mojom.mojom.OAuthAccessTokenSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OAuthAccessToken',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PrintServerObserver
crosapi.mojom.mojom.PrintServerObserver = {};

crosapi.mojom.mojom.PrintServerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.PrintServerObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintServerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.PrintServerObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.PrintServerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.PrintServerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrintServersChanged(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec,
      null,
      [config]);
  }

  onServerPrintersChanged() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.mojom.PrintServerObserver.getRemote = function() {
  let remote = new crosapi.mojom.mojom.PrintServerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintServerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnPrintServersChanged
crosapi.mojom.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintServerObserver.OnPrintServersChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PrintServersConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnServerPrintersChanged
crosapi.mojom.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintServerObserver.OnServerPrintersChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.PrintServerObserverPtr = crosapi.mojom.mojom.PrintServerObserverRemote;
crosapi.mojom.mojom.PrintServerObserverRequest = crosapi.mojom.mojom.PrintServerObserverPendingReceiver;


// Interface: PrintJobObserver
crosapi.mojom.mojom.PrintJobObserver = {};

crosapi.mojom.mojom.PrintJobObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.PrintJobObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintJobObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.PrintJobObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.PrintJobObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.PrintJobObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrintJobUpdateDeprecated(printer_id, job_id, status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec,
      null,
      [printer_id, job_id, status]);
  }

  onPrintJobUpdate(printer_id, job_id, update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [printer_id, job_id, update]);
  }

};

crosapi.mojom.mojom.PrintJobObserver.getRemote = function() {
  let remote = new crosapi.mojom.mojom.PrintJobObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintJobObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnPrintJobUpdateDeprecated
crosapi.mojom.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintJobObserver.OnPrintJobUpdateDeprecated_Params',
      packedSize: 24,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'job_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 12, packedBitOffset: 0, type: crosapi.mojom.PrintJobStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnPrintJobUpdate
crosapi.mojom.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintJobObserver.OnPrintJobUpdate_Params',
      packedSize: 32,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'job_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'update', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.PrintJobUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.PrintJobObserverPtr = crosapi.mojom.mojom.PrintJobObserverRemote;
crosapi.mojom.mojom.PrintJobObserverRequest = crosapi.mojom.mojom.PrintJobObserverPendingReceiver;


// Interface: LocalPrintersObserver
crosapi.mojom.mojom.LocalPrintersObserver = {};

crosapi.mojom.mojom.LocalPrintersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.LocalPrintersObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrintersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.LocalPrintersObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.LocalPrintersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.LocalPrintersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLocalPrintersUpdated(printers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec,
      null,
      [printers]);
  }

};

crosapi.mojom.mojom.LocalPrintersObserver.getRemote = function() {
  let remote = new crosapi.mojom.mojom.LocalPrintersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrintersObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnLocalPrintersUpdated
crosapi.mojom.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrintersObserver.OnLocalPrintersUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'printers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.LocalPrintersObserverPtr = crosapi.mojom.mojom.LocalPrintersObserverRemote;
crosapi.mojom.mojom.LocalPrintersObserverRequest = crosapi.mojom.mojom.LocalPrintersObserverPendingReceiver;


// Interface: LocalPrinter
crosapi.mojom.mojom.LocalPrinter = {};

crosapi.mojom.mojom.LocalPrinterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.LocalPrinterRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrinter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.LocalPrinterPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.LocalPrinterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.LocalPrinterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrinters() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetPrinters_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec,
      []);
  }

  getCapability(printer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetCapability_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetCapability_ResponseParamsSpec,
      [printer_id]);
  }

  getEulaUrl(printer_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetEulaUrl_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec,
      [printer_id]);
  }

  getStatus(printer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetStatus_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetStatus_ResponseParamsSpec,
      [printer_id]);
  }

  showSystemPrintSettings() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec,
      null,
      []);
  }

  createPrintJob(job) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_CreatePrintJob_ParamsSpec,
      null,
      [job]);
  }

  cancelPrintJob(printer_id, job_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_CancelPrintJob_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec,
      [printer_id, job_id]);
  }

  getPrintServersConfig() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec,
      []);
  }

  choosePrintServers(print_server_ids) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec,
      null,
      [print_server_ids]);
  }

  addPrintServerObserver(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec,
      null,
      [observer]);
  }

  getPolicies() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetPolicies_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec,
      []);
  }

  getUsernamePerPolicy() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec,
      []);
  }

  getPrinterTypeDenyList() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec,
      []);
  }

  addPrintJobObserver(observer, source) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec,
      null,
      [observer, source]);
  }

  getOAuthAccessToken(printer_id) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec,
      [printer_id]);
  }

  getIppClientInfo(printer_id) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec,
      [printer_id]);
  }

  addLocalPrintersObserver(observer) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec,
      crosapi.mojom.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec,
      [observer]);
  }

};

crosapi.mojom.mojom.LocalPrinter.getRemote = function() {
  let remote = new crosapi.mojom.mojom.LocalPrinterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrinter',
    'context');
  return remote.$;
};

// ParamsSpec for GetPrinters
crosapi.mojom.mojom.LocalPrinter_GetPrinters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPrinters_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPrinters_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'printers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCapability
crosapi.mojom.mojom.LocalPrinter_GetCapability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetCapability_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetCapability_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetCapability_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.CapabilitiesResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetEulaUrl
crosapi.mojom.mojom.LocalPrinter_GetEulaUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetEulaUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetEulaUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStatus
crosapi.mojom.mojom.LocalPrinter_GetStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PrinterStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowSystemPrintSettings
crosapi.mojom.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.ShowSystemPrintSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreatePrintJob
crosapi.mojom.mojom.LocalPrinter_CreatePrintJob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.CreatePrintJob_Params',
      packedSize: 16,
      fields: [
        { name: 'job', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PrintJobSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelPrintJob
crosapi.mojom.mojom.LocalPrinter_CancelPrintJob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.CancelPrintJob_Params',
      packedSize: 24,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'job_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.CancelPrintJob_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'attempted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPrintServersConfig
crosapi.mojom.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPrintServersConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPrintServersConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PrintServersConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ChoosePrintServers
crosapi.mojom.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.ChoosePrintServers_Params',
      packedSize: 16,
      fields: [
        { name: 'print_server_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddPrintServerObserver
crosapi.mojom.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.AddPrintServerObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.PrintServerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPolicies
crosapi.mojom.mojom.LocalPrinter_GetPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPolicies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPolicies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PoliciesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUsernamePerPolicy
crosapi.mojom.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetUsernamePerPolicy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetUsernamePerPolicy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'username', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPrinterTypeDenyList
crosapi.mojom.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPrinterTypeDenyList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetPrinterTypeDenyList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'deny_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.PrinterTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddPrintJobObserver
crosapi.mojom.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.AddPrintJobObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.PrintJobObserverRemote), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.PrintJobSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetOAuthAccessToken
crosapi.mojom.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetOAuthAccessToken_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetOAuthAccessToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'oauth_result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GetOAuthAccessTokenResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetIppClientInfo
crosapi.mojom.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetIppClientInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.GetIppClientInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.IppClientInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddLocalPrintersObserver
crosapi.mojom.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.AddLocalPrintersObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.LocalPrintersObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalPrinter.AddLocalPrintersObserver_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'printers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.LocalPrinterPtr = crosapi.mojom.mojom.LocalPrinterRemote;
crosapi.mojom.mojom.LocalPrinterRequest = crosapi.mojom.mojom.LocalPrinterPendingReceiver;

