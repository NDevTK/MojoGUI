// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/language_packs/public/mojom/language_packs.mojom
// Module: ash.language.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.language = ash.language || {};
ash.language.language.mojom = ash.language.language.mojom || {};


// Enum: FeatureId
ash.language.language.mojom.mojom.FeatureId = {
  UNSUPPORTED_UNKNOWN: 0,
  HANDWRITING_RECOGNITION: 1,
};
ash.language.language.mojom.mojom.FeatureIdSpec = { $: mojo.internal.Enum() };

// Enum: PackState
ash.language.language.mojom.mojom.PackState = {
  ERROR: 0,
  NOT_INSTALLED: 1,
  INSTALLING: 2,
  INSTALLED: 3,
  Default: 4,
};
ash.language.language.mojom.mojom.PackStateSpec = { $: mojo.internal.Enum() };

// Enum: ErrorCode
ash.language.language.mojom.mojom.ErrorCode = {
  kNone: 0,
  kOther: 1,
  kWrongId: 2,
  kNeedReboot: 3,
  kAllocation: 4,
};
ash.language.language.mojom.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };

// Struct: LanguagePackInfo
ash.language.language.mojom.mojom.LanguagePackInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePackInfo',
      packedSize: 40,
      fields: [
        { name: 'pack_state', packedOffset: 16, packedBitOffset: 0, type: ash.language.mojom.PackStateSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 20, packedBitOffset: 0, type: ash.language.mojom.ErrorCodeSpec, nullable: false, minVersion: 2 },
        { name: 'feature_id', packedOffset: 24, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 3 },
        { name: 'locale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 2, packedSize: 32}, {version: 3, packedSize: 40}]
    }
  }
};

// Struct: BasePackInfo
ash.language.language.mojom.mojom.BasePackInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.BasePackInfo',
      packedSize: 24,
      fields: [
        { name: 'pack_state', packedOffset: 8, packedBitOffset: 0, type: ash.language.mojom.PackStateSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 12, packedBitOffset: 0, type: ash.language.mojom.ErrorCodeSpec, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 2, packedSize: 24}]
    }
  }
};

// Interface: LanguagePacksObserver
ash.language.language.mojom.mojom.LanguagePacksObserver = {};

ash.language.language.mojom.mojom.LanguagePacksObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.language.language.mojom.mojom.LanguagePacksObserverRemote = class {
  static get $interfaceName() {
    return 'ash.language.mojom.LanguagePacksObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.language.language.mojom.mojom.LanguagePacksObserverPendingReceiver,
      handle);
    this.$ = new ash.language.language.mojom.mojom.LanguagePacksObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.language.language.mojom.mojom.LanguagePacksObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPackStateChanged(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.language.language.mojom.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec,
      null,
      [info]);
  }

};

ash.language.language.mojom.mojom.LanguagePacksObserver.getRemote = function() {
  let remote = new ash.language.language.mojom.mojom.LanguagePacksObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.language.mojom.LanguagePacksObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnPackStateChanged
ash.language.language.mojom.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec = {
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
ash.language.language.mojom.mojom.LanguagePacksObserverPtr = ash.language.language.mojom.mojom.LanguagePacksObserverRemote;
ash.language.language.mojom.mojom.LanguagePacksObserverRequest = ash.language.language.mojom.mojom.LanguagePacksObserverPendingReceiver;


// Interface: LanguagePacks
ash.language.language.mojom.mojom.LanguagePacks = {};

ash.language.language.mojom.mojom.LanguagePacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.language.language.mojom.mojom.LanguagePacksRemote = class {
  static get $interfaceName() {
    return 'ash.language.mojom.LanguagePacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.language.language.mojom.mojom.LanguagePacksPendingReceiver,
      handle);
    this.$ = new ash.language.language.mojom.mojom.LanguagePacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.language.language.mojom.mojom.LanguagePacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPackInfo(feature_id, language) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.language.language.mojom.mojom.LanguagePacks_GetPackInfo_ParamsSpec,
      ash.language.language.mojom.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec,
      [feature_id, language]);
  }

  installPack(feature_id, language) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.language.language.mojom.mojom.LanguagePacks_InstallPack_ParamsSpec,
      ash.language.language.mojom.mojom.LanguagePacks_InstallPack_ResponseParamsSpec,
      [feature_id, language]);
  }

  installBasePack(feature_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.language.language.mojom.mojom.LanguagePacks_InstallBasePack_ParamsSpec,
      ash.language.language.mojom.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec,
      [feature_id]);
  }

  uninstallPack(feature_id, language) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.language.language.mojom.mojom.LanguagePacks_UninstallPack_ParamsSpec,
      null,
      [feature_id, language]);
  }

  addObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.language.language.mojom.mojom.LanguagePacks_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.language.language.mojom.mojom.LanguagePacks.getRemote = function() {
  let remote = new ash.language.language.mojom.mojom.LanguagePacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.language.mojom.LanguagePacks',
    'context');
  return remote.$;
};

// ParamsSpec for GetPackInfo
ash.language.language.mojom.mojom.LanguagePacks_GetPackInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.GetPackInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_id', packedOffset: 8, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.language.language.mojom.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.GetPackInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.LanguagePackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallPack
ash.language.language.mojom.mojom.LanguagePacks_InstallPack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.InstallPack_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_id', packedOffset: 8, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.language.language.mojom.mojom.LanguagePacks_InstallPack_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.InstallPack_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.LanguagePackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallBasePack
ash.language.language.mojom.mojom.LanguagePacks_InstallBasePack_ParamsSpec = {
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

ash.language.language.mojom.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.InstallBasePack_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.language.mojom.BasePackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UninstallPack
ash.language.language.mojom.mojom.LanguagePacks_UninstallPack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.language.mojom.LanguagePacks.UninstallPack_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_id', packedOffset: 8, packedBitOffset: 0, type: ash.language.mojom.FeatureIdSpec, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddObserver
ash.language.language.mojom.mojom.LanguagePacks_AddObserver_ParamsSpec = {
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
ash.language.language.mojom.mojom.LanguagePacksPtr = ash.language.language.mojom.mojom.LanguagePacksRemote;
ash.language.language.mojom.mojom.LanguagePacksRequest = ash.language.language.mojom.mojom.LanguagePacksPendingReceiver;

