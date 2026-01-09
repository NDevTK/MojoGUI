// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_login.mojom
// Module: ash.screens_login.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_login = ash.screens_login || {};
ash.screens_login.mojom = ash.screens_login.mojom || {};


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
ash.screens_login.mojom.ArcVmDataMigrationPageHandler = {};

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
};

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResumeClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec,
      null,
      []);
  }

  onUpdateClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec,
      null,
      []);
  }

  onFinishClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec,
      null,
      []);
  }

  onSkipClicked() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec,
      null,
      []);
  }

  onReportClicked() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnResumeClicked
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler.OnResumeClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnUpdateClicked
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler.OnUpdateClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFinishClicked
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler.OnFinishClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSkipClicked
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler.OnSkipClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportClicked
ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler.OnReportClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPtr = ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote;
ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRequest = ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPendingReceiver;


// Interface: ArcVmDataMigrationPage
ash.screens_login.mojom.ArcVmDataMigrationPage = {};

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
};

ash.screens_login.mojom.ArcVmDataMigrationPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUIState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec,
      null,
      [state]);
  }

  setRequiredFreeDiskSpace(required_space) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec,
      null,
      [required_space]);
  }

  setMinimumBatteryPercent(percent) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec,
      null,
      [percent]);
  }

  setBatteryState(enough, connected) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec,
      null,
      [enough, connected]);
  }

  setMigrationProgress(progress) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      [progress]);
  }

  setEstimatedRemainingTime(remaining_time) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec,
      null,
      [remaining_time]);
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

// ParamsSpec for SetUIState
ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPage.SetUIState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetRequiredFreeDiskSpace
ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPage.SetRequiredFreeDiskSpace_Params',
      packedSize: 16,
      fields: [
        { name: 'required_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMinimumBatteryPercent
ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPage.SetMinimumBatteryPercent_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBatteryState
ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPage.SetBatteryState_Params',
      packedSize: 24,
      fields: [
        { name: 'enough', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'connected', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMigrationProgress
ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPage.SetMigrationProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEstimatedRemainingTime
ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPage.SetEstimatedRemainingTime_Params',
      packedSize: 16,
      fields: [
        { name: 'remaining_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.screens_login.mojom.ArcVmDataMigrationPagePtr = ash.screens_login.mojom.ArcVmDataMigrationPageRemote;
ash.screens_login.mojom.ArcVmDataMigrationPageRequest = ash.screens_login.mojom.ArcVmDataMigrationPagePendingReceiver;


// Interface: EncryptionMigrationPageHandler
ash.screens_login.mojom.EncryptionMigrationPageHandler = {};

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
};

ash.screens_login.mojom.EncryptionMigrationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStartMigration() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec,
      null,
      []);
  }

  onSkipMigration() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec,
      null,
      []);
  }

  onRequestRestartOnLowStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec,
      null,
      []);
  }

  onRequestRestartOnFailure() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec,
      null,
      []);
  }

  onOpenFeedbackDialog() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnStartMigration
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPageHandler.OnStartMigration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSkipMigration
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPageHandler.OnSkipMigration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRequestRestartOnLowStorage
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPageHandler.OnRequestRestartOnLowStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRequestRestartOnFailure
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPageHandler.OnRequestRestartOnFailure_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnOpenFeedbackDialog
ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPageHandler.OnOpenFeedbackDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.screens_login.mojom.EncryptionMigrationPageHandlerPtr = ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote;
ash.screens_login.mojom.EncryptionMigrationPageHandlerRequest = ash.screens_login.mojom.EncryptionMigrationPageHandlerPendingReceiver;


// Interface: EncryptionMigrationPage
ash.screens_login.mojom.EncryptionMigrationPage = {};

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
};

ash.screens_login.mojom.EncryptionMigrationPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUIState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec,
      null,
      [state]);
  }

  setMigrationProgress(progress) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      [progress]);
  }

  setIsResuming(is_resuming) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec,
      null,
      [is_resuming]);
  }

  setBatteryState(percent, is_enough, is_charging) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec,
      null,
      [percent, is_enough, is_charging]);
  }

  setNecessaryBatteryPercent(percent) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec,
      null,
      [percent]);
  }

  setSpaceInfoInString(available_space, required_space) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec,
      null,
      [available_space, required_space]);
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

// ParamsSpec for SetUIState
ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPage.SetUIState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMigrationProgress
ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPage.SetMigrationProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsResuming
ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPage.SetIsResuming_Params',
      packedSize: 16,
      fields: [
        { name: 'is_resuming', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBatteryState
ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPage.SetBatteryState_Params',
      packedSize: 32,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_enough', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_charging', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNecessaryBatteryPercent
ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPage.SetNecessaryBatteryPercent_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSpaceInfoInString
ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPage.SetSpaceInfoInString_Params',
      packedSize: 24,
      fields: [
        { name: 'available_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'required_space', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.screens_login.mojom.EncryptionMigrationPagePtr = ash.screens_login.mojom.EncryptionMigrationPageRemote;
ash.screens_login.mojom.EncryptionMigrationPageRequest = ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver;

