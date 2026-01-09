// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_consumer_traits_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: MemoryConsumerTraitsTest
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
      content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec.$,
      content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec.$,
      [in]);
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
}};

// ParamsSpec for EchoMemoryConsumerTraits
content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MemoryConsumerTraitsTest.EchoMemoryConsumerTraits_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

content.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MemoryConsumerTraitsTest.EchoMemoryConsumerTraits_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
content.mojom.MemoryConsumerTraitsTestPtr = content.mojom.MemoryConsumerTraitsTestRemote;
content.mojom.MemoryConsumerTraitsTestRequest = content.mojom.MemoryConsumerTraitsTestPendingReceiver;

