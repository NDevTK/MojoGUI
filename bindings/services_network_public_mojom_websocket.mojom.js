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
network.mojom.HttpHeader = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: WebSocketHandshakeRequest
network.mojom.WebSocketHandshakeRequest = class {
  constructor(values = {}) {
    this.headers_text = values.headers_text !== undefined ? values.headers_text : "";
  }
};

// Struct: WebSocketHandshakeResponse
network.mojom.WebSocketHandshakeResponse = class {
  constructor(values = {}) {
    this.headers_text = values.headers_text !== undefined ? values.headers_text : 0;
    this.extensions = values.extensions !== undefined ? values.extensions : "";
  }
};

// Interface: WebSocketAuthenticationHandler
network.mojom.WebSocketAuthenticationHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebSocketAuthenticationHandler';
  }

  onAuthRequired(info, headers, remote_endpoint) {
    // Method: OnAuthRequired
    return new Promise((resolve) => {
      // Call: OnAuthRequired(info, headers, remote_endpoint)
      resolve({});
    });
  }

};

network.mojom.WebSocketAuthenticationHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebSocketHandshakeClient
network.mojom.WebSocketHandshakeClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebSocketHandshakeClient';
  }

  onOpeningHandshakeStarted(request) {
    // Method: OnOpeningHandshakeStarted
    // Call: OnOpeningHandshakeStarted(request)
  }

  onFailure(message, net_error, response_code) {
    // Method: OnFailure
    // Call: OnFailure(message, net_error, response_code)
  }

  message() {
    // Method: message
    // Call: message()
  }

  sendMessage() {
    // Method: SendMessage
    // Call: SendMessage()
  }

  onConnectionEstablished(socket, client_receiver, response, readable, writable) {
    // Method: OnConnectionEstablished
    // Call: OnConnectionEstablished(socket, client_receiver, response, readable, writable)
  }

};

network.mojom.WebSocketHandshakeClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebSocketClient
network.mojom.WebSocketClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebSocketClient';
  }

  onDataFrame(fin, type, data_length) {
    // Method: OnDataFrame
    // Call: OnDataFrame(fin, type, data_length)
  }

  onDropChannel(was_clean, code, reason) {
    // Method: OnDropChannel
    // Call: OnDropChannel(was_clean, code, reason)
  }

  onClosingHandshake() {
    // Method: OnClosingHandshake
    // Call: OnClosingHandshake()
  }

};

network.mojom.WebSocketClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebSocket
network.mojom.WebSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebSocket';
  }

  sendMessage(type, data_length) {
    // Method: SendMessage
    // Call: SendMessage(type, data_length)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  connect() {
    // Method: Connect
    // Call: Connect()
  }

  startReceiving() {
    // Method: StartReceiving
    // Call: StartReceiving()
  }

  startClosingHandshake(code, reason) {
    // Method: StartClosingHandshake
    // Call: StartClosingHandshake(code, reason)
  }

};

network.mojom.WebSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
