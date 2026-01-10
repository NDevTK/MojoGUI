// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/pause_subresource_loading_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PauseSubresourceLoadingHandle
blink.mojom.mojom.PauseSubresourceLoadingHandle = {};

blink.mojom.mojom.PauseSubresourceLoadingHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PauseSubresourceLoadingHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PauseSubresourceLoadingHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PauseSubresourceLoadingHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PauseSubresourceLoadingHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PauseSubresourceLoadingHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.mojom.PauseSubresourceLoadingHandle.getRemote = function() {
  let remote = new blink.mojom.mojom.PauseSubresourceLoadingHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PauseSubresourceLoadingHandle',
    'context');
  return remote.$;
};

// Legacy compatibility
blink.mojom.mojom.PauseSubresourceLoadingHandlePtr = blink.mojom.mojom.PauseSubresourceLoadingHandleRemote;
blink.mojom.mojom.PauseSubresourceLoadingHandleRequest = blink.mojom.mojom.PauseSubresourceLoadingHandlePendingReceiver;

