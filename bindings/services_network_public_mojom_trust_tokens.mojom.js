// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_tokens.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: TrustTokenProtocolVersion
network.mojom.TrustTokenProtocolVersion = {
};

// Enum: TrustTokenOperationStatus
network.mojom.TrustTokenOperationStatus = {
};

// Enum: TrustTokenOperationType
network.mojom.TrustTokenOperationType = {
};

// Enum: TrustTokenRefreshPolicy
network.mojom.TrustTokenRefreshPolicy = {
};

// Enum: TrustTokenSignRequestData
network.mojom.TrustTokenSignRequestData = {
};

// Enum: Os
network.mojom.Os = {
};

// Enum: UnavailableLocalOperationFallback
network.mojom.UnavailableLocalOperationFallback = {
};

// Enum: Status
network.mojom.Status = {
};

// Enum: DeleteStoredTrustTokensStatus
network.mojom.DeleteStoredTrustTokensStatus = {
};

// Struct: TrustTokenParams
network.mojom.TrustTokenParams = class {
  constructor(values = {}) {
    this.operation = values.operation !== undefined ? values.operation : null;
    this.custom_issuer = values.custom_issuer !== undefined ? values.custom_issuer : "";
    this.additional_signed_headers = values.additional_signed_headers !== undefined ? values.additional_signed_headers : false;
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
