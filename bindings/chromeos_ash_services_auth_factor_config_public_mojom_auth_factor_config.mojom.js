// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom
// Module: ash.auth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.auth = ash.auth || {};
ash.auth.mojom = ash.auth.mojom || {};

ash.auth.mojom.AuthFactorSpec = { $: mojo.internal.Enum() };
ash.auth.mojom.ManagementTypeSpec = { $: mojo.internal.Enum() };
ash.auth.mojom.LocalAuthFactorsComplexitySpec = { $: mojo.internal.Enum() };
ash.auth.mojom.ConfigureResultSpec = { $: mojo.internal.Enum() };
ash.auth.mojom.PinComplexitySpec = { $: mojo.internal.Enum() };
ash.auth.mojom.PasswordComplexitySpec = { $: mojo.internal.Enum() };
ash.auth.mojom.FactorObserver = {};
ash.auth.mojom.FactorObserver.$interfaceName = 'ash.auth.mojom.FactorObserver';
ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig = {};
ash.auth.mojom.AuthFactorConfig.$interfaceName = 'ash.auth.mojom.AuthFactorConfig';
ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec = { $: {} };
ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec = { $: {} };
ash.auth.mojom.RecoveryFactorEditor = {};
ash.auth.mojom.RecoveryFactorEditor.$interfaceName = 'ash.auth.mojom.RecoveryFactorEditor';
ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec = { $: {} };
ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor = {};
ash.auth.mojom.PinFactorEditor.$interfaceName = 'ash.auth.mojom.PinFactorEditor';
ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec = { $: {} };
ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor = {};
ash.auth.mojom.PasswordFactorEditor.$interfaceName = 'ash.auth.mojom.PasswordFactorEditor';
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec = { $: {} };
ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec = { $: {} };

// Enum: AuthFactor
ash.auth.mojom.AuthFactor = {
  kRecovery: 0,
  kPrefBasedPin: 1,
  kCryptohomePin: 2,
  kCryptohomePinV2: 3,
  kGaiaPassword: 4,
  kLocalPassword: 5,
};

// Enum: ManagementType
ash.auth.mojom.ManagementType = {
  kNone: 0,
  kDevice: 1,
  kUser: 2,
  kChildRestriction: 3,
};

// Enum: LocalAuthFactorsComplexity
ash.auth.mojom.LocalAuthFactorsComplexity = {
  kUnset: 0,
  kNone: 1,
  kLow: 2,
  kMedium: 3,
  kHigh: 4,
};

// Enum: ConfigureResult
ash.auth.mojom.ConfigureResult = {
  kSuccess: 0,
  kInvalidTokenError: 1,
  kFatalError: 2,
};

// Enum: PinComplexity
ash.auth.mojom.PinComplexity = {
  kOk: 0,
  kInvalidTokenError: 1,
  kErrNone: 2,
  kErrLow: 3,
  kErrMedium: 4,
  kErrHigh: 5,
};

// Enum: PasswordComplexity
ash.auth.mojom.PasswordComplexity = {
  kOk: 0,
  kTooShort: 1,
  kErrNone: 2,
  kErrLow: 3,
  kErrMedium: 4,
  kErrHigh: 5,
};

// Interface: FactorObserver
mojo.internal.Struct(
    ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec, 'ash.auth.mojom.FactorObserver_OnFactorChanged_Params', [
      mojo.internal.StructField('factor', 0, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [factor],
      false);
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

ash.auth.mojom.FactorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.auth.mojom.FactorObserver_OnFactorChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFactorChanged(params.factor);
          break;
        }
      }
    }});
  }
};

ash.auth.mojom.FactorObserverReceiver = ash.auth.mojom.FactorObserverReceiver;

ash.auth.mojom.FactorObserverPtr = ash.auth.mojom.FactorObserverRemote;
ash.auth.mojom.FactorObserverRequest = ash.auth.mojom.FactorObserverPendingReceiver;


// Interface: AuthFactorConfig
mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.auth.mojom.FactorObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsSupported_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsConfigured_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParams', [
      mojo.internal.StructField('configured', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_GetManagementType_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParams', [
      mojo.internal.StructField('management', 0, 0, ash.auth.mojom.ManagementTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsEditable_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('factor', 8, 0, ash.auth.mojom.AuthFactorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec, 'ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParams', [
      mojo.internal.StructField('editable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec, 'ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
  }

  isSupported(auth_token, factor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  isConfigured(auth_token, factor) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  getManagementType(auth_token, factor) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  isEditable(auth_token, factor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec,
      ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec,
      [auth_token, factor],
      false);
  }

  getLocalAuthFactorsComplexity(auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec,
      null,
      [auth_token],
      false);
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

ash.auth.mojom.AuthFactorConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.auth.mojom.AuthFactorConfig_ObserveFactorChanges_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeFactorChanges(params.observer);
          break;
        }
        case 1: {
          const params = ash.auth.mojom.AuthFactorConfig_IsSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isSupported(params.auth_token, params.factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_IsSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.auth.mojom.AuthFactorConfig_IsConfigured_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isConfigured(params.auth_token, params.factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_IsConfigured_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.auth.mojom.AuthFactorConfig_GetManagementType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getManagementType(params.auth_token, params.factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_GetManagementType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.auth.mojom.AuthFactorConfig_IsEditable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isEditable(params.auth_token, params.factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.AuthFactorConfig_IsEditable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.auth.mojom.AuthFactorConfig_GetLocalAuthFactorsComplexity_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLocalAuthFactorsComplexity(params.auth_token);
          break;
        }
      }
    }});
  }
};

ash.auth.mojom.AuthFactorConfigReceiver = ash.auth.mojom.AuthFactorConfigReceiver;

ash.auth.mojom.AuthFactorConfigPtr = ash.auth.mojom.AuthFactorConfigRemote;
ash.auth.mojom.AuthFactorConfigRequest = ash.auth.mojom.AuthFactorConfigPendingReceiver;


// Interface: RecoveryFactorEditor
mojo.internal.Struct(
    ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec, 'ash.auth.mojom.RecoveryFactorEditor_Configure_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec, 'ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [auth_token, enabled],
      false);
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

ash.auth.mojom.RecoveryFactorEditorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.auth.mojom.RecoveryFactorEditor_Configure_ParamsSpec.$.decode(message.payload);
          const result = this.impl.configure(params.auth_token, params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.RecoveryFactorEditor_Configure_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.auth.mojom.RecoveryFactorEditorReceiver = ash.auth.mojom.RecoveryFactorEditorReceiver;

ash.auth.mojom.RecoveryFactorEditorPtr = ash.auth.mojom.RecoveryFactorEditorRemote;
ash.auth.mojom.RecoveryFactorEditorRequest = ash.auth.mojom.RecoveryFactorEditorPendingReceiver;


// Interface: PinFactorEditor
mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_SetPin_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pin', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_SetPin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_UpdatePin_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pin', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_RemovePin_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParams', [
      mojo.internal.StructField('pin_factor', 0, 0, ash.auth.mojom.AuthFactorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec, 'ash.auth.mojom.PinFactorEditor_CheckPinComplexity_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pin', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec, 'ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParams', [
      mojo.internal.StructField('complexity', 0, 0, ash.auth.mojom.PinComplexitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [auth_token, pin],
      false);
  }

  updatePin(auth_token, pin) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec,
      [auth_token, pin],
      false);
  }

  removePin(auth_token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec,
      [auth_token],
      false);
  }

  getConfiguredPinFactor(auth_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec,
      [auth_token],
      false);
  }

  checkPinComplexity(auth_token, pin) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec,
      ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec,
      [auth_token, pin],
      false);
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

ash.auth.mojom.PinFactorEditorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.auth.mojom.PinFactorEditor_SetPin_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPin(params.auth_token, params.pin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_SetPin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.auth.mojom.PinFactorEditor_UpdatePin_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updatePin(params.auth_token, params.pin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_UpdatePin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.auth.mojom.PinFactorEditor_RemovePin_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removePin(params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_RemovePin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getConfiguredPinFactor(params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_GetConfiguredPinFactor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ParamsSpec.$.decode(message.payload);
          const result = this.impl.checkPinComplexity(params.auth_token, params.pin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PinFactorEditor_CheckPinComplexity_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.auth.mojom.PinFactorEditorReceiver = ash.auth.mojom.PinFactorEditorReceiver;

ash.auth.mojom.PinFactorEditorPtr = ash.auth.mojom.PinFactorEditorRemote;
ash.auth.mojom.PinFactorEditorRequest = ash.auth.mojom.PinFactorEditorPendingReceiver;


// Interface: PasswordFactorEditor
mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParams', [
      mojo.internal.StructField('complexity', 0, 0, ash.auth.mojom.PasswordComplexitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_RemovePassword_Params', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec, 'ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.auth.mojom.ConfigureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [auth_token, new_password],
      false);
  }

  updateOrSetOnlinePassword(auth_token, new_password) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec,
      [auth_token, new_password],
      false);
  }

  setLocalPassword(auth_token, new_password) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec,
      [auth_token, new_password],
      false);
  }

  setOnlinePassword(auth_token, new_password) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec,
      [auth_token, new_password],
      false);
  }

  checkLocalPasswordComplexity(password) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec,
      [password],
      false);
  }

  removePassword(auth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec,
      ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec,
      [auth_token],
      false);
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

ash.auth.mojom.PasswordFactorEditorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateOrSetLocalPassword(params.auth_token, params.new_password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_UpdateOrSetLocalPassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateOrSetOnlinePassword(params.auth_token, params.new_password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_UpdateOrSetOnlinePassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setLocalPassword(params.auth_token, params.new_password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_SetLocalPassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setOnlinePassword(params.auth_token, params.new_password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_SetOnlinePassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ParamsSpec.$.decode(message.payload);
          const result = this.impl.checkLocalPasswordComplexity(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_CheckLocalPasswordComplexity_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.auth.mojom.PasswordFactorEditor_RemovePassword_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removePassword(params.auth_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.auth.mojom.PasswordFactorEditor_RemovePassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.auth.mojom.PasswordFactorEditorReceiver = ash.auth.mojom.PasswordFactorEditorReceiver;

ash.auth.mojom.PasswordFactorEditorPtr = ash.auth.mojom.PasswordFactorEditorRemote;
ash.auth.mojom.PasswordFactorEditorRequest = ash.auth.mojom.PasswordFactorEditorPendingReceiver;

