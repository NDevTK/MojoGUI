// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/display_cutout.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.ViewportFitSpec = { $: mojo.internal.Enum() };
blink.mojom.DisplayCutoutHost = {};
blink.mojom.DisplayCutoutHost.$interfaceName = 'blink.mojom.DisplayCutoutHost';
blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec = { $: {} };
blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec = { $: {} };
blink.mojom.DisplayCutoutClient = {};
blink.mojom.DisplayCutoutClient.$interfaceName = 'blink.mojom.DisplayCutoutClient';
blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec = { $: {} };

// Enum: ViewportFit
blink.mojom.ViewportFit = {
  kAuto: 0,
  kContain: 1,
  kCover: 2,
  kCoverForcedByUserAgent: 3,
};

// Interface: DisplayCutoutHost
mojo.internal.Struct(
    blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec, 'blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_Params', [
      mojo.internal.StructField('value', 0, 0, blink.mojom.ViewportFitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec, 'blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DisplayCutoutHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DisplayCutoutHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DisplayCutoutHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DisplayCutoutHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DisplayCutoutHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DisplayCutoutHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyViewportFitChanged(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec,
      null,
      [value],
      false);
  }

  notifyComplexSafeAreaConstraintChanged(value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec,
      null,
      [value],
      false);
  }

};

blink.mojom.DisplayCutoutHost.getRemote = function() {
  let remote = new blink.mojom.DisplayCutoutHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DisplayCutoutHost',
    'context');
  return remote.$;
};

blink.mojom.DisplayCutoutHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyViewportFitChanged(params.value);
          break;
        }
        case 1: {
          const params = blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyComplexSafeAreaConstraintChanged(params.value);
          break;
        }
      }
    }});
  }
};

blink.mojom.DisplayCutoutHostReceiver = blink.mojom.DisplayCutoutHostReceiver;

blink.mojom.DisplayCutoutHostPtr = blink.mojom.DisplayCutoutHostRemote;
blink.mojom.DisplayCutoutHostRequest = blink.mojom.DisplayCutoutHostPendingReceiver;


// Interface: DisplayCutoutClient
mojo.internal.Struct(
    blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec, 'blink.mojom.DisplayCutoutClient_SetSafeArea_Params', [
      mojo.internal.StructField('safe_area', 0, 0, gfx.mojom.InsetsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DisplayCutoutClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DisplayCutoutClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DisplayCutoutClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DisplayCutoutClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DisplayCutoutClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DisplayCutoutClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSafeArea(safe_area) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec,
      null,
      [safe_area],
      false);
  }

};

blink.mojom.DisplayCutoutClient.getRemote = function() {
  let remote = new blink.mojom.DisplayCutoutClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DisplayCutoutClient',
    'context');
  return remote.$;
};

blink.mojom.DisplayCutoutClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSafeArea(params.safe_area);
          break;
        }
      }
    }});
  }
};

blink.mojom.DisplayCutoutClientReceiver = blink.mojom.DisplayCutoutClientReceiver;

blink.mojom.DisplayCutoutClientPtr = blink.mojom.DisplayCutoutClientRemote;
blink.mojom.DisplayCutoutClientRequest = blink.mojom.DisplayCutoutClientPendingReceiver;

