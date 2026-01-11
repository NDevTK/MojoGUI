// Auto-generated MojoJS binding
// Source: chromium_src/ui/gl/mojom/traits_test_service.mojom
// Module: gl.mojom

// Module namespace
var gl = gl || {};
gl.mojom = gl.mojom || {};

gl.mojom.TraitsTestService = {};
gl.mojom.TraitsTestService.$interfaceName = 'gl.mojom.TraitsTestService';
gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec = { $: {} };
gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec = { $: {} };
gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec = { $: {} };
gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec = { $: {} };

// Interface: TraitsTestService
mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec, 'gl.mojom.TraitsTestService_EchoGpuPreference_Params', [
      mojo.internal.StructField('g', 0, 0, gl.mojom.GpuPreferenceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec, 'gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gl.mojom.GpuPreferenceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec, 'gl.mojom.TraitsTestService_EchoGLImplementationParts_Params', [
      mojo.internal.StructField('impl', 0, 0, gl.mojom.GLImplementationPartsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec, 'gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gl.mojom.GLImplementationPartsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

gl.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gl.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gl.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gl.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new gl.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoGpuPreference(g) {
    return this.$.echoGpuPreference(g);
  }
  echoGLImplementationParts(impl) {
    return this.$.echoGLImplementationParts(impl);
  }
};

gl.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  echoGpuPreference(g) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec,
      gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec,
      [g],
      false);
  }

  echoGLImplementationParts(impl) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec,
      gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec,
      [impl],
      false);
  }

};

gl.mojom.TraitsTestService.getRemote = function() {
  let remote = new gl.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gl.mojom.TraitsTestService',
    'context');
  return remote.$;
};

gl.mojom.TraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
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
             decoder.decodeStructInline(gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec.$.structSpec);
          const result = this.impl.echoGpuPreference(params.g);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec.$.structSpec);
          const result = this.impl.echoGLImplementationParts(params.impl);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec);
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

gl.mojom.TraitsTestServiceReceiver = gl.mojom.TraitsTestServiceReceiver;

gl.mojom.TraitsTestServicePtr = gl.mojom.TraitsTestServiceRemote;
gl.mojom.TraitsTestServiceRequest = gl.mojom.TraitsTestServicePendingReceiver;

