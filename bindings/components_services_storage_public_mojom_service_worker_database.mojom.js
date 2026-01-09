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
      packedSize: 144,
      fields: [
        { name: 'registration_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'scope', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'key', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false },
        { name: 'script', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'script_type', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ScriptTypeSpec, nullable: false },
        { name: 'version_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'is_active', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'last_update_check', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'script_response_time', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'origin_trial_tokens', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'navigation_preload_state', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.NavigationPreloadStateSpec, nullable: false },
        { name: 'used_features', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'resources_total_size_bytes', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'policy_container_policies', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.PolicyContainerPoliciesSpec, nullable: true },
        { name: 'ancestor_frame_type', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.AncestorFrameTypeSpec, nullable: false },
        { name: 'router_rules', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRulesSpec, nullable: true },
        { name: 'has_hid_event_handlers', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_usb_event_handlers', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'resource_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'size_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'sha256_checksum', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
