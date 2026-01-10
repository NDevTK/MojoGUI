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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableAggressiveDomStorageFlushing();
          break;
        }
        case 1: {
          const params = storage.mojom.StorageService_SetDataDirectory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDataDirectory(params.path, params.directory);
          break;
        }
        case 2: {
          const params = storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSessionStorageControl(params.path, params.receiver);
          break;
        }
        case 3: {
          const params = storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindLocalStorageControl(params.path, params.receiver);
          break;
        }
        case 4: {
          const params = storage.mojom.StorageService_BindTestApi_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTestApi(params.test_api_receiver);
          break;
        }
      }
    }});
  }
};

storage.mojom.StorageServiceReceiver = storage.mojom.StorageServiceReceiver;

storage.mojom.StorageServicePtr = storage.mojom.StorageServiceRemote;
storage.mojom.StorageServiceRequest = storage.mojom.StorageServicePendingReceiver;

