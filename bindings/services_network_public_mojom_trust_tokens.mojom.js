// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_tokens.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: TrustTokenProtocolVersion
network.mojom.TrustTokenProtocolVersion = {
  kTrustTokenV3Pmb: 0,
  kTrustTokenV3Voprf: 1,
  kPrivateStateTokenV1Pmb: 2,
  kPrivateStateTokenV1Voprf: 3,
};

// Enum: TrustTokenOperationStatus
network.mojom.TrustTokenOperationStatus = {
  kOk: 0,
  there: 1,
  a: 2,
  usually: 3,
  internal: 4,
  so: 5,
};

// Enum: TrustTokenOperationType
network.mojom.TrustTokenOperationType = {
  clients: 0,
  and: 1,
  to: 2,
};

// Enum: TrustTokenRefreshPolicy
network.mojom.TrustTokenRefreshPolicy = {
  return: 0,
  attempt: 1,
  overwriting: 2,
};

// Enum: TrustTokenSignRequestData
network.mojom.TrustTokenSignRequestData = {
  not: 0,
  attach: 1,
  attach: 2,
  some: 3,
  and: 4,
};

// Enum: Os
network.mojom.Os = {
  kAndroid: 0,
};

// Enum: UnavailableLocalOperationFallback
network.mojom.UnavailableLocalOperationFallback = {
  instead: 0,
  just: 1,
};

// Enum: Status
network.mojom.Status = {
  kOk: 0,
};

// Enum: DeleteStoredTrustTokensStatus
network.mojom.DeleteStoredTrustTokensStatus = {
  kSuccessTokensDeleted: 0,
  kSuccessNoTokensDeleted: 1,
  kFailureFeatureDisabled: 2,
  kFailureInvalidOrigin: 3,
};

// Struct: TrustTokenParams
network.mojom.TrustTokenParams = class {
  constructor(values = {}) {
    this.operation = values.operation !== undefined ? values.operation : null;
    this.custom_issuer = values.custom_issuer !== undefined ? values.custom_issuer : "";
    this.additional_signed_headers = values.additional_signed_headers !== undefined ? values.additional_signed_headers : false;
    this.request's = values.request's !== undefined ? values.request's : null;
    this.possibly_unsafe_additional_signing_data = values.possibly_unsafe_additional_signing_data !== undefined ? values.possibly_unsafe_additional_signing_data : "";
  }
};

// Struct: HasTrustTokensResult
network.mojom.HasTrustTokensResult = class {
  constructor(values = {}) {
    this.has_trust_tokens = values.has_trust_tokens !== undefined ? values.has_trust_tokens : false;
  }
};

// Struct: HasRedemptionRecordResult
network.mojom.HasRedemptionRecordResult = class {
  constructor(values = {}) {
    this.has_redemption_record = values.has_redemption_record !== undefined ? values.has_redemption_record : false;
  }
};

// Struct: TrustTokenVerificationKey
network.mojom.TrustTokenVerificationKey = class {
  constructor(values = {}) {
    this.expiry = values.expiry !== undefined ? values.expiry : "";
  }
};

// Struct: TrustTokenKeyCommitmentResult
network.mojom.TrustTokenKeyCommitmentResult = class {
  constructor(values = {}) {
    this.kAndroid = values.kAndroid !== undefined ? values.kAndroid : 0;
  }
};

// Struct: FulfillTrustTokenIssuanceRequest
network.mojom.FulfillTrustTokenIssuanceRequest = class {
  constructor(values = {}) {
    this.request = values.request !== undefined ? values.request : "";
  }
};

// Struct: FulfillTrustTokenIssuanceAnswer
network.mojom.FulfillTrustTokenIssuanceAnswer = class {
  constructor(values = {}) {
    this.kOk = values.kOk !== undefined ? values.kOk : null;
  }
};

// Struct: TrustTokenOperationResult
network.mojom.TrustTokenOperationResult = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: StoredTrustTokensForIssuer
network.mojom.StoredTrustTokensForIssuer = class {
  constructor(values = {}) {
    this.count = values.count !== undefined ? values.count : 0;
  }
};

// Struct: ToplevelRedemptionRecord
network.mojom.ToplevelRedemptionRecord = class {
  constructor(values = {}) {
    this.last_redemption = values.last_redemption !== undefined ? values.last_redemption : null;
  }
};

// Interface: TrustTokenQueryAnswerer
network.mojom.TrustTokenQueryAnswererPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TrustTokenQueryAnswerer';
  }

  hasTrustTokens(issuer) {
    // Method: HasTrustTokens
    return new Promise((resolve) => {
      // Call: HasTrustTokens(issuer)
      resolve({});
    });
  }

  hasRedemptionRecord(issuer) {
    // Method: HasRedemptionRecord
    return new Promise((resolve) => {
      // Call: HasRedemptionRecord(issuer)
      resolve({});
    });
  }

};

network.mojom.TrustTokenQueryAnswererRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
