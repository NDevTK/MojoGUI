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
blink.mojom.WebPrintingMultipleDocumentHandling = {
  kSeparateDocumentsCollatedCopies: 0,
  kSeparateDocumentsUncollatedCopies: 1,
};
blink.mojom.WebPrintingMultipleDocumentHandlingSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintingSides
blink.mojom.WebPrintingSides = {
  kOneSided: 0,
  kTwoSidedLongEdge: 1,
  kTwoSidedShortEdge: 2,
};
blink.mojom.WebPrintingSidesSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintQuality
blink.mojom.WebPrintQuality = {
  kDraft: 0,
  kNormal: 1,
  kHigh: 2,
};
blink.mojom.WebPrintQualitySpec = { $: mojo.internal.Enum() };

// Enum: WebPrintColorMode
blink.mojom.WebPrintColorMode = {
  kColor: 0,
  kMonochrome: 1,
};
blink.mojom.WebPrintColorModeSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintingOrientationRequested
blink.mojom.WebPrintingOrientationRequested = {
  kPortrait: 0,
  kLandscape: 1,
};
blink.mojom.WebPrintingOrientationRequestedSpec = { $: mojo.internal.Enum() };

// Enum: WebPrinterState
blink.mojom.WebPrinterState = {
  kIdle: 0,
  kProcessing: 1,
  kStopped: 2,
};
blink.mojom.WebPrinterStateSpec = { $: mojo.internal.Enum() };

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
blink.mojom.WebPrinterStateReasonSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintJobState
blink.mojom.WebPrintJobState = {
  kPending: 0,
  kProcessing: 1,
  kCompleted: 2,
  kCanceled: 3,
  kAborted: 4,
};
blink.mojom.WebPrintJobStateSpec = { $: mojo.internal.Enum() };

// Enum: GetPrintersError
blink.mojom.GetPrintersError = {
  kUserPermissionDenied: 0,
};
blink.mojom.GetPrintersErrorSpec = { $: mojo.internal.Enum() };

// Enum: WebPrinterFetchError
blink.mojom.WebPrinterFetchError = {
  kPrinterUnreachable: 0,
  kUserPermissionDenied: 1,
};
blink.mojom.WebPrinterFetchErrorSpec = { $: mojo.internal.Enum() };

// Enum: WebPrintError
blink.mojom.WebPrintError = {
  kPrinterUnreachable: 0,
  kDocumentMalformed: 1,
  kPrintJobTemplateAttributesMismatch: 2,
  kUserPermissionDenied: 3,
};
blink.mojom.WebPrintErrorSpec = { $: mojo.internal.Enum() };

// Union: WebPrintingMediaSizeDimension
blink.mojom.WebPrintingMediaSizeDimensionSpec = { $: mojo.internal.Union(
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
blink.mojom.GetPrintersResultSpec = { $: mojo.internal.Union(
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
blink.mojom.WebPrinterFetchResultSpec = { $: mojo.internal.Union(
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
blink.mojom.WebPrintResultSpec = { $: mojo.internal.Union(
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
blink.mojom.WebPrinterInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinterInfo',
      packedSize: 32,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.WebPrinterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'from', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'to', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebPrintingMediaSize
blink.mojom.WebPrintingMediaSizeSpec = {
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
blink.mojom.WebPrintingMediaCollectionSpec = {
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
blink.mojom.WebPrinterAttributesSpec = {
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
blink.mojom.WebPrintingMediaCollectionRequestedSpec = {
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
blink.mojom.WebPrintJobTemplateAttributesSpec = {
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
blink.mojom.WebPrintJobUpdateSpec = {
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
blink.mojom.WebPrintJobInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobInfo',
      packedSize: 40,
      fields: [
        { name: 'job_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'job_pages', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.WebPrintJobStateObserverRemote), nullable: false, minVersion: 0 },
        { name: 'controller', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.WebPrintJobControllerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: WebPrintJobStateObserver
blink.mojom.WebPrintJobStateObserver = {};

blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintJobUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPrintJobUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebPrintJobStateObserverPtr = blink.mojom.WebPrintJobStateObserverRemote;
blink.mojom.WebPrintJobStateObserverRequest = blink.mojom.WebPrintJobStateObserverPendingReceiver;


// Interface: WebPrintJobController
blink.mojom.WebPrintJobController = {};

blink.mojom.WebPrintJobController_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintJobController_Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebPrintJobControllerPtr = blink.mojom.WebPrintJobControllerRemote;
blink.mojom.WebPrintJobControllerRequest = blink.mojom.WebPrintJobControllerPendingReceiver;


// Interface: WebPrinter
blink.mojom.WebPrinter = {};

blink.mojom.WebPrinter_FetchAttributes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter_FetchAttributes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WebPrinter_Print_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter_Print_Params',
      packedSize: 24,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebPrintJobTemplateAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec = {
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
blink.mojom.WebPrinter_Print_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrinter.Print_Params',
      packedSize: 24,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebPrintJobTemplateAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.WebPrinter_Print_ResponseParamsSpec = {
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
blink.mojom.WebPrinterPtr = blink.mojom.WebPrinterRemote;
blink.mojom.WebPrinterRequest = blink.mojom.WebPrinterPendingReceiver;


// Interface: WebPrintingService
blink.mojom.WebPrintingService = {};

blink.mojom.WebPrintingService_GetPrinters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPrintingService_GetPrinters_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec = {
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
blink.mojom.WebPrintingServicePtr = blink.mojom.WebPrintingServiceRemote;
blink.mojom.WebPrintingServiceRequest = blink.mojom.WebPrintingServicePendingReceiver;

