// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_coordinator.mojom
// Module: content.mojom

'use strict';

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
      [],
      false);
  }

  notifyUpdateMemoryLimit(percentage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: NotifyReleaseMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyReleaseMemory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyUpdateMemoryLimit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyUpdateMemoryLimit (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
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
          const params = decoder.decodeStruct(content.mojom.ChildMemoryConsumer_NotifyReleaseMemory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyReleaseMemory');
          const result = this.impl.notifyReleaseMemory();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildMemoryConsumer_NotifyUpdateMemoryLimit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyUpdateMemoryLimit');
          const result = this.impl.notifyUpdateMemoryLimit(params.percentage);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      mojo.internal.StructField('child_consumer', 16, 0, mojo.internal.InterfaceProxy(content.mojom.ChildMemoryConsumerSpec), null, false, 0, undefined),
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
        
        // Try Method 0: RegisterChildMemoryConsumer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterChildMemoryConsumer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStruct(content.mojom.BrowserMemoryConsumerRegistry_RegisterChildMemoryConsumer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerChildMemoryConsumer');
          const result = this.impl.registerChildMemoryConsumer(params.consumer_id, params.traits, params.child_consumer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.BrowserMemoryConsumerRegistryReceiver = content.mojom.BrowserMemoryConsumerRegistryReceiver;

content.mojom.BrowserMemoryConsumerRegistryPtr = content.mojom.BrowserMemoryConsumerRegistryRemote;
content.mojom.BrowserMemoryConsumerRegistryRequest = content.mojom.BrowserMemoryConsumerRegistryPendingReceiver;

