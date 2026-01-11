// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/foo/foo.mojom
// Module: foo.mojom

// Module namespace
var foo = foo || {};
foo.mojom = foo.mojom || {};

foo.mojom.FooDataItemSpec = { $: {} };
foo.mojom.FooHandler = {};
foo.mojom.FooHandler.$interfaceName = 'foo.mojom.FooHandler';
foo.mojom.FooHandler_GetData_ParamsSpec = { $: {} };
foo.mojom.FooHandler_GetData_ResponseParamsSpec = { $: {} };

// Struct: FooDataItem
mojo.internal.Struct(
    foo.mojom.FooDataItemSpec, 'foo.mojom.FooDataItem', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('imageUrl', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FooHandler
mojo.internal.Struct(
    foo.mojom.FooHandler_GetData_ParamsSpec, 'foo.mojom.FooHandler_GetData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    foo.mojom.FooHandler_GetData_ResponseParamsSpec, 'foo.mojom.FooHandler_GetData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(foo.mojom.FooDataItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

foo.mojom.FooHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

foo.mojom.FooHandlerRemote = class {
  static get $interfaceName() {
    return 'foo.mojom.FooHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      foo.mojom.FooHandlerPendingReceiver,
      handle);
    this.$ = new foo.mojom.FooHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getData() {
    return this.$.getData();
  }
};

foo.mojom.FooHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FooHandler', [
      { explicit: null },
    ]);
  }

  getData() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      foo.mojom.FooHandler_GetData_ParamsSpec,
      foo.mojom.FooHandler_GetData_ResponseParamsSpec,
      [],
      false);
  }

};

foo.mojom.FooHandler.getRemote = function() {
  let remote = new foo.mojom.FooHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'foo.mojom.FooHandler',
    'context');
  return remote.$;
};

foo.mojom.FooHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FooHandler', [
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
             decoder.decodeStructInline(foo.mojom.FooHandler_GetData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(foo.mojom.FooHandler_GetData_ParamsSpec.$.structSpec);
          const result = this.impl.getData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, foo.mojom.FooHandler_GetData_ResponseParamsSpec);
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

foo.mojom.FooHandlerReceiver = foo.mojom.FooHandlerReceiver;

foo.mojom.FooHandlerPtr = foo.mojom.FooHandlerRemote;
foo.mojom.FooHandlerRequest = foo.mojom.FooHandlerPendingReceiver;

