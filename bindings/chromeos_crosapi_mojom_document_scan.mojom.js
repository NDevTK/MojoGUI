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

// Enum: ConnectionType
crosapi.mojom.ConnectionType = {
  kUsb: 0,
  kNetwork: 1,
};

// Enum: OptionType
crosapi.mojom.OptionType = {
  kBool: 0,
  kInt: 1,
  kFixed: 2,
  kString: 3,
  kButton: 4,
  kGroup: 5,
};

// Enum: OptionUnit
crosapi.mojom.OptionUnit = {
  kPixel: 0,
  kBit: 1,
  kMm: 2,
  kDpi: 3,
  kPercent: 4,
  kMicrosecond: 5,
};

// Enum: OptionConstraintType
crosapi.mojom.OptionConstraintType = {
  kIntRange: 0,
  kFixedRange: 1,
  kIntList: 2,
  kFixedList: 3,
  kStringList: 4,
};

// Enum: OptionConfigurability
crosapi.mojom.OptionConfigurability = {
  kNotConfigurable: 0,
  kHardwareConfigurable: 1,
};

// Struct: ScannerInfo
crosapi.mojom.ScannerInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ScannerInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnspecified', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScannerEnumFilter
crosapi.mojom.ScannerEnumFilterSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ScannerEnumFilter',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IntRange
crosapi.mojom.IntRangeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.IntRange',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FixedRange
crosapi.mojom.FixedRangeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.FixedRange',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OptionConstraint
crosapi.mojom.OptionConstraintSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OptionConstraint',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScannerOption
crosapi.mojom.ScannerOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ScannerOption',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetScannerListResponse
crosapi.mojom.GetScannerListResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GetScannerListResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OpenScannerResponse
crosapi.mojom.OpenScannerResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OpenScannerResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CloseScannerResponse
crosapi.mojom.CloseScannerResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CloseScannerResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StartScanOptions
crosapi.mojom.StartScanOptionsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StartScanOptions',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StartPreparedScanResponse
crosapi.mojom.StartPreparedScanResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StartPreparedScanResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ReadScanDataResponse
crosapi.mojom.ReadScanDataResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ReadScanDataResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OptionSetting
crosapi.mojom.OptionSettingSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OptionSetting',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OptionGroup
crosapi.mojom.OptionGroupSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OptionGroup',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SetOptionResult
crosapi.mojom.SetOptionResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SetOptionResult',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SetOptionsResponse
crosapi.mojom.SetOptionsResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SetOptionsResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetOptionGroupsResponse
crosapi.mojom.GetOptionGroupsResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GetOptionGroupsResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CancelScanResponse
crosapi.mojom.CancelScanResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CancelScanResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
crosapi.mojom.DocumentScanPtr = crosapi.mojom.DocumentScanRemote;
crosapi.mojom.DocumentScanRequest = crosapi.mojom.DocumentScanPendingReceiver;

