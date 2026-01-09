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

// Enum: PackState
ash.language.mojom.PackState = {
  ERROR: 0,
  NOT_INSTALLED: 1,
  INSTALLING: 2,
  INSTALLED: 3,
  Default: 4,
};

// Enum: ErrorCode
ash.language.mojom.ErrorCode = {
  kNone: 0,
  kOther: 1,
  kWrongId: 2,
  kNeedReboot: 3,
  kAllocation: 4,
};

// Interface: LanguagePacksObserver
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

// Legacy compatibility
ash.language.mojom.LanguagePacksObserverPtr = ash.language.mojom.LanguagePacksObserverRemote;
ash.language.mojom.LanguagePacksObserverRequest = ash.language.mojom.LanguagePacksObserverPendingReceiver;


// Interface: LanguagePacks
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

// Legacy compatibility
ash.language.mojom.LanguagePacksPtr = ash.language.mojom.LanguagePacksRemote;
ash.language.mojom.LanguagePacksRequest = ash.language.mojom.LanguagePacksPendingReceiver;

