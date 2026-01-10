// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_embedder_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.CrossOriginEmbedderPolicyValueSpec = { $: mojo.internal.Enum() };
network.mojom.CrossOriginEmbedderPolicySpec = { $: {} };
network.mojom.CrossOriginEmbedderPolicyReporter = {};
network.mojom.CrossOriginEmbedderPolicyReporter.$interfaceName = 'network.mojom.CrossOriginEmbedderPolicyReporter';
network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec = { $: {} };
network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec = { $: {} };

// Enum: CrossOriginEmbedderPolicyValue
network.mojom.CrossOriginEmbedderPolicyValue = {
  kNone: 0,
  kRequireCorp: 1,
  kCredentialless: 2,
};

// Struct: CrossOriginEmbedderPolicy
mojo.internal.Struct(
    network.mojom.CrossOriginEmbedderPolicySpec, 'network.mojom.CrossOriginEmbedderPolicy', [
      mojo.internal.StructField('value', 0, 0, network.mojom.CrossOriginEmbedderPolicyValueSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('reporting_endpoint', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('report_only_reporting_endpoint', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CrossOriginEmbedderPolicyReporter
mojo.internal.Struct(
    network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec, 'network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_Params', [
      mojo.internal.StructField('blocked_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination', 8, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_only', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec, 'network.mojom.CrossOriginEmbedderPolicyReporter_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CrossOriginEmbedderPolicyReporterSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CrossOriginEmbedderPolicyReporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CrossOriginEmbedderPolicyReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver,
      handle);
    this.$ = new network.mojom.CrossOriginEmbedderPolicyReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CrossOriginEmbedderPolicyReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueCorpViolationReport(blocked_url, destination, report_only) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec,
      null,
      [blocked_url, destination, report_only],
      false);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

network.mojom.CrossOriginEmbedderPolicyReporter.getRemote = function() {
  let remote = new network.mojom.CrossOriginEmbedderPolicyReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CrossOriginEmbedderPolicyReporter',
    'context');
  return remote.$;
};

network.mojom.CrossOriginEmbedderPolicyReporterReceiver = class {
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
        
        // Try Method 0: QueueCorpViolationReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueCorpViolationReport (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.queueCorpViolationReport');
          const result = this.impl.queueCorpViolationReport(params.blocked_url, params.destination, params.report_only);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.CrossOriginEmbedderPolicyReporterReceiver = network.mojom.CrossOriginEmbedderPolicyReporterReceiver;

network.mojom.CrossOriginEmbedderPolicyReporterPtr = network.mojom.CrossOriginEmbedderPolicyReporterRemote;
network.mojom.CrossOriginEmbedderPolicyReporterRequest = network.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver;

