// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/chromeos/web_ui_test.mojom
// Module: web_ui_test.mojom

'use strict';

// Module namespace
var web_ui_test = web_ui_test || {};
web_ui_test.mojom = web_ui_test.mojom || {};

web_ui_test.mojom.TestRunner = {};
web_ui_test.mojom.TestRunner.$interfaceName = 'web_ui_test.mojom.TestRunner';
web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec = { $: {} };

// Interface: TestRunner
mojo.internal.Struct(
    web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec, 'web_ui_test.mojom.TestRunner_TestComplete_Params', [
      mojo.internal.StructField('failureMessage', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

web_ui_test.mojom.TestRunnerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_ui_test.mojom.TestRunnerRemote = class {
  static get $interfaceName() {
    return 'web_ui_test.mojom.TestRunner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_ui_test.mojom.TestRunnerPendingReceiver,
      handle);
    this.$ = new web_ui_test.mojom.TestRunnerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_ui_test.mojom.TestRunnerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  testComplete(failureMessage) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec,
      null,
      [failureMessage],
      false);
  }

};

web_ui_test.mojom.TestRunner.getRemote = function() {
  let remote = new web_ui_test.mojom.TestRunnerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_ui_test.mojom.TestRunner',
    'context');
  return remote.$;
};

web_ui_test.mojom.TestRunnerReceiver = class {
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
          const params = web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.testComplete(params.failureMessage);
          break;
        }
      }
    });
  }
};

web_ui_test.mojom.TestRunnerReceiver = web_ui_test.mojom.TestRunnerReceiver;

web_ui_test.mojom.TestRunnerPtr = web_ui_test.mojom.TestRunnerRemote;
web_ui_test.mojom.TestRunnerRequest = web_ui_test.mojom.TestRunnerPendingReceiver;

