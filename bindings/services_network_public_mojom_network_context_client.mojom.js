// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};


// Interface: NetworkContextClient
network.mojom.mojom.NetworkContextClient = {};

network.mojom.mojom.NetworkContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetworkContextClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetworkContextClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetworkContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetworkContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFileUploadRequested(process_id, async, file_paths, destination_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec,
      network.mojom.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec,
      [process_id, async, file_paths, destination_url]);
  }

  onCanSendReportingReports(origins) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec,
      network.mojom.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec,
      [origins]);
  }

  onCanSendDomainReliabilityUpload(origin) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec,
      network.mojom.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec,
      [origin]);
  }

  onGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec,
      network.mojom.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec,
      [server_auth_token, can_delegate, auth_negotiate_android_account_type, spn]);
  }

  onCanSendSCTAuditingReport() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec,
      network.mojom.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec,
      []);
  }

  onNewSCTAuditingReportSent() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec,
      null,
      []);
  }

};

network.mojom.mojom.NetworkContextClient.getRemote = function() {
  let remote = new network.mojom.mojom.NetworkContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContextClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnFileUploadRequested
network.mojom.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnFileUploadRequested_Params',
      packedSize: 32,
      fields: [
        { name: 'process_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'async', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'file_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'destination_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnFileUploadRequested_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ReadOnlyFileSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnCanSendReportingReports
network.mojom.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnCanSendReportingReports_Params',
      packedSize: 16,
      fields: [
        { name: 'origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnCanSendReportingReports_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCanSendDomainReliabilityUpload
network.mojom.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnCanSendDomainReliabilityUpload_Params',
      packedSize: 16,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnCanSendDomainReliabilityUpload_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnGenerateHttpNegotiateAuthToken
network.mojom.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnGenerateHttpNegotiateAuthToken_Params',
      packedSize: 40,
      fields: [
        { name: 'server_auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'can_delegate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auth_negotiate_android_account_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'spn', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnGenerateHttpNegotiateAuthToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnCanSendSCTAuditingReport
network.mojom.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnCanSendSCTAuditingReport_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnCanSendSCTAuditingReport_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNewSCTAuditingReportSent
network.mojom.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkContextClient.OnNewSCTAuditingReportSent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.NetworkContextClientPtr = network.mojom.mojom.NetworkContextClientRemote;
network.mojom.mojom.NetworkContextClientRequest = network.mojom.mojom.NetworkContextClientPendingReceiver;

