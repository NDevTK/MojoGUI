// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/websocket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: WebSocketMessageType
network.mojom.mojom.WebSocketMessageType = {
  CONTINUATION: 0,
  TEXT: 1,
  BINARY: 2,
  LAST: 3,
};
network.mojom.mojom.WebSocketMessageTypeSpec = { $: mojo.internal.Enum() };

// Struct: HttpHeader
network.mojom.mojom.HttpHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpHeader',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebSocketHandshakeRequest
network.mojom.mojom.WebSocketHandshakeRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeRequest',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.HttpHeaderSpec, false), nullable: false, minVersion: 0 },
        { name: 'headers_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: WebSocketHandshakeResponse
network.mojom.mojom.WebSocketHandshakeResponseSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeResponse',
      packedSize: 80,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'http_version', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpVersionSpec, nullable: false, minVersion: 0 },
        { name: 'status_code', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'status_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'remote_endpoint', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.HttpHeaderSpec, false), nullable: false, minVersion: 0 },
        { name: 'headers_text', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'selected_protocol', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'extensions', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: WebSocketAuthenticationHandler
network.mojom.mojom.WebSocketAuthenticationHandler = {};

network.mojom.mojom.WebSocketAuthenticationHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.WebSocketAuthenticationHandlerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketAuthenticationHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.WebSocketAuthenticationHandlerPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.WebSocketAuthenticationHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.WebSocketAuthenticationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAuthRequired(info, headers, remote_endpoint) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec,
      network.mojom.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec,
      [info, headers, remote_endpoint]);
  }

};

network.mojom.mojom.WebSocketAuthenticationHandler.getRemote = function() {
  let remote = new network.mojom.mojom.WebSocketAuthenticationHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketAuthenticationHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnAuthRequired
network.mojom.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketAuthenticationHandler.OnAuthRequired_Params',
      packedSize: 32,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AuthChallengeInfoSpec, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'remote_endpoint', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketAuthenticationHandler.OnAuthRequired_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AuthCredentialsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.WebSocketAuthenticationHandlerPtr = network.mojom.mojom.WebSocketAuthenticationHandlerRemote;
network.mojom.mojom.WebSocketAuthenticationHandlerRequest = network.mojom.mojom.WebSocketAuthenticationHandlerPendingReceiver;


// Interface: WebSocketHandshakeClient
network.mojom.mojom.WebSocketHandshakeClient = {};

network.mojom.mojom.WebSocketHandshakeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.WebSocketHandshakeClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketHandshakeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.WebSocketHandshakeClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.WebSocketHandshakeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.WebSocketHandshakeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onOpeningHandshakeStarted(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec,
      null,
      [request]);
  }

  onFailure(message, net_error, response_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec,
      null,
      [message, net_error, response_code]);
  }

  onConnectionEstablished(socket, client_receiver, response, readable, writable) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [socket, client_receiver, response, readable, writable]);
  }

};

network.mojom.mojom.WebSocketHandshakeClient.getRemote = function() {
  let remote = new network.mojom.mojom.WebSocketHandshakeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketHandshakeClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnOpeningHandshakeStarted
network.mojom.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeClient.OnOpeningHandshakeStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: network.mojom.WebSocketHandshakeRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFailure
network.mojom.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeClient.OnFailure_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'response_code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnConnectionEstablished
network.mojom.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeClient.OnConnectionEstablished_Params',
      packedSize: 48,
      fields: [
        { name: 'socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.WebSocketRemote), nullable: false, minVersion: 0 },
        { name: 'client_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.WebSocketClientRemote), nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 16, packedBitOffset: 0, type: network.mojom.WebSocketHandshakeResponseSpec, nullable: false, minVersion: 0 },
        { name: 'readable', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'writable', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.WebSocketHandshakeClientPtr = network.mojom.mojom.WebSocketHandshakeClientRemote;
network.mojom.mojom.WebSocketHandshakeClientRequest = network.mojom.mojom.WebSocketHandshakeClientPendingReceiver;


// Interface: WebSocketClient
network.mojom.mojom.WebSocketClient = {};

network.mojom.mojom.WebSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.WebSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.WebSocketClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.WebSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.WebSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDataFrame(fin, type, data_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.WebSocketClient_OnDataFrame_ParamsSpec,
      null,
      [fin, type, data_length]);
  }

  onDropChannel(was_clean, code, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.WebSocketClient_OnDropChannel_ParamsSpec,
      null,
      [was_clean, code, reason]);
  }

  onClosingHandshake() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec,
      null,
      []);
  }

};

network.mojom.mojom.WebSocketClient.getRemote = function() {
  let remote = new network.mojom.mojom.WebSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocketClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnDataFrame
network.mojom.mojom.WebSocketClient_OnDataFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketClient.OnDataFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'fin', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WebSocketMessageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'data_length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnDropChannel
network.mojom.mojom.WebSocketClient_OnDropChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketClient.OnDropChannel_Params',
      packedSize: 24,
      fields: [
        { name: 'was_clean', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnClosingHandshake
network.mojom.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketClient.OnClosingHandshake_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.WebSocketClientPtr = network.mojom.mojom.WebSocketClientRemote;
network.mojom.mojom.WebSocketClientRequest = network.mojom.mojom.WebSocketClientPendingReceiver;


// Interface: WebSocket
network.mojom.mojom.WebSocket = {};

network.mojom.mojom.WebSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.WebSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.WebSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.WebSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.WebSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(type, data_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.WebSocket_SendMessage_ParamsSpec,
      null,
      [type, data_length]);
  }

  startReceiving() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.WebSocket_StartReceiving_ParamsSpec,
      null,
      []);
  }

  startClosingHandshake(code, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.WebSocket_StartClosingHandshake_ParamsSpec,
      null,
      [code, reason]);
  }

};

network.mojom.mojom.WebSocket.getRemote = function() {
  let remote = new network.mojom.mojom.WebSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebSocket',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
network.mojom.mojom.WebSocket_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocket.SendMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WebSocketMessageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'data_length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartReceiving
network.mojom.mojom.WebSocket_StartReceiving_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocket.StartReceiving_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartClosingHandshake
network.mojom.mojom.WebSocket_StartClosingHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocket.StartClosingHandshake_Params',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.WebSocketPtr = network.mojom.mojom.WebSocketRemote;
network.mojom.mojom.WebSocketRequest = network.mojom.mojom.WebSocketPendingReceiver;

