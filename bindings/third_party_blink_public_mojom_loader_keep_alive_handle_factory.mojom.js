// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/keep_alive_handle_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: KeepAliveHandleFactory
blink.mojom.mojom.KeepAliveHandleFactory = {};

blink.mojom.mojom.KeepAliveHandleFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.KeepAliveHandleFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.KeepAliveHandleFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.KeepAliveHandleFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.KeepAliveHandleFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.KeepAliveHandleFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  issueKeepAliveHandle(keep_alive_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec,
      null,
      [keep_alive_handle]);
  }

};

blink.mojom.mojom.KeepAliveHandleFactory.getRemote = function() {
  let remote = new blink.mojom.mojom.KeepAliveHandleFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.KeepAliveHandleFactory',
    'context');
  return remote.$;
};

// ParamsSpec for IssueKeepAliveHandle
blink.mojom.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeepAliveHandleFactory.IssueKeepAliveHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'keep_alive_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.KeepAliveHandleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.KeepAliveHandleFactoryPtr = blink.mojom.mojom.KeepAliveHandleFactoryRemote;
blink.mojom.mojom.KeepAliveHandleFactoryRequest = blink.mojom.mojom.KeepAliveHandleFactoryPendingReceiver;

