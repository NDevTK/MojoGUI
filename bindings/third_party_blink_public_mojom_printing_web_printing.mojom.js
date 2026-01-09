// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/printing/web_printing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebPrintingMultipleDocumentHandling
blink.mojom.WebPrintingMultipleDocumentHandling = {
  kSeparateDocumentsCollatedCopies: 0,
  kSeparateDocumentsUncollatedCopies: 1,
};

// Enum: WebPrintingSides
blink.mojom.WebPrintingSides = {
  kOneSided: 0,
  kTwoSidedLongEdge: 1,
  kTwoSidedShortEdge: 2,
};

// Enum: WebPrintQuality
blink.mojom.WebPrintQuality = {
  kDraft: 0,
  kNormal: 1,
  kHigh: 2,
};

// Enum: WebPrintColorMode
blink.mojom.WebPrintColorMode = {
  kColor: 0,
  kMonochrome: 1,
};

// Enum: WebPrintingOrientationRequested
blink.mojom.WebPrintingOrientationRequested = {
  kPortrait: 0,
  kLandscape: 1,
};

// Enum: WebPrinterState
blink.mojom.WebPrinterState = {
  kIdle: 0,
  kProcessing: 1,
  kStopped: 2,
};

// Enum: WebPrinterStateReason
blink.mojom.WebPrinterStateReason = {
  kNone: 0,
  kOther: 1,
  kConnectingToDevice: 2,
  kCoverOpen: 3,
  kDeveloperEmpty: 4,
  kDeveloperLow: 5,
  kDoorOpen: 6,
  kFuserOverTemp: 7,
  kFuserUnderTemp: 8,
  kInputTrayMissing: 9,
  kInterlockOpen: 10,
  kInterpreterResourceUnavailable: 11,
  kMarkerSupplyEmpty: 12,
  kMarkerSupplyLow: 13,
  kMarkerWasteAlmostFull: 14,
  kMarkerWasteFull: 15,
  kMediaEmpty: 16,
  kMediaJam: 17,
  kMediaLow: 18,
  kMediaNeeded: 19,
  kMovingToPaused: 20,
  kOpcLifeOver: 21,
  kOpcNearEol: 22,
  kOutputAreaAlmostFull: 23,
  kOutputAreaFull: 24,
  kOutputTrayMissing: 25,
  kPaused: 26,
  kShutdown: 27,
  kSpoolAreaFull: 28,
  kStoppedPartly: 29,
  kStopping: 30,
  kTimedOut: 31,
  kTonerEmpty: 32,
  kTonerLow: 33,
  kCupsPkiExpired: 34,
};

// Enum: WebPrintJobState
blink.mojom.WebPrintJobState = {
  kPending: 0,
  kProcessing: 1,
  kCompleted: 2,
  kCanceled: 3,
  kAborted: 4,
};

// Enum: GetPrintersError
blink.mojom.GetPrintersError = {
  kUserPermissionDenied: 0,
};

// Enum: WebPrinterFetchError
blink.mojom.WebPrinterFetchError = {
  kPrinterUnreachable: 0,
  kUserPermissionDenied: 1,
};

// Enum: WebPrintError
blink.mojom.WebPrintError = {
  kPrinterUnreachable: 0,
  kDocumentMalformed: 1,
  kPrintJobTemplateAttributesMismatch: 2,
  kUserPermissionDenied: 3,
};

// Struct: WebPrinterInfo
blink.mojom.WebPrinterInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinterInfo',
      packedSize: 16,
      fields: [
        { name: 'printer_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrintingRange
blink.mojom.WebPrintingRangeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingRange',
      packedSize: 16,
      fields: [
        { name: 'to', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrintingMediaSize
blink.mojom.WebPrintingMediaSizeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingMediaSize',
      packedSize: 16,
      fields: [
        { name: 'y_dimension', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrintingMediaCollection
blink.mojom.WebPrintingMediaCollectionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingMediaCollection',
      packedSize: 16,
      fields: [
        { name: 'media_size_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrinterAttributes
blink.mojom.WebPrinterAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinterAttributes',
      packedSize: 16,
      fields: [
        { name: 'printer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrintingMediaCollectionRequested
blink.mojom.WebPrintingMediaCollectionRequestedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingMediaCollectionRequested',
      packedSize: 16,
      fields: [
        { name: 'media_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrintJobTemplateAttributes
blink.mojom.WebPrintJobTemplateAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobTemplateAttributes',
      packedSize: 16,
      fields: [
        { name: 'sides', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrintJobUpdate
blink.mojom.WebPrintJobUpdateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobUpdate',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebPrintJobInfo
blink.mojom.WebPrintJobInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobInfo',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WebPrintJobStateObserver
blink.mojom.WebPrintJobStateObserver = {};

blink.mojom.WebPrintJobStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPrintJobStateObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrintJobStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPrintJobStateObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPrintJobStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPrintJobStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWebPrintJobUpdate(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec,
      null,
      [update]);
  }

};

blink.mojom.WebPrintJobStateObserver.getRemote = function() {
  let remote = new blink.mojom.WebPrintJobStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrintJobStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnWebPrintJobUpdate
blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobStateObserver.OnWebPrintJobUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebPrintJobStateObserverPtr = blink.mojom.WebPrintJobStateObserverRemote;
blink.mojom.WebPrintJobStateObserverRequest = blink.mojom.WebPrintJobStateObserverPendingReceiver;


// Interface: WebPrintJobController
blink.mojom.WebPrintJobController = {};

blink.mojom.WebPrintJobControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPrintJobControllerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrintJobController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPrintJobControllerPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPrintJobControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPrintJobControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPrintJobController_Cancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.WebPrintJobController.getRemote = function() {
  let remote = new blink.mojom.WebPrintJobControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrintJobController',
    'context');
  return remote.$;
};

// ParamsSpec for Cancel
blink.mojom.WebPrintJobController_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobController.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebPrintJobControllerPtr = blink.mojom.WebPrintJobControllerRemote;
blink.mojom.WebPrintJobControllerRequest = blink.mojom.WebPrintJobControllerPendingReceiver;


// Interface: WebPrinter
blink.mojom.WebPrinter = {};

blink.mojom.WebPrinterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPrinterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrinter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPrinterPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPrinterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPrinterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchAttributes() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPrinter_FetchAttributes_ParamsSpec,
      blink.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec,
      []);
  }

  print(document, attributes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebPrinter_Print_ParamsSpec,
      blink.mojom.WebPrinter_Print_ResponseParamsSpec,
      [document, attributes]);
  }

};

blink.mojom.WebPrinter.getRemote = function() {
  let remote = new blink.mojom.WebPrinterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrinter',
    'context');
  return remote.$;
};

// ParamsSpec for FetchAttributes
blink.mojom.WebPrinter_FetchAttributes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.FetchAttributes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.FetchAttributes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Print
blink.mojom.WebPrinter_Print_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.Print_Params',
      packedSize: 24,
      fields: [
        { name: 'attributes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'document', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebPrinter_Print_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.Print_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebPrinterPtr = blink.mojom.WebPrinterRemote;
blink.mojom.WebPrinterRequest = blink.mojom.WebPrinterPendingReceiver;


// Interface: WebPrintingService
blink.mojom.WebPrintingService = {};

blink.mojom.WebPrintingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPrintingServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrintingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPrintingServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPrintingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPrintingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrinters() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPrintingService_GetPrinters_ParamsSpec,
      blink.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec,
      []);
  }

};

blink.mojom.WebPrintingService.getRemote = function() {
  let remote = new blink.mojom.WebPrintingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrintingService',
    'context');
  return remote.$;
};

// ParamsSpec for GetPrinters
blink.mojom.WebPrintingService_GetPrinters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingService.GetPrinters_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingService.GetPrinters_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebPrintingServicePtr = blink.mojom.WebPrintingServiceRemote;
blink.mojom.WebPrintingServiceRequest = blink.mojom.WebPrintingServicePendingReceiver;

