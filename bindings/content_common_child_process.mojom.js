// Auto-generated MojoJS binding
// Source: chromium_src/content/common/child_process.mojom
// Module: content.mojom

'use strict';

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

content.mojom.ChildProcessHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Ping
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcessHost_Ping_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ping (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindHostReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindHostReceiver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcessHost_Ping_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.ping');
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
          const params = decoder.decodeStruct(content.mojom.ChildProcessHost_BindHostReceiver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindHostReceiver');
          const result = this.impl.bindHostReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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

content.mojom.ChildProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ProcessShutdown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_ProcessShutdown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessShutdown (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTaskPort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_GetTaskPort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTaskPort (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetIPCLoggingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIPCLoggingEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetBackgroundTracingAgentProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBackgroundTracingAgentProvider (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: EnableSystemTracingService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableSystemTracingService (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CrashHungProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_CrashHungProcess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CrashHungProcess (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindServiceInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_BindServiceInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindServiceInterface (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BindReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_BindReceiver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindReceiver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetProfilingFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_SetProfilingFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProfilingFile (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: WriteClangProfilingProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteClangProfilingProfile (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetPseudonymizationSalt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPseudonymizationSalt (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ReinitializeLogging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReinitializeLogging (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnMemoryPressure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMemoryPressure (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetBatterySaverMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBatterySaverMode (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_ProcessShutdown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processShutdown');
          const result = this.impl.processShutdown();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_GetTaskPort_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTaskPort');
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
          const params = decoder.decodeStruct(content.mojom.ChildProcess_SetIPCLoggingEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIPCLoggingEnabled');
          const result = this.impl.setIPCLoggingEnabled(params.on);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_GetBackgroundTracingAgentProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBackgroundTracingAgentProvider');
          const result = this.impl.getBackgroundTracingAgentProvider(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_EnableSystemTracingService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableSystemTracingService');
          const result = this.impl.enableSystemTracingService(params.remote);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_CrashHungProcess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.crashHungProcess');
          const result = this.impl.crashHungProcess();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_BindServiceInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindServiceInterface');
          const result = this.impl.bindServiceInterface(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_BindReceiver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindReceiver');
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_SetProfilingFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setProfilingFile');
          const result = this.impl.setProfilingFile(params.file);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_WriteClangProfilingProfile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeClangProfilingProfile');
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
          const params = decoder.decodeStruct(content.mojom.ChildProcess_SetPseudonymizationSalt_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPseudonymizationSalt');
          const result = this.impl.setPseudonymizationSalt(params.salt);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_ReinitializeLogging_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reinitializeLogging');
          const result = this.impl.reinitializeLogging(params.settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_OnMemoryPressure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMemoryPressure');
          const result = this.impl.onMemoryPressure(params.memory_pressure_level);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.ChildProcess_SetBatterySaverMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBatterySaverMode');
          const result = this.impl.setBatterySaverMode(params.battery_saver_mode_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.ChildProcessReceiver = content.mojom.ChildProcessReceiver;

content.mojom.ChildProcessPtr = content.mojom.ChildProcessRemote;
content.mojom.ChildProcessRequest = content.mojom.ChildProcessPendingReceiver;

