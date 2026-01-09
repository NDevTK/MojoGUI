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
ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler';
  }

  onResumeClicked() {
    // Method: OnResumeClicked
    // Call: OnResumeClicked()
  }

  onUpdateClicked() {
    // Method: OnUpdateClicked
    // Call: OnUpdateClicked()
  }

  onFinishClicked() {
    // Method: OnFinishClicked
    // Call: OnFinishClicked()
  }

  onSkipClicked() {
    // Method: OnSkipClicked
    // Call: OnSkipClicked()
  }

  onReportClicked() {
    // Method: OnReportClicked
    // Call: OnReportClicked()
  }

};

ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ArcVmDataMigrationPage
ash.screens_login.mojom.ArcVmDataMigrationPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_login.mojom.ArcVmDataMigrationPage';
  }

  setUIState(state) {
    // Method: SetUIState
    // Call: SetUIState(state)
  }

  setRequiredFreeDiskSpace(required_space) {
    // Method: SetRequiredFreeDiskSpace
    // Call: SetRequiredFreeDiskSpace(required_space)
  }

  setMinimumBatteryPercent(percent) {
    // Method: SetMinimumBatteryPercent
    // Call: SetMinimumBatteryPercent(percent)
  }

  setBatteryState(enough, connected) {
    // Method: SetBatteryState
    // Call: SetBatteryState(enough, connected)
  }

  setMigrationProgress(progress) {
    // Method: SetMigrationProgress
    // Call: SetMigrationProgress(progress)
  }

  setEstimatedRemainingTime(remaining_time) {
    // Method: SetEstimatedRemainingTime
    // Call: SetEstimatedRemainingTime(remaining_time)
  }

};

ash.screens_login.mojom.ArcVmDataMigrationPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EncryptionMigrationPageHandler
ash.screens_login.mojom.EncryptionMigrationPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_login.mojom.EncryptionMigrationPageHandler';
  }

  onStartMigration() {
    // Method: OnStartMigration
    // Call: OnStartMigration()
  }

  onSkipMigration() {
    // Method: OnSkipMigration
    // Call: OnSkipMigration()
  }

  onRequestRestartOnLowStorage() {
    // Method: OnRequestRestartOnLowStorage
    // Call: OnRequestRestartOnLowStorage()
  }

  onRequestRestartOnFailure() {
    // Method: OnRequestRestartOnFailure
    // Call: OnRequestRestartOnFailure()
  }

  onOpenFeedbackDialog() {
    // Method: OnOpenFeedbackDialog
    // Call: OnOpenFeedbackDialog()
  }

};

ash.screens_login.mojom.EncryptionMigrationPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EncryptionMigrationPage
ash.screens_login.mojom.EncryptionMigrationPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_login.mojom.EncryptionMigrationPage';
  }

  setUIState(state) {
    // Method: SetUIState
    // Call: SetUIState(state)
  }

  setMigrationProgress(progress) {
    // Method: SetMigrationProgress
    // Call: SetMigrationProgress(progress)
  }

  setIsResuming(is_resuming) {
    // Method: SetIsResuming
    // Call: SetIsResuming(is_resuming)
  }

  setBatteryState(percent, is_enough, is_charging) {
    // Method: SetBatteryState
    // Call: SetBatteryState(percent, is_enough, is_charging)
  }

  setNecessaryBatteryPercent(percent) {
    // Method: SetNecessaryBatteryPercent
    // Call: SetNecessaryBatteryPercent(percent)
  }

  setSpaceInfoInString(available_space, required_space) {
    // Method: SetSpaceInfoInString
    // Call: SetSpaceInfoInString(available_space, required_space)
  }

};

ash.screens_login.mojom.EncryptionMigrationPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
