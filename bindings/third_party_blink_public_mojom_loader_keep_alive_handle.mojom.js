// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/keep_alive_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.KeepAliveHandle = {};
blink.mojom.KeepAliveHandle.$interfaceName = 'blink.mojom.KeepAliveHandle';

// Interface: KeepAliveHandle
blink.mojom.KeepAliveHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.KeepAliveHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.KeepAliveHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.KeepAliveHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.KeepAliveHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.KeepAliveHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.KeepAliveHandle.getRemote = function() {
  let remote = new blink.mojom.KeepAliveHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.KeepAliveHandle',
    'context');
  return remote.$;
};

blink.mojom.KeepAliveHandleReceiver = class {
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

blink.mojom.KeepAliveHandleReceiver = blink.mojom.KeepAliveHandleReceiver;

blink.mojom.KeepAliveHandlePtr = blink.mojom.KeepAliveHandleRemote;
blink.mojom.KeepAliveHandleRequest = blink.mojom.KeepAliveHandlePendingReceiver;

