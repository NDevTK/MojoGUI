// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_factory.mojom
// Module: ash.screens_factory.mojom

'use strict';

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
};

ash.screens_factory.mojom.ScreensFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  establishAiIntroScreenPipe(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishAppDownloadingScreenPipe(handler) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishDrivePinningScreenPipe(handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishFjordStationSetupScreenPipe(handler) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishGaiaInfoScreenPipe(handler) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishGestureNavigationScreenPipe(handler) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishGeminiIntroScreenPipe(handler) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishConsumerUpdateScreenPipe(handler) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishPackagedLicenseScreenPipe(handler) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec,
      null,
      [handler],
      false);
  }

  establishArcVmDataMigrationScreenPipe(handler) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishEncryptionMigrationScreenPipe(handler) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec,
      [handler],
      false);
  }

  establishLocalDataLossWarningScreenPipe(handler) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishAiIntroScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishAppDownloadingScreenPipe(params.handler);
          break;
        }
        case 2: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishDrivePinningScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishFjordStationSetupScreenPipe(params.handler);
          break;
        }
        case 4: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishGaiaInfoScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishGestureNavigationScreenPipe(params.handler);
          break;
        }
        case 6: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishGeminiIntroScreenPipe(params.handler);
          break;
        }
        case 7: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishConsumerUpdateScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 8: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishPackagedLicenseScreenPipe(params.handler);
          break;
        }
        case 9: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishArcVmDataMigrationScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 10: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishEncryptionMigrationScreenPipe(params.handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 11: {
          const params = ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishLocalDataLossWarningScreenPipe(params.handler);
          break;
        }
      }
    });
  }
};

ash.screens_factory.mojom.ScreensFactoryReceiver = ash.screens_factory.mojom.ScreensFactoryReceiver;

ash.screens_factory.mojom.ScreensFactoryPtr = ash.screens_factory.mojom.ScreensFactoryRemote;
ash.screens_factory.mojom.ScreensFactoryRequest = ash.screens_factory.mojom.ScreensFactoryPendingReceiver;

