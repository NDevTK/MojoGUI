// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_oobe.mojom
// Module: ash.screens_oobe.mojom

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
  onDeclineCellularClicked() {
    return this.$.onDeclineCellularClicked();
  }
  onAcceptCellularClicked() {
    return this.$.onAcceptCellularClicked();
  }
  onSkipClicked() {
    return this.$.onSkipClicked();
  }
  onBackClicked() {
    return this.$.onBackClicked();
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConsumerUpdatePageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeclineCellularClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onAcceptCellularClicked() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onSkipClicked() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onBackClicked() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ConsumerUpdatePageHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onDeclineCellularClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onAcceptCellularClicked();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onSkipClicked();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onBackClicked();
          break;
        }
      }
      } catch (err) {}
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
  showSkipButton() {
    return this.$.showSkipButton();
  }
  setLowBatteryWarningVisible(visible) {
    return this.$.setLowBatteryWarningVisible(visible);
  }
  setScreenStep(step) {
    return this.$.setScreenStep(step);
  }
  setUpdateStatusMessage(percent, percent_message, time_left_message) {
    return this.$.setUpdateStatusMessage(percent, percent_message, time_left_message);
  }
  setAutoTransition(enabled) {
    return this.$.setAutoTransition(enabled);
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConsumerUpdatePage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  showSkipButton() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec,
      null,
      [],
      false);
  }

  setLowBatteryWarningVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  setScreenStep(step) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec,
      null,
      [step],
      false);
  }

  setUpdateStatusMessage(percent, percent_message, time_left_message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec,
      null,
      [percent, percent_message, time_left_message],
      false);
  }

  setAutoTransition(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ConsumerUpdatePage', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec.$.structSpec);
          const result = this.impl.showSkipButton();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setLowBatteryWarningVisible(params.visible);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec.$.structSpec);
          const result = this.impl.setScreenStep(params.step);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec.$.structSpec);
          const result = this.impl.setUpdateStatusMessage(params.percent, params.percent_message, params.time_left_message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec.$.structSpec);
          const result = this.impl.setAutoTransition(params.enabled);
          break;
        }
      }
      } catch (err) {}
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
  onDontEnrollClicked() {
    return this.$.onDontEnrollClicked();
  }
  onEnrollClicked() {
    return this.$.onEnrollClicked();
  }
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PackagedLicensePageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDontEnrollClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onEnrollClicked() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PackagedLicensePageHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onDontEnrollClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onEnrollClicked();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerReceiver = ash.screens_oobe.mojom.PackagedLicensePageHandlerReceiver;

ash.screens_oobe.mojom.PackagedLicensePageHandlerPtr = ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote;
ash.screens_oobe.mojom.PackagedLicensePageHandlerRequest = ash.screens_oobe.mojom.PackagedLicensePageHandlerPendingReceiver;

