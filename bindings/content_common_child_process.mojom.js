// Auto-generated MojoJS binding
// Source: chromium_src/content/common/child_process.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: LoggingSettings
content.mojom.LoggingSettings = class {
  constructor(values = {}) {
    this.log_file_descriptor = values.log_file_descriptor !== undefined ? values.log_file_descriptor : 0;
  }
};

// Interface: ChildProcessHost
content.mojom.ChildProcessHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.ChildProcessHost';
  }

  ping() {
    // Method: Ping
    // Call: Ping()
  }

  bindHostReceiver(receiver) {
    // Method: BindHostReceiver
    // Call: BindHostReceiver(receiver)
  }

};

content.mojom.ChildProcessHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ChildProcess
content.mojom.ChildProcessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.ChildProcess';
  }

  processShutdown() {
    // Method: ProcessShutdown
    // Call: ProcessShutdown()
  }

  getTaskPort() {
    // Method: GetTaskPort
    return new Promise((resolve) => {
      // Call: GetTaskPort()
      resolve({});
    });
  }

  setIPCLoggingEnabled(on) {
    // Method: SetIPCLoggingEnabled
    // Call: SetIPCLoggingEnabled(on)
  }

  getBackgroundTracingAgentProvider(receiver) {
    // Method: GetBackgroundTracingAgentProvider
    // Call: GetBackgroundTracingAgentProvider(receiver)
  }

  enableSystemTracingService(remote) {
    // Method: EnableSystemTracingService
    // Call: EnableSystemTracingService(remote)
  }

  crashHungProcess() {
    // Method: CrashHungProcess
    // Call: CrashHungProcess()
  }

  bindServiceInterface(receiver) {
    // Method: BindServiceInterface
    // Call: BindServiceInterface(receiver)
  }

  bindReceiver(receiver) {
    // Method: BindReceiver
    // Call: BindReceiver(receiver)
  }

  setProfilingFile(file) {
    // Method: SetProfilingFile
    // Call: SetProfilingFile(file)
  }

  writeClangProfilingProfile() {
    // Method: WriteClangProfilingProfile
    // Call: WriteClangProfilingProfile()
  }

  setPseudonymizationSalt(salt) {
    // Method: SetPseudonymizationSalt
    // Call: SetPseudonymizationSalt(salt)
  }

  reinitializeLogging(settings) {
    // Method: ReinitializeLogging
    // Call: ReinitializeLogging(settings)
  }

  onMemoryPressure(memory_pressure_level) {
    // Method: OnMemoryPressure
    // Call: OnMemoryPressure(memory_pressure_level)
  }

  setBatterySaverMode(battery_saver_mode_enabled) {
    // Method: SetBatterySaverMode
    // Call: SetBatterySaverMode(battery_saver_mode_enabled)
  }

};

content.mojom.ChildProcessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
