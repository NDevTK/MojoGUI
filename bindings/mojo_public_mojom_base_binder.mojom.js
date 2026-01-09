// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/binder.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Interface: Binder
mojo_base.mojom.BinderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo_base.mojom.BinderRemote = class {
  static get $interfaceName() {
    return 'mojo_base.mojom.Binder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo_base.mojom.BinderPendingReceiver,
      handle);
    this.$ = new mojo_base.mojom.BinderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo_base.mojom.BinderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

mojo_base.mojom.Binder.getRemote = function() {
  let remote = new mojo_base.mojom.BinderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojo_base.mojom.Binder',
    'context');
  return remote.$;
};

// Legacy compatibility
mojo_base.mojom.BinderPtr = mojo_base.mojom.BinderRemote;
mojo_base.mojom.BinderRequest = mojo_base.mojom.BinderPendingReceiver;

