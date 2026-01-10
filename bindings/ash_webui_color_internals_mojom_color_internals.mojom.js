// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/color_internals/mojom/color_internals.mojom
// Module: ash.color_internals.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.color_internals = ash.color_internals || {};
ash.color_internals.mojom = ash.color_internals.mojom || {};
var skia = skia || {};

ash.color_internals.mojom.WallpaperCalculatedColorsSpec = { $: {} };
ash.color_internals.mojom.WallpaperColorsObserver = {};
ash.color_internals.mojom.WallpaperColorsObserver.$interfaceName = 'ash.color_internals.mojom.WallpaperColorsObserver';
ash.color_internals.mojom.WallpaperColorsObserver_OnWallpaperColorsChanged_ParamsSpec = { $: {} };
ash.color_internals.mojom.WallpaperColorsHandler = {};
ash.color_internals.mojom.WallpaperColorsHandler.$interfaceName = 'ash.color_internals.mojom.WallpaperColorsHandler';
ash.color_internals.mojom.WallpaperColorsHandler_SetWallpaperColorsObserver_ParamsSpec = { $: {} };

// Struct: WallpaperCalculatedColors
mojo.internal.Struct(
    ash.color_internals.mojom.WallpaperCalculatedColorsSpec, 'ash.color_internals.mojom.WallpaperCalculatedColors', [
      mojo.internal.StructField('k_mean_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('celebi_color', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WallpaperColorsObserver
mojo.internal.Struct(
    ash.color_internals.mojom.WallpaperColorsObserver_OnWallpaperColorsChanged_ParamsSpec, 'ash.color_internals.mojom.WallpaperColorsObserver_OnWallpaperColorsChanged_Params', [
      mojo.internal.StructField('colors', 0, 0, ash.color_internals.mojom.WallpaperCalculatedColorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.color_internals.mojom.WallpaperColorsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.color_internals.mojom.WallpaperColorsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.color_internals.mojom.WallpaperColorsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.color_internals.mojom.WallpaperColorsObserverPendingReceiver,
      handle);
    this.$ = new ash.color_internals.mojom.WallpaperColorsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.color_internals.mojom.WallpaperColorsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWallpaperColorsChanged(colors) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.color_internals.mojom.WallpaperColorsObserver_OnWallpaperColorsChanged_ParamsSpec,
      null,
      [colors],
      false);
  }

};

ash.color_internals.mojom.WallpaperColorsObserver.getRemote = function() {
  let remote = new ash.color_internals.mojom.WallpaperColorsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.color_internals.mojom.WallpaperColorsObserver',
    'context');
  return remote.$;
};

ash.color_internals.mojom.WallpaperColorsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.color_internals.mojom.WallpaperColorsObserver_OnWallpaperColorsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWallpaperColorsChanged(params.colors);
          break;
        }
      }
      }
    }});
  }
};

ash.color_internals.mojom.WallpaperColorsObserverReceiver = ash.color_internals.mojom.WallpaperColorsObserverReceiver;

ash.color_internals.mojom.WallpaperColorsObserverPtr = ash.color_internals.mojom.WallpaperColorsObserverRemote;
ash.color_internals.mojom.WallpaperColorsObserverRequest = ash.color_internals.mojom.WallpaperColorsObserverPendingReceiver;


// Interface: WallpaperColorsHandler
mojo.internal.Struct(
    ash.color_internals.mojom.WallpaperColorsHandler_SetWallpaperColorsObserver_ParamsSpec, 'ash.color_internals.mojom.WallpaperColorsHandler_SetWallpaperColorsObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.color_internals.mojom.WallpaperColorsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.color_internals.mojom.WallpaperColorsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.color_internals.mojom.WallpaperColorsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.color_internals.mojom.WallpaperColorsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.color_internals.mojom.WallpaperColorsHandlerPendingReceiver,
      handle);
    this.$ = new ash.color_internals.mojom.WallpaperColorsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.color_internals.mojom.WallpaperColorsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setWallpaperColorsObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.color_internals.mojom.WallpaperColorsHandler_SetWallpaperColorsObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.color_internals.mojom.WallpaperColorsHandler.getRemote = function() {
  let remote = new ash.color_internals.mojom.WallpaperColorsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.color_internals.mojom.WallpaperColorsHandler',
    'context');
  return remote.$;
};

ash.color_internals.mojom.WallpaperColorsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.color_internals.mojom.WallpaperColorsHandler_SetWallpaperColorsObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWallpaperColorsObserver(params.observer);
          break;
        }
      }
      }
    }});
  }
};

ash.color_internals.mojom.WallpaperColorsHandlerReceiver = ash.color_internals.mojom.WallpaperColorsHandlerReceiver;

ash.color_internals.mojom.WallpaperColorsHandlerPtr = ash.color_internals.mojom.WallpaperColorsHandlerRemote;
ash.color_internals.mojom.WallpaperColorsHandlerRequest = ash.color_internals.mojom.WallpaperColorsHandlerPendingReceiver;

