// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/document_scan.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ScanFailureMode
crosapi.mojom.ScanFailureMode = {
  kUnknown: 0,
  kDeviceBusy: 1,
  kAdfJammed: 2,
  kAdfEmpty: 3,
  kFlatbedOpen: 4,
  kIoError: 5,
};
crosapi.mojom.ScanFailureModeSpec = { $: mojo.internal.Enum() };

// Enum: ScannerOperationResult
crosapi.mojom.ScannerOperationResult = {
  kSuccess: 0,
  kUnsupported: 1,
  kCancelled: 2,
  kDeviceBusy: 3,
  kInvalid: 4,
  kWrongType: 5,
  kEndOfData: 6,
  kAdfJammed: 7,
  kAdfEmpty: 8,
  kCoverOpen: 9,
  kIoError: 10,
  kAccessDenied: 11,
  kNoMemory: 12,
  kDeviceUnreachable: 13,
  kDeviceMissing: 14,
  kInternalError: 15,
};
crosapi.mojom.ScannerOperationResultSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionType
crosapi.mojom.ConnectionType = {
  kUsb: 0,
  kNetwork: 1,
};
crosapi.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: OptionType
crosapi.mojom.OptionType = {
  kBool: 0,
  kInt: 1,
  kFixed: 2,
  kString: 3,
  kButton: 4,
  kGroup: 5,
};
crosapi.mojom.OptionTypeSpec = { $: mojo.internal.Enum() };

// Enum: OptionUnit
crosapi.mojom.OptionUnit = {
  kPixel: 0,
  kBit: 1,
  kMm: 2,
  kDpi: 3,
  kPercent: 4,
  kMicrosecond: 5,
};
crosapi.mojom.OptionUnitSpec = { $: mojo.internal.Enum() };

// Enum: OptionConstraintType
crosapi.mojom.OptionConstraintType = {
  kIntRange: 0,
  kFixedRange: 1,
  kIntList: 2,
  kFixedList: 3,
  kStringList: 4,
};
crosapi.mojom.OptionConstraintTypeSpec = { $: mojo.internal.Enum() };

// Enum: OptionConfigurability
crosapi.mojom.OptionConfigurability = {
  kNotConfigurable: 0,
  kHardwareConfigurable: 1,
};
crosapi.mojom.OptionConfigurabilitySpec = { $: mojo.internal.Enum() };

// Union: OptionValue
crosapi.mojom.OptionValueSpec = { $: mojo.internal.Union(
    'crosapi.mojom.OptionValue', {
      'bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'int_value': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
      'int_list': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
      }},
      'fixed_value': {
        'ordinal': 3,
        'type': mojo.internal.Double,
      }},
      'fixed_list': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Double, false),
      }},
      'string_value': {
        'ordinal': 5,
        'type': mojo.internal.String,
      }},
    })
};

// Union: OptionConstraintRestriction
crosapi.mojom.OptionConstraintRestrictionSpec = { $: mojo.internal.Union(
    'crosapi.mojom.OptionConstraintRestriction', {
      'int_range': {
        'ordinal': 0,
        'type': crosapi.mojom.IntRangeSpec,
      }},
      'fixed_range': {
        'ordinal': 1,
        'type': crosapi.mojom.FixedRangeSpec,
      }},
      'valid_int': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
      }},
      'valid_fixed': {
        'ordinal': 3,
        'type': mojo.internal.Array(mojo.internal.Double, false),
      }},
      'valid_string': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.String, false),
      }},
    })
};

// Struct: ScannerInfo
crosapi.mojom.ScannerInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ScannerInfo',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'model', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_uuid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'connection_type', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.ConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'secure', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'image_formats', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'kUnspecified', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: ScannerEnumFilter
crosapi.mojom.ScannerEnumFilterSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ScannerEnumFilter',
      packedSize: 16,
      fields: [
        { name: 'local', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'secure', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: IntRange
crosapi.mojom.IntRangeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.IntRange',
      packedSize: 24,
      fields: [
        { name: 'min', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'quant', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FixedRange
crosapi.mojom.FixedRangeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.FixedRange',
      packedSize: 32,
      fields: [
        { name: 'min', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'max', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'quant', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: OptionConstraint
crosapi.mojom.OptionConstraintSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OptionConstraint',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.OptionConstraintTypeSpec, nullable: false, minVersion: 0 },
        { name: 'restriction', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.OptionConstraintRestrictionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ScannerOption
crosapi.mojom.ScannerOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ScannerOption',
      packedSize: 72,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.OptionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'unit', packedOffset: 28, packedBitOffset: 0, type: crosapi.mojom.OptionUnitSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.OptionValueSpec, nullable: true, minVersion: 0 },
        { name: 'constraint', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.OptionConstraintSpec, nullable: true, minVersion: 0 },
        { name: 'isDetectable', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'configurability', packedOffset: 60, packedBitOffset: 0, type: crosapi.mojom.OptionConfigurabilitySpec, nullable: false, minVersion: 0 },
        { name: 'isAutoSettable', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'isEmulated', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'isActive', packedOffset: 56, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'isAdvanced', packedOffset: 56, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'isInternal', packedOffset: 56, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: GetScannerListResponse
crosapi.mojom.GetScannerListResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GetScannerListResponse',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
        { name: 'scanners', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ScannerInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OpenScannerResponse
crosapi.mojom.OpenScannerResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OpenScannerResponse',
      packedSize: 40,
      fields: [
        { name: 'scanner_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
        { name: 'scanner_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, crosapi.mojom.ScannerOptionSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CloseScannerResponse
crosapi.mojom.CloseScannerResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CloseScannerResponse',
      packedSize: 24,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StartScanOptions
crosapi.mojom.StartScanOptionsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StartScanOptions',
      packedSize: 24,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'max_read_size_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_read_size_$value', originalFieldName: 'max_read_size' } },
        { name: 'max_read_size_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_read_size_$flag', originalFieldName: 'max_read_size' } },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
    }
  }
};

// Struct: StartPreparedScanResponse
crosapi.mojom.StartPreparedScanResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StartPreparedScanResponse',
      packedSize: 32,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
        { name: 'job_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ReadScanDataResponse
crosapi.mojom.ReadScanDataResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ReadScanDataResponse',
      packedSize: 40,
      fields: [
        { name: 'job_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int8, false), nullable: true, minVersion: 0 },
        { name: 'estimated_completion_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'estimated_completion_$value', originalFieldName: 'estimated_completion' } },
        { name: 'estimated_completion_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'estimated_completion_$flag', originalFieldName: 'estimated_completion' } },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OptionSetting
crosapi.mojom.OptionSettingSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OptionSetting',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.OptionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.OptionValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OptionGroup
crosapi.mojom.OptionGroupSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OptionGroup',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'members', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SetOptionResult
crosapi.mojom.SetOptionResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SetOptionResult',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SetOptionsResponse
crosapi.mojom.SetOptionsResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SetOptionsResponse',
      packedSize: 32,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.SetOptionResultSpec, false), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, crosapi.mojom.ScannerOptionSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GetOptionGroupsResponse
crosapi.mojom.GetOptionGroupsResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GetOptionGroupsResponse',
      packedSize: 32,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
        { name: 'groups', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.OptionGroupSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CancelScanResponse
crosapi.mojom.CancelScanResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CancelScanResponse',
      packedSize: 24,
      fields: [
        { name: 'job_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ScannerOperationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: DocumentScan
crosapi.mojom.DocumentScan = {};

crosapi.mojom.DocumentScanPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.DocumentScanRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.DocumentScan';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.DocumentScanPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.DocumentScanRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.DocumentScanRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openScanner(client_id, scanner_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec,
      crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec,
      [client_id, scanner_id]);
  }

  closeScanner(scanner_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec,
      crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec,
      [scanner_handle]);
  }

  startPreparedScan(scanner_handle, options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec,
      crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec,
      [scanner_handle, options]);
  }

  readScanData(job_handle) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec,
      crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec,
      [job_handle]);
  }

  setOptions(scanner_handle, options) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.DocumentScan_SetOptions_ParamsSpec,
      crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec,
      [scanner_handle, options]);
  }

  getOptionGroups(scanner_handle) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec,
      crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec,
      [scanner_handle]);
  }

  cancelScan(job_handle) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.DocumentScan_CancelScan_ParamsSpec,
      crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec,
      [job_handle]);
  }

};

crosapi.mojom.DocumentScan.getRemote = function() {
  let remote = new crosapi.mojom.DocumentScanRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.DocumentScan',
    'context');
  return remote.$;
};

// ParamsSpec for OpenScanner
crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.OpenScanner_Params',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scanner_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.OpenScanner_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.OpenScannerResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseScanner
crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.CloseScanner_Params',
      packedSize: 16,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.CloseScanner_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.CloseScannerResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartPreparedScan
crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.StartPreparedScan_Params',
      packedSize: 24,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.StartScanOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.StartPreparedScan_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.StartPreparedScanResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadScanData
crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.ReadScanData_Params',
      packedSize: 16,
      fields: [
        { name: 'job_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.ReadScanData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ReadScanDataResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOptions
crosapi.mojom.DocumentScan_SetOptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.SetOptions_Params',
      packedSize: 24,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.OptionSettingSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.SetOptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.SetOptionsResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionGroups
crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.GetOptionGroups_Params',
      packedSize: 16,
      fields: [
        { name: 'scanner_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.GetOptionGroups_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GetOptionGroupsResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelScan
crosapi.mojom.DocumentScan_CancelScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.CancelScan_Params',
      packedSize: 16,
      fields: [
        { name: 'job_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DocumentScan.CancelScan_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.CancelScanResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.DocumentScanPtr = crosapi.mojom.DocumentScanRemote;
crosapi.mojom.DocumentScanRequest = crosapi.mojom.DocumentScanPendingReceiver;

