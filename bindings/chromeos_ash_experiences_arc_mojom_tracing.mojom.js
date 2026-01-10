// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tracing.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.TracingInstance = {};
arc.mojom.TracingInstance.$interfaceName = 'arc.mojom.TracingInstance';
arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec = { $: {} };
arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec = { $: {} };
arc.mojom.TracingInstance_StartTracing_ParamsSpec = { $: {} };
arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec = { $: {} };
arc.mojom.TracingInstance_StopTracing_ParamsSpec = { $: {} };
arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec = { $: {} };

// Interface: TracingInstance
mojo.internal.Struct(
    arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec, 'arc.mojom.TracingInstance_QueryAvailableCategories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec, 'arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParams', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StartTracing_ParamsSpec, 'arc.mojom.TracingInstance_StartTracing_Params', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('socket', 8, 0, mojo.internal.Handle, null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec, 'arc.mojom.TracingInstance_StartTracing_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StopTracing_ParamsSpec, 'arc.mojom.TracingInstance_StopTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec, 'arc.mojom.TracingInstance_StopTracing_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.TracingInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TracingInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TracingInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TracingInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.TracingInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TracingInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryAvailableCategories() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec,
      arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec,
      [],
      false);
  }

  startTracing(categories, socket) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.TracingInstance_StartTracing_ParamsSpec,
      arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec,
      [categories, socket],
      false);
  }

  stopTracing() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.TracingInstance_StopTracing_ParamsSpec,
      arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.TracingInstance.getRemote = function() {
  let remote = new arc.mojom.TracingInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TracingInstance',
    'context');
  return remote.$;
};

arc.mojom.TracingInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queryAvailableCategories();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = arc.mojom.TracingInstance_StartTracing_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startTracing(params.categories, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = arc.mojom.TracingInstance_StopTracing_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopTracing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

arc.mojom.TracingInstanceReceiver = arc.mojom.TracingInstanceReceiver;

arc.mojom.TracingInstancePtr = arc.mojom.TracingInstanceRemote;
arc.mojom.TracingInstanceRequest = arc.mojom.TracingInstancePendingReceiver;

