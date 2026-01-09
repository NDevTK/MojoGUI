// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wallpaper.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: WallpaperHost
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

// Legacy compatibility
arc.mojom.WallpaperHostPtr = arc.mojom.WallpaperHostRemote;
arc.mojom.WallpaperHostRequest = arc.mojom.WallpaperHostPendingReceiver;


// Interface: WallpaperInstance
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

// Legacy compatibility
arc.mojom.WallpaperInstancePtr = arc.mojom.WallpaperInstanceRemote;
arc.mojom.WallpaperInstanceRequest = arc.mojom.WallpaperInstancePendingReceiver;

