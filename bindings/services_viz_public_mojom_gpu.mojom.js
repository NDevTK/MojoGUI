// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/gpu.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gpu = gpu || {};
var chromeos_camera = chromeos_camera || {};
var media = media || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.Gpu = {};
viz.mojom.Gpu.$interfaceName = 'viz.mojom.Gpu';
viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec = { $: {} };
viz.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec = { $: {} };
viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec = { $: {} };
viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec = { $: {} };

// Interface: Gpu
mojo.internal.Struct(
    viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec, 'viz.mojom.Gpu_EstablishGpuChannel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec, 'viz.mojom.Gpu_EstablishGpuChannel_ResponseParams', [
      mojo.internal.StructField('channel_handle', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('gpu_info', 8, 0, gpu.mojom.GpuInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_feature_info', 16, 0, gpu.mojom.GpuFeatureInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_image_capabilities', 24, 0, gpu.mojom.SharedImageCapabilitiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec, 'viz.mojom.Gpu_CreateJpegDecodeAccelerator_Params', [
      mojo.internal.StructField('jda', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.MjpegDecodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec, 'viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_Params', [
      mojo.internal.StructField('vea_provider', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.GpuPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.GpuRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.Gpu';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.GpuPendingReceiver,
      handle);
    this.$ = new viz.mojom.GpuRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.GpuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  establishGpuChannel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec,
      viz.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec,
      [],
      false);
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [vea_provider],
      false);
  }

};

viz.mojom.Gpu.getRemote = function() {
  let remote = new viz.mojom.GpuRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.Gpu',
    'context');
  return remote.$;
};

viz.mojom.GpuReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.establishGpuChannel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
        case 2: {
          const params = viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVideoEncodeAcceleratorProvider(params.vea_provider);
          break;
        }
      }
    }});
  }
};

viz.mojom.GpuReceiver = viz.mojom.GpuReceiver;

viz.mojom.GpuPtr = viz.mojom.GpuRemote;
viz.mojom.GpuRequest = viz.mojom.GpuPendingReceiver;

