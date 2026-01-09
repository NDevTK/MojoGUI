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
connectors_internals.mojom.Int32ValueSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.Int32Value',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LoadedKeyInfo
connectors_internals.mojom.LoadedKeyInfoSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.LoadedKeyInfo',
      packedSize: 16,
      fields: [
        { name: 'has_ssl_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeyInfo
connectors_internals.mojom.KeyInfoSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.KeyInfo',
      packedSize: 16,
      fields: [
        { name: 'permanent_failure', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'consent_received', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceTrustState
connectors_internals.mojom.DeviceTrustStateSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.DeviceTrustState',
      packedSize: 16,
      fields: [
        { name: 'consent_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CertificateMetadata
connectors_internals.mojom.CertificateMetadataSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.CertificateMetadata',
      packedSize: 16,
      fields: [
        { name: 'issuer_display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ClientIdentity
connectors_internals.mojom.ClientIdentitySpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.ClientIdentity',
      packedSize: 16,
      fields: [
        { name: 'certificate_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ClientCertificateState
connectors_internals.mojom.ClientCertificateStateSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.ClientCertificateState',
      packedSize: 16,
      fields: [
        { name: 'managed_browser_identity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SignalsReportingState
connectors_internals.mojom.SignalsReportingStateSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.SignalsReportingState',
      packedSize: 16,
      fields: [
        { name: 'can_collect_all_fields', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandler
connectors_internals.mojom.PageHandler = {};

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
      versions: [{version: 0}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetDeviceTrustState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetClientCertificateState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetSignalsReportingState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
connectors_internals.mojom.PageHandlerPtr = connectors_internals.mojom.PageHandlerRemote;
connectors_internals.mojom.PageHandlerRequest = connectors_internals.mojom.PageHandlerPendingReceiver;

