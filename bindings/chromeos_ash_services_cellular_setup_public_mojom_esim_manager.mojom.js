// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom
// Module: ash.cellular_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};


// Enum: ProfileState
ash.cellular_setup.mojom.ProfileState = {
  kPending: 0,
  kInstalling: 1,
  kInactive: 2,
  kActive: 3,
};

// Enum: ProfileInstallResult
ash.cellular_setup.mojom.ProfileInstallResult = {
  kSuccess: 0,
  kFailure: 1,
  kErrorNeedsConfirmationCode: 2,
  kErrorInvalidActivationCode: 3,
};

// Enum: ProfileInstallMethod
ash.cellular_setup.mojom.ProfileInstallMethod = {
  kViaSmds: 0,
  kViaQrCodeAfterSmds: 1,
  kViaQrCodeSkippedSmds: 2,
  kViaActivationCodeAfterSmds: 3,
  kViaActivationCodeSkippedSmds: 4,
};

// Enum: ESimOperationResult
ash.cellular_setup.mojom.ESimOperationResult = {
  kSuccess: 0,
  kFailure: 1,
};

// Struct: EuiccProperties
ash.cellular_setup.mojom.EuiccPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.EuiccProperties',
      packedSize: 24,
      fields: [
        { name: 'eid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_active', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ESimProfileProperties
ash.cellular_setup.mojom.ESimProfilePropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfileProperties',
      packedSize: 64,
      fields: [
        { name: 'eid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'iccid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'nickname', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'service_provider', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'state', packedOffset: 40, packedBitOffset: 0, type: ash.cellular_setup.mojom.ProfileStateSpec, nullable: false },
        { name: 'activation_code', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QRCode
ash.cellular_setup.mojom.QRCodeSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.QRCode',
      packedSize: 24,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ESimManagerObserver
ash.cellular_setup.mojom.ESimManagerObserver = {};

ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ESimManagerObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ESimManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.ESimManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAvailableEuiccListChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec,
      null,
      []);
  }

  onProfileListChanged(euicc) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec,
      null,
      [euicc]);
  }

  onEuiccChanged(euicc) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec,
      null,
      [euicc]);
  }

  onProfileChanged(profile) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec,
      null,
      [profile]);
  }

};

ash.cellular_setup.mojom.ESimManagerObserver.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ESimManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimManagerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAvailableEuiccListChanged
ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimManagerObserver.OnAvailableEuiccListChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProfileListChanged
ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimManagerObserver.OnProfileListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'euicc', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnEuiccChanged
ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimManagerObserver.OnEuiccChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'euicc', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProfileChanged
ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimManagerObserver.OnProfileChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cellular_setup.mojom.ESimManagerObserverPtr = ash.cellular_setup.mojom.ESimManagerObserverRemote;
ash.cellular_setup.mojom.ESimManagerObserverRequest = ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver;


// Interface: ESimManager
ash.cellular_setup.mojom.ESimManager = {};

ash.cellular_setup.mojom.ESimManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ESimManagerRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ESimManagerPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ESimManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.ESimManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  getAvailableEuiccs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec,
      ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec,
      []);
  }

};

ash.cellular_setup.mojom.ESimManager.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ESimManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimManager.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAvailableEuiccs
ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimManager.GetAvailableEuiccs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimManager.GetAvailableEuiccs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'euiccs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cellular_setup.mojom.ESimManagerPtr = ash.cellular_setup.mojom.ESimManagerRemote;
ash.cellular_setup.mojom.ESimManagerRequest = ash.cellular_setup.mojom.ESimManagerPendingReceiver;


// Interface: Euicc
ash.cellular_setup.mojom.Euicc = {};

ash.cellular_setup.mojom.EuiccPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.EuiccRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.Euicc';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.EuiccPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.EuiccRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.EuiccRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProperties() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec,
      []);
  }

  getProfileList() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec,
      []);
  }

  requestAvailableProfiles() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec,
      []);
  }

  refreshInstalledProfiles() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec,
      []);
  }

  installProfileFromActivationCode(activation_code, confirmation_code, install_method) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec,
      [activation_code, confirmation_code, install_method]);
  }

  getEidQRCode() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec,
      []);
  }

};

ash.cellular_setup.mojom.Euicc.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.EuiccRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.Euicc',
    'context');
  return remote.$;
};

// ParamsSpec for GetProperties
ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.GetProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.GetProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.EuiccPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProfileList
ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.GetProfileList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.GetProfileList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestAvailableProfiles
ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.RequestAvailableProfiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.RequestAvailableProfiles_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.ESimOperationResultSpec, nullable: false },
        { name: 'profiles', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RefreshInstalledProfiles
ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.RefreshInstalledProfiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.RefreshInstalledProfiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.ESimOperationResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InstallProfileFromActivationCode
ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.InstallProfileFromActivationCode_Params',
      packedSize: 32,
      fields: [
        { name: 'activation_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'confirmation_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'install_method', packedOffset: 16, packedBitOffset: 0, type: ash.cellular_setup.mojom.ProfileInstallMethodSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.InstallProfileFromActivationCode_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.ProfileInstallResultSpec, nullable: false },
        { name: 'profile', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEidQRCode
ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.GetEidQRCode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.Euicc.GetEidQRCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'qr_code', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.QRCodeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cellular_setup.mojom.EuiccPtr = ash.cellular_setup.mojom.EuiccRemote;
ash.cellular_setup.mojom.EuiccRequest = ash.cellular_setup.mojom.EuiccPendingReceiver;


// Interface: ESimProfile
ash.cellular_setup.mojom.ESimProfile = {};

ash.cellular_setup.mojom.ESimProfilePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ESimProfileRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ESimProfile';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ESimProfilePendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ESimProfileRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.ESimProfileRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProperties() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec,
      []);
  }

  installProfile(confirmation_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec,
      [confirmation_code]);
  }

  uninstallProfile() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec,
      []);
  }

  setProfileNickname(nickname) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec,
      [nickname]);
  }

};

ash.cellular_setup.mojom.ESimProfile.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ESimProfileRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ESimProfile',
    'context');
  return remote.$;
};

// ParamsSpec for GetProperties
ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.GetProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.GetProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.ESimProfilePropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InstallProfile
ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.InstallProfile_Params',
      packedSize: 16,
      fields: [
        { name: 'confirmation_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.InstallProfile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.ProfileInstallResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UninstallProfile
ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.UninstallProfile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.UninstallProfile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.ESimOperationResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetProfileNickname
ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.SetProfileNickname_Params',
      packedSize: 16,
      fields: [
        { name: 'nickname', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ESimProfile.SetProfileNickname_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.cellular_setup.mojom.ESimOperationResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cellular_setup.mojom.ESimProfilePtr = ash.cellular_setup.mojom.ESimProfileRemote;
ash.cellular_setup.mojom.ESimProfileRequest = ash.cellular_setup.mojom.ESimProfilePendingReceiver;

