// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/service_worker_database.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: ServiceWorkerDatabaseStatus
storage.mojom.ServiceWorkerDatabaseStatus = {
  kOk: 0,
  kErrorNotFound: 1,
  kErrorIOError: 2,
  kErrorCorrupted: 3,
  kErrorFailed: 4,
  kErrorNotSupported: 5,
  kErrorDisabled: 6,
  kErrorStorageDisconnected: 7,
};

// Struct: ServiceWorkerRegistrationData
storage.mojom.ServiceWorkerRegistrationDataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerRegistrationData',
      packedSize: 16,
      fields: [
        { name: 'has_usb_event_handlers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ServiceWorkerResourceRecord
storage.mojom.ServiceWorkerResourceRecordSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerResourceRecord',
      packedSize: 16,
      fields: [
        { name: 'sha256_checksum', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
