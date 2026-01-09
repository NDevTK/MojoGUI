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

// Enum: TrustTokenOperationType
network.mojom.TrustTokenOperationType = {
  kIssuance: 0,
  kRedemption: 1,
  kSigning: 2,
};

// Enum: TrustTokenRefreshPolicy
network.mojom.TrustTokenRefreshPolicy = {
  kUseCached: 0,
  kRefresh: 1,
};

// Enum: TrustTokenSignRequestData
network.mojom.TrustTokenSignRequestData = {
  kOmit: 0,
  kHeadersOnly: 1,
  kInclude: 2,
};

// Enum: Os
network.mojom.Os = {
  kAndroid: 0,
};

// Enum: UnavailableLocalOperationFallback
network.mojom.UnavailableLocalOperationFallback = {
  kWebIssuance: 0,
  kReturnWithError: 1,
};

// Enum: Status
network.mojom.Status = {
  kOk: 0,
  kNotFound: 1,
  kUnknownError: 2,
};

// Enum: DeleteStoredTrustTokensStatus
network.mojom.DeleteStoredTrustTokensStatus = {
  kSuccessTokensDeleted: 0,
  kSuccessNoTokensDeleted: 1,
  kFailureFeatureDisabled: 2,
  kFailureInvalidOrigin: 3,
};

// Struct: TrustTokenParams
network.mojom.TrustTokenParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenParams',
      packedSize: 80,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'refresh_policy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'custom_key_commitment', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'custom_issuer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'sign_request_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'issuers', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'additional_signed_headers', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'possibly_unsafe_additional_signing_data', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'include_timestamp_header', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HasTrustTokensResult
network.mojom.HasTrustTokensResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HasTrustTokensResult',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'has_trust_tokens', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HasRedemptionRecordResult
network.mojom.HasRedemptionRecordResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HasRedemptionRecordResult',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'has_redemption_record', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'expiry', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'protocol_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'kAndroid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'batch_size', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kOk', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TrustTokenOperationResult
network.mojom.TrustTokenOperationResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenOperationResult',
      packedSize: 48,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'issuer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'top_level_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'issued_token_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'toplevel_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'last_redemption', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TrustTokenQueryAnswerer
network.mojom.TrustTokenQueryAnswerer = {};

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
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer.HasTrustTokens_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'issuer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenQueryAnswerer.HasRedemptionRecord_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.TrustTokenQueryAnswererPtr = network.mojom.TrustTokenQueryAnswererRemote;
network.mojom.TrustTokenQueryAnswererRequest = network.mojom.TrustTokenQueryAnswererPendingReceiver;

