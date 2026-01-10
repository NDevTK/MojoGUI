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
      mojo.internal.StructField('rule', 0, 0, tracing.mojom.BackgroundTracingRuleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flow_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('histogram_value_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'histogram_value_$flag', originalFieldName: 'histogram_value' }),
      mojo.internal.StructField('histogram_value_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'histogram_value_$value', originalFieldName: 'histogram_value' }),
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
      [],
      false);
  }

  onTriggerBackgroundTrace(rule, histogram_value, flow_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec,
      null,
      [rule, histogram_value, flow_id],
      false);
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

tracing.mojom.BackgroundTracingAgentClientReceiver = class {
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
        
        // Try Method 0: OnInitialized
        try {
             decoder.decodeStruct(tracing.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInitialized (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnTriggerBackgroundTrace
        try {
             decoder.decodeStruct(tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTriggerBackgroundTrace (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tracing.mojom.BackgroundTracingAgentClient_OnInitialized_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInitialized');
          const result = this.impl.onInitialized();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tracing.mojom.BackgroundTracingAgentClient_OnTriggerBackgroundTrace_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTriggerBackgroundTrace');
          const result = this.impl.onTriggerBackgroundTrace(params.rule, params.histogram_value, params.flow_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tracing.mojom.BackgroundTracingAgentClientReceiver = tracing.mojom.BackgroundTracingAgentClientReceiver;

tracing.mojom.BackgroundTracingAgentClientPtr = tracing.mojom.BackgroundTracingAgentClientRemote;
tracing.mojom.BackgroundTracingAgentClientRequest = tracing.mojom.BackgroundTracingAgentClientPendingReceiver;


// Interface: BackgroundTracingAgent
mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec, 'tracing.mojom.BackgroundTracingAgent_SetUMACallback_Params', [
      mojo.internal.StructField('rule', 0, 0, tracing.mojom.BackgroundTracingRuleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('histogram_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('histogram_lower_value', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('histogram_upper_value', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec, 'tracing.mojom.BackgroundTracingAgent_ClearUMACallback_Params', [
      mojo.internal.StructField('rule', 0, 0, tracing.mojom.BackgroundTracingRuleSpec.$, null, false, 0, undefined),
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
      [rule, histogram_name, histogram_lower_value, histogram_upper_value],
      false);
  }

  clearUMACallback(rule) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec,
      null,
      [rule],
      false);
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

tracing.mojom.BackgroundTracingAgentReceiver = class {
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
        
        // Try Method 0: SetUMACallback
        try {
             decoder.decodeStruct(tracing.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUMACallback (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ClearUMACallback
        try {
             decoder.decodeStruct(tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUMACallback (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tracing.mojom.BackgroundTracingAgent_SetUMACallback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUMACallback');
          const result = this.impl.setUMACallback(params.rule, params.histogram_name, params.histogram_lower_value, params.histogram_upper_value);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tracing.mojom.BackgroundTracingAgent_ClearUMACallback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearUMACallback');
          const result = this.impl.clearUMACallback(params.rule);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tracing.mojom.BackgroundTracingAgentReceiver = tracing.mojom.BackgroundTracingAgentReceiver;

tracing.mojom.BackgroundTracingAgentPtr = tracing.mojom.BackgroundTracingAgentRemote;
tracing.mojom.BackgroundTracingAgentRequest = tracing.mojom.BackgroundTracingAgentPendingReceiver;


// Interface: BackgroundTracingAgentProvider
mojo.internal.Struct(
    tracing.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec, 'tracing.mojom.BackgroundTracingAgentProvider_Create_Params', [
      mojo.internal.StructField('tracing_process_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(tracing.mojom.BackgroundTracingAgentClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('agent', 16, 0, mojo.internal.InterfaceRequest(tracing.mojom.BackgroundTracingAgentSpec), null, false, 0, undefined),
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
      [tracing_process_id, client, agent],
      false);
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

tracing.mojom.BackgroundTracingAgentProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: Create
        try {
             decoder.decodeStruct(tracing.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tracing.mojom.BackgroundTracingAgentProvider_Create_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.tracing_process_id, params.client, params.agent);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tracing.mojom.BackgroundTracingAgentProviderReceiver = tracing.mojom.BackgroundTracingAgentProviderReceiver;

tracing.mojom.BackgroundTracingAgentProviderPtr = tracing.mojom.BackgroundTracingAgentProviderRemote;
tracing.mojom.BackgroundTracingAgentProviderRequest = tracing.mojom.BackgroundTracingAgentProviderPendingReceiver;

