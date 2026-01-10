// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/background_tracing_agent.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};

tracing.mojom.BackgroundTracingRuleSpec = { $: {} };
tracing.mojom.BackgroundTracingAgentClient = {};
tracing.mojom.BackgroundTracingAgentClient.$interfaceName = 'tracing.mojom.BackgroundTracingAgentClient';
tracing.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec = { $: {} };
tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec = { $: {} };
tracing.mojom.BackgroundTracingAgent = {};
tracing.mojom.BackgroundTracingAgent.$interfaceName = 'tracing.mojom.BackgroundTracingAgent';
tracing.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec = { $: {} };
tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec = { $: {} };
tracing.mojom.BackgroundTracingAgentProvider = {};
tracing.mojom.BackgroundTracingAgentProvider.$interfaceName = 'tracing.mojom.BackgroundTracingAgentProvider';
tracing.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec = { $: {} };

// Struct: BackgroundTracingRule
mojo.internal.Struct(
    tracing.mojom.BackgroundTracingRuleSpec, 'tracing.mojom.BackgroundTracingRule', [
      mojo.internal.StructField('rule_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: BackgroundTracingAgentClient
mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec, 'tracing.mojom.BackgroundTracingAgentClient_OnInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec, 'tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params', [
      mojo.internal.StructField('rule', 0, 0, tracing.mojom.BackgroundTracingRuleSpec, null, false, 0, undefined),
      mojo.internal.StructField('histogram_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'histogram_value_$value', originalFieldName: 'histogram_value' }),
      mojo.internal.StructField('histogram_value_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'histogram_value_$flag', originalFieldName: 'histogram_value' }),
      mojo.internal.StructField('flow_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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

tracing.mojom.BackgroundTracingAgentClientPtr = tracing.mojom.BackgroundTracingAgentClientRemote;
tracing.mojom.BackgroundTracingAgentClientRequest = tracing.mojom.BackgroundTracingAgentClientPendingReceiver;


// Interface: BackgroundTracingAgent
mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec, 'tracing.mojom.BackgroundTracingAgent_SetUMACallback_Params', [
      mojo.internal.StructField('rule', 0, 0, tracing.mojom.BackgroundTracingRuleSpec, null, false, 0, undefined),
      mojo.internal.StructField('histogram_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('histogram_lower_value', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('histogram_upper_value', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec, 'tracing.mojom.BackgroundTracingAgent_ClearUMACallback_Params', [
      mojo.internal.StructField('rule', 0, 0, tracing.mojom.BackgroundTracingRuleSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

tracing.mojom.BackgroundTracingAgentPtr = tracing.mojom.BackgroundTracingAgentRemote;
tracing.mojom.BackgroundTracingAgentRequest = tracing.mojom.BackgroundTracingAgentPendingReceiver;


// Interface: BackgroundTracingAgentProvider
mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec, 'tracing.mojom.BackgroundTracingAgentProvider_Create_Params', [
      mojo.internal.StructField('tracing_process_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(tracing.mojom.BackgroundTracingAgentClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent', 16, 0, mojo.internal.InterfaceRequest(tracing.mojom.BackgroundTracingAgentRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

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

tracing.mojom.BackgroundTracingAgentProviderPtr = tracing.mojom.BackgroundTracingAgentProviderRemote;
tracing.mojom.BackgroundTracingAgentProviderRequest = tracing.mojom.BackgroundTracingAgentProviderPendingReceiver;

