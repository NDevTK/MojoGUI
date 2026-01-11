// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_login.mojom
// Module: ash.screens_login.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.screens_login = ash.screens_login || {};
ash.screens_login.mojom = ash.screens_login.mojom || {};
var mojo_base = mojo_base || {};

ash.screens_login.mojom.ArcVmUIStateSpec = { $: mojo.internal.Enum() };
ash.screens_login.mojom.UIStateSpec = { $: mojo.internal.Enum() };
ash.screens_login.mojom.ArcVmDataMigrationPageHandler = {};
ash.screens_login.mojom.ArcVmDataMigrationPageHandler.$interfaceName = 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler';
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPage = {};
ash.screens_login.mojom.ArcVmDataMigrationPage.$interfaceName = 'ash.screens_login.mojom.ArcVmDataMigrationPage';
ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec = { $: {} };
ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPageHandler = {};
ash.screens_login.mojom.EncryptionMigrationPageHandler.$interfaceName = 'ash.screens_login.mojom.EncryptionMigrationPageHandler';
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPage = {};
ash.screens_login.mojom.EncryptionMigrationPage.$interfaceName = 'ash.screens_login.mojom.EncryptionMigrationPage';
ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec = { $: {} };
ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec = { $: {} };

// Enum: ArcVmUIState
ash.screens_login.mojom.ArcVmUIState = {
  kLoading: 0,
  kWelcome: 1,
  kResume: 2,
  kProgress: 3,
  kSuccess: 4,
  kFailure: 5,
};

// Enum: UIState
ash.screens_login.mojom.UIState = {
  kInitial: 0,
  kReady: 1,
  kMigrating: 2,
  kMigratingFailed: 3,
  kNotEnoughStorage: 4,
};

// Interface: ArcVmDataMigrationPageHandler
mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResumeClicked() {
    return this.$.onResumeClicked();
  }
  onUpdateClicked() {
    return this.$.onUpdateClicked();
  }
  onFinishClicked() {
    return this.$.onFinishClicked();
  }
  onSkipClicked() {
    return this.$.onSkipClicked();
  }
  onReportClicked() {
    return this.$.onReportClicked();
  }
};

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ArcVmDataMigrationPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResumeClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onUpdateClicked() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onFinishClicked() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onSkipClicked() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onReportClicked() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_login.mojom.ArcVmDataMigrationPageHandler.getRemote = function() {
  let remote = new ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.ArcVmDataMigrationPageHandler',
    'context');
  return remote.$;
};

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ArcVmDataMigrationPageHandler', [
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
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onResumeClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onUpdateClicked();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onFinishClicked();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onSkipClicked();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onReportClicked();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerReceiver = ash.screens_login.mojom.ArcVmDataMigrationPageHandlerReceiver;

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPtr = ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote;
ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRequest = ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPendingReceiver;


// Interface: ArcVmDataMigrationPage
mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_Params', [
      mojo.internal.StructField('state', 0, 0, ash.screens_login.mojom.ArcVmUIStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_Params', [
      mojo.internal.StructField('required_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_Params', [
      mojo.internal.StructField('enough', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connected', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_Params', [
      mojo.internal.StructField('remaining_time', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_login.mojom.ArcVmDataMigrationPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_login.mojom.ArcVmDataMigrationPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.ArcVmDataMigrationPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_login.mojom.ArcVmDataMigrationPagePendingReceiver,
      handle);
    this.$ = new ash.screens_login.mojom.ArcVmDataMigrationPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setUIState(state) {
    return this.$.setUIState(state);
  }
  setRequiredFreeDiskSpace(required_space) {
    return this.$.setRequiredFreeDiskSpace(required_space);
  }
  setMinimumBatteryPercent(percent) {
    return this.$.setMinimumBatteryPercent(percent);
  }
  setBatteryState(enough, connected) {
    return this.$.setBatteryState(enough, connected);
  }
  setMigrationProgress(progress) {
    return this.$.setMigrationProgress(progress);
  }
  setEstimatedRemainingTime(remaining_time) {
    return this.$.setEstimatedRemainingTime(remaining_time);
  }
};

ash.screens_login.mojom.ArcVmDataMigrationPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ArcVmDataMigrationPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setUIState(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec,
      null,
      [state],
      false);
  }

  setRequiredFreeDiskSpace(required_space) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec,
      null,
      [required_space],
      false);
  }

  setMinimumBatteryPercent(percent) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec,
      null,
      [percent],
      false);
  }

  setBatteryState(enough, connected) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec,
      null,
      [enough, connected],
      false);
  }

  setMigrationProgress(progress) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      [progress],
      false);
  }

  setEstimatedRemainingTime(remaining_time) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec,
      null,
      [remaining_time],
      false);
  }

};

ash.screens_login.mojom.ArcVmDataMigrationPage.getRemote = function() {
  let remote = new ash.screens_login.mojom.ArcVmDataMigrationPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.ArcVmDataMigrationPage',
    'context');
  return remote.$;
};

ash.screens_login.mojom.ArcVmDataMigrationPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ArcVmDataMigrationPage', [
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
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec.$.structSpec);
          const result = this.impl.setUIState(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec.$.structSpec);
          const result = this.impl.setRequiredFreeDiskSpace(params.required_space);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec.$.structSpec);
          const result = this.impl.setMinimumBatteryPercent(params.percent);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec.$.structSpec);
          const result = this.impl.setBatteryState(params.enough, params.connected);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec.$.structSpec);
          const result = this.impl.setMigrationProgress(params.progress);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec.$.structSpec);
          const result = this.impl.setEstimatedRemainingTime(params.remaining_time);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.screens_login.mojom.ArcVmDataMigrationPageReceiver = ash.screens_login.mojom.ArcVmDataMigrationPageReceiver;

ash.screens_login.mojom.ArcVmDataMigrationPagePtr = ash.screens_login.mojom.ArcVmDataMigrationPageRemote;
ash.screens_login.mojom.ArcVmDataMigrationPageRequest = ash.screens_login.mojom.ArcVmDataMigrationPagePendingReceiver;


// Interface: EncryptionMigrationPageHandler
mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

ash.screens_login.mojom.EncryptionMigrationPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.EncryptionMigrationPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_login.mojom.EncryptionMigrationPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_login.mojom.EncryptionMigrationPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStartMigration() {
    return this.$.onStartMigration();
  }
  onSkipMigration() {
    return this.$.onSkipMigration();
  }
  onRequestRestartOnLowStorage() {
    return this.$.onRequestRestartOnLowStorage();
  }
  onRequestRestartOnFailure() {
    return this.$.onRequestRestartOnFailure();
  }
  onOpenFeedbackDialog() {
    return this.$.onOpenFeedbackDialog();
  }
};

ash.screens_login.mojom.EncryptionMigrationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EncryptionMigrationPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStartMigration() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec,
      null,
      [],
      false);
  }

  onSkipMigration() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec,
      null,
      [],
      false);
  }

  onRequestRestartOnLowStorage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec,
      null,
      [],
      false);
  }

  onRequestRestartOnFailure() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_login.mojom.EncryptionMigrationPageHandler.getRemote = function() {
  let remote = new ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.EncryptionMigrationPageHandler',
    'context');
  return remote.$;
};

ash.screens_login.mojom.EncryptionMigrationPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EncryptionMigrationPageHandler', [
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
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec.$.structSpec);
          const result = this.impl.onStartMigration();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec.$.structSpec);
          const result = this.impl.onSkipMigration();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestRestartOnLowStorage();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestRestartOnFailure();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec.$.structSpec);
          const result = this.impl.onOpenFeedbackDialog();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.screens_login.mojom.EncryptionMigrationPageHandlerReceiver = ash.screens_login.mojom.EncryptionMigrationPageHandlerReceiver;

ash.screens_login.mojom.EncryptionMigrationPageHandlerPtr = ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote;
ash.screens_login.mojom.EncryptionMigrationPageHandlerRequest = ash.screens_login.mojom.EncryptionMigrationPageHandlerPendingReceiver;


// Interface: EncryptionMigrationPage
mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_Params', [
      mojo.internal.StructField('state', 0, 0, ash.screens_login.mojom.UIStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_Params', [
      mojo.internal.StructField('is_resuming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('is_enough', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_charging', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_Params', [
      mojo.internal.StructField('available_space', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('required_space', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_login.mojom.EncryptionMigrationPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.EncryptionMigrationPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver,
      handle);
    this.$ = new ash.screens_login.mojom.EncryptionMigrationPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setUIState(state) {
    return this.$.setUIState(state);
  }
  setMigrationProgress(progress) {
    return this.$.setMigrationProgress(progress);
  }
  setIsResuming(is_resuming) {
    return this.$.setIsResuming(is_resuming);
  }
  setBatteryState(percent, is_enough, is_charging) {
    return this.$.setBatteryState(percent, is_enough, is_charging);
  }
  setNecessaryBatteryPercent(percent) {
    return this.$.setNecessaryBatteryPercent(percent);
  }
  setSpaceInfoInString(available_space, required_space) {
    return this.$.setSpaceInfoInString(available_space, required_space);
  }
};

ash.screens_login.mojom.EncryptionMigrationPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EncryptionMigrationPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setUIState(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec,
      null,
      [state],
      false);
  }

  setMigrationProgress(progress) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      [progress],
      false);
  }

  setIsResuming(is_resuming) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec,
      null,
      [is_resuming],
      false);
  }

  setBatteryState(percent, is_enough, is_charging) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec,
      null,
      [percent, is_enough, is_charging],
      false);
  }

  setNecessaryBatteryPercent(percent) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec,
      null,
      [percent],
      false);
  }

  setSpaceInfoInString(available_space, required_space) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec,
      null,
      [available_space, required_space],
      false);
  }

};

ash.screens_login.mojom.EncryptionMigrationPage.getRemote = function() {
  let remote = new ash.screens_login.mojom.EncryptionMigrationPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.EncryptionMigrationPage',
    'context');
  return remote.$;
};

ash.screens_login.mojom.EncryptionMigrationPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EncryptionMigrationPage', [
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
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec.$.structSpec);
          const result = this.impl.setUIState(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec.$.structSpec);
          const result = this.impl.setMigrationProgress(params.progress);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec.$.structSpec);
          const result = this.impl.setIsResuming(params.is_resuming);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec.$.structSpec);
          const result = this.impl.setBatteryState(params.percent, params.is_enough, params.is_charging);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec.$.structSpec);
          const result = this.impl.setNecessaryBatteryPercent(params.percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec.$.structSpec);
          const result = this.impl.setSpaceInfoInString(params.available_space, params.required_space);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.screens_login.mojom.EncryptionMigrationPageReceiver = ash.screens_login.mojom.EncryptionMigrationPageReceiver;

ash.screens_login.mojom.EncryptionMigrationPagePtr = ash.screens_login.mojom.EncryptionMigrationPageRemote;
ash.screens_login.mojom.EncryptionMigrationPageRequest = ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver;

