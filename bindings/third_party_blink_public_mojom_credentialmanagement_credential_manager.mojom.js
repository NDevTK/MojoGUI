// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/credentialmanagement/credential_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var url = url || {};

blink.mojom.CredentialTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.CredentialMediationRequirementSpec = { $: mojo.internal.Enum() };
blink.mojom.CredentialManagerErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.CredentialInfoSpec = { $: {} };
blink.mojom.CredentialManager = {};
blink.mojom.CredentialManager.$interfaceName = 'blink.mojom.CredentialManager';
blink.mojom.CredentialManager_Store_ParamsSpec = { $: {} };
blink.mojom.CredentialManager_Store_ResponseParamsSpec = { $: {} };
blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec = { $: {} };
blink.mojom.CredentialManager_PreventSilentAccess_ResponseParamsSpec = { $: {} };
blink.mojom.CredentialManager_Get_ParamsSpec = { $: {} };
blink.mojom.CredentialManager_Get_ResponseParamsSpec = { $: {} };

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

// Struct: CredentialInfo
mojo.internal.Struct(
    blink.mojom.CredentialInfoSpec, 'blink.mojom.CredentialInfo', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.CredentialTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('password', 32, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('federation', 40, 0, url.mojom.SchemeHostPortSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: CredentialManager
mojo.internal.Struct(
    blink.mojom.CredentialManager_Store_ParamsSpec, 'blink.mojom.CredentialManager_Store_Params', [
      mojo.internal.StructField('credential', 0, 0, blink.mojom.CredentialInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_Store_ResponseParamsSpec, 'blink.mojom.CredentialManager_Store_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec, 'blink.mojom.CredentialManager_PreventSilentAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_PreventSilentAccess_ResponseParamsSpec, 'blink.mojom.CredentialManager_PreventSilentAccess_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_Get_ParamsSpec, 'blink.mojom.CredentialManager_Get_Params', [
      mojo.internal.StructField('mediation', 0, 0, blink.mojom.CredentialMediationRequirementSpec, null, false, 0, undefined),
      mojo.internal.StructField('include_passwords', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('federations', 8, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_Get_ResponseParamsSpec, 'blink.mojom.CredentialManager_Get_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.CredentialManagerErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('credential', 8, 0, blink.mojom.CredentialInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      blink.mojom.CredentialManager_Store_ResponseParamsSpec,
      [credential],
      false);
  }

  preventSilentAccess() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec,
      blink.mojom.CredentialManager_PreventSilentAccess_ResponseParamsSpec,
      [],
      false);
  }

  get(mediation, include_passwords, federations) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.CredentialManager_Get_ParamsSpec,
      blink.mojom.CredentialManager_Get_ResponseParamsSpec,
      [mediation, include_passwords, federations],
      false);
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

blink.mojom.CredentialManagerPtr = blink.mojom.CredentialManagerRemote;
blink.mojom.CredentialManagerRequest = blink.mojom.CredentialManagerPendingReceiver;

