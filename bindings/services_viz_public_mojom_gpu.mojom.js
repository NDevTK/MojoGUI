// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/gpu.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var components = components || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
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
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('channel_handle', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('gpu_info', 16, 0, gpu.mojom.GpuInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_feature_info', 24, 0, gpu.mojom.GpuFeatureInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_image_capabilities', 32, 0, gpu.mojom.SharedImageCapabilitiesSpec.$, null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'viz.mojom.Gpu',
    'context');
  return remote.$;
};

viz.mojom.GpuPtr = viz.mojom.GpuRemote;
viz.mojom.GpuRequest = viz.mojom.GpuPendingReceiver;

