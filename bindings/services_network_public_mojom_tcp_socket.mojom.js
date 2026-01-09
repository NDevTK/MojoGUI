// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tcp_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: TCPKeepAliveOptions
network.mojom.TCPKeepAliveOptions = class {
  constructor(values = {}) {
  }
};

// Struct: TCPConnectedSocketOptions
network.mojom.TCPConnectedSocketOptions = class {
  constructor(values = {}) {
    this.packet = values.packet !== undefined ? values.packet : null;
    this.default = values.default !== undefined ? values.default : null;
    this.to = values.to !== undefined ? values.to : null;
    this.true = values.true !== undefined ? values.true : false;
    this.default = values.default !== undefined ? values.default : null;
    this.keep_alive_options = values.keep_alive_options !== undefined ? values.keep_alive_options : null;
  }
};

// Struct: TCPServerSocketOptions
network.mojom.TCPServerSocketOptions = class {
  constructor(values = {}) {
    this.connection_tracker = values.connection_tracker !== undefined ? values.connection_tracker : 0;
  }
};

// Interface: TCPBoundSocket
network.mojom.TCPBoundSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TCPBoundSocket';
  }

  listen(backlog, socket) {
    // Method: Listen
    return new Promise((resolve) => {
      // Call: Listen(backlog, socket)
      resolve({});
    });
  }

  connect(remote_addr_list, tcp_connected_socket_options, socket, observer) {
    // Method: Connect
    return new Promise((resolve) => {
      // Call: Connect(remote_addr_list, tcp_connected_socket_options, socket, observer)
      resolve({});
    });
  }

};

network.mojom.TCPBoundSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TCPConnectedSocket
network.mojom.TCPConnectedSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TCPConnectedSocket';
  }

  upgradeToTLS(host_port_pair, options, traffic_annotation, receiver, observer) {
    // Method: UpgradeToTLS
    return new Promise((resolve) => {
      // Call: UpgradeToTLS(host_port_pair, options, traffic_annotation, receiver, observer)
      resolve({});
    });
  }

  setSendBufferSize(send_buffer_size) {
    // Method: SetSendBufferSize
    return new Promise((resolve) => {
      // Call: SetSendBufferSize(send_buffer_size)
      resolve({});
    });
  }

  setReceiveBufferSize(receive_buffer_size) {
    // Method: SetReceiveBufferSize
    return new Promise((resolve) => {
      // Call: SetReceiveBufferSize(receive_buffer_size)
      resolve({});
    });
  }

  setNoDelay(no_delay) {
    // Method: SetNoDelay
    return new Promise((resolve) => {
      // Call: SetNoDelay(no_delay)
      resolve({});
    });
  }

  setKeepAlive(enable, delay_secs) {
    // Method: SetKeepAlive
    return new Promise((resolve) => {
      // Call: SetKeepAlive(enable, delay_secs)
      resolve({});
    });
  }

};

network.mojom.TCPConnectedSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SocketObserver
network.mojom.SocketObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SocketObserver';
  }

  onReadError(net_error) {
    // Method: OnReadError
    // Call: OnReadError(net_error)
  }

  onWriteError(net_error) {
    // Method: OnWriteError
    // Call: OnWriteError(net_error)
  }

};

network.mojom.SocketObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TCPServerSocket
network.mojom.TCPServerSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TCPServerSocket';
  }

  accept(observer) {
    // Method: Accept
    return new Promise((resolve) => {
      // Call: Accept(observer)
      resolve({});
    });
  }

};

network.mojom.TCPServerSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
