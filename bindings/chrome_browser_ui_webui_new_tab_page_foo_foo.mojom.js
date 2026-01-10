// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/foo/foo.mojom
// Module: foo.mojom

'use strict';

// Module namespace
var foo = foo || {};
foo.mojom = foo.mojom || {};

foo.mojom.FooDataItemSpec = { $: {} };
foo.mojom.FooHandler = {};
foo.mojom.FooHandler.$interfaceName = 'foo.mojom.FooHandler';
foo.mojom.FooHandler_GetData_ParamsSpec = { $: {} };
foo.mojom.FooHandler_GetData_ResponseParamsSpec = { $: {} };

// Struct: FooDataItem
mojo.internal.Struct(
    foo.mojom.FooDataItemSpec, 'foo.mojom.FooDataItem', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('imageUrl', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FooHandler
mojo.internal.Struct(
    foo.mojom.FooHandler_GetData_ParamsSpec, 'foo.mojom.FooHandler_GetData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    foo.mojom.FooHandler_GetData_ResponseParamsSpec, 'foo.mojom.FooHandler_GetData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(foo.mojom.FooDataItemSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      foo.mojom.FooHandler_GetData_ParamsSpec,
      foo.mojom.FooHandler_GetData_ResponseParamsSpec,
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
};

foo.mojom.FooHandlerPtr = foo.mojom.FooHandlerRemote;
foo.mojom.FooHandlerRequest = foo.mojom.FooHandlerPendingReceiver;

