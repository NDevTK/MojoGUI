// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/layered_window_updater.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: LayeredWindowUpdater
viz.mojom.LayeredWindowUpdater = {};

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
      null,
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

// ParamsSpec for OnAllocatedSharedMemory
viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayeredWindowUpdater.OnAllocatedSharedMemory_Params',
      packedSize: 24,
      fields: [
        { name: 'pixel_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Draw
viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayeredWindowUpdater.Draw_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
viz.mojom.LayeredWindowUpdaterPtr = viz.mojom.LayeredWindowUpdaterRemote;
viz.mojom.LayeredWindowUpdaterRequest = viz.mojom.LayeredWindowUpdaterPendingReceiver;

