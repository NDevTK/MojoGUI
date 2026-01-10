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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
      }
    }});
  }
};

extensions.KeepAliveReceiver = extensions.KeepAliveReceiver;

extensions.KeepAlivePtr = extensions.KeepAliveRemote;
extensions.KeepAliveRequest = extensions.KeepAlivePendingReceiver;

