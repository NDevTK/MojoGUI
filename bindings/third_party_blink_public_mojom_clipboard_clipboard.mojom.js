// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/clipboard/clipboard.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.ClipboardFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ClipboardBufferSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PlatformClipboardPermissionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ClipboardFilesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardListener = {};
mojo.internal.bindings.blink.mojom.ClipboardListenerSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ClipboardListener.$interfaceName = 'blink.mojom.ClipboardListener';
mojo.internal.bindings.blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost = {};
mojo.internal.bindings.blink.mojom.ClipboardHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ClipboardHost.$interfaceName = 'blink.mojom.ClipboardHost';
mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteText_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteHtml_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSvg_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteImage_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_CommitWrite_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec = { $: {} };

mojo.internal.bindings.blink.mojom.kMaxFormatSize = 1024;

mojo.internal.bindings.blink.mojom.kMaxDataSize = 1073741824;

// Enum: ClipboardFormat
mojo.internal.bindings.blink.mojom.ClipboardFormat = {
  kPlaintext: 0,
  kHtml: 1,
  kSmartPaste: 2,
  kBookmark: 3,
};

// Enum: ClipboardBuffer
mojo.internal.bindings.blink.mojom.ClipboardBuffer = {
  kStandard: 0,
  kSelection: 1,
};

// Enum: PlatformClipboardPermissionState
mojo.internal.bindings.blink.mojom.PlatformClipboardPermissionState = {
  kAllow: 0,
  kAsk: 1,
  kDeny: 2,
};

// Struct: ClipboardFiles
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardFilesSpec, 'blink.mojom.ClipboardFiles', [
      mojo.internal.StructField('arg_files', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.DataTransferFileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_file_system_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ClipboardListener
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec, 'blink.mojom.ClipboardListener_OnClipboardDataChanged_Params', [
      mojo.internal.StructField('arg_types', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_change_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.ClipboardListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ClipboardListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ClipboardListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ClipboardListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ClipboardListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClipboardDataChanged(arg_types, arg_change_id) {
    return this.$.onClipboardDataChanged(arg_types, arg_change_id);
  }
};

mojo.internal.bindings.blink.mojom.ClipboardListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ClipboardListener', [
      { explicit: null },
    ]);
  }

  onClipboardDataChanged(arg_types, arg_change_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec,
      null,
      [arg_types, arg_change_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ClipboardListener.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ClipboardListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ClipboardListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ClipboardListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ClipboardListener', [
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
        
        // Try Method 0: OnClipboardDataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClipboardDataChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClipboardDataChanged');
          const result = this.impl.onClipboardDataChanged(params.arg_types, params.arg_change_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ClipboardListenerReceiver = mojo.internal.bindings.blink.mojom.ClipboardListenerReceiver;

mojo.internal.bindings.blink.mojom.ClipboardListenerPtr = mojo.internal.bindings.blink.mojom.ClipboardListenerRemote;
mojo.internal.bindings.blink.mojom.ClipboardListenerRequest = mojo.internal.bindings.blink.mojom.ClipboardListenerPendingReceiver;


// Interface: ClipboardHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec, 'blink.mojom.ClipboardHost_GetSequenceNumber_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec, 'blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec, 'blink.mojom.ClipboardHost_IsFormatAvailable_Params', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer', 8, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec, 'blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableTypes_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParams', [
      mojo.internal.StructField('arg_types', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ParamsSpec, 'blink.mojom.ClipboardHost_ReadText_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadText_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ParamsSpec, 'blink.mojom.ClipboardHost_ReadHtml_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadHtml_ResponseParams', [
      mojo.internal.StructField('arg_markup', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fragment_start', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fragment_end', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ParamsSpec, 'blink.mojom.ClipboardHost_ReadSvg_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadSvg_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ParamsSpec, 'blink.mojom.ClipboardHost_ReadRtf_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadRtf_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ParamsSpec, 'blink.mojom.ClipboardHost_ReadPng_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadPng_ResponseParams', [
      mojo.internal.StructField('arg_png', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ParamsSpec, 'blink.mojom.ClipboardHost_ReadFiles_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadFiles_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardFilesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec, 'blink.mojom.ClipboardHost_ReadDataTransferCustomData_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParams', [
      mojo.internal.StructField('arg_format_types', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec, 'blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_Params', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteText_ParamsSpec, 'blink.mojom.ClipboardHost_WriteText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteHtml_ParamsSpec, 'blink.mojom.ClipboardHost_WriteHtml_Params', [
      mojo.internal.StructField('arg_markup', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSvg_ParamsSpec, 'blink.mojom.ClipboardHost_WriteSvg_Params', [
      mojo.internal.StructField('arg_markup', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec, 'blink.mojom.ClipboardHost_WriteSmartPasteMarker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec, 'blink.mojom.ClipboardHost_WriteDataTransferCustomData_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Map(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec, 'blink.mojom.ClipboardHost_WriteBookmark_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteImage_ParamsSpec, 'blink.mojom.ClipboardHost_WriteImage_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec, 'blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_Params', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_CommitWrite_ParamsSpec, 'blink.mojom.ClipboardHost_CommitWrite_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec, 'blink.mojom.ClipboardHost_WriteStringToFindPboard_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec, 'blink.mojom.ClipboardHost_GetPlatformPermissionState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec, 'blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.blink.mojom.PlatformClipboardPermissionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec, 'blink.mojom.ClipboardHost_RegisterClipboardListener_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.ClipboardListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.ClipboardHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ClipboardHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ClipboardHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ClipboardHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ClipboardHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSequenceNumber(arg_buffer) {
    return this.$.getSequenceNumber(arg_buffer);
  }
  isFormatAvailable(arg_format, arg_buffer) {
    return this.$.isFormatAvailable(arg_format, arg_buffer);
  }
  readAvailableTypes(arg_buffer) {
    return this.$.readAvailableTypes(arg_buffer);
  }
  readText(arg_buffer) {
    return this.$.readText(arg_buffer);
  }
  readHtml(arg_buffer) {
    return this.$.readHtml(arg_buffer);
  }
  readSvg(arg_buffer) {
    return this.$.readSvg(arg_buffer);
  }
  readRtf(arg_buffer) {
    return this.$.readRtf(arg_buffer);
  }
  readPng(arg_buffer) {
    return this.$.readPng(arg_buffer);
  }
  readFiles(arg_buffer) {
    return this.$.readFiles(arg_buffer);
  }
  readDataTransferCustomData(arg_buffer, arg_type) {
    return this.$.readDataTransferCustomData(arg_buffer, arg_type);
  }
  readAvailableCustomAndStandardFormats() {
    return this.$.readAvailableCustomAndStandardFormats();
  }
  readUnsanitizedCustomFormat(arg_format) {
    return this.$.readUnsanitizedCustomFormat(arg_format);
  }
  writeText(arg_text) {
    return this.$.writeText(arg_text);
  }
  writeHtml(arg_markup, arg_url) {
    return this.$.writeHtml(arg_markup, arg_url);
  }
  writeSvg(arg_markup) {
    return this.$.writeSvg(arg_markup);
  }
  writeSmartPasteMarker() {
    return this.$.writeSmartPasteMarker();
  }
  writeDataTransferCustomData(arg_data) {
    return this.$.writeDataTransferCustomData(arg_data);
  }
  writeBookmark(arg_url, arg_title) {
    return this.$.writeBookmark(arg_url, arg_title);
  }
  writeImage(arg_image) {
    return this.$.writeImage(arg_image);
  }
  writeUnsanitizedCustomFormat(arg_format, arg_data) {
    return this.$.writeUnsanitizedCustomFormat(arg_format, arg_data);
  }
  commitWrite() {
    return this.$.commitWrite();
  }
  writeStringToFindPboard(arg_text) {
    return this.$.writeStringToFindPboard(arg_text);
  }
  getPlatformPermissionState() {
    return this.$.getPlatformPermissionState();
  }
  registerClipboardListener(arg_listener) {
    return this.$.registerClipboardListener(arg_listener);
  }
};

mojo.internal.bindings.blink.mojom.ClipboardHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ClipboardHost', [
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

  getSequenceNumber(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  isFormatAvailable(arg_format, arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec,
      [arg_format, arg_buffer],
      false);
  }

  readAvailableTypes(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  readText(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  readHtml(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  readSvg(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  readRtf(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  readPng(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  readFiles(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  readDataTransferCustomData(arg_buffer, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec,
      [arg_buffer, arg_type],
      false);
  }

  readAvailableCustomAndStandardFormats() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec,
      [],
      false);
  }

  readUnsanitizedCustomFormat(arg_format) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec,
      [arg_format],
      false);
  }

  writeText(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteText_ParamsSpec,
      null,
      [arg_text],
      false);
  }

  writeHtml(arg_markup, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteHtml_ParamsSpec,
      null,
      [arg_markup, arg_url],
      false);
  }

  writeSvg(arg_markup) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSvg_ParamsSpec,
      null,
      [arg_markup],
      false);
  }

  writeSmartPasteMarker() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec,
      null,
      [],
      false);
  }

  writeDataTransferCustomData(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec,
      null,
      [arg_data],
      false);
  }

  writeBookmark(arg_url, arg_title) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec,
      null,
      [arg_url, arg_title],
      false);
  }

  writeImage(arg_image) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteImage_ParamsSpec,
      null,
      [arg_image],
      false);
  }

  writeUnsanitizedCustomFormat(arg_format, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec,
      null,
      [arg_format, arg_data],
      false);
  }

  commitWrite() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_CommitWrite_ParamsSpec,
      null,
      [],
      false);
  }

  writeStringToFindPboard(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec,
      null,
      [arg_text],
      false);
  }

  getPlatformPermissionState() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec,
      [],
      false);
  }

  registerClipboardListener(arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec,
      null,
      [arg_listener],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ClipboardHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ClipboardHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ClipboardHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ClipboardHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ClipboardHost', [
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
        
        // Try Method 0: GetSequenceNumber
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSequenceNumber (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsFormatAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsFormatAvailable (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReadAvailableTypes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadAvailableTypes (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReadText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadText (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReadHtml
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadHtml (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReadSvg
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadSvg (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ReadRtf
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadRtf (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReadPng
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadPng (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReadFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadFiles (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ReadDataTransferCustomData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadDataTransferCustomData (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ReadAvailableCustomAndStandardFormats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadAvailableCustomAndStandardFormats (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ReadUnsanitizedCustomFormat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadUnsanitizedCustomFormat (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: WriteText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteText (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: WriteHtml
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteHtml_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteHtml (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: WriteSvg
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSvg_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSvg (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: WriteSmartPasteMarker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSmartPasteMarker (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: WriteDataTransferCustomData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteDataTransferCustomData (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: WriteBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteBookmark (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: WriteImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteImage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteImage (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: WriteUnsanitizedCustomFormat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteUnsanitizedCustomFormat (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: CommitWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_CommitWrite_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitWrite (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: WriteStringToFindPboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteStringToFindPboard (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: GetPlatformPermissionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPlatformPermissionState (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: RegisterClipboardListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterClipboardListener (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSequenceNumber');
          const result = this.impl.getSequenceNumber(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSequenceNumber FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isFormatAvailable');
          const result = this.impl.isFormatAvailable(params.arg_format, params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsFormatAvailable FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readAvailableTypes');
          const result = this.impl.readAvailableTypes(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadAvailableTypes FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readText');
          const result = this.impl.readText(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadText FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readHtml');
          const result = this.impl.readHtml(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadHtml FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readSvg');
          const result = this.impl.readSvg(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadSvg FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readRtf');
          const result = this.impl.readRtf(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadRtf FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readPng');
          const result = this.impl.readPng(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadPng FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readFiles');
          const result = this.impl.readFiles(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadFiles FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readDataTransferCustomData');
          const result = this.impl.readDataTransferCustomData(params.arg_buffer, params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadDataTransferCustomData FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readAvailableCustomAndStandardFormats');
          const result = this.impl.readAvailableCustomAndStandardFormats();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadAvailableCustomAndStandardFormats FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readUnsanitizedCustomFormat');
          const result = this.impl.readUnsanitizedCustomFormat(params.arg_format);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadUnsanitizedCustomFormat FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeText');
          const result = this.impl.writeText(params.arg_text);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteHtml_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeHtml');
          const result = this.impl.writeHtml(params.arg_markup, params.arg_url);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSvg_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeSvg');
          const result = this.impl.writeSvg(params.arg_markup);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeSmartPasteMarker');
          const result = this.impl.writeSmartPasteMarker();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeDataTransferCustomData');
          const result = this.impl.writeDataTransferCustomData(params.arg_data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeBookmark');
          const result = this.impl.writeBookmark(params.arg_url, params.arg_title);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeImage');
          const result = this.impl.writeImage(params.arg_image);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeUnsanitizedCustomFormat');
          const result = this.impl.writeUnsanitizedCustomFormat(params.arg_format, params.arg_data);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_CommitWrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitWrite');
          const result = this.impl.commitWrite();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeStringToFindPboard');
          const result = this.impl.writeStringToFindPboard(params.arg_text);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPlatformPermissionState');
          const result = this.impl.getPlatformPermissionState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPlatformPermissionState FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerClipboardListener');
          const result = this.impl.registerClipboardListener(params.arg_listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ClipboardHostReceiver = mojo.internal.bindings.blink.mojom.ClipboardHostReceiver;

mojo.internal.bindings.blink.mojom.ClipboardHostPtr = mojo.internal.bindings.blink.mojom.ClipboardHostRemote;
mojo.internal.bindings.blink.mojom.ClipboardHostRequest = mojo.internal.bindings.blink.mojom.ClipboardHostPendingReceiver;

