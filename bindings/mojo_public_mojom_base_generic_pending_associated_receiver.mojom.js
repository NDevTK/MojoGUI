// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/generic_pending_associated_receiver.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: GenericPendingAssociatedReceiver
mojo_base.mojom.GenericPendingAssociatedReceiverSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.GenericPendingAssociatedReceiver',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: GenericAssociatedInterface
mojo_base.mojom.GenericAssociatedInterface = {};

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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojo_base.mojom.GenericAssociatedInterface',
    'context');
  return remote.$;
};

// Legacy compatibility
mojo_base.mojom.GenericAssociatedInterfacePtr = mojo_base.mojom.GenericAssociatedInterfaceRemote;
mojo_base.mojom.GenericAssociatedInterfaceRequest = mojo_base.mojom.GenericAssociatedInterfacePendingReceiver;

