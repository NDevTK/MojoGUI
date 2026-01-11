// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_coordinator.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.MemoryConsumerTraitsSpec = { $: {} };
content.mojom.ChildMemoryConsumer = {};
content.mojom.ChildMemoryConsumer.$interfaceName = 'content.mojom.ChildMemoryConsumer';
content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec = { $: {} };
content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec = { $: {} };
content.mojom.BrowserMemoryConsumerRegistry = {};
content.mojom.BrowserMemoryConsumerRegistry.$interfaceName = 'content.mojom.BrowserMemoryConsumerRegistry';
content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec = { $: {} };

// Struct: MemoryConsumerTraits
mojo.internal.Struct(
    content.mojom.MemoryConsumerTraitsSpec, 'content.mojom.MemoryConsumerTraits', [
      mojo.internal.StructField('supports_memory_limit', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('in_process', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('estimated_memory_usage', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('release_memory_cost', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('recreate_memory_cost', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('information_retention', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('memory_release_behavior', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('execution_type', 7, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('release_gc_references', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('garbage_collects_v8_heap', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ChildMemoryConsumer
mojo.internal.Struct(
    content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec, 'content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec, 'content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_Params', [
      mojo.internal.StructField('percentage', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  notifyReleaseMemory() {
    return this.$.notifyReleaseMemory();
  }
  notifyUpdateMemoryLimit(percentage) {
    return this.$.notifyUpdateMemoryLimit(percentage);
  }
};

content.mojom.ChildMemoryConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildMemoryConsumer', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyReleaseMemory() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec,
      null,
      [],
      false);
  }

  notifyUpdateMemoryLimit(percentage) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec,
      null,
      [percentage],
      false);
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

content.mojom.ChildMemoryConsumerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildMemoryConsumer', [
      { explicit: null },
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
             decoder.decodeStructInline(content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec.$.structSpec);
          const result = this.impl.notifyReleaseMemory();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec.$.structSpec);
          const result = this.impl.notifyUpdateMemoryLimit(params.percentage);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.ChildMemoryConsumerReceiver = content.mojom.ChildMemoryConsumerReceiver;

content.mojom.ChildMemoryConsumerPtr = content.mojom.ChildMemoryConsumerRemote;
content.mojom.ChildMemoryConsumerRequest = content.mojom.ChildMemoryConsumerPendingReceiver;


// Interface: BrowserMemoryConsumerRegistry
mojo.internal.Struct(
    content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec, 'content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_Params', [
      mojo.internal.StructField('consumer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('traits', 8, 0, content.mojom.MemoryConsumerTraitsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_consumer', 16, 0, mojo.internal.InterfaceProxy(content.mojom.ChildMemoryConsumerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
  registerChildMemoryConsumer(consumer_id, traits, child_consumer) {
    return this.$.registerChildMemoryConsumer(consumer_id, traits, child_consumer);
  }
};

content.mojom.BrowserMemoryConsumerRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BrowserMemoryConsumerRegistry', [
      { explicit: null },
    ]);
  }

  registerChildMemoryConsumer(consumer_id, traits, child_consumer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec,
      null,
      [consumer_id, traits, child_consumer],
      false);
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

content.mojom.BrowserMemoryConsumerRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BrowserMemoryConsumerRegistry', [
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
             decoder.decodeStructInline(content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec.$.structSpec);
          const result = this.impl.registerChildMemoryConsumer(params.consumer_id, params.traits, params.child_consumer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.BrowserMemoryConsumerRegistryReceiver = content.mojom.BrowserMemoryConsumerRegistryReceiver;

content.mojom.BrowserMemoryConsumerRegistryPtr = content.mojom.BrowserMemoryConsumerRegistryRemote;
content.mojom.BrowserMemoryConsumerRegistryRequest = content.mojom.BrowserMemoryConsumerRegistryPendingReceiver;

