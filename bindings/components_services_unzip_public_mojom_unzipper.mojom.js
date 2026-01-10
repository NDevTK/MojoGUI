// Auto-generated MojoJS binding
// Source: chromium_src/components/services/unzip/public/mojom/unzipper.mojom
// Module: unzip.mojom

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
var unzip = unzip || {};
unzip.mojom = unzip.mojom || {};
var storage = storage || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

unzip.mojom.UnzipOptionsSpec = { $: {} };
unzip.mojom.InfoSpec = { $: {} };
unzip.mojom.UnzipFilter = {};
unzip.mojom.UnzipFilter.$interfaceName = 'unzip.mojom.UnzipFilter';
unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec = { $: {} };
unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec = { $: {} };
unzip.mojom.UnzipListener = {};
unzip.mojom.UnzipListener.$interfaceName = 'unzip.mojom.UnzipListener';
unzip.mojom.UnzipListener_OnProgress_ParamsSpec = { $: {} };
unzip.mojom.Unzipper = {};
unzip.mojom.Unzipper.$interfaceName = 'unzip.mojom.Unzipper';
unzip.mojom.Unzipper_Unzip_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_Unzip_ResponseParamsSpec = { $: {} };
unzip.mojom.Unzipper_DetectEncoding_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec = { $: {} };
unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec = { $: {} };
unzip.mojom.Unzipper_DecodeXz_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec = { $: {} };

// Struct: UnzipOptions
mojo.internal.Struct(
    unzip.mojom.UnzipOptionsSpec, 'unzip.mojom.UnzipOptions', [
      mojo.internal.StructField('encoding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Info
mojo.internal.Struct(
    unzip.mojom.InfoSpec, 'unzip.mojom.Info', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size_is_valid', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_encrypted', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uses_aes_encryption', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UnzipFilter
mojo.internal.Struct(
    unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec, 'unzip.mojom.UnzipFilter_ShouldUnzipFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec, 'unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

unzip.mojom.UnzipFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.UnzipFilterRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.UnzipFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.UnzipFilterPendingReceiver,
      handle);
    this.$ = new unzip.mojom.UnzipFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.UnzipFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UnzipFilter', [
      { explicit: null },
    ]);
  }

  shouldUnzipFile(path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec,
      unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec,
      [path],
      false);
  }

};

unzip.mojom.UnzipFilter.getRemote = function() {
  let remote = new unzip.mojom.UnzipFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.UnzipFilter',
    'context');
  return remote.$;
};

unzip.mojom.UnzipFilterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UnzipFilter', [
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
        
        // Try Method 0: ShouldUnzipFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldUnzipFile (0)');
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
          const params = decoder.decodeStructInline(unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldUnzipFile');
          const result = this.impl.shouldUnzipFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec);
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

unzip.mojom.UnzipFilterReceiver = unzip.mojom.UnzipFilterReceiver;

unzip.mojom.UnzipFilterPtr = unzip.mojom.UnzipFilterRemote;
unzip.mojom.UnzipFilterRequest = unzip.mojom.UnzipFilterPendingReceiver;


// Interface: UnzipListener
mojo.internal.Struct(
    unzip.mojom.UnzipListener_OnProgress_ParamsSpec, 'unzip.mojom.UnzipListener_OnProgress_Params', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

unzip.mojom.UnzipListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.UnzipListenerRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.UnzipListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.UnzipListenerPendingReceiver,
      handle);
    this.$ = new unzip.mojom.UnzipListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.UnzipListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UnzipListener', [
      { explicit: null },
    ]);
  }

  onProgress(bytes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      unzip.mojom.UnzipListener_OnProgress_ParamsSpec,
      null,
      [bytes],
      false);
  }

};

unzip.mojom.UnzipListener.getRemote = function() {
  let remote = new unzip.mojom.UnzipListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.UnzipListener',
    'context');
  return remote.$;
};

unzip.mojom.UnzipListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UnzipListener', [
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
        
        // Try Method 0: OnProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unzip.mojom.UnzipListener_OnProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProgress (0)');
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
          const params = decoder.decodeStructInline(unzip.mojom.UnzipListener_OnProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProgress');
          const result = this.impl.onProgress(params.bytes);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

unzip.mojom.UnzipListenerReceiver = unzip.mojom.UnzipListenerReceiver;

unzip.mojom.UnzipListenerPtr = unzip.mojom.UnzipListenerRemote;
unzip.mojom.UnzipListenerRequest = unzip.mojom.UnzipListenerPendingReceiver;


// Interface: Unzipper
mojo.internal.Struct(
    unzip.mojom.Unzipper_Unzip_ParamsSpec, 'unzip.mojom.Unzipper_Unzip_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_dir', 8, 0, mojo.internal.InterfaceProxy(storage.mojom.DirectoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, unzip.mojom.UnzipOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo.internal.InterfaceProxy(unzip.mojom.UnzipFilterSpec), null, true, 0, undefined),
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(unzip.mojom.UnzipListenerSpec), null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_Unzip_ResponseParamsSpec, 'unzip.mojom.Unzipper_Unzip_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DetectEncoding_ParamsSpec, 'unzip.mojom.Unzipper_DetectEncoding_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec, 'unzip.mojom.Unzipper_DetectEncoding_ResponseParams', [
      mojo.internal.StructField('encoding', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec, 'unzip.mojom.Unzipper_GetExtractedInfo_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec, 'unzip.mojom.Unzipper_GetExtractedInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, unzip.mojom.InfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DecodeXz_ParamsSpec, 'unzip.mojom.Unzipper_DecodeXz_Params', [
      mojo.internal.StructField('in_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('out_file', 8, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec, 'unzip.mojom.Unzipper_DecodeXz_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

unzip.mojom.UnzipperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.UnzipperRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.Unzipper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.UnzipperPendingReceiver,
      handle);
    this.$ = new unzip.mojom.UnzipperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.UnzipperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Unzipper', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  unzip(zip_file, output_dir, options, filter, listener) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      unzip.mojom.Unzipper_Unzip_ParamsSpec,
      unzip.mojom.Unzipper_Unzip_ResponseParamsSpec,
      [zip_file, output_dir, options, filter, listener],
      false);
  }

  detectEncoding(zip_file) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      unzip.mojom.Unzipper_DetectEncoding_ParamsSpec,
      unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec,
      [zip_file],
      false);
  }

  getExtractedInfo(zip_file) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec,
      unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec,
      [zip_file],
      false);
  }

  decodeXz(in_file, out_file) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      unzip.mojom.Unzipper_DecodeXz_ParamsSpec,
      unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec,
      [in_file, out_file],
      false);
  }

};

unzip.mojom.Unzipper.getRemote = function() {
  let remote = new unzip.mojom.UnzipperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.Unzipper',
    'context');
  return remote.$;
};

unzip.mojom.UnzipperReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Unzipper', [
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
        
        // Try Method 0: Unzip
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unzip.mojom.Unzipper_Unzip_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unzip (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DetectEncoding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unzip.mojom.Unzipper_DetectEncoding_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetectEncoding (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetExtractedInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetExtractedInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DecodeXz
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unzip.mojom.Unzipper_DecodeXz_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecodeXz (3)');
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
          const params = decoder.decodeStructInline(unzip.mojom.Unzipper_Unzip_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unzip');
          const result = this.impl.unzip(params.zip_file, params.output_dir, params.options, params.filter, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_Unzip_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unzip.mojom.Unzipper_DetectEncoding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detectEncoding');
          const result = this.impl.detectEncoding(params.zip_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getExtractedInfo');
          const result = this.impl.getExtractedInfo(params.zip_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unzip.mojom.Unzipper_DecodeXz_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decodeXz');
          const result = this.impl.decodeXz(params.in_file, params.out_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec);
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

unzip.mojom.UnzipperReceiver = unzip.mojom.UnzipperReceiver;

unzip.mojom.UnzipperPtr = unzip.mojom.UnzipperRemote;
unzip.mojom.UnzipperRequest = unzip.mojom.UnzipperPendingReceiver;

