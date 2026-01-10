// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/apps/mojom/app_parental_controls_handler.mojom
// Module: ash.settings.app_parental_controls.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_parental_controls = ash.settings.app_parental_controls || {};
ash.settings.app_parental_controls.mojom = ash.settings.app_parental_controls.mojom || {};

ash.settings.app_parental_controls.mojom.PinValidationResultSpec = { $: mojo.internal.Enum() };
ash.settings.app_parental_controls.mojom.AppSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler = {};
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.$interfaceName = 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler';
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsObserver = {};
ash.settings.app_parental_controls.mojom.AppParentalControlsObserver.$interfaceName = 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver';
ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec = { $: {} };
ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec = { $: {} };

// Enum: PinValidationResult
ash.settings.app_parental_controls.mojom.PinValidationResult = {
  kPinValidationSuccess: 0,
  kPinLengthError: 1,
  kPinNumericError: 2,
};

// Struct: App
mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppSpec, 'ash.settings.app_parental_controls.mojom.App', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_blocked', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AppParentalControlsHandler
mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_parental_controls.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_blocked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.app_parental_controls.mojom.AppParentalControlsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_Params', [
      mojo.internal.StructField('pin', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.settings.app_parental_controls.mojom.PinValidationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_Params', [
      mojo.internal.StructField('pin', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_Params', [
      mojo.internal.StructField('pin', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParams', [
      mojo.internal.StructField('is_completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ParamsSpec,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  updateApp(app_id, is_blocked) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec,
      null,
      [app_id, is_blocked],
      false);
  }

  addObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  onControlsDisabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  validatePin(pin) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec,
      [pin],
      false);
  }

  setUpPin(pin) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec,
      [pin],
      false);
  }

  verifyPin(pin) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec,
      [pin],
      false);
  }

  isSetupCompleted() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec,
      ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec,
      [],
      false);
  }

};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandler.getRemote = function() {
  let remote = new ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler',
    'context');
  return remote.$;
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApps (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnControlsDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnControlsDisabled (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ValidatePin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ValidatePin (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetUpPin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpPin (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: VerifyPin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VerifyPin (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: IsSetupCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSetupCompleted (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getApps');
          const result = this.impl.getApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_GetApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_UpdateApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateApp');
          const result = this.impl.updateApp(params.app_id, params.is_blocked);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_OnControlsDisabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onControlsDisabled');
          const result = this.impl.onControlsDisabled();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.validatePin');
          const result = this.impl.validatePin(params.pin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_ValidatePin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUpPin');
          const result = this.impl.setUpPin(params.pin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_SetUpPin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.verifyPin');
          const result = this.impl.verifyPin(params.pin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_VerifyPin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isSetupCompleted');
          const result = this.impl.isSetupCompleted();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_parental_controls.mojom.AppParentalControlsHandler_IsSetupCompleted_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerReceiver = ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerReceiver;

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPtr = ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRemote;
ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRequest = ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPendingReceiver;


// Interface: AppParentalControlsObserver
mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_Params', [
      mojo.internal.StructField('app', 0, 0, ash.settings.app_parental_controls.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec, 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_Params', [
      mojo.internal.StructField('app', 0, 0, ash.settings.app_parental_controls.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppInstalledOrUpdated(app) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec,
      null,
      [app],
      false);
  }

  onAppUninstalled(app) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec,
      null,
      [app],
      false);
  }

};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserver.getRemote = function() {
  let remote = new ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver',
    'context');
  return remote.$;
};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAppInstalledOrUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppInstalledOrUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAppUninstalled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppUninstalled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppInstalledOrUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppInstalledOrUpdated');
          const result = this.impl.onAppInstalledOrUpdated(params.app);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_parental_controls.mojom.AppParentalControlsObserver_OnAppUninstalled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppUninstalled');
          const result = this.impl.onAppUninstalled(params.app);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverReceiver = ash.settings.app_parental_controls.mojom.AppParentalControlsObserverReceiver;

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPtr = ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRemote;
ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRequest = ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPendingReceiver;

