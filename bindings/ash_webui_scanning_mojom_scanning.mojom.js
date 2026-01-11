// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/scanning/mojom/scanning.mojom
 // Module: ash.scanning.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.scanning = mojo.internal.bindings.ash.scanning || {};
mojo.internal.bindings.ash.scanning.mojom = mojo.internal.bindings.ash.scanning.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.scanning.mojom.ColorModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.scanning.mojom.FileTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.scanning.mojom.SourceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.scanning.mojom.PageSizeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.scanning.mojom.ScanResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.scanning.mojom.ScanSourceSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScannerCapabilitiesSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanSettingsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScannerSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver = {};
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver.$interfaceName = 'ash.scanning.mojom.ScanJobObserver';
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService = {};
mojo.internal.bindings.ash.scanning.mojom.ScanService.$interfaceName = 'ash.scanning.mojom.ScanService';
mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.ScanService_CancelScan_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController = {};
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController.$interfaceName = 'ash.scanning.mojom.MultiPageScanController';
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec = { $: {} };

// Enum: ColorMode
mojo.internal.bindings.ash.scanning.mojom.ColorMode = {
  kBlackAndWhite: 0,
  kGrayscale: 1,
  kColor: 2,
};

// Enum: FileType
mojo.internal.bindings.ash.scanning.mojom.FileType = {
  kJpg: 0,
  kPdf: 1,
  kPng: 2,
};

// Enum: SourceType
mojo.internal.bindings.ash.scanning.mojom.SourceType = {
  kUnknown: 0,
  kFlatbed: 1,
  kAdfSimplex: 2,
  kAdfDuplex: 3,
  kDefault: 4,
};

// Enum: PageSize
mojo.internal.bindings.ash.scanning.mojom.PageSize = {
  kIsoA3: 0,
  kIsoA4: 1,
  kIsoB4: 2,
  kLegal: 3,
  kNaLetter: 4,
  kTabloid: 5,
  kMax: 6,
};

// Enum: ScanResult
mojo.internal.bindings.ash.scanning.mojom.ScanResult = {
  kSuccess: 0,
  kUnknownError: 1,
  kDeviceBusy: 2,
  kAdfJammed: 3,
  kAdfEmpty: 4,
  kFlatbedOpen: 5,
  kIoError: 6,
};

// Struct: ScanSource
mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanSourceSpec, 'ash.scanning.mojom.ScanSource', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.scanning.mojom.SourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_sizes', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.scanning.mojom.PageSizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_color_modes', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.scanning.mojom.ColorModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_resolutions', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScannerCapabilities
mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScannerCapabilitiesSpec, 'ash.scanning.mojom.ScannerCapabilities', [
      mojo.internal.StructField('arg_sources', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.scanning.mojom.ScanSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScanSettings
mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanSettingsSpec, 'ash.scanning.mojom.ScanSettings', [
      mojo.internal.StructField('arg_source_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_scan_to_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_type', 16, 0, mojo.internal.bindings.ash.scanning.mojom.FileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_mode', 24, 0, mojo.internal.bindings.ash.scanning.mojom.ColorModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_size', 32, 0, mojo.internal.bindings.ash.scanning.mojom.PageSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resolution_dpi', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Scanner
mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScannerSpec, 'ash.scanning.mojom.Scanner', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ScanJobObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnPageProgress_Params', [
      mojo.internal.StructField('arg_page_number', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_progress_percent', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnPageComplete_Params', [
      mojo.internal.StructField('arg_page_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_new_page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnScanComplete_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.scanning.mojom.ScanResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scanned_file_paths', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnCancelComplete_Params', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.scanning.mojom.ScanResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverRemote = class {
  static get $interfaceName() {
    return 'ash.scanning.mojom.ScanJobObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPageProgress(arg_page_number, arg_progress_percent) {
    return this.$.onPageProgress(arg_page_number, arg_progress_percent);
  }
  onPageComplete(arg_page_data, arg_new_page_index) {
    return this.$.onPageComplete(arg_page_data, arg_new_page_index);
  }
  onScanComplete(arg_result, arg_scanned_file_paths) {
    return this.$.onScanComplete(arg_result, arg_scanned_file_paths);
  }
  onCancelComplete(arg_success) {
    return this.$.onCancelComplete(arg_success);
  }
  onMultiPageScanFail(arg_result) {
    return this.$.onMultiPageScanFail(arg_result);
  }
};

mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScanJobObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPageProgress(arg_page_number, arg_progress_percent) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec,
      null,
      [arg_page_number, arg_progress_percent],
      false);
  }

  onPageComplete(arg_page_data, arg_new_page_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec,
      null,
      [arg_page_data, arg_new_page_index],
      false);
  }

  onScanComplete(arg_result, arg_scanned_file_paths) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec,
      null,
      [arg_result, arg_scanned_file_paths],
      false);
  }

  onCancelComplete(arg_success) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec,
      null,
      [arg_success],
      false);
  }

  onMultiPageScanFail(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.scanning.mojom.ScanJobObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScanJobObserver', [
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
        
        // Try Method 0: OnPageProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPageProgress (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPageComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPageComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnScanComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScanComplete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnCancelComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCancelComplete (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnMultiPageScanFail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMultiPageScanFail (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPageProgress');
          const result = this.impl.onPageProgress(params.arg_page_number, params.arg_progress_percent);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPageComplete');
          const result = this.impl.onPageComplete(params.arg_page_data, params.arg_new_page_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScanComplete');
          const result = this.impl.onScanComplete(params.arg_result, params.arg_scanned_file_paths);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCancelComplete');
          const result = this.impl.onCancelComplete(params.arg_success);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMultiPageScanFail');
          const result = this.impl.onMultiPageScanFail(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverReceiver = mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverReceiver;

mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverPtr = mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverRemote;
mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverRequest = mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverPendingReceiver;


// Interface: ScanService
mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ParamsSpec, 'ash.scanning.mojom.ScanService_GetScanners_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_GetScanners_ResponseParams', [
      mojo.internal.StructField('arg_scanners', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.scanning.mojom.ScannerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec, 'ash.scanning.mojom.ScanService_GetScannerCapabilities_Params', [
      mojo.internal.StructField('arg_scanner_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParams', [
      mojo.internal.StructField('arg_capabilities', 0, 0, mojo.internal.bindings.ash.scanning.mojom.ScannerCapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ParamsSpec, 'ash.scanning.mojom.ScanService_StartScan_Params', [
      mojo.internal.StructField('arg_scanner_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.bindings.ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_StartScan_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec, 'ash.scanning.mojom.ScanService_StartMultiPageScan_Params', [
      mojo.internal.StructField('arg_scanner_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.bindings.ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.scanning.mojom.ScanJobObserverSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParams', [
      mojo.internal.StructField('arg_controller', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.ScanService_CancelScan_ParamsSpec, 'ash.scanning.mojom.ScanService_CancelScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.scanning.mojom.ScanServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.scanning.mojom.ScanServiceRemote = class {
  static get $interfaceName() {
    return 'ash.scanning.mojom.ScanService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.scanning.mojom.ScanServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.scanning.mojom.ScanServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getScanners() {
    return this.$.getScanners();
  }
  getScannerCapabilities(arg_scanner_id) {
    return this.$.getScannerCapabilities(arg_scanner_id);
  }
  startScan(arg_scanner_id, arg_settings, arg_observer) {
    return this.$.startScan(arg_scanner_id, arg_settings, arg_observer);
  }
  startMultiPageScan(arg_scanner_id, arg_settings, arg_observer) {
    return this.$.startMultiPageScan(arg_scanner_id, arg_settings, arg_observer);
  }
  cancelScan() {
    return this.$.cancelScan();
  }
};

mojo.internal.bindings.ash.scanning.mojom.ScanServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScanService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getScanners() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ParamsSpec,
      mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec,
      [],
      false);
  }

  getScannerCapabilities(arg_scanner_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec,
      mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec,
      [arg_scanner_id],
      false);
  }

  startScan(arg_scanner_id, arg_settings, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ParamsSpec,
      mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec,
      [arg_scanner_id, arg_settings, arg_observer],
      false);
  }

  startMultiPageScan(arg_scanner_id, arg_settings, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec,
      mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec,
      [arg_scanner_id, arg_settings, arg_observer],
      false);
  }

  cancelScan() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.ScanService_CancelScan_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.scanning.mojom.ScanService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.scanning.mojom.ScanServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.scanning.mojom.ScanService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.scanning.mojom.ScanServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScanService', [
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
        
        // Try Method 0: GetScanners
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScanners (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetScannerCapabilities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScannerCapabilities (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartScan (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StartMultiPageScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartMultiPageScan (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CancelScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_CancelScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelScan (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getScanners');
          const result = this.impl.getScanners();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetScanners FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getScannerCapabilities');
          const result = this.impl.getScannerCapabilities(params.arg_scanner_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetScannerCapabilities FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startScan');
          const result = this.impl.startScan(params.arg_scanner_id, params.arg_settings, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartScan FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startMultiPageScan');
          const result = this.impl.startMultiPageScan(params.arg_scanner_id, params.arg_settings, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartMultiPageScan FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.ScanService_CancelScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelScan');
          const result = this.impl.cancelScan();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.scanning.mojom.ScanServiceReceiver = mojo.internal.bindings.ash.scanning.mojom.ScanServiceReceiver;

mojo.internal.bindings.ash.scanning.mojom.ScanServicePtr = mojo.internal.bindings.ash.scanning.mojom.ScanServiceRemote;
mojo.internal.bindings.ash.scanning.mojom.ScanServiceRequest = mojo.internal.bindings.ash.scanning.mojom.ScanServicePendingReceiver;


// Interface: MultiPageScanController
mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_ScanNextPage_Params', [
      mojo.internal.StructField('arg_scanner_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.bindings.ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec, 'ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_RemovePage_Params', [
      mojo.internal.StructField('arg_page_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_RescanPage_Params', [
      mojo.internal.StructField('arg_scanner_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.bindings.ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec, 'ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerRemote = class {
  static get $interfaceName() {
    return 'ash.scanning.mojom.MultiPageScanController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scanNextPage(arg_scanner_id, arg_settings) {
    return this.$.scanNextPage(arg_scanner_id, arg_settings);
  }
  removePage(arg_page_index) {
    return this.$.removePage(arg_page_index);
  }
  rescanPage(arg_scanner_id, arg_settings, arg_page_index) {
    return this.$.rescanPage(arg_scanner_id, arg_settings, arg_page_index);
  }
  completeMultiPageScan() {
    return this.$.completeMultiPageScan();
  }
};

mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MultiPageScanController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  scanNextPage(arg_scanner_id, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec,
      mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec,
      [arg_scanner_id, arg_settings],
      false);
  }

  removePage(arg_page_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec,
      null,
      [arg_page_index],
      false);
  }

  rescanPage(arg_scanner_id, arg_settings, arg_page_index) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec,
      mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec,
      [arg_scanner_id, arg_settings, arg_page_index],
      false);
  }

  completeMultiPageScan() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.scanning.mojom.MultiPageScanController',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MultiPageScanController', [
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
        
        // Try Method 0: ScanNextPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScanNextPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemovePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RescanPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RescanPage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CompleteMultiPageScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CompleteMultiPageScan (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scanNextPage');
          const result = this.impl.scanNextPage(params.arg_scanner_id, params.arg_settings);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ScanNextPage FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removePage');
          const result = this.impl.removePage(params.arg_page_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rescanPage');
          const result = this.impl.rescanPage(params.arg_scanner_id, params.arg_settings, params.arg_page_index);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RescanPage FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.completeMultiPageScan');
          const result = this.impl.completeMultiPageScan();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerReceiver = mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerReceiver;

mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerPtr = mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerRemote;
mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerRequest = mojo.internal.bindings.ash.scanning.mojom.MultiPageScanControllerPendingReceiver;

