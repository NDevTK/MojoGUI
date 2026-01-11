// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/components/print_management/mojom/printing_manager.mojom
 // Module: chromeos.printing.printing_manager.mojom

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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.printing = mojo.internal.bindings.chromeos.printing || {};
mojo.internal.bindings.chromeos.printing.printing_manager = mojo.internal.bindings.chromeos.printing.printing_manager || {};
mojo.internal.bindings.chromeos.printing.printing_manager.mojom = mojo.internal.bindings.chromeos.printing.printing_manager.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobCompletionStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrinterErrorCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.ActivePrintJobStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.LaunchSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.CompletedPrintJobInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.ActivePrintJobInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver = {};
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver.$interfaceName = 'chromeos.printing.printing_manager.mojom.PrintJobsObserver';
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider = {};
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.$interfaceName = 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider';
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler = {};
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler.$interfaceName = 'chromeos.printing.printing_manager.mojom.PrintManagementHandler';
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec = { $: {} };

// Enum: PrintJobCompletionStatus
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobCompletionStatus = {
  kFailed: 0,
  kCanceled: 1,
  kPrinted: 2,
};

// Enum: PrinterErrorCode
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrinterErrorCode = {
  kNoError: 0,
  kPaperJam: 1,
  kOutOfPaper: 2,
  kOutOfInk: 3,
  kDoorOpen: 4,
  kPrinterUnreachable: 5,
  kTrayMissing: 6,
  kOutputFull: 7,
  kStopped: 8,
  kFilterFailed: 9,
  kUnknownError: 10,
  kClientUnauthorized: 11,
  kExpiredCertificate: 12,
};

// Enum: ActivePrintJobState
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.ActivePrintJobState = {
  kStarted: 0,
  kDocumentDone: 1,
};

// Enum: LaunchSource
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.LaunchSource = {
  kEmptyStateButton: 0,
  kHeaderButton: 1,
};

// Struct: CompletedPrintJobInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.CompletedPrintJobInfoSpec, 'chromeos.printing.printing_manager.mojom.CompletedPrintJobInfo', [
      mojo.internal.StructField('arg_completion_status', 0, 0, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobCompletionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ActivePrintJobInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.ActivePrintJobInfoSpec, 'chromeos.printing.printing_manager.mojom.ActivePrintJobInfo', [
      mojo.internal.StructField('arg_active_state', 0, 0, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.ActivePrintJobStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printed_pages', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintJobInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobInfoSpec, 'chromeos.printing.printing_manager.mojom.PrintJobInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_creation_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printer_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_printer_name', 32, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printer_uri', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printer_error_code', 48, 0, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrinterErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_completed_info', 56, 0, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.CompletedPrintJobInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_active_print_job_info', 64, 0, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.ActivePrintJobInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_number_of_pages', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: PrintJobsObserver
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_Params', [
      mojo.internal.StructField('arg_print_job', 0, 0, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintJobsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAllPrintJobsDeleted() {
    return this.$.onAllPrintJobsDeleted();
  }
  onPrintJobUpdate(arg_print_job) {
    return this.$.onPrintJobUpdate(arg_print_job);
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintJobsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAllPrintJobsDeleted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec,
      null,
      [],
      false);
  }

  onPrintJobUpdate(arg_print_job) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [arg_print_job],
      false);
  }

};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintJobsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintJobsObserver', [
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
        
        // Try Method 0: OnAllPrintJobsDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAllPrintJobsDeleted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPrintJobUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintJobUpdate (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnAllPrintJobsDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAllPrintJobsDeleted');
          const result = this.impl.onAllPrintJobsDeleted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserver_OnPrintJobUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintJobUpdate');
          const result = this.impl.onPrintJobUpdate(params.arg_print_job);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverReceiver = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverReceiver;

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverPtr = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverRemote;
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverRequest = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverPendingReceiver;


// Interface: PrintingMetadataProvider
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParams', [
      mojo.internal.StructField('arg_print_jobs', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintJobInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParams', [
      mojo.internal.StructField('arg_attempted_cancel', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParams', [
      mojo.internal.StructField('arg_is_allowed_by_policy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParams', [
      mojo.internal.StructField('arg_expiration_period_in_days', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_from_policy', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observePrintJobs(arg_observer) {
    return this.$.observePrintJobs(arg_observer);
  }
  getPrintJobs() {
    return this.$.getPrintJobs();
  }
  deleteAllPrintJobs() {
    return this.$.deleteAllPrintJobs();
  }
  cancelPrintJob(arg_id) {
    return this.$.cancelPrintJob(arg_id);
  }
  getDeletePrintJobHistoryAllowedByPolicy() {
    return this.$.getDeletePrintJobHistoryAllowedByPolicy();
  }
  getPrintJobHistoryExpirationPeriod() {
    return this.$.getPrintJobHistoryExpirationPeriod();
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintingMetadataProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  observePrintJobs(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec,
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec,
      [arg_observer],
      false);
  }

  getPrintJobs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec,
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec,
      [],
      false);
  }

  deleteAllPrintJobs() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec,
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec,
      [],
      false);
  }

  cancelPrintJob(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec,
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec,
      [arg_id],
      false);
  }

  getDeletePrintJobHistoryAllowedByPolicy() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec,
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getPrintJobHistoryExpirationPeriod() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec,
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintingMetadataProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintingMetadataProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: ObservePrintJobs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObservePrintJobs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetPrintJobs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrintJobs (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeleteAllPrintJobs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllPrintJobs (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CancelPrintJob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPrintJob (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetDeletePrintJobHistoryAllowedByPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeletePrintJobHistoryAllowedByPolicy (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetPrintJobHistoryExpirationPeriod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrintJobHistoryExpirationPeriod (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observePrintJobs');
          const result = this.impl.observePrintJobs(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_ObservePrintJobs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ObservePrintJobs FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrintJobs');
          const result = this.impl.getPrintJobs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrintJobs FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllPrintJobs');
          const result = this.impl.deleteAllPrintJobs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_DeleteAllPrintJobs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteAllPrintJobs FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPrintJob');
          const result = this.impl.cancelPrintJob(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_CancelPrintJob_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CancelPrintJob FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeletePrintJobHistoryAllowedByPolicy');
          const result = this.impl.getDeletePrintJobHistoryAllowedByPolicy();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetDeletePrintJobHistoryAllowedByPolicy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeletePrintJobHistoryAllowedByPolicy FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrintJobHistoryExpirationPeriod');
          const result = this.impl.getPrintJobHistoryExpirationPeriod();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProvider_GetPrintJobHistoryExpirationPeriod_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrintJobHistoryExpirationPeriod FAILED:', e));
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

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderReceiver = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderReceiver;

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPtr = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRemote;
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderRequest = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintingMetadataProviderPendingReceiver;


// Interface: PrintManagementHandler
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.chromeos.printing.printing_manager.mojom.LaunchSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec, 'chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_Params', [
      mojo.internal.StructField('arg_duration', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemote = class {
  static get $interfaceName() {
    return 'chromeos.printing.printing_manager.mojom.PrintManagementHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  launchPrinterSettings(arg_source) {
    return this.$.launchPrinterSettings(arg_source);
  }
  recordGetPrintJobsRequestDuration(arg_duration) {
    return this.$.recordGetPrintJobsRequestDuration(arg_duration);
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintManagementHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  launchPrinterSettings(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec,
      null,
      [arg_source],
      false);
  }

  recordGetPrintJobsRequestDuration(arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec,
      null,
      [arg_duration],
      false);
  }

};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.printing.printing_manager.mojom.PrintManagementHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintManagementHandler', [
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
        
        // Try Method 0: LaunchPrinterSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchPrinterSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RecordGetPrintJobsRequestDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordGetPrintJobsRequestDuration (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_LaunchPrinterSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchPrinterSettings');
          const result = this.impl.launchPrinterSettings(params.arg_source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandler_RecordGetPrintJobsRequestDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordGetPrintJobsRequestDuration');
          const result = this.impl.recordGetPrintJobsRequestDuration(params.arg_duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerReceiver = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerReceiver;

mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerPtr = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerRemote;
mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerRequest = mojo.internal.bindings.chromeos.printing.printing_manager.mojom.PrintManagementHandlerPendingReceiver;

