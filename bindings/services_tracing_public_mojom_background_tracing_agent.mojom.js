// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/background_tracing_agent.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Interface: BackgroundTracingAgentClient
tracing.mojom.BackgroundTracingAgentClient = {};

tracing.mojom.BackgroundTracingAgentClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.BackgroundTracingAgentClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.BackgroundTracingAgentClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.BackgroundTracingAgentClientPendingReceiver,
      handle);
    this.$ = new tracing.mojom.BackgroundTracingAgentClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.BackgroundTracingAgentClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInitialized() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec,
      null,
      []);
  }

  onTriggerBackgroundTrace(rule, histogram_value, flow_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec,
      null,
      [rule, histogram_value, flow_id]);
  }

};

tracing.mojom.BackgroundTracingAgentClient.getRemote = function() {
  let remote = new tracing.mojom.BackgroundTracingAgentClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.BackgroundTracingAgentClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnInitialized
tracing.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgentClient.OnInitialized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTriggerBackgroundTrace
tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgentClient.OnTriggerBackgroundTrace_Params',
      packedSize: 32,
      fields: [
        { name: 'rule', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'histogram_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'flow_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tracing.mojom.BackgroundTracingAgentClientPtr = tracing.mojom.BackgroundTracingAgentClientRemote;
tracing.mojom.BackgroundTracingAgentClientRequest = tracing.mojom.BackgroundTracingAgentClientPendingReceiver;


// Interface: BackgroundTracingAgent
tracing.mojom.BackgroundTracingAgent = {};

tracing.mojom.BackgroundTracingAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.BackgroundTracingAgentRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.BackgroundTracingAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.BackgroundTracingAgentPendingReceiver,
      handle);
    this.$ = new tracing.mojom.BackgroundTracingAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.BackgroundTracingAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUMACallback(rule, histogram_name, histogram_lower_value, histogram_upper_value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec,
      null,
      [rule, histogram_name, histogram_lower_value, histogram_upper_value]);
  }

  clearUMACallback(rule) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec,
      null,
      [rule]);
  }

};

tracing.mojom.BackgroundTracingAgent.getRemote = function() {
  let remote = new tracing.mojom.BackgroundTracingAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.BackgroundTracingAgent',
    'context');
  return remote.$;
};

// ParamsSpec for SetUMACallback
tracing.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgent.SetUMACallback_Params',
      packedSize: 40,
      fields: [
        { name: 'rule', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'histogram_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'histogram_lower_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'histogram_upper_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearUMACallback
tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgent.ClearUMACallback_Params',
      packedSize: 16,
      fields: [
        { name: 'rule', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tracing.mojom.BackgroundTracingAgentPtr = tracing.mojom.BackgroundTracingAgentRemote;
tracing.mojom.BackgroundTracingAgentRequest = tracing.mojom.BackgroundTracingAgentPendingReceiver;


// Interface: BackgroundTracingAgentProvider
tracing.mojom.BackgroundTracingAgentProvider = {};

tracing.mojom.BackgroundTracingAgentProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.BackgroundTracingAgentProviderRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.BackgroundTracingAgentProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.BackgroundTracingAgentProviderPendingReceiver,
      handle);
    this.$ = new tracing.mojom.BackgroundTracingAgentProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.BackgroundTracingAgentProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(tracing_process_id, client, agent) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec,
      null,
      [tracing_process_id, client, agent]);
  }

};

tracing.mojom.BackgroundTracingAgentProvider.getRemote = function() {
  let remote = new tracing.mojom.BackgroundTracingAgentProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.BackgroundTracingAgentProvider',
    'context');
  return remote.$;
};

// ParamsSpec for Create
tracing.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgentProvider.Create_Params',
      packedSize: 32,
      fields: [
        { name: 'tracing_process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'agent', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tracing.mojom.BackgroundTracingAgentProviderPtr = tracing.mojom.BackgroundTracingAgentProviderRemote;
tracing.mojom.BackgroundTracingAgentProviderRequest = tracing.mojom.BackgroundTracingAgentProviderPendingReceiver;

