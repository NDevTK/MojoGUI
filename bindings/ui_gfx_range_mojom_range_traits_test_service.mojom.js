// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/range/mojom/range_traits_test_service.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.RangeTraitsTestService = {};
gfx.mojom.RangeTraitsTestService.$interfaceName = 'gfx.mojom.RangeTraitsTestService';
gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec = { $: {} };
gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec = { $: {} };

// Interface: RangeTraitsTestService
mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRange_Params', [
      mojo.internal.StructField('p', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRangeF_Params', [
      mojo.internal.StructField('p', 0, 0, gfx.mojom.RangeFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec, 'gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RangeFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

gfx.mojom.RangeTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.RangeTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.RangeTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.RangeTraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.RangeTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoRange(p) {
    return this.$.echoRange(p);
  }
  echoRangeF(p) {
    return this.$.echoRangeF(p);
  }
};

gfx.mojom.RangeTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RangeTraitsTestService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  echoRange(p) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec,
      [p],
      false);
  }

  echoRangeF(p) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec,
      gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec,
      [p],
      false);
  }

};

gfx.mojom.RangeTraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.RangeTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.RangeTraitsTestService',
    'context');
  return remote.$;
};

gfx.mojom.RangeTraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RangeTraitsTestService', [
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
             decoder.decodeStructInline(gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.RangeTraitsTestService_EchoRange_ParamsSpec.$.structSpec);
          const result = this.impl.echoRange(params.p);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.RangeTraitsTestService_EchoRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.RangeTraitsTestService_EchoRangeF_ParamsSpec.$.structSpec);
          const result = this.impl.echoRangeF(params.p);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.RangeTraitsTestService_EchoRangeF_ResponseParamsSpec);
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

gfx.mojom.RangeTraitsTestServiceReceiver = gfx.mojom.RangeTraitsTestServiceReceiver;

gfx.mojom.RangeTraitsTestServicePtr = gfx.mojom.RangeTraitsTestServiceRemote;
gfx.mojom.RangeTraitsTestServiceRequest = gfx.mojom.RangeTraitsTestServicePendingReceiver;

