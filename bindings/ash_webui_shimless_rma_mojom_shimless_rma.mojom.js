// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shimless_rma/mojom/shimless_rma.mojom
// Module: ash.shimless_rma.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.shimless_rma = ash.shimless_rma || {};
ash.shimless_rma.mojom = ash.shimless_rma.mojom || {};
var mojo_base = mojo_base || {};

ash.shimless_rma.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.RmadErrorCodeSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.OsUpdateOperationSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.UpdateErrorCodeSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.ComponentTypeSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.ComponentRepairStatusSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.WriteProtectDisableCompleteActionSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.CalibrationSetupInstructionSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.CalibrationOverallStatusSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.CalibrationStatusSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.ProvisioningStatusSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.ProvisioningErrorSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.FinalizationStatusSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.FinalizationErrorSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.ShutdownMethodSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.FeatureLevelSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.Show3pDiagnosticsAppResultSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.StatePropertyErrorSpec = { $: mojo.internal.Enum() };
ash.shimless_rma.mojom.HardwareVerificationResultSpec = { $: {} };
ash.shimless_rma.mojom.StatePropertySpec = { $: {} };
ash.shimless_rma.mojom.StatePropertyResultSpec = { $: {} };
ash.shimless_rma.mojom.StateResultSpec = { $: {} };
ash.shimless_rma.mojom.QrCodeSpec = { $: {} };
ash.shimless_rma.mojom.ComponentSpec = { $: {} };
ash.shimless_rma.mojom.CalibrationComponentStatusSpec = { $: {} };
ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec = { $: {} };
ash.shimless_rma.mojom.PassHardwareVerificationResultSpec = { $: {} };
ash.shimless_rma.mojom.FailHardwareVerificationResultSpec = { $: {} };
ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec = { $: {} };
ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec = { $: {} };
ash.shimless_rma.mojom.ErrorObserver = {};
ash.shimless_rma.mojom.ErrorObserver.$interfaceName = 'ash.shimless_rma.mojom.ErrorObserver';
ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.OsUpdateObserver = {};
ash.shimless_rma.mojom.OsUpdateObserver.$interfaceName = 'ash.shimless_rma.mojom.OsUpdateObserver';
ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.CalibrationObserver = {};
ash.shimless_rma.mojom.CalibrationObserver.$interfaceName = 'ash.shimless_rma.mojom.CalibrationObserver';
ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ProvisioningObserver = {};
ash.shimless_rma.mojom.ProvisioningObserver.$interfaceName = 'ash.shimless_rma.mojom.ProvisioningObserver';
ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver = {};
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver.$interfaceName = 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver';
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.PowerCableStateObserver = {};
ash.shimless_rma.mojom.PowerCableStateObserver.$interfaceName = 'ash.shimless_rma.mojom.PowerCableStateObserver';
ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ExternalDiskStateObserver = {};
ash.shimless_rma.mojom.ExternalDiskStateObserver.$interfaceName = 'ash.shimless_rma.mojom.ExternalDiskStateObserver';
ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.HardwareVerificationStatusObserver = {};
ash.shimless_rma.mojom.HardwareVerificationStatusObserver.$interfaceName = 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver';
ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.FinalizationObserver = {};
ash.shimless_rma.mojom.FinalizationObserver.$interfaceName = 'ash.shimless_rma.mojom.FinalizationObserver';
ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.UpdateRoFirmwareObserver = {};
ash.shimless_rma.mojom.UpdateRoFirmwareObserver.$interfaceName = 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver';
ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService = {};
ash.shimless_rma.mojom.ShimlessRmaService.$interfaceName = 'ash.shimless_rma.mojom.ShimlessRmaService';
ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec = { $: {} };
ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec = { $: {} };

// Enum: State
ash.shimless_rma.mojom.State = {
  kUnknown: 0,
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
  kNotSet: 0,
  kOk: 1,
  kWait: 2,
  kExpectReboot: 3,
  kExpectShutdown: 4,
  kRmaNotRequired: 5,
  kStateHandlerMissing: 6,
  kStateHandlerInitializationFailed: 7,
  kRequestInvalid: 8,
  kRequestArgsMissing: 9,
  kRequestArgsViolation: 10,
  kTransitionFailed: 11,
  kAbortFailed: 12,
  kMissingComponent: 13,
  kWriteProtectDisableRsuNoChallenge: 14,
  kWriteProtectDisableRsuCodeInvalid: 15,
  kWriteProtectDisableBatteryNotDisconnected: 16,
  kWriteProtectSignalNotDetected: 17,
  kReimagingDownloadNoNetwork: 18,
  kReimagingDownloadNetworkError: 19,
  kReimagingDownloadCancelled: 20,
  kReimagingUsbNotFound: 21,
  kReimagingUsbTooManyFound: 22,
  kReimagingUsbInvalidImage: 23,
  kReimagingImagingFailed: 24,
  kReimagingUnknownFailure: 25,
  kDeviceInfoInvalid: 26,
  kCalibrationComponentMissing: 27,
  kCalibrationStatusMissing: 28,
  kCalibrationComponentInvalid: 29,
  kCalibrationFailed: 30,
  kProvisioningFailed: 31,
  kPowerwashFailed: 32,
  kFinalizationFailed: 33,
  kLogUploadFtpServerCannotConnect: 34,
  kLogUploadFtpServerConnectionRejected: 35,
  kLogUploadFtpServerTransferFailed: 36,
  kCannotCancelRma: 37,
  kCannotGetLog: 38,
  kDaemonInitializationFailed: 39,
  kUpdateRoFirmwareFailed: 40,
  kWpEnabled: 41,
  kCannotWrite: 42,
  kCannotSaveLog: 43,
  kCannotRecordBrowserAction: 44,
  kUsbNotFound: 45,
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
  kOtherError: 2,
};

// Enum: ComponentType
ash.shimless_rma.mojom.ComponentType = {
  kComponentUnknown: 0,
  kAudioCodec: 1,
  kBattery: 2,
  kStorage: 3,
  kVpdCached: 4,
  kNetwork: 5,
  kCamera: 6,
  kStylus: 7,
  kTouchpad: 8,
  kTouchsreen: 9,
  kDram: 10,
  kDisplayPanel: 11,
  kCellular: 12,
  kEthernet: 13,
  kWireless: 14,
  kScreen: 15,
  kBaseAccelerometer: 16,
  kLidAccelerometer: 17,
  kBaseGyroscope: 18,
  kLidGyroscope: 19,
  kKeyboard: 20,
  kPowerButton: 21,
};

// Enum: ComponentRepairStatus
ash.shimless_rma.mojom.ComponentRepairStatus = {
  kRepairUnknown: 0,
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
  kCalibrationOverallComplete: 1,
  kCalibrationOverallCurrentRoundComplete: 2,
  kCalibrationOverallCurrentRoundFailed: 3,
  kCalibrationOverallInitializationFailed: 4,
};

// Enum: CalibrationStatus
ash.shimless_rma.mojom.CalibrationStatus = {
  kCalibrationWaiting: 1,
  kCalibrationInProgress: 2,
  kCalibrationComplete: 3,
  kCalibrationFailed: 4,
  kCalibrationSkip: 5,
};

// Enum: ProvisioningStatus
ash.shimless_rma.mojom.ProvisioningStatus = {
  kInProgress: 1,
  kComplete: 2,
  kFailedBlocking: 3,
  kFailedNonBlocking: 4,
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
  kInProgress: 1,
  kComplete: 2,
  kFailedBlocking: 3,
  kFailedNonBlocking: 4,
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

// Union: HardwareVerificationResult
mojo.internal.Union(
    ash.shimless_rma.mojom.HardwareVerificationResultSpec, 'ash.shimless_rma.mojom.HardwareVerificationResult', {
      'pass_result': {
        'ordinal': 0,
        'type': ash.shimless_rma.mojom.PassHardwareVerificationResultSpec.$,
        'nullable': false,
      },
      'fail_result': {
        'ordinal': 1,
        'type': ash.shimless_rma.mojom.FailHardwareVerificationResultSpec.$,
        'nullable': false,
      },
      'skip_result': {
        'ordinal': 2,
        'type': ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec.$,
        'nullable': false,
      },
    });

// Union: StateProperty
mojo.internal.Union(
    ash.shimless_rma.mojom.StatePropertySpec, 'ash.shimless_rma.mojom.StateProperty', {
      'update_device_info_state_property': {
        'ordinal': 0,
        'type': ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec.$,
        'nullable': false,
      },
    });

// Union: StatePropertyResult
mojo.internal.Union(
    ash.shimless_rma.mojom.StatePropertyResultSpec, 'ash.shimless_rma.mojom.StatePropertyResult', {
      'property': {
        'ordinal': 0,
        'type': ash.shimless_rma.mojom.StatePropertySpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': ash.shimless_rma.mojom.StatePropertyErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: StateResult
mojo.internal.Struct(
    ash.shimless_rma.mojom.StateResultSpec, 'ash.shimless_rma.mojom.StateResult', [
      mojo.internal.StructField('state', 0, 0, ash.shimless_rma.mojom.StateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, ash.shimless_rma.mojom.RmadErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('can_exit', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_go_back', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: QrCode
mojo.internal.Struct(
    ash.shimless_rma.mojom.QrCodeSpec, 'ash.shimless_rma.mojom.QrCode', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Component
mojo.internal.Struct(
    ash.shimless_rma.mojom.ComponentSpec, 'ash.shimless_rma.mojom.Component', [
      mojo.internal.StructField('component', 0, 0, ash.shimless_rma.mojom.ComponentTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, ash.shimless_rma.mojom.ComponentRepairStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('identifier', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CalibrationComponentStatus
mojo.internal.Struct(
    ash.shimless_rma.mojom.CalibrationComponentStatusSpec, 'ash.shimless_rma.mojom.CalibrationComponentStatus', [
      mojo.internal.StructField('component', 0, 0, ash.shimless_rma.mojom.ComponentTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, ash.shimless_rma.mojom.CalibrationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Shimless3pDiagnosticsAppInfo
mojo.internal.Struct(
    ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec, 'ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission_message', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PassHardwareVerificationResult
mojo.internal.Struct(
    ash.shimless_rma.mojom.PassHardwareVerificationResultSpec, 'ash.shimless_rma.mojom.PassHardwareVerificationResult', [
    ],
    [[0, 8]]);

// Struct: FailHardwareVerificationResult
mojo.internal.Struct(
    ash.shimless_rma.mojom.FailHardwareVerificationResultSpec, 'ash.shimless_rma.mojom.FailHardwareVerificationResult', [
      mojo.internal.StructField('component_info', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SkipHardwareVerificationResult
mojo.internal.Struct(
    ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec, 'ash.shimless_rma.mojom.SkipHardwareVerificationResult', [
    ],
    [[0, 8]]);

// Struct: UpdateDeviceInfoStateProperty
mojo.internal.Struct(
    ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec, 'ash.shimless_rma.mojom.UpdateDeviceInfoStateProperty', [
      mojo.internal.StructField('customized_serial_number_naming', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number_modifiable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('region_modifiable', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sku_modifiable', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('custom_label_modifiable', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dram_part_number_modifiable', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feature_level_modifiable', 8, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hide_google_sku', 8, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ErrorObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec, 'ash.shimless_rma.mojom.ErrorObserver_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, ash.shimless_rma.mojom.RmadErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.ErrorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.ErrorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ErrorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.ErrorObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.ErrorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.ErrorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onError(error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

};

ash.shimless_rma.mojom.ErrorObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.ErrorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ErrorObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.ErrorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.ErrorObserverReceiver = ash.shimless_rma.mojom.ErrorObserverReceiver;

ash.shimless_rma.mojom.ErrorObserverPtr = ash.shimless_rma.mojom.ErrorObserverRemote;
ash.shimless_rma.mojom.ErrorObserverRequest = ash.shimless_rma.mojom.ErrorObserverPendingReceiver;


// Interface: OsUpdateObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec, 'ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_Params', [
      mojo.internal.StructField('operation', 0, 0, ash.shimless_rma.mojom.OsUpdateOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_error_code', 8, 0, ash.shimless_rma.mojom.UpdateErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

ash.shimless_rma.mojom.OsUpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.OsUpdateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.OsUpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.OsUpdateObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.OsUpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.OsUpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onOsUpdateProgressUpdated(operation, progress, update_error_code) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec,
      null,
      [operation, progress, update_error_code],
      false);
  }

};

ash.shimless_rma.mojom.OsUpdateObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.OsUpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.OsUpdateObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.OsUpdateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onOsUpdateProgressUpdated');
          const result = this.impl.onOsUpdateProgressUpdated(params.operation, params.progress, params.update_error_code);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.OsUpdateObserverReceiver = ash.shimless_rma.mojom.OsUpdateObserverReceiver;

ash.shimless_rma.mojom.OsUpdateObserverPtr = ash.shimless_rma.mojom.OsUpdateObserverRemote;
ash.shimless_rma.mojom.OsUpdateObserverRequest = ash.shimless_rma.mojom.OsUpdateObserverPendingReceiver;


// Interface: CalibrationObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec, 'ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_Params', [
      mojo.internal.StructField('componentStatus', 0, 0, ash.shimless_rma.mojom.CalibrationComponentStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec, 'ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_Params', [
      mojo.internal.StructField('status', 0, 0, ash.shimless_rma.mojom.CalibrationOverallStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.CalibrationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.CalibrationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.CalibrationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.CalibrationObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.CalibrationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.CalibrationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCalibrationUpdated(componentStatus) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec,
      null,
      [componentStatus],
      false);
  }

  onCalibrationStepComplete(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec,
      null,
      [status],
      false);
  }

};

ash.shimless_rma.mojom.CalibrationObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.CalibrationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.CalibrationObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.CalibrationObserverReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCalibrationUpdated');
          const result = this.impl.onCalibrationUpdated(params.componentStatus);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCalibrationStepComplete');
          const result = this.impl.onCalibrationStepComplete(params.status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.CalibrationObserverReceiver = ash.shimless_rma.mojom.CalibrationObserverReceiver;

ash.shimless_rma.mojom.CalibrationObserverPtr = ash.shimless_rma.mojom.CalibrationObserverRemote;
ash.shimless_rma.mojom.CalibrationObserverRequest = ash.shimless_rma.mojom.CalibrationObserverPendingReceiver;


// Interface: ProvisioningObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec, 'ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_Params', [
      mojo.internal.StructField('status', 0, 0, ash.shimless_rma.mojom.ProvisioningStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, ash.shimless_rma.mojom.ProvisioningErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

ash.shimless_rma.mojom.ProvisioningObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.ProvisioningObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ProvisioningObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.ProvisioningObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.ProvisioningObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.ProvisioningObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProvisioningUpdated(status, progress, error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec,
      null,
      [status, progress, error],
      false);
  }

};

ash.shimless_rma.mojom.ProvisioningObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.ProvisioningObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ProvisioningObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.ProvisioningObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onProvisioningUpdated');
          const result = this.impl.onProvisioningUpdated(params.status, params.progress, params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.ProvisioningObserverReceiver = ash.shimless_rma.mojom.ProvisioningObserverReceiver;

ash.shimless_rma.mojom.ProvisioningObserverPtr = ash.shimless_rma.mojom.ProvisioningObserverRemote;
ash.shimless_rma.mojom.ProvisioningObserverRequest = ash.shimless_rma.mojom.ProvisioningObserverPendingReceiver;


// Interface: HardwareWriteProtectionStateObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec, 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHardwareWriteProtectionStateChanged(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onHardwareWriteProtectionStateChanged');
          const result = this.impl.onHardwareWriteProtectionStateChanged(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverReceiver = ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverReceiver;

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPtr = ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote;
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRequest = ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPendingReceiver;


// Interface: PowerCableStateObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec, 'ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_Params', [
      mojo.internal.StructField('plugged_in', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.PowerCableStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.PowerCableStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.PowerCableStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.PowerCableStateObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.PowerCableStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.PowerCableStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPowerCableStateChanged(plugged_in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec,
      null,
      [plugged_in],
      false);
  }

};

ash.shimless_rma.mojom.PowerCableStateObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.PowerCableStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.PowerCableStateObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.PowerCableStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPowerCableStateChanged');
          const result = this.impl.onPowerCableStateChanged(params.plugged_in);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.PowerCableStateObserverReceiver = ash.shimless_rma.mojom.PowerCableStateObserverReceiver;

ash.shimless_rma.mojom.PowerCableStateObserverPtr = ash.shimless_rma.mojom.PowerCableStateObserverRemote;
ash.shimless_rma.mojom.PowerCableStateObserverRequest = ash.shimless_rma.mojom.PowerCableStateObserverPendingReceiver;


// Interface: ExternalDiskStateObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec, 'ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_Params', [
      mojo.internal.StructField('detected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.ExternalDiskStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.ExternalDiskStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ExternalDiskStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.ExternalDiskStateObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.ExternalDiskStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.ExternalDiskStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onExternalDiskStateChanged(detected) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec,
      null,
      [detected],
      false);
  }

};

ash.shimless_rma.mojom.ExternalDiskStateObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.ExternalDiskStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ExternalDiskStateObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.ExternalDiskStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onExternalDiskStateChanged');
          const result = this.impl.onExternalDiskStateChanged(params.detected);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.ExternalDiskStateObserverReceiver = ash.shimless_rma.mojom.ExternalDiskStateObserverReceiver;

ash.shimless_rma.mojom.ExternalDiskStateObserverPtr = ash.shimless_rma.mojom.ExternalDiskStateObserverRemote;
ash.shimless_rma.mojom.ExternalDiskStateObserverRequest = ash.shimless_rma.mojom.ExternalDiskStateObserverPendingReceiver;


// Interface: HardwareVerificationStatusObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec, 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_Params', [
      mojo.internal.StructField('result', 0, 0, ash.shimless_rma.mojom.HardwareVerificationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.HardwareVerificationStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.HardwareVerificationStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHardwareVerificationResult(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec,
      null,
      [result],
      false);
  }

};

ash.shimless_rma.mojom.HardwareVerificationStatusObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.HardwareVerificationStatusObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.HardwareVerificationStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onHardwareVerificationResult');
          const result = this.impl.onHardwareVerificationResult(params.result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.HardwareVerificationStatusObserverReceiver = ash.shimless_rma.mojom.HardwareVerificationStatusObserverReceiver;

ash.shimless_rma.mojom.HardwareVerificationStatusObserverPtr = ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote;
ash.shimless_rma.mojom.HardwareVerificationStatusObserverRequest = ash.shimless_rma.mojom.HardwareVerificationStatusObserverPendingReceiver;


// Interface: FinalizationObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec, 'ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_Params', [
      mojo.internal.StructField('status', 0, 0, ash.shimless_rma.mojom.FinalizationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, ash.shimless_rma.mojom.FinalizationErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

ash.shimless_rma.mojom.FinalizationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.FinalizationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.FinalizationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.FinalizationObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.FinalizationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.FinalizationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFinalizationUpdated(status, progress, error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec,
      null,
      [status, progress, error],
      false);
  }

};

ash.shimless_rma.mojom.FinalizationObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.FinalizationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.FinalizationObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.FinalizationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onFinalizationUpdated');
          const result = this.impl.onFinalizationUpdated(params.status, params.progress, params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.FinalizationObserverReceiver = ash.shimless_rma.mojom.FinalizationObserverReceiver;

ash.shimless_rma.mojom.FinalizationObserverPtr = ash.shimless_rma.mojom.FinalizationObserverRemote;
ash.shimless_rma.mojom.FinalizationObserverRequest = ash.shimless_rma.mojom.FinalizationObserverPendingReceiver;


// Interface: UpdateRoFirmwareObserver
mojo.internal.Struct(
    ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec, 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.UpdateRoFirmwareObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.UpdateRoFirmwareObserverPendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdateRoFirmwareStatusChanged(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

};

ash.shimless_rma.mojom.UpdateRoFirmwareObserver.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.UpdateRoFirmwareObserver',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.UpdateRoFirmwareObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onUpdateRoFirmwareStatusChanged');
          const result = this.impl.onUpdateRoFirmwareStatusChanged(params.status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.UpdateRoFirmwareObserverReceiver = ash.shimless_rma.mojom.UpdateRoFirmwareObserverReceiver;

ash.shimless_rma.mojom.UpdateRoFirmwareObserverPtr = ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote;
ash.shimless_rma.mojom.UpdateRoFirmwareObserverRequest = ash.shimless_rma.mojom.UpdateRoFirmwareObserverPendingReceiver;


// Interface: ShimlessRmaService
mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParams', [
      mojo.internal.StructField('state_property_result', 0, 0, ash.shimless_rma.mojom.StatePropertyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.shimless_rma.mojom.RmadErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_available', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParams', [
      mojo.internal.StructField('update_started', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_Params', [
      mojo.internal.StructField('should_wipe_device', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParams', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParams', [
      mojo.internal.StructField('hwid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParams', [
      mojo.internal.StructField('qr_code_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_Params', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParams', [
      mojo.internal.StructField('action', 0, 0, ash.shimless_rma.mojom.WriteProtectDisableCompleteActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParams', [
      mojo.internal.StructField('components', 0, 0, mojo.internal.Array(ash.shimless_rma.mojom.ComponentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_Params', [
      mojo.internal.StructField('components', 0, 0, mojo.internal.Array(ash.shimless_rma.mojom.ComponentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParams', [
      mojo.internal.StructField('regions', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParams', [
      mojo.internal.StructField('skus', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParams', [
      mojo.internal.StructField('custom_labels', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParams', [
      mojo.internal.StructField('sku_descriptions', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParams', [
      mojo.internal.StructField('serial_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParams', [
      mojo.internal.StructField('region_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParams', [
      mojo.internal.StructField('sku_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParams', [
      mojo.internal.StructField('custom_label_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParams', [
      mojo.internal.StructField('dram_part_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParams', [
      mojo.internal.StructField('original_feature_level', 0, 0, ash.shimless_rma.mojom.FeatureLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_Params', [
      mojo.internal.StructField('serial_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dram_part_number', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('region_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sku_index', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('custom_label_index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('hw_compliance_version', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_chassis_branded', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParams', [
      mojo.internal.StructField('components', 0, 0, mojo.internal.Array(ash.shimless_rma.mojom.CalibrationComponentStatusSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParams', [
      mojo.internal.StructField('instructions', 0, 0, ash.shimless_rma.mojom.CalibrationSetupInstructionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_Params', [
      mojo.internal.StructField('components', 0, 0, mojo.internal.Array(ash.shimless_rma.mojom.CalibrationComponentStatusSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetLog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParams', [
      mojo.internal.StructField('log', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, ash.shimless_rma.mojom.RmadErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParams', [
      mojo.internal.StructField('save_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, ash.shimless_rma.mojom.RmadErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParams', [
      mojo.internal.StructField('powerwash_required', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_EndRma_Params', [
      mojo.internal.StructField('shutdown_method', 0, 0, ash.shimless_rma.mojom.ShutdownMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParams', [
      mojo.internal.StructField('state_result', 0, 0, ash.shimless_rma.mojom.StateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.shimless_rma.mojom.RmadErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.shimless_rma.mojom.RmadErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParams', [
      mojo.internal.StructField('provider', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParams', [
      mojo.internal.StructField('app_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParams', [
      mojo.internal.StructField('app_info', 0, 0, ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_Params', [
      mojo.internal.StructField('is_approved', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shimless_rma.mojom.Show3pDiagnosticsAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ErrorObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.OsUpdateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.CalibrationObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ProvisioningObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.PowerCableStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ExternalDiskStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareVerificationStatusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.FinalizationObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.UpdateRoFirmwareObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shimless_rma.mojom.ShimlessRmaServiceRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ShimlessRmaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver,
      handle);
    this.$ = new ash.shimless_rma.mojom.ShimlessRmaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shimless_rma.mojom.ShimlessRmaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCurrentState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec,
      [],
      false);
  }

  getStateProperties() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec,
      [],
      false);
  }

  transitionPreviousState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec,
      [],
      false);
  }

  abortRma() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec,
      [],
      false);
  }

  beginFinalization() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec,
      [],
      false);
  }

  trackConfiguredNetworks() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec,
      null,
      [],
      false);
  }

  networkSelectionComplete() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec,
      [],
      false);
  }

  getCurrentOsVersion() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec,
      [],
      false);
  }

  checkForOsUpdates() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec,
      [],
      false);
  }

  updateOs() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec,
      [],
      false);
  }

  updateOsSkipped() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec,
      [],
      false);
  }

  setSameOwner() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec,
      [],
      false);
  }

  setDifferentOwner() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec,
      [],
      false);
  }

  setWipeDevice(should_wipe_device) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec,
      [should_wipe_device],
      false);
  }

  setManuallyDisableWriteProtect() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec,
      [],
      false);
  }

  setRsuDisableWriteProtect() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectChallenge() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectHwid() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectChallengeQrCode() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec,
      [],
      false);
  }

  setRsuDisableWriteProtectCode(code) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec,
      [code],
      false);
  }

  writeProtectManuallyDisabled() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec,
      [],
      false);
  }

  getWriteProtectDisableCompleteAction() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec,
      [],
      false);
  }

  confirmManualWpDisableComplete() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec,
      [],
      false);
  }

  getComponentList() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec,
      [],
      false);
  }

  setComponentList(components) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec,
      [components],
      false);
  }

  reworkMainboard() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec,
      [],
      false);
  }

  roFirmwareUpdateComplete() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec,
      [],
      false);
  }

  shutdownForRestock() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec,
      [],
      false);
  }

  continueFinalizationAfterRestock() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec,
      [],
      false);
  }

  getRegionList() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec,
      [],
      false);
  }

  getSkuList() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec,
      [],
      false);
  }

  getCustomLabelList() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec,
      [],
      false);
  }

  getSkuDescriptionList() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalSerialNumber() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalRegion() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalSku() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalCustomLabel() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalDramPartNumber() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalFeatureLevel() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec,
      [],
      false);
  }

  setDeviceInformation(serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec,
      [serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version],
      false);
  }

  getCalibrationComponentList() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec,
      [],
      false);
  }

  getCalibrationSetupInstructions() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec,
      [],
      false);
  }

  startCalibration(components) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec,
      [components],
      false);
  }

  runCalibrationStep() {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec,
      [],
      false);
  }

  continueCalibration() {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec,
      [],
      false);
  }

  calibrationComplete() {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec,
      [],
      false);
  }

  retryProvisioning() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec,
      [],
      false);
  }

  provisioningComplete() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec,
      [],
      false);
  }

  retryFinalization() {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec,
      [],
      false);
  }

  finalizationComplete() {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec,
      [],
      false);
  }

  writeProtectManuallyEnabled() {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec,
      [],
      false);
  }

  getLog() {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec,
      [],
      false);
  }

  saveLog() {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec,
      [],
      false);
  }

  getPowerwashRequired() {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec,
      [],
      false);
  }

  launchDiagnostics() {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec,
      null,
      [],
      false);
  }

  endRma(shutdown_method) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec,
      [shutdown_method],
      false);
  }

  shutDownAfterHardwareError() {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec,
      null,
      [],
      false);
  }

  criticalErrorExitToLogin() {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec,
      [],
      false);
  }

  criticalErrorReboot() {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec,
      [],
      false);
  }

  get3pDiagnosticsProvider() {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec,
      [],
      false);
  }

  getInstallable3pDiagnosticsAppPath() {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec,
      [],
      false);
  }

  installLastFound3pDiagnosticsApp() {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec,
      [],
      false);
  }

  completeLast3pDiagnosticsInstallation(is_approved) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec,
      [is_approved],
      false);
  }

  show3pDiagnosticsApp() {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec,
      [],
      false);
  }

  observeError(observer) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeOsUpdateProgress(observer) {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeCalibrationProgress(observer) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeProvisioningProgress(observer) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeHardwareWriteProtectionState(observer) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec,
      null,
      [observer],
      false);
  }

  observePowerCableState(observer) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeExternalDiskState(observer) {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeHardwareVerificationStatus(observer) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeFinalizationStatus(observer) {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeRoFirmwareUpdateProgress(observer) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.shimless_rma.mojom.ShimlessRmaService.getRemote = function() {
  let remote = new ash.shimless_rma.mojom.ShimlessRmaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ShimlessRmaService',
    'context');
  return remote.$;
};

ash.shimless_rma.mojom.ShimlessRmaServiceReceiver = class {
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
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
    this.ordinalMap.set(29, 29); // Default ordinal 29 -> Index 29
    this.ordinalMap.set(30, 30); // Default ordinal 30 -> Index 30
    this.ordinalMap.set(31, 31); // Default ordinal 31 -> Index 31
    this.ordinalMap.set(32, 32); // Default ordinal 32 -> Index 32
    this.ordinalMap.set(33, 33); // Default ordinal 33 -> Index 33
    this.ordinalMap.set(34, 34); // Default ordinal 34 -> Index 34
    this.ordinalMap.set(35, 35); // Default ordinal 35 -> Index 35
    this.ordinalMap.set(36, 36); // Default ordinal 36 -> Index 36
    this.ordinalMap.set(37, 37); // Default ordinal 37 -> Index 37
    this.ordinalMap.set(38, 38); // Default ordinal 38 -> Index 38
    this.ordinalMap.set(39, 39); // Default ordinal 39 -> Index 39
    this.ordinalMap.set(40, 40); // Default ordinal 40 -> Index 40
    this.ordinalMap.set(41, 41); // Default ordinal 41 -> Index 41
    this.ordinalMap.set(42, 42); // Default ordinal 42 -> Index 42
    this.ordinalMap.set(43, 43); // Default ordinal 43 -> Index 43
    this.ordinalMap.set(44, 44); // Default ordinal 44 -> Index 44
    this.ordinalMap.set(45, 45); // Default ordinal 45 -> Index 45
    this.ordinalMap.set(46, 46); // Default ordinal 46 -> Index 46
    this.ordinalMap.set(47, 47); // Default ordinal 47 -> Index 47
    this.ordinalMap.set(48, 48); // Default ordinal 48 -> Index 48
    this.ordinalMap.set(49, 49); // Default ordinal 49 -> Index 49
    this.ordinalMap.set(50, 50); // Default ordinal 50 -> Index 50
    this.ordinalMap.set(51, 51); // Default ordinal 51 -> Index 51
    this.ordinalMap.set(52, 52); // Default ordinal 52 -> Index 52
    this.ordinalMap.set(53, 53); // Default ordinal 53 -> Index 53
    this.ordinalMap.set(54, 54); // Default ordinal 54 -> Index 54
    this.ordinalMap.set(55, 55); // Default ordinal 55 -> Index 55
    this.ordinalMap.set(56, 56); // Default ordinal 56 -> Index 56
    this.ordinalMap.set(57, 57); // Default ordinal 57 -> Index 57
    this.ordinalMap.set(58, 58); // Default ordinal 58 -> Index 58
    this.ordinalMap.set(59, 59); // Default ordinal 59 -> Index 59
    this.ordinalMap.set(60, 60); // Default ordinal 60 -> Index 60
    this.ordinalMap.set(61, 61); // Default ordinal 61 -> Index 61
    this.ordinalMap.set(62, 62); // Default ordinal 62 -> Index 62
    this.ordinalMap.set(63, 63); // Default ordinal 63 -> Index 63
    this.ordinalMap.set(64, 64); // Default ordinal 64 -> Index 64
    this.ordinalMap.set(65, 65); // Default ordinal 65 -> Index 65
    this.ordinalMap.set(66, 66); // Default ordinal 66 -> Index 66
    this.ordinalMap.set(67, 67); // Default ordinal 67 -> Index 67
    this.ordinalMap.set(68, 68); // Default ordinal 68 -> Index 68
    this.ordinalMap.set(69, 69); // Default ordinal 69 -> Index 69
    this.ordinalMap.set(70, 70); // Default ordinal 70 -> Index 70
    this.ordinalMap.set(71, 71); // Default ordinal 71 -> Index 71
    this.ordinalMap.set(72, 72); // Default ordinal 72 -> Index 72
    this.ordinalMap.set(73, 73); // Default ordinal 73 -> Index 73
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getCurrentState');
          const result = this.impl.getCurrentState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getStateProperties');
          const result = this.impl.getStateProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.transitionPreviousState');
          const result = this.impl.transitionPreviousState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.abortRma');
          const result = this.impl.abortRma();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.beginFinalization');
          const result = this.impl.beginFinalization();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.trackConfiguredNetworks');
          const result = this.impl.trackConfiguredNetworks();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.networkSelectionComplete');
          const result = this.impl.networkSelectionComplete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getCurrentOsVersion');
          const result = this.impl.getCurrentOsVersion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.checkForOsUpdates');
          const result = this.impl.checkForOsUpdates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateOs');
          const result = this.impl.updateOs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateOsSkipped');
          const result = this.impl.updateOsSkipped();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setSameOwner');
          const result = this.impl.setSameOwner();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setDifferentOwner');
          const result = this.impl.setDifferentOwner();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setWipeDevice');
          const result = this.impl.setWipeDevice(params.should_wipe_device);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setManuallyDisableWriteProtect');
          const result = this.impl.setManuallyDisableWriteProtect();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setRsuDisableWriteProtect');
          const result = this.impl.setRsuDisableWriteProtect();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getRsuDisableWriteProtectChallenge');
          const result = this.impl.getRsuDisableWriteProtectChallenge();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getRsuDisableWriteProtectHwid');
          const result = this.impl.getRsuDisableWriteProtectHwid();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getRsuDisableWriteProtectChallengeQrCode');
          const result = this.impl.getRsuDisableWriteProtectChallengeQrCode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setRsuDisableWriteProtectCode');
          const result = this.impl.setRsuDisableWriteProtectCode(params.code);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.writeProtectManuallyDisabled');
          const result = this.impl.writeProtectManuallyDisabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getWriteProtectDisableCompleteAction');
          const result = this.impl.getWriteProtectDisableCompleteAction();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.confirmManualWpDisableComplete');
          const result = this.impl.confirmManualWpDisableComplete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getComponentList');
          const result = this.impl.getComponentList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setComponentList');
          const result = this.impl.setComponentList(params.components);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.reworkMainboard');
          const result = this.impl.reworkMainboard();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.roFirmwareUpdateComplete');
          const result = this.impl.roFirmwareUpdateComplete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.shutdownForRestock');
          const result = this.impl.shutdownForRestock();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.continueFinalizationAfterRestock');
          const result = this.impl.continueFinalizationAfterRestock();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getRegionList');
          const result = this.impl.getRegionList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getSkuList');
          const result = this.impl.getSkuList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getCustomLabelList');
          const result = this.impl.getCustomLabelList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getSkuDescriptionList');
          const result = this.impl.getSkuDescriptionList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOriginalSerialNumber');
          const result = this.impl.getOriginalSerialNumber();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOriginalRegion');
          const result = this.impl.getOriginalRegion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOriginalSku');
          const result = this.impl.getOriginalSku();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOriginalCustomLabel');
          const result = this.impl.getOriginalCustomLabel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOriginalDramPartNumber');
          const result = this.impl.getOriginalDramPartNumber();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOriginalFeatureLevel');
          const result = this.impl.getOriginalFeatureLevel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setDeviceInformation');
          const result = this.impl.setDeviceInformation(params.serial_number, params.region_index, params.sku_index, params.custom_label_index, params.dram_part_number, params.is_chassis_branded, params.hw_compliance_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getCalibrationComponentList');
          const result = this.impl.getCalibrationComponentList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getCalibrationSetupInstructions');
          const result = this.impl.getCalibrationSetupInstructions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.startCalibration');
          const result = this.impl.startCalibration(params.components);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.runCalibrationStep');
          const result = this.impl.runCalibrationStep();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.continueCalibration');
          const result = this.impl.continueCalibration();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.calibrationComplete');
          const result = this.impl.calibrationComplete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.retryProvisioning');
          const result = this.impl.retryProvisioning();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.provisioningComplete');
          const result = this.impl.provisioningComplete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.retryFinalization');
          const result = this.impl.retryFinalization();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.finalizationComplete');
          const result = this.impl.finalizationComplete();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.writeProtectManuallyEnabled');
          const result = this.impl.writeProtectManuallyEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getLog');
          const result = this.impl.getLog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.saveLog');
          const result = this.impl.saveLog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getPowerwashRequired');
          const result = this.impl.getPowerwashRequired();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.launchDiagnostics');
          const result = this.impl.launchDiagnostics();
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.endRma');
          const result = this.impl.endRma(params.shutdown_method);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.shutDownAfterHardwareError');
          const result = this.impl.shutDownAfterHardwareError();
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.criticalErrorExitToLogin');
          const result = this.impl.criticalErrorExitToLogin();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.criticalErrorReboot');
          const result = this.impl.criticalErrorReboot();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.get3pDiagnosticsProvider');
          const result = this.impl.get3pDiagnosticsProvider();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getInstallable3pDiagnosticsAppPath');
          const result = this.impl.getInstallable3pDiagnosticsAppPath();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.installLastFound3pDiagnosticsApp');
          const result = this.impl.installLastFound3pDiagnosticsApp();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.completeLast3pDiagnosticsInstallation');
          const result = this.impl.completeLast3pDiagnosticsInstallation(params.is_approved);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.show3pDiagnosticsApp');
          const result = this.impl.show3pDiagnosticsApp();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeError');
          const result = this.impl.observeError(params.observer);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeOsUpdateProgress');
          const result = this.impl.observeOsUpdateProgress(params.observer);
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeCalibrationProgress');
          const result = this.impl.observeCalibrationProgress(params.observer);
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeProvisioningProgress');
          const result = this.impl.observeProvisioningProgress(params.observer);
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeHardwareWriteProtectionState');
          const result = this.impl.observeHardwareWriteProtectionState(params.observer);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observePowerCableState');
          const result = this.impl.observePowerCableState(params.observer);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeExternalDiskState');
          const result = this.impl.observeExternalDiskState(params.observer);
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeHardwareVerificationStatus');
          const result = this.impl.observeHardwareVerificationStatus(params.observer);
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeFinalizationStatus');
          const result = this.impl.observeFinalizationStatus(params.observer);
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeRoFirmwareUpdateProgress');
          const result = this.impl.observeRoFirmwareUpdateProgress(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shimless_rma.mojom.ShimlessRmaServiceReceiver = ash.shimless_rma.mojom.ShimlessRmaServiceReceiver;

ash.shimless_rma.mojom.ShimlessRmaServicePtr = ash.shimless_rma.mojom.ShimlessRmaServiceRemote;
ash.shimless_rma.mojom.ShimlessRmaServiceRequest = ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver;

