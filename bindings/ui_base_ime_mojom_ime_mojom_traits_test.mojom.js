// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/ime_mojom_traits_test.mojom
// Module: ui.mojom

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
  echoTextInputType(in) {
    return this.$.echoTextInputType(in);
  }
};

ui.mojom.IMEStructTraitsTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IMEStructTraitsTest', [
      { explicit: null },
    ]);
  }

  echoTextInputType(in) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('IMEStructTraitsTest', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.mojom.IMEStructTraitsTest_EchoTextInputType_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

ui.mojom.IMEStructTraitsTestReceiver = ui.mojom.IMEStructTraitsTestReceiver;

ui.mojom.IMEStructTraitsTestPtr = ui.mojom.IMEStructTraitsTestRemote;
ui.mojom.IMEStructTraitsTestRequest = ui.mojom.IMEStructTraitsTestPendingReceiver;

