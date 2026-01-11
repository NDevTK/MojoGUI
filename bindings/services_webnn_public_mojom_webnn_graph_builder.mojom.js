// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_graph_builder.mojom
// Module: webnn.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('graph_remote', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('devices', 8, 0, mojo.internal.Array(webnn.mojom.DeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebNNGraphBuilder
mojo.internal.Struct(
    webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec, 'webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_Params', [
      mojo.internal.StructField('constant_handle', 0, 0, blink.mojom.WebNNPendingConstantTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_type', 8, 0, webnn.mojom.DataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec, 'webnn.mojom.WebNNGraphBuilder_CreateGraph_Params', [
      mojo.internal.StructField('graph_info', 0, 0, webnn.mojom.GraphInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec, 'webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_Params', [
      mojo.internal.StructField('context_properties', 0, 0, webnn.mojom.ContextPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('graph_info', 8, 0, webnn.mojom.GraphInfoSpec.$, null, false, 0, undefined),
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
  createPendingConstant(constant_handle, data_type, data) {
    return this.$.createPendingConstant(constant_handle, data_type, data);
  }
  createGraph(graph_info) {
    return this.$.createGraph(graph_info);
  }
  isValidGraphForTesting(context_properties, graph_info) {
    return this.$.isValidGraphForTesting(context_properties, graph_info);
  }
};

webnn.mojom.WebNNGraphBuilderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebNNGraphBuilder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createPendingConstant(constant_handle, data_type, data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec,
      null,
      [constant_handle, data_type, data],
      false);
  }

  createGraph(graph_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec,
      null,
      [graph_info],
      false);
  }

  isValidGraphForTesting(context_properties, graph_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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

webnn.mojom.WebNNGraphBuilderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebNNGraphBuilder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webnn.mojom.WebNNGraphBuilder_CreatePendingConstant_ParamsSpec.$.structSpec);
          const result = this.impl.createPendingConstant(params.constant_handle, params.data_type, params.data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webnn.mojom.WebNNGraphBuilder_CreateGraph_ParamsSpec.$.structSpec);
          const result = this.impl.createGraph(params.graph_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.isValidGraphForTesting(params.context_properties, params.graph_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webnn.mojom.WebNNGraphBuilder_IsValidGraphForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

webnn.mojom.WebNNGraphBuilderReceiver = webnn.mojom.WebNNGraphBuilderReceiver;

webnn.mojom.WebNNGraphBuilderPtr = webnn.mojom.WebNNGraphBuilderRemote;
webnn.mojom.WebNNGraphBuilderRequest = webnn.mojom.WebNNGraphBuilderPendingReceiver;

