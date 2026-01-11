// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/chromeos/web_ui_test.mojom
// Module: web_ui_test.mojom

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
  testComplete(failureMessage) {
    return this.$.testComplete(failureMessage);
  }
};

web_ui_test.mojom.TestRunnerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestRunner', [
      { explicit: null },
    ]);
  }

  testComplete(failureMessage) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestRunner', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec.$.structSpec);
          const result = this.impl.testComplete(params.failureMessage);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

web_ui_test.mojom.TestRunnerReceiver = web_ui_test.mojom.TestRunnerReceiver;

web_ui_test.mojom.TestRunnerPtr = web_ui_test.mojom.TestRunnerRemote;
web_ui_test.mojom.TestRunnerRequest = web_ui_test.mojom.TestRunnerPendingReceiver;

