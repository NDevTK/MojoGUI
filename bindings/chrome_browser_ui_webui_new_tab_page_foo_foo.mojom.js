// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/foo/foo.mojom
// Module: foo.mojom

'use strict';

// Module namespace
var foo = foo || {};
foo.mojom = foo.mojom || {};


// Struct: FooDataItem
foo.mojom.mojom.FooDataItemSpec = {
  $: {
    structSpec: {
      name: 'foo.mojom.FooDataItem',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'imageUrl', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: FooHandler
foo.mojom.mojom.FooHandler = {};

foo.mojom.mojom.FooHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

foo.mojom.mojom.FooHandlerRemote = class {
  static get $interfaceName() {
    return 'foo.mojom.FooHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      foo.mojom.mojom.FooHandlerPendingReceiver,
      handle);
    this.$ = new foo.mojom.mojom.FooHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

foo.mojom.mojom.FooHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      foo.mojom.mojom.FooHandler_GetData_ParamsSpec,
      foo.mojom.mojom.FooHandler_GetData_ResponseParamsSpec,
      []);
  }

};

foo.mojom.mojom.FooHandler.getRemote = function() {
  let remote = new foo.mojom.mojom.FooHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'foo.mojom.FooHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetData
foo.mojom.mojom.FooHandler_GetData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'foo.mojom.FooHandler.GetData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

foo.mojom.mojom.FooHandler_GetData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'foo.mojom.FooHandler.GetData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(foo.mojom.FooDataItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
foo.mojom.mojom.FooHandlerPtr = foo.mojom.mojom.FooHandlerRemote;
foo.mojom.mojom.FooHandlerRequest = foo.mojom.mojom.FooHandlerPendingReceiver;

