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
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.mojom = ash.media_app_ui.mojom || {};
var mantis = mantis || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec = { $: {} };
ash.media_app_ui.mojom.PageMetadataSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory = {};
ash.media_app_ui.mojom.UntrustedServiceFactory.$interfaceName = 'ash.media_app_ui.mojom.UntrustedServiceFactory';
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedService = {};
ash.media_app_ui.mojom.OcrUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedService';
ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage = {};
ash.media_app_ui.mojom.OcrUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.OcrUntrustedPage';
ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService = {};
ash.media_app_ui.mojom.MahiUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedService';
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedPage = {};
ash.media_app_ui.mojom.MahiUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.MahiUntrustedPage';
ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService = {};
ash.media_app_ui.mojom.MantisUntrustedService.$interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedService';
ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.MantisUntrustedPage = {};
ash.media_app_ui.mojom.MantisUntrustedPage.$interfaceName = 'ash.media_app_ui.mojom.MantisUntrustedPage';
ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec = { $: {} };

// Union: MantisUntrustedServiceResult
mojo.internal.Union(
    ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec, 'ash.media_app_ui.mojom.MantisUntrustedServiceResult', {
      'service': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MantisUntrustedServiceSpec),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mantis.mojom.InitializeResultSpec.$,
        'nullable': false,
      },
    });

// Struct: PageMetadata
mojo.internal.Struct(
    ash.media_app_ui.mojom.PageMetadataSpec, 'ash.media_app_ui.mojom.PageMetadata', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedServiceFactory
mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.OcrUntrustedServiceSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.OcrUntrustedPageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.MahiUntrustedServiceSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MahiUntrustedPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.media_app_ui.mojom.MantisUntrustedPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('dlc_uuid', 8, 0, mojo_base.mojom.UuidSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec, 'ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.media_app_ui.mojom.MantisUntrustedServiceResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.UntrustedServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.UntrustedServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.UntrustedServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.UntrustedServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedServiceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createOcrUntrustedService(receiver, page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec,
      null,
      [receiver, page],
      false);
  }

  createMahiUntrustedService(receiver, page, file_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec,
      null,
      [receiver, page, file_name],
      false);
  }

  isMantisAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec,
      ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec,
      [],
      false);
  }

  createMantisUntrustedService(page, dlc_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec,
      ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec,
      [page, dlc_uuid],
      false);
  }

};

ash.media_app_ui.mojom.UntrustedServiceFactory.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.UntrustedServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.UntrustedServiceFactory',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.UntrustedServiceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedServiceFactory', [
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_CreateOcrUntrustedService_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createOcrUntrustedService');
          const result = this.impl.createOcrUntrustedService(params.receiver, params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMahiUntrustedService_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createMahiUntrustedService');
          const result = this.impl.createMahiUntrustedService(params.receiver, params.page, params.file_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.isMantisAvailable');
          const result = this.impl.isMantisAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.UntrustedServiceFactory_IsMantisAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createMantisUntrustedService');
          const result = this.impl.createMantisUntrustedService(params.page, params.dlc_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.UntrustedServiceFactory_CreateMantisUntrustedService_ResponseParamsSpec);
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

ash.media_app_ui.mojom.UntrustedServiceFactoryReceiver = ash.media_app_ui.mojom.UntrustedServiceFactoryReceiver;

ash.media_app_ui.mojom.UntrustedServiceFactoryPtr = ash.media_app_ui.mojom.UntrustedServiceFactoryRemote;
ash.media_app_ui.mojom.UntrustedServiceFactoryRequest = ash.media_app_ui.mojom.UntrustedServiceFactoryPendingReceiver;


// Interface: OcrUntrustedService
mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_Params', [
      mojo.internal.StructField('page_metadata', 0, 0, mojo.internal.Array(ash.media_app_ui.mojom.PageMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_Params', [
      mojo.internal.StructField('dirty_page_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_Params', [
      mojo.internal.StructField('viewport_box', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.OcrUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.OcrUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.OcrUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OcrUntrustedService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  pageMetadataUpdated(page_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec,
      null,
      [page_metadata],
      false);
  }

  pageContentsUpdated(dirty_page_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec,
      null,
      [dirty_page_id],
      false);
  }

  viewportUpdated(viewport_box, scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec,
      null,
      [viewport_box, scale_factor],
      false);
  }

};

ash.media_app_ui.mojom.OcrUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.OcrUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedService',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.OcrUntrustedServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OcrUntrustedService', [
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedService_PageMetadataUpdated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.pageMetadataUpdated');
          const result = this.impl.pageMetadataUpdated(params.page_metadata);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedService_PageContentsUpdated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.pageContentsUpdated');
          const result = this.impl.pageContentsUpdated(params.dirty_page_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedService_ViewportUpdated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.viewportUpdated');
          const result = this.impl.viewportUpdated(params.viewport_box, params.scale_factor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.media_app_ui.mojom.OcrUntrustedServiceReceiver = ash.media_app_ui.mojom.OcrUntrustedServiceReceiver;

ash.media_app_ui.mojom.OcrUntrustedServicePtr = ash.media_app_ui.mojom.OcrUntrustedServiceRemote;
ash.media_app_ui.mojom.OcrUntrustedServiceRequest = ash.media_app_ui.mojom.OcrUntrustedServicePendingReceiver;


// Interface: OcrUntrustedPage
mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_Params', [
      mojo.internal.StructField('requestedPageId', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParams', [
      mojo.internal.StructField('page', 0, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_Params', [
      mojo.internal.StructField('viewport_box', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec, 'ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.OcrUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.OcrUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.OcrUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.OcrUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OcrUntrustedPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestBitmap(requestedPageId) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec,
      ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec,
      [requestedPageId],
      false);
  }

  setViewport(viewport_box) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec,
      null,
      [viewport_box],
      false);
  }

  setPdfOcrEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

ash.media_app_ui.mojom.OcrUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.OcrUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.OcrUntrustedPage',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.OcrUntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OcrUntrustedPage', [
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestBitmap');
          const result = this.impl.requestBitmap(params.requestedPageId);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.OcrUntrustedPage_RequestBitmap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedPage_SetViewport_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setViewport');
          const result = this.impl.setViewport(params.viewport_box);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.OcrUntrustedPage_SetPdfOcrEnabled_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setPdfOcrEnabled');
          const result = this.impl.setPdfOcrEnabled(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.media_app_ui.mojom.OcrUntrustedPageReceiver = ash.media_app_ui.mojom.OcrUntrustedPageReceiver;

ash.media_app_ui.mojom.OcrUntrustedPagePtr = ash.media_app_ui.mojom.OcrUntrustedPageRemote;
ash.media_app_ui.mojom.OcrUntrustedPageRequest = ash.media_app_ui.mojom.OcrUntrustedPagePendingReceiver;


// Interface: MahiUntrustedService
mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_Params', [
      mojo.internal.StructField('new_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_Params', [
      mojo.internal.StructField('anchor', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_Params', [
    ],
    [[0, 8]]);

ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MahiUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MahiUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MahiUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MahiUntrustedService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPdfLoaded() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec,
      null,
      [],
      false);
  }

  onPdfFileNameUpdated(new_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec,
      null,
      [new_name],
      false);
  }

  onPdfContextMenuShow(anchor, selected_text) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec,
      null,
      [anchor, selected_text],
      false);
  }

  onPdfContextMenuHide() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.media_app_ui.mojom.MahiUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MahiUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedService',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MahiUntrustedServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MahiUntrustedService', [
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfLoaded_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onPdfLoaded');
          const result = this.impl.onPdfLoaded();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfFileNameUpdated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onPdfFileNameUpdated');
          const result = this.impl.onPdfFileNameUpdated(params.new_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuShow_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onPdfContextMenuShow');
          const result = this.impl.onPdfContextMenuShow(params.anchor, params.selected_text);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedService_OnPdfContextMenuHide_ParamsSpec);
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

ash.media_app_ui.mojom.MahiUntrustedServiceReceiver = ash.media_app_ui.mojom.MahiUntrustedServiceReceiver;

ash.media_app_ui.mojom.MahiUntrustedServicePtr = ash.media_app_ui.mojom.MahiUntrustedServiceRemote;
ash.media_app_ui.mojom.MahiUntrustedServiceRequest = ash.media_app_ui.mojom.MahiUntrustedServicePendingReceiver;


// Interface: MahiUntrustedPage
mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_Params', [
      mojo.internal.StructField('limit', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec, 'ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParams', [
      mojo.internal.StructField('content', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MahiUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MahiUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MahiUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MahiUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MahiUntrustedPage', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  hidePdfContextMenu() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec,
      null,
      [],
      false);
  }

  getPdfContent(limit) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec,
      ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec,
      [limit],
      false);
  }

};

ash.media_app_ui.mojom.MahiUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MahiUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MahiUntrustedPage',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MahiUntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MahiUntrustedPage', [
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedPage_HidePdfContextMenu_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.hidePdfContextMenu');
          const result = this.impl.hidePdfContextMenu();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPdfContent');
          const result = this.impl.getPdfContent(params.limit);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.MahiUntrustedPage_GetPdfContent_ResponseParamsSpec);
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

ash.media_app_ui.mojom.MahiUntrustedPageReceiver = ash.media_app_ui.mojom.MahiUntrustedPageReceiver;

ash.media_app_ui.mojom.MahiUntrustedPagePtr = ash.media_app_ui.mojom.MahiUntrustedPageRemote;
ash.media_app_ui.mojom.MahiUntrustedPageRequest = ash.media_app_ui.mojom.MahiUntrustedPagePendingReceiver;


// Interface: MantisUntrustedService
mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('selection', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('seed', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParams', [
      mojo.internal.StructField('verdict', 0, 0, mantis.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_Params', [
      mojo.internal.StructField('gesture', 0, 0, mojo.internal.Array(mantis.mojom.TouchPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, mantis.mojom.SegmentationModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MantisUntrustedServiceRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MantisUntrustedServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MantisUntrustedServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MantisUntrustedService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  segmentImage(image, selection) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec,
      [image, selection],
      false);
  }

  generativeFillImage(image, mask, text, seed) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec,
      [image, mask, text, seed],
      false);
  }

  inpaintImage(image, mask, seed) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec,
      [image, mask, seed],
      false);
  }

  outpaintImage(image, mask, seed) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec,
      [image, mask, seed],
      false);
  }

  classifyImageSafety(image) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec,
      [image],
      false);
  }

  inferSegmentationMode(gesture) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec,
      ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec,
      [gesture],
      false);
  }

};

ash.media_app_ui.mojom.MantisUntrustedService.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MantisUntrustedServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedService',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MantisUntrustedServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MantisUntrustedService', [
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec);
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.segmentImage');
          const result = this.impl.segmentImage(params.image, params.selection);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.MantisUntrustedService_SegmentImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.generativeFillImage');
          const result = this.impl.generativeFillImage(params.image, params.mask, params.text, params.seed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.MantisUntrustedService_GenerativeFillImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.inpaintImage');
          const result = this.impl.inpaintImage(params.image, params.mask, params.seed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.MantisUntrustedService_InpaintImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.outpaintImage');
          const result = this.impl.outpaintImage(params.image, params.mask, params.seed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.MantisUntrustedService_OutpaintImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.classifyImageSafety');
          const result = this.impl.classifyImageSafety(params.image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.MantisUntrustedService_ClassifyImageSafety_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.inferSegmentationMode');
          const result = this.impl.inferSegmentationMode(params.gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.MantisUntrustedService_InferSegmentationMode_ResponseParamsSpec);
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

ash.media_app_ui.mojom.MantisUntrustedServiceReceiver = ash.media_app_ui.mojom.MantisUntrustedServiceReceiver;

ash.media_app_ui.mojom.MantisUntrustedServicePtr = ash.media_app_ui.mojom.MantisUntrustedServiceRemote;
ash.media_app_ui.mojom.MantisUntrustedServiceRequest = ash.media_app_ui.mojom.MantisUntrustedServicePendingReceiver;


// Interface: MantisUntrustedPage
mojo.internal.Struct(
    ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec, 'ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.MantisUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.MantisUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.MantisUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.MantisUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MantisUntrustedPage', [
      { explicit: null },
    ]);
  }

  reportMantisProgress(progress) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec,
      null,
      [progress],
      false);
  }

};

ash.media_app_ui.mojom.MantisUntrustedPage.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.MantisUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.MantisUntrustedPage',
    'context');
  return remote.$;
};

ash.media_app_ui.mojom.MantisUntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MantisUntrustedPage', [
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
             decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.MantisUntrustedPage_ReportMantisProgress_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.reportMantisProgress');
          const result = this.impl.reportMantisProgress(params.progress);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.media_app_ui.mojom.MantisUntrustedPageReceiver = ash.media_app_ui.mojom.MantisUntrustedPageReceiver;

ash.media_app_ui.mojom.MantisUntrustedPagePtr = ash.media_app_ui.mojom.MantisUntrustedPageRemote;
ash.media_app_ui.mojom.MantisUntrustedPageRequest = ash.media_app_ui.mojom.MantisUntrustedPagePendingReceiver;

