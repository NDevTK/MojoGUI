// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_consumer_traits_test.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.MemoryConsumerTraitsTest = {};
content.mojom.MemoryConsumerTraitsTest.$interfaceName = 'content.mojom.MemoryConsumerTraitsTest';
content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec = { $: {} };
content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec = { $: {} };

// Interface: MemoryConsumerTraitsTest
mojo.internal.Struct(
    content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec, 'content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_Params', [
      mojo.internal.StructField('in', 0, 0, content.mojom.MemoryConsumerTraitsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec, 'content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, content.mojom.MemoryConsumerTraitsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.MemoryConsumerTraitsTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MemoryConsumerTraitsTestRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MemoryConsumerTraitsTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MemoryConsumerTraitsTestPendingReceiver,
      handle);
    this.$ = new content.mojom.MemoryConsumerTraitsTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoMemoryConsumerTraits(in) {
    return this.$.echoMemoryConsumerTraits(in);
  }
};

content.mojom.MemoryConsumerTraitsTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MemoryConsumerTraitsTest', [
      { explicit: null },
    ]);
  }

  echoMemoryConsumerTraits(in) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec,
      content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec,
      [in],
      false);
  }

};

content.mojom.MemoryConsumerTraitsTest.getRemote = function() {
  let remote = new content.mojom.MemoryConsumerTraitsTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MemoryConsumerTraitsTest',
    'context');
  return remote.$;
};

content.mojom.MemoryConsumerTraitsTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MemoryConsumerTraitsTest', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec.$.structSpec);
          const result = this.impl.echoMemoryConsumerTraits(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec);
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

content.mojom.MemoryConsumerTraitsTestReceiver = content.mojom.MemoryConsumerTraitsTestReceiver;

content.mojom.MemoryConsumerTraitsTestPtr = content.mojom.MemoryConsumerTraitsTestRemote;
content.mojom.MemoryConsumerTraitsTestRequest = content.mojom.MemoryConsumerTraitsTestPendingReceiver;

