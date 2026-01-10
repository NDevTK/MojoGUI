// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/display_cutout.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: ViewportFit
blink.mojom.mojom.ViewportFit = {
  kAuto: 0,
  kContain: 1,
  kCover: 2,
  kCoverForcedByUserAgent: 3,
};
blink.mojom.mojom.ViewportFitSpec = { $: mojo.internal.Enum() };

// Interface: DisplayCutoutHost
blink.mojom.mojom.DisplayCutoutHost = {};

blink.mojom.mojom.DisplayCutoutHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DisplayCutoutHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DisplayCutoutHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DisplayCutoutHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DisplayCutoutHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DisplayCutoutHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyViewportFitChanged(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec,
      null,
      [value]);
  }

  notifyComplexSafeAreaConstraintChanged(value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec,
      null,
      [value]);
  }

};

blink.mojom.mojom.DisplayCutoutHost.getRemote = function() {
  let remote = new blink.mojom.mojom.DisplayCutoutHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DisplayCutoutHost',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyViewportFitChanged
blink.mojom.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DisplayCutoutHost.NotifyViewportFitChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewportFitSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyComplexSafeAreaConstraintChanged
blink.mojom.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DisplayCutoutHost.NotifyComplexSafeAreaConstraintChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DisplayCutoutHostPtr = blink.mojom.mojom.DisplayCutoutHostRemote;
blink.mojom.mojom.DisplayCutoutHostRequest = blink.mojom.mojom.DisplayCutoutHostPendingReceiver;


// Interface: DisplayCutoutClient
blink.mojom.mojom.DisplayCutoutClient = {};

blink.mojom.mojom.DisplayCutoutClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DisplayCutoutClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DisplayCutoutClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DisplayCutoutClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DisplayCutoutClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DisplayCutoutClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSafeArea(safe_area) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec,
      null,
      [safe_area]);
  }

};

blink.mojom.mojom.DisplayCutoutClient.getRemote = function() {
  let remote = new blink.mojom.mojom.DisplayCutoutClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DisplayCutoutClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetSafeArea
blink.mojom.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DisplayCutoutClient.SetSafeArea_Params',
      packedSize: 16,
      fields: [
        { name: 'safe_area', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.InsetsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DisplayCutoutClientPtr = blink.mojom.mojom.DisplayCutoutClientRemote;
blink.mojom.mojom.DisplayCutoutClientRequest = blink.mojom.mojom.DisplayCutoutClientPendingReceiver;

