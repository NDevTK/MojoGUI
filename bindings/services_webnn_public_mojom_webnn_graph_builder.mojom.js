// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph_builder.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Interface: WebNNGraphBuilder
webnn.mojom.WebNNGraphBuilderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.WebNNGraphBuilderRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNGraphBuilder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.WebNNGraphBuilderPendingReceiver,
      handle);
    this.$ = new webnn.mojom.WebNNGraphBuilderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.WebNNGraphBuilderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPendingConstant(constant_handle, data_type, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec.$,
      null,
      [constant_handle, data_type, data]);
  }

  createGraph(graph_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec.$,
      null,
      [graph_info]);
  }

  isValidGraphForTesting(context_properties, graph_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec.$,
      webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec.$,
      [context_properties, graph_info]);
  }

};

webnn.mojom.WebNNGraphBuilder.getRemote = function() {
  let remote = new webnn.mojom.WebNNGraphBuilderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNGraphBuilder',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePendingConstant
webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.CreatePendingConstant_Params',
      packedSize: 32,
      fields: [
        { name: 'constant_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateGraph
webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.CreateGraph_Params',
      packedSize: 16,
      fields: [
        { name: 'graph_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsValidGraphForTesting
webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.IsValidGraphForTesting_Params',
      packedSize: 24,
      fields: [
        { name: 'context_properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'graph_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.IsValidGraphForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_valid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNGraphBuilderPtr = webnn.mojom.WebNNGraphBuilderRemote;
webnn.mojom.WebNNGraphBuilderRequest = webnn.mojom.WebNNGraphBuilderPendingReceiver;

