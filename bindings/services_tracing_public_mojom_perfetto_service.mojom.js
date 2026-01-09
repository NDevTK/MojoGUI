// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/perfetto_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Enum: ConsoleOutput
tracing.mojom.ConsoleOutput = {
  kOutputUnspecified: 0,
  kOutputStdOut: 1,
  kOutputStdErr: 2,
};

// Enum: BufferFillPolicy
tracing.mojom.BufferFillPolicy = {
  kUnspecified: 0,
  kRingBuffer: 1,
  kDiscard: 2,
};

// Enum: TracingClientPriority
tracing.mojom.TracingClientPriority = {
  kUnknown: 0,
  kBackground: 1,
  kUserInitiated: 2,
};

// Interface: ProducerHost
tracing.mojom.ProducerHost = {};

tracing.mojom.ProducerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.ProducerHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ProducerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.ProducerHostPendingReceiver,
      handle);
    this.$ = new tracing.mojom.ProducerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.ProducerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitData(data_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.ProducerHost_CommitData_ParamsSpec,
      null,
      null,
      [data_request],
      undefined,
      undefined
    );
  }

  registerDataSource(registration_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec,
      null,
      null,
      [registration_info],
      undefined,
      undefined
    );
  }

  updateDataSource(registration_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec,
      null,
      null,
      [registration_info],
      undefined,
      undefined
    );
  }

  registerTraceWriter(writer_id, target_buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec,
      null,
      null,
      [writer_id, target_buffer],
      undefined,
      undefined
    );
  }

  unregisterTraceWriter(writer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec,
      null,
      null,
      [writer_id],
      undefined,
      undefined
    );
  }

};

tracing.mojom.ProducerHost.getRemote = function() {
  let remote = new tracing.mojom.ProducerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ProducerHost',
    'context');
  return remote.$;
};

// ParamsSpec for CommitData
tracing.mojom.ProducerHost_CommitData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.CommitData_Params',
      packedSize: 16,
      fields: [
        { name: 'data_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterDataSource
tracing.mojom.ProducerHost_RegisterDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.RegisterDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'registration_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateDataSource
tracing.mojom.ProducerHost_UpdateDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.UpdateDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'registration_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterTraceWriter
tracing.mojom.ProducerHost_RegisterTraceWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.RegisterTraceWriter_Params',
      packedSize: 24,
      fields: [
        { name: 'writer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'target_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UnregisterTraceWriter
tracing.mojom.ProducerHost_UnregisterTraceWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerHost.UnregisterTraceWriter_Params',
      packedSize: 16,
      fields: [
        { name: 'writer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.ProducerHostPtr = tracing.mojom.ProducerHostRemote;
tracing.mojom.ProducerHostRequest = tracing.mojom.ProducerHostPendingReceiver;


// Interface: ProducerClient
tracing.mojom.ProducerClient = {};

tracing.mojom.ProducerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.ProducerClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ProducerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.ProducerClientPendingReceiver,
      handle);
    this.$ = new tracing.mojom.ProducerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.ProducerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTracingStart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  startDataSource(id, data_source_config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.ProducerClient_StartDataSource_ParamsSpec,
      null,
      null,
      [id, data_source_config],
      undefined,
      undefined
    );
  }

  stopDataSource(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.ProducerClient_StopDataSource_ParamsSpec,
      null,
      null,
      [id],
      undefined,
      undefined
    );
  }

  flush(flush_request_id, data_source_ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tracing.mojom.ProducerClient_Flush_ParamsSpec,
      null,
      null,
      [flush_request_id, data_source_ids],
      undefined,
      undefined
    );
  }

  clearIncrementalState() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

tracing.mojom.ProducerClient.getRemote = function() {
  let remote = new tracing.mojom.ProducerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ProducerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnTracingStart
tracing.mojom.ProducerClient_OnTracingStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.OnTracingStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartDataSource
tracing.mojom.ProducerClient_StartDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.StartDataSource_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'data_source_config', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopDataSource
tracing.mojom.ProducerClient_StopDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.StopDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
tracing.mojom.ProducerClient_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.Flush_Params',
      packedSize: 24,
      fields: [
        { name: 'flush_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'data_source_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearIncrementalState
tracing.mojom.ProducerClient_ClearIncrementalState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ProducerClient.ClearIncrementalState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
tracing.mojom.ProducerClientPtr = tracing.mojom.ProducerClientRemote;
tracing.mojom.ProducerClientRequest = tracing.mojom.ProducerClientPendingReceiver;


// Interface: PerfettoService
tracing.mojom.PerfettoService = {};

tracing.mojom.PerfettoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.PerfettoServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.PerfettoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.PerfettoServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.PerfettoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.PerfettoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToProducerHost(producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec,
      null,
      null,
      [producer_client, producer_host_receiver, shared_memory, shared_memory_buffer_page_size_bytes],
      undefined,
      undefined
    );
  }

};

tracing.mojom.PerfettoService.getRemote = function() {
  let remote = new tracing.mojom.PerfettoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.PerfettoService',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToProducerHost
tracing.mojom.PerfettoService_ConnectToProducerHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.PerfettoService.ConnectToProducerHost_Params',
      packedSize: 40,
      fields: [
        { name: 'producer_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'producer_host_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'shared_memory', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shared_memory_buffer_page_size_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
tracing.mojom.PerfettoServicePtr = tracing.mojom.PerfettoServiceRemote;
tracing.mojom.PerfettoServiceRequest = tracing.mojom.PerfettoServicePendingReceiver;


// Interface: ConsumerHost
tracing.mojom.ConsumerHost = {};

tracing.mojom.ConsumerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.ConsumerHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.ConsumerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.ConsumerHostPendingReceiver,
      handle);
    this.$ = new tracing.mojom.ConsumerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.ConsumerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableTracing(tracing_session_host, tracing_session_client, config, output_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec,
      null,
      null,
      [tracing_session_host, tracing_session_client, config, output_file],
      undefined,
      undefined
    );
  }

  cloneSession(tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.ConsumerHost_CloneSession_ParamsSpec,
      tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec,
      tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec,
      [tracing_session_host, tracing_session_client, unguessable_name, privacy_filtering_enabled],
      undefined,
      undefined
    );
  }

};

tracing.mojom.ConsumerHost.getRemote = function() {
  let remote = new tracing.mojom.ConsumerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.ConsumerHost',
    'context');
  return remote.$;
};

// ParamsSpec for EnableTracing
tracing.mojom.ConsumerHost_EnableTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ConsumerHost.EnableTracing_Params',
      packedSize: 40,
      fields: [
        { name: 'tracing_session_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'tracing_session_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'output_file', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for CloneSession
tracing.mojom.ConsumerHost_CloneSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ConsumerHost.CloneSession_Params',
      packedSize: 40,
      fields: [
        { name: 'tracing_session_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'tracing_session_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'unguessable_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'privacy_filtering_enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

tracing.mojom.ConsumerHost_CloneSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.ConsumerHost.CloneSession_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
tracing.mojom.ConsumerHostPtr = tracing.mojom.ConsumerHostRemote;
tracing.mojom.ConsumerHostRequest = tracing.mojom.ConsumerHostPendingReceiver;


// Interface: TracingSessionHost
tracing.mojom.TracingSessionHost = {};

tracing.mojom.TracingSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingSessionHostRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingSessionHostPendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracingSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  changeTraceConfig(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec,
      null,
      null,
      [config],
      undefined,
      undefined
    );
  }

  disableTracing() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  readBuffers(stream) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec,
      null,
      null,
      [stream],
      undefined,
      undefined
    );
  }

  requestBufferUsage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec,
      tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec,
      tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  disableTracingAndEmitJson(agent_label_filter, stream, privacy_filtering_enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec,
      null,
      null,
      [agent_label_filter, stream, privacy_filtering_enabled],
      undefined,
      undefined
    );
  }

};

tracing.mojom.TracingSessionHost.getRemote = function() {
  let remote = new tracing.mojom.TracingSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingSessionHost',
    'context');
  return remote.$;
};

// ParamsSpec for ChangeTraceConfig
tracing.mojom.TracingSessionHost_ChangeTraceConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.ChangeTraceConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableTracing
tracing.mojom.TracingSessionHost_DisableTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.DisableTracing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReadBuffers
tracing.mojom.TracingSessionHost_ReadBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.ReadBuffers_Params',
      packedSize: 16,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestBufferUsage
tracing.mojom.TracingSessionHost_RequestBufferUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.RequestBufferUsage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tracing.mojom.TracingSessionHost_RequestBufferUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.RequestBufferUsage_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'percent_full', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'data_loss', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DisableTracingAndEmitJson
tracing.mojom.TracingSessionHost_DisableTracingAndEmitJson_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionHost.DisableTracingAndEmitJson_Params',
      packedSize: 32,
      fields: [
        { name: 'agent_label_filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'privacy_filtering_enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
tracing.mojom.TracingSessionHostPtr = tracing.mojom.TracingSessionHostRemote;
tracing.mojom.TracingSessionHostRequest = tracing.mojom.TracingSessionHostPendingReceiver;


// Interface: TracingSessionClient
tracing.mojom.TracingSessionClient = {};

tracing.mojom.TracingSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingSessionClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingSessionClientPendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracingSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTracingEnabled() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onTracingDisabled(tracing_succeeded) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec,
      null,
      null,
      [tracing_succeeded],
      undefined,
      undefined
    );
  }

};

tracing.mojom.TracingSessionClient.getRemote = function() {
  let remote = new tracing.mojom.TracingSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingSessionClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnTracingEnabled
tracing.mojom.TracingSessionClient_OnTracingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionClient.OnTracingEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnTracingDisabled
tracing.mojom.TracingSessionClient_OnTracingDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.TracingSessionClient.OnTracingDisabled_Params',
      packedSize: 16,
      fields: [
        { name: 'tracing_succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.TracingSessionClientPtr = tracing.mojom.TracingSessionClientRemote;
tracing.mojom.TracingSessionClientRequest = tracing.mojom.TracingSessionClientPendingReceiver;

