// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_service.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: StorageService
storage.mojom.StorageService = {};

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
      []);
  }

  setDataDirectory(path, directory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.StorageService_SetDataDirectory_ParamsSpec,
      null,
      [path, directory]);
  }

  bindSessionStorageControl(path, receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec,
      null,
      [path, receiver]);
  }

  bindLocalStorageControl(path, receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec,
      null,
      [path, receiver]);
  }

  bindTestApi(test_api_receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.StorageService_BindTestApi_ParamsSpec,
      null,
      [test_api_receiver]);
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

// ParamsSpec for EnableAggressiveDomStorageFlushing
storage.mojom.StorageService_EnableAggressiveDomStorageFlushing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StorageService.EnableAggressiveDomStorageFlushing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDataDirectory
storage.mojom.StorageService_SetDataDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StorageService.SetDataDirectory_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindSessionStorageControl
storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StorageService.BindSessionStorageControl_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindLocalStorageControl
storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StorageService.BindLocalStorageControl_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindTestApi
storage.mojom.StorageService_BindTestApi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StorageService.BindTestApi_Params',
      packedSize: 16,
      fields: [
        { name: 'test_api_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.StorageServicePtr = storage.mojom.StorageServiceRemote;
storage.mojom.StorageServiceRequest = storage.mojom.StorageServicePendingReceiver;

