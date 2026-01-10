// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/push_messaging/push_messaging_status.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PushEventStatus
blink.mojom.PushEventStatus = {
  SUCCESS: 0,
  UNKNOWN_APP_ID: 1,
  PERMISSION_DENIED: 2,
  NO_SERVICE_WORKER: 3,
  SERVICE_WORKER_ERROR: 4,
  EVENT_WAITUNTIL_REJECTED: 5,
  TIMEOUT: 6,
  PERMISSION_REVOKED_ABUSIVE: 7,
  NO_APP_LEVEL_PERMISSION_IGNORE: 8,
  NO_APP_LEVEL_PERMISSION_UNSUBSCRIBE: 9,
  PERMISSION_REVOKED_DISRUPTIVE: 10,
};
blink.mojom.PushEventStatusSpec = { $: mojo.internal.Enum() };

// Enum: PushGetRegistrationStatus
blink.mojom.PushGetRegistrationStatus = {
  SUCCESS: 0,
  SERVICE_NOT_AVAILABLE: 1,
  STORAGE_ERROR: 2,
  REGISTRATION_NOT_FOUND: 3,
  INCOGNITO_REGISTRATION_NOT_FOUND: 4,
  STORAGE_CORRUPT: 5,
  RENDERER_SHUTDOWN: 6,
  NO_LIVE_SERVICE_WORKER: 7,
};
blink.mojom.PushGetRegistrationStatusSpec = { $: mojo.internal.Enum() };

// Enum: PushRegistrationStatus
blink.mojom.PushRegistrationStatus = {
  SUCCESS_FROM_PUSH_SERVICE: 0,
  NO_SERVICE_WORKER: 1,
  SERVICE_NOT_AVAILABLE: 2,
  LIMIT_REACHED: 3,
  PERMISSION_DENIED: 4,
  SERVICE_ERROR: 5,
  NO_SENDER_ID: 6,
  STORAGE_ERROR: 7,
  SUCCESS_FROM_CACHE: 8,
  NETWORK_ERROR: 9,
  INCOGNITO_PERMISSION_DENIED: 10,
  PUBLIC_KEY_UNAVAILABLE: 11,
  MANIFEST_EMPTY_OR_MISSING: 12,
  SENDER_ID_MISMATCH: 13,
  STORAGE_CORRUPT: 14,
  RENDERER_SHUTDOWN: 15,
  SUCCESS_NEW_SUBSCRIPTION_FROM_PUSH_SERVICE: 16,
  UNSUPPORTED_GCM_SENDER_ID: 17,
};
blink.mojom.PushRegistrationStatusSpec = { $: mojo.internal.Enum() };

// Enum: PushUnregistrationReason
blink.mojom.PushUnregistrationReason = {
  UNKNOWN: 0,
  JAVASCRIPT_API: 1,
  PERMISSION_REVOKED: 2,
  DELIVERY_UNKNOWN_APP_ID: 3,
  DELIVERY_PERMISSION_DENIED: 4,
  DELIVERY_NO_SERVICE_WORKER: 5,
  GCM_STORE_RESET: 6,
  SERVICE_WORKER_UNREGISTERED: 7,
  SUBSCRIBE_STORAGE_CORRUPT: 8,
  GET_SUBSCRIPTION_STORAGE_CORRUPT: 9,
  SERVICE_WORKER_DATABASE_WIPED: 10,
  SUBSCRIPTION_EXPIRED: 11,
  REFRESH_FINISHED: 12,
  PERMISSION_REVOKED_ABUSIVE: 13,
  NO_APP_LEVEL_PERMISSION: 14,
  PERMISSION_REVOKED_DISRUPTIVE: 15,
};
blink.mojom.PushUnregistrationReasonSpec = { $: mojo.internal.Enum() };

// Enum: PushUnregistrationStatus
blink.mojom.PushUnregistrationStatus = {
  SUCCESS_UNREGISTERED: 0,
  SUCCESS_WAS_NOT_REGISTERED: 1,
  PENDING_NETWORK_ERROR: 2,
  NO_SERVICE_WORKER: 3,
  SERVICE_NOT_AVAILABLE: 4,
  PENDING_SERVICE_ERROR: 5,
  STORAGE_ERROR: 6,
  NETWORK_ERROR: 7,
};
blink.mojom.PushUnregistrationStatusSpec = { $: mojo.internal.Enum() };
