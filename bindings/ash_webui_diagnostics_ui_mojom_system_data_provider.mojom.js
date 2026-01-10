// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_data_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.diagnostics.mojom = ash.diagnostics.diagnostics.mojom || {};


// Enum: ExternalPowerSource
ash.diagnostics.diagnostics.mojom.mojom.ExternalPowerSource = {
  kAc: 0,
  kUsb: 1,
  kDisconnected: 2,
};
ash.diagnostics.diagnostics.mojom.mojom.ExternalPowerSourceSpec = { $: mojo.internal.Enum() };

// Enum: BatteryState
ash.diagnostics.diagnostics.mojom.mojom.BatteryState = {
  kCharging: 0,
  kDischarging: 1,
  kFull: 2,
};
ash.diagnostics.diagnostics.mojom.mojom.BatteryStateSpec = { $: mojo.internal.Enum() };

// Struct: DeviceCapabilities
ash.diagnostics.diagnostics.mojom.mojom.DeviceCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.DeviceCapabilities',
      packedSize: 16,
      fields: [
        { name: 'has_battery', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VersionInfo
ash.diagnostics.diagnostics.mojom.mojom.VersionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.VersionInfo',
      packedSize: 24,
      fields: [
        { name: 'milestone_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'full_version_string', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SystemInfo
ash.diagnostics.diagnostics.mojom.mojom.SystemInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemInfo',
      packedSize: 64,
      fields: [
        { name: 'board_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'marketing_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cpu_model_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'total_memory_kib', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'cpu_threads_count', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'cpu_max_clock_speed_khz', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'version_info', packedOffset: 24, packedBitOffset: 0, type: ash.diagnostics.mojom.VersionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'device_capabilities', packedOffset: 32, packedBitOffset: 0, type: ash.diagnostics.mojom.DeviceCapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: BatteryInfo
ash.diagnostics.diagnostics.mojom.mojom.BatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryInfo',
      packedSize: 24,
      fields: [
        { name: 'manufacturer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'charge_full_design_milliamp_hours', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BatteryChargeStatus
ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryChargeStatus',
      packedSize: 32,
      fields: [
        { name: 'power_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'current_now_milliamps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'charge_now_milliamp_hours', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'battery_state', packedOffset: 16, packedBitOffset: 0, type: ash.diagnostics.mojom.BatteryStateSpec, nullable: false, minVersion: 0 },
        { name: 'power_adapter_status', packedOffset: 20, packedBitOffset: 0, type: ash.diagnostics.mojom.ExternalPowerSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BatteryHealth
ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryHealth',
      packedSize: 24,
      fields: [
        { name: 'charge_full_now_milliamp_hours', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'charge_full_design_milliamp_hours', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'cycle_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'battery_wear_percentage', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MemoryUsage
ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.MemoryUsage',
      packedSize: 24,
      fields: [
        { name: 'total_memory_kib', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'available_memory_kib', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'free_memory_kib', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CpuUsage
ash.diagnostics.diagnostics.mojom.mojom.CpuUsageSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.CpuUsage',
      packedSize: 24,
      fields: [
        { name: 'percent_usage_user', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'percent_usage_system', packedOffset: 7, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'percent_usage_free', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'average_cpu_temp_celsius', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'scaling_current_frequency_khz', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: BatteryChargeStatusObserver
ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.BatteryChargeStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBatteryChargeStatusUpdated(battery_charge_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec,
      null,
      [battery_charge_status]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.BatteryChargeStatusObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnBatteryChargeStatusUpdated
ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryChargeStatusObserver.OnBatteryChargeStatusUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'battery_charge_status', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.BatteryChargeStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.BatteryChargeStatusObserverPendingReceiver;


// Interface: BatteryHealthObserver
ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.BatteryHealthObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBatteryHealthUpdated(battery_health) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec,
      null,
      [battery_health]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.BatteryHealthObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnBatteryHealthUpdated
ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryHealthObserver.OnBatteryHealthUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'battery_health', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.BatteryHealthSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.BatteryHealthObserverPendingReceiver;


// Interface: MemoryUsageObserver
ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.MemoryUsageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMemoryUsageUpdated(memory_usage) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec,
      null,
      [memory_usage]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.MemoryUsageObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMemoryUsageUpdated
ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.MemoryUsageObserver.OnMemoryUsageUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'memory_usage', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.MemoryUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.MemoryUsageObserverPendingReceiver;


// Interface: CpuUsageObserver
ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserver = {};

ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.CpuUsageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCpuUsageUpdated(cpu_usage) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec,
      null,
      [cpu_usage]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserver.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.CpuUsageObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnCpuUsageUpdated
ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.CpuUsageObserver.OnCpuUsageUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'cpu_usage', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.CpuUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverPtr = ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverRemote;
ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverRequest = ash.diagnostics.diagnostics.mojom.mojom.CpuUsageObserverPendingReceiver;


// Interface: SystemDataProvider
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider = {};

ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderRemote = class {
  static get $interfaceName() {
    return 'ash.diagnostics.mojom.SystemDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderPendingReceiver,
      handle);
    this.$ = new ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSystemInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec,
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec,
      []);
  }

  getBatteryInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec,
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec,
      []);
  }

  observeBatteryChargeStatus(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec,
      null,
      [observer]);
  }

  observeBatteryHealth(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec,
      null,
      [observer]);
  }

  observeMemoryUsage(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec,
      null,
      [observer]);
  }

  observeCpuUsage(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec,
      null,
      [observer]);
  }

};

ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider.getRemote = function() {
  let remote = new ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.diagnostics.mojom.SystemDataProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetSystemInfo
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetSystemInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetSystemInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'system_info', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.SystemInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetBatteryInfo
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetBatteryInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetBatteryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'battery_info', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.BatteryInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveBatteryChargeStatus
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveBatteryChargeStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.BatteryChargeStatusObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveBatteryHealth
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveBatteryHealth_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.BatteryHealthObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveMemoryUsage
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveMemoryUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.MemoryUsageObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveCpuUsage
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveCpuUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.diagnostics.mojom.CpuUsageObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderPtr = ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderRemote;
ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderRequest = ash.diagnostics.diagnostics.mojom.mojom.SystemDataProviderPendingReceiver;

