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
        
        // Try Method 0: EchoTextInputType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoTextInputType (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.echoTextInputType');
          const result = this.impl.echoTextInputType(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.mojom.IMEStructTraitsTest_EchoTextInputType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ui.mojom.IMEStructTraitsTestReceiver = ui.mojom.IMEStructTraitsTestReceiver;

ui.mojom.IMEStructTraitsTestPtr = ui.mojom.IMEStructTraitsTestRemote;
ui.mojom.IMEStructTraitsTestRequest = ui.mojom.IMEStructTraitsTestPendingReceiver;

