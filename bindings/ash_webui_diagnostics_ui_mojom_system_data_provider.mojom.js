// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_data_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};

ash.diagnostics.mojom.ExternalPowerSourceSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.BatteryStateSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.DeviceCapabilitiesSpec = { $: {} };
ash.diagnostics.mojom.VersionInfoSpec = { $: {} };
ash.diagnostics.mojom.SystemInfoSpec = { $: {} };
ash.diagnostics.mojom.BatteryInfoSpec = { $: {} };
ash.diagnostics.mojom.BatteryChargeStatusSpec = { $: {} };
ash.diagnostics.mojom.BatteryHealthSpec = { $: {} };
ash.diagnostics.mojom.MemoryUsageSpec = { $: {} };
ash.diagnostics.mojom.CpuUsageSpec = { $: {} };
ash.diagnostics.mojom.BatteryChargeStatusObserver = {};
ash.diagnostics.mojom.BatteryChargeStatusObserver.$interfaceName = 'ash.diagnostics.mojom.BatteryChargeStatusObserver';
ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec = { $: {} };
ash.diagnostics.mojom.BatteryHealthObserver = {};
ash.diagnostics.mojom.BatteryHealthObserver.$interfaceName = 'ash.diagnostics.mojom.BatteryHealthObserver';
ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec = { $: {} };
ash.diagnostics.mojom.MemoryUsageObserver = {};
ash.diagnostics.mojom.MemoryUsageObserver.$interfaceName = 'ash.diagnostics.mojom.MemoryUsageObserver';
ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec = { $: {} };
ash.diagnostics.mojom.CpuUsageObserver = {};
ash.diagnostics.mojom.CpuUsageObserver.$interfaceName = 'ash.diagnostics.mojom.CpuUsageObserver';
ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider = {};
ash.diagnostics.mojom.SystemDataProvider.$interfaceName = 'ash.diagnostics.mojom.SystemDataProvider';
ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec = { $: {} };
ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec = { $: {} };

// Enum: ExternalPowerSource
ash.diagnostics.mojom.ExternalPowerSource = {
  kAc: 0,
  kUsb: 1,
  kDisconnected: 2,
};

// Enum: BatteryState
ash.diagnostics.mojom.BatteryState = {
  kCharging: 0,
  kDischarging: 1,
  kFull: 2,
};

// Struct: DeviceCapabilities
mojo.internal.Struct(
    ash.diagnostics.mojom.DeviceCapabilitiesSpec, 'ash.diagnostics.mojom.DeviceCapabilities', [
      mojo.internal.StructField('has_battery', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VersionInfo
mojo.internal.Struct(
    ash.diagnostics.mojom.VersionInfoSpec, 'ash.diagnostics.mojom.VersionInfo', [
      mojo.internal.StructField('milestone_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('full_version_string', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SystemInfo
mojo.internal.Struct(
    ash.diagnostics.mojom.SystemInfoSpec, 'ash.diagnostics.mojom.SystemInfo', [
      mojo.internal.StructField('board_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('marketing_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cpu_model_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('total_memory_kib', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('cpu_threads_count', 48, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('cpu_max_clock_speed_khz', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('version_info', 24, 0, ash.diagnostics.mojom.VersionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_capabilities', 32, 0, ash.diagnostics.mojom.DeviceCapabilitiesSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    ash.diagnostics.mojom.BatteryInfoSpec, 'ash.diagnostics.mojom.BatteryInfo', [
      mojo.internal.StructField('manufacturer', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('charge_full_design_milliamp_hours', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatteryChargeStatus
mojo.internal.Struct(
    ash.diagnostics.mojom.BatteryChargeStatusSpec, 'ash.diagnostics.mojom.BatteryChargeStatus', [
      mojo.internal.StructField('power_time', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('current_now_milliamps', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('charge_now_milliamp_hours', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('battery_state', 16, 0, ash.diagnostics.mojom.BatteryStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('power_adapter_status', 20, 0, ash.diagnostics.mojom.ExternalPowerSourceSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BatteryHealth
mojo.internal.Struct(
    ash.diagnostics.mojom.BatteryHealthSpec, 'ash.diagnostics.mojom.BatteryHealth', [
      mojo.internal.StructField('charge_full_now_milliamp_hours', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('charge_full_design_milliamp_hours', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('cycle_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('battery_wear_percentage', 12, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MemoryUsage
mojo.internal.Struct(
    ash.diagnostics.mojom.MemoryUsageSpec, 'ash.diagnostics.mojom.MemoryUsage', [
      mojo.internal.StructField('total_memory_kib', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('available_memory_kib', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('free_memory_kib', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CpuUsage
mojo.internal.Struct(
    ash.diagnostics.mojom.CpuUsageSpec, 'ash.diagnostics.mojom.CpuUsage', [
      mojo.internal.StructField('percent_usage_user', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('percent_usage_system', 7, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('percent_usage_free', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('average_cpu_temp_celsius', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('scaling_current_frequency_khz', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: BatteryChargeStatusObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec, 'ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_Params', [
      mojo.internal.StructField('battery_charge_status', 0, 0, ash.diagnostics.mojom.BatteryChargeStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.diagnostics.mojom.BatteryChargeStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.BatteryChargeStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.BatteryChargeStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.BatteryChargeStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.BatteryChargeStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.BatteryChargeStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBatteryChargeStatusUpdated(battery_charge_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec,
      null,
      [battery_charge_status]);
  }

};

ash.diagnostics.mojom.BatteryChargeStatusObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.BatteryChargeStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.BatteryChargeStatusObserver',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.BatteryChargeStatusObserverPtr = ash.diagnostics.mojom.BatteryChargeStatusObserverRemote;
ash.diagnostics.mojom.BatteryChargeStatusObserverRequest = ash.diagnostics.mojom.BatteryChargeStatusObserverPendingReceiver;


// Interface: BatteryHealthObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec, 'ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_Params', [
      mojo.internal.StructField('battery_health', 0, 0, ash.diagnostics.mojom.BatteryHealthSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.diagnostics.mojom.BatteryHealthObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.BatteryHealthObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.BatteryHealthObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.BatteryHealthObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.BatteryHealthObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.BatteryHealthObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBatteryHealthUpdated(battery_health) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec,
      null,
      [battery_health]);
  }

};

ash.diagnostics.mojom.BatteryHealthObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.BatteryHealthObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.BatteryHealthObserver',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.BatteryHealthObserverPtr = ash.diagnostics.mojom.BatteryHealthObserverRemote;
ash.diagnostics.mojom.BatteryHealthObserverRequest = ash.diagnostics.mojom.BatteryHealthObserverPendingReceiver;


// Interface: MemoryUsageObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec, 'ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_Params', [
      mojo.internal.StructField('memory_usage', 0, 0, ash.diagnostics.mojom.MemoryUsageSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.diagnostics.mojom.MemoryUsageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.MemoryUsageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.MemoryUsageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.MemoryUsageObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.MemoryUsageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.MemoryUsageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMemoryUsageUpdated(memory_usage) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec,
      null,
      [memory_usage]);
  }

};

ash.diagnostics.mojom.MemoryUsageObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.MemoryUsageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.MemoryUsageObserver',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.MemoryUsageObserverPtr = ash.diagnostics.mojom.MemoryUsageObserverRemote;
ash.diagnostics.mojom.MemoryUsageObserverRequest = ash.diagnostics.mojom.MemoryUsageObserverPendingReceiver;


// Interface: CpuUsageObserver
mojo.internal.Struct(
    ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec, 'ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_Params', [
      mojo.internal.StructField('cpu_usage', 0, 0, ash.diagnostics.mojom.CpuUsageSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.diagnostics.mojom.CpuUsageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.CpuUsageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.CpuUsageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.CpuUsageObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.CpuUsageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.CpuUsageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCpuUsageUpdated(cpu_usage) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec,
      null,
      [cpu_usage]);
  }

};

ash.diagnostics.mojom.CpuUsageObserver.getRemote = function() {
  let remote = new ash.diagnostics.mojom.CpuUsageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.CpuUsageObserver',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.CpuUsageObserverPtr = ash.diagnostics.mojom.CpuUsageObserverRemote;
ash.diagnostics.mojom.CpuUsageObserverRequest = ash.diagnostics.mojom.CpuUsageObserverPendingReceiver;


// Interface: SystemDataProvider
mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParams', [
      mojo.internal.StructField('system_info', 0, 0, ash.diagnostics.mojom.SystemInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParams', [
      mojo.internal.StructField('battery_info', 0, 0, ash.diagnostics.mojom.BatteryInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.BatteryChargeStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.BatteryHealthObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.MemoryUsageObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec, 'ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.diagnostics.mojom.CpuUsageObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.diagnostics.mojom.SystemDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.mojom.SystemDataProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.SystemDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.mojom.SystemDataProviderPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.mojom.SystemDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.mojom.SystemDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSystemInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec,
      ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec,
      []);
  }

  getBatteryInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec,
      ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec,
      []);
  }

  observeBatteryChargeStatus(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec,
      null,
      [observer]);
  }

  observeBatteryHealth(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec,
      null,
      [observer]);
  }

  observeMemoryUsage(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec,
      null,
      [observer]);
  }

  observeCpuUsage(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec,
      null,
      [observer]);
  }

};

ash.diagnostics.mojom.SystemDataProvider.getRemote = function() {
  let remote = new ash.diagnostics.mojom.SystemDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.SystemDataProvider',
    'context');
  return remote.$;
};

ash.diagnostics.mojom.SystemDataProviderPtr = ash.diagnostics.mojom.SystemDataProviderRemote;
ash.diagnostics.mojom.SystemDataProviderRequest = ash.diagnostics.mojom.SystemDataProviderPendingReceiver;

