// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tracing.mojom
// Module: arc.mojom

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
  queryAvailableCategories() {
    return this.$.queryAvailableCategories();
  }
  startTracing(categories, socket) {
    return this.$.startTracing(categories, socket);
  }
  stopTracing() {
    return this.$.stopTracing();
  }
};

arc.mojom.TracingInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TracingInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  queryAvailableCategories() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec,
      arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec,
      [],
      false);
  }

  startTracing(categories, socket) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.TracingInstance_StartTracing_ParamsSpec,
      arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec,
      [categories, socket],
      false);
  }

  stopTracing() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TracingInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TracingInstance_StartTracing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TracingInstance_StopTracing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec.$.structSpec);
          const result = this.impl.queryAvailableCategories();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TracingInstance_StartTracing_ParamsSpec.$.structSpec);
          const result = this.impl.startTracing(params.categories, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TracingInstance_StopTracing_ParamsSpec.$.structSpec);
          const result = this.impl.stopTracing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec);
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

arc.mojom.TracingInstanceReceiver = arc.mojom.TracingInstanceReceiver;

arc.mojom.TracingInstancePtr = arc.mojom.TracingInstanceRemote;
arc.mojom.TracingInstanceRequest = arc.mojom.TracingInstancePendingReceiver;

