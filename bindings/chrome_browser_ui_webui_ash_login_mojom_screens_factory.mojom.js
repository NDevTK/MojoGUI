// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_factory.mojom
// Module: ash.screens_factory.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.screens_factory = ash.screens_factory || {};
ash.screens_factory.mojom = ash.screens_factory.mojom || {};

ash.screens_factory.mojom.ScreensFactory = {};
ash.screens_factory.mojom.ScreensFactory.$interfaceName = 'ash.screens_factory.mojom.ScreensFactory';
ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec = { $: {} };
ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec = { $: {} };

// Interface: ScreensFactory
mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.AiIntroPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParams', [
      mojo.internal.StructField('pending', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.AiIntroPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.AppDownloadingPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.DrivePinningPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParams', [
      mojo.internal.StructField('pending', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.DrivePinningPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.FjordStationSetupPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.GaiaInfoPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParams', [
      mojo.internal.StructField('pending', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.GaiaInfoPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.GestureNavigationPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_common.mojom.GeminiIntroPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParams', [
      mojo.internal.StructField('pending', 0, 0, mojo.internal.InterfaceRequest(ash.screens_oobe.mojom.ConsumerUpdatePageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParams', [
      mojo.internal.StructField('pending', 0, 0, mojo.internal.InterfaceRequest(ash.screens_login.mojom.ArcVmDataMigrationPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParams', [
      mojo.internal.StructField('pending', 0, 0, mojo.internal.InterfaceRequest(ash.screens_login.mojom.EncryptionMigrationPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_factory.mojom.ScreensFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_factory.mojom.ScreensFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.screens_factory.mojom.ScreensFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_factory.mojom.ScreensFactoryPendingReceiver,
      handle);
    this.$ = new ash.screens_factory.mojom.ScreensFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  establishAiIntroScreenPipe(handler) {
    return this.$.establishAiIntroScreenPipe(handler);
  }
  establishAppDownloadingScreenPipe(handler) {
    return this.$.establishAppDownloadingScreenPipe(handler);
  }
  establishDrivePinningScreenPipe(handler) {
    return this.$.establishDrivePinningScreenPipe(handler);
  }
  establishFjordStationSetupScreenPipe(handler) {
    return this.$.establishFjordStationSetupScreenPipe(handler);
  }
  establishGaiaInfoScreenPipe(handler) {
    return this.$.establishGaiaInfoScreenPipe(handler);
  }
  establishGestureNavigationScreenPipe(handler) {
    return this.$.establishGestureNavigationScreenPipe(handler);
  }
  establishGeminiIntroScreenPipe(handler) {
    return this.$.establishGeminiIntroScreenPipe(handler);
  }
  establishConsumerUpdateScreenPipe(handler) {
    return this.$.establishConsumerUpdateScreenPipe(handler);
  }
  establishPackagedLicenseScreenPipe(handler) {
    return this.$.establishPackagedLicenseScreenPipe(handler);
  }
  establishArcVmDataMigrationScreenPipe(handler) {
    return this.$.establishArcVmDataMigrationScreenPipe(handler);
  }
  establishEncryptionMigrationScreenPipe(handler) {
    return this.$.establishEncryptionMigrationScreenPipe(handler);
  }
  establishLocalDataLossWarningScreenPipe(handler) {
    return this.$.establishLocalDataLossWarningScreenPipe(handler);
  }
};

ash.screens_factory.mojom.ScreensFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreensFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  establishAiIntroScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishAppDownloadingScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishDrivePinningScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishFjordStationSetupScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishGaiaInfoScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishGestureNavigationScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishGeminiIntroScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishConsumerUpdateScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishPackagedLicenseScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishArcVmDataMigrationScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishEncryptionMigrationScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishLocalDataLossWarningScreenPipe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.screens_factory.mojom.ScreensFactory.getRemote = function() {
  let remote = new ash.screens_factory.mojom.ScreensFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_factory.mojom.ScreensFactory',
    'context');
  return remote.$;
};

ash.screens_factory.mojom.ScreensFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScreensFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishAiIntroScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishAppDownloadingScreenPipe(params.handler);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishDrivePinningScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishFjordStationSetupScreenPipe(params.handler);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishGaiaInfoScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishGestureNavigationScreenPipe(params.handler);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishGeminiIntroScreenPipe(params.handler);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishConsumerUpdateScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishPackagedLicenseScreenPipe(params.handler);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishArcVmDataMigrationScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishEncryptionMigrationScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec.$.structSpec);
          const result = this.impl.establishLocalDataLossWarningScreenPipe(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.screens_factory.mojom.ScreensFactoryReceiver = ash.screens_factory.mojom.ScreensFactoryReceiver;

ash.screens_factory.mojom.ScreensFactoryPtr = ash.screens_factory.mojom.ScreensFactoryRemote;
ash.screens_factory.mojom.ScreensFactoryRequest = ash.screens_factory.mojom.ScreensFactoryPendingReceiver;

