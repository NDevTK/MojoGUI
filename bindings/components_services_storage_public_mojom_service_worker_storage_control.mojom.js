// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/service_worker_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: ServiceWorkerStorageStorageKeyState
storage.mojom.ServiceWorkerStorageStorageKeyState = {
  kKeep: 0,
  kDelete: 1,
};

// Interface: ServiceWorkerLiveVersionRef
storage.mojom.ServiceWorkerLiveVersionRef = {};

storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerLiveVersionRefRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerLiveVersionRef';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerLiveVersionRefRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerLiveVersionRefRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

storage.mojom.ServiceWorkerLiveVersionRef.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerLiveVersionRefRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerLiveVersionRef',
    'context');
  return remote.$;
};

// Legacy compatibility
storage.mojom.ServiceWorkerLiveVersionRefPtr = storage.mojom.ServiceWorkerLiveVersionRefRemote;
storage.mojom.ServiceWorkerLiveVersionRefRequest = storage.mojom.ServiceWorkerLiveVersionRefPendingReceiver;


// Interface: ServiceWorkerResourceReader
storage.mojom.ServiceWorkerResourceReader = {};

storage.mojom.ServiceWorkerResourceReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerResourceReaderRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerResourceReaderPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerResourceReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerResourceReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readResponseHead() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  prepareReadData(size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec,
      [size],
      undefined,
      undefined
    );
  }

  readData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec,
      storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

};

storage.mojom.ServiceWorkerResourceReader.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerResourceReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceReader',
    'context');
  return remote.$;
};

// ParamsSpec for ReadResponseHead
storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceReader.ReadResponseHead_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerResourceReader_ReadResponseHead_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceReader.ReadResponseHead_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'response_head', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'metadata', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for PrepareReadData
storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceReader.PrepareReadData_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerResourceReader_PrepareReadData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceReader.PrepareReadData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadData
storage.mojom.ServiceWorkerResourceReader_ReadData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceReader.ReadData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerResourceReader_ReadData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceReader.ReadData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.ServiceWorkerResourceReaderPtr = storage.mojom.ServiceWorkerResourceReaderRemote;
storage.mojom.ServiceWorkerResourceReaderRequest = storage.mojom.ServiceWorkerResourceReaderPendingReceiver;


// Interface: ServiceWorkerResourceWriter
storage.mojom.ServiceWorkerResourceWriter = {};

storage.mojom.ServiceWorkerResourceWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerResourceWriterRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerResourceWriterPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerResourceWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerResourceWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  writeResponseHead(response_head) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec,
      storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec,
      storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec,
      [response_head],
      undefined,
      undefined
    );
  }

  writeData(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec,
      storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec,
      storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec,
      [data],
      undefined,
      undefined
    );
  }

};

storage.mojom.ServiceWorkerResourceWriter.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerResourceWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceWriter',
    'context');
  return remote.$;
};

// ParamsSpec for WriteResponseHead
storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceWriter.WriteResponseHead_Params',
      packedSize: 16,
      fields: [
        { name: 'response_head', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerResourceWriter_WriteResponseHead_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceWriter.WriteResponseHead_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteData
storage.mojom.ServiceWorkerResourceWriter_WriteData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceWriter.WriteData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerResourceWriter_WriteData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceWriter.WriteData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.ServiceWorkerResourceWriterPtr = storage.mojom.ServiceWorkerResourceWriterRemote;
storage.mojom.ServiceWorkerResourceWriterRequest = storage.mojom.ServiceWorkerResourceWriterPendingReceiver;


// Interface: ServiceWorkerResourceMetadataWriter
storage.mojom.ServiceWorkerResourceMetadataWriter = {};

storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerResourceMetadataWriterRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerResourceMetadataWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerResourceMetadataWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerResourceMetadataWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  writeMetadata(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec,
      storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec,
      storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec,
      [data],
      undefined,
      undefined
    );
  }

};

storage.mojom.ServiceWorkerResourceMetadataWriter.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerResourceMetadataWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerResourceMetadataWriter',
    'context');
  return remote.$;
};

// ParamsSpec for WriteMetadata
storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceMetadataWriter.WriteMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerResourceMetadataWriter_WriteMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceMetadataWriter.WriteMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.ServiceWorkerResourceMetadataWriterPtr = storage.mojom.ServiceWorkerResourceMetadataWriterRemote;
storage.mojom.ServiceWorkerResourceMetadataWriterRequest = storage.mojom.ServiceWorkerResourceMetadataWriterPendingReceiver;


// Interface: ServiceWorkerStorageControl
storage.mojom.ServiceWorkerStorageControl = {};

storage.mojom.ServiceWorkerStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.ServiceWorkerStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.ServiceWorkerStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.ServiceWorkerStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.ServiceWorkerStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.ServiceWorkerStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  delete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  recover(versions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec,
      null,
      null,
      [versions],
      undefined,
      undefined
    );
  }

  getRegisteredStorageKeys() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  findRegistrationForClientUrl(client_url, key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec,
      [client_url, key],
      undefined,
      undefined
    );
  }

  findRegistrationForScope(scope, key) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec,
      [scope, key],
      undefined,
      undefined
    );
  }

  findRegistrationForId(registration_id, key) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec,
      [registration_id, key],
      undefined,
      undefined
    );
  }

  getRegistrationsForStorageKey(key) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec,
      [key],
      undefined,
      undefined
    );
  }

  getUsageForStorageKey(key) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec,
      [key],
      undefined,
      undefined
    );
  }

  getAllRegistrationsDeprecated() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getFakeRegistrationForClientUrl(client_url, key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec,
      [client_url, key],
      undefined,
      undefined
    );
  }

  storeRegistration(registration, resources) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec,
      [registration, resources],
      undefined,
      undefined
    );
  }

  deleteRegistration(registration_id, key) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec,
      [registration_id, key],
      undefined,
      undefined
    );
  }

  updateToActiveState(registration_id, key) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec,
      [registration_id, key],
      undefined,
      undefined
    );
  }

  updateLastUpdateCheckTime(registration_id, key, last_update_check_time) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec,
      [registration_id, key, last_update_check_time],
      undefined,
      undefined
    );
  }

  updateNavigationPreloadEnabled(registration_id, key, enable) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec,
      [registration_id, key, enable],
      undefined,
      undefined
    );
  }

  updateNavigationPreloadHeader(registration_id, key, value) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec,
      [registration_id, key, value],
      undefined,
      undefined
    );
  }

  updateFetchHandlerType(registration_id, key, type) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec,
      [registration_id, key, type],
      undefined,
      undefined
    );
  }

  updateResourceSha256Checksums(registratation_id, key, updated_sha256_checksums) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec,
      [registratation_id, key, updated_sha256_checksums],
      undefined,
      undefined
    );
  }

  getNewRegistrationId() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getNewVersionId() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getNewResourceId() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  createResourceReader(resource_id, reader) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec,
      null,
      null,
      [resource_id, reader],
      undefined,
      undefined
    );
  }

  createResourceWriter(resource_id, writer) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec,
      null,
      null,
      [resource_id, writer],
      undefined,
      undefined
    );
  }

  createResourceMetadataWriter(resource_id, writer) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec,
      null,
      null,
      [resource_id, writer],
      undefined,
      undefined
    );
  }

  storeUncommittedResourceId(resource_id) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec,
      [resource_id],
      undefined,
      undefined
    );
  }

  doomUncommittedResources(resource_ids) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec,
      [resource_ids],
      undefined,
      undefined
    );
  }

  getUserData(registration_id, keys) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec,
      [registration_id, keys],
      undefined,
      undefined
    );
  }

  storeUserData(registration_id, key, user_data) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec,
      [registration_id, key, user_data],
      undefined,
      undefined
    );
  }

  clearUserData(registration_id, keys) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec,
      [registration_id, keys],
      undefined,
      undefined
    );
  }

  getUserDataByKeyPrefix(registration_id, key_prefix) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec,
      [registration_id, key_prefix],
      undefined,
      undefined
    );
  }

  getUserKeysAndDataByKeyPrefix(registration_id, key_prefix) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec,
      [registration_id, key_prefix],
      undefined,
      undefined
    );
  }

  clearUserDataByKeyPrefixes(registratation_id, key_prefixes) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec,
      [registratation_id, key_prefixes],
      undefined,
      undefined
    );
  }

  getUserDataForAllRegistrations(key) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec,
      [key],
      undefined,
      undefined
    );
  }

  getUserDataForAllRegistrationsByKeyPrefix(key_prefix) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      [key_prefix],
      undefined,
      undefined
    );
  }

  clearUserDataForAllRegistrationsByKeyPrefix(key_prefix) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec,
      [key_prefix],
      undefined,
      undefined
    );
  }

  performStorageCleanup() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  applyPolicyUpdates(policy_updates) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec,
      [policy_updates],
      undefined,
      undefined
    );
  }

  getPurgingResourceIdsForTest() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getPurgingResourceIdsForLiveVersionForTest(version_id) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec,
      [version_id],
      undefined,
      undefined
    );
  }

  getPurgeableResourceIdsForTest() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getUncommittedResourceIdsForTest() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec,
      storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setPurgingCompleteCallbackForTest() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

storage.mojom.ServiceWorkerStorageControl.getRemote = function() {
  let remote = new storage.mojom.ServiceWorkerStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.ServiceWorkerStorageControl',
    'context');
  return remote.$;
};

// ParamsSpec for Disable
storage.mojom.ServiceWorkerStorageControl_Disable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.Disable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Delete
storage.mojom.ServiceWorkerStorageControl_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.Delete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_Delete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.Delete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Recover
storage.mojom.ServiceWorkerStorageControl_Recover_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.Recover_Params',
      packedSize: 16,
      fields: [
        { name: 'versions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRegisteredStorageKeys
storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetRegisteredStorageKeys_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetRegisteredStorageKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetRegisteredStorageKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FindRegistrationForClientUrl
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.FindRegistrationForClientUrl_Params',
      packedSize: 24,
      fields: [
        { name: 'client_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_FindRegistrationForClientUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.FindRegistrationForClientUrl_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for FindRegistrationForScope
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.FindRegistrationForScope_Params',
      packedSize: 24,
      fields: [
        { name: 'scope', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_FindRegistrationForScope_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.FindRegistrationForScope_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for FindRegistrationForId
storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.FindRegistrationForId_Params',
      packedSize: 24,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_FindRegistrationForId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.FindRegistrationForId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetRegistrationsForStorageKey
storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetRegistrationsForStorageKey_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetRegistrationsForStorageKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetRegistrationsForStorageKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'registrations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetUsageForStorageKey
storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUsageForStorageKey_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetUsageForStorageKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUsageForStorageKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'usage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetAllRegistrationsDeprecated
storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetAllRegistrationsDeprecated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetAllRegistrationsDeprecated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetAllRegistrationsDeprecated_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'registrations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetFakeRegistrationForClientUrl
storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetFakeRegistrationForClientUrl_Params',
      packedSize: 24,
      fields: [
        { name: 'client_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetFakeRegistrationForClientUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetFakeRegistrationForClientUrl_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'scopes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for StoreRegistration
storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.StoreRegistration_Params',
      packedSize: 24,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'resources', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_StoreRegistration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.StoreRegistration_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'deleted_resources_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteRegistration
storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.DeleteRegistration_Params',
      packedSize: 24,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_DeleteRegistration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.DeleteRegistration_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'deleted_resources_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'storage_key_state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UpdateToActiveState
storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateToActiveState_Params',
      packedSize: 24,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_UpdateToActiveState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateToActiveState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateLastUpdateCheckTime
storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateLastUpdateCheckTime_Params',
      packedSize: 32,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'last_update_check_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_UpdateLastUpdateCheckTime_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateLastUpdateCheckTime_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateNavigationPreloadEnabled
storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateNavigationPreloadEnabled_Params',
      packedSize: 32,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateNavigationPreloadEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateNavigationPreloadHeader
storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateNavigationPreloadHeader_Params',
      packedSize: 32,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_UpdateNavigationPreloadHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateNavigationPreloadHeader_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateFetchHandlerType
storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateFetchHandlerType_Params',
      packedSize: 32,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_UpdateFetchHandlerType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateFetchHandlerType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateResourceSha256Checksums
storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateResourceSha256Checksums_Params',
      packedSize: 32,
      fields: [
        { name: 'registratation_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'updated_sha256_checksums', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_UpdateResourceSha256Checksums_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.UpdateResourceSha256Checksums_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNewRegistrationId
storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetNewRegistrationId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetNewRegistrationId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetNewRegistrationId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNewVersionId
storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetNewVersionId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetNewVersionId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetNewVersionId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'version_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'version_reference', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetNewResourceId
storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetNewResourceId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetNewResourceId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetNewResourceId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateResourceReader
storage.mojom.ServiceWorkerStorageControl_CreateResourceReader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.CreateResourceReader_Params',
      packedSize: 24,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'reader', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateResourceWriter
storage.mojom.ServiceWorkerStorageControl_CreateResourceWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.CreateResourceWriter_Params',
      packedSize: 24,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'writer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateResourceMetadataWriter
storage.mojom.ServiceWorkerStorageControl_CreateResourceMetadataWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.CreateResourceMetadataWriter_Params',
      packedSize: 24,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'writer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StoreUncommittedResourceId
storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.StoreUncommittedResourceId_Params',
      packedSize: 16,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_StoreUncommittedResourceId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.StoreUncommittedResourceId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DoomUncommittedResources
storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.DoomUncommittedResources_Params',
      packedSize: 16,
      fields: [
        { name: 'resource_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_DoomUncommittedResources_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.DoomUncommittedResources_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUserData
storage.mojom.ServiceWorkerStorageControl_GetUserData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserData_Params',
      packedSize: 24,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetUserData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StoreUserData
storage.mojom.ServiceWorkerStorageControl_StoreUserData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.StoreUserData_Params',
      packedSize: 32,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'user_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_StoreUserData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.StoreUserData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearUserData
storage.mojom.ServiceWorkerStorageControl_ClearUserData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ClearUserData_Params',
      packedSize: 24,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_ClearUserData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ClearUserData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUserDataByKeyPrefix
storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserDataByKeyPrefix_Params',
      packedSize: 24,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key_prefix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetUserDataByKeyPrefix_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserDataByKeyPrefix_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetUserKeysAndDataByKeyPrefix
storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserKeysAndDataByKeyPrefix_Params',
      packedSize: 24,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key_prefix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetUserKeysAndDataByKeyPrefix_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserKeysAndDataByKeyPrefix_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'user_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearUserDataByKeyPrefixes
storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ClearUserDataByKeyPrefixes_Params',
      packedSize: 24,
      fields: [
        { name: 'registratation_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'key_prefixes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_ClearUserDataByKeyPrefixes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ClearUserDataByKeyPrefixes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUserDataForAllRegistrations
storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserDataForAllRegistrations_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserDataForAllRegistrations_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetUserDataForAllRegistrationsByKeyPrefix
storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserDataForAllRegistrationsByKeyPrefix_Params',
      packedSize: 16,
      fields: [
        { name: 'key_prefix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUserDataForAllRegistrationsByKeyPrefix_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearUserDataForAllRegistrationsByKeyPrefix
storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ClearUserDataForAllRegistrationsByKeyPrefix_Params',
      packedSize: 16,
      fields: [
        { name: 'key_prefix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ClearUserDataForAllRegistrationsByKeyPrefix_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformStorageCleanup
storage.mojom.ServiceWorkerStorageControl_PerformStorageCleanup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.PerformStorageCleanup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ApplyPolicyUpdates
storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ApplyPolicyUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'policy_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_ApplyPolicyUpdates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.ApplyPolicyUpdates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPurgingResourceIdsForTest
storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetPurgingResourceIdsForTest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetPurgingResourceIdsForTest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'resource_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetPurgingResourceIdsForLiveVersionForTest
storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetPurgingResourceIdsForLiveVersionForTest_Params',
      packedSize: 16,
      fields: [
        { name: 'version_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetPurgingResourceIdsForLiveVersionForTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetPurgingResourceIdsForLiveVersionForTest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'resource_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetPurgeableResourceIdsForTest
storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetPurgeableResourceIdsForTest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetPurgeableResourceIdsForTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetPurgeableResourceIdsForTest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'resource_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetUncommittedResourceIdsForTest
storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUncommittedResourceIdsForTest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.ServiceWorkerStorageControl_GetUncommittedResourceIdsForTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.GetUncommittedResourceIdsForTest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'resource_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetPurgingCompleteCallbackForTest
storage.mojom.ServiceWorkerStorageControl_SetPurgingCompleteCallbackForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerStorageControl.SetPurgingCompleteCallbackForTest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
storage.mojom.ServiceWorkerStorageControlPtr = storage.mojom.ServiceWorkerStorageControlRemote;
storage.mojom.ServiceWorkerStorageControlRequest = storage.mojom.ServiceWorkerStorageControlPendingReceiver;

