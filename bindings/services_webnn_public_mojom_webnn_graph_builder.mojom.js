// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph_builder.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var blink = blink || {};


// Struct: CreateGraphSuccess
webnn.mojom.mojom.CreateGraphSuccessSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CreateGraphSuccess',
      packedSize: 24,
      fields: [
        { name: 'graph_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(webnn.mojom.DeviceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebNNGraphBuilder
webnn.mojom.mojom.WebNNGraphBuilder = {};

webnn.mojom.mojom.WebNNGraphBuilderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.mojom.WebNNGraphBuilderRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNGraphBuilder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.mojom.WebNNGraphBuilderPendingReceiver,
      handle);
    this.$ = new webnn.mojom.mojom.WebNNGraphBuilderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.mojom.WebNNGraphBuilderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPendingConstant(constant_handle, data_type, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec,
      null,
      [constant_handle, data_type, data]);
  }

  createGraph(graph_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec,
      null,
      [graph_info]);
  }

  isValidGraphForTesting(context_properties, graph_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec,
      webnn.mojom.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec,
      [context_properties, graph_info]);
  }

};

webnn.mojom.mojom.WebNNGraphBuilder.getRemote = function() {
  let remote = new webnn.mojom.mojom.WebNNGraphBuilderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNGraphBuilder',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePendingConstant
webnn.mojom.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.CreatePendingConstant_Params',
      packedSize: 40,
      fields: [
        { name: 'constant_handle', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.WebNNPendingConstantTokenSpec, nullable: false, minVersion: 0 },
        { name: 'data_type', packedOffset: 24, packedBitOffset: 0, type: webnn.mojom.DataTypeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for CreateGraph
webnn.mojom.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.CreateGraph_Params',
      packedSize: 16,
      fields: [
        { name: 'graph_info', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.GraphInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsValidGraphForTesting
webnn.mojom.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.IsValidGraphForTesting_Params',
      packedSize: 24,
      fields: [
        { name: 'context_properties', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.ContextPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'graph_info', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.GraphInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

webnn.mojom.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNGraphBuilder.IsValidGraphForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_valid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webnn.mojom.mojom.WebNNGraphBuilderPtr = webnn.mojom.mojom.WebNNGraphBuilderRemote;
webnn.mojom.mojom.WebNNGraphBuilderRequest = webnn.mojom.mojom.WebNNGraphBuilderPendingReceiver;

