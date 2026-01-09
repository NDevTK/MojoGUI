// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/service_worker_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: ServiceWorkerStorageStorageKeyState
storage.mojom.ServiceWorkerStorageStorageKeyState = {
};

// Struct: ServiceWorkerLiveVersionInfo
storage.mojom.ServiceWorkerLiveVersionInfo = class {
  constructor(values = {}) {
    this.reference = values.reference !== undefined ? values.reference : 0;
  }
};

// Struct: ServiceWorkerFindRegistrationResult
storage.mojom.ServiceWorkerFindRegistrationResult = class {
  constructor(values = {}) {
    this.resources = values.resources !== undefined ? values.resources : [];
  }
};

// Struct: ServiceWorkerUserData
storage.mojom.ServiceWorkerUserData = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Interface: ServiceWorkerLiveVersionRef
storage.mojom.ServiceWorkerLiveVersionRefPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.ServiceWorkerLiveVersionRef';
  }

};

storage.mojom.ServiceWorkerLiveVersionRefRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerResourceReader
storage.mojom.ServiceWorkerResourceReaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.ServiceWorkerResourceReader';
  }

  readResponseHead() {
    // Method: ReadResponseHead
    return new Promise((resolve) => {
      // Call: ReadResponseHead()
      resolve({});
    });
  }

  prepareReadData(size) {
    // Method: PrepareReadData
    return new Promise((resolve) => {
      // Call: PrepareReadData(size)
      resolve({});
    });
  }

  readData() {
    // Method: ReadData
    return new Promise((resolve) => {
      // Call: ReadData()
      resolve({});
    });
  }

};

storage.mojom.ServiceWorkerResourceReaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerResourceWriter
storage.mojom.ServiceWorkerResourceWriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.ServiceWorkerResourceWriter';
  }

  writeResponseHead(response_head) {
    // Method: WriteResponseHead
    return new Promise((resolve) => {
      // Call: WriteResponseHead(response_head)
      resolve({});
    });
  }

  writeData(data) {
    // Method: WriteData
    return new Promise((resolve) => {
      // Call: WriteData(data)
      resolve({});
    });
  }

};

storage.mojom.ServiceWorkerResourceWriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerResourceMetadataWriter
storage.mojom.ServiceWorkerResourceMetadataWriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.ServiceWorkerResourceMetadataWriter';
  }

  writeMetadata(data) {
    // Method: WriteMetadata
    return new Promise((resolve) => {
      // Call: WriteMetadata(data)
      resolve({});
    });
  }

};

storage.mojom.ServiceWorkerResourceMetadataWriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerStorageControl
storage.mojom.ServiceWorkerStorageControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.ServiceWorkerStorageControl';
  }

  disable() {
    // Method: Disable
    // Call: Disable()
  }

  delete() {
    // Method: Delete
    return new Promise((resolve) => {
      // Call: Delete()
      resolve({});
    });
  }

  recover(versions) {
    // Method: Recover
    // Call: Recover(versions)
  }

  getRegisteredStorageKeys() {
    // Method: GetRegisteredStorageKeys
    return new Promise((resolve) => {
      // Call: GetRegisteredStorageKeys()
      resolve({});
    });
  }

  findRegistrationForClientUrl(client_url, key) {
    // Method: FindRegistrationForClientUrl
    return new Promise((resolve) => {
      // Call: FindRegistrationForClientUrl(client_url, key)
      resolve({});
    });
  }

  findRegistrationForScope(scope, key) {
    // Method: FindRegistrationForScope
    return new Promise((resolve) => {
      // Call: FindRegistrationForScope(scope, key)
      resolve({});
    });
  }

  findRegistrationForId(registration_id, key) {
    // Method: FindRegistrationForId
    return new Promise((resolve) => {
      // Call: FindRegistrationForId(registration_id, key)
      resolve({});
    });
  }

  getRegistrationsForStorageKey(key) {
    // Method: GetRegistrationsForStorageKey
    return new Promise((resolve) => {
      // Call: GetRegistrationsForStorageKey(key)
      resolve({});
    });
  }

  getUsageForStorageKey(key) {
    // Method: GetUsageForStorageKey
    return new Promise((resolve) => {
      // Call: GetUsageForStorageKey(key)
      resolve({});
    });
  }

  getAllRegistrationsDeprecated() {
    // Method: GetAllRegistrationsDeprecated
    return new Promise((resolve) => {
      // Call: GetAllRegistrationsDeprecated()
      resolve({});
    });
  }

  getFakeRegistrationForClientUrl(client_url, key) {
    // Method: GetFakeRegistrationForClientUrl
    return new Promise((resolve) => {
      // Call: GetFakeRegistrationForClientUrl(client_url, key)
      resolve({});
    });
  }

  storeRegistration(registration, resources) {
    // Method: StoreRegistration
    return new Promise((resolve) => {
      // Call: StoreRegistration(registration, resources)
      resolve({});
    });
  }

  deleteRegistration(registration_id, key) {
    // Method: DeleteRegistration
    return new Promise((resolve) => {
      // Call: DeleteRegistration(registration_id, key)
      resolve({});
    });
  }

  updateToActiveState(registration_id, key) {
    // Method: UpdateToActiveState
    return new Promise((resolve) => {
      // Call: UpdateToActiveState(registration_id, key)
      resolve({});
    });
  }

  updateLastUpdateCheckTime(registration_id, key, last_update_check_time) {
    // Method: UpdateLastUpdateCheckTime
    return new Promise((resolve) => {
      // Call: UpdateLastUpdateCheckTime(registration_id, key, last_update_check_time)
      resolve({});
    });
  }

  updateNavigationPreloadEnabled(registration_id, key, enable) {
    // Method: UpdateNavigationPreloadEnabled
    return new Promise((resolve) => {
      // Call: UpdateNavigationPreloadEnabled(registration_id, key, enable)
      resolve({});
    });
  }

  updateNavigationPreloadHeader(registration_id, key, value) {
    // Method: UpdateNavigationPreloadHeader
    return new Promise((resolve) => {
      // Call: UpdateNavigationPreloadHeader(registration_id, key, value)
      resolve({});
    });
  }

  updateFetchHandlerType(registration_id, key, type) {
    // Method: UpdateFetchHandlerType
    return new Promise((resolve) => {
      // Call: UpdateFetchHandlerType(registration_id, key, type)
      resolve({});
    });
  }

  updateResourceSha256Checksums(registratation_id, key, updated_sha256_checksums) {
    // Method: UpdateResourceSha256Checksums
    return new Promise((resolve) => {
      // Call: UpdateResourceSha256Checksums(registratation_id, key, updated_sha256_checksums)
      resolve({});
    });
  }

  getNewRegistrationId() {
    // Method: GetNewRegistrationId
    return new Promise((resolve) => {
      // Call: GetNewRegistrationId()
      resolve({});
    });
  }

  getNewVersionId() {
    // Method: GetNewVersionId
    return new Promise((resolve) => {
      // Call: GetNewVersionId()
      resolve({});
    });
  }

  getNewResourceId() {
    // Method: GetNewResourceId
    return new Promise((resolve) => {
      // Call: GetNewResourceId()
      resolve({});
    });
  }

  createResourceReader(resource_id, reader) {
    // Method: CreateResourceReader
    // Call: CreateResourceReader(resource_id, reader)
  }

  createResourceWriter(resource_id, writer) {
    // Method: CreateResourceWriter
    // Call: CreateResourceWriter(resource_id, writer)
  }

  createResourceMetadataWriter(resource_id, writer) {
    // Method: CreateResourceMetadataWriter
    // Call: CreateResourceMetadataWriter(resource_id, writer)
  }

  storeUncommittedResourceId(resource_id) {
    // Method: StoreUncommittedResourceId
    return new Promise((resolve) => {
      // Call: StoreUncommittedResourceId(resource_id)
      resolve({});
    });
  }

  doomUncommittedResources(resource_ids) {
    // Method: DoomUncommittedResources
    return new Promise((resolve) => {
      // Call: DoomUncommittedResources(resource_ids)
      resolve({});
    });
  }

  getUserData(registration_id, keys) {
    // Method: GetUserData
    return new Promise((resolve) => {
      // Call: GetUserData(registration_id, keys)
      resolve({});
    });
  }

  storeUserData(registration_id, key, user_data) {
    // Method: StoreUserData
    return new Promise((resolve) => {
      // Call: StoreUserData(registration_id, key, user_data)
      resolve({});
    });
  }

  clearUserData(registration_id, keys) {
    // Method: ClearUserData
    return new Promise((resolve) => {
      // Call: ClearUserData(registration_id, keys)
      resolve({});
    });
  }

  getUserDataByKeyPrefix(registration_id, key_prefix) {
    // Method: GetUserDataByKeyPrefix
    return new Promise((resolve) => {
      // Call: GetUserDataByKeyPrefix(registration_id, key_prefix)
      resolve({});
    });
  }

  getUserKeysAndDataByKeyPrefix(registration_id, key_prefix) {
    // Method: GetUserKeysAndDataByKeyPrefix
    return new Promise((resolve) => {
      // Call: GetUserKeysAndDataByKeyPrefix(registration_id, key_prefix)
      resolve({});
    });
  }

  clearUserDataByKeyPrefixes(registratation_id, key_prefixes) {
    // Method: ClearUserDataByKeyPrefixes
    return new Promise((resolve) => {
      // Call: ClearUserDataByKeyPrefixes(registratation_id, key_prefixes)
      resolve({});
    });
  }

  getUserDataForAllRegistrations(key) {
    // Method: GetUserDataForAllRegistrations
    return new Promise((resolve) => {
      // Call: GetUserDataForAllRegistrations(key)
      resolve({});
    });
  }

  getUserDataForAllRegistrationsByKeyPrefix(key_prefix) {
    // Method: GetUserDataForAllRegistrationsByKeyPrefix
    return new Promise((resolve) => {
      // Call: GetUserDataForAllRegistrationsByKeyPrefix(key_prefix)
      resolve({});
    });
  }

  clearUserDataForAllRegistrationsByKeyPrefix(key_prefix) {
    // Method: ClearUserDataForAllRegistrationsByKeyPrefix
    return new Promise((resolve) => {
      // Call: ClearUserDataForAllRegistrationsByKeyPrefix(key_prefix)
      resolve({});
    });
  }

  performStorageCleanup() {
    // Method: PerformStorageCleanup
    // Call: PerformStorageCleanup()
  }

  applyPolicyUpdates(policy_updates) {
    // Method: ApplyPolicyUpdates
    return new Promise((resolve) => {
      // Call: ApplyPolicyUpdates(policy_updates)
      resolve({});
    });
  }

  getPurgingResourceIdsForTest() {
    // Method: GetPurgingResourceIdsForTest
    return new Promise((resolve) => {
      // Call: GetPurgingResourceIdsForTest()
      resolve({});
    });
  }

  getPurgingResourceIdsForLiveVersionForTest(version_id) {
    // Method: GetPurgingResourceIdsForLiveVersionForTest
    return new Promise((resolve) => {
      // Call: GetPurgingResourceIdsForLiveVersionForTest(version_id)
      resolve({});
    });
  }

  getPurgeableResourceIdsForTest() {
    // Method: GetPurgeableResourceIdsForTest
    return new Promise((resolve) => {
      // Call: GetPurgeableResourceIdsForTest()
      resolve({});
    });
  }

  getUncommittedResourceIdsForTest() {
    // Method: GetUncommittedResourceIdsForTest
    return new Promise((resolve) => {
      // Call: GetUncommittedResourceIdsForTest()
      resolve({});
    });
  }

  setPurgingCompleteCallbackForTest() {
    // Method: SetPurgingCompleteCallbackForTest
    // Call: SetPurgingCompleteCallbackForTest()
  }

};

storage.mojom.ServiceWorkerStorageControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
