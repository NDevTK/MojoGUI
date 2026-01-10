// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/layered_window_updater.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.LayeredWindowUpdater = {};
viz.mojom.LayeredWindowUpdater.$interfaceName = 'viz.mojom.LayeredWindowUpdater';
viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec = { $: {} };
viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec = { $: {} };
viz.mojom.LayeredWindowUpdater_Draw_ResponseParamsSpec = { $: {} };

// Interface: LayeredWindowUpdater
mojo.internal.Struct(
    viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec, 'viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_Params', [
      mojo.internal.StructField('pixel_size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('region', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec, 'viz.mojom.LayeredWindowUpdater_Draw_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    viz.mojom.LayeredWindowUpdater_Draw_ResponseParamsSpec, 'viz.mojom.LayeredWindowUpdater_Draw_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

viz.mojom.LayeredWindowUpdaterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.LayeredWindowUpdaterRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayeredWindowUpdater';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.LayeredWindowUpdaterPendingReceiver,
      handle);
    this.$ = new viz.mojom.LayeredWindowUpdaterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.LayeredWindowUpdaterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAllocatedSharedMemory(pixel_size, region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec,
      null,
      [pixel_size, region]);
  }

  draw() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec,
      viz.mojom.LayeredWindowUpdater_Draw_ResponseParamsSpec,
      []);
  }

};

viz.mojom.LayeredWindowUpdater.getRemote = function() {
  let remote = new viz.mojom.LayeredWindowUpdaterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayeredWindowUpdater',
    'context');
  return remote.$;
};

viz.mojom.LayeredWindowUpdaterPtr = viz.mojom.LayeredWindowUpdaterRemote;
viz.mojom.LayeredWindowUpdaterRequest = viz.mojom.LayeredWindowUpdaterPendingReceiver;

