// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/gpu.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: Gpu
viz.mojom.Gpu = {};

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
      viz.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      null,
      [jda],
      undefined,
      undefined
    );
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      null,
      [vea_provider],
      undefined,
      undefined
    );
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

// ParamsSpec for EstablishGpuChannel
viz.mojom.Gpu_EstablishGpuChannel_ParamsSpec = {
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

viz.mojom.Gpu_EstablishGpuChannel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Gpu.EstablishGpuChannel_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'channel_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'gpu_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'gpu_feature_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shared_image_capabilities', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for CreateJpegDecodeAccelerator
viz.mojom.Gpu_CreateJpegDecodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Gpu.CreateJpegDecodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jda', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateVideoEncodeAcceleratorProvider
viz.mojom.Gpu_CreateVideoEncodeAcceleratorProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Gpu.CreateVideoEncodeAcceleratorProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'vea_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.GpuPtr = viz.mojom.GpuRemote;
viz.mojom.GpuRequest = viz.mojom.GpuPendingReceiver;

