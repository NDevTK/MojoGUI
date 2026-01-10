// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wallpaper.mojom
// Module: arc.mojom

'use strict';

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
    [{version: 0, packedSize: 8}]);

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
    [{version: 0, packedSize: 8}]);

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
};

arc.mojom.WallpaperHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWallpaper() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.WallpaperHost_GetWallpaper_ParamsSpec,
      arc.mojom.WallpaperHost_GetWallpaper_ResponseParamsSpec,
      []);
  }

  setWallpaper(data, wallpaper_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.WallpaperHost_SetWallpaper_ParamsSpec,
      null,
      [data, wallpaper_id]);
  }

  setDefaultWallpaper() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.WallpaperHost_SetDefaultWallpaper_ParamsSpec,
      null,
      []);
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
    [{version: 0, packedSize: 8}]);

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
};

arc.mojom.WallpaperInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.WallpaperInstance_Init_ParamsSpec,
      arc.mojom.WallpaperInstance_Init_ResponseParamsSpec,
      [host_remote]);
  }

  onWallpaperChanged(wallpaper_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.WallpaperInstance_OnWallpaperChanged_ParamsSpec,
      null,
      [wallpaper_id]);
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

arc.mojom.WallpaperInstancePtr = arc.mojom.WallpaperInstanceRemote;
arc.mojom.WallpaperInstanceRequest = arc.mojom.WallpaperInstancePendingReceiver;

