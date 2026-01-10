// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_oobe.mojom
// Module: ash.screens_oobe.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_oobe = ash.screens_oobe || {};
ash.screens_oobe.mojom = ash.screens_oobe.mojom || {};

ash.screens_oobe.mojom.ConsumerUpdateStepSpec = { $: mojo.internal.Enum() };
ash.screens_oobe.mojom.ConsumerUpdatePageHandler = {};
ash.screens_oobe.mojom.ConsumerUpdatePageHandler.$interfaceName = 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler';
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePage = {};
ash.screens_oobe.mojom.ConsumerUpdatePage.$interfaceName = 'ash.screens_oobe.mojom.ConsumerUpdatePage';
ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.PackagedLicensePageHandler = {};
ash.screens_oobe.mojom.PackagedLicensePageHandler.$interfaceName = 'ash.screens_oobe.mojom.PackagedLicensePageHandler';
ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec = { $: {} };
ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec = { $: {} };

// Enum: ConsumerUpdateStep
ash.screens_oobe.mojom.ConsumerUpdateStep = {
  kCheckingForUpdate: 0,
  kUpdateInProgress: 1,
  kRestartInProgress: 2,
  kManualReboot: 3,
  kCellularPermission: 4,
};

// Interface: ConsumerUpdatePageHandler
mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeclineCellularClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onAcceptCellularClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onSkipClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onBackClicked() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_oobe.mojom.ConsumerUpdatePageHandler.getRemote = function() {
  let remote = new ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_oobe.mojom.ConsumerUpdatePageHandler',
    'context');
  return remote.$;
};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: OnDeclineCellularClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeclineCellularClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAcceptCellularClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAcceptCellularClicked (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSkipClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSkipClicked (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnBackClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackClicked (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onDeclineCellularClicked');
          const result = this.impl.onDeclineCellularClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAcceptCellularClicked');
          const result = this.impl.onAcceptCellularClicked();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onSkipClicked');
          const result = this.impl.onSkipClicked();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBackClicked');
          const result = this.impl.onBackClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerReceiver = ash.screens_oobe.mojom.ConsumerUpdatePageHandlerReceiver;

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPtr = ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote;
ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRequest = ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPendingReceiver;


// Interface: ConsumerUpdatePage
mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_Params', [
      mojo.internal.StructField('step', 0, 0, ash.screens_oobe.mojom.ConsumerUpdateStepSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('percent_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time_left_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec, 'ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_oobe.mojom.ConsumerUpdatePagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_oobe.mojom.ConsumerUpdatePage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_oobe.mojom.ConsumerUpdatePagePendingReceiver,
      handle);
    this.$ = new ash.screens_oobe.mojom.ConsumerUpdatePageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showSkipButton() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec,
      null,
      [],
      false);
  }

  setLowBatteryWarningVisible(visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  setScreenStep(step) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec,
      null,
      [step],
      false);
  }

  setUpdateStatusMessage(percent, percent_message, time_left_message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec,
      null,
      [percent, percent_message, time_left_message],
      false);
  }

  setAutoTransition(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

ash.screens_oobe.mojom.ConsumerUpdatePage.getRemote = function() {
  let remote = new ash.screens_oobe.mojom.ConsumerUpdatePageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_oobe.mojom.ConsumerUpdatePage',
    'context');
  return remote.$;
};

ash.screens_oobe.mojom.ConsumerUpdatePageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: ShowSkipButton
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSkipButton (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetLowBatteryWarningVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLowBatteryWarningVisible (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetScreenStep
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenStep (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetUpdateStatusMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpdateStatusMessage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetAutoTransition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoTransition (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showSkipButton');
          const result = this.impl.showSkipButton();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setLowBatteryWarningVisible');
          const result = this.impl.setLowBatteryWarningVisible(params.visible);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setScreenStep');
          const result = this.impl.setScreenStep(params.step);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setUpdateStatusMessage');
          const result = this.impl.setUpdateStatusMessage(params.percent, params.percent_message, params.time_left_message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setAutoTransition');
          const result = this.impl.setAutoTransition(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageReceiver = ash.screens_oobe.mojom.ConsumerUpdatePageReceiver;

ash.screens_oobe.mojom.ConsumerUpdatePagePtr = ash.screens_oobe.mojom.ConsumerUpdatePageRemote;
ash.screens_oobe.mojom.ConsumerUpdatePageRequest = ash.screens_oobe.mojom.ConsumerUpdatePagePendingReceiver;


// Interface: PackagedLicensePageHandler
mojo.internal.Struct(
    ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec, 'ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec, 'ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_oobe.mojom.PackagedLicensePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_oobe.mojom.PackagedLicensePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_oobe.mojom.PackagedLicensePageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_oobe.mojom.PackagedLicensePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDontEnrollClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onEnrollClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_oobe.mojom.PackagedLicensePageHandler.getRemote = function() {
  let remote = new ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_oobe.mojom.PackagedLicensePageHandler',
    'context');
  return remote.$;
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerReceiver = class {
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
        
        // Try Method 0: OnDontEnrollClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDontEnrollClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnEnrollClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnrollClicked (1)');
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
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onDontEnrollClicked');
          const result = this.impl.onDontEnrollClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onEnrollClicked');
          const result = this.impl.onEnrollClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerReceiver = ash.screens_oobe.mojom.PackagedLicensePageHandlerReceiver;

ash.screens_oobe.mojom.PackagedLicensePageHandlerPtr = ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote;
ash.screens_oobe.mojom.PackagedLicensePageHandlerRequest = ash.screens_oobe.mojom.PackagedLicensePageHandlerPendingReceiver;

