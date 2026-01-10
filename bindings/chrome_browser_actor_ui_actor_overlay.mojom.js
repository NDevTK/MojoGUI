// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/actor/ui/actor_overlay.mojom
// Module: actor.ui.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.ui = actor.ui || {};
actor.ui.mojom = actor.ui.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

actor.ui.mojom.ThemeSpec = { $: {} };
actor.ui.mojom.ActorOverlayPageHandlerFactory = {};
actor.ui.mojom.ActorOverlayPageHandlerFactory.$interfaceName = 'actor.ui.mojom.ActorOverlayPageHandlerFactory';
actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPageHandler = {};
actor.ui.mojom.ActorOverlayPageHandler.$interfaceName = 'actor.ui.mojom.ActorOverlayPageHandler';
actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPage = {};
actor.ui.mojom.ActorOverlayPage.$interfaceName = 'actor.ui.mojom.ActorOverlayPage';
actor.ui.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPage_SetTheme_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ResponseParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec = { $: {} };
actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ResponseParamsSpec = { $: {} };

// Struct: Theme
mojo.internal.Struct(
    actor.ui.mojom.ThemeSpec, 'actor.ui.mojom.Theme', [
      mojo.internal.StructField('border_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('border_glow_color', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrim_colors', 16, 0, mojo.internal.Array(skia.mojom.SkColorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('magic_cursor_color', 24, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ActorOverlayPageHandlerFactory
mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec, 'actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(actor.ui.mojom.ActorOverlayPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(actor.ui.mojom.ActorOverlayPageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

actor.ui.mojom.ActorOverlayPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.ui.mojom.ActorOverlayPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'actor.ui.mojom.ActorOverlayPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.ui.mojom.ActorOverlayPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new actor.ui.mojom.ActorOverlayPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.ui.mojom.ActorOverlayPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, receiver],
      false);
  }

};

actor.ui.mojom.ActorOverlayPageHandlerFactory.getRemote = function() {
  let remote = new actor.ui.mojom.ActorOverlayPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.ui.mojom.ActorOverlayPageHandlerFactory',
    'context');
  return remote.$;
};

actor.ui.mojom.ActorOverlayPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.receiver);
          break;
        }
      }
    }});
  }
};

actor.ui.mojom.ActorOverlayPageHandlerFactoryReceiver = actor.ui.mojom.ActorOverlayPageHandlerFactoryReceiver;

actor.ui.mojom.ActorOverlayPageHandlerFactoryPtr = actor.ui.mojom.ActorOverlayPageHandlerFactoryRemote;
actor.ui.mojom.ActorOverlayPageHandlerFactoryRequest = actor.ui.mojom.ActorOverlayPageHandlerFactoryPendingReceiver;


// Interface: ActorOverlayPageHandler
mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec, 'actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_Params', [
      mojo.internal.StructField('is_hovering', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec, 'actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec, 'actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParams', [
      mojo.internal.StructField('is_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

actor.ui.mojom.ActorOverlayPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.ui.mojom.ActorOverlayPageHandlerRemote = class {
  static get $interfaceName() {
    return 'actor.ui.mojom.ActorOverlayPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.ui.mojom.ActorOverlayPageHandlerPendingReceiver,
      handle);
    this.$ = new actor.ui.mojom.ActorOverlayPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.ui.mojom.ActorOverlayPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHoverStatusChanged(is_hovering) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec,
      null,
      [is_hovering],
      false);
  }

  getCurrentBorderGlowVisibility() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec,
      actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec,
      [],
      false);
  }

};

actor.ui.mojom.ActorOverlayPageHandler.getRemote = function() {
  let remote = new actor.ui.mojom.ActorOverlayPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.ui.mojom.ActorOverlayPageHandler',
    'context');
  return remote.$;
};

actor.ui.mojom.ActorOverlayPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHoverStatusChanged(params.is_hovering);
          break;
        }
        case 1: {
          const params = actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCurrentBorderGlowVisibility();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

actor.ui.mojom.ActorOverlayPageHandlerReceiver = actor.ui.mojom.ActorOverlayPageHandlerReceiver;

actor.ui.mojom.ActorOverlayPageHandlerPtr = actor.ui.mojom.ActorOverlayPageHandlerRemote;
actor.ui.mojom.ActorOverlayPageHandlerRequest = actor.ui.mojom.ActorOverlayPageHandlerPendingReceiver;


// Interface: ActorOverlayPage
mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec, 'actor.ui.mojom.ActorOverlayPage_SetScrimBackground_Params', [
      mojo.internal.StructField('is_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec, 'actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_Params', [
      mojo.internal.StructField('is_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPage_SetTheme_ParamsSpec, 'actor.ui.mojom.ActorOverlayPage_SetTheme_Params', [
      mojo.internal.StructField('theme', 0, 0, actor.ui.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec, 'actor.ui.mojom.ActorOverlayPage_MoveCursorTo_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ResponseParamsSpec, 'actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec, 'actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ResponseParamsSpec, 'actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ResponseParams', [
    ],
    [[0, 8]]);

actor.ui.mojom.ActorOverlayPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.ui.mojom.ActorOverlayPageRemote = class {
  static get $interfaceName() {
    return 'actor.ui.mojom.ActorOverlayPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.ui.mojom.ActorOverlayPagePendingReceiver,
      handle);
    this.$ = new actor.ui.mojom.ActorOverlayPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.ui.mojom.ActorOverlayPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setScrimBackground(is_visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.ui.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec,
      null,
      [is_visible],
      false);
  }

  setBorderGlowVisibility(is_visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec,
      null,
      [is_visible],
      false);
  }

  setTheme(theme) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      actor.ui.mojom.ActorOverlayPage_SetTheme_ParamsSpec,
      null,
      [theme],
      false);
  }

  moveCursorTo(point) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec,
      actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ResponseParamsSpec,
      [point],
      false);
  }

  triggerClickAnimation() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec,
      actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ResponseParamsSpec,
      [],
      false);
  }

};

actor.ui.mojom.ActorOverlayPage.getRemote = function() {
  let remote = new actor.ui.mojom.ActorOverlayPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.ui.mojom.ActorOverlayPage',
    'context');
  return remote.$;
};

actor.ui.mojom.ActorOverlayPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = actor.ui.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setScrimBackground(params.is_visible);
          break;
        }
        case 1: {
          const params = actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBorderGlowVisibility(params.is_visible);
          break;
        }
        case 2: {
          const params = actor.ui.mojom.ActorOverlayPage_SetTheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTheme(params.theme);
          break;
        }
        case 3: {
          const params = actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.moveCursorTo(params.point);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.triggerClickAnimation();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

actor.ui.mojom.ActorOverlayPageReceiver = actor.ui.mojom.ActorOverlayPageReceiver;

actor.ui.mojom.ActorOverlayPagePtr = actor.ui.mojom.ActorOverlayPageRemote;
actor.ui.mojom.ActorOverlayPageRequest = actor.ui.mojom.ActorOverlayPagePendingReceiver;

