// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_completion_status.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

network.mojom.BlockedByResponseReasonWrapperSpec = { $: {} };
network.mojom.URLLoaderCompletionStatusSpec = { $: {} };

// Struct: BlockedByResponseReasonWrapper
mojo.internal.Struct(
    network.mojom.BlockedByResponseReasonWrapperSpec, 'network.mojom.BlockedByResponseReasonWrapper', [
      mojo.internal.StructField('reason', 0, 0, network.mojom.BlockedByResponseReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: URLLoaderCompletionStatus
mojo.internal.Struct(
    network.mojom.URLLoaderCompletionStatusSpec, 'network.mojom.URLLoaderCompletionStatus', [
      mojo.internal.StructField('error_code', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extended_error_code', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('exists_in_cache', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('completion_time', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('encoded_data_length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('encoded_body_length', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('decoded_body_length', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('cors_error_status', 32, 0, network.mojom.CorsErrorStatusSpec, null, true, 0, undefined),
      mojo.internal.StructField('ssl_info', 40, 0, network.mojom.SSLInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('blocked_by_response_reason', 48, 0, network.mojom.BlockedByResponseReasonWrapperSpec, null, true, 0, undefined),
      mojo.internal.StructField('should_report_orb_blocking', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resolve_error_info', 56, 0, network.mojom.ResolveErrorInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('should_collapse_initiator', 72, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);
