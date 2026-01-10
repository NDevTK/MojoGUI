// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/graph_executor.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};

chromeos.machine_learning.mojom.ExecuteResultSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.GraphExecutor = {};
chromeos.machine_learning.mojom.GraphExecutor.$interfaceName = 'chromeos.machine_learning.mojom.GraphExecutor';
chromeos.machine_learning.mojom.GraphExecutor_Execute_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.GraphExecutor_Execute_ResponseParamsSpec = { $: {} };

// Enum: ExecuteResult
chromeos.machine_learning.mojom.ExecuteResult = {
  OK: 0,
  INPUT_MISSING_ERROR: 1,
  UNKNOWN_INPUT_ERROR: 2,
  INPUT_TYPE_ERROR: 3,
  INPUT_SHAPE_ERROR: 4,
  INPUT_FORMAT_ERROR: 5,
  OUTPUT_MISSING_ERROR: 6,
  UNKNOWN_OUTPUT_ERROR: 7,
  DUPLICATE_OUTPUT_ERROR: 8,
  EXECUTION_ERROR: 9,
};

// Interface: GraphExecutor
mojo.internal.Struct(
    chromeos.machine_learning.mojom.GraphExecutor_Execute_ParamsSpec, 'chromeos.machine_learning.mojom.GraphExecutor_Execute_Params', [
      mojo.internal.StructField('inputs', 0, 0, mojo.internal.Map(mojo.internal.String, chromeos.machine_learning.mojom.TensorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_names', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.GraphExecutor_Execute_ResponseParamsSpec, 'chromeos.machine_learning.mojom.GraphExecutor_Execute_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.ExecuteResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('outputs', 8, 0, mojo.internal.Array(chromeos.machine_learning.mojom.TensorSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

chromeos.machine_learning.mojom.GraphExecutorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.GraphExecutorRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.GraphExecutor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.GraphExecutorPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.GraphExecutorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.GraphExecutorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  execute(inputs, output_names) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.GraphExecutor_Execute_ParamsSpec,
      chromeos.machine_learning.mojom.GraphExecutor_Execute_ResponseParamsSpec,
      [inputs, output_names],
      false);
  }

};

chromeos.machine_learning.mojom.GraphExecutor.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.GraphExecutorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.GraphExecutor',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.GraphExecutorReceiver = class {
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
        
        // Try Method 0: Execute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.machine_learning.mojom.GraphExecutor_Execute_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Execute (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.GraphExecutor_Execute_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.execute');
          const result = this.impl.execute(params.inputs, params.output_names);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.GraphExecutor_Execute_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.machine_learning.mojom.GraphExecutorReceiver = chromeos.machine_learning.mojom.GraphExecutorReceiver;

chromeos.machine_learning.mojom.GraphExecutorPtr = chromeos.machine_learning.mojom.GraphExecutorRemote;
chromeos.machine_learning.mojom.GraphExecutorRequest = chromeos.machine_learning.mojom.GraphExecutorPendingReceiver;

