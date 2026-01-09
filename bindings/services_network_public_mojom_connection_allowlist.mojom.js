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
      packedSize: 16,
      fields: [
        { name: 'issues', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'report_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
