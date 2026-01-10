// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_service.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};
var components = components || {};
var services = services || {};

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
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    storage.mojom.StorageService_SetDataDirectory_ParamsSpec, 'storage.mojom.StorageService_SetDataDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(storage.mojom.DirectoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.StorageService_BindSessionStorageControl_ParamsSpec, 'storage.mojom.StorageService_BindSessionStorageControl_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(storage.mojom.SessionStorageControlRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.StorageService_BindLocalStorageControl_ParamsSpec, 'storage.mojom.StorageService_BindLocalStorageControl_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
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

storage.mojom.StorageServicePtr = storage.mojom.StorageServiceRemote;
storage.mojom.StorageServiceRequest = storage.mojom.StorageServicePendingReceiver;

