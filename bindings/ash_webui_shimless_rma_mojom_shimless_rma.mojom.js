// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shimless_rma/mojom/shimless_rma.mojom
// Module: ash.shimless_rma.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.shimless_rma = ash.shimless_rma || {};
ash.shimless_rma.mojom = ash.shimless_rma.mojom || {};


// Enum: State
ash.shimless_rma.mojom.State = {
  and: 0,
  kWelcomeScreen: 1,
  kConfigureNetwork: 2,
  kUpdateOs: 3,
  kSelectComponents: 4,
  kChooseDestination: 5,
  kChooseWipeDevice: 6,
  kChooseWriteProtectDisableMethod: 7,
  kEnterRSUWPDisableCode: 8,
  kWaitForManualWPDisable: 9,
  kWPDisableComplete: 10,
  kUpdateRoFirmware: 11,
  kRestock: 12,
  kUpdateDeviceInformation: 13,
  kCheckCalibration: 14,
  kSetupCalibration: 15,
  kRunCalibration: 16,
  kProvisionDevice: 17,
  kWaitForManualWPEnable: 18,
  kFinalize: 19,
  kRepairComplete: 20,
  kHardwareError: 21,
  kReboot: 22,
};

// Enum: RmadErrorCode
ash.shimless_rma.mojom.RmadErrorCode = {
  and: 0,
  but: 1,
};

// Enum: OsUpdateOperation
ash.shimless_rma.mojom.OsUpdateOperation = {
  kIdle: 0,
  kCheckingForUpdate: 1,
  kUpdateAvailable: 2,
  kDownloading: 3,
  kVerifying: 4,
  kFinalizing: 5,
  kUpdatedNeedReboot: 6,
  kReportingErrorEvent: 7,
  kAttemptingRollback: 8,
  kDisabled: 9,
  kNeedPermissionToUpdate: 10,
  kCleanupPreviousUpdate: 11,
  kUpdatedButDeferred: 12,
};

// Enum: UpdateErrorCode
ash.shimless_rma.mojom.UpdateErrorCode = {
  kSuccess: 0,
  kDownloadError: 1,
  unauthorized: 2,
  and: 3,
};

// Enum: ComponentType
ash.shimless_rma.mojom.ComponentType = {
  and: 0,
  kBattery: 1,
  kStorage: 2,
  kVpdCached: 3,
  kNetwork: 4,
  kStylus: 5,
  kTouchpad: 6,
  kTouchsreen: 7,
  kDram: 8,
  kDisplayPanel: 9,
  kCellular: 10,
  kEthernet: 11,
  kWireless: 12,
  kBaseAccelerometer: 13,
  kLidAccelerometer: 14,
  kBaseGyroscope: 15,
  kLidGyroscope: 16,
  kPowerButton: 17,
};

// Enum: ComponentRepairStatus
ash.shimless_rma.mojom.ComponentRepairStatus = {
  and: 0,
  kOriginal: 1,
  kReplaced: 2,
  kMissing: 3,
};

// Enum: WriteProtectDisableCompleteAction
ash.shimless_rma.mojom.WriteProtectDisableCompleteAction = {
  kUnknown: 0,
  kSkippedAssembleDevice: 1,
  kCompleteAssembleDevice: 2,
  kCompleteKeepDeviceOpen: 3,
  kCompleteNoOp: 4,
};

// Enum: UpdateRoFirmwareStatus
ash.shimless_rma.mojom.UpdateRoFirmwareStatus = {
  kUnknown: 0,
  kWaitUsb: 1,
  kFileNotFound: 2,
  kDownloading: 3,
  kUpdating: 4,
  kRebooting: 5,
  kComplete: 6,
};

// Enum: CalibrationSetupInstruction
ash.shimless_rma.mojom.CalibrationSetupInstruction = {
  kCalibrationInstructionUnknown: 0,
  kCalibrationInstructionPlaceBaseOnFlatSurface: 1,
  kCalibrationInstructionPlaceLidOnFlatSurface: 2,
};

// Enum: CalibrationOverallStatus
ash.shimless_rma.mojom.CalibrationOverallStatus = {
  kCalibrationOverallComplete: 0,
  kCalibrationOverallCurrentRoundComplete: 1,
  kCalibrationOverallCurrentRoundFailed: 2,
  kCalibrationOverallInitializationFailed: 3,
};

// Enum: CalibrationStatus
ash.shimless_rma.mojom.CalibrationStatus = {
  kCalibrationWaiting: 0,
  kCalibrationInProgress: 1,
  kCalibrationComplete: 2,
  kCalibrationFailed: 3,
  kCalibrationSkip: 4,
};

// Enum: ProvisioningStatus
ash.shimless_rma.mojom.ProvisioningStatus = {
  kInProgress: 0,
  kComplete: 1,
  kFailedBlocking: 2,
  kFailedNonBlocking: 3,
};

// Enum: ProvisioningError
ash.shimless_rma.mojom.ProvisioningError = {
  kUnknown: 0,
  kInternal: 1,
  kWpEnabled: 2,
  kCannotRead: 3,
  kCannotWrite: 4,
  kGenerateSecret: 5,
  kMissingBaseAccelerometer: 6,
  kMissingLidAccelerometer: 7,
  kMissingBaseGyroscope: 8,
  kMissingLidGyroscope: 9,
  kCr50: 10,
  kGbb: 11,
};

// Enum: FinalizationStatus
ash.shimless_rma.mojom.FinalizationStatus = {
  kInProgress: 0,
  kComplete: 1,
  kFailedBlocking: 2,
  kFailedNonBlocking: 3,
};

// Enum: FinalizationError
ash.shimless_rma.mojom.FinalizationError = {
  kUnknown: 0,
  kInternal: 1,
  kCannotEnableHardwareWp: 2,
  kCannotEnableSoftwareWp: 3,
  kCr50: 4,
  kGbb: 5,
};

// Enum: ShutdownMethod
ash.shimless_rma.mojom.ShutdownMethod = {
  kUnknown: 0,
  kReboot: 1,
  kShutdown: 2,
  kBatteryCutoff: 3,
};

// Enum: FeatureLevel
ash.shimless_rma.mojom.FeatureLevel = {
  kRmadFeatureLevelUnsupported: 0,
  kRmadFeatureLevelUnknown: 1,
  kRmadFeatureLevel0: 2,
  kRmadFeatureLevel1: 3,
};

// Enum: Show3pDiagnosticsAppResult
ash.shimless_rma.mojom.Show3pDiagnosticsAppResult = {
  kOk: 0,
  kAppNotInstalled: 1,
  kFailedToLoad: 2,
};

// Enum: StatePropertyError
ash.shimless_rma.mojom.StatePropertyError = {
  kUnsupported: 0,
};

// Struct: StateResult
ash.shimless_rma.mojom.StateResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : false;
  }
};

// Struct: QrCode
ash.shimless_rma.mojom.QrCode = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: Component
ash.shimless_rma.mojom.Component = class {
  constructor(values = {}) {
    this.identifier = values.identifier !== undefined ? values.identifier : "";
  }
};

// Struct: CalibrationComponentStatus
ash.shimless_rma.mojom.CalibrationComponentStatus = class {
  constructor(values = {}) {
    this.progress = values.progress !== undefined ? values.progress : 0;
  }
};

// Struct: Shimless3pDiagnosticsAppInfo
ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfo = class {
  constructor(values = {}) {
    this.permission_message = values.permission_message !== undefined ? values.permission_message : "";
  }
};

// Struct: PassHardwareVerificationResult
ash.shimless_rma.mojom.PassHardwareVerificationResult = class {
  constructor(values = {}) {
  }
};

// Struct: FailHardwareVerificationResult
ash.shimless_rma.mojom.FailHardwareVerificationResult = class {
  constructor(values = {}) {
    this.component_info = values.component_info !== undefined ? values.component_info : "";
  }
};

// Struct: SkipHardwareVerificationResult
ash.shimless_rma.mojom.SkipHardwareVerificationResult = class {
  constructor(values = {}) {
  }
};

// Struct: UpdateDeviceInfoStateProperty
ash.shimless_rma.mojom.UpdateDeviceInfoStateProperty = class {
  constructor(values = {}) {
    this.hide_google_sku = values.hide_google_sku !== undefined ? values.hide_google_sku : false;
  }
};

// Interface: ErrorObserver
ash.shimless_rma.mojom.ErrorObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.ErrorObserver';
  }

  onError(error) {
    // Method: OnError
    // Call: OnError(error)
  }

};

ash.shimless_rma.mojom.ErrorObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OsUpdateObserver
ash.shimless_rma.mojom.OsUpdateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.OsUpdateObserver';
  }

  onOsUpdateProgressUpdated(operation, progress, update_error_code) {
    // Method: OnOsUpdateProgressUpdated
    // Call: OnOsUpdateProgressUpdated(operation, progress, update_error_code)
  }

};

ash.shimless_rma.mojom.OsUpdateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CalibrationObserver
ash.shimless_rma.mojom.CalibrationObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.CalibrationObserver';
  }

  onCalibrationUpdated(componentStatus) {
    // Method: OnCalibrationUpdated
    // Call: OnCalibrationUpdated(componentStatus)
  }

  onCalibrationStepComplete(status) {
    // Method: OnCalibrationStepComplete
    // Call: OnCalibrationStepComplete(status)
  }

};

ash.shimless_rma.mojom.CalibrationObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProvisioningObserver
ash.shimless_rma.mojom.ProvisioningObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.ProvisioningObserver';
  }

  onProvisioningUpdated(status, progress, error) {
    // Method: OnProvisioningUpdated
    // Call: OnProvisioningUpdated(status, progress, error)
  }

};

ash.shimless_rma.mojom.ProvisioningObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HardwareWriteProtectionStateObserver
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver';
  }

  onHardwareWriteProtectionStateChanged(enabled) {
    // Method: OnHardwareWriteProtectionStateChanged
    // Call: OnHardwareWriteProtectionStateChanged(enabled)
  }

};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PowerCableStateObserver
ash.shimless_rma.mojom.PowerCableStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.PowerCableStateObserver';
  }

  onPowerCableStateChanged(plugged_in) {
    // Method: OnPowerCableStateChanged
    // Call: OnPowerCableStateChanged(plugged_in)
  }

};

ash.shimless_rma.mojom.PowerCableStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ExternalDiskStateObserver
ash.shimless_rma.mojom.ExternalDiskStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.ExternalDiskStateObserver';
  }

  onExternalDiskStateChanged(detected) {
    // Method: OnExternalDiskStateChanged
    // Call: OnExternalDiskStateChanged(detected)
  }

};

ash.shimless_rma.mojom.ExternalDiskStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HardwareVerificationStatusObserver
ash.shimless_rma.mojom.HardwareVerificationStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver';
  }

  onHardwareVerificationResult(result) {
    // Method: OnHardwareVerificationResult
    // Call: OnHardwareVerificationResult(result)
  }

};

ash.shimless_rma.mojom.HardwareVerificationStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FinalizationObserver
ash.shimless_rma.mojom.FinalizationObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.FinalizationObserver';
  }

  onFinalizationUpdated(status, progress, error) {
    // Method: OnFinalizationUpdated
    // Call: OnFinalizationUpdated(status, progress, error)
  }

};

ash.shimless_rma.mojom.FinalizationObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UpdateRoFirmwareObserver
ash.shimless_rma.mojom.UpdateRoFirmwareObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver';
  }

  onUpdateRoFirmwareStatusChanged(status) {
    // Method: OnUpdateRoFirmwareStatusChanged
    // Call: OnUpdateRoFirmwareStatusChanged(status)
  }

};

ash.shimless_rma.mojom.UpdateRoFirmwareObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ShimlessRmaService
ash.shimless_rma.mojom.ShimlessRmaServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.shimless_rma.mojom.ShimlessRmaService';
  }

  getCurrentState() {
    // Method: GetCurrentState
    return new Promise((resolve) => {
      // Call: GetCurrentState()
      resolve({});
    });
  }

  getStateProperties() {
    // Method: GetStateProperties
    return new Promise((resolve) => {
      // Call: GetStateProperties()
      resolve({});
    });
  }

  transitionPreviousState() {
    // Method: TransitionPreviousState
    return new Promise((resolve) => {
      // Call: TransitionPreviousState()
      resolve({});
    });
  }

  abortRma() {
    // Method: AbortRma
    return new Promise((resolve) => {
      // Call: AbortRma()
      resolve({});
    });
  }

  beginFinalization() {
    // Method: BeginFinalization
    return new Promise((resolve) => {
      // Call: BeginFinalization()
      resolve({});
    });
  }

  trackConfiguredNetworks() {
    // Method: TrackConfiguredNetworks
    // Call: TrackConfiguredNetworks()
  }

  networkSelectionComplete() {
    // Method: NetworkSelectionComplete
    return new Promise((resolve) => {
      // Call: NetworkSelectionComplete()
      resolve({});
    });
  }

  getCurrentOsVersion() {
    // Method: GetCurrentOsVersion
    return new Promise((resolve) => {
      // Call: GetCurrentOsVersion()
      resolve({});
    });
  }

  checkForOsUpdates() {
    // Method: CheckForOsUpdates
    return new Promise((resolve) => {
      // Call: CheckForOsUpdates()
      resolve({});
    });
  }

  updateOs() {
    // Method: UpdateOs
    return new Promise((resolve) => {
      // Call: UpdateOs()
      resolve({});
    });
  }

  updateOsSkipped() {
    // Method: UpdateOsSkipped
    return new Promise((resolve) => {
      // Call: UpdateOsSkipped()
      resolve({});
    });
  }

  setSameOwner() {
    // Method: SetSameOwner
    return new Promise((resolve) => {
      // Call: SetSameOwner()
      resolve({});
    });
  }

  setDifferentOwner() {
    // Method: SetDifferentOwner
    return new Promise((resolve) => {
      // Call: SetDifferentOwner()
      resolve({});
    });
  }

  setWipeDevice(should_wipe_device) {
    // Method: SetWipeDevice
    return new Promise((resolve) => {
      // Call: SetWipeDevice(should_wipe_device)
      resolve({});
    });
  }

  setManuallyDisableWriteProtect() {
    // Method: SetManuallyDisableWriteProtect
    return new Promise((resolve) => {
      // Call: SetManuallyDisableWriteProtect()
      resolve({});
    });
  }

  setRsuDisableWriteProtect() {
    // Method: SetRsuDisableWriteProtect
    return new Promise((resolve) => {
      // Call: SetRsuDisableWriteProtect()
      resolve({});
    });
  }

  getRsuDisableWriteProtectChallenge() {
    // Method: GetRsuDisableWriteProtectChallenge
    return new Promise((resolve) => {
      // Call: GetRsuDisableWriteProtectChallenge()
      resolve({});
    });
  }

  iD() {
    // Method: ID
    // Call: ID()
  }

  getRsuDisableWriteProtectHwid() {
    // Method: GetRsuDisableWriteProtectHwid
    return new Promise((resolve) => {
      // Call: GetRsuDisableWriteProtectHwid()
      resolve({});
    });
  }

  getRsuDisableWriteProtectChallengeQrCode() {
    // Method: GetRsuDisableWriteProtectChallengeQrCode
    return new Promise((resolve) => {
      // Call: GetRsuDisableWriteProtectChallengeQrCode()
      resolve({});
    });
  }

  setRsuDisableWriteProtectCode(code) {
    // Method: SetRsuDisableWriteProtectCode
    return new Promise((resolve) => {
      // Call: SetRsuDisableWriteProtectCode(code)
      resolve({});
    });
  }

  writeProtectManuallyDisabled() {
    // Method: WriteProtectManuallyDisabled
    return new Promise((resolve) => {
      // Call: WriteProtectManuallyDisabled()
      resolve({});
    });
  }

  getWriteProtectDisableCompleteAction() {
    // Method: GetWriteProtectDisableCompleteAction
    return new Promise((resolve) => {
      // Call: GetWriteProtectDisableCompleteAction()
      resolve({});
    });
  }

  confirmManualWpDisableComplete() {
    // Method: ConfirmManualWpDisableComplete
    return new Promise((resolve) => {
      // Call: ConfirmManualWpDisableComplete()
      resolve({});
    });
  }

  getComponentList() {
    // Method: GetComponentList
    return new Promise((resolve) => {
      // Call: GetComponentList()
      resolve({});
    });
  }

  repaired(others) {
    // Method: repaired
    // Call: repaired(others)
  }

  setComponentList(components) {
    // Method: SetComponentList
    return new Promise((resolve) => {
      // Call: SetComponentList(components)
      resolve({});
    });
  }

  reworkMainboard() {
    // Method: ReworkMainboard
    return new Promise((resolve) => {
      // Call: ReworkMainboard()
      resolve({});
    });
  }

  roFirmwareUpdateComplete() {
    // Method: RoFirmwareUpdateComplete
    return new Promise((resolve) => {
      // Call: RoFirmwareUpdateComplete()
      resolve({});
    });
  }

  shutdownForRestock() {
    // Method: ShutdownForRestock
    return new Promise((resolve) => {
      // Call: ShutdownForRestock()
      resolve({});
    });
  }

  continueFinalizationAfterRestock() {
    // Method: ContinueFinalizationAfterRestock
    return new Promise((resolve) => {
      // Call: ContinueFinalizationAfterRestock()
      resolve({});
    });
  }

  getRegionList() {
    // Method: GetRegionList
    return new Promise((resolve) => {
      // Call: GetRegionList()
      resolve({});
    });
  }

  getSkuList() {
    // Method: GetSkuList
    return new Promise((resolve) => {
      // Call: GetSkuList()
      resolve({});
    });
  }

  getCustomLabelList() {
    // Method: GetCustomLabelList
    return new Promise((resolve) => {
      // Call: GetCustomLabelList()
      resolve({});
    });
  }

  getSkuDescriptionList() {
    // Method: GetSkuDescriptionList
    return new Promise((resolve) => {
      // Call: GetSkuDescriptionList()
      resolve({});
    });
  }

  getOriginalSerialNumber() {
    // Method: GetOriginalSerialNumber
    return new Promise((resolve) => {
      // Call: GetOriginalSerialNumber()
      resolve({});
    });
  }

  getOriginalRegion() {
    // Method: GetOriginalRegion
    return new Promise((resolve) => {
      // Call: GetOriginalRegion()
      resolve({});
    });
  }

  getOriginalSku() {
    // Method: GetOriginalSku
    return new Promise((resolve) => {
      // Call: GetOriginalSku()
      resolve({});
    });
  }

  getOriginalCustomLabel() {
    // Method: GetOriginalCustomLabel
    return new Promise((resolve) => {
      // Call: GetOriginalCustomLabel()
      resolve({});
    });
  }

  getOriginalDramPartNumber() {
    // Method: GetOriginalDramPartNumber
    return new Promise((resolve) => {
      // Call: GetOriginalDramPartNumber()
      resolve({});
    });
  }

  getOriginalFeatureLevel() {
    // Method: GetOriginalFeatureLevel
    return new Promise((resolve) => {
      // Call: GetOriginalFeatureLevel()
      resolve({});
    });
  }

  setDeviceInformation(serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version) {
    // Method: SetDeviceInformation
    return new Promise((resolve) => {
      // Call: SetDeviceInformation(serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version)
      resolve({});
    });
  }

  getCalibrationComponentList() {
    // Method: GetCalibrationComponentList
    return new Promise((resolve) => {
      // Call: GetCalibrationComponentList()
      resolve({});
    });
  }

  getCalibrationSetupInstructions() {
    // Method: GetCalibrationSetupInstructions
    return new Promise((resolve) => {
      // Call: GetCalibrationSetupInstructions()
      resolve({});
    });
  }

  startCalibration(components) {
    // Method: StartCalibration
    return new Promise((resolve) => {
      // Call: StartCalibration(components)
      resolve({});
    });
  }

  runCalibrationStep() {
    // Method: RunCalibrationStep
    return new Promise((resolve) => {
      // Call: RunCalibrationStep()
      resolve({});
    });
  }

  continueCalibration() {
    // Method: ContinueCalibration
    return new Promise((resolve) => {
      // Call: ContinueCalibration()
      resolve({});
    });
  }

  calibrationComplete() {
    // Method: CalibrationComplete
    return new Promise((resolve) => {
      // Call: CalibrationComplete()
      resolve({});
    });
  }

  retryProvisioning() {
    // Method: RetryProvisioning
    return new Promise((resolve) => {
      // Call: RetryProvisioning()
      resolve({});
    });
  }

  provisioningComplete() {
    // Method: ProvisioningComplete
    return new Promise((resolve) => {
      // Call: ProvisioningComplete()
      resolve({});
    });
  }

  retryFinalization() {
    // Method: RetryFinalization
    return new Promise((resolve) => {
      // Call: RetryFinalization()
      resolve({});
    });
  }

  finalizationComplete() {
    // Method: FinalizationComplete
    return new Promise((resolve) => {
      // Call: FinalizationComplete()
      resolve({});
    });
  }

  writeProtectManuallyEnabled() {
    // Method: WriteProtectManuallyEnabled
    return new Promise((resolve) => {
      // Call: WriteProtectManuallyEnabled()
      resolve({});
    });
  }

  getLog() {
    // Method: GetLog
    return new Promise((resolve) => {
      // Call: GetLog()
      resolve({});
    });
  }

  saveLog() {
    // Method: SaveLog
    return new Promise((resolve) => {
      // Call: SaveLog()
      resolve({});
    });
  }

  getPowerwashRequired() {
    // Method: GetPowerwashRequired
    return new Promise((resolve) => {
      // Call: GetPowerwashRequired()
      resolve({});
    });
  }

  launchDiagnostics() {
    // Method: LaunchDiagnostics
    // Call: LaunchDiagnostics()
  }

  endRma(shutdown_method) {
    // Method: EndRma
    return new Promise((resolve) => {
      // Call: EndRma(shutdown_method)
      resolve({});
    });
  }

  shutDownAfterHardwareError() {
    // Method: ShutDownAfterHardwareError
    // Call: ShutDownAfterHardwareError()
  }

  criticalErrorExitToLogin() {
    // Method: CriticalErrorExitToLogin
    return new Promise((resolve) => {
      // Call: CriticalErrorExitToLogin()
      resolve({});
    });
  }

  criticalErrorReboot() {
    // Method: CriticalErrorReboot
    return new Promise((resolve) => {
      // Call: CriticalErrorReboot()
      resolve({});
    });
  }

  party() {
    // Method: party
    // Call: party()
  }

  get3pDiagnosticsProvider() {
    // Method: Get3pDiagnosticsProvider
    return new Promise((resolve) => {
      // Call: Get3pDiagnosticsProvider()
      resolve({});
    });
  }

  getInstallable3pDiagnosticsAppPath() {
    // Method: GetInstallable3pDiagnosticsAppPath
    return new Promise((resolve) => {
      // Call: GetInstallable3pDiagnosticsAppPath()
      resolve({});
    });
  }

  installLastFound3pDiagnosticsApp() {
    // Method: InstallLastFound3pDiagnosticsApp
    return new Promise((resolve) => {
      // Call: InstallLastFound3pDiagnosticsApp()
      resolve({});
    });
  }

  completeLast3pDiagnosticsInstallation(is_approved) {
    // Method: CompleteLast3pDiagnosticsInstallation
    // Call: CompleteLast3pDiagnosticsInstallation(is_approved)
  }

  show3pDiagnosticsApp() {
    // Method: Show3pDiagnosticsApp
    return new Promise((resolve) => {
      // Call: Show3pDiagnosticsApp()
      resolve({});
    });
  }

  observeError(observer) {
    // Method: ObserveError
    // Call: ObserveError(observer)
  }

  observeOsUpdateProgress(observer) {
    // Method: ObserveOsUpdateProgress
    // Call: ObserveOsUpdateProgress(observer)
  }

  observeCalibrationProgress(observer) {
    // Method: ObserveCalibrationProgress
    // Call: ObserveCalibrationProgress(observer)
  }

  observeProvisioningProgress(observer) {
    // Method: ObserveProvisioningProgress
    // Call: ObserveProvisioningProgress(observer)
  }

  observeHardwareWriteProtectionState(observer) {
    // Method: ObserveHardwareWriteProtectionState
    // Call: ObserveHardwareWriteProtectionState(observer)
  }

  observePowerCableState(observer) {
    // Method: ObservePowerCableState
    // Call: ObservePowerCableState(observer)
  }

  observeExternalDiskState(observer) {
    // Method: ObserveExternalDiskState
    // Call: ObserveExternalDiskState(observer)
  }

  observeHardwareVerificationStatus(observer) {
    // Method: ObserveHardwareVerificationStatus
    // Call: ObserveHardwareVerificationStatus(observer)
  }

  observeFinalizationStatus(observer) {
    // Method: ObserveFinalizationStatus
    // Call: ObserveFinalizationStatus(observer)
  }

  observeRoFirmwareUpdateProgress(observer) {
    // Method: ObserveRoFirmwareUpdateProgress
    // Call: ObserveRoFirmwareUpdateProgress(observer)
  }

};

ash.shimless_rma.mojom.ShimlessRmaServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
