// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_coordinator.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: MemoryConsumerTraits
content.mojom.MemoryConsumerTraitsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MemoryConsumerTraits',
      packedSize: 24,
      fields: [
        { name: 'supports_memory_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'in_process', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'estimated_memory_usage', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'release_memory_cost', packedOffset: 3, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'recreate_memory_cost', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'information_retention', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'memory_release_behavior', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'execution_type', packedOffset: 7, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'release_gc_references', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'garbage_collects_v8_heap', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ChildMemoryConsumer
content.mojom.ChildMemoryConsumer = {};

content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_Params',
      packedSize: 16,
      fields: [
        { name: 'percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec,
      null,
      []);
  }

  notifyUpdateMemoryLimit(percentage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec,
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
};

// ParamsSpec for NotifyReleaseMemory
content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildMemoryConsumer.NotifyReleaseMemory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifyUpdateMemoryLimit
content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildMemoryConsumer.NotifyUpdateMemoryLimit_Params',
      packedSize: 16,
      fields: [
        { name: 'percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.ChildMemoryConsumerPtr = content.mojom.ChildMemoryConsumerRemote;
content.mojom.ChildMemoryConsumerRequest = content.mojom.ChildMemoryConsumerPendingReceiver;


// Interface: BrowserMemoryConsumerRegistry
content.mojom.BrowserMemoryConsumerRegistry = {};

content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_Params',
      packedSize: 32,
      fields: [
        { name: 'consumer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'traits', packedOffset: 8, packedBitOffset: 0, type: content.mojom.MemoryConsumerTraitsSpec, nullable: false, minVersion: 0 },
        { name: 'child_consumer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(content.mojom.ChildMemoryConsumerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
      content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec,
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
};

// ParamsSpec for RegisterChildMemoryConsumer
content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.BrowserMemoryConsumerRegistry.RegisterChildMemoryConsumer_Params',
      packedSize: 32,
      fields: [
        { name: 'consumer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'traits', packedOffset: 8, packedBitOffset: 0, type: content.mojom.MemoryConsumerTraitsSpec, nullable: false, minVersion: 0 },
        { name: 'child_consumer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(content.mojom.ChildMemoryConsumerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
content.mojom.BrowserMemoryConsumerRegistryPtr = content.mojom.BrowserMemoryConsumerRegistryRemote;
content.mojom.BrowserMemoryConsumerRegistryRequest = content.mojom.BrowserMemoryConsumerRegistryPendingReceiver;

