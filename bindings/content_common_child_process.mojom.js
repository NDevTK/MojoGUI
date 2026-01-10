// Auto-generated MojoJS binding
// Source: chromium_src/content/common/child_process.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var services = services || {};
var services = services || {};

content.mojom.LoggingSettingsSpec = { $: {} };
content.mojom.ChildProcessHost = {};
content.mojom.ChildProcessHost.$interfaceName = 'content.mojom.ChildProcessHost';
content.mojom.ChildProcessHost_Ping_ParamsSpec = { $: {} };
content.mojom.ChildProcessHost_Ping_ResponseParamsSpec = { $: {} };
content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec = { $: {} };
content.mojom.ChildProcess = {};
content.mojom.ChildProcess.$interfaceName = 'content.mojom.ChildProcess';
content.mojom.ChildProcess_ProcessShutdown_ParamsSpec = { $: {} };
content.mojom.ChildProcess_GetTaskPort_ParamsSpec = { $: {} };
content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec = { $: {} };
content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec = { $: {} };
content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec = { $: {} };
content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec = { $: {} };
content.mojom.ChildProcess_CrashHungProcess_ParamsSpec = { $: {} };
content.mojom.ChildProcess_BindServiceInterface_ParamsSpec = { $: {} };
content.mojom.ChildProcess_BindReceiver_ParamsSpec = { $: {} };
content.mojom.ChildProcess_SetProfilingFile_ParamsSpec = { $: {} };
content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec = { $: {} };
content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec = { $: {} };
content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec = { $: {} };
content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec = { $: {} };
content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec = { $: {} };
content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec = { $: {} };

// Struct: LoggingSettings
mojo.internal.Struct(
    content.mojom.LoggingSettingsSpec, 'content.mojom.LoggingSettings', [
      mojo.internal.StructField('logging_dest', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('log_file_descriptor', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ChildProcessHost
mojo.internal.Struct(
    content.mojom.ChildProcessHost_Ping_ParamsSpec, 'content.mojom.ChildProcessHost_Ping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcessHost_Ping_ResponseParamsSpec, 'content.mojom.ChildProcessHost_Ping_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec, 'content.mojom.ChildProcessHost_BindHostReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.ChildProcessHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ChildProcessHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ChildProcessHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ChildProcessHostPendingReceiver,
      handle);
    this.$ = new content.mojom.ChildProcessHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.ChildProcessHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.ChildProcessHost_Ping_ParamsSpec,
      content.mojom.ChildProcessHost_Ping_ResponseParamsSpec,
      [],
      false);
  }

  bindHostReceiver(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

content.mojom.ChildProcessHost.getRemote = function() {
  let remote = new content.mojom.ChildProcessHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ChildProcessHost',
    'context');
  return remote.$;
};

content.mojom.ChildProcessHostPtr = content.mojom.ChildProcessHostRemote;
content.mojom.ChildProcessHostRequest = content.mojom.ChildProcessHostPendingReceiver;


// Interface: ChildProcess
mojo.internal.Struct(
    content.mojom.ChildProcess_ProcessShutdown_ParamsSpec, 'content.mojom.ChildProcess_ProcessShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_GetTaskPort_ParamsSpec, 'content.mojom.ChildProcess_GetTaskPort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec, 'content.mojom.ChildProcess_GetTaskPort_ResponseParams', [
      mojo.internal.StructField('task_port', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec, 'content.mojom.ChildProcess_SetIPCLoggingEnabled_Params', [
      mojo.internal.StructField('on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec, 'content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.BackgroundTracingAgentProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec, 'content.mojom.ChildProcess_EnableSystemTracingService_Params', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.SystemTracingServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_CrashHungProcess_ParamsSpec, 'content.mojom.ChildProcess_CrashHungProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_BindServiceInterface_ParamsSpec, 'content.mojom.ChildProcess_BindServiceInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_BindReceiver_ParamsSpec, 'content.mojom.ChildProcess_BindReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetProfilingFile_ParamsSpec, 'content.mojom.ChildProcess_SetProfilingFile_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec, 'content.mojom.ChildProcess_WriteClangProfilingProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec, 'content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec, 'content.mojom.ChildProcess_SetPseudonymizationSalt_Params', [
      mojo.internal.StructField('salt', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec, 'content.mojom.ChildProcess_ReinitializeLogging_Params', [
      mojo.internal.StructField('settings', 0, 0, content.mojom.LoggingSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec, 'content.mojom.ChildProcess_OnMemoryPressure_Params', [
      mojo.internal.StructField('memory_pressure_level', 0, 0, mojo_base.mojom.MemoryPressureLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec, 'content.mojom.ChildProcess_SetBatterySaverMode_Params', [
      mojo.internal.StructField('battery_saver_mode_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.ChildProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ChildProcessRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ChildProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ChildProcessPendingReceiver,
      handle);
    this.$ = new content.mojom.ChildProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.ChildProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  processShutdown() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.ChildProcess_ProcessShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  getTaskPort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.ChildProcess_GetTaskPort_ParamsSpec,
      content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec,
      [],
      false);
  }

  setIPCLoggingEnabled(on) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec,
      null,
      [on],
      false);
  }

  getBackgroundTracingAgentProvider(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  enableSystemTracingService(remote) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec,
      null,
      [remote],
      false);
  }

  crashHungProcess() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.ChildProcess_CrashHungProcess_ParamsSpec,
      null,
      [],
      false);
  }

  bindServiceInterface(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.ChildProcess_BindServiceInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindReceiver(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.ChildProcess_BindReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setProfilingFile(file) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.ChildProcess_SetProfilingFile_ParamsSpec,
      null,
      [file],
      false);
  }

  writeClangProfilingProfile() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec,
      content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  setPseudonymizationSalt(salt) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec,
      null,
      [salt],
      false);
  }

  reinitializeLogging(settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec,
      null,
      [settings],
      false);
  }

  onMemoryPressure(memory_pressure_level) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec,
      null,
      [memory_pressure_level],
      false);
  }

  setBatterySaverMode(battery_saver_mode_enabled) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec,
      null,
      [battery_saver_mode_enabled],
      false);
  }

};

content.mojom.ChildProcess.getRemote = function() {
  let remote = new content.mojom.ChildProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ChildProcess',
    'context');
  return remote.$;
};

content.mojom.ChildProcessPtr = content.mojom.ChildProcessRemote;
content.mojom.ChildProcessRequest = content.mojom.ChildProcessPendingReceiver;

