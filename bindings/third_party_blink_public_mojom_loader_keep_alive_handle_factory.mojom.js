// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/keep_alive_handle_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: KeepAliveHandleFactory
blink.mojom.KeepAliveHandleFactory = {};

blink.mojom.KeepAliveHandleFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.KeepAliveHandleFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.KeepAliveHandleFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.KeepAliveHandleFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.KeepAliveHandleFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.KeepAliveHandleFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  issueKeepAliveHandle(keep_alive_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec,
      null,
      [keep_alive_handle]);
  }

};

blink.mojom.KeepAliveHandleFactory.getRemote = function() {
  let remote = new blink.mojom.KeepAliveHandleFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.KeepAliveHandleFactory',
    'context');
  return remote.$;
};

// ParamsSpec for IssueKeepAliveHandle
blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeepAliveHandleFactory.IssueKeepAliveHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'keep_alive_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.KeepAliveHandleFactoryPtr = blink.mojom.KeepAliveHandleFactoryRemote;
blink.mojom.KeepAliveHandleFactoryRequest = blink.mojom.KeepAliveHandleFactoryPendingReceiver;

