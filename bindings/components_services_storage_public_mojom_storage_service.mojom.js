// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_service.mojom
// Module: storage.mojom

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
  enableAggressiveDomStorageFlushing() {
    return this.$.enableAggressiveDomStorageFlushing();
  }
  setDataDirectory(path, directory) {
    return this.$.setDataDirectory(path, directory);
  }
  bindSessionStorageControl(path, receiver) {
    return this.$.bindSessionStorageControl(path, receiver);
  }
  bindLocalStorageControl(path, receiver) {
    return this.$.bindLocalStorageControl(path, receiver);
  }
  bindTestApi(test_api_receiver) {
    return this.$.bindTestApi(test_api_receiver);
  }
};

storage.mojom.StorageServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  enableAggressiveDomStorageFlushing() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec,
      null,
      [],
      false);
  }

  setDataDirectory(path, directory) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.StorageService_SetDataDirectory_ParamsSpec,
      null,
      [path, directory],
      false);
  }

  bindSessionStorageControl(path, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec,
      null,
      [path, receiver],
      false);
  }

  bindLocalStorageControl(path, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec,
      null,
      [path, receiver],
      false);
  }

  bindTestApi(test_api_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('StorageService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.StorageService_SetDataDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.StorageService_BindTestApi_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec.$.structSpec);
          const result = this.impl.enableAggressiveDomStorageFlushing();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.StorageService_SetDataDirectory_ParamsSpec.$.structSpec);
          const result = this.impl.setDataDirectory(params.path, params.directory);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec.$.structSpec);
          const result = this.impl.bindSessionStorageControl(params.path, params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec.$.structSpec);
          const result = this.impl.bindLocalStorageControl(params.path, params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.StorageService_BindTestApi_ParamsSpec.$.structSpec);
          const result = this.impl.bindTestApi(params.test_api_receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.StorageServiceReceiver = storage.mojom.StorageServiceReceiver;

storage.mojom.StorageServicePtr = storage.mojom.StorageServiceRemote;
storage.mojom.StorageServiceRequest = storage.mojom.StorageServicePendingReceiver;

