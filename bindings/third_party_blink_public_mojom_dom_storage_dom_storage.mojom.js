// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/dom_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DomStorageProvider = {};
blink.mojom.DomStorageProvider.$interfaceName = 'blink.mojom.DomStorageProvider';
blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec = { $: {} };
blink.mojom.DomStorage = {};
blink.mojom.DomStorage.$interfaceName = 'blink.mojom.DomStorage';
blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec = { $: {} };
blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec = { $: {} };
blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec = { $: {} };
blink.mojom.DomStorageClient = {};
blink.mojom.DomStorageClient.$interfaceName = 'blink.mojom.DomStorageClient';
blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec = { $: {} };
blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec = { $: {} };

// Interface: DomStorageProvider
mojo.internal.Struct(
    blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec, 'blink.mojom.DomStorageProvider_BindDomStorage_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.DomStorageSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.DomStorageClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.DomStorageProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStorageProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DomStorageProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindDomStorage(receiver, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec,
      null,
      [receiver, client],
      false);
  }

};

blink.mojom.DomStorageProvider.getRemote = function() {
  let remote = new blink.mojom.DomStorageProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageProvider',
    'context');
  return remote.$;
};

blink.mojom.DomStorageProviderReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindDomStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindDomStorage (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindDomStorage');
          const result = this.impl.bindDomStorage(params.receiver, params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DomStorageProviderReceiver = blink.mojom.DomStorageProviderReceiver;

blink.mojom.DomStorageProviderPtr = blink.mojom.DomStorageProviderRemote;
blink.mojom.DomStorageProviderRequest = blink.mojom.DomStorageProviderPendingReceiver;


// Interface: DomStorage
mojo.internal.Struct(
    blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec, 'blink.mojom.DomStorage_OpenLocalStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('area', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec, 'blink.mojom.DomStorage_BindSessionStorageNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SessionStorageNamespaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec, 'blink.mojom.DomStorage_BindSessionStorageArea_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_namespace', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.DomStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStoragePendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DomStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openLocalStorage(storage_key, local_frame_token, area) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec,
      null,
      [storage_key, local_frame_token, area],
      false);
  }

  bindSessionStorageNamespace(namespace_id, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec,
      null,
      [namespace_id, receiver],
      false);
  }

  bindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec,
      null,
      [storage_key, local_frame_token, namespace_id, session_namespace],
      false);
  }

};

blink.mojom.DomStorage.getRemote = function() {
  let remote = new blink.mojom.DomStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorage',
    'context');
  return remote.$;
};

blink.mojom.DomStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OpenLocalStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenLocalStorage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindSessionStorageNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSessionStorageNamespace (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindSessionStorageArea
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSessionStorageArea (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openLocalStorage');
          const result = this.impl.openLocalStorage(params.storage_key, params.local_frame_token, params.area);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindSessionStorageNamespace');
          const result = this.impl.bindSessionStorageNamespace(params.namespace_id, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindSessionStorageArea');
          const result = this.impl.bindSessionStorageArea(params.storage_key, params.local_frame_token, params.namespace_id, params.session_namespace);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DomStorageReceiver = blink.mojom.DomStorageReceiver;

blink.mojom.DomStoragePtr = blink.mojom.DomStorageRemote;
blink.mojom.DomStorageRequest = blink.mojom.DomStoragePendingReceiver;


// Interface: DomStorageClient
mojo.internal.Struct(
    blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec, 'blink.mojom.DomStorageClient_ResetSessionStorageConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec, 'blink.mojom.DomStorageClient_ResetLocalStorageConnections_Params', [
    ],
    [[0, 8]]);

blink.mojom.DomStorageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStorageClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DomStorageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resetSessionStorageConnections() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec,
      null,
      [],
      false);
  }

  resetLocalStorageConnections() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DomStorageClient.getRemote = function() {
  let remote = new blink.mojom.DomStorageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageClient',
    'context');
  return remote.$;
};

blink.mojom.DomStorageClientReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ResetSessionStorageConnections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetSessionStorageConnections (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResetLocalStorageConnections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetLocalStorageConnections (1)');
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
          const params = decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resetSessionStorageConnections');
          const result = this.impl.resetSessionStorageConnections();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resetLocalStorageConnections');
          const result = this.impl.resetLocalStorageConnections();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DomStorageClientReceiver = blink.mojom.DomStorageClientReceiver;

blink.mojom.DomStorageClientPtr = blink.mojom.DomStorageClientRemote;
blink.mojom.DomStorageClientRequest = blink.mojom.DomStorageClientPendingReceiver;

