// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_client_state_checker.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: DisallowInactiveClientReason
storage.mojom.DisallowInactiveClientReason = {
};

// Interface: IndexedDBClientStateChecker
storage.mojom.IndexedDBClientStateCheckerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.IndexedDBClientStateChecker';
  }

  disallowInactiveClient(connection_id, reason, keep_active) {
    // Method: DisallowInactiveClient
    return new Promise((resolve) => {
      // Call: DisallowInactiveClient(connection_id, reason, keep_active)
      resolve({});
    });
  }

  makeClone(receiver) {
    // Method: MakeClone
    // Call: MakeClone(receiver)
  }

};

storage.mojom.IndexedDBClientStateCheckerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IndexedDBClientKeepActive
storage.mojom.IndexedDBClientKeepActivePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.IndexedDBClientKeepActive';
  }

};

storage.mojom.IndexedDBClientKeepActiveRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
