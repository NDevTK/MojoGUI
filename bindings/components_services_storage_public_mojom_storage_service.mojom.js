// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_service.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

storage.mojom.StorageService = {};
storage.mojom.StorageService.$interfaceName = 'storage.mojom.StorageService';
storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec = { $: {} };
storage.mojom.StorageService_SetDataDirectory_ParamsSpec = { $: {} };
storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec = { $: {} };
storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec = { $: {} };
storage.mojom.StorageService_BindTestApi_ParamsSpec = { $: {} };

storage.mojom.kStorageSandbox = sandbox.mojom.Sandbox.kUtility;

storage.mojom.kStorageSandbox = sandbox.mojom.Sandbox.kService;

// Interface: StorageService
mojo.internal.Struct(
    storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec, 'storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.StorageService_SetDataDirectory_ParamsSpec, 'storage.mojom.StorageService_SetDataDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(storage.mojom.DirectoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec, 'storage.mojom.StorageService_BindSessionStorageControl_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(storage.mojom.SessionStorageControlRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec, 'storage.mojom.StorageService_BindLocalStorageControl_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(storage.mojom.LocalStorageControlRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.StorageService_BindTestApi_ParamsSpec, 'storage.mojom.StorageService_BindTestApi_Params', [
      mojo.internal.StructField('test_api_receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.StorageServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.StorageServiceRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.StorageService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.StorageServicePendingReceiver,
      handle);
    this.$ = new storage.mojom.StorageServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.StorageServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableAggressiveDomStorageFlushing() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec,
      null,
      [],
      false);
  }

  setDataDirectory(path, directory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.StorageService_SetDataDirectory_ParamsSpec,
      null,
      [path, directory],
      false);
  }

  bindSessionStorageControl(path, receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec,
      null,
      [path, receiver],
      false);
  }

  bindLocalStorageControl(path, receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec,
      null,
      [path, receiver],
      false);
  }

  bindTestApi(test_api_receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.StorageService_BindTestApi_ParamsSpec,
      null,
      [test_api_receiver],
      false);
  }

};

storage.mojom.StorageService.getRemote = function() {
  let remote = new storage.mojom.StorageServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.StorageService',
    'context');
  return remote.$;
};

storage.mojom.StorageServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: EnableAggressiveDomStorageFlushing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAggressiveDomStorageFlushing (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetDataDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.StorageService_SetDataDirectory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDataDirectory (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindSessionStorageControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSessionStorageControl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindLocalStorageControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindLocalStorageControl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BindTestApi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.StorageService_BindTestApi_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTestApi (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStruct(storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableAggressiveDomStorageFlushing');
          const result = this.impl.enableAggressiveDomStorageFlushing();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.StorageService_SetDataDirectory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDataDirectory');
          const result = this.impl.setDataDirectory(params.path, params.directory);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindSessionStorageControl');
          const result = this.impl.bindSessionStorageControl(params.path, params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindLocalStorageControl');
          const result = this.impl.bindLocalStorageControl(params.path, params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.StorageService_BindTestApi_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindTestApi');
          const result = this.impl.bindTestApi(params.test_api_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.StorageServiceReceiver = storage.mojom.StorageServiceReceiver;

storage.mojom.StorageServicePtr = storage.mojom.StorageServiceRemote;
storage.mojom.StorageServiceRequest = storage.mojom.StorageServicePendingReceiver;

