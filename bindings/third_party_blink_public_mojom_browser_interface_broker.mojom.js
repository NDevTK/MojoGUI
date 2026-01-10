// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browser_interface_broker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BrowserInterfaceBroker
blink.mojom.mojom.BrowserInterfaceBroker = {};

blink.mojom.mojom.BrowserInterfaceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BrowserInterfaceBrokerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BrowserInterfaceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BrowserInterfaceBrokerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BrowserInterfaceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BrowserInterfaceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInterface(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec,
      null,
      [receiver]);
  }

};

blink.mojom.mojom.BrowserInterfaceBroker.getRemote = function() {
  let remote = new blink.mojom.mojom.BrowserInterfaceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BrowserInterfaceBroker',
    'context');
  return remote.$;
};

// ParamsSpec for GetInterface
blink.mojom.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BrowserInterfaceBroker.GetInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BrowserInterfaceBrokerPtr = blink.mojom.mojom.BrowserInterfaceBrokerRemote;
blink.mojom.mojom.BrowserInterfaceBrokerRequest = blink.mojom.mojom.BrowserInterfaceBrokerPendingReceiver;

