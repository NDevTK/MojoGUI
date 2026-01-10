// Auto-generated MojoJS binding
// Source: chromium_src/components/services/print_compositor/public/mojom/print_compositor.mojom
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
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var ax = ax || {};
var url = url || {};
var watermark = watermark || {};

printing.mojom.StatusSpec = { $: mojo.internal.Enum() };
printing.mojom.DocumentTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.PrintCompositor = {};
printing.mojom.PrintCompositor.$interfaceName = 'printing.mojom.PrintCompositor';
printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositePage_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetTitle_ParamsSpec = { $: {} };
printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec = { $: {} };

// Enum: Status
printing.mojom.Status = {
  kSuccess: 0,
  kHandleMapError: 1,
  kContentFormatError: 2,
  kCompositingFailure: 3,
};

// Enum: DocumentType
printing.mojom.DocumentType = {
  kPDF: 0,
  kXPS: 1,
};

// Interface: PrintCompositor
mojo.internal.Struct(
    printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec, 'printing.mojom.PrintCompositor_NotifyUnavailableSubframe_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec, 'printing.mojom.PrintCompositor_AddSubframeContent_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('serialized_content', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 16, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec, 'printing.mojom.PrintCompositor_SetAccessibilityTree_Params', [
      mojo.internal.StructField('accessibility_tree', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositePage_ParamsSpec, 'printing.mojom.PrintCompositor_CompositePage_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sk_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 16, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec, 'printing.mojom.PrintCompositor_CompositePage_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec, 'printing.mojom.PrintCompositor_CompositeDocument_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sk_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_content_info', 16, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('document_type', 24, 0, printing.mojom.DocumentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec, 'printing.mojom.PrintCompositor_CompositeDocument_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec, 'printing.mojom.PrintCompositor_PrepareToCompositeDocument_Params', [
      mojo.internal.StructField('document_type', 0, 0, printing.mojom.DocumentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec, 'printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec, 'printing.mojom.PrintCompositor_FinishDocumentComposition_Params', [
      mojo.internal.StructField('pages_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec, 'printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec, 'printing.mojom.PrintCompositor_SetWebContentsURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec, 'printing.mojom.PrintCompositor_SetUserAgent_Params', [
      mojo.internal.StructField('user_agent', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec, 'printing.mojom.PrintCompositor_SetGenerateDocumentOutline_Params', [
      mojo.internal.StructField('generate_document_outline', 0, 0, printing.mojom.GenerateDocumentOutlineSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetTitle_ParamsSpec, 'printing.mojom.PrintCompositor_SetTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec, 'printing.mojom.PrintCompositor_SetWatermarkBlock_Params', [
      mojo.internal.StructField('watermark_block', 0, 0, watermark.mojom.WatermarkBlockSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.PrintCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PrintCompositorRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PrintCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PrintCompositorPendingReceiver,
      handle);
    this.$ = new printing.mojom.PrintCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyUnavailableSubframe(frame_guid) {
    return this.$.notifyUnavailableSubframe(frame_guid);
  }
  addSubframeContent(frame_guid, serialized_content, subframe_content_info) {
    return this.$.addSubframeContent(frame_guid, serialized_content, subframe_content_info);
  }
  setAccessibilityTree(accessibility_tree) {
    return this.$.setAccessibilityTree(accessibility_tree);
  }
  compositePage(frame_guid, sk_region, subframe_content_info) {
    return this.$.compositePage(frame_guid, sk_region, subframe_content_info);
  }
  compositeDocument(frame_guid, sk_region, subframe_content_info, document_type) {
    return this.$.compositeDocument(frame_guid, sk_region, subframe_content_info, document_type);
  }
  prepareToCompositeDocument(document_type) {
    return this.$.prepareToCompositeDocument(document_type);
  }
  finishDocumentComposition(pages_count) {
    return this.$.finishDocumentComposition(pages_count);
  }
  setWebContentsURL(url) {
    return this.$.setWebContentsURL(url);
  }
  setUserAgent(user_agent) {
    return this.$.setUserAgent(user_agent);
  }
  setGenerateDocumentOutline(generate_document_outline) {
    return this.$.setGenerateDocumentOutline(generate_document_outline);
  }
  setTitle(title) {
    return this.$.setTitle(title);
  }
  setWatermarkBlock(watermark_block) {
    return this.$.setWatermarkBlock(watermark_block);
  }
};

printing.mojom.PrintCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintCompositor', [
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

  notifyUnavailableSubframe(frame_guid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec,
      null,
      [frame_guid],
      false);
  }

  addSubframeContent(frame_guid, serialized_content, subframe_content_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec,
      null,
      [frame_guid, serialized_content, subframe_content_info],
      false);
  }

  setAccessibilityTree(accessibility_tree) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec,
      null,
      [accessibility_tree],
      false);
  }

  compositePage(frame_guid, sk_region, subframe_content_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      printing.mojom.PrintCompositor_CompositePage_ParamsSpec,
      printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info],
      false);
  }

  compositeDocument(frame_guid, sk_region, subframe_content_info, document_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec,
      [frame_guid, sk_region, subframe_content_info, document_type],
      false);
  }

  prepareToCompositeDocument(document_type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec,
      printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec,
      [document_type],
      false);
  }

  finishDocumentComposition(pages_count) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec,
      printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec,
      [pages_count],
      false);
  }

  setWebContentsURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec,
      null,
      [url],
      false);
  }

  setUserAgent(user_agent) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec,
      null,
      [user_agent],
      false);
  }

  setGenerateDocumentOutline(generate_document_outline) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec,
      null,
      [generate_document_outline],
      false);
  }

  setTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      printing.mojom.PrintCompositor_SetTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setWatermarkBlock(watermark_block) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec,
      null,
      [watermark_block],
      false);
  }

};

printing.mojom.PrintCompositor.getRemote = function() {
  let remote = new printing.mojom.PrintCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PrintCompositor',
    'context');
  return remote.$;
};

printing.mojom.PrintCompositorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintCompositor', [
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
        
        // Try Method 0: NotifyUnavailableSubframe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyUnavailableSubframe (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddSubframeContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSubframeContent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetAccessibilityTree
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccessibilityTree (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CompositePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CompositePage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CompositeDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CompositeDocument (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PrepareToCompositeDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareToCompositeDocument (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FinishDocumentComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinishDocumentComposition (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetWebContentsURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebContentsURL (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetUserAgent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserAgent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetGenerateDocumentOutline
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGenerateDocumentOutline (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetTitle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTitle (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetWatermarkBlock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWatermarkBlock (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_NotifyUnavailableSubframe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyUnavailableSubframe');
          const result = this.impl.notifyUnavailableSubframe(params.frame_guid);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_AddSubframeContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addSubframeContent');
          const result = this.impl.addSubframeContent(params.frame_guid, params.serialized_content, params.subframe_content_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetAccessibilityTree_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAccessibilityTree');
          const result = this.impl.setAccessibilityTree(params.accessibility_tree);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.compositePage');
          const result = this.impl.compositePage(params.frame_guid, params.sk_region, params.subframe_content_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_CompositePage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_CompositeDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.compositeDocument');
          const result = this.impl.compositeDocument(params.frame_guid, params.sk_region, params.subframe_content_info, params.document_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_CompositeDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_PrepareToCompositeDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareToCompositeDocument');
          const result = this.impl.prepareToCompositeDocument(params.document_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_PrepareToCompositeDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_FinishDocumentComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finishDocumentComposition');
          const result = this.impl.finishDocumentComposition(params.pages_count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PrintCompositor_FinishDocumentComposition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWebContentsURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWebContentsURL');
          const result = this.impl.setWebContentsURL(params.url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetUserAgent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserAgent');
          const result = this.impl.setUserAgent(params.user_agent);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetGenerateDocumentOutline_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setGenerateDocumentOutline');
          const result = this.impl.setGenerateDocumentOutline(params.generate_document_outline);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTitle');
          const result = this.impl.setTitle(params.title);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PrintCompositor_SetWatermarkBlock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWatermarkBlock');
          const result = this.impl.setWatermarkBlock(params.watermark_block);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.PrintCompositorReceiver = printing.mojom.PrintCompositorReceiver;

printing.mojom.PrintCompositorPtr = printing.mojom.PrintCompositorRemote;
printing.mojom.PrintCompositorRequest = printing.mojom.PrintCompositorPendingReceiver;

