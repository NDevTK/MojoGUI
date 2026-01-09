// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/foo/foo.mojom
// Module: foo.mojom

'use strict';

// Module namespace
var foo = foo || {};
foo.mojom = foo.mojom || {};


// Interface: FooHandler
foo.mojom.FooHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

foo.mojom.FooHandlerRemote = class {
  static get $interfaceName() {
    return 'foo.mojom.FooHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      foo.mojom.FooHandlerPendingReceiver,
      handle);
    this.$ = new foo.mojom.FooHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

foo.mojom.FooHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      foo.mojom.FooHandler_GetData_ParamsSpec.$,
      foo.mojom.FooHandler_GetData_ResponseParamsSpec.$,
      []);
  }

};

foo.mojom.FooHandler.getRemote = function() {
  let remote = new foo.mojom.FooHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'foo.mojom.FooHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for GetData
foo.mojom.FooHandler_GetData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'foo.mojom.FooHandler.GetData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

foo.mojom.FooHandler_GetData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'foo.mojom.FooHandler.GetData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
foo.mojom.FooHandlerPtr = foo.mojom.FooHandlerRemote;
foo.mojom.FooHandlerRequest = foo.mojom.FooHandlerPendingReceiver;

