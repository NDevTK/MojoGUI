// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/gpu.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  establishGpuChannel() {
    return this.$.establishGpuChannel();
  }
  createJpegDecodeAccelerator(jda) {
    return this.$.createJpegDecodeAccelerator(jda);
  }
  createVideoEncodeAcceleratorProvider(vea_provider) {
    return this.$.createVideoEncodeAcceleratorProvider(vea_provider);
  }
};

viz.mojom.GpuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Gpu', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  establishGpuChannel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec,
      viz.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec,
      [],
      false);
  }

  createJpegDecodeAccelerator(jda) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Gpu', [
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
             decoder.decodeStructInline(viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoEncodeAcceleratorProvider(params.vea_provider);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.GpuReceiver = viz.mojom.GpuReceiver;

viz.mojom.GpuPtr = viz.mojom.GpuRemote;
viz.mojom.GpuRequest = viz.mojom.GpuPendingReceiver;

