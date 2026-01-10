// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_consumer_traits_test.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.MemoryConsumerTraitsTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoMemoryConsumerTraits(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

content.mojom.MemoryConsumerTraitsTestReceiver = content.mojom.MemoryConsumerTraitsTestReceiver;

content.mojom.MemoryConsumerTraitsTestPtr = content.mojom.MemoryConsumerTraitsTestRemote;
content.mojom.MemoryConsumerTraitsTestRequest = content.mojom.MemoryConsumerTraitsTestPendingReceiver;

