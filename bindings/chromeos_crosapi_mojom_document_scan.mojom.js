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

// Interface: DocumentScan
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

