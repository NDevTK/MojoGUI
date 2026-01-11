// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/bindings/public/mojom/api_bindings.mojom
// Module: chromecast.mojom

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var blink = blink || {};

chromecast.mojom.ApiBindingSpec = { $: {} };
chromecast.mojom.ApiBindings = {};
chromecast.mojom.ApiBindings.$interfaceName = 'chromecast.mojom.ApiBindings';
chromecast.mojom.ApiBindings_GetAll_ParamsSpec = { $: {} };
chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec = { $: {} };
chromecast.mojom.ApiBindings_Connect_ParamsSpec = { $: {} };

// Struct: ApiBinding
mojo.internal.Struct(
    chromecast.mojom.ApiBindingSpec, 'chromecast.mojom.ApiBinding', [
      mojo.internal.StructField('script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ApiBindings
mojo.internal.Struct(
    chromecast.mojom.ApiBindings_GetAll_ParamsSpec, 'chromecast.mojom.ApiBindings_GetAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec, 'chromecast.mojom.ApiBindings_GetAll_ResponseParams', [
      mojo.internal.StructField('bindings', 0, 0, mojo.internal.Array(chromecast.mojom.ApiBindingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.ApiBindings_Connect_ParamsSpec, 'chromecast.mojom.ApiBindings_Connect_Params', [
      mojo.internal.StructField('port_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, blink.mojom.MessagePortDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.mojom.ApiBindingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ApiBindingsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ApiBindings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ApiBindingsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ApiBindingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAll() {
    return this.$.getAll();
  }
  connect(port_name, port) {
    return this.$.connect(port_name, port);
  }
};

chromecast.mojom.ApiBindingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ApiBindings', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getAll() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.ApiBindings_GetAll_ParamsSpec,
      chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec,
      [],
      false);
  }

  connect(port_name, port) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.ApiBindings_Connect_ParamsSpec,
      null,
      [port_name, port],
      false);
  }

};

chromecast.mojom.ApiBindings.getRemote = function() {
  let remote = new chromecast.mojom.ApiBindingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ApiBindings',
    'context');
  return remote.$;
};

chromecast.mojom.ApiBindingsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ApiBindings', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.ApiBindings_GetAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.ApiBindings_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.ApiBindings_GetAll_ParamsSpec.$.structSpec);
          const result = this.impl.getAll();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.ApiBindings_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.port_name, params.port);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.ApiBindingsReceiver = chromecast.mojom.ApiBindingsReceiver;

chromecast.mojom.ApiBindingsPtr = chromecast.mojom.ApiBindingsRemote;
chromecast.mojom.ApiBindingsRequest = chromecast.mojom.ApiBindingsPendingReceiver;

