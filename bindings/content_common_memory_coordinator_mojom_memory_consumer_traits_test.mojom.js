// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_consumer_traits_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var content = content || {};


// Interface: MemoryConsumerTraitsTest
content.mojom.mojom.MemoryConsumerTraitsTest = {};

content.mojom.mojom.MemoryConsumerTraitsTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.MemoryConsumerTraitsTestRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MemoryConsumerTraitsTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.MemoryConsumerTraitsTestPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.MemoryConsumerTraitsTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.MemoryConsumerTraitsTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoMemoryConsumerTraits(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec,
      content.mojom.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec,
      [in]);
  }

};

content.mojom.mojom.MemoryConsumerTraitsTest.getRemote = function() {
  let remote = new content.mojom.mojom.MemoryConsumerTraitsTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MemoryConsumerTraitsTest',
    'context');
  return remote.$;
};

// ParamsSpec for EchoMemoryConsumerTraits
content.mojom.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MemoryConsumerTraitsTest.EchoMemoryConsumerTraits_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: content.mojom.MemoryConsumerTraitsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.mojom.MemoryConsumerTraitsTest_EchoMemoryConsumerTraits_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MemoryConsumerTraitsTest.EchoMemoryConsumerTraits_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: content.mojom.MemoryConsumerTraitsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.MemoryConsumerTraitsTestPtr = content.mojom.mojom.MemoryConsumerTraitsTestRemote;
content.mojom.mojom.MemoryConsumerTraitsTestRequest = content.mojom.mojom.MemoryConsumerTraitsTestPendingReceiver;

