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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.machine_learning.mojom.GraphExecutor_Execute_ParamsSpec.$.decode(message.payload);
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
      }
    }});
  }
};

chromeos.machine_learning.mojom.GraphExecutorReceiver = chromeos.machine_learning.mojom.GraphExecutorReceiver;

chromeos.machine_learning.mojom.GraphExecutorPtr = chromeos.machine_learning.mojom.GraphExecutorRemote;
chromeos.machine_learning.mojom.GraphExecutorRequest = chromeos.machine_learning.mojom.GraphExecutorPendingReceiver;

