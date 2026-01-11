// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image_traits_test_service.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.ImageTraitsTestService = {};
gfx.mojom.ImageTraitsTestService.$interfaceName = 'gfx.mojom.ImageTraitsTestService';
gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec = { $: {} };

// Interface: ImageTraitsTestService
mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_Params', [
      mojo.internal.StructField('in', 0, 0, gfx.mojom.ImageSkiaRepSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, gfx.mojom.ImageSkiaRepSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkia_Params', [
      mojo.internal.StructField('in', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

gfx.mojom.ImageTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.ImageTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.ImageTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.ImageTraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.ImageTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoImageSkiaRep(in) {
    return this.$.echoImageSkiaRep(in);
  }
  echoImageSkia(in) {
    return this.$.echoImageSkia(in);
  }
};

gfx.mojom.ImageTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImageTraitsTestService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  echoImageSkiaRep(in) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec,
      [in],
      false);
  }

  echoImageSkia(in) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec,
      [in],
      false);
  }

};

gfx.mojom.ImageTraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.ImageTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.ImageTraitsTestService',
    'context');
  return remote.$;
};

gfx.mojom.ImageTraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImageTraitsTestService', [
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
             decoder.decodeStructInline(gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec.$.structSpec);
          const result = this.impl.echoImageSkiaRep(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec.$.structSpec);
          const result = this.impl.echoImageSkia(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec);
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

gfx.mojom.ImageTraitsTestServiceReceiver = gfx.mojom.ImageTraitsTestServiceReceiver;

gfx.mojom.ImageTraitsTestServicePtr = gfx.mojom.ImageTraitsTestServiceRemote;
gfx.mojom.ImageTraitsTestServiceRequest = gfx.mojom.ImageTraitsTestServicePendingReceiver;

