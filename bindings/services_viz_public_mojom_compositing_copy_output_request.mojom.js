// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_request.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.CopyOutputRequestSpec = { $: {} };
viz.mojom.CopyOutputResultSender = {};
viz.mojom.CopyOutputResultSender.$interfaceName = 'viz.mojom.CopyOutputResultSender';
viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec = { $: {} };

// Struct: CopyOutputRequest
mojo.internal.Struct(
    viz.mojom.CopyOutputRequestSpec, 'viz.mojom.CopyOutputRequest', [
      mojo.internal.StructField('result_format', 0, 0, viz.mojom.CopyOutputResultFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result_destination', 8, 0, viz.mojom.CopyOutputResultDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('send_result_delay', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_from', 24, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_to', 32, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('area', 48, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result_selection', 56, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blit_request', 64, 0, viz.mojom.BlitRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result_sender', 72, 0, mojo.internal.InterfaceProxy(viz.mojom.CopyOutputResultSenderRemote), null, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: CopyOutputResultSender
mojo.internal.Struct(
    viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec, 'viz.mojom.CopyOutputResultSender_SendResult_Params', [
      mojo.internal.StructField('result', 0, 0, viz.mojom.CopyOutputResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.CopyOutputResultSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CopyOutputResultSenderRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CopyOutputResultSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CopyOutputResultSenderPendingReceiver,
      handle);
    this.$ = new viz.mojom.CopyOutputResultSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendResult(result) {
    return this.$.sendResult(result);
  }
};

viz.mojom.CopyOutputResultSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CopyOutputResultSender', [
      { explicit: null },
    ]);
  }

  sendResult(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec,
      null,
      [result],
      false);
  }

};

viz.mojom.CopyOutputResultSender.getRemote = function() {
  let remote = new viz.mojom.CopyOutputResultSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CopyOutputResultSender',
    'context');
  return remote.$;
};

viz.mojom.CopyOutputResultSenderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CopyOutputResultSender', [
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
             decoder.decodeStructInline(viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec.$.structSpec);
          const result = this.impl.sendResult(params.result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.CopyOutputResultSenderReceiver = viz.mojom.CopyOutputResultSenderReceiver;

viz.mojom.CopyOutputResultSenderPtr = viz.mojom.CopyOutputResultSenderRemote;
viz.mojom.CopyOutputResultSenderRequest = viz.mojom.CopyOutputResultSenderPendingReceiver;

