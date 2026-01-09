// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};


// Struct: RequestParams
cert_verifier.mojom.RequestParams = class {
  constructor(values = {}) {
    this.sct_list = values.sct_list !== undefined ? values.sct_list : 0;
  }
};

// Struct: CertVerifierConfig
cert_verifier.mojom.CertVerifierConfig = class {
  constructor(values = {}) {
    this.enable_sha1_local_anchors = values.enable_sha1_local_anchors !== undefined ? values.enable_sha1_local_anchors : false;
  }
};

// Interface: URLLoaderFactoryConnector
cert_verifier.mojom.URLLoaderFactoryConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cert_verifier.mojom.URLLoaderFactoryConnector';
  }

  createURLLoaderFactory(url_loader_factory) {
    // Method: CreateURLLoaderFactory
    // Call: CreateURLLoaderFactory(url_loader_factory)
  }

};

cert_verifier.mojom.URLLoaderFactoryConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CertVerifierService
cert_verifier.mojom.CertVerifierServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cert_verifier.mojom.CertVerifierService';
  }

  verify() {
    // Method: Verify
    // Call: Verify()
  }

  enableNetworkAccess(url_loader_factory, reconnector) {
    // Method: EnableNetworkAccess
    // Call: EnableNetworkAccess(url_loader_factory, reconnector)
  }

  verify(params, net_log_source, cert_verifier_request) {
    // Method: Verify
    // Call: Verify(params, net_log_source, cert_verifier_request)
  }

  verify2QwacBinding(binding, hostname, tls_certificate, net_log_source) {
    // Method: Verify2QwacBinding
    return new Promise((resolve) => {
      // Call: Verify2QwacBinding(binding, hostname, tls_certificate, net_log_source)
      resolve({});
    });
  }

  setConfig(config) {
    // Method: SetConfig
    // Call: SetConfig(config)
  }

};

cert_verifier.mojom.CertVerifierServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CertVerifierServiceClient
cert_verifier.mojom.CertVerifierServiceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cert_verifier.mojom.CertVerifierServiceClient';
  }

  onCertVerifierChanged() {
    // Method: OnCertVerifierChanged
    // Call: OnCertVerifierChanged()
  }

};

cert_verifier.mojom.CertVerifierServiceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CertVerifierRequest
cert_verifier.mojom.CertVerifierRequestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cert_verifier.mojom.CertVerifierRequest';
  }

  complete(result, net_error) {
    // Method: Complete
    // Call: Complete(result, net_error)
  }

};

cert_verifier.mojom.CertVerifierRequestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
