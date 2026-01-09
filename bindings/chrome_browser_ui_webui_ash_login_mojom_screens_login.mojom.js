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
      null,
      [],
      undefined,
      undefined
    );
  }

  onUpdateClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onFinishClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onSkipClicked() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onReportClicked() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      null,
      [state],
      undefined,
      undefined
    );
  }

  setRequiredFreeDiskSpace(required_space) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec,
      null,
      null,
      [required_space],
      undefined,
      undefined
    );
  }

  setMinimumBatteryPercent(percent) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec,
      null,
      null,
      [percent],
      undefined,
      undefined
    );
  }

  setBatteryState(enough, connected) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec,
      null,
      null,
      [enough, connected],
      undefined,
      undefined
    );
  }

  setMigrationProgress(progress) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      null,
      [progress],
      undefined,
      undefined
    );
  }

  setEstimatedRemainingTime(remaining_time) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec,
      null,
      null,
      [remaining_time],
      undefined,
      undefined
    );
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
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'required_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBatteryState
ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.ArcVmDataMigrationPage.SetBatteryState_Params',
      packedSize: 16,
      fields: [
        { name: 'enough', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'connected', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'remaining_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      null,
      [],
      undefined,
      undefined
    );
  }

  onSkipMigration() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onRequestRestartOnLowStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onRequestRestartOnFailure() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onOpenFeedbackDialog() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      null,
      [state],
      undefined,
      undefined
    );
  }

  setMigrationProgress(progress) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      null,
      [progress],
      undefined,
      undefined
    );
  }

  setIsResuming(is_resuming) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec,
      null,
      null,
      [is_resuming],
      undefined,
      undefined
    );
  }

  setBatteryState(percent, is_enough, is_charging) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec,
      null,
      null,
      [percent, is_enough, is_charging],
      undefined,
      undefined
    );
  }

  setNecessaryBatteryPercent(percent) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec,
      null,
      null,
      [percent],
      undefined,
      undefined
    );
  }

  setSpaceInfoInString(available_space, required_space) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec,
      null,
      null,
      [available_space, required_space],
      undefined,
      undefined
    );
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
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'is_resuming', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBatteryState
ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_login.mojom.EncryptionMigrationPage.SetBatteryState_Params',
      packedSize: 24,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'is_enough', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_charging', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'available_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'required_space', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.screens_login.mojom.EncryptionMigrationPagePtr = ash.screens_login.mojom.EncryptionMigrationPageRemote;
ash.screens_login.mojom.EncryptionMigrationPageRequest = ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver;

