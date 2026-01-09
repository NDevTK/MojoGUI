// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/ime_mojom_traits_test.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Interface: IMEStructTraitsTest
ui.mojom.IMEStructTraitsTest = {};

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
      [in]);
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

// ParamsSpec for EchoTextInputType
ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.IMEStructTraitsTest.EchoTextInputType_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.mojom.IMEStructTraitsTest_EchoTextInputType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.IMEStructTraitsTest.EchoTextInputType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ui.mojom.IMEStructTraitsTestPtr = ui.mojom.IMEStructTraitsTestRemote;
ui.mojom.IMEStructTraitsTestRequest = ui.mojom.IMEStructTraitsTestPendingReceiver;

