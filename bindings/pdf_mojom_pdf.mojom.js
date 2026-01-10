// Auto-generated MojoJS binding
// Source: chromium_src/pdf/mojom/pdf.mojom
// Module: pdf.mojom

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
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var gfx = gfx || {};
var url = url || {};

pdf.mojom.SaveRequestTypeSpec = { $: mojo.internal.Enum() };
pdf.mojom.GetPdfBytesStatusSpec = { $: mojo.internal.Enum() };
pdf.mojom.SaveDataBufferHandlerGetResultSpec = { $: {} };
pdf.mojom.SaveDataBufferHandler = {};
pdf.mojom.SaveDataBufferHandler.$interfaceName = 'pdf.mojom.SaveDataBufferHandler';
pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec = { $: {} };
pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener = {};
pdf.mojom.PdfListener.$interfaceName = 'pdf.mojom.PdfListener';
pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPageText_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfHost = {};
pdf.mojom.PdfHost.$interfaceName = 'pdf.mojom.PdfHost';
pdf.mojom.PdfHost_SetListener_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_SelectionChanged_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec = { $: {} };

// Enum: SaveRequestType
pdf.mojom.SaveRequestType = {
  kAnnotation: 0,
  kOriginal: 1,
  kEdited: 2,
  kSearchified: 3,
};

// Enum: GetPdfBytesStatus
pdf.mojom.GetPdfBytesStatus = {
  kSuccess: 0,
  kSizeLimitExceeded: 1,
  kFailed: 2,
};

// Struct: SaveDataBufferHandlerGetResult
mojo.internal.Struct(
    pdf.mojom.SaveDataBufferHandlerGetResultSpec, 'pdf.mojom.SaveDataBufferHandlerGetResult', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(pdf.mojom.SaveDataBufferHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('total_file_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SaveDataBufferHandler
mojo.internal.Struct(
    pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec, 'pdf.mojom.SaveDataBufferHandler_Read_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('block_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec, 'pdf.mojom.SaveDataBufferHandler_Read_ResponseParams', [
      mojo.internal.StructField('block', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.SaveDataBufferHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.SaveDataBufferHandlerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.SaveDataBufferHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.SaveDataBufferHandlerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.SaveDataBufferHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.SaveDataBufferHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SaveDataBufferHandler', [
      { explicit: null },
    ]);
  }

  read(offset, block_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec,
      pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec,
      [offset, block_size],
      false);
  }

};

pdf.mojom.SaveDataBufferHandler.getRemote = function() {
  let remote = new pdf.mojom.SaveDataBufferHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.SaveDataBufferHandler',
    'context');
  return remote.$;
};

pdf.mojom.SaveDataBufferHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SaveDataBufferHandler', [
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
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Read (0)');
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
          const params = decoder.decodeStructInline(pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read(params.offset, params.block_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec);
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

pdf.mojom.SaveDataBufferHandlerReceiver = pdf.mojom.SaveDataBufferHandlerReceiver;

pdf.mojom.SaveDataBufferHandlerPtr = pdf.mojom.SaveDataBufferHandlerRemote;
pdf.mojom.SaveDataBufferHandlerRequest = pdf.mojom.SaveDataBufferHandlerPendingReceiver;


// Interface: PdfListener
mojo.internal.Struct(
    pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec, 'pdf.mojom.PdfListener_SetCaretPosition_Params', [
      mojo.internal.StructField('position', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec, 'pdf.mojom.PdfListener_MoveRangeSelectionExtent_Params', [
      mojo.internal.StructField('extent', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec, 'pdf.mojom.PdfListener_SetSelectionBounds_Params', [
      mojo.internal.StructField('base', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extent', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec, 'pdf.mojom.PdfListener_GetPdfBytes_Params', [
      mojo.internal.StructField('size_limit', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetPdfBytes_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, pdf.mojom.GetPdfBytesStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('page_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPageText_ParamsSpec, 'pdf.mojom.PdfListener_GetPageText_Params', [
      mojo.internal.StructField('page_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetPageText_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec, 'pdf.mojom.PdfListener_GetMostVisiblePageIndex_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParams', [
      mojo.internal.StructField('page_index_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'page_index_$flag', originalFieldName: 'page_index' }),
      mojo.internal.StructField('page_index_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'page_index_$value', originalFieldName: 'page_index' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec, 'pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_Params', [
      mojo.internal.StructField('request_type', 0, 0, pdf.mojom.SaveRequestTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, pdf.mojom.SaveDataBufferHandlerGetResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.PdfListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfListenerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfListenerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.PdfListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setCaretPosition(position) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec,
      null,
      [position],
      false);
  }

  moveRangeSelectionExtent(extent) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec,
      null,
      [extent],
      false);
  }

  setSelectionBounds(base, extent) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec,
      null,
      [base, extent],
      false);
  }

  getPdfBytes(size_limit) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec,
      pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec,
      [size_limit],
      false);
  }

  getPageText(page_index) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      pdf.mojom.PdfListener_GetPageText_ParamsSpec,
      pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec,
      [page_index],
      false);
  }

  getMostVisiblePageIndex() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec,
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec,
      [],
      false);
  }

  getSaveDataBufferHandlerForDrive(request_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec,
      pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec,
      [request_type],
      false);
  }

};

pdf.mojom.PdfListener.getRemote = function() {
  let remote = new pdf.mojom.PdfListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfListener',
    'context');
  return remote.$;
};

pdf.mojom.PdfListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfListener', [
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
        
        // Try Method 0: SetCaretPosition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCaretPosition (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MoveRangeSelectionExtent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveRangeSelectionExtent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetSelectionBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSelectionBounds (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetPdfBytes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPdfBytes (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetPageText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetPageText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPageText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetMostVisiblePageIndex
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMostVisiblePageIndex (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetSaveDataBufferHandlerForDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSaveDataBufferHandlerForDrive (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setCaretPosition');
          const result = this.impl.setCaretPosition(params.position);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.moveRangeSelectionExtent');
          const result = this.impl.moveRangeSelectionExtent(params.extent);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setSelectionBounds');
          const result = this.impl.setSelectionBounds(params.base, params.extent);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPdfBytes');
          const result = this.impl.getPdfBytes(params.size_limit);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetPageText_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPageText');
          const result = this.impl.getPageText(params.page_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getMostVisiblePageIndex');
          const result = this.impl.getMostVisiblePageIndex();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getSaveDataBufferHandlerForDrive');
          const result = this.impl.getSaveDataBufferHandlerForDrive(params.request_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec);
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

pdf.mojom.PdfListenerReceiver = pdf.mojom.PdfListenerReceiver;

pdf.mojom.PdfListenerPtr = pdf.mojom.PdfListenerRemote;
pdf.mojom.PdfListenerRequest = pdf.mojom.PdfListenerPendingReceiver;


// Interface: PdfHost
mojo.internal.Struct(
    pdf.mojom.PdfHost_SetListener_ParamsSpec, 'pdf.mojom.PdfHost_SetListener_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(pdf.mojom.PdfListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec, 'pdf.mojom.PdfHost_OnDocumentLoadComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec, 'pdf.mojom.PdfHost_UpdateContentRestrictions_Params', [
      mojo.internal.StructField('restrictions', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec, 'pdf.mojom.PdfHost_SaveUrlAs_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy', 8, 0, network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_SelectionChanged_ParamsSpec, 'pdf.mojom.PdfHost_SelectionChanged_Params', [
      mojo.internal.StructField('left', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('left_height', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right_height', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec, 'pdf.mojom.PdfHost_SetPluginCanSave_Params', [
      mojo.internal.StructField('can_save', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec, 'pdf.mojom.PdfHost_OnSearchifyStarted_Params', [
    ],
    [[0, 8]]);

pdf.mojom.PdfHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfHostRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfHostPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.PdfHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setListener(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      pdf.mojom.PdfHost_SetListener_ParamsSpec,
      null,
      [client],
      false);
  }

  onDocumentLoadComplete() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec,
      null,
      [],
      false);
  }

  updateContentRestrictions(restrictions) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec,
      null,
      [restrictions],
      false);
  }

  saveUrlAs(url, policy) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec,
      null,
      [url, policy],
      false);
  }

  selectionChanged(left, left_height, right, right_height) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      pdf.mojom.PdfHost_SelectionChanged_ParamsSpec,
      null,
      [left, left_height, right, right_height],
      false);
  }

  setPluginCanSave(can_save) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec,
      null,
      [can_save],
      false);
  }

  onSearchifyStarted() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec,
      null,
      [],
      false);
  }

};

pdf.mojom.PdfHost.getRemote = function() {
  let remote = new pdf.mojom.PdfHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfHost',
    'context');
  return remote.$;
};

pdf.mojom.PdfHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfHost', [
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
        
        // Try Method 0: SetListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_SetListener_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetListener (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDocumentLoadComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDocumentLoadComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateContentRestrictions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateContentRestrictions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SaveUrlAs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveUrlAs (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SelectionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_SelectionChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectionChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetPluginCanSave
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPluginCanSave (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnSearchifyStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSearchifyStarted (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SetListener_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setListener');
          const result = this.impl.setListener(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onDocumentLoadComplete');
          const result = this.impl.onDocumentLoadComplete();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateContentRestrictions');
          const result = this.impl.updateContentRestrictions(params.restrictions);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.saveUrlAs');
          const result = this.impl.saveUrlAs(params.url, params.policy);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SelectionChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.selectionChanged');
          const result = this.impl.selectionChanged(params.left, params.left_height, params.right, params.right_height);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setPluginCanSave');
          const result = this.impl.setPluginCanSave(params.can_save);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onSearchifyStarted');
          const result = this.impl.onSearchifyStarted();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

pdf.mojom.PdfHostReceiver = pdf.mojom.PdfHostReceiver;

pdf.mojom.PdfHostPtr = pdf.mojom.PdfHostRemote;
pdf.mojom.PdfHostRequest = pdf.mojom.PdfHostPendingReceiver;

