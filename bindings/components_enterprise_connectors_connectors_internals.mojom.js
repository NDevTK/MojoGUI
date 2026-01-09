// Auto-generated MojoJS binding
// Source: chromium_src/components/enterprise/connectors/connectors_internals.mojom
// Module: connectors_internals.mojom

'use strict';

// Module namespace
var connectors_internals = connectors_internals || {};
connectors_internals.mojom = connectors_internals.mojom || {};


// Enum: KeyManagerInitializedValue
connectors_internals.mojom.KeyManagerInitializedValue = {
  UNSUPPORTED: 0,
  KEY_LOADED: 1,
  NO_KEY: 2,
};

// Enum: KeyTrustLevel
connectors_internals.mojom.KeyTrustLevel = {
  UNSPECIFIED: 0,
  HW: 1,
  OS: 2,
  OS_SOFTWARE: 3,
};

// Enum: KeyType
connectors_internals.mojom.KeyType = {
  UNKNOWN: 0,
  RSA: 1,
  EC: 2,
};

// Enum: KeyManagerPermanentFailure
connectors_internals.mojom.KeyManagerPermanentFailure = {
  UNSPECIFIED: 0,
  CREATION_UPLOAD_CONFLICT: 1,
  INSUFFICIENT_PERMISSIONS: 2,
  OS_RESTRICTION: 3,
  INVALID_INSTALLATION: 4,
};

// Struct: Int32Value
connectors_internals.mojom.Int32Value = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: LoadedKeyInfo
connectors_internals.mojom.LoadedKeyInfo = class {
  constructor(values = {}) {
    this.has_ssl_key = values.has_ssl_key !== undefined ? values.has_ssl_key : false;
  }
};

// Struct: KeyInfo
connectors_internals.mojom.KeyInfo = class {
  constructor(values = {}) {
    this.loaded_key_info = values.loaded_key_info !== undefined ? values.loaded_key_info : null;
    this.permanent_failure = values.permanent_failure !== undefined ? values.permanent_failure : null;
  }
};

// Struct: ConsentMetadata
connectors_internals.mojom.ConsentMetadata = class {
  constructor(values = {}) {
    this.consent_received = values.consent_received !== undefined ? values.consent_received : false;
  }
};

// Struct: DeviceTrustState
connectors_internals.mojom.DeviceTrustState = class {
  constructor(values = {}) {
    this.signals_json = values.signals_json !== undefined ? values.signals_json : false;
    this.consent_metadata = values.consent_metadata !== undefined ? values.consent_metadata : null;
  }
};

// Struct: CertificateMetadata
connectors_internals.mojom.CertificateMetadata = class {
  constructor(values = {}) {
    this.issuer_display_name = values.issuer_display_name !== undefined ? values.issuer_display_name : 0;
  }
};

// Struct: ClientIdentity
connectors_internals.mojom.ClientIdentity = class {
  constructor(values = {}) {
    this.certificate_metadata = values.certificate_metadata !== undefined ? values.certificate_metadata : "";
  }
};

// Struct: ClientCertificateState
connectors_internals.mojom.ClientCertificateState = class {
  constructor(values = {}) {
    this.managed_browser_identity = values.managed_browser_identity !== undefined ? values.managed_browser_identity : "";
  }
};

// Struct: SignalsReportingState
connectors_internals.mojom.SignalsReportingState = class {
  constructor(values = {}) {
    this.can_collect_all_fields = values.can_collect_all_fields !== undefined ? values.can_collect_all_fields : false;
  }
};

// Interface: PageHandler
connectors_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'connectors_internals.mojom.PageHandler';
  }

  getDeviceTrustState() {
    // Method: GetDeviceTrustState
    return new Promise((resolve) => {
      // Call: GetDeviceTrustState()
      resolve({});
    });
  }

  deleteDeviceTrustKey() {
    // Method: DeleteDeviceTrustKey
    // Call: DeleteDeviceTrustKey()
  }

  getClientCertificateState() {
    // Method: GetClientCertificateState
    return new Promise((resolve) => {
      // Call: GetClientCertificateState()
      resolve({});
    });
  }

  getSignalsReportingState() {
    // Method: GetSignalsReportingState
    return new Promise((resolve) => {
      // Call: GetSignalsReportingState()
      resolve({});
    });
  }

};

connectors_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
