// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/language_packs/public/mojom/language_packs.mojom
// Module: ash.language.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.language = ash.language || {};
ash.language.mojom = ash.language.mojom || {};


// Enum: FeatureId
ash.language.mojom.FeatureId = {
  UNSUPPORTED_UNKNOWN: 0,
  HANDWRITING_RECOGNITION: 1,
};
ash.language.mojom.FeatureIdSpec = { $: mojo.internal.Enum() };

// Enum: PackState
ash.language.mojom.PackState = {
  ERROR: 0,
  NOT_INSTALLED: 1,
  INSTALLING: 2,
  INSTALLED: 3,
  Default: 4,
};
ash.language.mojom.PackStateSpec = { $: mojo.internal.Enum() };

// Enum: ErrorCode
ash.language.mojom.ErrorCode = {
  kNone: 0,
  kOther: 1,
  kWrongId: 2,
  kNeedReboot: 3,
  kAllocation: 4,
};
ash.language.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };

// Struct: LanguagePackInfo
ash.language.mojom.LanguagePackInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePackInfo',
      packedSize: 40,
      fields: [
        { name: 'pack_state', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.PackStateSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 4, packedBitOffset: 0, type: ash.language.mojom.ErrorCodeSpec, nullable: false, minVersion: 2 },
        { name: 'feature_id', packedOffset: 16, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 3 },
        { name: 'locale', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 2, packedSize: 24}, {version: 3, packedSize: 40}]
    }
  }
};

// Struct: BasePackInfo
ash.language.mojom.BasePackInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.BasePackInfo',
      packedSize: 24,
      fields: [
        { name: 'pack_state', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.PackStateSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 4, packedBitOffset: 0, type: ash.language.mojom.ErrorCodeSpec, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 2, packedSize: 24}]
    }
  }
};

// Interface: LanguagePacksObserver
ash.language.mojom.LanguagePacksObserver = {};

ash.language.mojom.LanguagePacksObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.language.mojom.LanguagePacksObserverRemote = class {
  static get $interfaceName() {
    return 'ash.language.mojom.LanguagePacksObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.language.mojom.LanguagePacksObserverPendingReceiver,
      handle);
    this.$ = new ash.language.mojom.LanguagePacksObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.language.mojom.LanguagePacksObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPackStateChanged(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec,
      null,
      [info]);
  }

};

ash.language.mojom.LanguagePacksObserver.getRemote = function() {
  let remote = new ash.language.mojom.LanguagePacksObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.language.mojom.LanguagePacksObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnPackStateChanged
ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacksObserver.OnPackStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.LanguagePackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.language.mojom.LanguagePacksObserverPtr = ash.language.mojom.LanguagePacksObserverRemote;
ash.language.mojom.LanguagePacksObserverRequest = ash.language.mojom.LanguagePacksObserverPendingReceiver;


// Interface: LanguagePacks
ash.language.mojom.LanguagePacks = {};

ash.language.mojom.LanguagePacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.language.mojom.LanguagePacksRemote = class {
  static get $interfaceName() {
    return 'ash.language.mojom.LanguagePacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.language.mojom.LanguagePacksPendingReceiver,
      handle);
    this.$ = new ash.language.mojom.LanguagePacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.language.mojom.LanguagePacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPackInfo(feature_id, language) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec,
      ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec,
      [feature_id, language]);
  }

  installPack(feature_id, language) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec,
      ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec,
      [feature_id, language]);
  }

  installBasePack(feature_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec,
      ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec,
      [feature_id]);
  }

  uninstallPack(feature_id, language) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec,
      null,
      [feature_id, language]);
  }

  addObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.language.mojom.LanguagePacks.getRemote = function() {
  let remote = new ash.language.mojom.LanguagePacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.language.mojom.LanguagePacks',
    'context');
  return remote.$;
};

// ParamsSpec for GetPackInfo
ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.GetPackInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_id', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.LanguagePackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallPack
ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.InstallPack_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_id', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.LanguagePackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallBasePack
ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.InstallBasePack_Params',
      packedSize: 16,
      fields: [
        { name: 'feature_id', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.BasePackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UninstallPack
ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.UninstallPack_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_id', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddObserver
ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.language.mojom.LanguagePacksPtr = ash.language.mojom.LanguagePacksRemote;
ash.language.mojom.LanguagePacksRequest = ash.language.mojom.LanguagePacksPendingReceiver;

