// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/print_backend_service.mojom
// Module: printing.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

printing.mojom.PrinterCapsAndInfoSpec = { $: {} };
printing.mojom.UnsandboxedPrintBackendHost = {};
printing.mojom.UnsandboxedPrintBackendHost.$interfaceName = 'printing.mojom.UnsandboxedPrintBackendHost';
printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec = { $: {} };
printing.mojom.SandboxedPrintBackendHost = {};
printing.mojom.SandboxedPrintBackendHost.$interfaceName = 'printing.mojom.SandboxedPrintBackendHost';
printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService = {};
printing.mojom.PrintBackendService.$interfaceName = 'printing.mojom.PrintBackendService';
printing.mojom.PrintBackendService_Init_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Poke_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_StartPrinting_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_DocumentDone_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Cancel_ParamsSpec = { $: {} };
printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec = { $: {} };

// Struct: PrinterCapsAndInfo
mojo.internal.Struct(
    printing.mojom.PrinterCapsAndInfoSpec, 'printing.mojom.PrinterCapsAndInfo', [
      mojo.internal.StructField('printer_info', 0, 0, printing.mojom.PrinterBasicInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printer_caps', 8, 0, printing.mojom.PrinterSemanticCapsAndDefaultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UnsandboxedPrintBackendHost
mojo.internal.Struct(
    printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec, 'printing.mojom.UnsandboxedPrintBackendHost_BindBackend_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PrintBackendServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.UnsandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.UnsandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.UnsandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.UnsandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.UnsandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.UnsandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UnsandboxedPrintBackendHost', [
      { explicit: null },
    ]);
  }

  bindBackend(service) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      [service],
      false);
  }

};

printing.mojom.UnsandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.UnsandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.UnsandboxedPrintBackendHost',
    'context');
  return remote.$;
};

printing.mojom.UnsandboxedPrintBackendHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UnsandboxedPrintBackendHost', [
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
        
        // Try Method 0: BindBackend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBackend (0)');
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
          const params = decoder.decodeStructInline(printing.mojom.UnsandboxedPrintBackendHost_BindBackend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindBackend');
          const result = this.impl.bindBackend(params.service);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.UnsandboxedPrintBackendHostReceiver = printing.mojom.UnsandboxedPrintBackendHostReceiver;

printing.mojom.UnsandboxedPrintBackendHostPtr = printing.mojom.UnsandboxedPrintBackendHostRemote;
printing.mojom.UnsandboxedPrintBackendHostRequest = printing.mojom.UnsandboxedPrintBackendHostPendingReceiver;


// Interface: SandboxedPrintBackendHost
mojo.internal.Struct(
    printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec, 'printing.mojom.SandboxedPrintBackendHost_BindBackend_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceRequest(printing.mojom.PrintBackendServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.SandboxedPrintBackendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.SandboxedPrintBackendHostRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.SandboxedPrintBackendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.SandboxedPrintBackendHostPendingReceiver,
      handle);
    this.$ = new printing.mojom.SandboxedPrintBackendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.SandboxedPrintBackendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SandboxedPrintBackendHost', [
      { explicit: null },
    ]);
  }

  bindBackend(service) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec,
      null,
      [service],
      false);
  }

};

printing.mojom.SandboxedPrintBackendHost.getRemote = function() {
  let remote = new printing.mojom.SandboxedPrintBackendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.SandboxedPrintBackendHost',
    'context');
  return remote.$;
};

printing.mojom.SandboxedPrintBackendHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SandboxedPrintBackendHost', [
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
        
        // Try Method 0: BindBackend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBackend (0)');
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
          const params = decoder.decodeStructInline(printing.mojom.SandboxedPrintBackendHost_BindBackend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindBackend');
          const result = this.impl.bindBackend(params.service);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.SandboxedPrintBackendHostReceiver = printing.mojom.SandboxedPrintBackendHostReceiver;

printing.mojom.SandboxedPrintBackendHostPtr = printing.mojom.SandboxedPrintBackendHostRemote;
printing.mojom.SandboxedPrintBackendHostRequest = printing.mojom.SandboxedPrintBackendHostPendingReceiver;


// Interface: PrintBackendService
mojo.internal.Struct(
    printing.mojom.PrintBackendService_Init_ParamsSpec, 'printing.mojom.PrintBackendService_Init_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote', 8, 0, mojo.internal.InterfaceProxy(printing.mojom.PrinterXmlParserRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Poke_ParamsSpec, 'printing.mojom.PrintBackendService_Poke_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec, 'printing.mojom.PrintBackendService_EnumeratePrinters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec, 'printing.mojom.PrintBackendService_GetDefaultPrinterName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec, 'printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec, 'printing.mojom.PrintBackendService_FetchCapabilities_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec, 'printing.mojom.PrintBackendService_GetPaperPrintableArea_Params', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media', 8, 0, printing.mojom.RequestedMediaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec, 'printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParams', [
      mojo.internal.StructField('printable_area_um', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec, 'printing.mojom.PrintBackendService_EstablishPrintingContext_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_window_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec, 'printing.mojom.PrintBackendService_UseDefaultSettings_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec, 'printing.mojom.PrintBackendService_AskUserForSettings_Params', [
      mojo.internal.StructField('context_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_pages', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_selection', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_scripted', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec, 'printing.mojom.PrintBackendService_UpdatePrintSettings_Params', [
      mojo.internal.StructField('job_settings', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_StartPrinting_ParamsSpec, 'printing.mojom.PrintBackendService_StartPrinting_Params', [
      mojo.internal.StructField('document_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, printing.mojom.PrintSettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('context_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec, 'printing.mojom.PrintBackendService_StartPrinting_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedPage_Params', [
      mojo.internal.StructField('page_data_type', 0, 0, printing.mojom.MetafileDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_page', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_content_rect', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_index', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('shrink_factor', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedDocument_Params', [
      mojo.internal.StructField('data_type', 0, 0, printing.mojom.MetafileDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_doc', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_count', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec, 'printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_DocumentDone_ParamsSpec, 'printing.mojom.PrintBackendService_DocumentDone_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec, 'printing.mojom.PrintBackendService_DocumentDone_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, printing.mojom.ResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Cancel_ParamsSpec, 'printing.mojom.PrintBackendService_Cancel_Params', [
      mojo.internal.StructField('document_cookie', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec, 'printing.mojom.PrintBackendService_Cancel_ResponseParams', [
    ],
    [[0, 8]]);

printing.mojom.PrintBackendServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintBackendServiceRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintBackendService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintBackendServicePendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintBackendServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PrintBackendServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintBackendService', [
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

  init(locale, remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintBackendService_Init_ParamsSpec,
      null,
      [locale, remote],
      false);
  }

  poke() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PrintBackendService_Poke_ParamsSpec,
      null,
      [],
      false);
  }

  enumeratePrinters() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec,
      null,
      [],
      false);
  }

  getDefaultPrinterName() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec,
      null,
      [],
      false);
  }

  getPrinterSemanticCapsAndDefaults(printer_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec,
      null,
      [printer_name],
      false);
  }

  fetchCapabilities(printer_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec,
      null,
      [printer_name],
      false);
  }

  getPaperPrintableArea(printer_name, media) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec,
      printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec,
      [printer_name, media],
      false);
  }

  establishPrintingContext(context_id, parent_window_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec,
      null,
      [context_id, parent_window_id],
      false);
  }

  useDefaultSettings(context_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec,
      null,
      [context_id],
      false);
  }

  askUserForSettings(context_id, max_pages, has_selection, is_scripted) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec,
      null,
      [context_id, max_pages, has_selection, is_scripted],
      false);
  }

  updatePrintSettings(context_id, job_settings) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec,
      null,
      [context_id, job_settings],
      false);
  }

  startPrinting(context_id, document_cookie, document_name, settings) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      printing.mojom.PrintBackendService_StartPrinting_ParamsSpec,
      printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec,
      [context_id, document_cookie, document_name, settings],
      false);
  }

  renderPrintedPage(document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec,
      [document_cookie, page_index, page_data_type, serialized_page, page_size, page_content_rect, shrink_factor],
      false);
  }

  renderPrintedDocument(document_cookie, page_count, data_type, serialized_doc) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec,
      printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec,
      [document_cookie, page_count, data_type, serialized_doc],
      false);
  }

  documentDone(document_cookie) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      printing.mojom.PrintBackendService_DocumentDone_ParamsSpec,
      printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec,
      [document_cookie],
      false);
  }

  cancel(document_cookie) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      printing.mojom.PrintBackendService_Cancel_ParamsSpec,
      printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec,
      [document_cookie],
      false);
  }

};

printing.mojom.PrintBackendService.getRemote = function() {
  let remote = new printing.mojom.PrintBackendServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintBackendService',
    'context');
  return remote.$;
};

printing.mojom.PrintBackendServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintBackendService', [
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Poke
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_Poke_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Poke (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EnumeratePrinters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumeratePrinters (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetDefaultPrinterName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultPrinterName (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetPrinterSemanticCapsAndDefaults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrinterSemanticCapsAndDefaults (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FetchCapabilities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchCapabilities (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetPaperPrintableArea
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPaperPrintableArea (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EstablishPrintingContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishPrintingContext (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UseDefaultSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UseDefaultSettings (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AskUserForSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskUserForSettings (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: UpdatePrintSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePrintSettings (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: StartPrinting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_StartPrinting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPrinting (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RenderPrintedPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderPrintedPage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RenderPrintedDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderPrintedDocument (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DocumentDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_DocumentDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DocumentDone (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintBackendService_Cancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.locale, params.remote);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_Poke_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.poke');
          const result = this.impl.poke();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_EnumeratePrinters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enumeratePrinters');
          const result = this.impl.enumeratePrinters();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_GetDefaultPrinterName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDefaultPrinterName');
          const result = this.impl.getDefaultPrinterName();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_GetPrinterSemanticCapsAndDefaults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrinterSemanticCapsAndDefaults');
          const result = this.impl.getPrinterSemanticCapsAndDefaults(params.printer_name);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_FetchCapabilities_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchCapabilities');
          const result = this.impl.fetchCapabilities(params.printer_name);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_GetPaperPrintableArea_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPaperPrintableArea');
          const result = this.impl.getPaperPrintableArea(params.printer_name, params.media);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_GetPaperPrintableArea_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_EstablishPrintingContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishPrintingContext');
          const result = this.impl.establishPrintingContext(params.context_id, params.parent_window_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_UseDefaultSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.useDefaultSettings');
          const result = this.impl.useDefaultSettings(params.context_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_AskUserForSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.askUserForSettings');
          const result = this.impl.askUserForSettings(params.context_id, params.max_pages, params.has_selection, params.is_scripted);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_UpdatePrintSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePrintSettings');
          const result = this.impl.updatePrintSettings(params.context_id, params.job_settings);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_StartPrinting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startPrinting');
          const result = this.impl.startPrinting(params.context_id, params.document_cookie, params.document_name, params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_StartPrinting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_RenderPrintedPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renderPrintedPage');
          const result = this.impl.renderPrintedPage(params.document_cookie, params.page_index, params.page_data_type, params.serialized_page, params.page_size, params.page_content_rect, params.shrink_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_RenderPrintedPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_RenderPrintedDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renderPrintedDocument');
          const result = this.impl.renderPrintedDocument(params.document_cookie, params.page_count, params.data_type, params.serialized_doc);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_RenderPrintedDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_DocumentDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.documentDone');
          const result = this.impl.documentDone(params.document_cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_DocumentDone_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintBackendService_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel(params.document_cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintBackendService_Cancel_ResponseParamsSpec);
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

printing.mojom.PrintBackendServiceReceiver = printing.mojom.PrintBackendServiceReceiver;

printing.mojom.PrintBackendServicePtr = printing.mojom.PrintBackendServiceRemote;
printing.mojom.PrintBackendServiceRequest = printing.mojom.PrintBackendServicePendingReceiver;

