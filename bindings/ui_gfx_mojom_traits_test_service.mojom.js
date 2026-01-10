// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/traits_test_service.mojom
// Module: gfx.mojom

'use strict';

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
};

gfx.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoSelectionBound(s) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoSelectionBound_ResponseParamsSpec,
      [s],
      false);
  }

  echoTransform(t) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoTransform_ResponseParamsSpec,
      [t],
      false);
  }

  echoGpuMemoryBufferHandle(g) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec,
      gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ResponseParamsSpec,
      [g],
      false);
  }

  echoRRectF(t) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = gfx.mojom.TraitsTestService_EchoSelectionBound_ParamsSpec.$.decode(message.payload);
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
          const params = gfx.mojom.TraitsTestService_EchoTransform_ParamsSpec.$.decode(message.payload);
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
          const params = gfx.mojom.TraitsTestService_EchoGpuMemoryBufferHandle_ParamsSpec.$.decode(message.payload);
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
          const params = gfx.mojom.TraitsTestService_EchoRRectF_ParamsSpec.$.decode(message.payload);
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
      }
    }});
  }
};

gfx.mojom.TraitsTestServiceReceiver = gfx.mojom.TraitsTestServiceReceiver;

gfx.mojom.TraitsTestServicePtr = gfx.mojom.TraitsTestServiceRemote;
gfx.mojom.TraitsTestServiceRequest = gfx.mojom.TraitsTestServicePendingReceiver;

