// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/gpu.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: Gpu
viz.mojom.mojom.Gpu = {};

viz.mojom.mojom.GpuPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.GpuRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.Gpu';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.GpuPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.GpuRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.GpuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  establishGpuChannel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.Gpu_EstablishGpuChannel_ParamsSpec,
      viz.mojom.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec,
      []);
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda]);
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [vea_provider]);
  }

};

viz.mojom.mojom.Gpu.getRemote = function() {
  let remote = new viz.mojom.mojom.GpuRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.Gpu',
    'context');
  return remote.$;
};

// ParamsSpec for EstablishGpuChannel
viz.mojom.mojom.Gpu_EstablishGpuChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Gpu.EstablishGpuChannel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Gpu.EstablishGpuChannel_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'client_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'channel_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'gpu_info', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.GpuInfoSpec, nullable: false, minVersion: 0 },
        { name: 'gpu_feature_info', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.GpuFeatureInfoSpec, nullable: false, minVersion: 0 },
        { name: 'shared_image_capabilities', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.SharedImageCapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for CreateJpegDecodeAccelerator
viz.mojom.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Gpu.CreateJpegDecodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jda', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos_camera.mojom.MjpegDecodeAcceleratorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateVideoEncodeAcceleratorProvider
viz.mojom.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Gpu.CreateVideoEncodeAcceleratorProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'vea_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.GpuPtr = viz.mojom.mojom.GpuRemote;
viz.mojom.mojom.GpuRequest = viz.mojom.mojom.GpuPendingReceiver;

