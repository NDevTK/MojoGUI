// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wallpaper.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: WallpaperHost
arc.mojom.mojom.WallpaperHost = {};

arc.mojom.mojom.WallpaperHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.WallpaperHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WallpaperHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.WallpaperHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.WallpaperHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.WallpaperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWallpaper() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.WallpaperHost_GetWallpaper_ParamsSpec,
      arc.mojom.mojom.WallpaperHost_GetWallpaper_ResponseParamsSpec,
      []);
  }

  setWallpaper(data, wallpaper_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.WallpaperHost_SetWallpaper_ParamsSpec,
      null,
      [data, wallpaper_id]);
  }

  setDefaultWallpaper() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.WallpaperHost.getRemote = function() {
  let remote = new arc.mojom.mojom.WallpaperHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WallpaperHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetWallpaper
arc.mojom.mojom.WallpaperHost_GetWallpaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WallpaperHost.GetWallpaper_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.WallpaperHost_GetWallpaper_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WallpaperHost.GetWallpaper_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'wallpaper', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWallpaper
arc.mojom.mojom.WallpaperHost_SetWallpaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WallpaperHost.SetWallpaper_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'wallpaper_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetDefaultWallpaper
arc.mojom.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WallpaperHost.SetDefaultWallpaper_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.WallpaperHostPtr = arc.mojom.mojom.WallpaperHostRemote;
arc.mojom.mojom.WallpaperHostRequest = arc.mojom.mojom.WallpaperHostPendingReceiver;


// Interface: WallpaperInstance
arc.mojom.mojom.WallpaperInstance = {};

arc.mojom.mojom.WallpaperInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.WallpaperInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WallpaperInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.WallpaperInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.WallpaperInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.WallpaperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.WallpaperInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  onWallpaperChanged(wallpaper_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec,
      null,
      [wallpaper_id]);
  }

};

arc.mojom.mojom.WallpaperInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.WallpaperInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WallpaperInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.WallpaperInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WallpaperInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWallpaperChanged
arc.mojom.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WallpaperInstance.OnWallpaperChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'wallpaper_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.WallpaperInstancePtr = arc.mojom.mojom.WallpaperInstanceRemote;
arc.mojom.mojom.WallpaperInstanceRequest = arc.mojom.mojom.WallpaperInstancePendingReceiver;

