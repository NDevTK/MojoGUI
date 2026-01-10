// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_allowlist.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ConnectionAllowlistIssue
network.mojom.mojom.ConnectionAllowlistIssue = {
  kInvalidHeader: 0,
  kMoreThanOneList: 1,
  kItemNotInnerList: 2,
  kInvalidAllowlistItemType: 3,
  kReportingEndpointNotToken: 4,
};
network.mojom.mojom.ConnectionAllowlistIssueSpec = { $: mojo.internal.Enum() };

// Struct: ConnectionAllowlist
network.mojom.mojom.ConnectionAllowlistSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionAllowlist',
      packedSize: 32,
      fields: [
        { name: 'allowlist', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'reporting_endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'issues', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ConnectionAllowlistIssueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ConnectionAllowlists
network.mojom.mojom.ConnectionAllowlistsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionAllowlists',
      packedSize: 24,
      fields: [
        { name: 'enforced', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ConnectionAllowlistSpec, nullable: true, minVersion: 0 },
        { name: 'report_only', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ConnectionAllowlistSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
