// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/websocket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var services = services || {};
var services = services || {};

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
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, mojo.internal.Array(network.mojom.HttpHeaderSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('headers_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebSocketHandshakeResponse
mojo.internal.Struct(
    network.mojom.WebSocketHandshakeResponseSpec, 'network.mojom.WebSocketHandshakeResponse', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('http_version', 8, 0, network.mojom.HttpVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('status_code', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('status_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 24, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('headers', 32, 0, mojo.internal.Array(network.mojom.HttpHeaderSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('headers_text', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selected_protocol', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 56, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: WebSocketAuthenticationHandler
mojo.internal.Struct(
    network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec, 'network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_Params', [
      mojo.internal.StructField('info', 0, 0, network.mojom.AuthChallengeInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, network.mojom.HttpResponseHeadersSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_endpoint', 16, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec, 'network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParams', [
      mojo.internal.StructField('credentials', 0, 0, network.mojom.AuthCredentialsSpec, null, true, 0, undefined),
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
      [info, headers, remote_endpoint]);
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

network.mojom.WebSocketAuthenticationHandlerPtr = network.mojom.WebSocketAuthenticationHandlerRemote;
network.mojom.WebSocketAuthenticationHandlerRequest = network.mojom.WebSocketAuthenticationHandlerPendingReceiver;


// Interface: WebSocketHandshakeClient
mojo.internal.Struct(
    network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec, 'network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_Params', [
      mojo.internal.StructField('request', 0, 0, network.mojom.WebSocketHandshakeRequestSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('socket', 0, 0, mojo.internal.InterfaceProxy(network.mojom.WebSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.WebSocketClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('response', 16, 0, network.mojom.WebSocketHandshakeResponseSpec, null, false, 0, undefined),
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
      [request]);
  }

  onFailure(message, net_error, response_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec,
      null,
      [message, net_error, response_code]);
  }

  onConnectionEstablished(socket, client_receiver, response, readable, writable) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [socket, client_receiver, response, readable, writable]);
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

network.mojom.WebSocketHandshakeClientPtr = network.mojom.WebSocketHandshakeClientRemote;
network.mojom.WebSocketHandshakeClientRequest = network.mojom.WebSocketHandshakeClientPendingReceiver;


// Interface: WebSocketClient
mojo.internal.Struct(
    network.mojom.WebSocketClient_OnDataFrame_ParamsSpec, 'network.mojom.WebSocketClient_OnDataFrame_Params', [
      mojo.internal.StructField('fin', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, network.mojom.WebSocketMessageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('data_length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebSocketClient_OnDropChannel_ParamsSpec, 'network.mojom.WebSocketClient_OnDropChannel_Params', [
      mojo.internal.StructField('was_clean', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
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
      [fin, type, data_length]);
  }

  onDropChannel(was_clean, code, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebSocketClient_OnDropChannel_ParamsSpec,
      null,
      [was_clean, code, reason]);
  }

  onClosingHandshake() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec,
      null,
      []);
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

network.mojom.WebSocketClientPtr = network.mojom.WebSocketClientRemote;
network.mojom.WebSocketClientRequest = network.mojom.WebSocketClientPendingReceiver;


// Interface: WebSocket
mojo.internal.Struct(
    network.mojom.WebSocket_SendMessage_ParamsSpec, 'network.mojom.WebSocket_SendMessage_Params', [
      mojo.internal.StructField('type', 8, 0, network.mojom.WebSocketMessageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('data_length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebSocket_StartReceiving_ParamsSpec, 'network.mojom.WebSocket_StartReceiving_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebSocket_StartClosingHandshake_ParamsSpec, 'network.mojom.WebSocket_StartClosingHandshake_Params', [
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
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
      [type, data_length]);
  }

  startReceiving() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebSocket_StartReceiving_ParamsSpec,
      null,
      []);
  }

  startClosingHandshake(code, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebSocket_StartClosingHandshake_ParamsSpec,
      null,
      [code, reason]);
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

network.mojom.WebSocketPtr = network.mojom.WebSocketRemote;
network.mojom.WebSocketRequest = network.mojom.WebSocketPendingReceiver;

