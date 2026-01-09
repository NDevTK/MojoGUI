// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/websocket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: WebSocketMessageType
network.mojom.WebSocketMessageType = {
  CONTINUATION: 0,
  TEXT: 1,
  BINARY: 2,
  LAST: 3,
};

// Struct: HttpHeader
network.mojom.HttpHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpHeader',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebSocketHandshakeRequest
network.mojom.WebSocketHandshakeRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeRequest',
      packedSize: 16,
      fields: [
        { name: 'headers_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebSocketHandshakeResponse
network.mojom.WebSocketHandshakeResponseSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeResponse',
      packedSize: 16,
      fields: [
        { name: 'extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WebSocketAuthenticationHandler
network.mojom.WebSocketAuthenticationHandler = {};

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

// ParamsSpec for OnAuthRequired
network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketAuthenticationHandler.OnAuthRequired_Params',
      packedSize: 32,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'remote_endpoint', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.WebSocketAuthenticationHandler_OnAuthRequired_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketAuthenticationHandler.OnAuthRequired_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.WebSocketAuthenticationHandlerPtr = network.mojom.WebSocketAuthenticationHandlerRemote;
network.mojom.WebSocketAuthenticationHandlerRequest = network.mojom.WebSocketAuthenticationHandlerPendingReceiver;


// Interface: WebSocketHandshakeClient
network.mojom.WebSocketHandshakeClient = {};

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

// ParamsSpec for OnOpeningHandshakeStarted
network.mojom.WebSocketHandshakeClient_OnOpeningHandshakeStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeClient.OnOpeningHandshakeStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFailure
network.mojom.WebSocketHandshakeClient_OnFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeClient.OnFailure_Params',
      packedSize: 32,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'response_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionEstablished
network.mojom.WebSocketHandshakeClient_OnConnectionEstablished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketHandshakeClient.OnConnectionEstablished_Params',
      packedSize: 48,
      fields: [
        { name: 'socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'client_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'response', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'readable', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'writable', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.WebSocketHandshakeClientPtr = network.mojom.WebSocketHandshakeClientRemote;
network.mojom.WebSocketHandshakeClientRequest = network.mojom.WebSocketHandshakeClientPendingReceiver;


// Interface: WebSocketClient
network.mojom.WebSocketClient = {};

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

// ParamsSpec for OnDataFrame
network.mojom.WebSocketClient_OnDataFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketClient.OnDataFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'fin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDropChannel
network.mojom.WebSocketClient_OnDropChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketClient.OnDropChannel_Params',
      packedSize: 32,
      fields: [
        { name: 'was_clean', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'reason', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClosingHandshake
network.mojom.WebSocketClient_OnClosingHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocketClient.OnClosingHandshake_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.WebSocketClientPtr = network.mojom.WebSocketClientRemote;
network.mojom.WebSocketClientRequest = network.mojom.WebSocketClientPendingReceiver;


// Interface: WebSocket
network.mojom.WebSocket = {};

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

// ParamsSpec for SendMessage
network.mojom.WebSocket_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocket.SendMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartReceiving
network.mojom.WebSocket_StartReceiving_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocket.StartReceiving_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartClosingHandshake
network.mojom.WebSocket_StartClosingHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebSocket.StartClosingHandshake_Params',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.WebSocketPtr = network.mojom.WebSocketRemote;
network.mojom.WebSocketRequest = network.mojom.WebSocketPendingReceiver;

