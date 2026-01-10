// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/websocket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.WebSocketMessageTypeSpec = { $: mojo.internal.Enum() };
network.mojom.HttpHeaderSpec = { $: {} };
network.mojom.WebSocketHandshakeRequestSpec = { $: {} };
network.mojom.WebSocketHandshakeResponseSpec = { $: {} };
network.mojom.WebSocketAuthenticationHandler = {};
network.mojom.WebSocketAuthenticationHandler.$interfaceName = 'network.mojom.WebSocketAuthenticationHandler';
network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec = { $: {} };
network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec = { $: {} };
network.mojom.WebSocketHandshakeClient = {};
network.mojom.WebSocketHandshakeClient.$interfaceName = 'network.mojom.WebSocketHandshakeClient';
network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec = { $: {} };
network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec = { $: {} };
network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec = { $: {} };
network.mojom.WebSocketClient = {};
network.mojom.WebSocketClient.$interfaceName = 'network.mojom.WebSocketClient';
network.mojom.WebSocketClient_OnDataFrame_ParamsSpec = { $: {} };
network.mojom.WebSocketClient_OnDropChannel_ParamsSpec = { $: {} };
network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec = { $: {} };
network.mojom.WebSocket = {};
network.mojom.WebSocket.$interfaceName = 'network.mojom.WebSocket';
network.mojom.WebSocket_SendMessage_ParamsSpec = { $: {} };
network.mojom.WebSocket_StartReceiving_ParamsSpec = { $: {} };
network.mojom.WebSocket_StartClosingHandshake_ParamsSpec = { $: {} };

// Enum: WebSocketMessageType
network.mojom.WebSocketMessageType = {
  CONTINUATION: 0,
  TEXT: 1,
  BINARY: 2,
  LAST: 2,
};

// Struct: HttpHeader
mojo.internal.Struct(
    network.mojom.HttpHeaderSpec, 'network.mojom.HttpHeader', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebSocketHandshakeRequest
mojo.internal.Struct(
    network.mojom.WebSocketHandshakeRequestSpec, 'network.mojom.WebSocketHandshakeRequest', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, mojo.internal.Array(network.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('headers_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebSocketHandshakeResponse
mojo.internal.Struct(
    network.mojom.WebSocketHandshakeResponseSpec, 'network.mojom.WebSocketHandshakeResponse', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_version', 8, 0, network.mojom.HttpVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 24, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 32, 0, mojo.internal.Array(network.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('headers_text', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selected_protocol', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status_code', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: WebSocketAuthenticationHandler
mojo.internal.Struct(
    network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec, 'network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_Params', [
      mojo.internal.StructField('info', 0, 0, network.mojom.AuthChallengeInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 16, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec, 'network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParams', [
      mojo.internal.StructField('credentials', 0, 0, network.mojom.AuthCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.WebSocketAuthenticationHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebSocketAuthenticationHandlerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketAuthenticationHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebSocketAuthenticationHandlerPendingReceiver,
      handle);
    this.$ = new network.mojom.WebSocketAuthenticationHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebSocketAuthenticationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAuthRequired(info, headers, remote_endpoint) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec,
      network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec,
      [info, headers, remote_endpoint],
      false);
  }

};

network.mojom.WebSocketAuthenticationHandler.getRemote = function() {
  let remote = new network.mojom.WebSocketAuthenticationHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketAuthenticationHandler',
    'context');
  return remote.$;
};

network.mojom.WebSocketAuthenticationHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
             decoder.decodeStructInline(network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAuthRequired');
          const result = this.impl.onAuthRequired(params.info, params.headers, params.remote_endpoint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec);
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

network.mojom.WebSocketAuthenticationHandlerReceiver = network.mojom.WebSocketAuthenticationHandlerReceiver;

network.mojom.WebSocketAuthenticationHandlerPtr = network.mojom.WebSocketAuthenticationHandlerRemote;
network.mojom.WebSocketAuthenticationHandlerRequest = network.mojom.WebSocketAuthenticationHandlerPendingReceiver;


// Interface: WebSocketHandshakeClient
mojo.internal.Struct(
    network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec, 'network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_Params', [
      mojo.internal.StructField('request', 0, 0, network.mojom.WebSocketHandshakeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec, 'network.mojom.WebSocketHandshakeClient_OnFailure_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('response_code', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec, 'network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_Params', [
      mojo.internal.StructField('socket', 0, 0, mojo.internal.InterfaceProxy(network.mojom.WebSocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.WebSocketClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('response', 16, 0, network.mojom.WebSocketHandshakeResponseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('readable', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('writable', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.WebSocketHandshakeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebSocketHandshakeClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketHandshakeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebSocketHandshakeClientPendingReceiver,
      handle);
    this.$ = new network.mojom.WebSocketHandshakeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebSocketHandshakeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onOpeningHandshakeStarted(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec,
      null,
      [request],
      false);
  }

  onFailure(message, net_error, response_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec,
      null,
      [message, net_error, response_code],
      false);
  }

  onConnectionEstablished(socket, client_receiver, response, readable, writable) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [socket, client_receiver, response, readable, writable],
      false);
  }

};

network.mojom.WebSocketHandshakeClient.getRemote = function() {
  let remote = new network.mojom.WebSocketHandshakeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketHandshakeClient',
    'context');
  return remote.$;
};

network.mojom.WebSocketHandshakeClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
             decoder.decodeStructInline(network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec.$);
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
             decoder.decodeStructInline(network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec.$);
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
             decoder.decodeStructInline(network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onOpeningHandshakeStarted');
          const result = this.impl.onOpeningHandshakeStarted(params.request);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onFailure');
          const result = this.impl.onFailure(params.message, params.net_error, params.response_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onConnectionEstablished');
          const result = this.impl.onConnectionEstablished(params.socket, params.client_receiver, params.response, params.readable, params.writable);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.WebSocketHandshakeClientReceiver = network.mojom.WebSocketHandshakeClientReceiver;

network.mojom.WebSocketHandshakeClientPtr = network.mojom.WebSocketHandshakeClientRemote;
network.mojom.WebSocketHandshakeClientRequest = network.mojom.WebSocketHandshakeClientPendingReceiver;


// Interface: WebSocketClient
mojo.internal.Struct(
    network.mojom.WebSocketClient_OnDataFrame_ParamsSpec, 'network.mojom.WebSocketClient_OnDataFrame_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.WebSocketMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('fin', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.WebSocketClient_OnDropChannel_ParamsSpec, 'network.mojom.WebSocketClient_OnDropChannel_Params', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('was_clean', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec, 'network.mojom.WebSocketClient_OnClosingHandshake_Params', [
    ],
    [[0, 8]]);

network.mojom.WebSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebSocketClientPendingReceiver,
      handle);
    this.$ = new network.mojom.WebSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDataFrame(fin, type, data_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebSocketClient_OnDataFrame_ParamsSpec,
      null,
      [fin, type, data_length],
      false);
  }

  onDropChannel(was_clean, code, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebSocketClient_OnDropChannel_ParamsSpec,
      null,
      [was_clean, code, reason],
      false);
  }

  onClosingHandshake() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.WebSocketClient.getRemote = function() {
  let remote = new network.mojom.WebSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketClient',
    'context');
  return remote.$;
};

network.mojom.WebSocketClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
             decoder.decodeStructInline(network.mojom.WebSocketClient_OnDataFrame_ParamsSpec.$);
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
             decoder.decodeStructInline(network.mojom.WebSocketClient_OnDropChannel_ParamsSpec.$);
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
             decoder.decodeStructInline(network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(network.mojom.WebSocketClient_OnDataFrame_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onDataFrame');
          const result = this.impl.onDataFrame(params.fin, params.type, params.data_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebSocketClient_OnDropChannel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onDropChannel');
          const result = this.impl.onDropChannel(params.was_clean, params.code, params.reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec.$);
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

network.mojom.WebSocketClientReceiver = network.mojom.WebSocketClientReceiver;

network.mojom.WebSocketClientPtr = network.mojom.WebSocketClientRemote;
network.mojom.WebSocketClientRequest = network.mojom.WebSocketClientPendingReceiver;


// Interface: WebSocket
mojo.internal.Struct(
    network.mojom.WebSocket_SendMessage_ParamsSpec, 'network.mojom.WebSocket_SendMessage_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.WebSocketMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebSocket_StartReceiving_ParamsSpec, 'network.mojom.WebSocket_StartReceiving_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebSocket_StartClosingHandshake_ParamsSpec, 'network.mojom.WebSocket_StartClosingHandshake_Params', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.WebSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.WebSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(type, data_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebSocket_SendMessage_ParamsSpec,
      null,
      [type, data_length],
      false);
  }

  startReceiving() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebSocket_StartReceiving_ParamsSpec,
      null,
      [],
      false);
  }

  startClosingHandshake(code, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebSocket_StartClosingHandshake_ParamsSpec,
      null,
      [code, reason],
      false);
  }

};

network.mojom.WebSocket.getRemote = function() {
  let remote = new network.mojom.WebSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocket',
    'context');
  return remote.$;
};

network.mojom.WebSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
             decoder.decodeStructInline(network.mojom.WebSocket_SendMessage_ParamsSpec.$);
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
             decoder.decodeStructInline(network.mojom.WebSocket_StartReceiving_ParamsSpec.$);
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
             decoder.decodeStructInline(network.mojom.WebSocket_StartClosingHandshake_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(network.mojom.WebSocket_SendMessage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.sendMessage');
          const result = this.impl.sendMessage(params.type, params.data_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebSocket_StartReceiving_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startReceiving');
          const result = this.impl.startReceiving();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebSocket_StartClosingHandshake_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startClosingHandshake');
          const result = this.impl.startClosingHandshake(params.code, params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.WebSocketReceiver = network.mojom.WebSocketReceiver;

network.mojom.WebSocketPtr = network.mojom.WebSocketRemote;
network.mojom.WebSocketRequest = network.mojom.WebSocketPendingReceiver;

