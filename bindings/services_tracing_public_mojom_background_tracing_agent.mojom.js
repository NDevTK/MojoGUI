// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/background_tracing_agent.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Struct: BackgroundTracingRule
tracing.mojom.mojom.BackgroundTracingRuleSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingRule',
      packedSize: 16,
      fields: [
        { name: 'rule_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: BackgroundTracingAgentClient
tracing.mojom.mojom.BackgroundTracingAgentClient = {};

tracing.mojom.mojom.BackgroundTracingAgentClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.mojom.BackgroundTracingAgentClientRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.BackgroundTracingAgentClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.mojom.BackgroundTracingAgentClientPendingReceiver,
      handle);
    this.$ = new tracing.mojom.mojom.BackgroundTracingAgentClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.mojom.BackgroundTracingAgentClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInitialized() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec,
      null,
      []);
  }

  onTriggerBackgroundTrace(rule, histogram_value, flow_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec,
      null,
      [rule, histogram_value, flow_id]);
  }

};

tracing.mojom.mojom.BackgroundTracingAgentClient.getRemote = function() {
  let remote = new tracing.mojom.mojom.BackgroundTracingAgentClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.BackgroundTracingAgentClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnInitialized
tracing.mojom.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgentClient.OnInitialized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnTriggerBackgroundTrace
tracing.mojom.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgentClient.OnTriggerBackgroundTrace_Params',
      packedSize: 32,
      fields: [
        { name: 'rule', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.BackgroundTracingRuleSpec, nullable: false, minVersion: 0 },
        { name: 'histogram_value_$flag', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'histogram_value_$value', originalFieldName: 'histogram_value' } },
        { name: 'histogram_value_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'histogram_value_$flag', originalFieldName: 'histogram_value' } },
        { name: 'flow_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
tracing.mojom.mojom.BackgroundTracingAgentClientPtr = tracing.mojom.mojom.BackgroundTracingAgentClientRemote;
tracing.mojom.mojom.BackgroundTracingAgentClientRequest = tracing.mojom.mojom.BackgroundTracingAgentClientPendingReceiver;


// Interface: BackgroundTracingAgent
tracing.mojom.mojom.BackgroundTracingAgent = {};

tracing.mojom.mojom.BackgroundTracingAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.mojom.BackgroundTracingAgentRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.BackgroundTracingAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.mojom.BackgroundTracingAgentPendingReceiver,
      handle);
    this.$ = new tracing.mojom.mojom.BackgroundTracingAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.mojom.BackgroundTracingAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUMACallback(rule, histogram_name, histogram_lower_value, histogram_upper_value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec,
      null,
      [rule, histogram_name, histogram_lower_value, histogram_upper_value]);
  }

  clearUMACallback(rule) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec,
      null,
      [rule]);
  }

};

tracing.mojom.mojom.BackgroundTracingAgent.getRemote = function() {
  let remote = new tracing.mojom.mojom.BackgroundTracingAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.BackgroundTracingAgent',
    'context');
  return remote.$;
};

// ParamsSpec for SetUMACallback
tracing.mojom.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgent.SetUMACallback_Params',
      packedSize: 32,
      fields: [
        { name: 'rule', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.BackgroundTracingRuleSpec, nullable: false, minVersion: 0 },
        { name: 'histogram_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'histogram_lower_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'histogram_upper_value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ClearUMACallback
tracing.mojom.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgent.ClearUMACallback_Params',
      packedSize: 16,
      fields: [
        { name: 'rule', packedOffset: 0, packedBitOffset: 0, type: tracing.mojom.BackgroundTracingRuleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
tracing.mojom.mojom.BackgroundTracingAgentPtr = tracing.mojom.mojom.BackgroundTracingAgentRemote;
tracing.mojom.mojom.BackgroundTracingAgentRequest = tracing.mojom.mojom.BackgroundTracingAgentPendingReceiver;


// Interface: BackgroundTracingAgentProvider
tracing.mojom.mojom.BackgroundTracingAgentProvider = {};

tracing.mojom.mojom.BackgroundTracingAgentProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.mojom.BackgroundTracingAgentProviderRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.BackgroundTracingAgentProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.mojom.BackgroundTracingAgentProviderPendingReceiver,
      handle);
    this.$ = new tracing.mojom.mojom.BackgroundTracingAgentProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.mojom.BackgroundTracingAgentProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(tracing_process_id, client, agent) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec,
      null,
      [tracing_process_id, client, agent]);
  }

};

tracing.mojom.mojom.BackgroundTracingAgentProvider.getRemote = function() {
  let remote = new tracing.mojom.mojom.BackgroundTracingAgentProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.BackgroundTracingAgentProvider',
    'context');
  return remote.$;
};

// ParamsSpec for Create
tracing.mojom.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracing.mojom.BackgroundTracingAgentProvider.Create_Params',
      packedSize: 32,
      fields: [
        { name: 'tracing_process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(tracing.mojom.BackgroundTracingAgentClientRemote), nullable: false, minVersion: 0 },
        { name: 'agent', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(tracing.mojom.BackgroundTracingAgentRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
tracing.mojom.mojom.BackgroundTracingAgentProviderPtr = tracing.mojom.mojom.BackgroundTracingAgentProviderRemote;
tracing.mojom.mojom.BackgroundTracingAgentProviderRequest = tracing.mojom.mojom.BackgroundTracingAgentProviderPendingReceiver;

