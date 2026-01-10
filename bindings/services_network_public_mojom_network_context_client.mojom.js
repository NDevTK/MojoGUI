// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};

network.mojom.NetworkContextClient = {};
network.mojom.NetworkContextClient.$interfaceName = 'network.mojom.NetworkContextClient';
network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec = { $: {} };

// Interface: NetworkContextClient
mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec, 'network.mojom.NetworkContextClient_OnFileUploadRequested_Params', [
      mojo.internal.StructField('process_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('async', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('file_paths', 8, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('destination_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('files', 8, 0, mojo.internal.Array(mojo_base.mojom.ReadOnlyFileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendReportingReports_Params', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParams', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec, 'network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_Params', [
      mojo.internal.StructField('server_auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('can_delegate', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auth_negotiate_android_account_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('spn', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('auth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec, 'network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_Params', [
    ],
    [[0, 8]]);

network.mojom.NetworkContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkContextClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkContextClientPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFileUploadRequested(process_id, async, file_paths, destination_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec,
      network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec,
      [process_id, async, file_paths, destination_url],
      false);
  }

  onCanSendReportingReports(origins) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec,
      [origins],
      false);
  }

  onCanSendDomainReliabilityUpload(origin) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec,
      [origin],
      false);
  }

  onGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec,
      network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec,
      [server_auth_token, can_delegate, auth_negotiate_android_account_type, spn],
      false);
  }

  onCanSendSCTAuditingReport() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec,
      [],
      false);
  }

  onNewSCTAuditingReportSent() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.NetworkContextClient.getRemote = function() {
  let remote = new network.mojom.NetworkContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContextClient',
    'context');
  return remote.$;
};

network.mojom.NetworkContextClientPtr = network.mojom.NetworkContextClientRemote;
network.mojom.NetworkContextClientRequest = network.mojom.NetworkContextClientPendingReceiver;

