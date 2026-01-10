// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/binder.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.Binder = {};
mojo_base.mojom.Binder.$interfaceName = 'mojo_base.mojom.Binder';
mojo_base.mojom.Binder_Bind_ParamsSpec = { $: {} };

// Interface: Binder
mojo.internal.Struct(
    mojo_base.mojom.Binder_Bind_ParamsSpec, 'mojo_base.mojom.Binder_Bind_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

  bind(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojo_base.mojom.Binder_Bind_ParamsSpec,
      null,
      [receiver],
      false);
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

mojo_base.mojom.BinderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = mojo_base.mojom.Binder_Bind_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bind(params.receiver);
          break;
        }
      }
    });
  }
};

mojo_base.mojom.BinderReceiver = mojo_base.mojom.BinderReceiver;

mojo_base.mojom.BinderPtr = mojo_base.mojom.BinderRemote;
mojo_base.mojom.BinderRequest = mojo_base.mojom.BinderPendingReceiver;

