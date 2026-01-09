// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_allowlist.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ConnectionAllowlistIssue
network.mojom.ConnectionAllowlistIssue = {
  kInvalidHeader: 0,
  kMoreThanOneList: 1,
  kItemNotInnerList: 2,
  kInvalidAllowlistItemType: 3,
  kReportingEndpointNotToken: 4,
};

// Struct: ConnectionAllowlist
network.mojom.ConnectionAllowlistSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionAllowlist',
      packedSize: 32,
      fields: [
        { name: 'allowlist', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reporting_endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'issues', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConnectionAllowlists
network.mojom.ConnectionAllowlistsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionAllowlists',
      packedSize: 24,
      fields: [
        { name: 'enforced', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'report_only', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
