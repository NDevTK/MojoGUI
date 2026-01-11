// Auto-generated MojoJS binding
// Source: chromium_src/components/enterprise/connectors/connectors_internals.mojom
// Module: connectors_internals.mojom

// Module namespace
var connectors_internals = connectors_internals || {};
connectors_internals.mojom = connectors_internals.mojom || {};

connectors_internals.mojom.KeyManagerInitializedValueSpec = { $: mojo.internal.Enum() };
connectors_internals.mojom.KeyTrustLevelSpec = { $: mojo.internal.Enum() };
connectors_internals.mojom.KeyTypeSpec = { $: mojo.internal.Enum() };
connectors_internals.mojom.KeyManagerPermanentFailureSpec = { $: mojo.internal.Enum() };
connectors_internals.mojom.KeyUploadStatusSpec = { $: {} };
connectors_internals.mojom.Int32ValueSpec = { $: {} };
connectors_internals.mojom.LoadedKeyInfoSpec = { $: {} };
connectors_internals.mojom.KeyInfoSpec = { $: {} };
connectors_internals.mojom.ConsentMetadataSpec = { $: {} };
connectors_internals.mojom.DeviceTrustStateSpec = { $: {} };
connectors_internals.mojom.CertificateMetadataSpec = { $: {} };
connectors_internals.mojom.ClientIdentitySpec = { $: {} };
connectors_internals.mojom.ClientCertificateStateSpec = { $: {} };
connectors_internals.mojom.SignalsReportingStateSpec = { $: {} };
connectors_internals.mojom.PageHandler = {};
connectors_internals.mojom.PageHandler.$interfaceName = 'connectors_internals.mojom.PageHandler';
connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec = { $: {} };
connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec = { $: {} };
connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec = { $: {} };
connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ResponseParamsSpec = { $: {} };
connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec = { $: {} };
connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec = { $: {} };
connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec = { $: {} };
connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec = { $: {} };

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

// Union: KeyUploadStatus
mojo.internal.Union(
    connectors_internals.mojom.KeyUploadStatusSpec, 'connectors_internals.mojom.KeyUploadStatus', {
      'sync_key_response_code': {
        'ordinal': 0,
        'type': connectors_internals.mojom.Int32ValueSpec.$,
        'nullable': false,
      },
      'upload_client_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: Int32Value
mojo.internal.Struct(
    connectors_internals.mojom.Int32ValueSpec, 'connectors_internals.mojom.Int32Value', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LoadedKeyInfo
mojo.internal.Struct(
    connectors_internals.mojom.LoadedKeyInfoSpec, 'connectors_internals.mojom.LoadedKeyInfo', [
      mojo.internal.StructField('trust_level', 0, 0, connectors_internals.mojom.KeyTrustLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_type', 8, 0, connectors_internals.mojom.KeyTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encoded_spki_hash', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key_upload_status', 24, 0, connectors_internals.mojom.KeyUploadStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('has_ssl_key', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: KeyInfo
mojo.internal.Struct(
    connectors_internals.mojom.KeyInfoSpec, 'connectors_internals.mojom.KeyInfo', [
      mojo.internal.StructField('is_key_manager_initialized', 0, 0, connectors_internals.mojom.KeyManagerInitializedValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('loaded_key_info', 8, 0, connectors_internals.mojom.LoadedKeyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('permanent_failure', 16, 0, connectors_internals.mojom.KeyManagerPermanentFailureSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConsentMetadata
mojo.internal.Struct(
    connectors_internals.mojom.ConsentMetadataSpec, 'connectors_internals.mojom.ConsentMetadata', [
      mojo.internal.StructField('can_collect_signals', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('consent_received', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceTrustState
mojo.internal.Struct(
    connectors_internals.mojom.DeviceTrustStateSpec, 'connectors_internals.mojom.DeviceTrustState', [
      mojo.internal.StructField('policy_enabled_levels', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('key_info', 8, 0, connectors_internals.mojom.KeyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signals_json', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('consent_metadata', 24, 0, connectors_internals.mojom.ConsentMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_enabled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CertificateMetadata
mojo.internal.Struct(
    connectors_internals.mojom.CertificateMetadataSpec, 'connectors_internals.mojom.CertificateMetadata', [
      mojo.internal.StructField('serial_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fingerprint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_date_string', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiration_date_string', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subject_display_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('issuer_display_name', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ClientIdentity
mojo.internal.Struct(
    connectors_internals.mojom.ClientIdentitySpec, 'connectors_internals.mojom.ClientIdentity', [
      mojo.internal.StructField('identity_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('loaded_key_info', 8, 0, connectors_internals.mojom.LoadedKeyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('certificate_metadata', 16, 0, connectors_internals.mojom.CertificateMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ClientCertificateState
mojo.internal.Struct(
    connectors_internals.mojom.ClientCertificateStateSpec, 'connectors_internals.mojom.ClientCertificateState', [
      mojo.internal.StructField('policy_enabled_levels', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('managed_profile_identity', 8, 0, connectors_internals.mojom.ClientIdentitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('managed_browser_identity', 16, 0, connectors_internals.mojom.ClientIdentitySpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SignalsReportingState
mojo.internal.Struct(
    connectors_internals.mojom.SignalsReportingStateSpec, 'connectors_internals.mojom.SignalsReportingState', [
      mojo.internal.StructField('error_info', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('last_upload_attempt_timestamp', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_upload_success_timestamp', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_signals_upload_config', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status_report_enabled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('signals_report_enabled', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_collect_all_fields', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandler
mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec, 'connectors_internals.mojom.PageHandler_GetDeviceTrustState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec, 'connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, connectors_internals.mojom.DeviceTrustStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec, 'connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ResponseParamsSpec, 'connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec, 'connectors_internals.mojom.PageHandler_GetClientCertificateState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec, 'connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, connectors_internals.mojom.ClientCertificateStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec, 'connectors_internals.mojom.PageHandler_GetSignalsReportingState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec, 'connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, connectors_internals.mojom.SignalsReportingStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

connectors_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

connectors_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'connectors_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      connectors_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new connectors_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDeviceTrustState() {
    return this.$.getDeviceTrustState();
  }
  deleteDeviceTrustKey() {
    return this.$.deleteDeviceTrustKey();
  }
  getClientCertificateState() {
    return this.$.getClientCertificateState();
  }
  getSignalsReportingState() {
    return this.$.getSignalsReportingState();
  }
};

connectors_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDeviceTrustState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec,
      connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec,
      [],
      false);
  }

  deleteDeviceTrustKey() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec,
      connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ResponseParamsSpec,
      [],
      false);
  }

  getClientCertificateState() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec,
      connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec,
      [],
      false);
  }

  getSignalsReportingState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec,
      connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec,
      [],
      false);
  }

};

connectors_internals.mojom.PageHandler.getRemote = function() {
  let remote = new connectors_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'connectors_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

connectors_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceTrustState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec.$.structSpec);
          const result = this.impl.deleteDeviceTrustKey();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec.$.structSpec);
          const result = this.impl.getClientCertificateState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec.$.structSpec);
          const result = this.impl.getSignalsReportingState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

connectors_internals.mojom.PageHandlerReceiver = connectors_internals.mojom.PageHandlerReceiver;

connectors_internals.mojom.PageHandlerPtr = connectors_internals.mojom.PageHandlerRemote;
connectors_internals.mojom.PageHandlerRequest = connectors_internals.mojom.PageHandlerPendingReceiver;

