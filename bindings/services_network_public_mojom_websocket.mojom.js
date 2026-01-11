// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/websocket.mojom
 // Module: network.mojom

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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.WebSocketMessageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.HttpHeaderSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketHandshakeRequestSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketHandshakeResponseSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler = {};
mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler.$interfaceName = 'network.mojom.WebSocketAuthenticationHandler';
mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketHandshakeClient = {};
mojo.internal.bindings.network.mojom.WebSocketHandshakeClient.$interfaceName = 'network.mojom.WebSocketHandshakeClient';
mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketClient = {};
mojo.internal.bindings.network.mojom.WebSocketClient.$interfaceName = 'network.mojom.WebSocketClient';
mojo.internal.bindings.network.mojom.WebSocketClient_OnDataFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketClient_OnDropChannel_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocket = {};
mojo.internal.bindings.network.mojom.WebSocket.$interfaceName = 'network.mojom.WebSocket';
mojo.internal.bindings.network.mojom.WebSocket_SendMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocket_StartReceiving_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WebSocket_StartClosingHandshake_ParamsSpec = { $: {} };

// Enum: WebSocketMessageType
mojo.internal.bindings.network.mojom.WebSocketMessageType = {
  CONTINUATION: 0,
  TEXT: 1,
  BINARY: 2,
  LAST: 2,
};

// Struct: HttpHeader
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpHeaderSpec, 'network.mojom.HttpHeader', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebSocketHandshakeRequest
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketHandshakeRequestSpec, 'network.mojom.WebSocketHandshakeRequest', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_headers_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebSocketHandshakeResponse
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketHandshakeResponseSpec, 'network.mojom.WebSocketHandshakeResponse', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_version', 8, 0, mojo.internal.bindings.network.mojom.HttpVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_endpoint', 24, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 32, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_headers_text', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_protocol', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_extensions', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: WebSocketAuthenticationHandler
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec, 'network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.network.mojom.AuthChallengeInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 8, 0, mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_endpoint', 16, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec, 'network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParams', [
      mojo.internal.StructField('arg_credentials', 0, 0, mojo.internal.bindings.network.mojom.AuthCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketAuthenticationHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAuthRequired(arg_info, arg_headers, arg_remote_endpoint) {
    return this.$.onAuthRequired(arg_info, arg_headers, arg_remote_endpoint);
  }
};

mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebSocketAuthenticationHandler', [
      { explicit: null },
    ]);
  }

  onAuthRequired(arg_info, arg_headers, arg_remote_endpoint) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec,
      mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec,
      [arg_info, arg_headers, arg_remote_endpoint],
      false);
  }

};

mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketAuthenticationHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebSocketAuthenticationHandler', [
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
        
        // Try Method 0: OnAuthRequired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthRequired (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthRequired');
          const result = this.impl.onAuthRequired(params.arg_info, params.arg_headers, params.arg_remote_endpoint);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnAuthRequired FAILED:', e));
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

mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerReceiver = mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerReceiver;

mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerPtr = mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemote;
mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRequest = mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerPendingReceiver;


// Interface: WebSocketHandshakeClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec, 'network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.network.mojom.WebSocketHandshakeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec, 'network.mojom.WebSocketHandshakeClient_OnFailure_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_response_code', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec, 'network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_Params', [
      mojo.internal.StructField('arg_socket', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebSocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.WebSocketClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_response', 16, 0, mojo.internal.bindings.network.mojom.WebSocketHandshakeResponseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_readable', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_writable', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.bindings.network.mojom.WebSocketHandshakeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketHandshakeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.WebSocketHandshakeClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onOpeningHandshakeStarted(arg_request) {
    return this.$.onOpeningHandshakeStarted(arg_request);
  }
  onFailure(arg_message, arg_net_error, arg_response_code) {
    return this.$.onFailure(arg_message, arg_net_error, arg_response_code);
  }
  onConnectionEstablished(arg_socket, arg_client_receiver, arg_response, arg_readable, arg_writable) {
    return this.$.onConnectionEstablished(arg_socket, arg_client_receiver, arg_response, arg_readable, arg_writable);
  }
};

mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebSocketHandshakeClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onOpeningHandshakeStarted(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec,
      null,
      [arg_request],
      false);
  }

  onFailure(arg_message, arg_net_error, arg_response_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec,
      null,
      [arg_message, arg_net_error, arg_response_code],
      false);
  }

  onConnectionEstablished(arg_socket, arg_client_receiver, arg_response, arg_readable, arg_writable) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [arg_socket, arg_client_receiver, arg_response, arg_readable, arg_writable],
      false);
  }

};

mojo.internal.bindings.network.mojom.WebSocketHandshakeClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketHandshakeClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.WebSocketHandshakeClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebSocketHandshakeClient', [
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
        
        // Try Method 0: OnOpeningHandshakeStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpeningHandshakeStarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFailure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFailure (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnConnectionEstablished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionEstablished (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpeningHandshakeStarted');
          const result = this.impl.onOpeningHandshakeStarted(params.arg_request);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFailure');
          const result = this.impl.onFailure(params.arg_message, params.arg_net_error, params.arg_response_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionEstablished');
          const result = this.impl.onConnectionEstablished(params.arg_socket, params.arg_client_receiver, params.arg_response, params.arg_readable, params.arg_writable);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.WebSocketHandshakeClientReceiver = mojo.internal.bindings.network.mojom.WebSocketHandshakeClientReceiver;

mojo.internal.bindings.network.mojom.WebSocketHandshakeClientPtr = mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemote;
mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRequest = mojo.internal.bindings.network.mojom.WebSocketHandshakeClientPendingReceiver;


// Interface: WebSocketClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketClient_OnDataFrame_ParamsSpec, 'network.mojom.WebSocketClient_OnDataFrame_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.network.mojom.WebSocketMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fin', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketClient_OnDropChannel_ParamsSpec, 'network.mojom.WebSocketClient_OnDropChannel_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_was_clean', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec, 'network.mojom.WebSocketClient_OnClosingHandshake_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.WebSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.WebSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.WebSocketClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.WebSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDataFrame(arg_fin, arg_type, arg_data_length) {
    return this.$.onDataFrame(arg_fin, arg_type, arg_data_length);
  }
  onDropChannel(arg_was_clean, arg_code, arg_reason) {
    return this.$.onDropChannel(arg_was_clean, arg_code, arg_reason);
  }
  onClosingHandshake() {
    return this.$.onClosingHandshake();
  }
};

mojo.internal.bindings.network.mojom.WebSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebSocketClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDataFrame(arg_fin, arg_type, arg_data_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocketClient_OnDataFrame_ParamsSpec,
      null,
      [arg_fin, arg_type, arg_data_length],
      false);
  }

  onDropChannel(arg_was_clean, arg_code, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocketClient_OnDropChannel_ParamsSpec,
      null,
      [arg_was_clean, arg_code, arg_reason],
      false);
  }

  onClosingHandshake() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.WebSocketClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.WebSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.WebSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebSocketClient', [
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
        
        // Try Method 0: OnDataFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketClient_OnDataFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDataFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDropChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketClient_OnDropChannel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDropChannel (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnClosingHandshake
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClosingHandshake (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketClient_OnDataFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDataFrame');
          const result = this.impl.onDataFrame(params.arg_fin, params.arg_type, params.arg_data_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketClient_OnDropChannel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDropChannel');
          const result = this.impl.onDropChannel(params.arg_was_clean, params.arg_code, params.arg_reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClosingHandshake');
          const result = this.impl.onClosingHandshake();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.WebSocketClientReceiver = mojo.internal.bindings.network.mojom.WebSocketClientReceiver;

mojo.internal.bindings.network.mojom.WebSocketClientPtr = mojo.internal.bindings.network.mojom.WebSocketClientRemote;
mojo.internal.bindings.network.mojom.WebSocketClientRequest = mojo.internal.bindings.network.mojom.WebSocketClientPendingReceiver;


// Interface: WebSocket
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocket_SendMessage_ParamsSpec, 'network.mojom.WebSocket_SendMessage_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.network.mojom.WebSocketMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocket_StartReceiving_ParamsSpec, 'network.mojom.WebSocket_StartReceiving_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WebSocket_StartClosingHandshake_ParamsSpec, 'network.mojom.WebSocket_StartClosingHandshake_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.WebSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.WebSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.WebSocketPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.WebSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendMessage(arg_type, arg_data_length) {
    return this.$.sendMessage(arg_type, arg_data_length);
  }
  startReceiving() {
    return this.$.startReceiving();
  }
  startClosingHandshake(arg_code, arg_reason) {
    return this.$.startClosingHandshake(arg_code, arg_reason);
  }
};

mojo.internal.bindings.network.mojom.WebSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebSocket', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendMessage(arg_type, arg_data_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocket_SendMessage_ParamsSpec,
      null,
      [arg_type, arg_data_length],
      false);
  }

  startReceiving() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocket_StartReceiving_ParamsSpec,
      null,
      [],
      false);
  }

  startClosingHandshake(arg_code, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.WebSocket_StartClosingHandshake_ParamsSpec,
      null,
      [arg_code, arg_reason],
      false);
  }

};

mojo.internal.bindings.network.mojom.WebSocket.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.WebSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocket',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.WebSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebSocket', [
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
        
        // Try Method 0: SendMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocket_SendMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendMessage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartReceiving
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocket_StartReceiving_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartReceiving (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartClosingHandshake
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocket_StartClosingHandshake_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartClosingHandshake (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocket_SendMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendMessage');
          const result = this.impl.sendMessage(params.arg_type, params.arg_data_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocket_StartReceiving_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startReceiving');
          const result = this.impl.startReceiving();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.WebSocket_StartClosingHandshake_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startClosingHandshake');
          const result = this.impl.startClosingHandshake(params.arg_code, params.arg_reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.WebSocketReceiver = mojo.internal.bindings.network.mojom.WebSocketReceiver;

mojo.internal.bindings.network.mojom.WebSocketPtr = mojo.internal.bindings.network.mojom.WebSocketRemote;
mojo.internal.bindings.network.mojom.WebSocketRequest = mojo.internal.bindings.network.mojom.WebSocketPendingReceiver;

