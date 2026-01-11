// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/traits_test_service.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.TraitsTestService = {};
gfx.mojom.TraitsTestService.$interfaceName = 'gfx.mojom.TraitsTestService';
gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec = { $: {} };
gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec = { $: {} };

// Interface: TraitsTestService
mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoSelectionBound_Params', [
      mojo.internal.StructField('s', 0, 0, gfx.mojom.SelectionBoundSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.SelectionBoundSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoTransform_Params', [
      mojo.internal.StructField('t', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoTransform_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_Params', [
      mojo.internal.StructField('g', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec, 'gfx.mojom.TraitsTestService_EchoRRectF_Params', [
      mojo.internal.StructField('t', 0, 0, gfx.mojom.RRectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec, 'gfx.mojom.TraitsTestService_EchoRRectF_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gfx.mojom.RRectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

gfx.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoSelectionBound(s) {
    return this.$.echoSelectionBound(s);
  }
  echoTransform(t) {
    return this.$.echoTransform(t);
  }
  echoGpuMemoryBufferHandle(g) {
    return this.$.echoGpuMemoryBufferHandle(g);
  }
  echoRRectF(t) {
    return this.$.echoRRectF(t);
  }
};

gfx.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  echoSelectionBound(s) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec,
      [s],
      false);
  }

  echoTransform(t) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec,
      [t],
      false);
  }

  echoGpuMemoryBufferHandle(g) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec,
      [g],
      false);
  }

  echoRRectF(t) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec,
      [t],
      false);
  }

};

gfx.mojom.TraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.TraitsTestService',
    'context');
  return remote.$;
};

gfx.mojom.TraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec.$.structSpec);
          const result = this.impl.echoSelectionBound(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec.$.structSpec);
          const result = this.impl.echoTransform(params.t);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec.$.structSpec);
          const result = this.impl.echoGpuMemoryBufferHandle(params.g);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec.$.structSpec);
          const result = this.impl.echoRRectF(params.t);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.TraitsTestService_EchoRRectF_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

gfx.mojom.TraitsTestServiceReceiver = gfx.mojom.TraitsTestServiceReceiver;

gfx.mojom.TraitsTestServicePtr = gfx.mojom.TraitsTestServiceRemote;
gfx.mojom.TraitsTestServiceRequest = gfx.mojom.TraitsTestServicePendingReceiver;

