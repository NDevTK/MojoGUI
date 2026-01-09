// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_coordinator.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: ChildMemoryConsumer
content.mojom.ChildMemoryConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ChildMemoryConsumerRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ChildMemoryConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ChildMemoryConsumerPendingReceiver,
      handle);
    this.$ = new content.mojom.ChildMemoryConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.ChildMemoryConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyReleaseMemory() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec.$,
      null,
      []);
  }

  notifyUpdateMemoryLimit(percentage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec.$,
      null,
      [percentage]);
  }

};

content.mojom.ChildMemoryConsumer.getRemote = function() {
  let remote = new content.mojom.ChildMemoryConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ChildMemoryConsumer',
    'context');
  return remote.$;
}};

// ParamsSpec for NotifyReleaseMemory
content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildMemoryConsumer.NotifyReleaseMemory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotifyUpdateMemoryLimit
content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildMemoryConsumer.NotifyUpdateMemoryLimit_Params',
      packedSize: 16,
      fields: [
        { name: 'percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
content.mojom.ChildMemoryConsumerPtr = content.mojom.ChildMemoryConsumerRemote;
content.mojom.ChildMemoryConsumerRequest = content.mojom.ChildMemoryConsumerPendingReceiver;


// Interface: BrowserMemoryConsumerRegistry
content.mojom.BrowserMemoryConsumerRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.BrowserMemoryConsumerRegistryRemote = class {
  static get $interfaceName() {
    return 'content.mojom.BrowserMemoryConsumerRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.BrowserMemoryConsumerRegistryPendingReceiver,
      handle);
    this.$ = new content.mojom.BrowserMemoryConsumerRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.BrowserMemoryConsumerRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerChildMemoryConsumer(consumer_id, traits, child_consumer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec.$,
      null,
      [consumer_id, traits, child_consumer]);
  }

};

content.mojom.BrowserMemoryConsumerRegistry.getRemote = function() {
  let remote = new content.mojom.BrowserMemoryConsumerRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.BrowserMemoryConsumerRegistry',
    'context');
  return remote.$;
}};

// ParamsSpec for RegisterChildMemoryConsumer
content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.BrowserMemoryConsumerRegistry.RegisterChildMemoryConsumer_Params',
      packedSize: 32,
      fields: [
        { name: 'consumer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'child_consumer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
content.mojom.BrowserMemoryConsumerRegistryPtr = content.mojom.BrowserMemoryConsumerRegistryRemote;
content.mojom.BrowserMemoryConsumerRegistryRequest = content.mojom.BrowserMemoryConsumerRegistryPendingReceiver;

