// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/actor/ui/actor_overlay.mojom
// Module: actor.ui.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.ui = actor.ui || {};
actor.ui.ui.mojom = actor.ui.ui.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: Theme
actor.ui.ui.mojom.mojom.ThemeSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactory = {};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'actor.ui.mojom.ActorOverlayPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, receiver]);
  }

};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactory.getRemote = function() {
  let remote = new actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.ui.mojom.ActorOverlayPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryPtr = actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryRemote;
actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryRequest = actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerFactoryPendingReceiver;


// Interface: ActorOverlayPageHandler
actor.ui.ui.mojom.mojom.ActorOverlayPageHandler = {};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerRemote = class {
  static get $interfaceName() {
    return 'actor.ui.mojom.ActorOverlayPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerPendingReceiver,
      handle);
    this.$ = new actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHoverStatusChanged(is_hovering) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec,
      null,
      [is_hovering]);
  }

  getCurrentBorderGlowVisibility() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec,
      actor.ui.ui.mojom.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec,
      []);
  }

};

actor.ui.ui.mojom.mojom.ActorOverlayPageHandler.getRemote = function() {
  let remote = new actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.ui.mojom.ActorOverlayPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnHoverStatusChanged
actor.ui.ui.mojom.mojom.ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec = {
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

actor.ui.ui.mojom.mojom.ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerPtr = actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerRemote;
actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerRequest = actor.ui.ui.mojom.mojom.ActorOverlayPageHandlerPendingReceiver;


// Interface: ActorOverlayPage
actor.ui.ui.mojom.mojom.ActorOverlayPage = {};

actor.ui.ui.mojom.mojom.ActorOverlayPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.ui.ui.mojom.mojom.ActorOverlayPageRemote = class {
  static get $interfaceName() {
    return 'actor.ui.mojom.ActorOverlayPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.ui.ui.mojom.mojom.ActorOverlayPagePendingReceiver,
      handle);
    this.$ = new actor.ui.ui.mojom.mojom.ActorOverlayPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.ui.ui.mojom.mojom.ActorOverlayPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setScrimBackground(is_visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec,
      null,
      [is_visible]);
  }

  setBorderGlowVisibility(is_visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec,
      null,
      [is_visible]);
  }

  setTheme(theme) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPage_SetTheme_ParamsSpec,
      null,
      [theme]);
  }

  moveCursorTo(point) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec,
      null,
      [point]);
  }

  triggerClickAnimation() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      actor.ui.ui.mojom.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec,
      null,
      []);
  }

};

actor.ui.ui.mojom.mojom.ActorOverlayPage.getRemote = function() {
  let remote = new actor.ui.ui.mojom.mojom.ActorOverlayPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.ui.mojom.ActorOverlayPage',
    'context');
  return remote.$;
};

// ParamsSpec for SetScrimBackground
actor.ui.ui.mojom.mojom.ActorOverlayPage_SetScrimBackground_ParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPage_SetTheme_ParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPage_MoveCursorTo_ParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPage_TriggerClickAnimation_ParamsSpec = {
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
actor.ui.ui.mojom.mojom.ActorOverlayPagePtr = actor.ui.ui.mojom.mojom.ActorOverlayPageRemote;
actor.ui.ui.mojom.mojom.ActorOverlayPageRequest = actor.ui.ui.mojom.mojom.ActorOverlayPagePendingReceiver;

