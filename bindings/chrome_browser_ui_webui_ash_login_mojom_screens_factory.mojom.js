// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_factory.mojom
// Module: ash.screens_factory.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_factory = ash.screens_factory || {};
ash.screens_factory.mojom = ash.screens_factory.mojom || {};


// Interface: ScreensFactory
ash.screens_factory.mojom.ScreensFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_factory.mojom.ScreensFactory';
  }

  establishAiIntroScreenPipe(handler) {
    // Method: EstablishAiIntroScreenPipe
    return new Promise((resolve) => {
      // Call: EstablishAiIntroScreenPipe(handler)
      resolve({});
    });
  }

  establishAppDownloadingScreenPipe(handler) {
    // Method: EstablishAppDownloadingScreenPipe
    // Call: EstablishAppDownloadingScreenPipe(handler)
  }

  establishDrivePinningScreenPipe(handler) {
    // Method: EstablishDrivePinningScreenPipe
    return new Promise((resolve) => {
      // Call: EstablishDrivePinningScreenPipe(handler)
      resolve({});
    });
  }

  establishFjordStationSetupScreenPipe(handler) {
    // Method: EstablishFjordStationSetupScreenPipe
    // Call: EstablishFjordStationSetupScreenPipe(handler)
  }

  establishGaiaInfoScreenPipe(handler) {
    // Method: EstablishGaiaInfoScreenPipe
    return new Promise((resolve) => {
      // Call: EstablishGaiaInfoScreenPipe(handler)
      resolve({});
    });
  }

  establishGestureNavigationScreenPipe(handler) {
    // Method: EstablishGestureNavigationScreenPipe
    // Call: EstablishGestureNavigationScreenPipe(handler)
  }

  establishGeminiIntroScreenPipe(handler) {
    // Method: EstablishGeminiIntroScreenPipe
    // Call: EstablishGeminiIntroScreenPipe(handler)
  }

  establishConsumerUpdateScreenPipe(handler) {
    // Method: EstablishConsumerUpdateScreenPipe
    return new Promise((resolve) => {
      // Call: EstablishConsumerUpdateScreenPipe(handler)
      resolve({});
    });
  }

  establishPackagedLicenseScreenPipe(handler) {
    // Method: EstablishPackagedLicenseScreenPipe
    // Call: EstablishPackagedLicenseScreenPipe(handler)
  }

  establishArcVmDataMigrationScreenPipe(handler) {
    // Method: EstablishArcVmDataMigrationScreenPipe
    return new Promise((resolve) => {
      // Call: EstablishArcVmDataMigrationScreenPipe(handler)
      resolve({});
    });
  }

  establishEncryptionMigrationScreenPipe(handler) {
    // Method: EstablishEncryptionMigrationScreenPipe
    return new Promise((resolve) => {
      // Call: EstablishEncryptionMigrationScreenPipe(handler)
      resolve({});
    });
  }

  establishLocalDataLossWarningScreenPipe(handler) {
    // Method: EstablishLocalDataLossWarningScreenPipe
    // Call: EstablishLocalDataLossWarningScreenPipe(handler)
  }

};

ash.screens_factory.mojom.ScreensFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
