// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/route_request_result_code.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Enum: RouteRequestResultCode
media_router.mojom.RouteRequestResultCode = {
  UNKNOWN_ERROR: 0,
  OK: 1,
  TIMED_OUT: 2,
  ROUTE_NOT_FOUND: 3,
  SINK_NOT_FOUND: 4,
  INVALID_ORIGIN: 5,
  DEPRECATED_OFF_THE_RECORD_MISMATCH: 6,
  NO_SUPPORTED_PROVIDER: 7,
  CANCELLED: 8,
  ROUTE_ALREADY_EXISTS: 9,
  DESKTOP_PICKER_FAILED: 10,
  ROUTE_ALREADY_TERMINATED: 11,
  REDUNDANT_REQUEST: 12,
  USER_NOT_ALLOWED: 13,
  NOTIFICATION_DISABLED: 14,
};
media_router.mojom.RouteRequestResultCodeSpec = { $: mojo.internal.Enum() };
