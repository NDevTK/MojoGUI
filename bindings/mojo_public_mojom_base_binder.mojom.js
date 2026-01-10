// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/binder.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Interface: Binder
mojo_base.mojom.mojom.Binder = {};

mojo_base.mojom.mojom.BinderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo_base.mojom.mojom.BinderRemote = class {
  static get $interfaceName() {
    return 'mojo_base.mojom.Binder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo_base.mojom.mojom.BinderPendingReceiver,
      handle);
    this.$ = new mojo_base.mojom.mojom.BinderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo_base.mojom.mojom.BinderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bind(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojo_base.mojom.mojom.Binder_Bind_ParamsSpec,
      null,
      [receiver]);
  }

};

mojo_base.mojom.mojom.Binder.getRemote = function() {
  let remote = new mojo_base.mojom.mojom.BinderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojo_base.mojom.Binder',
    'context');
  return remote.$;
};

// ParamsSpec for Bind
mojo_base.mojom.mojom.Binder_Bind_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.Binder.Bind_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojo_base.mojom.mojom.BinderPtr = mojo_base.mojom.mojom.BinderRemote;
mojo_base.mojom.mojom.BinderRequest = mojo_base.mojom.mojom.BinderPendingReceiver;

