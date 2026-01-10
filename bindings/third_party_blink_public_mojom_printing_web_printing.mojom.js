// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/printing/web_printing.mojom
// Module: blink.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.WebPrintingMultipleDocumentHandlingSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrintingSidesSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrintQualitySpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrintColorModeSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrintingOrientationRequestedSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrinterStateSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrinterStateReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrintJobStateSpec = { $: mojo.internal.Enum() };
blink.mojom.GetPrintersErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrinterFetchErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrintErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPrintingMediaSizeDimensionSpec = { $: {} };
blink.mojom.GetPrintersResultSpec = { $: {} };
blink.mojom.WebPrinterFetchResultSpec = { $: {} };
blink.mojom.WebPrintResultSpec = { $: {} };
blink.mojom.WebPrinterInfoSpec = { $: {} };
blink.mojom.WebPrintingRangeSpec = { $: {} };
blink.mojom.WebPrintingMediaSizeSpec = { $: {} };
blink.mojom.WebPrintingMediaCollectionSpec = { $: {} };
blink.mojom.WebPrinterAttributesSpec = { $: {} };
blink.mojom.WebPrintingMediaCollectionRequestedSpec = { $: {} };
blink.mojom.WebPrintJobTemplateAttributesSpec = { $: {} };
blink.mojom.WebPrintJobUpdateSpec = { $: {} };
blink.mojom.WebPrintJobInfoSpec = { $: {} };
blink.mojom.WebPrintJobStateObserver = {};
blink.mojom.WebPrintJobStateObserver.$interfaceName = 'blink.mojom.WebPrintJobStateObserver';
blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec = { $: {} };
blink.mojom.WebPrintJobController = {};
blink.mojom.WebPrintJobController.$interfaceName = 'blink.mojom.WebPrintJobController';
blink.mojom.WebPrintJobController_Cancel_ParamsSpec = { $: {} };
blink.mojom.WebPrinter = {};
blink.mojom.WebPrinter.$interfaceName = 'blink.mojom.WebPrinter';
blink.mojom.WebPrinter_FetchAttributes_ParamsSpec = { $: {} };
blink.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec = { $: {} };
blink.mojom.WebPrinter_Print_ParamsSpec = { $: {} };
blink.mojom.WebPrinter_Print_ResponseParamsSpec = { $: {} };
blink.mojom.WebPrintingService = {};
blink.mojom.WebPrintingService.$interfaceName = 'blink.mojom.WebPrintingService';
blink.mojom.WebPrintingService_GetPrinters_ParamsSpec = { $: {} };
blink.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec = { $: {} };

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

// Union: WebPrintingMediaSizeDimension
mojo.internal.Union(
    blink.mojom.WebPrintingMediaSizeDimensionSpec, 'blink.mojom.WebPrintingMediaSizeDimension', {
      'range': {
        'ordinal': 0,
        'type': blink.mojom.WebPrintingRangeSpec.$,
        'nullable': false,
      },
      'value': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
    });

// Union: GetPrintersResult
mojo.internal.Union(
    blink.mojom.GetPrintersResultSpec, 'blink.mojom.GetPrintersResult', {
      'printers': {
        'ordinal': 0,
        'type': mojo.internal.Array(blink.mojom.WebPrinterInfoSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': blink.mojom.GetPrintersErrorSpec.$,
        'nullable': false,
      },
    });

// Union: WebPrinterFetchResult
mojo.internal.Union(
    blink.mojom.WebPrinterFetchResultSpec, 'blink.mojom.WebPrinterFetchResult', {
      'printer_attributes': {
        'ordinal': 0,
        'type': blink.mojom.WebPrinterAttributesSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': blink.mojom.WebPrinterFetchErrorSpec.$,
        'nullable': false,
      },
    });

// Union: WebPrintResult
mojo.internal.Union(
    blink.mojom.WebPrintResultSpec, 'blink.mojom.WebPrintResult', {
      'print_job_info': {
        'ordinal': 0,
        'type': blink.mojom.WebPrintJobInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': blink.mojom.WebPrintErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: WebPrinterInfo
mojo.internal.Struct(
    blink.mojom.WebPrinterInfoSpec, 'blink.mojom.WebPrinterInfo', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_remote', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.WebPrinterSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebPrintingRange
mojo.internal.Struct(
    blink.mojom.WebPrintingRangeSpec, 'blink.mojom.WebPrintingRange', [
      mojo.internal.StructField('from', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('to', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebPrintingMediaSize
mojo.internal.Struct(
    blink.mojom.WebPrintingMediaSizeSpec, 'blink.mojom.WebPrintingMediaSize', [
      mojo.internal.StructField('x_dimension', 0, 0, blink.mojom.WebPrintingMediaSizeDimensionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('y_dimension', 8, 0, blink.mojom.WebPrintingMediaSizeDimensionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebPrintingMediaCollection
mojo.internal.Struct(
    blink.mojom.WebPrintingMediaCollectionSpec, 'blink.mojom.WebPrintingMediaCollection', [
      mojo.internal.StructField('media_size', 0, 0, blink.mojom.WebPrintingMediaSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_size_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebPrinterAttributes
mojo.internal.Struct(
    blink.mojom.WebPrinterAttributesSpec, 'blink.mojom.WebPrinterAttributes', [
      mojo.internal.StructField('copies_supported', 0, 0, blink.mojom.WebPrintingRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_col_default', 8, 0, blink.mojom.WebPrintingMediaCollectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_col_database', 16, 0, mojo.internal.Array(blink.mojom.WebPrintingMediaCollectionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('media_source_default', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('media_source_supported', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('multiple_document_handling_default', 40, 0, blink.mojom.WebPrintingMultipleDocumentHandlingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('multiple_document_handling_supported', 48, 0, mojo.internal.Array(blink.mojom.WebPrintingMultipleDocumentHandlingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('orientation_requested_default', 56, 0, blink.mojom.WebPrintingOrientationRequestedSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('orientation_requested_supported', 64, 0, mojo.internal.Array(blink.mojom.WebPrintingOrientationRequestedSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('printer_resolution_default', 72, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_resolution_supported', 80, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('print_color_mode_default', 88, 0, blink.mojom.WebPrintColorModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('print_color_mode_supported', 96, 0, mojo.internal.Array(blink.mojom.WebPrintColorModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('print_quality_default', 104, 0, blink.mojom.WebPrintQualitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('print_quality_supported', 112, 0, mojo.internal.Array(blink.mojom.WebPrintQualitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('printer_state', 120, 0, blink.mojom.WebPrinterStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_state_message', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_state_reasons', 136, 0, mojo.internal.Array(blink.mojom.WebPrinterStateReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sides_default', 144, 0, blink.mojom.WebPrintingSidesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sides_supported', 152, 0, mojo.internal.Array(blink.mojom.WebPrintingSidesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('printer_id', 160, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('copies_default', 168, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 184]]);

// Struct: WebPrintingMediaCollectionRequested
mojo.internal.Struct(
    blink.mojom.WebPrintingMediaCollectionRequestedSpec, 'blink.mojom.WebPrintingMediaCollectionRequested', [
      mojo.internal.StructField('media_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebPrintJobTemplateAttributes
mojo.internal.Struct(
    blink.mojom.WebPrintJobTemplateAttributesSpec, 'blink.mojom.WebPrintJobTemplateAttributes', [
      mojo.internal.StructField('job_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_col', 8, 0, blink.mojom.WebPrintingMediaCollectionRequestedSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('media_source', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('multiple_document_handling', 24, 0, blink.mojom.WebPrintingMultipleDocumentHandlingSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('orientation_requested', 32, 0, blink.mojom.WebPrintingOrientationRequestedSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('printer_resolution', 40, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('print_color_mode', 48, 0, blink.mojom.WebPrintColorModeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('print_quality', 56, 0, blink.mojom.WebPrintQualitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sides', 64, 0, blink.mojom.WebPrintingSidesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('copies', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WebPrintJobUpdate
mojo.internal.Struct(
    blink.mojom.WebPrintJobUpdateSpec, 'blink.mojom.WebPrintJobUpdate', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.WebPrintJobStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pages_printed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebPrintJobInfo
mojo.internal.Struct(
    blink.mojom.WebPrintJobInfoSpec, 'blink.mojom.WebPrintJobInfo', [
      mojo.internal.StructField('job_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.WebPrintJobStateObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('controller', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.WebPrintJobControllerSpec), null, false, 0, undefined),
      mojo.internal.StructField('job_pages', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: WebPrintJobStateObserver
mojo.internal.Struct(
    blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec, 'blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_Params', [
      mojo.internal.StructField('update', 0, 0, blink.mojom.WebPrintJobUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
    this.ordinals = window.mojoScrambler.getOrdinals('WebPrintJobStateObserver', [
      { explicit: null },
    ]);
  }

  onWebPrintJobUpdate(update) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec,
      null,
      [update],
      false);
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

blink.mojom.WebPrintJobStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebPrintJobStateObserver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnWebPrintJobUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebPrintJobUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebPrintJobStateObserver_OnWebPrintJobUpdate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onWebPrintJobUpdate');
          const result = this.impl.onWebPrintJobUpdate(params.update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WebPrintJobStateObserverReceiver = blink.mojom.WebPrintJobStateObserverReceiver;

blink.mojom.WebPrintJobStateObserverPtr = blink.mojom.WebPrintJobStateObserverRemote;
blink.mojom.WebPrintJobStateObserverRequest = blink.mojom.WebPrintJobStateObserverPendingReceiver;


// Interface: WebPrintJobController
mojo.internal.Struct(
    blink.mojom.WebPrintJobController_Cancel_ParamsSpec, 'blink.mojom.WebPrintJobController_Cancel_Params', [
    ],
    [[0, 8]]);

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
    this.ordinals = window.mojoScrambler.getOrdinals('WebPrintJobController', [
      { explicit: null },
    ]);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebPrintJobController_Cancel_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.WebPrintJobControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebPrintJobController', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebPrintJobController_Cancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebPrintJobController_Cancel_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WebPrintJobControllerReceiver = blink.mojom.WebPrintJobControllerReceiver;

blink.mojom.WebPrintJobControllerPtr = blink.mojom.WebPrintJobControllerRemote;
blink.mojom.WebPrintJobControllerRequest = blink.mojom.WebPrintJobControllerPendingReceiver;


// Interface: WebPrinter
mojo.internal.Struct(
    blink.mojom.WebPrinter_FetchAttributes_ParamsSpec, 'blink.mojom.WebPrinter_FetchAttributes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec, 'blink.mojom.WebPrinter_FetchAttributes_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebPrinterFetchResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebPrinter_Print_ParamsSpec, 'blink.mojom.WebPrinter_Print_Params', [
      mojo.internal.StructField('document', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('attributes', 8, 0, blink.mojom.WebPrintJobTemplateAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebPrinter_Print_ResponseParamsSpec, 'blink.mojom.WebPrinter_Print_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebPrintResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
    this.ordinals = window.mojoScrambler.getOrdinals('WebPrinter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  fetchAttributes() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebPrinter_FetchAttributes_ParamsSpec,
      blink.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec,
      [],
      false);
  }

  print(document, attributes) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WebPrinter_Print_ParamsSpec,
      blink.mojom.WebPrinter_Print_ResponseParamsSpec,
      [document, attributes],
      false);
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

blink.mojom.WebPrinterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebPrinter', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: FetchAttributes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebPrinter_FetchAttributes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchAttributes (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Print
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebPrinter_Print_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Print (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebPrinter_FetchAttributes_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchAttributes');
          const result = this.impl.fetchAttributes();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebPrinter_FetchAttributes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebPrinter_Print_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.print');
          const result = this.impl.print(params.document, params.attributes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebPrinter_Print_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WebPrinterReceiver = blink.mojom.WebPrinterReceiver;

blink.mojom.WebPrinterPtr = blink.mojom.WebPrinterRemote;
blink.mojom.WebPrinterRequest = blink.mojom.WebPrinterPendingReceiver;


// Interface: WebPrintingService
mojo.internal.Struct(
    blink.mojom.WebPrintingService_GetPrinters_ParamsSpec, 'blink.mojom.WebPrintingService_GetPrinters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec, 'blink.mojom.WebPrintingService_GetPrinters_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.GetPrintersResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
    this.ordinals = window.mojoScrambler.getOrdinals('WebPrintingService', [
      { explicit: null },
    ]);
  }

  getPrinters() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebPrintingService_GetPrinters_ParamsSpec,
      blink.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.WebPrintingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebPrintingService', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetPrinters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebPrintingService_GetPrinters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrinters (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebPrintingService_GetPrinters_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrinters');
          const result = this.impl.getPrinters();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebPrintingService_GetPrinters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WebPrintingServiceReceiver = blink.mojom.WebPrintingServiceReceiver;

blink.mojom.WebPrintingServicePtr = blink.mojom.WebPrintingServiceRemote;
blink.mojom.WebPrintingServiceRequest = blink.mojom.WebPrintingServicePendingReceiver;

