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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EstablishAiIntroScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishAiIntroScreenPipe (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EstablishAppDownloadingScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishAppDownloadingScreenPipe (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EstablishDrivePinningScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishDrivePinningScreenPipe (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: EstablishFjordStationSetupScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishFjordStationSetupScreenPipe (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: EstablishGaiaInfoScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishGaiaInfoScreenPipe (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EstablishGestureNavigationScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishGestureNavigationScreenPipe (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: EstablishGeminiIntroScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishGeminiIntroScreenPipe (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EstablishConsumerUpdateScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishConsumerUpdateScreenPipe (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: EstablishPackagedLicenseScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishPackagedLicenseScreenPipe (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: EstablishArcVmDataMigrationScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishArcVmDataMigrationScreenPipe (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: EstablishEncryptionMigrationScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishEncryptionMigrationScreenPipe (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: EstablishLocalDataLossWarningScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishLocalDataLossWarningScreenPipe (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishAiIntroScreenPipe');
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
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishAppDownloadingScreenPipe');
          const result = this.impl.establishAppDownloadingScreenPipe(params.handler);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishDrivePinningScreenPipe');
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
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishFjordStationSetupScreenPipe');
          const result = this.impl.establishFjordStationSetupScreenPipe(params.handler);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishGaiaInfoScreenPipe');
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
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishGestureNavigationScreenPipe');
          const result = this.impl.establishGestureNavigationScreenPipe(params.handler);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishGeminiIntroScreenPipe');
          const result = this.impl.establishGeminiIntroScreenPipe(params.handler);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishConsumerUpdateScreenPipe');
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
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishPackagedLicenseScreenPipe');
          const result = this.impl.establishPackagedLicenseScreenPipe(params.handler);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishArcVmDataMigrationScreenPipe');
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
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishEncryptionMigrationScreenPipe');
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
          const params = decoder.decodeStructInline(ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.establishLocalDataLossWarningScreenPipe');
          const result = this.impl.establishLocalDataLossWarningScreenPipe(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_factory.mojom.ScreensFactoryReceiver = ash.screens_factory.mojom.ScreensFactoryReceiver;

ash.screens_factory.mojom.ScreensFactoryPtr = ash.screens_factory.mojom.ScreensFactoryRemote;
ash.screens_factory.mojom.ScreensFactoryRequest = ash.screens_factory.mojom.ScreensFactoryPendingReceiver;

