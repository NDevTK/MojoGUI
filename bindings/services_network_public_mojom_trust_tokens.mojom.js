// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_tokens.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TrustTokenProtocolVersionSpec = { $: mojo.internal.Enum() };
network.mojom.TrustTokenOperationStatusSpec = { $: mojo.internal.Enum() };
network.mojom.TrustTokenOperationTypeSpec = { $: mojo.internal.Enum() };
network.mojom.TrustTokenRefreshPolicySpec = { $: mojo.internal.Enum() };
network.mojom.TrustTokenSignRequestDataSpec = { $: mojo.internal.Enum() };
network.mojom.OsSpec = { $: mojo.internal.Enum() };
network.mojom.UnavailableLocalOperationFallbackSpec = { $: mojo.internal.Enum() };
network.mojom.StatusSpec = { $: mojo.internal.Enum() };
network.mojom.DeleteStoredTrustTokensStatusSpec = { $: mojo.internal.Enum() };
network.mojom.TrustTokenParamsSpec = { $: {} };
network.mojom.HasTrustTokensResultSpec = { $: {} };
network.mojom.HasRedemptionRecordResultSpec = { $: {} };
network.mojom.TrustTokenVerificationKeySpec = { $: {} };
network.mojom.TrustTokenKeyCommitmentResultSpec = { $: {} };
network.mojom.FulfillTrustTokenIssuanceRequestSpec = { $: {} };
network.mojom.FulfillTrustTokenIssuanceAnswerSpec = { $: {} };
network.mojom.TrustTokenOperationResultSpec = { $: {} };
network.mojom.StoredTrustTokensForIssuerSpec = { $: {} };
network.mojom.ToplevelRedemptionRecordSpec = { $: {} };
network.mojom.TrustTokenQueryAnswerer = {};
network.mojom.TrustTokenQueryAnswerer.$interfaceName = 'network.mojom.TrustTokenQueryAnswerer';
network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec = { $: {} };
network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParamsSpec = { $: {} };
network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec = { $: {} };
network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    network.mojom.TrustTokenParamsSpec, 'network.mojom.TrustTokenParams', [
      mojo.internal.StructField('operation', 40, 0, network.mojom.TrustTokenOperationTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('refresh_policy', 44, 0, network.mojom.TrustTokenRefreshPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('custom_key_commitment', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('custom_issuer', 8, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('sign_request_data', 48, 0, network.mojom.TrustTokenSignRequestDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('include_timestamp_header', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('issuers', 16, 0, mojo.internal.Array(url.mojom.OriginSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('additional_signed_headers', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('possibly_unsafe_additional_signing_data', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: HasTrustTokensResult
mojo.internal.Struct(
    network.mojom.HasTrustTokensResultSpec, 'network.mojom.HasTrustTokensResult', [
      mojo.internal.StructField('status', 0, 0, network.mojom.TrustTokenOperationStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_trust_tokens', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HasRedemptionRecordResult
mojo.internal.Struct(
    network.mojom.HasRedemptionRecordResultSpec, 'network.mojom.HasRedemptionRecordResult', [
      mojo.internal.StructField('status', 0, 0, network.mojom.TrustTokenOperationStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_redemption_record', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrustTokenVerificationKey
mojo.internal.Struct(
    network.mojom.TrustTokenVerificationKeySpec, 'network.mojom.TrustTokenVerificationKey', [
      mojo.internal.StructField('body', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiry', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrustTokenKeyCommitmentResult
mojo.internal.Struct(
    network.mojom.TrustTokenKeyCommitmentResultSpec, 'network.mojom.TrustTokenKeyCommitmentResult', [
      mojo.internal.StructField('protocol_version', 16, 0, network.mojom.TrustTokenProtocolVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('batch_size', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(network.mojom.TrustTokenVerificationKeySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('kAndroid', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FulfillTrustTokenIssuanceRequest
mojo.internal.Struct(
    network.mojom.FulfillTrustTokenIssuanceRequestSpec, 'network.mojom.FulfillTrustTokenIssuanceRequest', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FulfillTrustTokenIssuanceAnswer
mojo.internal.Struct(
    network.mojom.FulfillTrustTokenIssuanceAnswerSpec, 'network.mojom.FulfillTrustTokenIssuanceAnswer', [
      mojo.internal.StructField('kOk', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrustTokenOperationResult
mojo.internal.Struct(
    network.mojom.TrustTokenOperationResultSpec, 'network.mojom.TrustTokenOperationResult', [
      mojo.internal.StructField('operation', 16, 0, network.mojom.TrustTokenOperationTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('status', 20, 0, network.mojom.TrustTokenOperationStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('top_level_origin', 8, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('issued_token_count', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: StoredTrustTokensForIssuer
mojo.internal.Struct(
    network.mojom.StoredTrustTokensForIssuerSpec, 'network.mojom.StoredTrustTokensForIssuer', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ToplevelRedemptionRecord
mojo.internal.Struct(
    network.mojom.ToplevelRedemptionRecordSpec, 'network.mojom.ToplevelRedemptionRecord', [
      mojo.internal.StructField('toplevel_origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_redemption', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TrustTokenQueryAnswerer
mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_Params', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.HasTrustTokensResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_Params', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.HasRedemptionRecordResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

network.mojom.TrustTokenQueryAnswererPtr = network.mojom.TrustTokenQueryAnswererRemote;
network.mojom.TrustTokenQueryAnswererRequest = network.mojom.TrustTokenQueryAnswererPendingReceiver;

