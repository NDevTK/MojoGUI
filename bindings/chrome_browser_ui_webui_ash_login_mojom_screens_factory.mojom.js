// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_factory.mojom
// Module: ash.screens_factory.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_factory = ash.screens_factory || {};
ash.screens_factory.mojom = ash.screens_factory.mojom || {};


// Interface: ScreensFactory
ash.screens_factory.mojom.ScreensFactory = {};

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
      [handler]);
  }

  establishAppDownloadingScreenPipe(handler) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec,
      null,
      [handler]);
  }

  establishDrivePinningScreenPipe(handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec,
      [handler]);
  }

  establishFjordStationSetupScreenPipe(handler) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec,
      null,
      [handler]);
  }

  establishGaiaInfoScreenPipe(handler) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec,
      [handler]);
  }

  establishGestureNavigationScreenPipe(handler) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec,
      null,
      [handler]);
  }

  establishGeminiIntroScreenPipe(handler) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec,
      null,
      [handler]);
  }

  establishConsumerUpdateScreenPipe(handler) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec,
      [handler]);
  }

  establishPackagedLicenseScreenPipe(handler) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec,
      null,
      [handler]);
  }

  establishArcVmDataMigrationScreenPipe(handler) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec,
      [handler]);
  }

  establishEncryptionMigrationScreenPipe(handler) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec,
      ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec,
      [handler]);
  }

  establishLocalDataLossWarningScreenPipe(handler) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec,
      null,
      [handler]);
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

// ParamsSpec for EstablishAiIntroScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishAiIntroScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishAiIntroScreenPipe_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishAppDownloadingScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishAppDownloadingScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishDrivePinningScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishDrivePinningScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishDrivePinningScreenPipe_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishFjordStationSetupScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishFjordStationSetupScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishGaiaInfoScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishGaiaInfoScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishGaiaInfoScreenPipe_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishGestureNavigationScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishGestureNavigationScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishGeminiIntroScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishGeminiIntroScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishConsumerUpdateScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishConsumerUpdateScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishConsumerUpdateScreenPipe_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishPackagedLicenseScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishPackagedLicenseScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishArcVmDataMigrationScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishArcVmDataMigrationScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishArcVmDataMigrationScreenPipe_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishEncryptionMigrationScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishEncryptionMigrationScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishEncryptionMigrationScreenPipe_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstablishLocalDataLossWarningScreenPipe
ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_factory.mojom.ScreensFactory.EstablishLocalDataLossWarningScreenPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.screens_factory.mojom.ScreensFactoryPtr = ash.screens_factory.mojom.ScreensFactoryRemote;
ash.screens_factory.mojom.ScreensFactoryRequest = ash.screens_factory.mojom.ScreensFactoryPendingReceiver;

