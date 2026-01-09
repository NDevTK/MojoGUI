// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/credentialmanagement/credential_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: CredentialType
blink.mojom.CredentialType = {
  EMPTY: 0,
  PASSWORD: 1,
  FEDERATED: 2,
};

// Enum: CredentialMediationRequirement
blink.mojom.CredentialMediationRequirement = {
  kSilent: 0,
  kOptional: 1,
  kRequired: 2,
  kConditional: 3,
};

// Enum: CredentialManagerError
blink.mojom.CredentialManagerError = {
  SUCCESS: 0,
  PENDING_REQUEST: 1,
  PASSWORD_STORE_UNAVAILABLE: 2,
  UNKNOWN: 3,
};

// Interface: CredentialManager
blink.mojom.CredentialManager = {};

blink.mojom.CredentialManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CredentialManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CredentialManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CredentialManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.CredentialManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.CredentialManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  store(credential) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.CredentialManager_Store_ParamsSpec,
      null,
      [credential]);
  }

  preventSilentAccess() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec,
      null,
      []);
  }

  get(mediation, include_passwords, federations) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.CredentialManager_Get_ParamsSpec,
      blink.mojom.CredentialManager_Get_ResponseParamsSpec,
      [mediation, include_passwords, federations]);
  }

};

blink.mojom.CredentialManager.getRemote = function() {
  let remote = new blink.mojom.CredentialManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CredentialManager',
    'context');
  return remote.$;
};

// ParamsSpec for Store
blink.mojom.CredentialManager_Store_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.Store_Params',
      packedSize: 16,
      fields: [
        { name: 'credential', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PreventSilentAccess
blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.PreventSilentAccess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Get
blink.mojom.CredentialManager_Get_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.Get_Params',
      packedSize: 32,
      fields: [
        { name: 'mediation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'include_passwords', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'federations', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.CredentialManager_Get_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.Get_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'credential', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.CredentialManagerPtr = blink.mojom.CredentialManagerRemote;
blink.mojom.CredentialManagerRequest = blink.mojom.CredentialManagerPendingReceiver;

