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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: TestComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TestComplete (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(web_ui_test.mojom.TestRunner_TestComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.testComplete');
          const result = this.impl.testComplete(params.failureMessage);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

web_ui_test.mojom.TestRunnerReceiver = web_ui_test.mojom.TestRunnerReceiver;

web_ui_test.mojom.TestRunnerPtr = web_ui_test.mojom.TestRunnerRemote;
web_ui_test.mojom.TestRunnerRequest = web_ui_test.mojom.TestRunnerPendingReceiver;

