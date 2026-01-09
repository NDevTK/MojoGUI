// Auto-generated MojoJS binding
// Source: chromium_src/services/cert_verifier/public/mojom/cert_verifier_service_factory.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};


// Enum: CertificateTrust
cert_verifier.mojom.CertificateTrust = {
  kUnspecified: 0,
  kDistrusted: 1,
  kTrusted: 2,
};

// Struct: CertVerifierCreationParams
cert_verifier.mojom.CertVerifierCreationParams = class {
  constructor(values = {}) {
    this.initial_additional_certificates = values.initial_additional_certificates !== undefined ? values.initial_additional_certificates : null;
    this.ct_policy = values.ct_policy !== undefined ? values.ct_policy : false;
  }
};

// Struct: ChromeRootCertInfo
cert_verifier.mojom.ChromeRootCertInfo = class {
  constructor(values = {}) {
    this.cert = values.cert !== undefined ? values.cert : 0;
  }
};

// Struct: ChromeRootMerkleTreeCertInfo
cert_verifier.mojom.ChromeRootMerkleTreeCertInfo = class {
  constructor(values = {}) {
    this.last_landmark_id_text = values.last_landmark_id_text !== undefined ? values.last_landmark_id_text : "";
  }
};

// Struct: ChromeRootStoreInfo
cert_verifier.mojom.ChromeRootStoreInfo = class {
  constructor(values = {}) {
    this.root_mtc_info = values.root_mtc_info !== undefined ? values.root_mtc_info : 0;
  }
};

// Struct: PlatformCertInfo
cert_verifier.mojom.PlatformCertInfo = class {
  constructor(values = {}) {
    this.trust_setting = values.trust_setting !== undefined ? values.trust_setting : 0;
  }
};

// Struct: PlatformRootStoreInfo
cert_verifier.mojom.PlatformRootStoreInfo = class {
  constructor(values = {}) {
    this.user_added_certs = values.user_added_certs !== undefined ? values.user_added_certs : [];
  }
};

// Interface: CertVerifierServiceFactory
cert_verifier.mojom.CertVerifierServiceFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cert_verifier.mojom.CertVerifierServiceFactory';
  }

  getNewCertVerifier(receiver, updater, client, creation_params) {
    // Method: GetNewCertVerifier
    // Call: GetNewCertVerifier(receiver, updater, client, creation_params)
  }

  updateCRLSet(crl_set) {
    // Method: UpdateCRLSet
    // Call: UpdateCRLSet(crl_set)
  }

  updateCtLogList(log_list, update_time) {
    // Method: UpdateCtLogList
    // Call: UpdateCtLogList(log_list, update_time)
  }

  disableCtEnforcement() {
    // Method: DisableCtEnforcement
    // Call: DisableCtEnforcement()
  }

  updateChromeRootStore(new_root_store) {
    // Method: UpdateChromeRootStore
    // Call: UpdateChromeRootStore(new_root_store)
  }

  updateMtcMetadata(new_mtc_metadata) {
    // Method: UpdateMtcMetadata
    // Call: UpdateMtcMetadata(new_mtc_metadata)
  }

  setUseChromeRootStore(use_crs) {
    // Method: SetUseChromeRootStore
    // Call: SetUseChromeRootStore(use_crs)
  }

  getChromeRootStoreInfo() {
    // Method: GetChromeRootStoreInfo
    return new Promise((resolve) => {
      // Call: GetChromeRootStoreInfo()
      resolve({});
    });
  }

  getPlatformRootStoreInfo() {
    // Method: GetPlatformRootStoreInfo
    return new Promise((resolve) => {
      // Call: GetPlatformRootStoreInfo()
      resolve({});
    });
  }

  updateNetworkTime(system_time, system_ticks, current_time) {
    // Method: UpdateNetworkTime
    // Call: UpdateNetworkTime(system_time, system_ticks, current_time)
  }

};

cert_verifier.mojom.CertVerifierServiceFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
