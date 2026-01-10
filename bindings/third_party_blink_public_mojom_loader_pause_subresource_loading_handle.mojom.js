// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/pause_subresource_loading_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PauseSubresourceLoadingHandle = {};
blink.mojom.PauseSubresourceLoadingHandle.$interfaceName = 'blink.mojom.PauseSubresourceLoadingHandle';

// Interface: PauseSubresourceLoadingHandle
blink.mojom.PauseSubresourceLoadingHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PauseSubresourceLoadingHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PauseSubresourceLoadingHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PauseSubresourceLoadingHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.PauseSubresourceLoadingHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PauseSubresourceLoadingHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.PauseSubresourceLoadingHandle.getRemote = function() {
  let remote = new blink.mojom.PauseSubresourceLoadingHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PauseSubresourceLoadingHandle',
    'context');
  return remote.$;
};

blink.mojom.PauseSubresourceLoadingHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

blink.mojom.PauseSubresourceLoadingHandleReceiver = blink.mojom.PauseSubresourceLoadingHandleReceiver;

blink.mojom.PauseSubresourceLoadingHandlePtr = blink.mojom.PauseSubresourceLoadingHandleRemote;
blink.mojom.PauseSubresourceLoadingHandleRequest = blink.mojom.PauseSubresourceLoadingHandlePendingReceiver;

