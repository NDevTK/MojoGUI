// Auto-generated MojoJS binding
// Source: chromium_src/content/common/child_process.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var IPC = IPC || {};
var mojo_base = mojo_base || {};
var tracing = tracing || {};

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
      mojo.internal.StructField('log_file_descriptor', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('logging_dest', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
  ping() {
    return this.$.ping();
  }
  bindHostReceiver(receiver) {
    return this.$.bindHostReceiver(receiver);
  }
};

content.mojom.ChildProcessHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildProcessHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  ping() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.ChildProcessHost_Ping_ParamsSpec,
      content.mojom.ChildProcessHost_Ping_ResponseParamsSpec,
      [],
      false);
  }

  bindHostReceiver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

content.mojom.ChildProcessHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildProcessHost', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(content.mojom.ChildProcessHost_Ping_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcessHost_Ping_ParamsSpec.$.structSpec);
          const result = this.impl.ping();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.ChildProcessHost_Ping_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec.$.structSpec);
          const result = this.impl.bindHostReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.ChildProcessHostReceiver = content.mojom.ChildProcessHostReceiver;

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
  processShutdown() {
    return this.$.processShutdown();
  }
  getTaskPort() {
    return this.$.getTaskPort();
  }
  setIPCLoggingEnabled(on) {
    return this.$.setIPCLoggingEnabled(on);
  }
  getBackgroundTracingAgentProvider(receiver) {
    return this.$.getBackgroundTracingAgentProvider(receiver);
  }
  enableSystemTracingService(remote) {
    return this.$.enableSystemTracingService(remote);
  }
  crashHungProcess() {
    return this.$.crashHungProcess();
  }
  bindServiceInterface(receiver) {
    return this.$.bindServiceInterface(receiver);
  }
  bindReceiver(receiver) {
    return this.$.bindReceiver(receiver);
  }
  setProfilingFile(file) {
    return this.$.setProfilingFile(file);
  }
  writeClangProfilingProfile() {
    return this.$.writeClangProfilingProfile();
  }
  setPseudonymizationSalt(salt) {
    return this.$.setPseudonymizationSalt(salt);
  }
  reinitializeLogging(settings) {
    return this.$.reinitializeLogging(settings);
  }
  onMemoryPressure(memory_pressure_level) {
    return this.$.onMemoryPressure(memory_pressure_level);
  }
  setBatterySaverMode(battery_saver_mode_enabled) {
    return this.$.setBatterySaverMode(battery_saver_mode_enabled);
  }
};

content.mojom.ChildProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildProcess', [
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

  processShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.ChildProcess_ProcessShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  getTaskPort() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.ChildProcess_GetTaskPort_ParamsSpec,
      content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec,
      [],
      false);
  }

  setIPCLoggingEnabled(on) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec,
      null,
      [on],
      false);
  }

  getBackgroundTracingAgentProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  enableSystemTracingService(remote) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec,
      null,
      [remote],
      false);
  }

  crashHungProcess() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.ChildProcess_CrashHungProcess_ParamsSpec,
      null,
      [],
      false);
  }

  bindServiceInterface(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.ChildProcess_BindServiceInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindReceiver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.ChildProcess_BindReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setProfilingFile(file) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.ChildProcess_SetProfilingFile_ParamsSpec,
      null,
      [file],
      false);
  }

  writeClangProfilingProfile() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec,
      content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  setPseudonymizationSalt(salt) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec,
      null,
      [salt],
      false);
  }

  reinitializeLogging(settings) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec,
      null,
      [settings],
      false);
  }

  onMemoryPressure(memory_pressure_level) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec,
      null,
      [memory_pressure_level],
      false);
  }

  setBatterySaverMode(battery_saver_mode_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
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

content.mojom.ChildProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildProcess', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(content.mojom.ChildProcess_ProcessShutdown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_GetTaskPort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_CrashHungProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_BindServiceInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_BindReceiver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetProfilingFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_ProcessShutdown_ParamsSpec.$.structSpec);
          const result = this.impl.processShutdown();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_GetTaskPort_ParamsSpec.$.structSpec);
          const result = this.impl.getTaskPort();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.ChildProcess_GetTaskPort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setIPCLoggingEnabled(params.on);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec.$.structSpec);
          const result = this.impl.getBackgroundTracingAgentProvider(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec.$.structSpec);
          const result = this.impl.enableSystemTracingService(params.remote);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_CrashHungProcess_ParamsSpec.$.structSpec);
          const result = this.impl.crashHungProcess();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_BindServiceInterface_ParamsSpec.$.structSpec);
          const result = this.impl.bindServiceInterface(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_BindReceiver_ParamsSpec.$.structSpec);
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetProfilingFile_ParamsSpec.$.structSpec);
          const result = this.impl.setProfilingFile(params.file);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec.$.structSpec);
          const result = this.impl.writeClangProfilingProfile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.ChildProcess_WriteClangProfilingProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec.$.structSpec);
          const result = this.impl.setPseudonymizationSalt(params.salt);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec.$.structSpec);
          const result = this.impl.reinitializeLogging(params.settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec.$.structSpec);
          const result = this.impl.onMemoryPressure(params.memory_pressure_level);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec.$.structSpec);
          const result = this.impl.setBatterySaverMode(params.battery_saver_mode_enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.ChildProcessReceiver = content.mojom.ChildProcessReceiver;

content.mojom.ChildProcessPtr = content.mojom.ChildProcessRemote;
content.mojom.ChildProcessRequest = content.mojom.ChildProcessPendingReceiver;

