// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/pause_subresource_loading_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PauseSubresourceLoadingHandle
blink.mojom.PauseSubresourceLoadingHandle = {};

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

// Legacy compatibility
blink.mojom.PauseSubresourceLoadingHandlePtr = blink.mojom.PauseSubresourceLoadingHandleRemote;
blink.mojom.PauseSubresourceLoadingHandleRequest = blink.mojom.PauseSubresourceLoadingHandlePendingReceiver;

