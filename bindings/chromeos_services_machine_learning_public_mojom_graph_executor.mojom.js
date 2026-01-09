// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/graph_executor.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


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
chromeos.machine_learning.mojom.GraphExecutor = {};

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

// Legacy compatibility
chromeos.machine_learning.mojom.GraphExecutorPtr = chromeos.machine_learning.mojom.GraphExecutorRemote;
chromeos.machine_learning.mojom.GraphExecutorRequest = chromeos.machine_learning.mojom.GraphExecutorPendingReceiver;

