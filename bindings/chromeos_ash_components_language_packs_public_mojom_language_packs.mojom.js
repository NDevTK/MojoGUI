// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/language_packs/public/mojom/language_packs.mojom
// Module: ash.language.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.language = ash.language || {};
ash.language.mojom = ash.language.mojom || {};

ash.language.mojom.FeatureIdSpec = { $: mojo.internal.Enum() };
ash.language.mojom.PackStateSpec = { $: mojo.internal.Enum() };
ash.language.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };
ash.language.mojom.LanguagePackInfoSpec = { $: {} };
ash.language.mojom.BasePackInfoSpec = { $: {} };
ash.language.mojom.LanguagePacksObserver = {};
ash.language.mojom.LanguagePacksObserver.$interfaceName = 'ash.language.mojom.LanguagePacksObserver';
ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks = {};
ash.language.mojom.LanguagePacks.$interfaceName = 'ash.language.mojom.LanguagePacks';
ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec = { $: {} };
ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec = { $: {} };

// Enum: FeatureId
ash.language.mojom.FeatureId = {
  UNSUPPORTED_UNKNOWN: 0,
  HANDWRITING_RECOGNITION: 1,
  MinVersion: 1,
};

// Enum: PackState
ash.language.mojom.PackState = {
  ERROR: 0,
  NOT_INSTALLED: 1,
  INSTALLING: 2,
  INSTALLED: 3,
  MinVersion: 3,
  UNKNOWN: 4,
};

// Enum: ErrorCode
ash.language.mojom.ErrorCode = {
  kUnknown: 0,
  kNone: 1,
  kOther: 2,
  kWrongId: 3,
  kNeedReboot: 4,
  kAllocation: 5,
};

// Struct: LanguagePackInfo
mojo.internal.Struct(
    ash.language.mojom.LanguagePackInfoSpec, 'ash.language.mojom.LanguagePackInfo', [
      mojo.internal.StructField('pack_state', 0, 0, ash.language.mojom.PackStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, ash.language.mojom.ErrorCodeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('feature_id', 24, 0, ash.language.mojom.FeatureIdSpec.$, null, false, 3, undefined),
      mojo.internal.StructField('locale', 32, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 24], [2, 32], [3, 48]]);

// Struct: BasePackInfo
mojo.internal.Struct(
    ash.language.mojom.BasePackInfoSpec, 'ash.language.mojom.BasePackInfo', [
      mojo.internal.StructField('pack_state', 0, 0, ash.language.mojom.PackStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, ash.language.mojom.ErrorCodeSpec.$, null, false, 2, undefined),
    ],
    [[0, 24], [2, 32]]);

// Interface: LanguagePacksObserver
mojo.internal.Struct(
    ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec, 'ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_Params', [
      mojo.internal.StructField('info', 0, 0, ash.language.mojom.LanguagePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onPackStateChanged(info) {
    return this.$.onPackStateChanged(info);
  }
};

ash.language.mojom.LanguagePacksObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LanguagePacksObserver', [
      { explicit: 0 },
    ]);
  }

  onPackStateChanged(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec,
      null,
      [info],
      false);
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

ash.language.mojom.LanguagePacksObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LanguagePacksObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onPackStateChanged(params.info);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.language.mojom.LanguagePacksObserverReceiver = ash.language.mojom.LanguagePacksObserverReceiver;

ash.language.mojom.LanguagePacksObserverPtr = ash.language.mojom.LanguagePacksObserverRemote;
ash.language.mojom.LanguagePacksObserverRequest = ash.language.mojom.LanguagePacksObserverPendingReceiver;


// Interface: LanguagePacks
mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec, 'ash.language.mojom.LanguagePacks_GetPackInfo_Params', [
      mojo.internal.StructField('feature_id', 0, 0, ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, ash.language.mojom.LanguagePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec, 'ash.language.mojom.LanguagePacks_InstallPack_Params', [
      mojo.internal.StructField('feature_id', 0, 0, ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_InstallPack_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, ash.language.mojom.LanguagePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec, 'ash.language.mojom.LanguagePacks_InstallBasePack_Params', [
      mojo.internal.StructField('feature_id', 0, 0, ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, ash.language.mojom.BasePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec, 'ash.language.mojom.LanguagePacks_UninstallPack_Params', [
      mojo.internal.StructField('feature_id', 0, 0, ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_UninstallPack_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec, 'ash.language.mojom.LanguagePacks_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getPackInfo(feature_id, language) {
    return this.$.getPackInfo(feature_id, language);
  }
  installPack(feature_id, language) {
    return this.$.installPack(feature_id, language);
  }
  installBasePack(feature_id) {
    return this.$.installBasePack(feature_id);
  }
  uninstallPack(feature_id, language) {
    return this.$.uninstallPack(feature_id, language);
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
};

ash.language.mojom.LanguagePacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LanguagePacks', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  getPackInfo(feature_id, language) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec,
      ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec,
      [feature_id, language],
      false);
  }

  installPack(feature_id, language) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec,
      ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec,
      [feature_id, language],
      false);
  }

  installBasePack(feature_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec,
      ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec,
      [feature_id],
      false);
  }

  uninstallPack(feature_id, language) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec,
      ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec,
      [feature_id, language],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
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

ash.language.mojom.LanguagePacksReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LanguagePacks', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getPackInfo(params.feature_id, params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec.$.structSpec);
          const result = this.impl.installPack(params.feature_id, params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec.$.structSpec);
          const result = this.impl.installBasePack(params.feature_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec.$.structSpec);
          const result = this.impl.uninstallPack(params.feature_id, params.language);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.language.mojom.LanguagePacksReceiver = ash.language.mojom.LanguagePacksReceiver;

ash.language.mojom.LanguagePacksPtr = ash.language.mojom.LanguagePacksRemote;
ash.language.mojom.LanguagePacksRequest = ash.language.mojom.LanguagePacksPendingReceiver;

