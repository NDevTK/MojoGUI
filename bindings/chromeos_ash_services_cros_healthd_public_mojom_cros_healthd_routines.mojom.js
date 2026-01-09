// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_routines.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: ButtonType
ash.cros_healthd.mojom.ButtonType = {
  should: 0,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
};

// Enum: Reason
ash.cros_healthd.mojom.Reason = {
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: MemtesterTestItemEnum
ash.cros_healthd.mojom.MemtesterTestItemEnum = {
  repeating: 0,
  repeating: 1,
  repeated: 2,
};

// Enum: PairError
ash.cros_healthd.mojom.PairError = {
  should: 0,
};

// Enum: ConnectError
ash.cros_healthd.mojom.ConnectError = {
  should: 0,
};

// Enum: AddressType
ash.cros_healthd.mojom.AddressType = {
  should: 0,
};

// Enum: CameraSubtestResult
ash.cros_healthd.mojom.CameraSubtestResult = {
  should: 0,
  possibly: 1,
};

// Enum: DiskReadTypeEnum
ash.cros_healthd.mojom.DiskReadTypeEnum = {
  should: 0,
  kLinearRead: 1,
  kRandomRead: 2,
};

// Enum: LedName
ash.cros_healthd.mojom.LedName = {
  should: 0,
  kBattery: 1,
  kPower: 2,
  kAdapter: 3,
  kLeft: 4,
  kRight: 5,
};

// Enum: LedColor
ash.cros_healthd.mojom.LedColor = {
  should: 0,
  kRed: 1,
  kGreen: 2,
  kBlue: 3,
  kYellow: 4,
  kWhite: 5,
  kAmber: 6,
};

// Enum: HardwarePresenceStatus
ash.cros_healthd.mojom.HardwarePresenceStatus = {
  should: 0,
  skipping: 1,
};

// Enum: Type
ash.cros_healthd.mojom.Type = {
  should: 0,
  also: 1,
};

// Enum: Issue
ash.cros_healthd.mojom.Issue = {
  should: 0,
};

// Struct: MemoryRoutineArgument
ash.cros_healthd.mojom.MemoryRoutineArgument = class {
  constructor(values = {}) {
    this.max_testing_mem_kib@0 = values.max_testing_mem_kib@0 !== undefined ? values.max_testing_mem_kib@0 : 0;
  }
};

// Struct: AudioDriverRoutineArgument
ash.cros_healthd.mojom.AudioDriverRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: CpuStressRoutineArgument
ash.cros_healthd.mojom.CpuStressRoutineArgument = class {
  constructor(values = {}) {
    this.exec_duration@0 = values.exec_duration@0 !== undefined ? values.exec_duration@0 : null;
  }
};

// Struct: UfsLifetimeRoutineArgument
ash.cros_healthd.mojom.UfsLifetimeRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: DiskReadRoutineArgument
ash.cros_healthd.mojom.DiskReadRoutineArgument = class {
  constructor(values = {}) {
    this.type@0 = values.type@0 !== undefined ? values.type@0 : null;
    this.disk_read_duration@1 = values.disk_read_duration@1 !== undefined ? values.disk_read_duration@1 : null;
    this.(MiB) = values.(MiB) !== undefined ? values.(MiB) : null;
    this.file_size_mib@2 = values.file_size_mib@2 !== undefined ? values.file_size_mib@2 : 0;
  }
};

// Struct: CpuCacheRoutineArgument
ash.cros_healthd.mojom.CpuCacheRoutineArgument = class {
  constructor(values = {}) {
    this.exec_duration@0 = values.exec_duration@0 !== undefined ? values.exec_duration@0 : null;
  }
};

// Struct: PrimeSearchRoutineArgument
ash.cros_healthd.mojom.PrimeSearchRoutineArgument = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
    this.exec_duration@0 = values.exec_duration@0 !== undefined ? values.exec_duration@0 : null;
  }
};

// Struct: VolumeButtonRoutineArgument
ash.cros_healthd.mojom.VolumeButtonRoutineArgument = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: LedLitUpRoutineArgument
ash.cros_healthd.mojom.LedLitUpRoutineArgument = class {
  constructor(values = {}) {
    this.color@1 = values.color@1 !== undefined ? values.color@1 : null;
  }
};

// Struct: KeyboardBacklightRoutineArgument
ash.cros_healthd.mojom.KeyboardBacklightRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: FloatingPointRoutineArgument
ash.cros_healthd.mojom.FloatingPointRoutineArgument = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
    this.exec_duration@0 = values.exec_duration@0 !== undefined ? values.exec_duration@0 : null;
  }
};

// Struct: BluetoothPowerRoutineArgument
ash.cros_healthd.mojom.BluetoothPowerRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothDiscoveryRoutineArgument
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: FanRoutineArgument
ash.cros_healthd.mojom.FanRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothScanningRoutineArgument
ash.cros_healthd.mojom.BluetoothScanningRoutineArgument = class {
  constructor(values = {}) {
    this.routine = values.routine !== undefined ? values.routine : null;
    this.exec_duration@0 = values.exec_duration@0 !== undefined ? values.exec_duration@0 : null;
  }
};

// Struct: BluetoothPairingRoutineArgument
ash.cros_healthd.mojom.BluetoothPairingRoutineArgument = class {
  constructor(values = {}) {
    this.peripheral_id@0 = values.peripheral_id@0 !== undefined ? values.peripheral_id@0 : "";
  }
};

// Struct: CameraAvailabilityRoutineArgument
ash.cros_healthd.mojom.CameraAvailabilityRoutineArgument = class {
  constructor(values = {}) {
    this.run_camera_diagnostic_service_available_check@1 = values.run_camera_diagnostic_service_available_check@1 !== undefined ? values.run_camera_diagnostic_service_available_check@1 : false;
  }
};

// Struct: UrandomRoutineArgument
ash.cros_healthd.mojom.UrandomRoutineArgument = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
    this.exec_duration@0 = values.exec_duration@0 !== undefined ? values.exec_duration@0 : null;
  }
};

// Struct: NetworkBandwidthRoutineArgument
ash.cros_healthd.mojom.NetworkBandwidthRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: SensitiveSensorRoutineArgument
ash.cros_healthd.mojom.SensitiveSensorRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: CameraFrameAnalysisRoutineArgument
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineArgument = class {
  constructor(values = {}) {
  }
};

// Struct: BatteryDischargeRoutineArgument
ash.cros_healthd.mojom.BatteryDischargeRoutineArgument = class {
  constructor(values = {}) {
    this.exec_duration@0 = values.exec_duration@0 !== undefined ? values.exec_duration@0 : null;
    this.maximum_discharge_percent_allowed@1 = values.maximum_discharge_percent_allowed@1 !== undefined ? values.maximum_discharge_percent_allowed@1 : 0;
  }
};

// Struct: RoutineState
ash.cros_healthd.mojom.RoutineState = class {
  constructor(values = {}) {
    this.state_union@1 = values.state_union@1 !== undefined ? values.state_union@1 : 0;
  }
};

// Struct: RoutineStateInitialized
ash.cros_healthd.mojom.RoutineStateInitialized = class {
  constructor(values = {}) {
  }
};

// Struct: RoutineStateRunning
ash.cros_healthd.mojom.RoutineStateRunning = class {
  constructor(values = {}) {
    this.info@0 = values.info@0 !== undefined ? values.info@0 : null;
  }
};

// Struct: NetworkBandwidthRoutineRunningInfo
ash.cros_healthd.mojom.NetworkBandwidthRoutineRunningInfo = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: RoutineStateWaiting
ash.cros_healthd.mojom.RoutineStateWaiting = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : 0;
  }
};

// Struct: CheckLedLitUpStateInquiry
ash.cros_healthd.mojom.CheckLedLitUpStateInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: CheckLedLitUpStateReply
ash.cros_healthd.mojom.CheckLedLitUpStateReply = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: UnplugAcAdapterInquiry
ash.cros_healthd.mojom.UnplugAcAdapterInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: UnplugAcAdapterReply
ash.cros_healthd.mojom.UnplugAcAdapterReply = class {
  constructor(values = {}) {
  }
};

// Struct: CheckKeyboardBacklightStateInquiry
ash.cros_healthd.mojom.CheckKeyboardBacklightStateInquiry = class {
  constructor(values = {}) {
  }
};

// Struct: CheckKeyboardBacklightStateReply
ash.cros_healthd.mojom.CheckKeyboardBacklightStateReply = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: RoutineStateFinished
ash.cros_healthd.mojom.RoutineStateFinished = class {
  constructor(values = {}) {
    this.detail@1 = values.detail@1 !== undefined ? values.detail@1 : false;
  }
};

// Struct: MemoryRoutineDetail
ash.cros_healthd.mojom.MemoryRoutineDetail = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : 0;
  }
};

// Struct: AudioDriverRoutineDetail
ash.cros_healthd.mojom.AudioDriverRoutineDetail = class {
  constructor(values = {}) {
    this.audio_devices_succeed_to_open@1 = values.audio_devices_succeed_to_open@1 !== undefined ? values.audio_devices_succeed_to_open@1 : 0;
  }
};

// Struct: UfsLifetimeRoutineDetail
ash.cros_healthd.mojom.UfsLifetimeRoutineDetail = class {
  constructor(values = {}) {
    this.device_life_time_est_b@2 = values.device_life_time_est_b@2 !== undefined ? values.device_life_time_est_b@2 : 0;
  }
};

// Struct: MemtesterResult
ash.cros_healthd.mojom.MemtesterResult = class {
  constructor(values = {}) {
    this.failed_items@1 = values.failed_items@1 !== undefined ? values.failed_items@1 : [];
  }
};

// Struct: BluetoothPoweredDetail
ash.cros_healthd.mojom.BluetoothPoweredDetail = class {
  constructor(values = {}) {
    this.dbus_powered@1 = values.dbus_powered@1 !== undefined ? values.dbus_powered@1 : false;
  }
};

// Struct: BluetoothPowerRoutineDetail
ash.cros_healthd.mojom.BluetoothPowerRoutineDetail = class {
  constructor(values = {}) {
    this.power_off_result@0 = values.power_off_result@0 !== undefined ? values.power_off_result@0 : null;
    this.power_on_result@1 = values.power_on_result@1 !== undefined ? values.power_on_result@1 : null;
  }
};

// Struct: BluetoothDiscoveringDetail
ash.cros_healthd.mojom.BluetoothDiscoveringDetail = class {
  constructor(values = {}) {
    this.dbus_discovering@1 = values.dbus_discovering@1 !== undefined ? values.dbus_discovering@1 : false;
  }
};

// Struct: BluetoothDiscoveryRoutineDetail
ash.cros_healthd.mojom.BluetoothDiscoveryRoutineDetail = class {
  constructor(values = {}) {
    this.start_discovery_result@0 = values.start_discovery_result@0 !== undefined ? values.start_discovery_result@0 : null;
    this.stop_discovery_result@1 = values.stop_discovery_result@1 !== undefined ? values.stop_discovery_result@1 : null;
  }
};

// Struct: BluetoothScannedPeripheralInfo
ash.cros_healthd.mojom.BluetoothScannedPeripheralInfo = class {
  constructor(values = {}) {
    this.rssi_history@0 = values.rssi_history@0 !== undefined ? values.rssi_history@0 : 0;
    this.name@1 = values.name@1 !== undefined ? values.name@1 : "";
    this.peripheral_id@2 = values.peripheral_id@2 !== undefined ? values.peripheral_id@2 : "";
    this.uuids@3 = values.uuids@3 !== undefined ? values.uuids@3 : [];
  }
};

// Struct: BluetoothScanningRoutineDetail
ash.cros_healthd.mojom.BluetoothScanningRoutineDetail = class {
  constructor(values = {}) {
    this.peripherals@0 = values.peripherals@0 !== undefined ? values.peripherals@0 : [];
  }
};

// Struct: BluetoothPairingPeripheralInfo
ash.cros_healthd.mojom.BluetoothPairingPeripheralInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
    this.5 = values.5 !== undefined ? values.5 : null;
  }
};

// Struct: BluetoothPairingRoutineDetail
ash.cros_healthd.mojom.BluetoothPairingRoutineDetail = class {
  constructor(values = {}) {
    this.pairing_peripheral@0 = values.pairing_peripheral@0 !== undefined ? values.pairing_peripheral@0 : null;
  }
};

// Struct: CameraAvailabilityRoutineDetail
ash.cros_healthd.mojom.CameraAvailabilityRoutineDetail = class {
  constructor(values = {}) {
    this.camera_service_available_check@0 = values.camera_service_available_check@0 !== undefined ? values.camera_service_available_check@0 : null;
    this.camera_diagnostic_service_available_check@1 = values.camera_diagnostic_service_available_check@1 !== undefined ? values.camera_diagnostic_service_available_check@1 : null;
  }
};

// Struct: BatteryDischargeRoutineDetail
ash.cros_healthd.mojom.BatteryDischargeRoutineDetail = class {
  constructor(values = {}) {
    this.discharge_percent@0 = values.discharge_percent@0 !== undefined ? values.discharge_percent@0 : 0;
  }
};

// Struct: FanRoutineDetail
ash.cros_healthd.mojom.FanRoutineDetail = class {
  constructor(values = {}) {
    this.fan_count_status@2 = values.fan_count_status@2 !== undefined ? values.fan_count_status@2 : 0;
  }
};

// Struct: NetworkBandwidthRoutineDetail
ash.cros_healthd.mojom.NetworkBandwidthRoutineDetail = class {
  constructor(values = {}) {
    this.upload_speed_kbps@1 = values.upload_speed_kbps@1 !== undefined ? values.upload_speed_kbps@1 : 0;
  }
};

// Struct: SensitiveSensorInfo
ash.cros_healthd.mojom.SensitiveSensorInfo = class {
  constructor(values = {}) {
    this.id@0 = values.id@0 !== undefined ? values.id@0 : 0;
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
  }
};

// Struct: SensitiveSensorReport
ash.cros_healthd.mojom.SensitiveSensorReport = class {
  constructor(values = {}) {
    this.sensor_presence_status@2 = values.sensor_presence_status@2 !== undefined ? values.sensor_presence_status@2 : [];
  }
};

// Struct: SensitiveSensorRoutineDetail
ash.cros_healthd.mojom.SensitiveSensorRoutineDetail = class {
  constructor(values = {}) {
    this.lid_gravity_sensor@7 = values.lid_gravity_sensor@7 !== undefined ? values.lid_gravity_sensor@7 : null;
  }
};

// Struct: CameraFrameAnalysisRoutineDetail
ash.cros_healthd.mojom.CameraFrameAnalysisRoutineDetail = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
  }
};

// Interface: CrosHealthdRoutinesService
ash.cros_healthd.mojom.CrosHealthdRoutinesServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdRoutinesService';
  }

  occur(executing) {
    // Method: occur
    // Call: occur(executing)
  }

  reason(cros_healthd.mojom.Exception) {
    // Method: reason
    // Call: reason(cros_healthd.mojom.Exception)
  }

  initialized(RoutineObserver) {
    // Method: initialized
    // Call: initialized(RoutineObserver)
  }

  0(routine_argument, routine_receiver, routine_observer) {
    // Method: 0
    // Call: 0(routine_argument, routine_receiver, routine_observer)
  }

  1(routine_argument) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(routine_argument)
      resolve({});
    });
  }

};

ash.cros_healthd.mojom.CrosHealthdRoutinesServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RoutineControl
ash.cros_healthd.mojom.RoutineControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.RoutineControl';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  exception(this) {
    // Method: exception
    // Call: exception(this)
  }

  state() {
    // Method: state
    // Call: state()
  }

  2(reply) {
    // Method: 2
    // Call: 2(reply)
  }

};

ash.cros_healthd.mojom.RoutineControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RoutineObserver
ash.cros_healthd.mojom.RoutineObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.RoutineObserver';
  }

  initialized(`CreateRoutine`) {
    // Method: initialized
    // Call: initialized(`CreateRoutine`)
  }

  0(state) {
    // Method: 0
    // Call: 0(state)
  }

};

ash.cros_healthd.mojom.RoutineObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
