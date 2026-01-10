// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/printing/web_printing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: WebPrintingMultipleDocumentHandling
blink.mojom.mojom.WebPrintingMultipleDocumentHandling = {
  kSeparateDocumentsCollatedCopies: 0,
  kSeparateDocumentsUncollatedCopies: 1,
};
blink.mojom.mojom.WebPrintingMultipleDocumentHandlingSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintingSides
blink.mojom.mojom.WebPrintingSides = {
  kOneSided: 0,
  kTwoSidedLongEdge: 1,
  kTwoSidedShortEdge: 2,
};
blink.mojom.mojom.WebPrintingSidesSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintQuality
blink.mojom.mojom.WebPrintQuality = {
  kDraft: 0,
  kNormal: 1,
  kHigh: 2,
};
blink.mojom.mojom.WebPrintQualitySpec = { $: mojo.internal.Enum() };

// Enum: WebPrintColorMode
blink.mojom.mojom.WebPrintColorMode = {
  kColor: 0,
  kMonochrome: 1,
};
blink.mojom.mojom.WebPrintColorModeSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintingOrientationRequested
blink.mojom.mojom.WebPrintingOrientationRequested = {
  kPortrait: 0,
  kLandscape: 1,
};
blink.mojom.mojom.WebPrintingOrientationRequestedSpec = { $: mojo.internal.Enum() };

// Enum: WebPrinterState
blink.mojom.mojom.WebPrinterState = {
  kIdle: 0,
  kProcessing: 1,
  kStopped: 2,
};
blink.mojom.mojom.WebPrinterStateSpec = { $: mojo.internal.Enum() };

// Enum: WebPrinterStateReason
blink.mojom.mojom.WebPrinterStateReason = {
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
blink.mojom.mojom.WebPrinterStateReasonSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintJobState
blink.mojom.mojom.WebPrintJobState = {
  kPending: 0,
  kProcessing: 1,
  kCompleted: 2,
  kCanceled: 3,
  kAborted: 4,
};
blink.mojom.mojom.WebPrintJobStateSpec = { $: mojo.internal.Enum() };

// Enum: GetPrintersError
blink.mojom.mojom.GetPrintersError = {
  kUserPermissionDenied: 0,
};
blink.mojom.mojom.GetPrintersErrorSpec = { $: mojo.internal.Enum() };

// Enum: WebPrinterFetchError
blink.mojom.mojom.WebPrinterFetchError = {
  kPrinterUnreachable: 0,
  kUserPermissionDenied: 1,
};
blink.mojom.mojom.WebPrinterFetchErrorSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintError
blink.mojom.mojom.WebPrintError = {
  kPrinterUnreachable: 0,
  kDocumentMalformed: 1,
  kPrintJobTemplateAttributesMismatch: 2,
  kUserPermissionDenied: 3,
};
blink.mojom.mojom.WebPrintErrorSpec = { $: mojo.internal.Enum() };

// Union: WebPrintingMediaSizeDimension
blink.mojom.mojom.WebPrintingMediaSizeDimensionSpec = { $: mojo.internal.Union(
    'blink.mojom.WebPrintingMediaSizeDimension', {
      'range': {
        'ordinal': 0,
        'type': blink.mojom.WebPrintingRangeSpec,
      }},
      'value': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
      }},
    })
};

// Union: GetPrintersResult
blink.mojom.mojom.GetPrintersResultSpec = { $: mojo.internal.Union(
    'blink.mojom.GetPrintersResult', {
      'printers': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.WebPrinterInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': blink.mojom.GetPrintersErrorSpec,
      }},
    })
};

// Union: WebPrinterFetchResult
blink.mojom.mojom.WebPrinterFetchResultSpec = { $: mojo.internal.Union(
    'blink.mojom.WebPrinterFetchResult', {
      'printer_attributes': {
        'ordinal': 0,
        'type': blink.mojom.WebPrinterAttributesSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': blink.mojom.WebPrinterFetchErrorSpec,
      }},
    })
};

// Union: WebPrintResult
blink.mojom.mojom.WebPrintResultSpec = { $: mojo.internal.Union(
    'blink.mojom.WebPrintResult', {
      'print_job_info': {
        'ordinal': 0,
        'type': blink.mojom.WebPrintJobInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': blink.mojom.WebPrintErrorSpec,
      }},
    })
};

// Struct: WebPrinterInfo
blink.mojom.mojom.WebPrinterInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinterInfo',
      packedSize: 32,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: WebPrintingRange
blink.mojom.mojom.WebPrintingRangeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingRange',
      packedSize: 16,
      fields: [
        { name: 'from', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'to', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebPrintingMediaSize
blink.mojom.mojom.WebPrintingMediaSizeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingMediaSize',
      packedSize: 40,
      fields: [
        { name: 'x_dimension', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintingMediaSizeDimensionSpec, nullable: false, minVersion: 0 },
        { name: 'y_dimension', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.WebPrintingMediaSizeDimensionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: WebPrintingMediaCollection
blink.mojom.mojom.WebPrintingMediaCollectionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingMediaCollection',
      packedSize: 24,
      fields: [
        { name: 'media_size', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintingMediaSizeSpec, nullable: false, minVersion: 0 },
        { name: 'media_size_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebPrinterAttributes
blink.mojom.mojom.WebPrinterAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinterAttributes',
      packedSize: 160,
      fields: [
        { name: 'copies_default', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'copies_supported', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintingRangeSpec, nullable: false, minVersion: 0 },
        { name: 'media_col_default', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebPrintingMediaCollectionSpec, nullable: false, minVersion: 0 },
        { name: 'media_col_database', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebPrintingMediaCollectionSpec, false), nullable: false, minVersion: 0 },
        { name: 'media_source_default', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'media_source_supported', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'multiple_document_handling_default', packedOffset: 124, packedBitOffset: 0, type: blink.mojom.WebPrintingMultipleDocumentHandlingSpec, nullable: false, minVersion: 0 },
        { name: 'multiple_document_handling_supported', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebPrintingMultipleDocumentHandlingSpec, false), nullable: false, minVersion: 0 },
        { name: 'orientation_requested_default', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.WebPrintingOrientationRequestedSpec, nullable: false, minVersion: 0 },
        { name: 'orientation_requested_supported', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebPrintingOrientationRequestedSpec, false), nullable: false, minVersion: 0 },
        { name: 'printer_resolution_default', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'printer_resolution_supported', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
        { name: 'print_color_mode_default', packedOffset: 132, packedBitOffset: 0, type: blink.mojom.WebPrintColorModeSpec, nullable: false, minVersion: 0 },
        { name: 'print_color_mode_supported', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebPrintColorModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'print_quality_default', packedOffset: 136, packedBitOffset: 0, type: blink.mojom.WebPrintQualitySpec, nullable: true, minVersion: 0 },
        { name: 'print_quality_supported', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebPrintQualitySpec, false), nullable: false, minVersion: 0 },
        { name: 'printer_state', packedOffset: 140, packedBitOffset: 0, type: blink.mojom.WebPrinterStateSpec, nullable: false, minVersion: 0 },
        { name: 'printer_state_message', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_state_reasons', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebPrinterStateReasonSpec, false), nullable: false, minVersion: 0 },
        { name: 'sides_default', packedOffset: 144, packedBitOffset: 0, type: blink.mojom.WebPrintingSidesSpec, nullable: true, minVersion: 0 },
        { name: 'sides_supported', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebPrintingSidesSpec, false), nullable: false, minVersion: 0 },
        { name: 'printer_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 160}]
    }
  }
};

// Struct: WebPrintingMediaCollectionRequested
blink.mojom.mojom.WebPrintingMediaCollectionRequestedSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingMediaCollectionRequested',
      packedSize: 16,
      fields: [
        { name: 'media_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebPrintJobTemplateAttributes
blink.mojom.mojom.WebPrintJobTemplateAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobTemplateAttributes',
      packedSize: 64,
      fields: [
        { name: 'job_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'copies', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'media_col', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebPrintingMediaCollectionRequestedSpec, nullable: true, minVersion: 0 },
        { name: 'media_source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'multiple_document_handling', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.WebPrintingMultipleDocumentHandlingSpec, nullable: true, minVersion: 0 },
        { name: 'orientation_requested', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.WebPrintingOrientationRequestedSpec, nullable: true, minVersion: 0 },
        { name: 'printer_resolution', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
        { name: 'print_color_mode', packedOffset: 44, packedBitOffset: 0, type: blink.mojom.WebPrintColorModeSpec, nullable: true, minVersion: 0 },
        { name: 'print_quality', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.WebPrintQualitySpec, nullable: true, minVersion: 0 },
        { name: 'sides', packedOffset: 52, packedBitOffset: 0, type: blink.mojom.WebPrintingSidesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: WebPrintJobUpdate
blink.mojom.mojom.WebPrintJobUpdateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobUpdate',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintJobStateSpec, nullable: false, minVersion: 0 },
        { name: 'pages_printed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebPrintJobInfo
blink.mojom.mojom.WebPrintJobInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobInfo',
      packedSize: 32,
      fields: [
        { name: 'job_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'job_pages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'controller', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: WebPrintJobStateObserver
blink.mojom.mojom.WebPrintJobStateObserver = {};

blink.mojom.mojom.WebPrintJobStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebPrintJobStateObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrintJobStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebPrintJobStateObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebPrintJobStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebPrintJobStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWebPrintJobUpdate(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec,
      null,
      [update]);
  }

};

blink.mojom.mojom.WebPrintJobStateObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.WebPrintJobStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrintJobStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnWebPrintJobUpdate
blink.mojom.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobStateObserver.OnWebPrintJobUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintJobUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebPrintJobStateObserverPtr = blink.mojom.mojom.WebPrintJobStateObserverRemote;
blink.mojom.mojom.WebPrintJobStateObserverRequest = blink.mojom.mojom.WebPrintJobStateObserverPendingReceiver;


// Interface: WebPrintJobController
blink.mojom.mojom.WebPrintJobController = {};

blink.mojom.mojom.WebPrintJobControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebPrintJobControllerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrintJobController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebPrintJobControllerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebPrintJobControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebPrintJobControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebPrintJobController_Cancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.WebPrintJobController.getRemote = function() {
  let remote = new blink.mojom.mojom.WebPrintJobControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrintJobController',
    'context');
  return remote.$;
};

// ParamsSpec for Cancel
blink.mojom.mojom.WebPrintJobController_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobController.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebPrintJobControllerPtr = blink.mojom.mojom.WebPrintJobControllerRemote;
blink.mojom.mojom.WebPrintJobControllerRequest = blink.mojom.mojom.WebPrintJobControllerPendingReceiver;


// Interface: WebPrinter
blink.mojom.mojom.WebPrinter = {};

blink.mojom.mojom.WebPrinterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebPrinterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrinter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebPrinterPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebPrinterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebPrinterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchAttributes() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebPrinter_FetchAttributes_ParamsSpec,
      blink.mojom.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec,
      []);
  }

  print(document, attributes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.WebPrinter_Print_ParamsSpec,
      blink.mojom.mojom.WebPrinter_Print_ResponseParamsSpec,
      [document, attributes]);
  }

};

blink.mojom.mojom.WebPrinter.getRemote = function() {
  let remote = new blink.mojom.mojom.WebPrinterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrinter',
    'context');
  return remote.$;
};

// ParamsSpec for FetchAttributes
blink.mojom.mojom.WebPrinter_FetchAttributes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.FetchAttributes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.FetchAttributes_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrinterFetchResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Print
blink.mojom.mojom.WebPrinter_Print_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.Print_Params',
      packedSize: 24,
      fields: [
        { name: 'document', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintJobTemplateAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.WebPrinter_Print_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.Print_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebPrinterPtr = blink.mojom.mojom.WebPrinterRemote;
blink.mojom.mojom.WebPrinterRequest = blink.mojom.mojom.WebPrinterPendingReceiver;


// Interface: WebPrintingService
blink.mojom.mojom.WebPrintingService = {};

blink.mojom.mojom.WebPrintingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebPrintingServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPrintingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebPrintingServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebPrintingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebPrintingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrinters() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebPrintingService_GetPrinters_ParamsSpec,
      blink.mojom.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.WebPrintingService.getRemote = function() {
  let remote = new blink.mojom.mojom.WebPrintingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPrintingService',
    'context');
  return remote.$;
};

// ParamsSpec for GetPrinters
blink.mojom.mojom.WebPrintingService_GetPrinters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingService.GetPrinters_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingService.GetPrinters_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GetPrintersResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebPrintingServicePtr = blink.mojom.mojom.WebPrintingServiceRemote;
blink.mojom.mojom.WebPrintingServiceRequest = blink.mojom.mojom.WebPrintingServicePendingReceiver;

