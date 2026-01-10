// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph_builder.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var blink = blink || {};

webnn.mojom.CreateGraphSuccessSpec = { $: {} };
webnn.mojom.WebNNGraphBuilder = {};
webnn.mojom.WebNNGraphBuilder.$interfaceName = 'webnn.mojom.WebNNGraphBuilder';
webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec = { $: {} };
webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec = { $: {} };
webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec = { $: {} };
webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec = { $: {} };

// Struct: CreateGraphSuccess
mojo.internal.Struct(
    webnn.mojom.CreateGraphSuccessSpec, 'webnn.mojom.CreateGraphSuccess', [
      mojo.internal.StructField('graph_remote', 0, 0, mojo.internal.AssociatedInterfaceProxy(webnn.mojom.WebNNGraphRemote), null, false, 0, undefined),
      mojo.internal.StructField('devices', 8, 0, mojo.internal.Array(webnn.mojom.DeviceSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebNNGraphBuilder
mojo.internal.Struct(
    webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec, 'webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_Params', [
      mojo.internal.StructField('constant_handle', 0, 0, blink.mojom.WebNNPendingConstantTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('data_type', 8, 0, webnn.mojom.DataTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec, 'webnn.mojom.WebNNGraphBuilder_CreateGraph_Params', [
      mojo.internal.StructField('graph_info', 0, 0, webnn.mojom.GraphInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec, 'webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_Params', [
      mojo.internal.StructField('context_properties', 0, 0, webnn.mojom.ContextPropertiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('graph_info', 8, 0, webnn.mojom.GraphInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec, 'webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParams', [
      mojo.internal.StructField('is_valid', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec,
      null,
      [constant_handle, data_type, data],
      false);
  }

  createGraph(graph_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec,
      null,
      [graph_info],
      false);
  }

  isValidGraphForTesting(context_properties, graph_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec,
      webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec,
      [context_properties, graph_info],
      false);
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

webnn.mojom.WebNNGraphBuilderPtr = webnn.mojom.WebNNGraphBuilderRemote;
webnn.mojom.WebNNGraphBuilderRequest = webnn.mojom.WebNNGraphBuilderPendingReceiver;

