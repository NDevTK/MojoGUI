// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom
// Module: ash.auth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.auth = ash.auth || {};
ash.auth.mojom = ash.auth.mojom || {};


// Enum: AuthFactor
ash.auth.mojom.AuthFactor = {
  kRecovery: 0,
  kPrefBasedPin: 1,
  kCryptohomePin: 2,
  kCryptohomePinV2: 3,
  kGaiaPassword: 4,
  kLocalPassword: 5,
};
ash.auth.mojom.AuthFactorSpec = { $: mojo.internal.Enum() };

// Enum: ManagementType
ash.auth.mojom.ManagementType = {
  kNone: 0,
  kDevice: 1,
  kUser: 2,
  kChildRestriction: 3,
};
ash.auth.mojom.ManagementTypeSpec = { $: mojo.internal.Enum() };

// Enum: LocalAuthFactorsComplexity
ash.auth.mojom.LocalAuthFactorsComplexity = {
  kUnset: 0,
  kNone: 1,
  kLow: 2,
  kMedium: 3,
  kHigh: 4,
};
ash.auth.mojom.LocalAuthFactorsComplexitySpec = { $: mojo.internal.Enum() };

// Enum: ConfigureResult
ash.auth.mojom.ConfigureResult = {
  kSuccess: 0,
  kInvalidTokenError: 1,
  kFatalError: 2,
};
ash.auth.mojom.ConfigureResultSpec = { $: mojo.internal.Enum() };

// Enum: PinComplexity
ash.auth.mojom.PinComplexity = {
  kOk: 0,
  kInvalidTokenError: 1,
  kErrNone: 2,
  kErrLow: 3,
  kErrMedium: 4,
  kErrHigh: 5,
};
ash.auth.mojom.PinComplexitySpec = { $: mojo.internal.Enum() };

// Enum: PasswordComplexity
ash.auth.mojom.PasswordComplexity = {
  kOk: 0,
  kTooShort: 1,
  kErrNone: 2,
  kErrLow: 3,
  kErrMedium: 4,
  kErrHigh: 5,
};
ash.auth.mojom.PasswordComplexitySpec = { $: mojo.internal.Enum() };

// Interface: FactorObserver
ash.auth.mojom.FactorObserver = {};

ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.FactorObserver_OnFactorChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'factor', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.FactorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.FactorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.FactorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.FactorObserverPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.FactorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.auth.mojom.FactorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFactorChanged(factor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec,
      null,
      [factor]);
  }

};

ash.auth.mojom.FactorObserver.getRemote = function() {
  let remote = new ash.auth.mojom.FactorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.FactorObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFactorChanged
ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.FactorObserver.OnFactorChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'factor', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.auth.mojom.FactorObserverPtr = ash.auth.mojom.FactorObserverRemote;
ash.auth.mojom.FactorObserverRequest = ash.auth.mojom.FactorObserverPendingReceiver;


// Interface: AuthFactorConfig
ash.auth.mojom.AuthFactorConfig = {};

ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.auth.mojom.FactorObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig_IsSupported_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig_IsConfigured_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig_GetManagementType_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig_IsEditable_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.AuthFactorConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.AuthFactorConfigRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.AuthFactorConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.AuthFactorConfigPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.AuthFactorConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.auth.mojom.AuthFactorConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeFactorChanges(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec,
      null,
      [observer]);
  }

  isSupported(auth_token, factor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec,
      [auth_token, factor]);
  }

  isConfigured(auth_token, factor) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec,
      [auth_token, factor]);
  }

  getManagementType(auth_token, factor) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec,
      [auth_token, factor]);
  }

  isEditable(auth_token, factor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec,
      [auth_token, factor]);
  }

  getLocalAuthFactorsComplexity(auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec,
      null,
      [auth_token]);
  }

};

ash.auth.mojom.AuthFactorConfig.getRemote = function() {
  let remote = new ash.auth.mojom.AuthFactorConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.AuthFactorConfig',
    'context');
  return remote.$;
};

// ParamsSpec for ObserveFactorChanges
ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.ObserveFactorChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.auth.mojom.FactorObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsSupported
ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.IsSupported_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.IsSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsConfigured
ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.IsConfigured_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.IsConfigured_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'configured', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetManagementType
ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.GetManagementType_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.GetManagementType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'management', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ManagementTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsEditable
ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.IsEditable_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'factor', packedOffset: 8, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.IsEditable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'editable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLocalAuthFactorsComplexity
ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.AuthFactorConfig.GetLocalAuthFactorsComplexity_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.auth.mojom.AuthFactorConfigPtr = ash.auth.mojom.AuthFactorConfigRemote;
ash.auth.mojom.AuthFactorConfigRequest = ash.auth.mojom.AuthFactorConfigPendingReceiver;


// Interface: RecoveryFactorEditor
ash.auth.mojom.RecoveryFactorEditor = {};

ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.RecoveryFactorEditor_Configure_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.RecoveryFactorEditorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.RecoveryFactorEditorRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.RecoveryFactorEditor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.RecoveryFactorEditorPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.RecoveryFactorEditorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.auth.mojom.RecoveryFactorEditorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  configure(auth_token, enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec,
      ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec,
      [auth_token, enabled]);
  }

};

ash.auth.mojom.RecoveryFactorEditor.getRemote = function() {
  let remote = new ash.auth.mojom.RecoveryFactorEditorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.RecoveryFactorEditor',
    'context');
  return remote.$;
};

// ParamsSpec for Configure
ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.RecoveryFactorEditor.Configure_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.RecoveryFactorEditor.Configure_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.auth.mojom.RecoveryFactorEditorPtr = ash.auth.mojom.RecoveryFactorEditorRemote;
ash.auth.mojom.RecoveryFactorEditorRequest = ash.auth.mojom.RecoveryFactorEditorPendingReceiver;


// Interface: PinFactorEditor
ash.auth.mojom.PinFactorEditor = {};

ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor_SetPin_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor_UpdatePin_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor_RemovePin_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor_CheckPinComplexity_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PinFactorEditorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.PinFactorEditorRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.PinFactorEditor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.PinFactorEditorPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.PinFactorEditorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.auth.mojom.PinFactorEditorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPin(auth_token, pin) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec,
      [auth_token, pin]);
  }

  updatePin(auth_token, pin) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec,
      [auth_token, pin]);
  }

  removePin(auth_token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec,
      [auth_token]);
  }

  getConfiguredPinFactor(auth_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec,
      [auth_token]);
  }

  checkPinComplexity(auth_token, pin) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec,
      [auth_token, pin]);
  }

};

ash.auth.mojom.PinFactorEditor.getRemote = function() {
  let remote = new ash.auth.mojom.PinFactorEditorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.PinFactorEditor',
    'context');
  return remote.$;
};

// ParamsSpec for SetPin
ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.SetPin_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.SetPin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdatePin
ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.UpdatePin_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.UpdatePin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemovePin
ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.RemovePin_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.RemovePin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetConfiguredPinFactor
ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.GetConfiguredPinFactor_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.GetConfiguredPinFactor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pin_factor', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.AuthFactorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckPinComplexity
ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.CheckPinComplexity_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PinFactorEditor.CheckPinComplexity_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'complexity', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.PinComplexitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.auth.mojom.PinFactorEditorPtr = ash.auth.mojom.PinFactorEditorRemote;
ash.auth.mojom.PinFactorEditorRequest = ash.auth.mojom.PinFactorEditorPendingReceiver;


// Interface: PasswordFactorEditor
ash.auth.mojom.PasswordFactorEditor = {};

ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor_RemovePassword_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.auth.mojom.PasswordFactorEditorRemote = class {
  static get $interfaceName() {
    return 'ash.auth.mojom.PasswordFactorEditor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.auth.mojom.PasswordFactorEditorPendingReceiver,
      handle);
    this.$ = new ash.auth.mojom.PasswordFactorEditorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.auth.mojom.PasswordFactorEditorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateOrSetLocalPassword(auth_token, new_password) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec,
      [auth_token, new_password]);
  }

  updateOrSetOnlinePassword(auth_token, new_password) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec,
      [auth_token, new_password]);
  }

  setLocalPassword(auth_token, new_password) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec,
      [auth_token, new_password]);
  }

  setOnlinePassword(auth_token, new_password) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec,
      [auth_token, new_password]);
  }

  checkLocalPasswordComplexity(password) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec,
      [password]);
  }

  removePassword(auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec,
      [auth_token]);
  }

};

ash.auth.mojom.PasswordFactorEditor.getRemote = function() {
  let remote = new ash.auth.mojom.PasswordFactorEditorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.auth.mojom.PasswordFactorEditor',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateOrSetLocalPassword
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.UpdateOrSetLocalPassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.UpdateOrSetLocalPassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateOrSetOnlinePassword
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.UpdateOrSetOnlinePassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.UpdateOrSetOnlinePassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLocalPassword
ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.SetLocalPassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.SetLocalPassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOnlinePassword
ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.SetOnlinePassword_Params',
      packedSize: 24,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.SetOnlinePassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckLocalPasswordComplexity
ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.CheckLocalPasswordComplexity_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.CheckLocalPasswordComplexity_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'complexity', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.PasswordComplexitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemovePassword
ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.RemovePassword_Params',
      packedSize: 16,
      fields: [
        { name: 'auth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.auth.mojom.PasswordFactorEditor.RemovePassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.auth.mojom.ConfigureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.auth.mojom.PasswordFactorEditorPtr = ash.auth.mojom.PasswordFactorEditorRemote;
ash.auth.mojom.PasswordFactorEditorRequest = ash.auth.mojom.PasswordFactorEditorPendingReceiver;

