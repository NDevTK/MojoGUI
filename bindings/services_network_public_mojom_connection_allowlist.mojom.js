// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_allowlist.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ConnectionAllowlistIssueSpec = { $: mojo.internal.Enum() };
network.mojom.ConnectionAllowlistSpec = { $: {} };
network.mojom.ConnectionAllowlistsSpec = { $: {} };

// Enum: ConnectionAllowlistIssue
network.mojom.ConnectionAllowlistIssue = {
  kInvalidHeader: 0,
  kMoreThanOneList: 1,
  kItemNotInnerList: 2,
  kInvalidAllowlistItemType: 3,
  kReportingEndpointNotToken: 4,
};

// Struct: ConnectionAllowlist
mojo.internal.Struct(
    network.mojom.ConnectionAllowlistSpec, 'network.mojom.ConnectionAllowlist', [
      mojo.internal.StructField('allowlist', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('reporting_endpoint', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('issues', 16, 0, mojo.internal.Array(network.mojom.ConnectionAllowlistIssueSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConnectionAllowlists
mojo.internal.Struct(
    network.mojom.ConnectionAllowlistsSpec, 'network.mojom.ConnectionAllowlists', [
      mojo.internal.StructField('enforced', 0, 0, network.mojom.ConnectionAllowlistSpec, null, true, 0, undefined),
      mojo.internal.StructField('report_only', 8, 0, network.mojom.ConnectionAllowlistSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);
