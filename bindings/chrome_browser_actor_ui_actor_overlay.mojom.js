// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/actor/ui/actor_overlay.mojom
// Module: actor.ui.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.ui = actor.ui || {};
actor.ui.mojom = actor.ui.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: Theme
actor.ui.mojom.ThemeSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.Theme',
      packedSize: 40,
      fields: [
        { name: 'border_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'border_glow_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'scrim_colors', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.SkColor, 3Spec, false), nullable: false, minVersion: 0 },
        { name: 'magic_cursor_color', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ActorOverlayPageHandlerFactory
actor.ui.mojom.ActorOverlayPageHandlerFactory = {};

actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(actor.ui.mojom.ActorOverlayPageRemote), nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(actor.ui.mojom.ActorOverlayPageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [page, receiver]);
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

// ParamsSpec for CreatePageHandler
actor.ui.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(actor.ui.mojom.ActorOverlayPageRemote), nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(actor.ui.mojom.ActorOverlayPageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
actor.ui.mojom.ActorOverlayPageHandlerFactoryPtr = actor.ui.mojom.ActorOverlayPageHandlerFactoryRemote;
actor.ui.mojom.ActorOverlayPageHandlerFactoryRequest = actor.ui.mojom.ActorOverlayPageHandlerFactoryPendingReceiver;


// Interface: ActorOverlayPageHandler
actor.ui.mojom.ActorOverlayPageHandler = {};

actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_hovering', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      [is_hovering]);
  }

  getCurrentBorderGlowVisibility() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec,
      actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec,
      []);
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

// ParamsSpec for OnHoverStatusChanged
actor.ui.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPageHandler.OnHoverStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_hovering', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCurrentBorderGlowVisibility
actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPageHandler.GetCurrentBorderGlowVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

actor.ui.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPageHandler.GetCurrentBorderGlowVisibility_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
actor.ui.mojom.ActorOverlayPageHandlerPtr = actor.ui.mojom.ActorOverlayPageHandlerRemote;
actor.ui.mojom.ActorOverlayPageHandlerRequest = actor.ui.mojom.ActorOverlayPageHandlerPendingReceiver;


// Interface: ActorOverlayPage
actor.ui.mojom.ActorOverlayPage = {};

actor.ui.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage_SetScrimBackground_Params',
      packedSize: 16,
      fields: [
        { name: 'is_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'is_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

actor.ui.mojom.ActorOverlayPage_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage_SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: actor.ui.mojom.ThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage_MoveCursorTo_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      [is_visible]);
  }

  setBorderGlowVisibility(is_visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec,
      null,
      [is_visible]);
  }

  setTheme(theme) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      actor.ui.mojom.ActorOverlayPage_SetTheme_ParamsSpec,
      null,
      [theme]);
  }

  moveCursorTo(point) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec,
      null,
      [point]);
  }

  triggerClickAnimation() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec,
      null,
      []);
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

// ParamsSpec for SetScrimBackground
actor.ui.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage.SetScrimBackground_Params',
      packedSize: 16,
      fields: [
        { name: 'is_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBorderGlowVisibility
actor.ui.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage.SetBorderGlowVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'is_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTheme
actor.ui.mojom.ActorOverlayPage_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: actor.ui.mojom.ThemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MoveCursorTo
actor.ui.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage.MoveCursorTo_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerClickAnimation
actor.ui.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.ui.mojom.ActorOverlayPage.TriggerClickAnimation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
actor.ui.mojom.ActorOverlayPagePtr = actor.ui.mojom.ActorOverlayPageRemote;
actor.ui.mojom.ActorOverlayPageRequest = actor.ui.mojom.ActorOverlayPagePendingReceiver;

