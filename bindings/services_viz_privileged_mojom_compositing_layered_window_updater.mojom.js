// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/layered_window_updater.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.LayeredWindowUpdater = {};
viz.mojom.LayeredWindowUpdater.$interfaceName = 'viz.mojom.LayeredWindowUpdater';
viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec = { $: {} };
viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec = { $: {} };
viz.mojom.LayeredWindowUpdater_Draw_ResponseParamsSpec = { $: {} };

// Interface: LayeredWindowUpdater
mojo.internal.Struct(
    viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec, 'viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_Params', [
      mojo.internal.StructField('pixel_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('region', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec, 'viz.mojom.LayeredWindowUpdater_Draw_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.LayeredWindowUpdater_Draw_ResponseParamsSpec, 'viz.mojom.LayeredWindowUpdater_Draw_ResponseParams', [
    ],
    [[0, 8]]);

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
  onAllocatedSharedMemory(pixel_size, region) {
    return this.$.onAllocatedSharedMemory(pixel_size, region);
  }
  draw() {
    return this.$.draw();
  }
};

viz.mojom.LayeredWindowUpdaterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LayeredWindowUpdater', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAllocatedSharedMemory(pixel_size, region) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec,
      null,
      [pixel_size, region],
      false);
  }

  draw() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec,
      viz.mojom.LayeredWindowUpdater_Draw_ResponseParamsSpec,
      [],
      false);
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

viz.mojom.LayeredWindowUpdaterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LayeredWindowUpdater', [
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
             decoder.decodeStructInline(viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayeredWindowUpdater_OnAllocatedSharedMemory_ParamsSpec.$.structSpec);
          const result = this.impl.onAllocatedSharedMemory(params.pixel_size, params.region);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayeredWindowUpdater_Draw_ParamsSpec.$.structSpec);
          const result = this.impl.draw();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.LayeredWindowUpdater_Draw_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.LayeredWindowUpdaterReceiver = viz.mojom.LayeredWindowUpdaterReceiver;

viz.mojom.LayeredWindowUpdaterPtr = viz.mojom.LayeredWindowUpdaterRemote;
viz.mojom.LayeredWindowUpdaterRequest = viz.mojom.LayeredWindowUpdaterPendingReceiver;

