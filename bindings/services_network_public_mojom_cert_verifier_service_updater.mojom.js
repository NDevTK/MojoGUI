// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service_updater.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};


// Struct: CIDR
cert_verifier.mojom.CIDR = class {
  constructor(values = {}) {
    this.mask = values.mask !== undefined ? values.mask : null;
  }
};

// Struct: CertWithConstraints
cert_verifier.mojom.CertWithConstraints = class {
  constructor(values = {}) {
    this.permitted_cidrs = values.permitted_cidrs !== undefined ? values.permitted_cidrs : 0;
  }
};

// Struct: AdditionalCertificates
cert_verifier.mojom.AdditionalCertificates = class {
  constructor(values = {}) {
    this.distrusted_spkis = values.distrusted_spkis !== undefined ? values.distrusted_spkis : 0;
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Interface: CertVerifierServiceUpdater
cert_verifier.mojom.CertVerifierServiceUpdaterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cert_verifier.mojom.CertVerifierServiceUpdater';
  }

  updateAdditionalCertificates(certificates) {
    // Method: UpdateAdditionalCertificates
    // Call: UpdateAdditionalCertificates(certificates)
  }

  waitUntilNextUpdateForTesting() {
    // Method: WaitUntilNextUpdateForTesting
    // Call: WaitUntilNextUpdateForTesting()
  }

  setCTPolicy(ct_policy) {
    // Method: SetCTPolicy
    // Call: SetCTPolicy(ct_policy)
  }

};

cert_verifier.mojom.CertVerifierServiceUpdaterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
