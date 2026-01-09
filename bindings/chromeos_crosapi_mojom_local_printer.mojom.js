// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/local_printer.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: Reason
crosapi.mojom.Reason = {
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

// Enum: Severity
crosapi.mojom.Severity = {
  kReport: 0,
  kWarning: 1,
  kError: 2,
};

// Enum: DuplexType
crosapi.mojom.DuplexType = {
  kOneSided: 0,
  kShortEdge: 1,
  kLongEdge: 2,
};

// Enum: QualityType
crosapi.mojom.QualityType = {
  kDraft: 0,
  kNormal: 1,
  kHigh: 2,
};

// Enum: DuplexMode
crosapi.mojom.DuplexMode = {
  kLongEdge: 0,
  kShortEdge: 1,
};

// Enum: Source
crosapi.mojom.Source = {
  kPrintPreview: 0,
  kArc: 1,
  kExtension: 2,
  kPrintPreviewIncognito: 3,
};

// Enum: ServerPrintersFetchingMode
crosapi.mojom.ServerPrintersFetchingMode = {
  kSingleServerOnly: 0,
};

// Enum: BackgroundGraphicsModeRestriction
crosapi.mojom.BackgroundGraphicsModeRestriction = {
  kEnabled: 0,
  kDisabled: 1,
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: PrintJobStatus
crosapi.mojom.PrintJobStatus = {
  kCreated: 0,
  kStarted: 1,
  kUpdated: 2,
  kSuspended: 3,
  kResumed: 4,
  kDone: 5,
  kError: 6,
  kCancelled: 7,
};

// Enum: PrintJobSource
crosapi.mojom.PrintJobSource = {
  kExtension: 0,
};

// Struct: LocalDestinationInfo
crosapi.mojom.LocalDestinationInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.LocalDestinationInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrinterStatus
crosapi.mojom.PrinterStatusSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrinterStatus',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StatusReason
crosapi.mojom.StatusReasonSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StatusReason',
      packedSize: 16,
      fields: [
        { name: 'kUnknownReason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Size
crosapi.mojom.SizeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Size',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Dpi
crosapi.mojom.DpiSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Dpi',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SizeOption
crosapi.mojom.SizeOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SizeOption',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StringOption
crosapi.mojom.StringOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.StringOption',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DuplexOption
crosapi.mojom.DuplexOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DuplexOption',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BoolOption
crosapi.mojom.BoolOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.BoolOption',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DpiOption
crosapi.mojom.DpiOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DpiOption',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QualityOption
crosapi.mojom.QualityOptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.QualityOption',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedPrintOptions
crosapi.mojom.ManagedPrintOptionsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ManagedPrintOptions',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrintJob
crosapi.mojom.PrintJobSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintJob',
      packedSize: 16,
      fields: [
        { name: 'kSimplex', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrintServersConfig
crosapi.mojom.PrintServersConfigSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintServersConfig',
      packedSize: 16,
      fields: [
        { name: 'kStandard', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrintServer
crosapi.mojom.PrintServerSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintServer',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CapabilitiesResponse
crosapi.mojom.CapabilitiesResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CapabilitiesResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Policies
crosapi.mojom.PoliciesSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Policies',
      packedSize: 16,
      fields: [
        { name: 'kUnset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrintJobUpdate
crosapi.mojom.PrintJobUpdateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PrintJobUpdate',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.PrintJobStatusSpec, nullable: false },
        { name: 'pages_printed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OAuthNotNeeded
crosapi.mojom.OAuthNotNeededSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OAuthNotNeeded',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OAuthError
crosapi.mojom.OAuthErrorSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OAuthError',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OAuthAccessToken
crosapi.mojom.OAuthAccessTokenSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.OAuthAccessToken',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PrintServerObserver
crosapi.mojom.PrintServerObserver = {};

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

// Legacy compatibility
crosapi.mojom.PrintServerObserverPtr = crosapi.mojom.PrintServerObserverRemote;
crosapi.mojom.PrintServerObserverRequest = crosapi.mojom.PrintServerObserverPendingReceiver;


// Interface: PrintJobObserver
crosapi.mojom.PrintJobObserver = {};

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

// Legacy compatibility
crosapi.mojom.PrintJobObserverPtr = crosapi.mojom.PrintJobObserverRemote;
crosapi.mojom.PrintJobObserverRequest = crosapi.mojom.PrintJobObserverPendingReceiver;


// Interface: LocalPrintersObserver
crosapi.mojom.LocalPrintersObserver = {};

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

// Legacy compatibility
crosapi.mojom.LocalPrintersObserverPtr = crosapi.mojom.LocalPrintersObserverRemote;
crosapi.mojom.LocalPrintersObserverRequest = crosapi.mojom.LocalPrintersObserverPendingReceiver;


// Interface: LocalPrinter
crosapi.mojom.LocalPrinter = {};

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

// Legacy compatibility
crosapi.mojom.LocalPrinterPtr = crosapi.mojom.LocalPrinterRemote;
crosapi.mojom.LocalPrinterRequest = crosapi.mojom.LocalPrinterPendingReceiver;

