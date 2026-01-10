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
connectors_internals.mojom.KeyManagerInitializedValueSpec = { $: mojo.internal.Enum() };

// Enum: KeyTrustLevel
connectors_internals.mojom.KeyTrustLevel = {
  UNSPECIFIED: 0,
  HW: 1,
  OS: 2,
  OS_SOFTWARE: 3,
};
connectors_internals.mojom.KeyTrustLevelSpec = { $: mojo.internal.Enum() };

// Enum: KeyType
connectors_internals.mojom.KeyType = {
  UNKNOWN: 0,
  RSA: 1,
  EC: 2,
};
connectors_internals.mojom.KeyTypeSpec = { $: mojo.internal.Enum() };

// Enum: KeyManagerPermanentFailure
connectors_internals.mojom.KeyManagerPermanentFailure = {
  UNSPECIFIED: 0,
  CREATION_UPLOAD_CONFLICT: 1,
  INSUFFICIENT_PERMISSIONS: 2,
  OS_RESTRICTION: 3,
  INVALID_INSTALLATION: 4,
};
connectors_internals.mojom.KeyManagerPermanentFailureSpec = { $: mojo.internal.Enum() };

// Union: KeyUploadStatus
connectors_internals.mojom.KeyUploadStatusSpec = { $: mojo.internal.Union(
    'connectors_internals.mojom.KeyUploadStatus', {
      'sync_key_response_code': {
        'ordinal': 0,
        'type': connectors_internals.mojom.Int32ValueSpec,
      }},
      'upload_client_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: Int32Value
connectors_internals.mojom.Int32ValueSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.Int32Value',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LoadedKeyInfo
connectors_internals.mojom.LoadedKeyInfoSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.LoadedKeyInfo',
      packedSize: 48,
      fields: [
        { name: 'trust_level', packedOffset: 24, packedBitOffset: 0, type: connectors_internals.mojom.KeyTrustLevelSpec, nullable: false, minVersion: 0 },
        { name: 'key_type', packedOffset: 28, packedBitOffset: 0, type: connectors_internals.mojom.KeyTypeSpec, nullable: false, minVersion: 0 },
        { name: 'encoded_spki_hash', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'key_upload_status', packedOffset: 0, packedBitOffset: 0, type: connectors_internals.mojom.KeyUploadStatusSpec, nullable: true, minVersion: 0 },
        { name: 'has_ssl_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: KeyInfo
connectors_internals.mojom.KeyInfoSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.KeyInfo',
      packedSize: 24,
      fields: [
        { name: 'is_key_manager_initialized', packedOffset: 8, packedBitOffset: 0, type: connectors_internals.mojom.KeyManagerInitializedValueSpec, nullable: false, minVersion: 0 },
        { name: 'loaded_key_info', packedOffset: 0, packedBitOffset: 0, type: connectors_internals.mojom.LoadedKeyInfoSpec, nullable: true, minVersion: 0 },
        { name: 'permanent_failure', packedOffset: 12, packedBitOffset: 0, type: connectors_internals.mojom.KeyManagerPermanentFailureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ConsentMetadata
connectors_internals.mojom.ConsentMetadataSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.ConsentMetadata',
      packedSize: 16,
      fields: [
        { name: 'can_collect_signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'consent_received', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DeviceTrustState
connectors_internals.mojom.DeviceTrustStateSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.DeviceTrustState',
      packedSize: 48,
      fields: [
        { name: 'is_enabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'policy_enabled_levels', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'key_info', packedOffset: 8, packedBitOffset: 0, type: connectors_internals.mojom.KeyInfoSpec, nullable: false, minVersion: 0 },
        { name: 'signals_json', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'consent_metadata', packedOffset: 24, packedBitOffset: 0, type: connectors_internals.mojom.ConsentMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: CertificateMetadata
connectors_internals.mojom.CertificateMetadataSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.CertificateMetadata',
      packedSize: 56,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fingerprint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'creation_date_string', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'expiration_date_string', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'subject_display_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'issuer_display_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ClientIdentity
connectors_internals.mojom.ClientIdentitySpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.ClientIdentity',
      packedSize: 32,
      fields: [
        { name: 'identity_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'loaded_key_info', packedOffset: 8, packedBitOffset: 0, type: connectors_internals.mojom.LoadedKeyInfoSpec, nullable: true, minVersion: 0 },
        { name: 'certificate_metadata', packedOffset: 16, packedBitOffset: 0, type: connectors_internals.mojom.CertificateMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ClientCertificateState
connectors_internals.mojom.ClientCertificateStateSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.ClientCertificateState',
      packedSize: 32,
      fields: [
        { name: 'policy_enabled_levels', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'managed_profile_identity', packedOffset: 8, packedBitOffset: 0, type: connectors_internals.mojom.ClientIdentitySpec, nullable: true, minVersion: 0 },
        { name: 'managed_browser_identity', packedOffset: 16, packedBitOffset: 0, type: connectors_internals.mojom.ClientIdentitySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SignalsReportingState
connectors_internals.mojom.SignalsReportingStateSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.SignalsReportingState',
      packedSize: 48,
      fields: [
        { name: 'error_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'status_report_enabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'signals_report_enabled', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'last_upload_attempt_timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_upload_success_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_signals_upload_config', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'can_collect_all_fields', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: PageHandler
connectors_internals.mojom.PageHandler = {};

connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler_GetDeviceTrustState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler_GetClientCertificateState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler_GetSignalsReportingState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
};

connectors_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceTrustState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec,
      connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec,
      []);
  }

  deleteDeviceTrustKey() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec,
      null,
      []);
  }

  getClientCertificateState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec,
      connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec,
      []);
  }

  getSignalsReportingState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec,
      connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetDeviceTrustState
connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetDeviceTrustState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetDeviceTrustState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: connectors_internals.mojom.DeviceTrustStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteDeviceTrustKey
connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.DeleteDeviceTrustKey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetClientCertificateState
connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetClientCertificateState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetClientCertificateState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: connectors_internals.mojom.ClientCertificateStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSignalsReportingState
connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetSignalsReportingState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetSignalsReportingState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: connectors_internals.mojom.SignalsReportingStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
connectors_internals.mojom.PageHandlerPtr = connectors_internals.mojom.PageHandlerRemote;
connectors_internals.mojom.PageHandlerRequest = connectors_internals.mojom.PageHandlerPendingReceiver;

