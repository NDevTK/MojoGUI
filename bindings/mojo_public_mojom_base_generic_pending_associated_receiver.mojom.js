// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/generic_pending_associated_receiver.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.GenericPendingAssociatedReceiverSpec = { $: {} };
mojo_base.mojom.GenericAssociatedInterface = {};
mojo_base.mojom.GenericAssociatedInterface.$interfaceName = 'mojo_base.mojom.GenericAssociatedInterface';

// Struct: GenericPendingAssociatedReceiver
mojo.internal.Struct(
    mojo_base.mojom.GenericPendingAssociatedReceiverSpec, 'mojo_base.mojom.GenericPendingAssociatedReceiver', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo_base.mojom.GenericAssociatedInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: GenericAssociatedInterface
mojo_base.mojom.GenericAssociatedInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo_base.mojom.GenericAssociatedInterfaceRemote = class {
  static get $interfaceName() {
    return 'mojo_base.mojom.GenericAssociatedInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo_base.mojom.GenericAssociatedInterfacePendingReceiver,
      handle);
    this.$ = new mojo_base.mojom.GenericAssociatedInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo_base.mojom.GenericAssociatedInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

mojo_base.mojom.GenericAssociatedInterface.getRemote = function() {
  let remote = new mojo_base.mojom.GenericAssociatedInterfaceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'mojo_base.mojom.GenericAssociatedInterface',
    'context');
  return remote.$;
};

mojo_base.mojom.GenericAssociatedInterfacePtr = mojo_base.mojom.GenericAssociatedInterfaceRemote;
mojo_base.mojom.GenericAssociatedInterfaceRequest = mojo_base.mojom.GenericAssociatedInterfacePendingReceiver;

