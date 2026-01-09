// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/resources/certificate_manager/certificate_manager.mojom
// Module: certificate_manager.mojom

'use strict';

// Module namespace
var certificate_manager = certificate_manager || {};
certificate_manager.mojom = certificate_manager.mojom || {};


// Enum: CertificateSource
certificate_manager.mojom.CertificateSource = {
};

// Enum: SuccessResult
certificate_manager.mojom.SuccessResult = {
};

// Struct: SummaryCertInfo
certificate_manager.mojom.SummaryCertInfo = class {
  constructor(values = {}) {
    this.is_deletable = values.is_deletable !== undefined ? values.is_deletable : false;
  }
};

// Struct: CertManagementMetadata
certificate_manager.mojom.CertManagementMetadata = class {
  constructor(values = {}) {
    this.num_user_added_system_certs = values.num_user_added_system_certs !== undefined ? values.num_user_added_system_certs : 0;
    this.show_user_certs_ui = values.show_user_certs_ui !== undefined ? values.show_user_certs_ui : 0;
  }
};

// Interface: CertificateManagerPageHandlerFactory
certificate_manager.mojom.CertificateManagerPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'certificate_manager.mojom.CertificateManagerPageHandlerFactory';
  }

  createCertificateManagerPageHandler(page, handler) {
    // Method: CreateCertificateManagerPageHandler
    // Call: CreateCertificateManagerPageHandler(page, handler)
  }

};

certificate_manager.mojom.CertificateManagerPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CertificateManagerPageHandler
certificate_manager.mojom.CertificateManagerPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'certificate_manager.mojom.CertificateManagerPageHandler';
  }

  getCertificates(source) {
    // Method: GetCertificates
    return new Promise((resolve) => {
      // Call: GetCertificates(source)
      resolve({});
    });
  }

  metadata(policies) {
    // Method: metadata
    // Call: metadata(policies)
  }

  getCertManagementMetadata() {
    // Method: GetCertManagementMetadata
    return new Promise((resolve) => {
      // Call: GetCertManagementMetadata()
      resolve({});
    });
  }

  viewCertificate(source, sha256_hash_hex) {
    // Method: ViewCertificate
    // Call: ViewCertificate(source, sha256_hash_hex)
  }

  exportCertificates(source) {
    // Method: ExportCertificates
    // Call: ExportCertificates(source)
  }

  importCertificate(source) {
    // Method: ImportCertificate
    return new Promise((resolve) => {
      // Call: ImportCertificate(source)
      resolve({});
    });
  }

  importAndBindCertificate(source) {
    // Method: ImportAndBindCertificate
    return new Promise((resolve) => {
      // Call: ImportAndBindCertificate(source)
      resolve({});
    });
  }

  deleteCertificate(source, display_name, sha256_hash_hex) {
    // Method: DeleteCertificate
    return new Promise((resolve) => {
      // Call: DeleteCertificate(source, display_name, sha256_hash_hex)
      resolve({});
    });
  }

  showNativeManageCertificates() {
    // Method: ShowNativeManageCertificates
    // Call: ShowNativeManageCertificates()
  }

  setIncludeSystemTrustStore(include) {
    // Method: SetIncludeSystemTrustStore
    // Call: SetIncludeSystemTrustStore(include)
  }

};

certificate_manager.mojom.CertificateManagerPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CertificateManagerPage
certificate_manager.mojom.CertificateManagerPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'certificate_manager.mojom.CertificateManagerPage';
  }

  askForImportPassword() {
    // Method: AskForImportPassword
    return new Promise((resolve) => {
      // Call: AskForImportPassword()
      resolve({});
    });
  }

  askForConfirmation(title, message) {
    // Method: AskForConfirmation
    return new Promise((resolve) => {
      // Call: AskForConfirmation(title, message)
      resolve({});
    });
  }

  triggerReload(sources) {
    // Method: TriggerReload
    // Call: TriggerReload(sources)
  }

  triggerMetadataUpdate() {
    // Method: TriggerMetadataUpdate
    // Call: TriggerMetadataUpdate()
  }

};

certificate_manager.mojom.CertificateManagerPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
