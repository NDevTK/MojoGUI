// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkContextClient
network.mojom.NetworkContextClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkContextClient';
  }

  onFileUploadRequested(process_id, async, file_paths, destination_url) {
    // Method: OnFileUploadRequested
    return new Promise((resolve) => {
      // Call: OnFileUploadRequested(process_id, async, file_paths, destination_url)
      resolve({});
    });
  }

  onCanSendReportingReports(origins) {
    // Method: OnCanSendReportingReports
    return new Promise((resolve) => {
      // Call: OnCanSendReportingReports(origins)
      resolve({});
    });
  }

  onCanSendDomainReliabilityUpload(origin) {
    // Method: OnCanSendDomainReliabilityUpload
    return new Promise((resolve) => {
      // Call: OnCanSendDomainReliabilityUpload(origin)
      resolve({});
    });
  }

  onGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn) {
    // Method: OnGenerateHttpNegotiateAuthToken
    return new Promise((resolve) => {
      // Call: OnGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn)
      resolve({});
    });
  }

  onCanSendSCTAuditingReport() {
    // Method: OnCanSendSCTAuditingReport
    return new Promise((resolve) => {
      // Call: OnCanSendSCTAuditingReport()
      resolve({});
    });
  }

  onNewSCTAuditingReportSent() {
    // Method: OnNewSCTAuditingReportSent
    // Call: OnNewSCTAuditingReportSent()
  }

};

network.mojom.NetworkContextClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
