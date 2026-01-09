// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_completion_status.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: BlockedByResponseReasonWrapper
network.mojom.BlockedByResponseReasonWrapperSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.BlockedByResponseReasonWrapper',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLLoaderCompletionStatus
network.mojom.URLLoaderCompletionStatusSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderCompletionStatus',
      packedSize: 88,
      fields: [
        { name: 'completion_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'encoded_data_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'encoded_body_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'decoded_body_length', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'cors_error_status', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'ssl_info', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'blocked_by_response_reason', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'resolve_error_info', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_code', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'extended_error_code', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'exists_in_cache', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'should_report_orb_blocking', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'should_collapse_initiator', packedOffset: 72, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
