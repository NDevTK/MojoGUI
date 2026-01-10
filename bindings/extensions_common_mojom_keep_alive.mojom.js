// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/keep_alive.mojom
// Module: extensions

'use strict';

// Module namespace
var extensions = extensions || {};

extensions.KeepAlive = {};
extensions.KeepAlive.$interfaceName = 'extensions.KeepAlive';

// Interface: KeepAlive
extensions.KeepAlivePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.KeepAliveRemote = class {
  static get $interfaceName() {
    return 'extensions.KeepAlive';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.KeepAlivePendingReceiver,
      handle);
    this.$ = new extensions.KeepAliveRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.KeepAliveRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

extensions.KeepAlive.getRemote = function() {
  let remote = new extensions.KeepAliveRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.KeepAlive',
    'context');
  return remote.$;
};

extensions.KeepAliveReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
      }
    }});
  }
};

extensions.KeepAliveReceiver = extensions.KeepAliveReceiver;

extensions.KeepAlivePtr = extensions.KeepAliveRemote;
extensions.KeepAliveRequest = extensions.KeepAlivePendingReceiver;

