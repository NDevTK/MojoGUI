// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/associated_interfaces/associated_interfaces.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AssociatedInterface
blink.mojom.mojom.AssociatedInterface = {};

blink.mojom.mojom.AssociatedInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AssociatedInterfaceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AssociatedInterfacePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AssociatedInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AssociatedInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.mojom.AssociatedInterface.getRemote = function() {
  let remote = new blink.mojom.mojom.AssociatedInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterface',
    'context');
  return remote.$;
};

// Legacy compatibility
blink.mojom.mojom.AssociatedInterfacePtr = blink.mojom.mojom.AssociatedInterfaceRemote;
blink.mojom.mojom.AssociatedInterfaceRequest = blink.mojom.mojom.AssociatedInterfacePendingReceiver;


// Interface: AssociatedInterfaceProvider
blink.mojom.mojom.AssociatedInterfaceProvider = {};

blink.mojom.mojom.AssociatedInterfaceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AssociatedInterfaceProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterfaceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AssociatedInterfaceProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AssociatedInterfaceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AssociatedInterfaceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAssociatedInterface(name, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver]);
  }

};

blink.mojom.mojom.AssociatedInterfaceProvider.getRemote = function() {
  let remote = new blink.mojom.mojom.AssociatedInterfaceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterfaceProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetAssociatedInterface
blink.mojom.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AssociatedInterfaceProvider.GetAssociatedInterface_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AssociatedInterfaceProviderPtr = blink.mojom.mojom.AssociatedInterfaceProviderRemote;
blink.mojom.mojom.AssociatedInterfaceProviderRequest = blink.mojom.mojom.AssociatedInterfaceProviderPendingReceiver;

