// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/service_worker_database.mojom
// Module: storage.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

storage.mojom.ServiceWorkerDatabaseStatusSpec = { $: mojo.internal.Enum() };
storage.mojom.ServiceWorkerRegistrationDataSpec = { $: {} };
storage.mojom.ServiceWorkerResourceRecordSpec = { $: {} };

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
mojo.internal.Struct(
    storage.mojom.ServiceWorkerRegistrationDataSpec, 'storage.mojom.ServiceWorkerRegistrationData', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 16, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_type', 32, 0, blink.mojom.ScriptTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('version_id', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_update_check', 48, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_response_time', 56, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_trial_tokens', 64, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, true, 0, undefined),
      mojo.internal.StructField('navigation_preload_state', 72, 0, blink.mojom.NavigationPreloadStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('used_features', 80, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resources_total_size_bytes', 88, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('policy_container_policies', 96, 0, blink.mojom.PolicyContainerPoliciesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ancestor_frame_type', 104, 0, blink.mojom.AncestorFrameTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('router_rules', 112, 0, blink.mojom.ServiceWorkerRouterRulesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_active', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_hid_event_handlers', 120, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_usb_event_handlers', 120, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 136]]);

// Struct: ServiceWorkerResourceRecord
mojo.internal.Struct(
    storage.mojom.ServiceWorkerResourceRecordSpec, 'storage.mojom.ServiceWorkerResourceRecord', [
      mojo.internal.StructField('resource_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size_bytes', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('sha256_checksum', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);
