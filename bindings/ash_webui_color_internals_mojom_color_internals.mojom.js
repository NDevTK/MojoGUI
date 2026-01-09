// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/color_internals/mojom/color_internals.mojom
// Module: ash.color_internals.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.color_internals = ash.color_internals || {};
ash.color_internals.mojom = ash.color_internals.mojom || {};


// Interface: WallpaperColorsObserver
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
      ash.color_internals.mojom.WallpaperColorsObserver_OnWallpaperColorsChanged_ParamsSpec.$,
      null,
      [colors]);
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
}};

// ParamsSpec for OnWallpaperColorsChanged
ash.color_internals.mojom.WallpaperColorsObserver_OnWallpaperColorsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.color_internals.mojom.WallpaperColorsObserver.OnWallpaperColorsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'colors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.color_internals.mojom.WallpaperColorsObserverPtr = ash.color_internals.mojom.WallpaperColorsObserverRemote;
ash.color_internals.mojom.WallpaperColorsObserverRequest = ash.color_internals.mojom.WallpaperColorsObserverPendingReceiver;


// Interface: WallpaperColorsHandler
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
      ash.color_internals.mojom.WallpaperColorsHandler_SetWallpaperColorsObserver_ParamsSpec.$,
      null,
      [observer]);
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
}};

// ParamsSpec for SetWallpaperColorsObserver
ash.color_internals.mojom.WallpaperColorsHandler_SetWallpaperColorsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.color_internals.mojom.WallpaperColorsHandler.SetWallpaperColorsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.color_internals.mojom.WallpaperColorsHandlerPtr = ash.color_internals.mojom.WallpaperColorsHandlerRemote;
ash.color_internals.mojom.WallpaperColorsHandlerRequest = ash.color_internals.mojom.WallpaperColorsHandlerPendingReceiver;

