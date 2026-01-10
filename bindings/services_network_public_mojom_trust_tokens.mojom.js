// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_tokens.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: TrustTokenProtocolVersion
network.mojom.TrustTokenProtocolVersion = {
  kTrustTokenV3Pmb: 0,
  kTrustTokenV3Voprf: 1,
  kPrivateStateTokenV1Pmb: 2,
  kPrivateStateTokenV1Voprf: 3,
};
network.mojom.TrustTokenProtocolVersionSpec = { $: mojo.internal.Enum() };

// Enum: TrustTokenOperationStatus
network.mojom.TrustTokenOperationStatus = {
  kOk: 0,
  kInvalidArgument: 1,
  kMissingIssuerKeys: 2,
  kFailedPrecondition: 3,
  kResourceExhausted: 4,
  kAlreadyExists: 5,
  kResourceLimited: 6,
  kUnauthorized: 7,
  kBadResponse: 8,
  kInternalError: 9,
  kUnknownError: 10,
  kOperationSuccessfullyFulfilledLocally: 11,
  kSiteIssuerLimit: 12,
};
network.mojom.TrustTokenOperationStatusSpec = { $: mojo.internal.Enum() };

// Enum: TrustTokenOperationType
network.mojom.TrustTokenOperationType = {
  kIssuance: 0,
  kRedemption: 1,
  kSigning: 2,
};
network.mojom.TrustTokenOperationTypeSpec = { $: mojo.internal.Enum() };

// Enum: TrustTokenRefreshPolicy
network.mojom.TrustTokenRefreshPolicy = {
  kUseCached: 0,
  kRefresh: 1,
};
network.mojom.TrustTokenRefreshPolicySpec = { $: mojo.internal.Enum() };

// Enum: TrustTokenSignRequestData
network.mojom.TrustTokenSignRequestData = {
  kOmit: 0,
  kHeadersOnly: 1,
  kInclude: 2,
};
network.mojom.TrustTokenSignRequestDataSpec = { $: mojo.internal.Enum() };

// Enum: Os
network.mojom.Os = {
  kAndroid: 0,
};
network.mojom.OsSpec = { $: mojo.internal.Enum() };

// Enum: UnavailableLocalOperationFallback
network.mojom.UnavailableLocalOperationFallback = {
  kWebIssuance: 0,
  kReturnWithError: 1,
};
network.mojom.UnavailableLocalOperationFallbackSpec = { $: mojo.internal.Enum() };

// Enum: Status
network.mojom.Status = {
  kOk: 0,
  kNotFound: 1,
  kUnknownError: 2,
};
network.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: DeleteStoredTrustTokensStatus
network.mojom.DeleteStoredTrustTokensStatus = {
  kSuccessTokensDeleted: 0,
  kSuccessNoTokensDeleted: 1,
  kFailureFeatureDisabled: 2,
  kFailureInvalidOrigin: 3,
};
network.mojom.DeleteStoredTrustTokensStatusSpec = { $: mojo.internal.Enum() };

// Struct: TrustTokenParams
network.mojom.TrustTokenParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenParams',
      packedSize: 64,
      fields: [
        { name: 'operation', packedOffset: 40, packedBitOffset: 0, type: network.mojom.TrustTokenOperationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'refresh_policy', packedOffset: 44, packedBitOffset: 0, type: network.mojom.TrustTokenRefreshPolicySpec, nullable: false, minVersion: 0 },
        { name: 'custom_key_commitment', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'custom_issuer', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'sign_request_data', packedOffset: 48, packedBitOffset: 0, type: network.mojom.TrustTokenSignRequestDataSpec, nullable: false, minVersion: 0 },
        { name: 'include_timestamp_header', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'issuers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
        { name: 'additional_signed_headers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'possibly_unsafe_additional_signing_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: HasTrustTokensResult
network.mojom.HasTrustTokensResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HasTrustTokensResult',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: network.mojom.TrustTokenOperationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'has_trust_tokens', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HasRedemptionRecordResult
network.mojom.HasRedemptionRecordResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HasRedemptionRecordResult',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: network.mojom.TrustTokenOperationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'has_redemption_record', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TrustTokenVerificationKey
network.mojom.TrustTokenVerificationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenVerificationKey',
      packedSize: 24,
      fields: [
        { name: 'body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'expiry', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TrustTokenKeyCommitmentResult
network.mojom.TrustTokenKeyCommitmentResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenKeyCommitmentResult',
      packedSize: 40,
      fields: [
        { name: 'protocol_version', packedOffset: 16, packedBitOffset: 0, type: network.mojom.TrustTokenProtocolVersionSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'batch_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.TrustTokenVerificationKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'kAndroid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: FulfillTrustTokenIssuanceRequest
network.mojom.FulfillTrustTokenIssuanceRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FulfillTrustTokenIssuanceRequest',
      packedSize: 24,
      fields: [
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FulfillTrustTokenIssuanceAnswer
network.mojom.FulfillTrustTokenIssuanceAnswerSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FulfillTrustTokenIssuanceAnswer',
      packedSize: 16,
      fields: [
        { name: 'kOk', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TrustTokenOperationResult
network.mojom.TrustTokenOperationResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenOperationResult',
      packedSize: 40,
      fields: [
        { name: 'operation', packedOffset: 16, packedBitOffset: 0, type: network.mojom.TrustTokenOperationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 20, packedBitOffset: 0, type: network.mojom.TrustTokenOperationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'top_level_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'issued_token_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: StoredTrustTokensForIssuer
network.mojom.StoredTrustTokensForIssuerSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.StoredTrustTokensForIssuer',
      packedSize: 24,
      fields: [
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ToplevelRedemptionRecord
network.mojom.ToplevelRedemptionRecordSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ToplevelRedemptionRecord',
      packedSize: 24,
      fields: [
        { name: 'toplevel_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'last_redemption', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TrustTokenQueryAnswerer
network.mojom.TrustTokenQueryAnswerer = {};

network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_Params',
      packedSize: 16,
      fields: [
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TrustTokenQueryAnswererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TrustTokenQueryAnswererRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustTokenQueryAnswerer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TrustTokenQueryAnswererPendingReceiver,
      handle);
    this.$ = new network.mojom.TrustTokenQueryAnswererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TrustTokenQueryAnswererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasTrustTokens(issuer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec,
      network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParamsSpec,
      [issuer]);
  }

  hasRedemptionRecord(issuer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec,
      network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec,
      [issuer]);
  }

};

network.mojom.TrustTokenQueryAnswerer.getRemote = function() {
  let remote = new network.mojom.TrustTokenQueryAnswererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustTokenQueryAnswerer',
    'context');
  return remote.$;
};

// ParamsSpec for HasTrustTokens
network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer.HasTrustTokens_Params',
      packedSize: 16,
      fields: [
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer.HasTrustTokens_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HasTrustTokensResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HasRedemptionRecord
network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer.HasRedemptionRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer.HasRedemptionRecord_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HasRedemptionRecordResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.TrustTokenQueryAnswererPtr = network.mojom.TrustTokenQueryAnswererRemote;
network.mojom.TrustTokenQueryAnswererRequest = network.mojom.TrustTokenQueryAnswererPendingReceiver;

