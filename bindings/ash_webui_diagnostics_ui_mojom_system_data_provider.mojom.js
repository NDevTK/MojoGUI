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
};

// Enum: BatteryState
ash.diagnostics.mojom.BatteryState = {
};

// Struct: DeviceCapabilities
ash.diagnostics.mojom.DeviceCapabilities = class {
  constructor(values = {}) {
    this.has_battery = values.has_battery !== undefined ? values.has_battery : false;
  }
};

// Struct: VersionInfo
ash.diagnostics.mojom.VersionInfo = class {
  constructor(values = {}) {
    this.full_version_string = values.full_version_string !== undefined ? values.full_version_string : "";
  }
};

// Struct: SystemInfo
ash.diagnostics.mojom.SystemInfo = class {
  constructor(values = {}) {
    this.device_capabilities = values.device_capabilities !== undefined ? values.device_capabilities : 0;
  }
};

// Struct: BatteryInfo
ash.diagnostics.mojom.BatteryInfo = class {
  constructor(values = {}) {
    this.charge_full_design_milliamp_hours = values.charge_full_design_milliamp_hours !== undefined ? values.charge_full_design_milliamp_hours : 0;
  }
};

// Struct: BatteryChargeStatus
ash.diagnostics.mojom.BatteryChargeStatus = class {
  constructor(values = {}) {
    this.power_adapter_status = values.power_adapter_status !== undefined ? values.power_adapter_status : 0;
  }
};

// Struct: BatteryHealth
ash.diagnostics.mojom.BatteryHealth = class {
  constructor(values = {}) {
    this.battery_wear_percentage = values.battery_wear_percentage !== undefined ? values.battery_wear_percentage : 0;
  }
};

// Struct: MemoryUsage
ash.diagnostics.mojom.MemoryUsage = class {
  constructor(values = {}) {
    this.free_memory_kib = values.free_memory_kib !== undefined ? values.free_memory_kib : 0;
  }
};

// Struct: CpuUsage
ash.diagnostics.mojom.CpuUsage = class {
  constructor(values = {}) {
    this.scaling_current_frequency_khz = values.scaling_current_frequency_khz !== undefined ? values.scaling_current_frequency_khz : 0;
  }
};

// Interface: BatteryChargeStatusObserver
ash.diagnostics.mojom.BatteryChargeStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.BatteryChargeStatusObserver';
  }

  onBatteryChargeStatusUpdated(battery_charge_status) {
    // Method: OnBatteryChargeStatusUpdated
    // Call: OnBatteryChargeStatusUpdated(battery_charge_status)
  }

};

ash.diagnostics.mojom.BatteryChargeStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BatteryHealthObserver
ash.diagnostics.mojom.BatteryHealthObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.BatteryHealthObserver';
  }

  onBatteryHealthUpdated(battery_health) {
    // Method: OnBatteryHealthUpdated
    // Call: OnBatteryHealthUpdated(battery_health)
  }

};

ash.diagnostics.mojom.BatteryHealthObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MemoryUsageObserver
ash.diagnostics.mojom.MemoryUsageObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.MemoryUsageObserver';
  }

  onMemoryUsageUpdated(memory_usage) {
    // Method: OnMemoryUsageUpdated
    // Call: OnMemoryUsageUpdated(memory_usage)
  }

};

ash.diagnostics.mojom.MemoryUsageObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CpuUsageObserver
ash.diagnostics.mojom.CpuUsageObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.CpuUsageObserver';
  }

  onCpuUsageUpdated(cpu_usage) {
    // Method: OnCpuUsageUpdated
    // Call: OnCpuUsageUpdated(cpu_usage)
  }

};

ash.diagnostics.mojom.CpuUsageObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemDataProvider
ash.diagnostics.mojom.SystemDataProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.SystemDataProvider';
  }

  getSystemInfo() {
    // Method: GetSystemInfo
    return new Promise((resolve) => {
      // Call: GetSystemInfo()
      resolve({});
    });
  }

  getBatteryInfo() {
    // Method: GetBatteryInfo
    return new Promise((resolve) => {
      // Call: GetBatteryInfo()
      resolve({});
    });
  }

  observeBatteryChargeStatus(observer) {
    // Method: ObserveBatteryChargeStatus
    // Call: ObserveBatteryChargeStatus(observer)
  }

  observeBatteryHealth(observer) {
    // Method: ObserveBatteryHealth
    // Call: ObserveBatteryHealth(observer)
  }

  observeMemoryUsage(observer) {
    // Method: ObserveMemoryUsage
    // Call: ObserveMemoryUsage(observer)
  }

  observeCpuUsage(observer) {
    // Method: ObserveCpuUsage
    // Call: ObserveCpuUsage(observer)
  }

};

ash.diagnostics.mojom.SystemDataProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
