// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/system_data_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


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
ash.diagnostics.mojom.DeviceCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.DeviceCapabilities',
      packedSize: 16,
      fields: [
        { name: 'has_battery', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VersionInfo
ash.diagnostics.mojom.VersionInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.VersionInfo',
      packedSize: 16,
      fields: [
        { name: 'full_version_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SystemInfo
ash.diagnostics.mojom.SystemInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemInfo',
      packedSize: 16,
      fields: [
        { name: 'device_capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatteryInfo
ash.diagnostics.mojom.BatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryInfo',
      packedSize: 16,
      fields: [
        { name: 'charge_full_design_milliamp_hours', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatteryChargeStatus
ash.diagnostics.mojom.BatteryChargeStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryChargeStatus',
      packedSize: 16,
      fields: [
        { name: 'power_adapter_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatteryHealth
ash.diagnostics.mojom.BatteryHealthSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryHealth',
      packedSize: 16,
      fields: [
        { name: 'battery_wear_percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MemoryUsage
ash.diagnostics.mojom.MemoryUsageSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.MemoryUsage',
      packedSize: 16,
      fields: [
        { name: 'free_memory_kib', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuUsage
ash.diagnostics.mojom.CpuUsageSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.CpuUsage',
      packedSize: 16,
      fields: [
        { name: 'scaling_current_frequency_khz', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: BatteryChargeStatusObserver
ash.diagnostics.mojom.BatteryChargeStatusObserver = {};

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

// ParamsSpec for OnBatteryChargeStatusUpdated
ash.diagnostics.mojom.BatteryChargeStatusObserver_OnBatteryChargeStatusUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryChargeStatusObserver.OnBatteryChargeStatusUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'battery_charge_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.BatteryChargeStatusObserverPtr = ash.diagnostics.mojom.BatteryChargeStatusObserverRemote;
ash.diagnostics.mojom.BatteryChargeStatusObserverRequest = ash.diagnostics.mojom.BatteryChargeStatusObserverPendingReceiver;


// Interface: BatteryHealthObserver
ash.diagnostics.mojom.BatteryHealthObserver = {};

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

// ParamsSpec for OnBatteryHealthUpdated
ash.diagnostics.mojom.BatteryHealthObserver_OnBatteryHealthUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.BatteryHealthObserver.OnBatteryHealthUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'battery_health', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.BatteryHealthObserverPtr = ash.diagnostics.mojom.BatteryHealthObserverRemote;
ash.diagnostics.mojom.BatteryHealthObserverRequest = ash.diagnostics.mojom.BatteryHealthObserverPendingReceiver;


// Interface: MemoryUsageObserver
ash.diagnostics.mojom.MemoryUsageObserver = {};

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

// ParamsSpec for OnMemoryUsageUpdated
ash.diagnostics.mojom.MemoryUsageObserver_OnMemoryUsageUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.MemoryUsageObserver.OnMemoryUsageUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'memory_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.MemoryUsageObserverPtr = ash.diagnostics.mojom.MemoryUsageObserverRemote;
ash.diagnostics.mojom.MemoryUsageObserverRequest = ash.diagnostics.mojom.MemoryUsageObserverPendingReceiver;


// Interface: CpuUsageObserver
ash.diagnostics.mojom.CpuUsageObserver = {};

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

// ParamsSpec for OnCpuUsageUpdated
ash.diagnostics.mojom.CpuUsageObserver_OnCpuUsageUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.CpuUsageObserver.OnCpuUsageUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'cpu_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.CpuUsageObserverPtr = ash.diagnostics.mojom.CpuUsageObserverRemote;
ash.diagnostics.mojom.CpuUsageObserverRequest = ash.diagnostics.mojom.CpuUsageObserverPendingReceiver;


// Interface: SystemDataProvider
ash.diagnostics.mojom.SystemDataProvider = {};

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

// ParamsSpec for GetSystemInfo
ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetSystemInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.diagnostics.mojom.SystemDataProvider_GetSystemInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetSystemInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'system_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBatteryInfo
ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetBatteryInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.diagnostics.mojom.SystemDataProvider_GetBatteryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.GetBatteryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'battery_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveBatteryChargeStatus
ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryChargeStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveBatteryChargeStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveBatteryHealth
ash.diagnostics.mojom.SystemDataProvider_ObserveBatteryHealth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveBatteryHealth_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveMemoryUsage
ash.diagnostics.mojom.SystemDataProvider_ObserveMemoryUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveMemoryUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveCpuUsage
ash.diagnostics.mojom.SystemDataProvider_ObserveCpuUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.SystemDataProvider.ObserveCpuUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.diagnostics.mojom.SystemDataProviderPtr = ash.diagnostics.mojom.SystemDataProviderRemote;
ash.diagnostics.mojom.SystemDataProviderRequest = ash.diagnostics.mojom.SystemDataProviderPendingReceiver;

