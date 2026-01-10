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
ash.shimless_rma.mojom.StateSpec = { $: mojo.internal.Enum() };

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
ash.shimless_rma.mojom.RmadErrorCodeSpec = { $: mojo.internal.Enum() };

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
ash.shimless_rma.mojom.OsUpdateOperationSpec = { $: mojo.internal.Enum() };

// Enum: UpdateErrorCode
ash.shimless_rma.mojom.UpdateErrorCode = {
  kSuccess: 0,
  kDownloadError: 1,
  kOtherError: 2,
};
ash.shimless_rma.mojom.UpdateErrorCodeSpec = { $: mojo.internal.Enum() };

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
ash.shimless_rma.mojom.ComponentTypeSpec = { $: mojo.internal.Enum() };

// Enum: ComponentRepairStatus
ash.shimless_rma.mojom.ComponentRepairStatus = {
  kRepairUnknown: 0,
  kOriginal: 1,
  kReplaced: 2,
  kMissing: 3,
};
ash.shimless_rma.mojom.ComponentRepairStatusSpec = { $: mojo.internal.Enum() };

// Enum: WriteProtectDisableCompleteAction
ash.shimless_rma.mojom.WriteProtectDisableCompleteAction = {
  kUnknown: 0,
  kSkippedAssembleDevice: 1,
  kCompleteAssembleDevice: 2,
  kCompleteKeepDeviceOpen: 3,
  kCompleteNoOp: 4,
};
ash.shimless_rma.mojom.WriteProtectDisableCompleteActionSpec = { $: mojo.internal.Enum() };

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
ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec = { $: mojo.internal.Enum() };

// Enum: CalibrationSetupInstruction
ash.shimless_rma.mojom.CalibrationSetupInstruction = {
  kCalibrationInstructionUnknown: 0,
  kCalibrationInstructionPlaceBaseOnFlatSurface: 1,
  kCalibrationInstructionPlaceLidOnFlatSurface: 2,
};
ash.shimless_rma.mojom.CalibrationSetupInstructionSpec = { $: mojo.internal.Enum() };

// Enum: CalibrationOverallStatus
ash.shimless_rma.mojom.CalibrationOverallStatus = {
  kCalibrationOverallComplete: 0,
  kCalibrationOverallCurrentRoundComplete: 1,
  kCalibrationOverallCurrentRoundFailed: 2,
  kCalibrationOverallInitializationFailed: 3,
};
ash.shimless_rma.mojom.CalibrationOverallStatusSpec = { $: mojo.internal.Enum() };

// Enum: CalibrationStatus
ash.shimless_rma.mojom.CalibrationStatus = {
  kCalibrationWaiting: 0,
  kCalibrationInProgress: 1,
  kCalibrationComplete: 2,
  kCalibrationFailed: 3,
  kCalibrationSkip: 4,
};
ash.shimless_rma.mojom.CalibrationStatusSpec = { $: mojo.internal.Enum() };

// Enum: ProvisioningStatus
ash.shimless_rma.mojom.ProvisioningStatus = {
  kInProgress: 0,
  kComplete: 1,
  kFailedBlocking: 2,
  kFailedNonBlocking: 3,
};
ash.shimless_rma.mojom.ProvisioningStatusSpec = { $: mojo.internal.Enum() };

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
ash.shimless_rma.mojom.ProvisioningErrorSpec = { $: mojo.internal.Enum() };

// Enum: FinalizationStatus
ash.shimless_rma.mojom.FinalizationStatus = {
  kInProgress: 0,
  kComplete: 1,
  kFailedBlocking: 2,
  kFailedNonBlocking: 3,
};
ash.shimless_rma.mojom.FinalizationStatusSpec = { $: mojo.internal.Enum() };

// Enum: FinalizationError
ash.shimless_rma.mojom.FinalizationError = {
  kUnknown: 0,
  kInternal: 1,
  kCannotEnableHardwareWp: 2,
  kCannotEnableSoftwareWp: 3,
  kCr50: 4,
  kGbb: 5,
};
ash.shimless_rma.mojom.FinalizationErrorSpec = { $: mojo.internal.Enum() };

// Enum: ShutdownMethod
ash.shimless_rma.mojom.ShutdownMethod = {
  kUnknown: 0,
  kReboot: 1,
  kShutdown: 2,
  kBatteryCutoff: 3,
};
ash.shimless_rma.mojom.ShutdownMethodSpec = { $: mojo.internal.Enum() };

// Enum: FeatureLevel
ash.shimless_rma.mojom.FeatureLevel = {
  kRmadFeatureLevelUnsupported: 0,
  kRmadFeatureLevelUnknown: 1,
  kRmadFeatureLevel0: 2,
  kRmadFeatureLevel1: 3,
};
ash.shimless_rma.mojom.FeatureLevelSpec = { $: mojo.internal.Enum() };

// Enum: Show3pDiagnosticsAppResult
ash.shimless_rma.mojom.Show3pDiagnosticsAppResult = {
  kOk: 0,
  kAppNotInstalled: 1,
  kFailedToLoad: 2,
};
ash.shimless_rma.mojom.Show3pDiagnosticsAppResultSpec = { $: mojo.internal.Enum() };

// Enum: StatePropertyError
ash.shimless_rma.mojom.StatePropertyError = {
  kUnsupported: 0,
};
ash.shimless_rma.mojom.StatePropertyErrorSpec = { $: mojo.internal.Enum() };

// Union: HardwareVerificationResult
ash.shimless_rma.mojom.HardwareVerificationResultSpec = { $: mojo.internal.Union(
    'ash.shimless_rma.mojom.HardwareVerificationResult', {
      'pass_result': {
        'ordinal': 0,
        'type': ash.shimless_rma.mojom.PassHardwareVerificationResultSpec,
      }},
      'fail_result': {
        'ordinal': 1,
        'type': ash.shimless_rma.mojom.FailHardwareVerificationResultSpec,
      }},
      'skip_result': {
        'ordinal': 2,
        'type': ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec,
      }},
    })
};

// Union: StateProperty
ash.shimless_rma.mojom.StatePropertySpec = { $: mojo.internal.Union(
    'ash.shimless_rma.mojom.StateProperty', {
      'update_device_info_state_property': {
        'ordinal': 0,
        'type': ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec,
      }},
    })
};

// Union: StatePropertyResult
ash.shimless_rma.mojom.StatePropertyResultSpec = { $: mojo.internal.Union(
    'ash.shimless_rma.mojom.StatePropertyResult', {
      'property': {
        'ordinal': 0,
        'type': ash.shimless_rma.mojom.StatePropertySpec,
      }},
      'error': {
        'ordinal': 1,
        'type': ash.shimless_rma.mojom.StatePropertyErrorSpec,
      }},
    })
};

// Struct: StateResult
ash.shimless_rma.mojom.StateResultSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.StateResult',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateSpec, nullable: false, minVersion: 0 },
        { name: 'can_exit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_go_back', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 4, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: QrCode
ash.shimless_rma.mojom.QrCodeSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.QrCode',
      packedSize: 24,
      fields: [
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Component
ash.shimless_rma.mojom.ComponentSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.Component',
      packedSize: 24,
      fields: [
        { name: 'component', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.ComponentTypeSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 12, packedBitOffset: 0, type: ash.shimless_rma.mojom.ComponentRepairStatusSpec, nullable: false, minVersion: 0 },
        { name: 'identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CalibrationComponentStatus
ash.shimless_rma.mojom.CalibrationComponentStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.CalibrationComponentStatus',
      packedSize: 24,
      fields: [
        { name: 'component', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.ComponentTypeSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 12, packedBitOffset: 0, type: ash.shimless_rma.mojom.CalibrationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Shimless3pDiagnosticsAppInfo
ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfo',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permission_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PassHardwareVerificationResult
ash.shimless_rma.mojom.PassHardwareVerificationResultSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.PassHardwareVerificationResult',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: FailHardwareVerificationResult
ash.shimless_rma.mojom.FailHardwareVerificationResultSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.FailHardwareVerificationResult',
      packedSize: 16,
      fields: [
        { name: 'component_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SkipHardwareVerificationResult
ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.SkipHardwareVerificationResult',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: UpdateDeviceInfoStateProperty
ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.UpdateDeviceInfoStateProperty',
      packedSize: 24,
      fields: [
        { name: 'serial_number_modifiable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'region_modifiable', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sku_modifiable', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'custom_label_modifiable', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dram_part_number_modifiable', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'feature_level_modifiable', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'customized_serial_number_naming', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'hide_google_sku', packedOffset: 8, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ErrorObserver
ash.shimless_rma.mojom.ErrorObserver = {};

ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ErrorObserver_OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [error]);
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

// ParamsSpec for OnError
ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ErrorObserver.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.ErrorObserverPtr = ash.shimless_rma.mojom.ErrorObserverRemote;
ash.shimless_rma.mojom.ErrorObserverRequest = ash.shimless_rma.mojom.ErrorObserverPendingReceiver;


// Interface: OsUpdateObserver
ash.shimless_rma.mojom.OsUpdateObserver = {};

ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.OsUpdateOperationSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'update_error_code', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.UpdateErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [operation, progress, update_error_code]);
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

// ParamsSpec for OnOsUpdateProgressUpdated
ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.OsUpdateObserver.OnOsUpdateProgressUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.OsUpdateOperationSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'update_error_code', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.UpdateErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.OsUpdateObserverPtr = ash.shimless_rma.mojom.OsUpdateObserverRemote;
ash.shimless_rma.mojom.OsUpdateObserverRequest = ash.shimless_rma.mojom.OsUpdateObserverPendingReceiver;


// Interface: CalibrationObserver
ash.shimless_rma.mojom.CalibrationObserver = {};

ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'componentStatus', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.CalibrationComponentStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.CalibrationOverallStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [componentStatus]);
  }

  onCalibrationStepComplete(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec,
      null,
      [status]);
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

// ParamsSpec for OnCalibrationUpdated
ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.CalibrationObserver.OnCalibrationUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'componentStatus', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.CalibrationComponentStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCalibrationStepComplete
ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.CalibrationObserver.OnCalibrationStepComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.CalibrationOverallStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.CalibrationObserverPtr = ash.shimless_rma.mojom.CalibrationObserverRemote;
ash.shimless_rma.mojom.CalibrationObserverRequest = ash.shimless_rma.mojom.CalibrationObserverPendingReceiver;


// Interface: ProvisioningObserver
ash.shimless_rma.mojom.ProvisioningObserver = {};

ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.ProvisioningStatusSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.ProvisioningErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [status, progress, error]);
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

// ParamsSpec for OnProvisioningUpdated
ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ProvisioningObserver.OnProvisioningUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.ProvisioningStatusSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.ProvisioningErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.ProvisioningObserverPtr = ash.shimless_rma.mojom.ProvisioningObserverRemote;
ash.shimless_rma.mojom.ProvisioningObserverRequest = ash.shimless_rma.mojom.ProvisioningObserverPendingReceiver;


// Interface: HardwareWriteProtectionStateObserver
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver = {};

ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [enabled]);
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

// ParamsSpec for OnHardwareWriteProtectionStateChanged
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver.OnHardwareWriteProtectionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPtr = ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote;
ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRequest = ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPendingReceiver;


// Interface: PowerCableStateObserver
ash.shimless_rma.mojom.PowerCableStateObserver = {};

ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'plugged_in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [plugged_in]);
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

// ParamsSpec for OnPowerCableStateChanged
ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.PowerCableStateObserver.OnPowerCableStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'plugged_in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.PowerCableStateObserverPtr = ash.shimless_rma.mojom.PowerCableStateObserverRemote;
ash.shimless_rma.mojom.PowerCableStateObserverRequest = ash.shimless_rma.mojom.PowerCableStateObserverPendingReceiver;


// Interface: ExternalDiskStateObserver
ash.shimless_rma.mojom.ExternalDiskStateObserver = {};

ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'detected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [detected]);
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

// ParamsSpec for OnExternalDiskStateChanged
ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ExternalDiskStateObserver.OnExternalDiskStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'detected', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.ExternalDiskStateObserverPtr = ash.shimless_rma.mojom.ExternalDiskStateObserverRemote;
ash.shimless_rma.mojom.ExternalDiskStateObserverRequest = ash.shimless_rma.mojom.ExternalDiskStateObserverPendingReceiver;


// Interface: HardwareVerificationStatusObserver
ash.shimless_rma.mojom.HardwareVerificationStatusObserver = {};

ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.HardwareVerificationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [result]);
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

// ParamsSpec for OnHardwareVerificationResult
ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver.OnHardwareVerificationResult_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.HardwareVerificationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.HardwareVerificationStatusObserverPtr = ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote;
ash.shimless_rma.mojom.HardwareVerificationStatusObserverRequest = ash.shimless_rma.mojom.HardwareVerificationStatusObserverPendingReceiver;


// Interface: FinalizationObserver
ash.shimless_rma.mojom.FinalizationObserver = {};

ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.FinalizationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.FinalizationErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [status, progress, error]);
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

// ParamsSpec for OnFinalizationUpdated
ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.FinalizationObserver.OnFinalizationUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.FinalizationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.FinalizationErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.FinalizationObserverPtr = ash.shimless_rma.mojom.FinalizationObserverRemote;
ash.shimless_rma.mojom.FinalizationObserverRequest = ash.shimless_rma.mojom.FinalizationObserverPendingReceiver;


// Interface: UpdateRoFirmwareObserver
ash.shimless_rma.mojom.UpdateRoFirmwareObserver = {};

ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [status]);
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

// ParamsSpec for OnUpdateRoFirmwareStatusChanged
ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver.OnUpdateRoFirmwareStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.UpdateRoFirmwareObserverPtr = ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote;
ash.shimless_rma.mojom.UpdateRoFirmwareObserverRequest = ash.shimless_rma.mojom.UpdateRoFirmwareObserverPendingReceiver;


// Interface: ShimlessRmaService
ash.shimless_rma.mojom.ShimlessRmaService = {};

ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'should_wipe_device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_Params',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_Params',
      packedSize: 16,
      fields: [
        { name: 'components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.shimless_rma.mojom.ComponentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_Params',
      packedSize: 48,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'region_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sku_index', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'custom_label_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'dram_part_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_chassis_branded', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hw_compliance_version', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_Params',
      packedSize: 16,
      fields: [
        { name: 'components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.shimless_rma.mojom.CalibrationComponentStatusSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetLog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_EndRma_Params',
      packedSize: 16,
      fields: [
        { name: 'shutdown_method', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.ShutdownMethodSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_Params',
      packedSize: 16,
      fields: [
        { name: 'is_approved', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ErrorObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.OsUpdateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.CalibrationObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ProvisioningObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.PowerCableStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ExternalDiskStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.FinalizationObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      []);
  }

  getStateProperties() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec,
      []);
  }

  transitionPreviousState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec,
      []);
  }

  abortRma() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec,
      []);
  }

  beginFinalization() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec,
      []);
  }

  trackConfiguredNetworks() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec,
      null,
      []);
  }

  networkSelectionComplete() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec,
      []);
  }

  getCurrentOsVersion() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec,
      []);
  }

  checkForOsUpdates() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec,
      []);
  }

  updateOs() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec,
      []);
  }

  updateOsSkipped() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec,
      []);
  }

  setSameOwner() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec,
      []);
  }

  setDifferentOwner() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec,
      []);
  }

  setWipeDevice(should_wipe_device) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec,
      [should_wipe_device]);
  }

  setManuallyDisableWriteProtect() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec,
      []);
  }

  setRsuDisableWriteProtect() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec,
      []);
  }

  getRsuDisableWriteProtectChallenge() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec,
      []);
  }

  getRsuDisableWriteProtectHwid() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec,
      []);
  }

  getRsuDisableWriteProtectChallengeQrCode() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec,
      []);
  }

  setRsuDisableWriteProtectCode(code) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec,
      [code]);
  }

  writeProtectManuallyDisabled() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec,
      []);
  }

  getWriteProtectDisableCompleteAction() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec,
      []);
  }

  confirmManualWpDisableComplete() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec,
      []);
  }

  getComponentList() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec,
      []);
  }

  setComponentList(components) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec,
      [components]);
  }

  reworkMainboard() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec,
      []);
  }

  roFirmwareUpdateComplete() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec,
      []);
  }

  shutdownForRestock() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec,
      []);
  }

  continueFinalizationAfterRestock() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec,
      []);
  }

  getRegionList() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec,
      []);
  }

  getSkuList() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec,
      []);
  }

  getCustomLabelList() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec,
      []);
  }

  getSkuDescriptionList() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec,
      []);
  }

  getOriginalSerialNumber() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec,
      []);
  }

  getOriginalRegion() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec,
      []);
  }

  getOriginalSku() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec,
      []);
  }

  getOriginalCustomLabel() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec,
      []);
  }

  getOriginalDramPartNumber() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec,
      []);
  }

  getOriginalFeatureLevel() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec,
      []);
  }

  setDeviceInformation(serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec,
      [serial_number, region_index, sku_index, custom_label_index, dram_part_number, is_chassis_branded, hw_compliance_version]);
  }

  getCalibrationComponentList() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec,
      []);
  }

  getCalibrationSetupInstructions() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec,
      []);
  }

  startCalibration(components) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec,
      [components]);
  }

  runCalibrationStep() {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec,
      []);
  }

  continueCalibration() {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec,
      []);
  }

  calibrationComplete() {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec,
      []);
  }

  retryProvisioning() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec,
      []);
  }

  provisioningComplete() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec,
      []);
  }

  retryFinalization() {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec,
      []);
  }

  finalizationComplete() {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec,
      []);
  }

  writeProtectManuallyEnabled() {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec,
      []);
  }

  getLog() {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec,
      []);
  }

  saveLog() {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec,
      []);
  }

  getPowerwashRequired() {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec,
      []);
  }

  launchDiagnostics() {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec,
      null,
      []);
  }

  endRma(shutdown_method) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec,
      [shutdown_method]);
  }

  shutDownAfterHardwareError() {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec,
      null,
      []);
  }

  criticalErrorExitToLogin() {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec,
      []);
  }

  criticalErrorReboot() {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec,
      []);
  }

  get3pDiagnosticsProvider() {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec,
      []);
  }

  getInstallable3pDiagnosticsAppPath() {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec,
      []);
  }

  installLastFound3pDiagnosticsApp() {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec,
      []);
  }

  completeLast3pDiagnosticsInstallation(is_approved) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec,
      null,
      [is_approved]);
  }

  show3pDiagnosticsApp() {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec,
      ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec,
      []);
  }

  observeError(observer) {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec,
      null,
      [observer]);
  }

  observeOsUpdateProgress(observer) {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec,
      null,
      [observer]);
  }

  observeCalibrationProgress(observer) {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec,
      null,
      [observer]);
  }

  observeProvisioningProgress(observer) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec,
      null,
      [observer]);
  }

  observeHardwareWriteProtectionState(observer) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec,
      null,
      [observer]);
  }

  observePowerCableState(observer) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec,
      null,
      [observer]);
  }

  observeExternalDiskState(observer) {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec,
      null,
      [observer]);
  }

  observeHardwareVerificationStatus(observer) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec,
      null,
      [observer]);
  }

  observeFinalizationStatus(observer) {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec,
      null,
      [observer]);
  }

  observeRoFirmwareUpdateProgress(observer) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for GetCurrentState
ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCurrentState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCurrentState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStateProperties
ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetStateProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetStateProperties_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'state_property_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StatePropertyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for TransitionPreviousState
ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.TransitionPreviousState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.TransitionPreviousState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AbortRma
ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.AbortRma_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.AbortRma_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BeginFinalization
ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.BeginFinalization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.BeginFinalization_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TrackConfiguredNetworks
ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.TrackConfiguredNetworks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NetworkSelectionComplete
ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.NetworkSelectionComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.NetworkSelectionComplete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCurrentOsVersion
ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCurrentOsVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCurrentOsVersion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckForOsUpdates
ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CheckForOsUpdates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CheckForOsUpdates_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'update_available', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateOs
ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.UpdateOs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.UpdateOs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'update_started', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateOsSkipped
ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.UpdateOsSkipped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.UpdateOsSkipped_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSameOwner
ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetSameOwner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetSameOwner_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDifferentOwner
ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetDifferentOwner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetDifferentOwner_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWipeDevice
ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetWipeDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'should_wipe_device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetWipeDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetManuallyDisableWriteProtect
ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetManuallyDisableWriteProtect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetManuallyDisableWriteProtect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetRsuDisableWriteProtect
ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetRsuDisableWriteProtect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetRsuDisableWriteProtect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRsuDisableWriteProtectChallenge
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRsuDisableWriteProtectChallenge_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRsuDisableWriteProtectChallenge_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRsuDisableWriteProtectHwid
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRsuDisableWriteProtectHwid_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRsuDisableWriteProtectHwid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hwid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRsuDisableWriteProtectChallengeQrCode
ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRsuDisableWriteProtectChallengeQrCode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRsuDisableWriteProtectChallengeQrCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'qr_code_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetRsuDisableWriteProtectCode
ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetRsuDisableWriteProtectCode_Params',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetRsuDisableWriteProtectCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteProtectManuallyDisabled
ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.WriteProtectManuallyDisabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.WriteProtectManuallyDisabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetWriteProtectDisableCompleteAction
ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetWriteProtectDisableCompleteAction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetWriteProtectDisableCompleteAction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.WriteProtectDisableCompleteActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConfirmManualWpDisableComplete
ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ConfirmManualWpDisableComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ConfirmManualWpDisableComplete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetComponentList
ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetComponentList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetComponentList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.shimless_rma.mojom.ComponentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetComponentList
ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetComponentList_Params',
      packedSize: 16,
      fields: [
        { name: 'components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.shimless_rma.mojom.ComponentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetComponentList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReworkMainboard
ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ReworkMainboard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ReworkMainboard_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RoFirmwareUpdateComplete
ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RoFirmwareUpdateComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RoFirmwareUpdateComplete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShutdownForRestock
ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ShutdownForRestock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ShutdownForRestock_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ContinueFinalizationAfterRestock
ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ContinueFinalizationAfterRestock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ContinueFinalizationAfterRestock_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRegionList
ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRegionList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetRegionList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'regions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSkuList
ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetSkuList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetSkuList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'skus', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCustomLabelList
ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCustomLabelList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCustomLabelList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'custom_labels', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSkuDescriptionList
ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetSkuDescriptionList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetSkuDescriptionList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sku_descriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOriginalSerialNumber
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalSerialNumber_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalSerialNumber_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOriginalRegion
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalRegion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalRegion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'region_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOriginalSku
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalSku_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalSku_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sku_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOriginalCustomLabel
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalCustomLabel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalCustomLabel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'custom_label_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOriginalDramPartNumber
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalDramPartNumber_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalDramPartNumber_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dram_part_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOriginalFeatureLevel
ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalFeatureLevel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetOriginalFeatureLevel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'original_feature_level', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.FeatureLevelSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeviceInformation
ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetDeviceInformation_Params',
      packedSize: 48,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'region_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sku_index', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'custom_label_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'dram_part_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_chassis_branded', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hw_compliance_version', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SetDeviceInformation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCalibrationComponentList
ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCalibrationComponentList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCalibrationComponentList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.shimless_rma.mojom.CalibrationComponentStatusSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCalibrationSetupInstructions
ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCalibrationSetupInstructions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetCalibrationSetupInstructions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'instructions', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.CalibrationSetupInstructionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartCalibration
ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.StartCalibration_Params',
      packedSize: 16,
      fields: [
        { name: 'components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.shimless_rma.mojom.CalibrationComponentStatusSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.StartCalibration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunCalibrationStep
ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RunCalibrationStep_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RunCalibrationStep_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ContinueCalibration
ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ContinueCalibration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ContinueCalibration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CalibrationComplete
ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CalibrationComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CalibrationComplete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RetryProvisioning
ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RetryProvisioning_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RetryProvisioning_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProvisioningComplete
ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ProvisioningComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ProvisioningComplete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RetryFinalization
ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RetryFinalization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.RetryFinalization_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FinalizationComplete
ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.FinalizationComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.FinalizationComplete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteProtectManuallyEnabled
ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.WriteProtectManuallyEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.WriteProtectManuallyEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLog
ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetLog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetLog_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'log', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SaveLog
ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SaveLog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.SaveLog_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'save_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetPowerwashRequired
ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetPowerwashRequired_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetPowerwashRequired_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'powerwash_required', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LaunchDiagnostics
ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.LaunchDiagnostics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EndRma
ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.EndRma_Params',
      packedSize: 16,
      fields: [
        { name: 'shutdown_method', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.ShutdownMethodSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.EndRma_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state_result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.StateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShutDownAfterHardwareError
ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ShutDownAfterHardwareError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CriticalErrorExitToLogin
ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CriticalErrorExitToLogin_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CriticalErrorExitToLogin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CriticalErrorReboot
ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CriticalErrorReboot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CriticalErrorReboot_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.RmadErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Get3pDiagnosticsProvider
ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.Get3pDiagnosticsProvider_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.Get3pDiagnosticsProvider_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetInstallable3pDiagnosticsAppPath
ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetInstallable3pDiagnosticsAppPath_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.GetInstallable3pDiagnosticsAppPath_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallLastFound3pDiagnosticsApp
ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.InstallLastFound3pDiagnosticsApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.InstallLastFound3pDiagnosticsApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CompleteLast3pDiagnosticsInstallation
ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.CompleteLast3pDiagnosticsInstallation_Params',
      packedSize: 16,
      fields: [
        { name: 'is_approved', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Show3pDiagnosticsApp
ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.Show3pDiagnosticsApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.Show3pDiagnosticsApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.shimless_rma.mojom.Show3pDiagnosticsAppResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveError
ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveError_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ErrorObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveOsUpdateProgress
ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveOsUpdateProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.OsUpdateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveCalibrationProgress
ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveCalibrationProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.CalibrationObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveProvisioningProgress
ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveProvisioningProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ProvisioningObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveHardwareWriteProtectionState
ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveHardwareWriteProtectionState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObservePowerCableState
ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObservePowerCableState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.PowerCableStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveExternalDiskState
ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveExternalDiskState_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.ExternalDiskStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveHardwareVerificationStatus
ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveHardwareVerificationStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveFinalizationStatus
ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveFinalizationStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.FinalizationObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveRoFirmwareUpdateProgress
ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shimless_rma.mojom.ShimlessRmaService.ObserveRoFirmwareUpdateProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shimless_rma.mojom.ShimlessRmaServicePtr = ash.shimless_rma.mojom.ShimlessRmaServiceRemote;
ash.shimless_rma.mojom.ShimlessRmaServiceRequest = ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver;

