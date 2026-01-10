// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/ime_mojom_traits_test.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.IMEStructTraitsTest = {};
ui.mojom.IMEStructTraitsTest.$interfaceName = 'ui.mojom.IMEStructTraitsTest';
ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec = { $: {} };
ui.mojom.IMEStructTraitsTest_EchoTextInputType_ResponseParamsSpec = { $: {} };

// Interface: IMEStructTraitsTest
mojo.internal.Struct(
    ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec, 'ui.mojom.IMEStructTraitsTest_EchoTextInputType_Params', [
      mojo.internal.StructField('in', 0, 0, ui.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.mojom.IMEStructTraitsTest_EchoTextInputType_ResponseParamsSpec, 'ui.mojom.IMEStructTraitsTest_EchoTextInputType_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, ui.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ui.mojom.IMEStructTraitsTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.mojom.IMEStructTraitsTestRemote = class {
  static get $interfaceName() {
    return 'ui.mojom.IMEStructTraitsTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.mojom.IMEStructTraitsTestPendingReceiver,
      handle);
    this.$ = new ui.mojom.IMEStructTraitsTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.mojom.IMEStructTraitsTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoTextInputType(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec,
      ui.mojom.IMEStructTraitsTest_EchoTextInputType_ResponseParamsSpec,
      [in],
      false);
  }

};

ui.mojom.IMEStructTraitsTest.getRemote = function() {
  let remote = new ui.mojom.IMEStructTraitsTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.mojom.IMEStructTraitsTest',
    'context');
  return remote.$;
};

ui.mojom.IMEStructTraitsTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoTextInputType(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ui.mojom.IMEStructTraitsTest_EchoTextInputType_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ui.mojom.IMEStructTraitsTestReceiver = ui.mojom.IMEStructTraitsTestReceiver;

ui.mojom.IMEStructTraitsTestPtr = ui.mojom.IMEStructTraitsTestRemote;
ui.mojom.IMEStructTraitsTestRequest = ui.mojom.IMEStructTraitsTestPendingReceiver;

