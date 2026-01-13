// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/downloads/downloads.mojom
 // Module: downloads.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 
 // Fallback opaque struct type for unknown external types
 mojo.internal.OpaqueStruct = mojo.internal.OpaqueStruct || {
   $: {
     structSpec: { name: 'OpaqueStruct', packedSize: 8, fields: [], versions: [{version: 0, packedSize: 8}] },
     encode: function(value, encoder, byteOffset, bitOffset, nullable) {
       encoder.encodeOffset(byteOffset, 0);
     },
     encodeNull: function(encoder, byteOffset) { },
     decode: function(decoder, byteOffset, bitOffset, nullable) {
       try {
         const offset = decoder.decodeOffset(byteOffset);
         return offset ? { _opaqueOffset: offset } : null;
       } catch (e) {
         return null;
       }
     },
     arrayElementSize: nullable => 8,
     isValidObjectKeyType: false,
   }
 };

 mojo.internal.bindings.downloads = mojo.internal.bindings.downloads || {};
mojo.internal.bindings.downloads.mojom = mojo.internal.bindings.downloads.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.downloads.mojom.DangerTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.downloads.mojom.TailoredWarningTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.downloads.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.downloads.mojom.SafeBrowsingStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.downloads.mojom.DataSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandlerFactory = {};
mojo.internal.bindings.downloads.mojom.PageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.downloads.mojom.PageHandlerFactory.$interfaceName = 'downloads.mojom.PageHandlerFactory';
mojo.internal.bindings.downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler = {};
mojo.internal.bindings.downloads.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.downloads.mojom.PageHandler.$interfaceName = 'downloads.mojom.PageHandler';
mojo.internal.bindings.downloads.mojom.PageHandler_GetDownloads_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_Drag_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_RetryDownload_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_Show_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_Pause_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_Resume_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_Remove_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_Undo_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_Cancel_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_ClearAll_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_DeepScan_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.Page = {};
mojo.internal.bindings.downloads.mojom.PageSpec = { $ : {} };
mojo.internal.bindings.downloads.mojom.Page.$interfaceName = 'downloads.mojom.Page';
mojo.internal.bindings.downloads.mojom.Page_RemoveItem_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.Page_UpdateItem_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.Page_InsertItems_ParamsSpec = { $: {} };
mojo.internal.bindings.downloads.mojom.Page_ClearAll_ParamsSpec = { $: {} };

// External type stubs (from imports)
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.String16Spec = mojo.internal.bindings.mojo_base.mojom.String16Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: DangerType
mojo.internal.bindings.downloads.mojom.DangerType = {
  kNoApplicableDangerType: 0,
  kDangerousFile: 1,
  kDangerousUrl: 2,
  kDangerousContent: 3,
  kCookieTheft: 4,
  kUncommonContent: 5,
  kDangerousHost: 6,
  kPotentiallyUnwanted: 7,
  kAsyncScanning: 8,
  kAsyncLocalPasswordScanning: 9,
  kBlockedPasswordProtected: 10,
  kBlockedTooLarge: 11,
  kSensitiveContentWarning: 12,
  kSensitiveContentBlock: 13,
  kDeepScannedFailed: 14,
  kDeepScannedSafe: 15,
  kDeepScannedOpenedDangerous: 16,
  kBlockedScanFailed: 17,
  kForcedSaveToGdrive: 18,
};

// Enum: TailoredWarningType
mojo.internal.bindings.downloads.mojom.TailoredWarningType = {
  kNoApplicableTailoredWarningType: 0,
  kCookieTheft: 1,
  kSuspiciousArchive: 2,
};

// Enum: State
mojo.internal.bindings.downloads.mojom.State = {
  kInProgress: 0,
  kCancelled: 1,
  kComplete: 2,
  kPaused: 3,
  kDangerous: 4,
  kInterrupted: 5,
  kInsecure: 6,
  kAsyncScanning: 7,
  kPromptForScanning: 8,
  kPromptForLocalPasswordScanning: 9,
};

// Enum: SafeBrowsingState
mojo.internal.bindings.downloads.mojom.SafeBrowsingState = {
  kNoSafeBrowsing: 0,
  kStandardProtection: 1,
  kEnhancedProtection: 2,
};

// Struct: Data
mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.DataSpec, 'downloads.mojom.Data', [
      mojo.internal.StructField('arg_total', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_by_ext_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_by_ext_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_date_string', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_path', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_url', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_reason_text', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress_status_text', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_show_in_folder_text', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_since_string', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_initiator_origin', 96, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 104, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_percent', 112, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_started', 116, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_danger_type', 120, 0, mojo.internal.bindings.downloads.mojom.DangerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_tailored_warning_type', 124, 0, mojo.internal.bindings.downloads.mojom.TailoredWarningTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 128, 0, mojo.internal.bindings.downloads.mojom.StateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_safe_browsing_state', 132, 0, mojo.internal.bindings.downloads.mojom.SafeBrowsingStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_externally_removed', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_dangerous', 136, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_insecure', 136, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_reviewable', 136, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_otr', 136, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_resume', 136, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_retry', 136, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_safe_browsing_verdict', 136, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 152]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'downloads.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.downloads.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.downloads.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.downloads.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.downloads.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.downloads.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.downloads.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.downloads.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('downloads.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.downloads.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.downloads.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.downloads.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('downloads.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
                 this.mapOrdinal(header.ordinal, 0);
                 dispatchId = 0;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for CreatePageHandler failed with TypeError');
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.downloads.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.downloads.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.downloads.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.downloads.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.downloads.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.downloads.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_GetDownloads_ParamsSpec, 'downloads.mojom.PageHandler_GetDownloads_Params', [
      mojo.internal.StructField('arg_search_terms', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenFileRequiringGesture_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_Drag_ParamsSpec, 'downloads.mojom.PageHandler_Drag_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec, 'downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec, 'downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec, 'downloads.mojom.PageHandler_DiscardDangerous_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_RetryDownload_ParamsSpec, 'downloads.mojom.PageHandler_RetryDownload_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_Show_ParamsSpec, 'downloads.mojom.PageHandler_Show_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_Pause_ParamsSpec, 'downloads.mojom.PageHandler_Pause_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_Resume_ParamsSpec, 'downloads.mojom.PageHandler_Resume_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_Remove_ParamsSpec, 'downloads.mojom.PageHandler_Remove_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_Undo_ParamsSpec, 'downloads.mojom.PageHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_Cancel_ParamsSpec, 'downloads.mojom.PageHandler_Cancel_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_ClearAll_ParamsSpec, 'downloads.mojom.PageHandler_ClearAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec, 'downloads.mojom.PageHandler_OpenEsbSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec, 'downloads.mojom.PageHandler_LogEsbPromotionRowViewed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_DeepScan_ParamsSpec, 'downloads.mojom.PageHandler_DeepScan_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec, 'downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec, 'downloads.mojom.PageHandler_IsEligibleForEsbPromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec, 'downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.downloads.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.downloads.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.downloads.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.downloads.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDownloads(arg_search_terms) {
    return this.$.getDownloads(arg_search_terms);
  }
  openFileRequiringGesture(arg_id) {
    return this.$.openFileRequiringGesture(arg_id);
  }
  drag(arg_id) {
    return this.$.drag(arg_id);
  }
  saveSuspiciousRequiringGesture(arg_id) {
    return this.$.saveSuspiciousRequiringGesture(arg_id);
  }
  recordOpenBypassWarningDialog(arg_id) {
    return this.$.recordOpenBypassWarningDialog(arg_id);
  }
  saveDangerousFromDialogRequiringGesture(arg_id) {
    return this.$.saveDangerousFromDialogRequiringGesture(arg_id);
  }
  recordCancelBypassWarningDialog(arg_id) {
    return this.$.recordCancelBypassWarningDialog(arg_id);
  }
  discardDangerous(arg_id) {
    return this.$.discardDangerous(arg_id);
  }
  retryDownload(arg_id) {
    return this.$.retryDownload(arg_id);
  }
  show(arg_id) {
    return this.$.show(arg_id);
  }
  pause(arg_id) {
    return this.$.pause(arg_id);
  }
  resume(arg_id) {
    return this.$.resume(arg_id);
  }
  remove(arg_id) {
    return this.$.remove(arg_id);
  }
  undo() {
    return this.$.undo();
  }
  cancel(arg_id) {
    return this.$.cancel(arg_id);
  }
  clearAll() {
    return this.$.clearAll();
  }
  openDownloadsFolderRequiringGesture() {
    return this.$.openDownloadsFolderRequiringGesture();
  }
  openEsbSettings() {
    return this.$.openEsbSettings();
  }
  logEsbPromotionRowViewed() {
    return this.$.logEsbPromotionRowViewed();
  }
  openDuringScanningRequiringGesture(arg_id) {
    return this.$.openDuringScanningRequiringGesture(arg_id);
  }
  reviewDangerousRequiringGesture(arg_id) {
    return this.$.reviewDangerousRequiringGesture(arg_id);
  }
  deepScan(arg_id) {
    return this.$.deepScan(arg_id);
  }
  bypassDeepScanRequiringGesture(arg_id) {
    return this.$.bypassDeepScanRequiringGesture(arg_id);
  }
  isEligibleForEsbPromo() {
    return this.$.isEligibleForEsbPromo();
  }
};

mojo.internal.bindings.downloads.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('downloads.mojom.PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDownloads(arg_search_terms) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_GetDownloads_ParamsSpec,
      null,
      [arg_search_terms],
      false);
  }

  openFileRequiringGesture(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  drag(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_Drag_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  saveSuspiciousRequiringGesture(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  recordOpenBypassWarningDialog(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  saveDangerousFromDialogRequiringGesture(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  recordCancelBypassWarningDialog(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  discardDangerous(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  retryDownload(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_RetryDownload_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  show(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_Show_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  pause(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_Pause_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  resume(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_Resume_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  remove(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_Remove_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  cancel(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  clearAll() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_ClearAll_ParamsSpec,
      null,
      [],
      false);
  }

  openDownloadsFolderRequiringGesture() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec,
      null,
      [],
      false);
  }

  openEsbSettings() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec,
      null,
      [],
      false);
  }

  logEsbPromotionRowViewed() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec,
      null,
      [],
      false);
  }

  openDuringScanningRequiringGesture(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  reviewDangerousRequiringGesture(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  deepScan(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_DeepScan_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  bypassDeepScanRequiringGesture(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  isEligibleForEsbPromo() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec,
      mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.downloads.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.downloads.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.downloads.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('downloads.mojom.PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
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
        
        // Try Method 0: GetDownloads
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_GetDownloads_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDownloads (0)');
                 this.mapOrdinal(header.ordinal, 0);
                 dispatchId = 0;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for GetDownloads failed with TypeError');
           }
        }
        // Try Method 1: OpenFileRequiringGesture
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileRequiringGesture (1)');
                 this.mapOrdinal(header.ordinal, 1);
                 dispatchId = 1;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for OpenFileRequiringGesture failed with TypeError');
           }
        }
        // Try Method 2: Drag
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_Drag_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Drag (2)');
                 this.mapOrdinal(header.ordinal, 2);
                 dispatchId = 2;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for Drag failed with TypeError');
           }
        }
        // Try Method 3: SaveSuspiciousRequiringGesture
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveSuspiciousRequiringGesture (3)');
                 this.mapOrdinal(header.ordinal, 3);
                 dispatchId = 3;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for SaveSuspiciousRequiringGesture failed with TypeError');
           }
        }
        // Try Method 4: RecordOpenBypassWarningDialog
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordOpenBypassWarningDialog (4)');
                 this.mapOrdinal(header.ordinal, 4);
                 dispatchId = 4;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for RecordOpenBypassWarningDialog failed with TypeError');
           }
        }
        // Try Method 5: SaveDangerousFromDialogRequiringGesture
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveDangerousFromDialogRequiringGesture (5)');
                 this.mapOrdinal(header.ordinal, 5);
                 dispatchId = 5;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for SaveDangerousFromDialogRequiringGesture failed with TypeError');
           }
        }
        // Try Method 6: RecordCancelBypassWarningDialog
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCancelBypassWarningDialog (6)');
                 this.mapOrdinal(header.ordinal, 6);
                 dispatchId = 6;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for RecordCancelBypassWarningDialog failed with TypeError');
           }
        }
        // Try Method 7: DiscardDangerous
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DiscardDangerous (7)');
                 this.mapOrdinal(header.ordinal, 7);
                 dispatchId = 7;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for DiscardDangerous failed with TypeError');
           }
        }
        // Try Method 8: RetryDownload
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_RetryDownload_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RetryDownload (8)');
                 this.mapOrdinal(header.ordinal, 8);
                 dispatchId = 8;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for RetryDownload failed with TypeError');
           }
        }
        // Try Method 9: Show
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_Show_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Show (9)');
                 this.mapOrdinal(header.ordinal, 9);
                 dispatchId = 9;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for Show failed with TypeError');
           }
        }
        // Try Method 10: Pause
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_Pause_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (10)');
                 this.mapOrdinal(header.ordinal, 10);
                 dispatchId = 10;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for Pause failed with TypeError');
           }
        }
        // Try Method 11: Resume
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_Resume_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (11)');
                 this.mapOrdinal(header.ordinal, 11);
                 dispatchId = 11;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for Resume failed with TypeError');
           }
        }
        // Try Method 12: Remove
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_Remove_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (12)');
                 this.mapOrdinal(header.ordinal, 12);
                 dispatchId = 12;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for Remove failed with TypeError');
           }
        }
        // Try Method 13: Undo
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_Undo_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Undo (13)');
                 this.mapOrdinal(header.ordinal, 13);
                 dispatchId = 13;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for Undo failed with TypeError');
           }
        }
        // Try Method 14: Cancel
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_Cancel_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (14)');
                 this.mapOrdinal(header.ordinal, 14);
                 dispatchId = 14;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for Cancel failed with TypeError');
           }
        }
        // Try Method 15: ClearAll
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_ClearAll_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAll (15)');
                 this.mapOrdinal(header.ordinal, 15);
                 dispatchId = 15;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for ClearAll failed with TypeError');
           }
        }
        // Try Method 16: OpenDownloadsFolderRequiringGesture
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDownloadsFolderRequiringGesture (16)');
                 this.mapOrdinal(header.ordinal, 16);
                 dispatchId = 16;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for OpenDownloadsFolderRequiringGesture failed with TypeError');
           }
        }
        // Try Method 17: OpenEsbSettings
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenEsbSettings (17)');
                 this.mapOrdinal(header.ordinal, 17);
                 dispatchId = 17;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for OpenEsbSettings failed with TypeError');
           }
        }
        // Try Method 18: LogEsbPromotionRowViewed
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogEsbPromotionRowViewed (18)');
                 this.mapOrdinal(header.ordinal, 18);
                 dispatchId = 18;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for LogEsbPromotionRowViewed failed with TypeError');
           }
        }
        // Try Method 19: OpenDuringScanningRequiringGesture
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDuringScanningRequiringGesture (19)');
                 this.mapOrdinal(header.ordinal, 19);
                 dispatchId = 19;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for OpenDuringScanningRequiringGesture failed with TypeError');
           }
        }
        // Try Method 20: ReviewDangerousRequiringGesture
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReviewDangerousRequiringGesture (20)');
                 this.mapOrdinal(header.ordinal, 20);
                 dispatchId = 20;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for ReviewDangerousRequiringGesture failed with TypeError');
           }
        }
        // Try Method 21: DeepScan
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_DeepScan_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeepScan (21)');
                 this.mapOrdinal(header.ordinal, 21);
                 dispatchId = 21;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for DeepScan failed with TypeError');
           }
        }
        // Try Method 22: BypassDeepScanRequiringGesture
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BypassDeepScanRequiringGesture (22)');
                 this.mapOrdinal(header.ordinal, 22);
                 dispatchId = 22;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for BypassDeepScanRequiringGesture failed with TypeError');
           }
        }
        // Try Method 23: IsEligibleForEsbPromo
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = true;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsEligibleForEsbPromo (23)');
                 this.mapOrdinal(header.ordinal, 23);
                 dispatchId = 23;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for IsEligibleForEsbPromo failed with TypeError');
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_GetDownloads_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDownloads');
          const result = this.impl.getDownloads(params.arg_search_terms);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_OpenFileRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFileRequiringGesture');
          const result = this.impl.openFileRequiringGesture(params.arg_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_Drag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.drag');
          const result = this.impl.drag(params.arg_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveSuspiciousRequiringGesture');
          const result = this.impl.saveSuspiciousRequiringGesture(params.arg_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_RecordOpenBypassWarningDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordOpenBypassWarningDialog');
          const result = this.impl.recordOpenBypassWarningDialog(params.arg_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveDangerousFromDialogRequiringGesture');
          const result = this.impl.saveDangerousFromDialogRequiringGesture(params.arg_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_RecordCancelBypassWarningDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordCancelBypassWarningDialog');
          const result = this.impl.recordCancelBypassWarningDialog(params.arg_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_DiscardDangerous_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discardDangerous');
          const result = this.impl.discardDangerous(params.arg_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_RetryDownload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.retryDownload');
          const result = this.impl.retryDownload(params.arg_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_Show_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.show');
          const result = this.impl.show(params.arg_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_Pause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause(params.arg_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume(params.arg_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_Remove_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove(params.arg_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_Undo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel(params.arg_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_ClearAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearAll');
          const result = this.impl.clearAll();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDownloadsFolderRequiringGesture');
          const result = this.impl.openDownloadsFolderRequiringGesture();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_OpenEsbSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openEsbSettings');
          const result = this.impl.openEsbSettings();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_LogEsbPromotionRowViewed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logEsbPromotionRowViewed');
          const result = this.impl.logEsbPromotionRowViewed();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDuringScanningRequiringGesture');
          const result = this.impl.openDuringScanningRequiringGesture(params.arg_id);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reviewDangerousRequiringGesture');
          const result = this.impl.reviewDangerousRequiringGesture(params.arg_id);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_DeepScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deepScan');
          const result = this.impl.deepScan(params.arg_id);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bypassDeepScanRequiringGesture');
          const result = this.impl.bypassDeepScanRequiringGesture(params.arg_id);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isEligibleForEsbPromo');
          const result = this.impl.isEligibleForEsbPromo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.downloads.mojom.PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] IsEligibleForEsbPromo FAILED:', e));
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

mojo.internal.bindings.downloads.mojom.PageHandlerReceiver = mojo.internal.bindings.downloads.mojom.PageHandlerReceiver;

mojo.internal.bindings.downloads.mojom.PageHandlerPtr = mojo.internal.bindings.downloads.mojom.PageHandlerRemote;
mojo.internal.bindings.downloads.mojom.PageHandlerRequest = mojo.internal.bindings.downloads.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.Page_RemoveItem_ParamsSpec, 'downloads.mojom.Page_RemoveItem_Params', [
      mojo.internal.StructField('arg_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.Page_UpdateItem_ParamsSpec, 'downloads.mojom.Page_UpdateItem_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.downloads.mojom.DataSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.Page_InsertItems_ParamsSpec, 'downloads.mojom.Page_InsertItems_Params', [
      mojo.internal.StructField('arg_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.downloads.mojom.DataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.downloads.mojom.Page_ClearAll_ParamsSpec, 'downloads.mojom.Page_ClearAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.downloads.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.downloads.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'downloads.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.downloads.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.downloads.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  removeItem(arg_index) {
    return this.$.removeItem(arg_index);
  }
  updateItem(arg_index, arg_data) {
    return this.$.updateItem(arg_index, arg_data);
  }
  insertItems(arg_index, arg_items) {
    return this.$.insertItems(arg_index, arg_items);
  }
  clearAll() {
    return this.$.clearAll();
  }
};

mojo.internal.bindings.downloads.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('downloads.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  removeItem(arg_index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.downloads.mojom.Page_RemoveItem_ParamsSpec,
      null,
      [arg_index],
      false);
  }

  updateItem(arg_index, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.downloads.mojom.Page_UpdateItem_ParamsSpec,
      null,
      [arg_index, arg_data],
      false);
  }

  insertItems(arg_index, arg_items) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.downloads.mojom.Page_InsertItems_ParamsSpec,
      null,
      [arg_index, arg_items],
      false);
  }

  clearAll() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.downloads.mojom.Page_ClearAll_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.downloads.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.downloads.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'downloads.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.downloads.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('downloads.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
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
        
        // Try Method 0: RemoveItem
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.Page_RemoveItem_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveItem (0)');
                 this.mapOrdinal(header.ordinal, 0);
                 dispatchId = 0;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for RemoveItem failed with TypeError');
           }
        }
        // Try Method 1: UpdateItem
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.Page_UpdateItem_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateItem (1)');
                 this.mapOrdinal(header.ordinal, 1);
                 dispatchId = 1;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for UpdateItem failed with TypeError');
           }
        }
        // Try Method 2: InsertItems
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.Page_InsertItems_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertItems (2)');
                 this.mapOrdinal(header.ordinal, 2);
                 dispatchId = 2;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for InsertItems failed with TypeError');
           }
        }
        // Try Method 3: ClearAll
        if (dispatchId === undefined) {
           try {
             const structSpec = mojo.internal.bindings.downloads.mojom.Page_ClearAll_ParamsSpec.$.structSpec;
             const size = decoder.decodeUint32(0);
             const version = decoder.decodeUint32(4);
             let sizeMatch = false;
             for (const v of structSpec.versions) {
               if (v.version === version && v.packedSize === size) { sizeMatch = true; break; }
             }
             const methodExpectsResp = false;
             if (sizeMatch && (!!(header.flags & 1) === methodExpectsResp)) {
               if (size > 8 || message.payload.byteLength === 8) {
                 decoder.decodeStructInline(structSpec);
                 console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAll (3)');
                 this.mapOrdinal(header.ordinal, 3);
                 dispatchId = 3;
               }
             }
           } catch (e) {
             if (e instanceof TypeError) console.warn('[Discovery] trial for ClearAll failed with TypeError');
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.Page_RemoveItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeItem');
          const result = this.impl.removeItem(params.arg_index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.Page_UpdateItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateItem');
          const result = this.impl.updateItem(params.arg_index, params.arg_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.Page_InsertItems_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertItems');
          const result = this.impl.insertItems(params.arg_index, params.arg_items);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.downloads.mojom.Page_ClearAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearAll');
          const result = this.impl.clearAll();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.downloads.mojom.PageReceiver = mojo.internal.bindings.downloads.mojom.PageReceiver;

mojo.internal.bindings.downloads.mojom.PagePtr = mojo.internal.bindings.downloads.mojom.PageRemote;
mojo.internal.bindings.downloads.mojom.PageRequest = mojo.internal.bindings.downloads.mojom.PagePendingReceiver;

