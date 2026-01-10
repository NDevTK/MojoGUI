// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/associated_interfaces/associated_interfaces.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AssociatedInterface = {};
blink.mojom.AssociatedInterface.$interfaceName = 'blink.mojom.AssociatedInterface';
blink.mojom.AssociatedInterfaceProvider = {};
blink.mojom.AssociatedInterfaceProvider.$interfaceName = 'blink.mojom.AssociatedInterfaceProvider';
blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec = { $: {} };

// Interface: AssociatedInterface
blink.mojom.AssociatedInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AssociatedInterfaceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AssociatedInterfacePendingReceiver,
      handle);
    this.$ = new blink.mojom.AssociatedInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AssociatedInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.AssociatedInterface.getRemote = function() {
  let remote = new blink.mojom.AssociatedInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterface',
    'context');
  return remote.$;
};

blink.mojom.AssociatedInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    }});
  }
};

blink.mojom.AssociatedInterfaceReceiver = blink.mojom.AssociatedInterfaceReceiver;

blink.mojom.AssociatedInterfacePtr = blink.mojom.AssociatedInterfaceRemote;
blink.mojom.AssociatedInterfaceRequest = blink.mojom.AssociatedInterfacePendingReceiver;


// Interface: AssociatedInterfaceProvider
mojo.internal.Struct(
    blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec, 'blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AssociatedInterfaceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AssociatedInterfaceProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterfaceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AssociatedInterfaceProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.AssociatedInterfaceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AssociatedInterfaceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAssociatedInterface(name, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver],
      false);
  }

};

blink.mojom.AssociatedInterfaceProvider.getRemote = function() {
  let remote = new blink.mojom.AssociatedInterfaceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterfaceProvider',
    'context');
  return remote.$;
};

blink.mojom.AssociatedInterfaceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAssociatedInterface(params.name, params.receiver);
          break;
        }
      }
    }});
  }
};

blink.mojom.AssociatedInterfaceProviderReceiver = blink.mojom.AssociatedInterfaceProviderReceiver;

blink.mojom.AssociatedInterfaceProviderPtr = blink.mojom.AssociatedInterfaceProviderRemote;
blink.mojom.AssociatedInterfaceProviderRequest = blink.mojom.AssociatedInterfaceProviderPendingReceiver;

