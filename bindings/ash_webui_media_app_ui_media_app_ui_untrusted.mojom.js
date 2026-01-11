// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/media_app_ui/media_app_ui_untrusted.mojom
 // Module: ash.media_app_ui.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.media_app_ui = mojo.internal.bindings.ash.media_app_ui || {};
mojo.internal.bindings.ash.media_app_ui.mojom = mojo.internal.bindings.ash.media_app_ui.mojom || {};
mojo.internal.bindings.mantis = mojo.internal.bindings.mantis || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.PageMetadataSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory = {};
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactorySpec = { $ : {} };
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory.$interfaceName = 'ash.media_app_ui.mojom.UntrustedServiceFactory';
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService = {};
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceSpec = { $ : {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedService';
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage = {};
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageSpec = { $ : {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedPage';
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService = {};
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceSpec = { $ : {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedService';
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage = {};
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageSpec = { $ : {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedPage';
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService = {};
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceSpec = { $ : {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedService';
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage = {};
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageSpec = { $ : {} };
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedPage';
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec = { $: {} };

// Union: MantisUntrustedServiceResult
mojo.internal.Union(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec, 'ash.media_app_ui.mojom.MantisUntrustedServiceResult', {
      'arg_service': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceRemote),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mantis.mojom.InitializeResultSpec.$,
        'nullable': false,
      },
    });

// Struct: PageMetadata
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.PageMetadataSpec, 'ash.media_app_ui.mojom.PageMetadata', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedServiceFactory
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_dlc_uuid', 8, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.UntrustedServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createOcrUntrustedService(arg_receiver, arg_page) {
    return this.$.createOcrUntrustedService(arg_receiver, arg_page);
  }
  createMahiUntrustedService(arg_receiver, arg_page, arg_file_name) {
    return this.$.createMahiUntrustedService(arg_receiver, arg_page, arg_file_name);
  }
  isMantisAvailable() {
    return this.$.isMantisAvailable();
  }
  createMantisUntrustedService(arg_page, arg_dlc_uuid) {
    return this.$.createMantisUntrustedService(arg_page, arg_dlc_uuid);
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.UntrustedServiceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createOcrUntrustedService(arg_receiver, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec,
      null,
      [arg_receiver, arg_page],
      false);
  }

  createMahiUntrustedService(arg_receiver, arg_page, arg_file_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec,
      null,
      [arg_receiver, arg_page, arg_file_name],
      false);
  }

  isMantisAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec,
      [],
      false);
  }

  createMantisUntrustedService(arg_page, arg_dlc_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec,
      [arg_page, arg_dlc_uuid],
      false);
  }

};

mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.UntrustedServiceFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.UntrustedServiceFactory', [
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
        
        // Try Method 0: CreateOcrUntrustedService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateOcrUntrustedService (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateMahiUntrustedService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateMahiUntrustedService (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsMantisAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsMantisAvailable (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateMantisUntrustedService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateMantisUntrustedService (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createOcrUntrustedService');
          const result = this.impl.createOcrUntrustedService(params.arg_receiver, params.arg_page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMahiUntrustedService');
          const result = this.impl.createMahiUntrustedService(params.arg_receiver, params.arg_page, params.arg_file_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isMantisAvailable');
          const result = this.impl.isMantisAvailable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsMantisAvailable FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMantisUntrustedService');
          const result = this.impl.createMantisUntrustedService(params.arg_page, params.arg_dlc_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateMantisUntrustedService FAILED:', e));
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

mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryReceiver = mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryReceiver;

mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryPtr = mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryRemote;
mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryRequest = mojo.internal.bindings.ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver;


// Interface: OcrUntrustedService
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_Params', [
      mojo.internal.StructField('arg_page_metadata', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.media_app_ui.mojom.PageMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_Params', [
      mojo.internal.StructField('arg_dirty_page_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_Params', [
      mojo.internal.StructField('arg_viewport_box', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  pageMetadataUpdated(arg_page_metadata) {
    return this.$.pageMetadataUpdated(arg_page_metadata);
  }
  pageContentsUpdated(arg_dirty_page_id) {
    return this.$.pageContentsUpdated(arg_dirty_page_id);
  }
  viewportUpdated(arg_viewport_box, arg_scale_factor) {
    return this.$.viewportUpdated(arg_viewport_box, arg_scale_factor);
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.OcrUntrustedService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  pageMetadataUpdated(arg_page_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec,
      null,
      [arg_page_metadata],
      false);
  }

  pageContentsUpdated(arg_dirty_page_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec,
      null,
      [arg_dirty_page_id],
      false);
  }

  viewportUpdated(arg_viewport_box, arg_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec,
      null,
      [arg_viewport_box, arg_scale_factor],
      false);
  }

};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.OcrUntrustedService', [
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
        
        // Try Method 0: PageMetadataUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageMetadataUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PageContentsUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageContentsUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ViewportUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ViewportUpdated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageMetadataUpdated');
          const result = this.impl.pageMetadataUpdated(params.arg_page_metadata);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageContentsUpdated');
          const result = this.impl.pageContentsUpdated(params.arg_dirty_page_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.viewportUpdated');
          const result = this.impl.viewportUpdated(params.arg_viewport_box, params.arg_scale_factor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceReceiver = mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceReceiver;

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServicePtr = mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceRemote;
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServiceRequest = mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver;


// Interface: OcrUntrustedPage
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_Params', [
      mojo.internal.StructField('arg_requestedPageId', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParams', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_Params', [
      mojo.internal.StructField('arg_viewport_box', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestBitmap(arg_requestedPageId) {
    return this.$.requestBitmap(arg_requestedPageId);
  }
  setViewport(arg_viewport_box) {
    return this.$.setViewport(arg_viewport_box);
  }
  setPdfOcrEnabled(arg_enabled) {
    return this.$.setPdfOcrEnabled(arg_enabled);
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.OcrUntrustedPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestBitmap(arg_requestedPageId) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec,
      [arg_requestedPageId],
      false);
  }

  setViewport(arg_viewport_box) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec,
      null,
      [arg_viewport_box],
      false);
  }

  setPdfOcrEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.OcrUntrustedPage', [
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
        
        // Try Method 0: RequestBitmap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestBitmap (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetViewport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetViewport (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPdfOcrEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPdfOcrEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestBitmap');
          const result = this.impl.requestBitmap(params.arg_requestedPageId);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestBitmap FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setViewport');
          const result = this.impl.setViewport(params.arg_viewport_box);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPdfOcrEnabled');
          const result = this.impl.setPdfOcrEnabled(params.arg_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageReceiver = mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageReceiver;

mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPagePtr = mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageRemote;
mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPageRequest = mojo.internal.bindings.ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver;


// Interface: MahiUntrustedService
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_Params', [
      mojo.internal.StructField('arg_new_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_Params', [
      mojo.internal.StructField('arg_anchor', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPdfLoaded() {
    return this.$.onPdfLoaded();
  }
  onPdfFileNameUpdated(arg_new_name) {
    return this.$.onPdfFileNameUpdated(arg_new_name);
  }
  onPdfContextMenuShow(arg_anchor, arg_selected_text) {
    return this.$.onPdfContextMenuShow(arg_anchor, arg_selected_text);
  }
  onPdfContextMenuHide() {
    return this.$.onPdfContextMenuHide();
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MahiUntrustedService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPdfLoaded() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  onPdfFileNameUpdated(arg_new_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec,
      null,
      [arg_new_name],
      false);
  }

  onPdfContextMenuShow(arg_anchor, arg_selected_text) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec,
      null,
      [arg_anchor, arg_selected_text],
      false);
  }

  onPdfContextMenuHide() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MahiUntrustedService', [
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
        
        // Try Method 0: OnPdfLoaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPdfLoaded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPdfFileNameUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPdfFileNameUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPdfContextMenuShow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPdfContextMenuShow (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPdfContextMenuHide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPdfContextMenuHide (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPdfLoaded');
          const result = this.impl.onPdfLoaded();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPdfFileNameUpdated');
          const result = this.impl.onPdfFileNameUpdated(params.arg_new_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPdfContextMenuShow');
          const result = this.impl.onPdfContextMenuShow(params.arg_anchor, params.arg_selected_text);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPdfContextMenuHide');
          const result = this.impl.onPdfContextMenuHide();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceReceiver = mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceReceiver;

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServicePtr = mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceRemote;
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServiceRequest = mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver;


// Interface: MahiUntrustedPage
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_Params', [
      mojo.internal.StructField('arg_limit', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParams', [
      mojo.internal.StructField('arg_content', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  hidePdfContextMenu() {
    return this.$.hidePdfContextMenu();
  }
  getPdfContent(arg_limit) {
    return this.$.getPdfContent(arg_limit);
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MahiUntrustedPage', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  hidePdfContextMenu() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec,
      null,
      [],
      false);
  }

  getPdfContent(arg_limit) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec,
      [arg_limit],
      false);
  }

};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MahiUntrustedPage', [
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
        
        // Try Method 0: HidePdfContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HidePdfContextMenu (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetPdfContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPdfContent (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hidePdfContextMenu');
          const result = this.impl.hidePdfContextMenu();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPdfContent');
          const result = this.impl.getPdfContent(params.arg_limit);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPdfContent FAILED:', e));
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

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageReceiver = mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageReceiver;

mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPagePtr = mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageRemote;
mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPageRequest = mojo.internal.bindings.ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver;


// Interface: MantisUntrustedService
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_selection', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_seed', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParams', [
      mojo.internal.StructField('arg_verdict', 0, 0, mojo.internal.bindings.mantis.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_Params', [
      mojo.internal.StructField('arg_gesture', 0, 0, mojo.internal.Array(mojo.internal.bindings.mantis.mojom.TouchPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParams', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mantis.mojom.SegmentationModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  segmentImage(arg_image, arg_selection) {
    return this.$.segmentImage(arg_image, arg_selection);
  }
  generativeFillImage(arg_image, arg_mask, arg_text, arg_seed) {
    return this.$.generativeFillImage(arg_image, arg_mask, arg_text, arg_seed);
  }
  inpaintImage(arg_image, arg_mask, arg_seed) {
    return this.$.inpaintImage(arg_image, arg_mask, arg_seed);
  }
  outpaintImage(arg_image, arg_mask, arg_seed) {
    return this.$.outpaintImage(arg_image, arg_mask, arg_seed);
  }
  classifyImageSafety(arg_image) {
    return this.$.classifyImageSafety(arg_image);
  }
  inferSegmentationMode(arg_gesture) {
    return this.$.inferSegmentationMode(arg_gesture);
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MantisUntrustedService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  segmentImage(arg_image, arg_selection) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec,
      [arg_image, arg_selection],
      false);
  }

  generativeFillImage(arg_image, arg_mask, arg_text, arg_seed) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec,
      [arg_image, arg_mask, arg_text, arg_seed],
      false);
  }

  inpaintImage(arg_image, arg_mask, arg_seed) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec,
      [arg_image, arg_mask, arg_seed],
      false);
  }

  outpaintImage(arg_image, arg_mask, arg_seed) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec,
      [arg_image, arg_mask, arg_seed],
      false);
  }

  classifyImageSafety(arg_image) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec,
      [arg_image],
      false);
  }

  inferSegmentationMode(arg_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec,
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec,
      [arg_gesture],
      false);
  }

};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MantisUntrustedService', [
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
        
        // Try Method 0: SegmentImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SegmentImage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GenerativeFillImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerativeFillImage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InpaintImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InpaintImage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OutpaintImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OutpaintImage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ClassifyImageSafety
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClassifyImageSafety (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: InferSegmentationMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InferSegmentationMode (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.segmentImage');
          const result = this.impl.segmentImage(params.arg_image, params.arg_selection);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SegmentImage FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generativeFillImage');
          const result = this.impl.generativeFillImage(params.arg_image, params.arg_mask, params.arg_text, params.arg_seed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerativeFillImage FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inpaintImage');
          const result = this.impl.inpaintImage(params.arg_image, params.arg_mask, params.arg_seed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InpaintImage FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.outpaintImage');
          const result = this.impl.outpaintImage(params.arg_image, params.arg_mask, params.arg_seed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OutpaintImage FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.classifyImageSafety');
          const result = this.impl.classifyImageSafety(params.arg_image);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClassifyImageSafety FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inferSegmentationMode');
          const result = this.impl.inferSegmentationMode(params.arg_gesture);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InferSegmentationMode FAILED:', e));
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

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceReceiver = mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceReceiver;

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServicePtr = mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceRemote;
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServiceRequest = mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver;


// Interface: MantisUntrustedPage
mojo.internal.Struct(
    mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_Params', [
      mojo.internal.StructField('arg_progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportMantisProgress(arg_progress) {
    return this.$.reportMantisProgress(arg_progress);
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MantisUntrustedPage', [
      { explicit: null },
    ]);
  }

  reportMantisProgress(arg_progress) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec,
      null,
      [arg_progress],
      false);
  }

};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.media_app_ui.mojom.MantisUntrustedPage', [
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
        
        // Try Method 0: ReportMantisProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportMantisProgress (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportMantisProgress');
          const result = this.impl.reportMantisProgress(params.arg_progress);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageReceiver = mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageReceiver;

mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPagePtr = mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageRemote;
mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPageRequest = mojo.internal.bindings.ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver;

