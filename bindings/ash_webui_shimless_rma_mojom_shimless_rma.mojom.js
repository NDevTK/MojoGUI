// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shimless_rma/mojom/shimless_rma.mojom
// Module: ash.shimless_rma.mojom

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
  onError(error) {
    return this.$.onError(error);
  }
};

ash.shimless_rma.mojom.ErrorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ErrorObserver', [
      { explicit: null },
    ]);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ErrorObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {}
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
  onOsUpdateProgressUpdated(operation, progress, update_error_code) {
    return this.$.onOsUpdateProgressUpdated(operation, progress, update_error_code);
  }
};

ash.shimless_rma.mojom.OsUpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OsUpdateObserver', [
      { explicit: null },
    ]);
  }

  onOsUpdateProgressUpdated(operation, progress, update_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('OsUpdateObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onOsUpdateProgressUpdated(params.operation, params.progress, params.update_error_code);
          break;
        }
      }
      } catch (err) {}
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
  onCalibrationUpdated(componentStatus) {
    return this.$.onCalibrationUpdated(componentStatus);
  }
  onCalibrationStepComplete(status) {
    return this.$.onCalibrationStepComplete(status);
  }
};

ash.shimless_rma.mojom.CalibrationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CalibrationObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCalibrationUpdated(componentStatus) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec,
      null,
      [componentStatus],
      false);
  }

  onCalibrationStepComplete(status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CalibrationObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onCalibrationUpdated(params.componentStatus);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onCalibrationStepComplete(params.status);
          break;
        }
      }
      } catch (err) {}
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
  onProvisioningUpdated(status, progress, error) {
    return this.$.onProvisioningUpdated(status, progress, error);
  }
};

ash.shimless_rma.mojom.ProvisioningObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProvisioningObserver', [
      { explicit: null },
    ]);
  }

  onProvisioningUpdated(status, progress, error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProvisioningObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onProvisioningUpdated(params.status, params.progress, params.error);
          break;
        }
      }
      } catch (err) {}
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
  onHardwareWriteProtectionStateChanged(enabled) {
    return this.$.onHardwareWriteProtectionStateChanged(enabled);
  }
};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HardwareWriteProtectionStateObserver', [
      { explicit: null },
    ]);
  }

  onHardwareWriteProtectionStateChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('HardwareWriteProtectionStateObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onHardwareWriteProtectionStateChanged(params.enabled);
          break;
        }
      }
      } catch (err) {}
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
  onPowerCableStateChanged(plugged_in) {
    return this.$.onPowerCableStateChanged(plugged_in);
  }
};

ash.shimless_rma.mojom.PowerCableStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PowerCableStateObserver', [
      { explicit: null },
    ]);
  }

  onPowerCableStateChanged(plugged_in) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PowerCableStateObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onPowerCableStateChanged(params.plugged_in);
          break;
        }
      }
      } catch (err) {}
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
  onExternalDiskStateChanged(detected) {
    return this.$.onExternalDiskStateChanged(detected);
  }
};

ash.shimless_rma.mojom.ExternalDiskStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalDiskStateObserver', [
      { explicit: null },
    ]);
  }

  onExternalDiskStateChanged(detected) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ExternalDiskStateObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onExternalDiskStateChanged(params.detected);
          break;
        }
      }
      } catch (err) {}
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
  onHardwareVerificationResult(result) {
    return this.$.onHardwareVerificationResult(result);
  }
};

ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HardwareVerificationStatusObserver', [
      { explicit: null },
    ]);
  }

  onHardwareVerificationResult(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('HardwareVerificationStatusObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec.$.structSpec);
          const result = this.impl.onHardwareVerificationResult(params.result);
          break;
        }
      }
      } catch (err) {}
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
  onFinalizationUpdated(status, progress, error) {
    return this.$.onFinalizationUpdated(status, progress, error);
  }
};

ash.shimless_rma.mojom.FinalizationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FinalizationObserver', [
      { explicit: null },
    ]);
  }

  onFinalizationUpdated(status, progress, error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FinalizationObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onFinalizationUpdated(params.status, params.progress, params.error);
          break;
        }
      }
      } catch (err) {}
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
  onUpdateRoFirmwareStatusChanged(status) {
    return this.$.onUpdateRoFirmwareStatusChanged(status);
  }
};

ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UpdateRoFirmwareObserver', [
      { explicit: null },
    ]);
  }

  onUpdateRoFirmwareStatusChanged(status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('UpdateRoFirmwareObserver', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onUpdateRoFirmwareStatusChanged(params.status);
          break;
        }
      }
      } catch (err) {}
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ErrorObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.OsUpdateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.CalibrationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ProvisioningObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.PowerCableStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ExternalDiskStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.FinalizationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote), null, false, 0, undefined),
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
  getCurrentState() {
    return this.$.getCurrentState();
  }
  getStateProperties() {
    return this.$.getStateProperties();
  }
  transitionPreviousState() {
    return this.$.transitionPreviousState();
  }
  abortRma() {
    return this.$.abortRma();
  }
  beginFinalization() {
    return this.$.beginFinalization();
  }
  trackConfiguredNetworks() {
    return this.$.trackConfiguredNetworks();
  }
  networkSelectionComplete() {
    return this.$.networkSelectionComplete();
  }
  getCurrentOsVersion() {
    return this.$.getCurrentOsVersion();
  }
  checkForOsUpdates() {
    return this.$.checkForOsUpdates();
  }
  updateOs() {
    return this.$.updateOs();
  }
  updateOsSkipped() {
    return this.$.updateOsSkipped();
  }
  setSameOwner() {
    return this.$.setSameOwner();
  }
  setDifferentOwner() {
    return this.$.setDifferentOwner();
  }
  setWipeDevice(should_wipe_device) {
    return this.$.setWipeDevice(should_wipe_device);
  }
  setManuallyDisableWriteProtect() {
    return this.$.setManuallyDisableWriteProtect();
  }
  setRsuDisableWriteProtect() {
    return this.$.setRsuDisableWriteProtect();
  }
  getRsuDisableWriteProtectChallenge() {
    return this.$.getRsuDisableWriteProtectChallenge();
  }
  getRsuDisableWriteProtectHwid() {
    return this.$.getRsuDisableWriteProtectHwid();
  }
  getRsuDisableWriteProtectChallengeQrCode() {
    return this.$.getRsuDisableWriteProtectChallengeQrCode();
  }
  setRsuDisableWriteProtectCode(code) {
    return this.$.setRsuDisableWriteProtectCode(code);
  }
  writeProtectManuallyDisabled() {
    return this.$.writeProtectManuallyDisabled();
  }
  getWriteProtectDisableCompleteAction() {
    return this.$.getWriteProtectDisableCompleteAction();
  }
  confirmManualWpDisableComplete() {
    return this.$.confirmManualWpDisableComplete();
  }
  getComponentList() {
    return this.$.getComponentList();
  }
  setComponentList(components) {
    return this.$.setComponentList(components);
  }
  reworkMainboard() {
    return this.$.reworkMainboard();
  }
  roFirmwareUpdateComplete() {
    return this.$.roFirmwareUpdateComplete();
  }
  shutdownForRestock() {
    return this.$.shutdownForRestock();
  }
  continueFinalizationAfterRestock() {
    return this.$.continueFinalizationAfterRestock();
  }
  getRegionList() {
    return this.$.getRegionList();
  }
  getSkuList() {
    return this.$.getSkuList();
  }
  getCustomLabelList() {
    return this.$.getCustomLabelList();
  }
  getSkuDescriptionList() {
    return this.$.getSkuDescriptionList();
  }
  getOriginalSerialNumber() {
    return this.$.getOriginalSerialNumber();
  }
  getOriginalRegion() {
    return this.$.getOriginalRegion();
  }
  getOriginalSku() {
    return this.$.getOriginalSku();
  }
  getOriginalCustomLabel() {
    return this.$.getOriginalCustomLabel();
  }
  getOriginalDramPartNumber() {
    return this.$.getOriginalDramPartNumber();
  }
  getOriginalFeatureLevel() {
    return this.$.getOriginalFeatureLevel();
  }
  setDeviceInformation(serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version) {
    return this.$.setDeviceInformation(serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version);
  }
  getCalibrationComponentList() {
    return this.$.getCalibrationComponentList();
  }
  getCalibrationSetupInstructions() {
    return this.$.getCalibrationSetupInstructions();
  }
  startCalibration(components) {
    return this.$.startCalibration(components);
  }
  runCalibrationStep() {
    return this.$.runCalibrationStep();
  }
  continueCalibration() {
    return this.$.continueCalibration();
  }
  calibrationComplete() {
    return this.$.calibrationComplete();
  }
  retryProvisioning() {
    return this.$.retryProvisioning();
  }
  provisioningComplete() {
    return this.$.provisioningComplete();
  }
  retryFinalization() {
    return this.$.retryFinalization();
  }
  finalizationComplete() {
    return this.$.finalizationComplete();
  }
  writeProtectManuallyEnabled() {
    return this.$.writeProtectManuallyEnabled();
  }
  getLog() {
    return this.$.getLog();
  }
  saveLog() {
    return this.$.saveLog();
  }
  getPowerwashRequired() {
    return this.$.getPowerwashRequired();
  }
  launchDiagnostics() {
    return this.$.launchDiagnostics();
  }
  endRma(shutdown_method) {
    return this.$.endRma(shutdown_method);
  }
  shutDownAfterHardwareError() {
    return this.$.shutDownAfterHardwareError();
  }
  criticalErrorExitToLogin() {
    return this.$.criticalErrorExitToLogin();
  }
  criticalErrorReboot() {
    return this.$.criticalErrorReboot();
  }
  get3pDiagnosticsProvider() {
    return this.$.get3pDiagnosticsProvider();
  }
  getInstallable3pDiagnosticsAppPath() {
    return this.$.getInstallable3pDiagnosticsAppPath();
  }
  installLastFound3pDiagnosticsApp() {
    return this.$.installLastFound3pDiagnosticsApp();
  }
  completeLast3pDiagnosticsInstallation(is_approved) {
    return this.$.completeLast3pDiagnosticsInstallation(is_approved);
  }
  show3pDiagnosticsApp() {
    return this.$.show3pDiagnosticsApp();
  }
  observeError(observer) {
    return this.$.observeError(observer);
  }
  observeOsUpdateProgress(observer) {
    return this.$.observeOsUpdateProgress(observer);
  }
  observeCalibrationProgress(observer) {
    return this.$.observeCalibrationProgress(observer);
  }
  observeProvisioningProgress(observer) {
    return this.$.observeProvisioningProgress(observer);
  }
  observeHardwareWriteProtectionState(observer) {
    return this.$.observeHardwareWriteProtectionState(observer);
  }
  observePowerCableState(observer) {
    return this.$.observePowerCableState(observer);
  }
  observeExternalDiskState(observer) {
    return this.$.observeExternalDiskState(observer);
  }
  observeHardwareVerificationStatus(observer) {
    return this.$.observeHardwareVerificationStatus(observer);
  }
  observeFinalizationStatus(observer) {
    return this.$.observeFinalizationStatus(observer);
  }
  observeRoFirmwareUpdateProgress(observer) {
    return this.$.observeRoFirmwareUpdateProgress(observer);
  }
};

ash.shimless_rma.mojom.ShimlessRmaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShimlessRmaService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getCurrentState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec,
      [],
      false);
  }

  getStateProperties() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec,
      [],
      false);
  }

  transitionPreviousState() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec,
      [],
      false);
  }

  abortRma() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec,
      [],
      false);
  }

  beginFinalization() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec,
      [],
      false);
  }

  trackConfiguredNetworks() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec,
      null,
      [],
      false);
  }

  networkSelectionComplete() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec,
      [],
      false);
  }

  getCurrentOsVersion() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec,
      [],
      false);
  }

  checkForOsUpdates() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec,
      [],
      false);
  }

  updateOs() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec,
      [],
      false);
  }

  updateOsSkipped() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec,
      [],
      false);
  }

  setSameOwner() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec,
      [],
      false);
  }

  setDifferentOwner() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec,
      [],
      false);
  }

  setWipeDevice(should_wipe_device) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec,
      [should_wipe_device],
      false);
  }

  setManuallyDisableWriteProtect() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec,
      [],
      false);
  }

  setRsuDisableWriteProtect() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectChallenge() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectHwid() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectChallengeQrCode() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec,
      [],
      false);
  }

  setRsuDisableWriteProtectCode(code) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec,
      [code],
      false);
  }

  writeProtectManuallyDisabled() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec,
      [],
      false);
  }

  getWriteProtectDisableCompleteAction() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec,
      [],
      false);
  }

  confirmManualWpDisableComplete() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec,
      [],
      false);
  }

  getComponentList() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec,
      [],
      false);
  }

  setComponentList(components) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec,
      [components],
      false);
  }

  reworkMainboard() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec,
      [],
      false);
  }

  roFirmwareUpdateComplete() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec,
      [],
      false);
  }

  shutdownForRestock() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec,
      [],
      false);
  }

  continueFinalizationAfterRestock() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec,
      [],
      false);
  }

  getRegionList() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec,
      [],
      false);
  }

  getSkuList() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec,
      [],
      false);
  }

  getCustomLabelList() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec,
      [],
      false);
  }

  getSkuDescriptionList() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalSerialNumber() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalRegion() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalSku() {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalCustomLabel() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalDramPartNumber() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalFeatureLevel() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec,
      [],
      false);
  }

  setDeviceInformation(serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec,
      [serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version],
      false);
  }

  getCalibrationComponentList() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec,
      [],
      false);
  }

  getCalibrationSetupInstructions() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec,
      [],
      false);
  }

  startCalibration(components) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec,
      [components],
      false);
  }

  runCalibrationStep() {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec,
      [],
      false);
  }

  continueCalibration() {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec,
      [],
      false);
  }

  calibrationComplete() {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec,
      [],
      false);
  }

  retryProvisioning() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec,
      [],
      false);
  }

  provisioningComplete() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec,
      [],
      false);
  }

  retryFinalization() {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec,
      [],
      false);
  }

  finalizationComplete() {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec,
      [],
      false);
  }

  writeProtectManuallyEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec,
      [],
      false);
  }

  getLog() {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec,
      [],
      false);
  }

  saveLog() {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec,
      [],
      false);
  }

  getPowerwashRequired() {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec,
      [],
      false);
  }

  launchDiagnostics() {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec,
      null,
      [],
      false);
  }

  endRma(shutdown_method) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec,
      [shutdown_method],
      false);
  }

  shutDownAfterHardwareError() {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec,
      null,
      [],
      false);
  }

  criticalErrorExitToLogin() {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec,
      [],
      false);
  }

  criticalErrorReboot() {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec,
      [],
      false);
  }

  get3pDiagnosticsProvider() {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec,
      [],
      false);
  }

  getInstallable3pDiagnosticsAppPath() {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec,
      [],
      false);
  }

  installLastFound3pDiagnosticsApp() {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec,
      [],
      false);
  }

  completeLast3pDiagnosticsInstallation(is_approved) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec,
      [is_approved],
      false);
  }

  show3pDiagnosticsApp() {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec,
      [],
      false);
  }

  observeError(observer) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeOsUpdateProgress(observer) {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeCalibrationProgress(observer) {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeProvisioningProgress(observer) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeHardwareWriteProtectionState(observer) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec,
      null,
      [observer],
      false);
  }

  observePowerCableState(observer) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeExternalDiskState(observer) {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeHardwareVerificationStatus(observer) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeFinalizationStatus(observer) {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeRoFirmwareUpdateProgress(observer) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ShimlessRmaService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec);
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec);
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec);
             this.mapOrdinal(header.ordinal, 58);
             dispatchId = 58;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 59);
             dispatchId = 59;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec);
             this.mapOrdinal(header.ordinal, 60);
             dispatchId = 60;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 61);
             dispatchId = 61;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 62);
             dispatchId = 62;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 63);
             dispatchId = 63;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 64);
             dispatchId = 64;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 65);
             dispatchId = 65;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 66);
             dispatchId = 66;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 67);
             dispatchId = 67;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 68);
             dispatchId = 68;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 69);
             dispatchId = 69;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 70);
             dispatchId = 70;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 71);
             dispatchId = 71;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 72);
             dispatchId = 72;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 73);
             dispatchId = 73;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec.$.structSpec);
          const result = this.impl.trackConfiguredNetworks();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec.$.structSpec);
          const result = this.impl.launchDiagnostics();
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec.$.structSpec);
          const result = this.impl.shutDownAfterHardwareError();
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec.$.structSpec);
          const result = this.impl.observeError(params.observer);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec.$.structSpec);
          const result = this.impl.observeOsUpdateProgress(params.observer);
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec.$.structSpec);
          const result = this.impl.observeCalibrationProgress(params.observer);
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec.$.structSpec);
          const result = this.impl.observeProvisioningProgress(params.observer);
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec.$.structSpec);
          const result = this.impl.observeHardwareWriteProtectionState(params.observer);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec.$.structSpec);
          const result = this.impl.observePowerCableState(params.observer);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec.$.structSpec);
          const result = this.impl.observeExternalDiskState(params.observer);
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec.$.structSpec);
          const result = this.impl.observeHardwareVerificationStatus(params.observer);
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec.$.structSpec);
          const result = this.impl.observeFinalizationStatus(params.observer);
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec.$.structSpec);
          const result = this.impl.observeRoFirmwareUpdateProgress(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.shimless_rma.mojom.ShimlessRmaServiceReceiver = ash.shimless_rma.mojom.ShimlessRmaServiceReceiver;

ash.shimless_rma.mojom.ShimlessRmaServicePtr = ash.shimless_rma.mojom.ShimlessRmaServiceRemote;
ash.shimless_rma.mojom.ShimlessRmaServiceRequest = ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver;

