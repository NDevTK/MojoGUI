// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wallpaper.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.WallpaperHost = {};
arc.mojom.WallpaperHost.$interfaceName = 'arc.mojom.WallpaperHost';
arc.mojom.WallpaperHost_GetWallpaper_ParamsSpec = { $: {} };
arc.mojom.WallpaperHost_GetWallpaper_ResponseParamsSpec = { $: {} };
arc.mojom.WallpaperHost_SetWallpaper_ParamsSpec = { $: {} };
arc.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec = { $: {} };
arc.mojom.WallpaperInstance = {};
arc.mojom.WallpaperInstance.$interfaceName = 'arc.mojom.WallpaperInstance';
arc.mojom.WallpaperInstance_Init_ParamsSpec = { $: {} };
arc.mojom.WallpaperInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec = { $: {} };

// Interface: WallpaperHost
mojo.internal.Struct(
    arc.mojom.WallpaperHost_GetWallpaper_ParamsSpec, 'arc.mojom.WallpaperHost_GetWallpaper_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.WallpaperHost_GetWallpaper_ResponseParamsSpec, 'arc.mojom.WallpaperHost_GetWallpaper_ResponseParams', [
      mojo.internal.StructField('wallpaper', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WallpaperHost_SetWallpaper_ParamsSpec, 'arc.mojom.WallpaperHost_SetWallpaper_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('wallpaper_id', 8, 0, mojo.internal.Int32, 0, false, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

mojo.internal.Struct(
    arc.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec, 'arc.mojom.WallpaperHost_SetDefaultWallpaper_Params', [
    ],
    [[0, 8]]);

arc.mojom.WallpaperHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WallpaperHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WallpaperHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WallpaperHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.WallpaperHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getWallpaper() {
    return this.$.getWallpaper();
  }
  setWallpaper(data, wallpaper_id) {
    return this.$.setWallpaper(data, wallpaper_id);
  }
  setDefaultWallpaper() {
    return this.$.setDefaultWallpaper();
  }
};

arc.mojom.WallpaperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WallpaperHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getWallpaper() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.WallpaperHost_GetWallpaper_ParamsSpec,
      arc.mojom.WallpaperHost_GetWallpaper_ResponseParamsSpec,
      [],
      false);
  }

  setWallpaper(data, wallpaper_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.WallpaperHost_SetWallpaper_ParamsSpec,
      null,
      [data, wallpaper_id],
      false);
  }

  setDefaultWallpaper() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.WallpaperHost.getRemote = function() {
  let remote = new arc.mojom.WallpaperHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WallpaperHost',
    'context');
  return remote.$;
};

arc.mojom.WallpaperHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WallpaperHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.WallpaperHost_GetWallpaper_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.WallpaperHost_SetWallpaper_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.WallpaperHost_GetWallpaper_ParamsSpec.$.structSpec);
          const result = this.impl.getWallpaper();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.WallpaperHost_GetWallpaper_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.WallpaperHost_SetWallpaper_ParamsSpec.$.structSpec);
          const result = this.impl.setWallpaper(params.data, params.wallpaper_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec.$.structSpec);
          const result = this.impl.setDefaultWallpaper();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.WallpaperHostReceiver = arc.mojom.WallpaperHostReceiver;

arc.mojom.WallpaperHostPtr = arc.mojom.WallpaperHostRemote;
arc.mojom.WallpaperHostRequest = arc.mojom.WallpaperHostPendingReceiver;


// Interface: WallpaperInstance
mojo.internal.Struct(
    arc.mojom.WallpaperInstance_Init_ParamsSpec, 'arc.mojom.WallpaperInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.WallpaperHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WallpaperInstance_Init_ResponseParamsSpec, 'arc.mojom.WallpaperInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec, 'arc.mojom.WallpaperInstance_OnWallpaperChanged_Params', [
      mojo.internal.StructField('wallpaper_id', 0, 0, mojo.internal.Int32, 0, false, 2, undefined),
    ],
    [[0, 8], [2, 16]]);

arc.mojom.WallpaperInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WallpaperInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WallpaperInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WallpaperInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.WallpaperInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
  onWallpaperChanged(wallpaper_id) {
    return this.$.onWallpaperChanged(wallpaper_id);
  }
};

arc.mojom.WallpaperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WallpaperInstance', [
      { explicit: 3 },
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.WallpaperInstance_Init_ParamsSpec,
      arc.mojom.WallpaperInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onWallpaperChanged(wallpaper_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec,
      null,
      [wallpaper_id],
      false);
  }

};

arc.mojom.WallpaperInstance.getRemote = function() {
  let remote = new arc.mojom.WallpaperInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WallpaperInstance',
    'context');
  return remote.$;
};

arc.mojom.WallpaperInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WallpaperInstance', [
      { explicit: 3 },
      { explicit: 1 },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.WallpaperInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.WallpaperInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.WallpaperInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWallpaperChanged(params.wallpaper_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.WallpaperInstanceReceiver = arc.mojom.WallpaperInstanceReceiver;

arc.mojom.WallpaperInstancePtr = arc.mojom.WallpaperInstanceRemote;
arc.mojom.WallpaperInstanceRequest = arc.mojom.WallpaperInstancePendingReceiver;

