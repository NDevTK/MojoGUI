// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/main_frame_counter_test.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.MainFrameCounterTest = {};
content.mojom.MainFrameCounterTest.$interfaceName = 'content.mojom.MainFrameCounterTest';
content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec = { $: {} };
content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec = { $: {} };

// Interface: MainFrameCounterTest
mojo.internal.Struct(
    content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec, 'content.mojom.MainFrameCounterTest_HasMainFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec, 'content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParams', [
      mojo.internal.StructField('has_main_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.MainFrameCounterTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MainFrameCounterTestRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MainFrameCounterTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MainFrameCounterTestPendingReceiver,
      handle);
    this.$ = new content.mojom.MainFrameCounterTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  hasMainFrame() {
    return this.$.hasMainFrame();
  }
};

content.mojom.MainFrameCounterTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MainFrameCounterTest', [
      { explicit: null },
    ]);
  }

  hasMainFrame() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec,
      content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.MainFrameCounterTest.getRemote = function() {
  let remote = new content.mojom.MainFrameCounterTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MainFrameCounterTest',
    'context');
  return remote.$;
};

content.mojom.MainFrameCounterTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MainFrameCounterTest', [
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
             decoder.decodeStructInline(content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec.$.structSpec);
          const result = this.impl.hasMainFrame();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec);
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

content.mojom.MainFrameCounterTestReceiver = content.mojom.MainFrameCounterTestReceiver;

content.mojom.MainFrameCounterTestPtr = content.mojom.MainFrameCounterTestRemote;
content.mojom.MainFrameCounterTestRequest = content.mojom.MainFrameCounterTestPendingReceiver;

