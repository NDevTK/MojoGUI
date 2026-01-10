// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/keep_alive_handle_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.KeepAliveHandleFactory = {};
blink.mojom.KeepAliveHandleFactory.$interfaceName = 'blink.mojom.KeepAliveHandleFactory';
blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec = { $: {} };

// Interface: KeepAliveHandleFactory
mojo.internal.Struct(
    blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec, 'blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_Params', [
      mojo.internal.StructField('keep_alive_handle', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.KeepAliveHandleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [keep_alive_handle],
      false);
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

blink.mojom.KeepAliveHandleFactoryPtr = blink.mojom.KeepAliveHandleFactoryRemote;
blink.mojom.KeepAliveHandleFactoryRequest = blink.mojom.KeepAliveHandleFactoryPendingReceiver;

