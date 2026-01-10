// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/net/mac/mojom/updater_fetcher.mojom
// Module: updater.mojom

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
var updater = updater || {};
updater.mojom = updater.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

updater.mojom.HttpHeaderSpec = { $: {} };
updater.mojom.PostRequestObserver = {};
updater.mojom.PostRequestObserver.$interfaceName = 'updater.mojom.PostRequestObserver';
updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec = { $: {} };
updater.mojom.PostRequestObserver_OnProgress_ParamsSpec = { $: {} };
updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver = {};
updater.mojom.FileDownloadObserver.$interfaceName = 'updater.mojom.FileDownloadObserver';
updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec = { $: {} };
updater.mojom.FetchService = {};
updater.mojom.FetchService.$interfaceName = 'updater.mojom.FetchService';
updater.mojom.FetchService_PostRequest_ParamsSpec = { $: {} };
updater.mojom.FetchService_PostRequest_ResponseParamsSpec = { $: {} };
updater.mojom.FetchService_DownloadToFile_ParamsSpec = { $: {} };
updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec = { $: {} };

// Struct: HttpHeader
mojo.internal.Struct(
    updater.mojom.HttpHeaderSpec, 'updater.mojom.HttpHeader', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PostRequestObserver
mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec, 'updater.mojom.PostRequestObserver_OnResponseStarted_Params', [
      mojo.internal.StructField('content_length_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' }),
      mojo.internal.StructField('http_status_code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('content_length_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnProgress_ParamsSpec, 'updater.mojom.PostRequestObserver_OnProgress_Params', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec, 'updater.mojom.PostRequestObserver_OnRequestComplete_Params', [
      mojo.internal.StructField('response_body', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_etag', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_x_cup_server_proof', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_set_cookie', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('xheader_retry_after_sec_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'xheader_retry_after_sec_$flag', originalFieldName: 'xheader_retry_after_sec' }),
      mojo.internal.StructField('net_error', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('xheader_retry_after_sec_$flag', 44, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'xheader_retry_after_sec_$value', originalFieldName: 'xheader_retry_after_sec' }),
    ],
    [[0, 56]]);

updater.mojom.PostRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.PostRequestObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.PostRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.PostRequestObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.PostRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResponseStarted(http_status_code, content_length) {
    return this.$.onResponseStarted(http_status_code, content_length);
  }
  onProgress(current) {
    return this.$.onProgress(current);
  }
  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    return this.$.onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec);
  }
};

updater.mojom.PostRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PostRequestObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResponseStarted(http_status_code, content_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length],
      false);
  }

  onProgress(current) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      updater.mojom.PostRequestObserver_OnProgress_ParamsSpec,
      null,
      [current],
      false);
  }

  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec,
      null,
      [response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec],
      false);
  }

};

updater.mojom.PostRequestObserver.getRemote = function() {
  let remote = new updater.mojom.PostRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.PostRequestObserver',
    'context');
  return remote.$;
};

updater.mojom.PostRequestObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PostRequestObserver', [
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
        
        // Try Method 0: OnResponseStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponseStarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProgress (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnRequestComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestComplete (2)');
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
          const params = decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStarted');
          const result = this.impl.onResponseStarted(params.http_status_code, params.content_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProgress');
          const result = this.impl.onProgress(params.current);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRequestComplete');
          const result = this.impl.onRequestComplete(params.response_body, params.net_error, params.header_etag, params.header_x_cup_server_proof, params.header_set_cookie, params.xheader_retry_after_sec);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

updater.mojom.PostRequestObserverReceiver = updater.mojom.PostRequestObserverReceiver;

updater.mojom.PostRequestObserverPtr = updater.mojom.PostRequestObserverRemote;
updater.mojom.PostRequestObserverRequest = updater.mojom.PostRequestObserverPendingReceiver;


// Interface: FileDownloadObserver
mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnResponseStarted_Params', [
      mojo.internal.StructField('content_length_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' }),
      mojo.internal.StructField('http_status_code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('content_length_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnProgress_Params', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnDownloadComplete_Params', [
      mojo.internal.StructField('content_size_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_size_$flag', originalFieldName: 'content_size' }),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('content_size_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_size_$value', originalFieldName: 'content_size' }),
    ],
    [[0, 24]]);

updater.mojom.FileDownloadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.FileDownloadObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FileDownloadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.FileDownloadObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.FileDownloadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResponseStarted(http_status_code, content_length) {
    return this.$.onResponseStarted(http_status_code, content_length);
  }
  onProgress(current) {
    return this.$.onProgress(current);
  }
  onDownloadComplete(net_error, content_size) {
    return this.$.onDownloadComplete(net_error, content_size);
  }
};

updater.mojom.FileDownloadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileDownloadObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResponseStarted(http_status_code, content_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length],
      false);
  }

  onProgress(current) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec,
      null,
      [current],
      false);
  }

  onDownloadComplete(net_error, content_size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec,
      null,
      [net_error, content_size],
      false);
  }

};

updater.mojom.FileDownloadObserver.getRemote = function() {
  let remote = new updater.mojom.FileDownloadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FileDownloadObserver',
    'context');
  return remote.$;
};

updater.mojom.FileDownloadObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileDownloadObserver', [
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
        
        // Try Method 0: OnResponseStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponseStarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProgress (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDownloadComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDownloadComplete (2)');
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
          const params = decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStarted');
          const result = this.impl.onResponseStarted(params.http_status_code, params.content_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProgress');
          const result = this.impl.onProgress(params.current);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDownloadComplete');
          const result = this.impl.onDownloadComplete(params.net_error, params.content_size);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

updater.mojom.FileDownloadObserverReceiver = updater.mojom.FileDownloadObserverReceiver;

updater.mojom.FileDownloadObserverPtr = updater.mojom.FileDownloadObserverRemote;
updater.mojom.FileDownloadObserverRequest = updater.mojom.FileDownloadObserverPendingReceiver;


// Interface: FetchService
mojo.internal.Struct(
    updater.mojom.FetchService_PostRequest_ParamsSpec, 'updater.mojom.FetchService_PostRequest_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('post_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('additional_headers', 24, 0, mojo.internal.Array(updater.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    updater.mojom.FetchService_PostRequest_ResponseParamsSpec, 'updater.mojom.FetchService_PostRequest_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.PostRequestObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.FetchService_DownloadToFile_ParamsSpec, 'updater.mojom.FetchService_DownloadToFile_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 8, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec, 'updater.mojom.FetchService_DownloadToFile_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.FileDownloadObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

updater.mojom.FetchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.FetchServiceRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FetchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.FetchServicePendingReceiver,
      handle);
    this.$ = new updater.mojom.FetchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  postRequest(url, post_data, content_type, additional_headers) {
    return this.$.postRequest(url, post_data, content_type, additional_headers);
  }
  downloadToFile(url, output_file) {
    return this.$.downloadToFile(url, output_file);
  }
};

updater.mojom.FetchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FetchService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  postRequest(url, post_data, content_type, additional_headers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater.mojom.FetchService_PostRequest_ParamsSpec,
      updater.mojom.FetchService_PostRequest_ResponseParamsSpec,
      [url, post_data, content_type, additional_headers],
      false);
  }

  downloadToFile(url, output_file) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      updater.mojom.FetchService_DownloadToFile_ParamsSpec,
      updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec,
      [url, output_file],
      false);
  }

};

updater.mojom.FetchService.getRemote = function() {
  let remote = new updater.mojom.FetchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FetchService',
    'context');
  return remote.$;
};

updater.mojom.FetchServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FetchService', [
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
        
        // Try Method 0: PostRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FetchService_PostRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostRequest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DownloadToFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FetchService_DownloadToFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadToFile (1)');
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
          const params = decoder.decodeStructInline(updater.mojom.FetchService_PostRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.postRequest');
          const result = this.impl.postRequest(params.url, params.post_data, params.content_type, params.additional_headers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.FetchService_PostRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FetchService_DownloadToFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadToFile');
          const result = this.impl.downloadToFile(params.url, params.output_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec);
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

updater.mojom.FetchServiceReceiver = updater.mojom.FetchServiceReceiver;

updater.mojom.FetchServicePtr = updater.mojom.FetchServiceRemote;
updater.mojom.FetchServiceRequest = updater.mojom.FetchServicePendingReceiver;

