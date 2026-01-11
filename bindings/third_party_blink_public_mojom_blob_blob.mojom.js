// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/blob/blob.mojom
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
mojo.internal.bindings.network = mojo.internal.bindings.network || {};

mojo.internal.bindings.blink.mojom.BlobReaderClient = {};
mojo.internal.bindings.blink.mojom.BlobReaderClientSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.BlobReaderClient.$interfaceName = 'blink.mojom.BlobReaderClient';
mojo.internal.bindings.blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.BlobReaderClient_OnComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob = {};
mojo.internal.bindings.blink.mojom.BlobSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.Blob.$interfaceName = 'blink.mojom.Blob';
mojo.internal.bindings.blink.mojom.Blob_Clone_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_AsDataPipeGetter_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_ReadAll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_ReadRange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_Load_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec = { $: {} };

// Interface: BlobReaderClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec, 'blink.mojom.BlobReaderClient_OnCalculatedSize_Params', [
      mojo.internal.StructField('arg_total_size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_expected_content_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.BlobReaderClient_OnComplete_ParamsSpec, 'blink.mojom.BlobReaderClient_OnComplete_Params', [
      mojo.internal.StructField('arg_data_length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.BlobReaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.BlobReaderClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobReaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.BlobReaderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.BlobReaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCalculatedSize(arg_total_size, arg_expected_content_size) {
    return this.$.onCalculatedSize(arg_total_size, arg_expected_content_size);
  }
  onComplete(arg_status, arg_data_length) {
    return this.$.onComplete(arg_status, arg_data_length);
  }
};

mojo.internal.bindings.blink.mojom.BlobReaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.BlobReaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCalculatedSize(arg_total_size, arg_expected_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec,
      null,
      [arg_total_size, arg_expected_content_size],
      false);
  }

  onComplete(arg_status, arg_data_length) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.BlobReaderClient_OnComplete_ParamsSpec,
      null,
      [arg_status, arg_data_length],
      false);
  }

};

mojo.internal.bindings.blink.mojom.BlobReaderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.BlobReaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobReaderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.BlobReaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.BlobReaderClient', [
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
        
        // Try Method 0: OnCalculatedSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCalculatedSize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.BlobReaderClient_OnComplete_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCalculatedSize');
          const result = this.impl.onCalculatedSize(params.arg_total_size, params.arg_expected_content_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.BlobReaderClient_OnComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.arg_status, params.arg_data_length);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.BlobReaderClientReceiver = mojo.internal.bindings.blink.mojom.BlobReaderClientReceiver;

mojo.internal.bindings.blink.mojom.BlobReaderClientPtr = mojo.internal.bindings.blink.mojom.BlobReaderClientRemote;
mojo.internal.bindings.blink.mojom.BlobReaderClientRequest = mojo.internal.bindings.blink.mojom.BlobReaderClientPendingReceiver;


// Interface: Blob
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_Clone_ParamsSpec, 'blink.mojom.Blob_Clone_Params', [
      mojo.internal.StructField('arg_blob', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.BlobRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_AsDataPipeGetter_ParamsSpec, 'blink.mojom.Blob_AsDataPipeGetter_Params', [
      mojo.internal.StructField('arg_data_pipe_getter', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.DataPipeGetterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_ReadAll_ParamsSpec, 'blink.mojom.Blob_ReadAll_Params', [
      mojo.internal.StructField('arg_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobReaderClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_ReadRange_ParamsSpec, 'blink.mojom.Blob_ReadRange_Params', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobReaderClientRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_Load_ParamsSpec, 'blink.mojom.Blob_Load_Params', [
      mojo.internal.StructField('arg_loader', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_request_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 16, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ParamsSpec, 'blink.mojom.Blob_ReadSideData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ResponseParamsSpec, 'blink.mojom.Blob_ReadSideData_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ParamsSpec, 'blink.mojom.Blob_CaptureSnapshot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec, 'blink.mojom.Blob_CaptureSnapshot_ResponseParams', [
      mojo.internal.StructField('arg_length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_modification_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ParamsSpec, 'blink.mojom.Blob_GetInternalUUID_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec, 'blink.mojom.Blob_GetInternalUUID_ResponseParams', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.BlobPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.BlobRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Blob';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.BlobPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.BlobRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  clone(arg_blob) {
    return this.$.clone(arg_blob);
  }
  asDataPipeGetter(arg_data_pipe_getter) {
    return this.$.asDataPipeGetter(arg_data_pipe_getter);
  }
  readAll(arg_pipe, arg_client) {
    return this.$.readAll(arg_pipe, arg_client);
  }
  readRange(arg_offset, arg_length, arg_pipe, arg_client) {
    return this.$.readRange(arg_offset, arg_length, arg_pipe, arg_client);
  }
  load(arg_loader, arg_request_method, arg_headers, arg_client) {
    return this.$.load(arg_loader, arg_request_method, arg_headers, arg_client);
  }
  readSideData() {
    return this.$.readSideData();
  }
  captureSnapshot() {
    return this.$.captureSnapshot();
  }
  getInternalUUID() {
    return this.$.getInternalUUID();
  }
};

mojo.internal.bindings.blink.mojom.BlobRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.Blob', [
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

  clone(arg_blob) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_Clone_ParamsSpec,
      null,
      [arg_blob],
      false);
  }

  asDataPipeGetter(arg_data_pipe_getter) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_AsDataPipeGetter_ParamsSpec,
      null,
      [arg_data_pipe_getter],
      false);
  }

  readAll(arg_pipe, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_ReadAll_ParamsSpec,
      null,
      [arg_pipe, arg_client],
      false);
  }

  readRange(arg_offset, arg_length, arg_pipe, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_ReadRange_ParamsSpec,
      null,
      [arg_offset, arg_length, arg_pipe, arg_client],
      false);
  }

  load(arg_loader, arg_request_method, arg_headers, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_Load_ParamsSpec,
      null,
      [arg_loader, arg_request_method, arg_headers, arg_client],
      false);
  }

  readSideData() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ParamsSpec,
      mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ResponseParamsSpec,
      [],
      false);
  }

  captureSnapshot() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ParamsSpec,
      mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec,
      [],
      false);
  }

  getInternalUUID() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ParamsSpec,
      mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.Blob.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.BlobRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Blob',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.BlobReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.Blob', [
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
        
        // Try Method 0: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_Clone_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AsDataPipeGetter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_AsDataPipeGetter_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AsDataPipeGetter (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReadAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_ReadAll_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadAll (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReadRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_ReadRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadRange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Load
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_Load_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Load (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReadSideData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadSideData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CaptureSnapshot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CaptureSnapshot (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetInternalUUID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInternalUUID (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.arg_blob);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_AsDataPipeGetter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.asDataPipeGetter');
          const result = this.impl.asDataPipeGetter(params.arg_data_pipe_getter);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_ReadAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readAll');
          const result = this.impl.readAll(params.arg_pipe, params.arg_client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_ReadRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readRange');
          const result = this.impl.readRange(params.arg_offset, params.arg_length, params.arg_pipe, params.arg_client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_Load_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.load');
          const result = this.impl.load(params.arg_loader, params.arg_request_method, params.arg_headers, params.arg_client);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readSideData');
          const result = this.impl.readSideData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.Blob_ReadSideData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadSideData FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.captureSnapshot');
          const result = this.impl.captureSnapshot();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CaptureSnapshot FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInternalUUID');
          const result = this.impl.getInternalUUID();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetInternalUUID FAILED:', e));
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

mojo.internal.bindings.blink.mojom.BlobReceiver = mojo.internal.bindings.blink.mojom.BlobReceiver;

mojo.internal.bindings.blink.mojom.BlobPtr = mojo.internal.bindings.blink.mojom.BlobRemote;
mojo.internal.bindings.blink.mojom.BlobRequest = mojo.internal.bindings.blink.mojom.BlobPendingReceiver;

