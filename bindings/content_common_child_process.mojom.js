// Auto-generated MojoJS binding
// Source: chromium_src/content/common/child_process.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: LoggingSettings
content.mojom.mojom.LoggingSettingsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.LoggingSettings',
      packedSize: 24,
      fields: [
        { name: 'logging_dest', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'log_file_descriptor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ChildProcessHost
content.mojom.mojom.ChildProcessHost = {};

content.mojom.mojom.ChildProcessHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.ChildProcessHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ChildProcessHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.ChildProcessHostPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.ChildProcessHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.ChildProcessHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.ChildProcessHost_Ping_ParamsSpec,
      null,
      []);
  }

  bindHostReceiver(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec,
      null,
      [receiver]);
  }

};

content.mojom.mojom.ChildProcessHost.getRemote = function() {
  let remote = new content.mojom.mojom.ChildProcessHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ChildProcessHost',
    'context');
  return remote.$;
};

// ParamsSpec for Ping
content.mojom.mojom.ChildProcessHost_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcessHost.Ping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BindHostReceiver
content.mojom.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcessHost.BindHostReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.ChildProcessHostPtr = content.mojom.mojom.ChildProcessHostRemote;
content.mojom.mojom.ChildProcessHostRequest = content.mojom.mojom.ChildProcessHostPendingReceiver;


// Interface: ChildProcess
content.mojom.mojom.ChildProcess = {};

content.mojom.mojom.ChildProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.ChildProcessRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ChildProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.ChildProcessPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.ChildProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.ChildProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  processShutdown() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.ChildProcess_ProcessShutdown_ParamsSpec,
      null,
      []);
  }

  getTaskPort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.ChildProcess_GetTaskPort_ParamsSpec,
      content.mojom.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec,
      []);
  }

  setIPCLoggingEnabled(on) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec,
      null,
      [on]);
  }

  getBackgroundTracingAgentProvider(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec,
      null,
      [receiver]);
  }

  enableSystemTracingService(remote) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec,
      null,
      [remote]);
  }

  crashHungProcess() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.mojom.ChildProcess_CrashHungProcess_ParamsSpec,
      null,
      []);
  }

  bindServiceInterface(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.mojom.ChildProcess_BindServiceInterface_ParamsSpec,
      null,
      [receiver]);
  }

  bindReceiver(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.mojom.ChildProcess_BindReceiver_ParamsSpec,
      null,
      [receiver]);
  }

  setProfilingFile(file) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.mojom.ChildProcess_SetProfilingFile_ParamsSpec,
      null,
      [file]);
  }

  writeClangProfilingProfile() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec,
      null,
      []);
  }

  setPseudonymizationSalt(salt) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec,
      null,
      [salt]);
  }

  reinitializeLogging(settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.mojom.ChildProcess_ReinitializeLogging_ParamsSpec,
      null,
      [settings]);
  }

  onMemoryPressure(memory_pressure_level) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.mojom.ChildProcess_OnMemoryPressure_ParamsSpec,
      null,
      [memory_pressure_level]);
  }

  setBatterySaverMode(battery_saver_mode_enabled) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec,
      null,
      [battery_saver_mode_enabled]);
  }

};

content.mojom.mojom.ChildProcess.getRemote = function() {
  let remote = new content.mojom.mojom.ChildProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ChildProcess',
    'context');
  return remote.$;
};

// ParamsSpec for ProcessShutdown
content.mojom.mojom.ChildProcess_ProcessShutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.ProcessShutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetTaskPort
content.mojom.mojom.ChildProcess_GetTaskPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.GetTaskPort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.GetTaskPort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'task_port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIPCLoggingEnabled
content.mojom.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.SetIPCLoggingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetBackgroundTracingAgentProvider
content.mojom.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.GetBackgroundTracingAgentProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableSystemTracingService
content.mojom.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.EnableSystemTracingService_Params',
      packedSize: 16,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CrashHungProcess
content.mojom.mojom.ChildProcess_CrashHungProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.CrashHungProcess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BindServiceInterface
content.mojom.mojom.ChildProcess_BindServiceInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.BindServiceInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindReceiver
content.mojom.mojom.ChildProcess_BindReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.BindReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetProfilingFile
content.mojom.mojom.ChildProcess_SetProfilingFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.SetProfilingFile_Params',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WriteClangProfilingProfile
content.mojom.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.WriteClangProfilingProfile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetPseudonymizationSalt
content.mojom.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.SetPseudonymizationSalt_Params',
      packedSize: 16,
      fields: [
        { name: 'salt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReinitializeLogging
content.mojom.mojom.ChildProcess_ReinitializeLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.ReinitializeLogging_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: content.mojom.LoggingSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMemoryPressure
content.mojom.mojom.ChildProcess_OnMemoryPressure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.OnMemoryPressure_Params',
      packedSize: 16,
      fields: [
        { name: 'memory_pressure_level', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.MemoryPressureLevelSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBatterySaverMode
content.mojom.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ChildProcess.SetBatterySaverMode_Params',
      packedSize: 16,
      fields: [
        { name: 'battery_saver_mode_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.ChildProcessPtr = content.mojom.mojom.ChildProcessRemote;
content.mojom.mojom.ChildProcessRequest = content.mojom.mojom.ChildProcessPendingReceiver;

