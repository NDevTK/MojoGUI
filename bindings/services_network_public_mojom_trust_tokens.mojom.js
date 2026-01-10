// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_tokens.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('operation', 0, 0, network.mojom.TrustTokenOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('refresh_policy', 8, 0, network.mojom.TrustTokenRefreshPolicySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('custom_key_commitment', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('custom_issuer', 24, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sign_request_data', 32, 0, network.mojom.TrustTokenSignRequestDataSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('issuers', 40, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('additional_signed_headers', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('possibly_unsafe_additional_signing_data', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('include_timestamp_header', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: HasTrustTokensResult
mojo.internal.Struct(
    network.mojom.HasTrustTokensResultSpec, 'network.mojom.HasTrustTokensResult', [
      mojo.internal.StructField('status', 0, 0, network.mojom.TrustTokenOperationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_trust_tokens', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HasRedemptionRecordResult
mojo.internal.Struct(
    network.mojom.HasRedemptionRecordResultSpec, 'network.mojom.HasRedemptionRecordResult', [
      mojo.internal.StructField('status', 0, 0, network.mojom.TrustTokenOperationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_redemption_record', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrustTokenVerificationKey
mojo.internal.Struct(
    network.mojom.TrustTokenVerificationKeySpec, 'network.mojom.TrustTokenVerificationKey', [
      mojo.internal.StructField('body', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiry', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrustTokenKeyCommitmentResult
mojo.internal.Struct(
    network.mojom.TrustTokenKeyCommitmentResultSpec, 'network.mojom.TrustTokenKeyCommitmentResult', [
      mojo.internal.StructField('protocol_version', 0, 0, network.mojom.TrustTokenProtocolVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keys', 8, 0, mojo.internal.Array(network.mojom.TrustTokenVerificationKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('kAndroid', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('batch_size', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FulfillTrustTokenIssuanceRequest
mojo.internal.Struct(
    network.mojom.FulfillTrustTokenIssuanceRequestSpec, 'network.mojom.FulfillTrustTokenIssuanceRequest', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('operation', 0, 0, network.mojom.TrustTokenOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, network.mojom.TrustTokenOperationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('issuer', 16, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('top_level_origin', 24, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('issued_token_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: StoredTrustTokensForIssuer
mojo.internal.Struct(
    network.mojom.StoredTrustTokensForIssuerSpec, 'network.mojom.StoredTrustTokensForIssuer', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ToplevelRedemptionRecord
mojo.internal.Struct(
    network.mojom.ToplevelRedemptionRecordSpec, 'network.mojom.ToplevelRedemptionRecord', [
      mojo.internal.StructField('toplevel_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_redemption', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TrustTokenQueryAnswerer
mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_Params', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.HasTrustTokensResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_Params', [
      mojo.internal.StructField('issuer', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec, 'network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.HasRedemptionRecordResultSpec.$, null, false, 0, undefined),
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
      [issuer],
      false);
  }

  hasRedemptionRecord(issuer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec,
      network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec,
      [issuer],
      false);
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

network.mojom.TrustTokenQueryAnswererReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: HasTrustTokens
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasTrustTokens (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HasRedemptionRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasRedemptionRecord (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasTrustTokens');
          const result = this.impl.hasTrustTokens(params.issuer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TrustTokenQueryAnswerer_HasTrustTokens_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasRedemptionRecord');
          const result = this.impl.hasRedemptionRecord(params.issuer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TrustTokenQueryAnswerer_HasRedemptionRecord_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.TrustTokenQueryAnswererReceiver = network.mojom.TrustTokenQueryAnswererReceiver;

network.mojom.TrustTokenQueryAnswererPtr = network.mojom.TrustTokenQueryAnswererRemote;
network.mojom.TrustTokenQueryAnswererRequest = network.mojom.TrustTokenQueryAnswererPendingReceiver;

