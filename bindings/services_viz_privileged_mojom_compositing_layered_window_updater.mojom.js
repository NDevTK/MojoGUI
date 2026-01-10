// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/layered_window_updater.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: LayeredWindowUpdater
viz.mojom.mojom.LayeredWindowUpdater = {};

viz.mojom.mojom.LayeredWindowUpdaterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.LayeredWindowUpdaterRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayeredWindowUpdater';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.LayeredWindowUpdaterPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.LayeredWindowUpdaterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.LayeredWindowUpdaterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAllocatedSharedMemory(pixel_size, region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec,
      null,
      [pixel_size, region]);
  }

  draw() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.LayeredWindowUpdater_Draw_ParamsSpec,
      null,
      []);
  }

};

viz.mojom.mojom.LayeredWindowUpdater.getRemote = function() {
  let remote = new viz.mojom.mojom.LayeredWindowUpdaterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayeredWindowUpdater',
    'context');
  return remote.$;
};

// ParamsSpec for OnAllocatedSharedMemory
viz.mojom.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec = {
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
viz.mojom.mojom.LayeredWindowUpdater_Draw_ParamsSpec = {
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
viz.mojom.mojom.LayeredWindowUpdaterPtr = viz.mojom.mojom.LayeredWindowUpdaterRemote;
viz.mojom.mojom.LayeredWindowUpdaterRequest = viz.mojom.mojom.LayeredWindowUpdaterPendingReceiver;

