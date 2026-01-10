// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browser_interface_broker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.BrowserInterfaceBroker = {};
blink.mojom.BrowserInterfaceBroker.$interfaceName = 'blink.mojom.BrowserInterfaceBroker';
blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec = { $: {} };

// Interface: BrowserInterfaceBroker
mojo.internal.Struct(
    blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec, 'blink.mojom.BrowserInterfaceBroker_GetInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BrowserInterfaceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BrowserInterfaceBrokerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BrowserInterfaceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BrowserInterfaceBrokerPendingReceiver,
      handle);
    this.$ = new blink.mojom.BrowserInterfaceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BrowserInterfaceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInterface(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

blink.mojom.BrowserInterfaceBroker.getRemote = function() {
  let remote = new blink.mojom.BrowserInterfaceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BrowserInterfaceBroker',
    'context');
  return remote.$;
};

blink.mojom.BrowserInterfaceBrokerReceiver = class {
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
        case 0: {
          const params = blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getInterface(params.receiver);
          break;
        }
      }
    });
  }
};

blink.mojom.BrowserInterfaceBrokerReceiver = blink.mojom.BrowserInterfaceBrokerReceiver;

blink.mojom.BrowserInterfaceBrokerPtr = blink.mojom.BrowserInterfaceBrokerRemote;
blink.mojom.BrowserInterfaceBrokerRequest = blink.mojom.BrowserInterfaceBrokerPendingReceiver;

