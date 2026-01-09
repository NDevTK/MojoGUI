// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/chromeos/web_ui_test.mojom
// Module: web_ui_test.mojom

'use strict';

// Module namespace
var web_ui_test = web_ui_test || {};
web_ui_test.mojom = web_ui_test.mojom || {};


// Interface: TestRunner
web_ui_test.mojom.TestRunner = {};

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
      null,
      [failureMessage],
      undefined,
      undefined
    );
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

// ParamsSpec for TestComplete
web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_ui_test.mojom.TestRunner.TestComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'failureMessage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
web_ui_test.mojom.TestRunnerPtr = web_ui_test.mojom.TestRunnerRemote;
web_ui_test.mojom.TestRunnerRequest = web_ui_test.mojom.TestRunnerPendingReceiver;

