// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/service_worker_database.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


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
storage.mojom.ServiceWorkerDatabaseStatusSpec = { $: mojo.internal.Enum() };

// Struct: ServiceWorkerRegistrationData
storage.mojom.ServiceWorkerRegistrationDataSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.ServiceWorkerRegistrationData',
      packedSize: 128,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'script', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'script_type', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.ScriptTypeSpec, nullable: false, minVersion: 0 },
        { name: 'version_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'is_active', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'last_update_check', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'script_response_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'origin_trial_tokens', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), nullable: true, minVersion: 0 },
        { name: 'navigation_preload_state', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.NavigationPreloadStateSpec, nullable: false, minVersion: 0 },
        { name: 'used_features', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'resources_total_size_bytes', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'policy_container_policies', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.PolicyContainerPoliciesSpec, nullable: true, minVersion: 0 },
        { name: 'ancestor_frame_type', packedOffset: 108, packedBitOffset: 0, type: blink.mojom.AncestorFrameTypeSpec, nullable: false, minVersion: 0 },
        { name: 'router_rules', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRulesSpec, nullable: true, minVersion: 0 },
        { name: 'has_hid_event_handlers', packedOffset: 112, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_usb_event_handlers', packedOffset: 112, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 128}]
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
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'size_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'sha256_checksum', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
