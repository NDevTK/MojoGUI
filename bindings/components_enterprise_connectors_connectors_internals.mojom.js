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

// Interface: PageHandler
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
      connectors_internals.mojom.PageHandler_GetDeviceTrustState_ParamsSpec.$,
      connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec.$,
      []);
  }

  deleteDeviceTrustKey() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      connectors_internals.mojom.PageHandler_DeleteDeviceTrustKey_ParamsSpec.$,
      null,
      []);
  }

  getClientCertificateState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      connectors_internals.mojom.PageHandler_GetClientCertificateState_ParamsSpec.$,
      connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec.$,
      []);
  }

  getSignalsReportingState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      connectors_internals.mojom.PageHandler_GetSignalsReportingState_ParamsSpec.$,
      connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec.$,
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
}};

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
}};

connectors_internals.mojom.PageHandler_GetDeviceTrustState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetDeviceTrustState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

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
}};

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
}};

connectors_internals.mojom.PageHandler_GetClientCertificateState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetClientCertificateState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

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
}};

connectors_internals.mojom.PageHandler_GetSignalsReportingState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'connectors_internals.mojom.PageHandler.GetSignalsReportingState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
connectors_internals.mojom.PageHandlerPtr = connectors_internals.mojom.PageHandlerRemote;
connectors_internals.mojom.PageHandlerRequest = connectors_internals.mojom.PageHandlerPendingReceiver;

