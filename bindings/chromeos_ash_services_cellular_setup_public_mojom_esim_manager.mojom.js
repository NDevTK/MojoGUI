// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom
// Module: ash.cellular_setup.mojom

// Module namespace
var ash = ash || {};
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};
var mojo_base = mojo_base || {};

ash.cellular_setup.mojom.ProfileStateSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ProfileInstallResultSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ProfileInstallMethodSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ESimOperationResultSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.EuiccPropertiesSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfilePropertiesSpec = { $: {} };
ash.cellular_setup.mojom.QRCodeSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver = {};
ash.cellular_setup.mojom.ESimManagerObserver.$interfaceName = 'ash.cellular_setup.mojom.ESimManagerObserver';
ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManager = {};
ash.cellular_setup.mojom.ESimManager.$interfaceName = 'ash.cellular_setup.mojom.ESimManager';
ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc = {};
ash.cellular_setup.mojom.Euicc.$interfaceName = 'ash.cellular_setup.mojom.Euicc';
ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile = {};
ash.cellular_setup.mojom.ESimProfile.$interfaceName = 'ash.cellular_setup.mojom.ESimProfile';
ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    ash.cellular_setup.mojom.EuiccPropertiesSpec, 'ash.cellular_setup.mojom.EuiccProperties', [
      mojo.internal.StructField('eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_active', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ESimProfileProperties
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfilePropertiesSpec, 'ash.cellular_setup.mojom.ESimProfileProperties', [
      mojo.internal.StructField('eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('iccid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('nickname', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_provider', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 40, 0, ash.cellular_setup.mojom.ProfileStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_code', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: QRCode
mojo.internal.Struct(
    ash.cellular_setup.mojom.QRCodeSpec, 'ash.cellular_setup.mojom.QRCode', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ESimManagerObserver
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_Params', [
      mojo.internal.StructField('euicc', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.EuiccRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_Params', [
      mojo.internal.StructField('euicc', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.EuiccRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec, 'ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_Params', [
      mojo.internal.StructField('profile', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimProfileRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onAvailableEuiccListChanged() {
    return this.$.onAvailableEuiccListChanged();
  }
  onProfileListChanged(euicc) {
    return this.$.onProfileListChanged(euicc);
  }
  onEuiccChanged(euicc) {
    return this.$.onEuiccChanged(euicc);
  }
  onProfileChanged(profile) {
    return this.$.onProfileChanged(profile);
  }
};

ash.cellular_setup.mojom.ESimManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ESimManagerObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAvailableEuiccListChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onProfileListChanged(euicc) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec,
      null,
      [euicc],
      false);
  }

  onEuiccChanged(euicc) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec,
      null,
      [euicc],
      false);
  }

  onProfileChanged(profile) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec,
      null,
      [profile],
      false);
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

ash.cellular_setup.mojom.ESimManagerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ESimManagerObserver', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnAvailableEuiccListChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onAvailableEuiccListChanged();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileListChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onProfileListChanged(params.euicc);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnEuiccChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onEuiccChanged(params.euicc);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManagerObserver_OnProfileChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onProfileChanged(params.profile);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cellular_setup.mojom.ESimManagerObserverReceiver = ash.cellular_setup.mojom.ESimManagerObserverReceiver;

ash.cellular_setup.mojom.ESimManagerObserverPtr = ash.cellular_setup.mojom.ESimManagerObserverRemote;
ash.cellular_setup.mojom.ESimManagerObserverRequest = ash.cellular_setup.mojom.ESimManagerObserverPendingReceiver;


// Interface: ESimManager
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec, 'ash.cellular_setup.mojom.ESimManager_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimManagerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec, 'ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParams', [
      mojo.internal.StructField('euiccs', 0, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.EuiccRemote), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  getAvailableEuiccs() {
    return this.$.getAvailableEuiccs();
  }
};

ash.cellular_setup.mojom.ESimManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ESimManager', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getAvailableEuiccs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec,
      ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec,
      [],
      false);
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

ash.cellular_setup.mojom.ESimManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ESimManager', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ParamsSpec.$.structSpec);
          const result = this.impl.getAvailableEuiccs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimManager_GetAvailableEuiccs_ResponseParamsSpec);
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

ash.cellular_setup.mojom.ESimManagerReceiver = ash.cellular_setup.mojom.ESimManagerReceiver;

ash.cellular_setup.mojom.ESimManagerPtr = ash.cellular_setup.mojom.ESimManagerRemote;
ash.cellular_setup.mojom.ESimManagerRequest = ash.cellular_setup.mojom.ESimManagerPendingReceiver;


// Interface: Euicc
mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, ash.cellular_setup.mojom.EuiccPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProfileList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParams', [
      mojo.internal.StructField('profiles', 0, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimProfileRemote), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profiles', 8, 0, mojo.internal.Array(ash.cellular_setup.mojom.ESimProfilePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_Params', [
      mojo.internal.StructField('activation_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('confirmation_code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('install_method', 16, 0, ash.cellular_setup.mojom.ProfileInstallMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ProfileInstallResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile', 8, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ESimProfileRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetEidQRCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec, 'ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParams', [
      mojo.internal.StructField('qr_code', 0, 0, ash.cellular_setup.mojom.QRCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
  getProperties() {
    return this.$.getProperties();
  }
  getProfileList() {
    return this.$.getProfileList();
  }
  requestAvailableProfiles() {
    return this.$.requestAvailableProfiles();
  }
  refreshInstalledProfiles() {
    return this.$.refreshInstalledProfiles();
  }
  installProfileFromActivationCode(activation_code, confirmation_code, install_method) {
    return this.$.installProfileFromActivationCode(activation_code, confirmation_code, install_method);
  }
  getEidQRCode() {
    return this.$.getEidQRCode();
  }
};

ash.cellular_setup.mojom.EuiccRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Euicc', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  getProfileList() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec,
      [],
      false);
  }

  requestAvailableProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec,
      [],
      false);
  }

  refreshInstalledProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec,
      [],
      false);
  }

  installProfileFromActivationCode(activation_code, confirmation_code, install_method) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec,
      [activation_code, confirmation_code, install_method],
      false);
  }

  getEidQRCode() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec,
      ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec,
      [],
      false);
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

ash.cellular_setup.mojom.EuiccReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Euicc', [
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProperties_ParamsSpec.$.structSpec);
          const result = this.impl.getProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_GetProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetProfileList_ParamsSpec.$.structSpec);
          const result = this.impl.getProfileList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_GetProfileList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ParamsSpec.$.structSpec);
          const result = this.impl.requestAvailableProfiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_RequestAvailableProfiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ParamsSpec.$.structSpec);
          const result = this.impl.refreshInstalledProfiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_RefreshInstalledProfiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ParamsSpec.$.structSpec);
          const result = this.impl.installProfileFromActivationCode(params.activation_code, params.confirmation_code, params.install_method);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_InstallProfileFromActivationCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.Euicc_GetEidQRCode_ParamsSpec.$.structSpec);
          const result = this.impl.getEidQRCode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.Euicc_GetEidQRCode_ResponseParamsSpec);
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

ash.cellular_setup.mojom.EuiccReceiver = ash.cellular_setup.mojom.EuiccReceiver;

ash.cellular_setup.mojom.EuiccPtr = ash.cellular_setup.mojom.EuiccRemote;
ash.cellular_setup.mojom.EuiccRequest = ash.cellular_setup.mojom.EuiccPendingReceiver;


// Interface: ESimProfile
mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, ash.cellular_setup.mojom.ESimProfilePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_InstallProfile_Params', [
      mojo.internal.StructField('confirmation_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ProfileInstallResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_UninstallProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_Params', [
      mojo.internal.StructField('nickname', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec, 'ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ESimOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getProperties() {
    return this.$.getProperties();
  }
  installProfile(confirmation_code) {
    return this.$.installProfile(confirmation_code);
  }
  uninstallProfile() {
    return this.$.uninstallProfile();
  }
  setProfileNickname(nickname) {
    return this.$.setProfileNickname(nickname);
  }
};

ash.cellular_setup.mojom.ESimProfileRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ESimProfile', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  installProfile(confirmation_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec,
      [confirmation_code],
      false);
  }

  uninstallProfile() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec,
      [],
      false);
  }

  setProfileNickname(nickname) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec,
      ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec,
      [nickname],
      false);
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

ash.cellular_setup.mojom.ESimProfileReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ESimProfile', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_GetProperties_ParamsSpec.$.structSpec);
          const result = this.impl.getProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_GetProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_InstallProfile_ParamsSpec.$.structSpec);
          const result = this.impl.installProfile(params.confirmation_code);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_InstallProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ParamsSpec.$.structSpec);
          const result = this.impl.uninstallProfile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_UninstallProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ParamsSpec.$.structSpec);
          const result = this.impl.setProfileNickname(params.nickname);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cellular_setup.mojom.ESimProfile_SetProfileNickname_ResponseParamsSpec);
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

ash.cellular_setup.mojom.ESimProfileReceiver = ash.cellular_setup.mojom.ESimProfileReceiver;

ash.cellular_setup.mojom.ESimProfilePtr = ash.cellular_setup.mojom.ESimProfileRemote;
ash.cellular_setup.mojom.ESimProfileRequest = ash.cellular_setup.mojom.ESimProfilePendingReceiver;

