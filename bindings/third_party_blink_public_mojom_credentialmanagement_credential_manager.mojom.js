// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/credentialmanagement/credential_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var url = url || {};


// Enum: CredentialType
blink.mojom.mojom.CredentialType = {
  EMPTY: 0,
  PASSWORD: 1,
  FEDERATED: 2,
};
blink.mojom.mojom.CredentialTypeSpec = { $: mojo.internal.Enum() };

// Enum: CredentialMediationRequirement
blink.mojom.mojom.CredentialMediationRequirement = {
  kSilent: 0,
  kOptional: 1,
  kRequired: 2,
  kConditional: 3,
};
blink.mojom.mojom.CredentialMediationRequirementSpec = { $: mojo.internal.Enum() };

// Enum: CredentialManagerError
blink.mojom.mojom.CredentialManagerError = {
  SUCCESS: 0,
  PENDING_REQUEST: 1,
  PASSWORD_STORE_UNAVAILABLE: 2,
  UNKNOWN: 3,
};
blink.mojom.mojom.CredentialManagerErrorSpec = { $: mojo.internal.Enum() };

// Struct: CredentialInfo
blink.mojom.mojom.CredentialInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialInfo',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.CredentialTypeSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'federation', packedOffset: 32, packedBitOffset: 0, type: url.mojom.SchemeHostPortSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: CredentialManager
blink.mojom.mojom.CredentialManager = {};

blink.mojom.mojom.CredentialManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.CredentialManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CredentialManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.CredentialManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.CredentialManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.CredentialManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  store(credential) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.CredentialManager_Store_ParamsSpec,
      null,
      [credential]);
  }

  preventSilentAccess() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.CredentialManager_PreventSilentAccess_ParamsSpec,
      null,
      []);
  }

  get(mediation, include_passwords, federations) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.CredentialManager_Get_ParamsSpec,
      blink.mojom.mojom.CredentialManager_Get_ResponseParamsSpec,
      [mediation, include_passwords, federations]);
  }

};

blink.mojom.mojom.CredentialManager.getRemote = function() {
  let remote = new blink.mojom.mojom.CredentialManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CredentialManager',
    'context');
  return remote.$;
};

// ParamsSpec for Store
blink.mojom.mojom.CredentialManager_Store_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.Store_Params',
      packedSize: 16,
      fields: [
        { name: 'credential', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CredentialInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreventSilentAccess
blink.mojom.mojom.CredentialManager_PreventSilentAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.PreventSilentAccess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Get
blink.mojom.mojom.CredentialManager_Get_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.Get_Params',
      packedSize: 24,
      fields: [
        { name: 'mediation', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CredentialMediationRequirementSpec, nullable: false, minVersion: 0 },
        { name: 'include_passwords', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'federations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.CredentialManager_Get_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CredentialManager.Get_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CredentialManagerErrorSpec, nullable: false, minVersion: 0 },
        { name: 'credential', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CredentialInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.CredentialManagerPtr = blink.mojom.mojom.CredentialManagerRemote;
blink.mojom.mojom.CredentialManagerRequest = blink.mojom.mojom.CredentialManagerPendingReceiver;

