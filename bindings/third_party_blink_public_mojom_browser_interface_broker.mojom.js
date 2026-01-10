// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browser_interface_broker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BrowserInterfaceBroker = {};
blink.mojom.BrowserInterfaceBroker.$interfaceName = 'blink.mojom.BrowserInterfaceBroker';
blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec = { $: {} };

// Interface: BrowserInterfaceBroker
mojo.internal.Struct(
    blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec, 'blink.mojom.BrowserInterfaceBroker_GetInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec, null, false, 0, undefined),
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

blink.mojom.BrowserInterfaceBrokerPtr = blink.mojom.BrowserInterfaceBrokerRemote;
blink.mojom.BrowserInterfaceBrokerRequest = blink.mojom.BrowserInterfaceBrokerPendingReceiver;

