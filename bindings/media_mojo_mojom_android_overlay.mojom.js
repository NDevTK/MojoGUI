// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/android_overlay.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

media.mojom.AndroidOverlayConfigSpec = { $: {} };
media.mojom.AndroidOverlayProvider = {};
media.mojom.AndroidOverlayProvider.$interfaceName = 'media.mojom.AndroidOverlayProvider';
media.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec = { $: {} };
media.mojom.AndroidOverlay = {};
media.mojom.AndroidOverlay.$interfaceName = 'media.mojom.AndroidOverlay';
media.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec = { $: {} };
media.mojom.AndroidOverlayClient = {};
media.mojom.AndroidOverlayClient.$interfaceName = 'media.mojom.AndroidOverlayClient';
media.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec = { $: {} };
media.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec = { $: {} };
media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec = { $: {} };
media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ResponseParamsSpec = { $: {} };
media.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec = { $: {} };

// Struct: AndroidOverlayConfig
mojo.internal.Struct(
    media.mojom.AndroidOverlayConfigSpec, 'media.mojom.AndroidOverlayConfig', [
      mojo.internal.StructField('routing_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secure', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('power_efficient', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AndroidOverlayProvider
mojo.internal.Struct(
    media.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec, 'media.mojom.AndroidOverlayProvider_CreateOverlay_Params', [
      mojo.internal.StructField('overlay', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AndroidOverlaySpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AndroidOverlayClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('config', 16, 0, media.mojom.AndroidOverlayConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

media.mojom.AndroidOverlayProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AndroidOverlayProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlayProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AndroidOverlayProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.AndroidOverlayProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AndroidOverlayProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createOverlay(overlay, client, config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec,
      null,
      [overlay, client, config],
      false);
  }

};

media.mojom.AndroidOverlayProvider.getRemote = function() {
  let remote = new media.mojom.AndroidOverlayProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlayProvider',
    'context');
  return remote.$;
};

media.mojom.AndroidOverlayProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createOverlay(params.overlay, params.client, params.config);
          break;
        }
      }
    }});
  }
};

media.mojom.AndroidOverlayProviderReceiver = media.mojom.AndroidOverlayProviderReceiver;

media.mojom.AndroidOverlayProviderPtr = media.mojom.AndroidOverlayProviderRemote;
media.mojom.AndroidOverlayProviderRequest = media.mojom.AndroidOverlayProviderPendingReceiver;


// Interface: AndroidOverlay
mojo.internal.Struct(
    media.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec, 'media.mojom.AndroidOverlay_ScheduleLayout_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AndroidOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AndroidOverlayRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AndroidOverlayPendingReceiver,
      handle);
    this.$ = new media.mojom.AndroidOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AndroidOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scheduleLayout(rect) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec,
      null,
      [rect],
      false);
  }

};

media.mojom.AndroidOverlay.getRemote = function() {
  let remote = new media.mojom.AndroidOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlay',
    'context');
  return remote.$;
};

media.mojom.AndroidOverlayReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec.$.decode(message.payload);
          const result = this.impl.scheduleLayout(params.rect);
          break;
        }
      }
    }});
  }
};

media.mojom.AndroidOverlayReceiver = media.mojom.AndroidOverlayReceiver;

media.mojom.AndroidOverlayPtr = media.mojom.AndroidOverlayRemote;
media.mojom.AndroidOverlayRequest = media.mojom.AndroidOverlayPendingReceiver;


// Interface: AndroidOverlayClient
mojo.internal.Struct(
    media.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec, 'media.mojom.AndroidOverlayClient_OnSurfaceReady_Params', [
      mojo.internal.StructField('surface_key', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec, 'media.mojom.AndroidOverlayClient_OnDestroyed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec, 'media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ResponseParamsSpec, 'media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec, 'media.mojom.AndroidOverlayClient_OnPowerEfficientState_Params', [
      mojo.internal.StructField('is_power_efficient', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AndroidOverlayClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AndroidOverlayClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlayClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AndroidOverlayClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AndroidOverlayClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AndroidOverlayClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSurfaceReady(surface_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec,
      null,
      [surface_key],
      false);
  }

  onDestroyed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec,
      null,
      [],
      false);
  }

  onSynchronouslyDestroyed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec,
      media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ResponseParamsSpec,
      [],
      false);
  }

  onPowerEfficientState(is_power_efficient) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec,
      null,
      [is_power_efficient],
      false);
  }

};

media.mojom.AndroidOverlayClient.getRemote = function() {
  let remote = new media.mojom.AndroidOverlayClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlayClient',
    'context');
  return remote.$;
};

media.mojom.AndroidOverlayClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSurfaceReady(params.surface_key);
          break;
        }
        case 1: {
          const params = media.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDestroyed();
          break;
        }
        case 2: {
          const params = media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSynchronouslyDestroyed();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = media.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPowerEfficientState(params.is_power_efficient);
          break;
        }
      }
    }});
  }
};

media.mojom.AndroidOverlayClientReceiver = media.mojom.AndroidOverlayClientReceiver;

media.mojom.AndroidOverlayClientPtr = media.mojom.AndroidOverlayClientRemote;
media.mojom.AndroidOverlayClientRequest = media.mojom.AndroidOverlayClientPendingReceiver;

