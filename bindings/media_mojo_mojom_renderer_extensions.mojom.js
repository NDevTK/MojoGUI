// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer_extensions.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: FrameTextureInfo
media.mojom.mojom.FrameTextureInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FrameTextureInfo',
      packedSize: 24,
      fields: [
        { name: 'texture_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FramePoolInitializationParameters
media.mojom.mojom.FramePoolInitializationParametersSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FramePoolInitializationParameters',
      packedSize: 24,
      fields: [
        { name: 'frame_textures', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.FrameTextureInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'texture_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: FlingingRendererClientExtension
media.mojom.mojom.FlingingRendererClientExtension = {};

media.mojom.mojom.FlingingRendererClientExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.FlingingRendererClientExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FlingingRendererClientExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.FlingingRendererClientExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.FlingingRendererClientExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.FlingingRendererClientExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRemotePlayStateChange(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec,
      null,
      [state]);
  }

};

media.mojom.mojom.FlingingRendererClientExtension.getRemote = function() {
  let remote = new media.mojom.mojom.FlingingRendererClientExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FlingingRendererClientExtension',
    'context');
  return remote.$;
};

// ParamsSpec for OnRemotePlayStateChange
media.mojom.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FlingingRendererClientExtension.OnRemotePlayStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: media.mojom.MediaStatusStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.FlingingRendererClientExtensionPtr = media.mojom.mojom.FlingingRendererClientExtensionRemote;
media.mojom.mojom.FlingingRendererClientExtensionRequest = media.mojom.mojom.FlingingRendererClientExtensionPendingReceiver;


// Interface: MediaFoundationRendererExtension
media.mojom.mojom.MediaFoundationRendererExtension = {};

media.mojom.mojom.MediaFoundationRendererExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MediaFoundationRendererExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MediaFoundationRendererExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MediaFoundationRendererExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MediaFoundationRendererExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDCOMPSurface() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec,
      media.mojom.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec,
      []);
  }

  setVideoStreamEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setOutputRect(rect) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec,
      media.mojom.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec,
      [rect]);
  }

};

media.mojom.mojom.MediaFoundationRendererExtension.getRemote = function() {
  let remote = new media.mojom.mojom.MediaFoundationRendererExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererExtension',
    'context');
  return remote.$;
};

// ParamsSpec for GetDCOMPSurface
media.mojom.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.GetDCOMPSurface_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.GetDCOMPSurface_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetVideoStreamEnabled
media.mojom.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.SetVideoStreamEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOutputRect
media.mojom.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.SetOutputRect_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.SetOutputRect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.MediaFoundationRendererExtensionPtr = media.mojom.mojom.MediaFoundationRendererExtensionRemote;
media.mojom.mojom.MediaFoundationRendererExtensionRequest = media.mojom.mojom.MediaFoundationRendererExtensionPendingReceiver;


// Interface: MediaFoundationRendererObserver
media.mojom.mojom.MediaFoundationRendererObserver = {};

media.mojom.mojom.MediaFoundationRendererObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MediaFoundationRendererObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MediaFoundationRendererObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MediaFoundationRendererObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MediaFoundationRendererObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.mojom.MediaFoundationRendererObserver.getRemote = function() {
  let remote = new media.mojom.mojom.MediaFoundationRendererObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
media.mojom.mojom.MediaFoundationRendererObserverPtr = media.mojom.mojom.MediaFoundationRendererObserverRemote;
media.mojom.mojom.MediaFoundationRendererObserverRequest = media.mojom.mojom.MediaFoundationRendererObserverPendingReceiver;


// Interface: MediaFoundationRendererNotifier
media.mojom.mojom.MediaFoundationRendererNotifier = {};

media.mojom.mojom.MediaFoundationRendererNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MediaFoundationRendererNotifierRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MediaFoundationRendererNotifierPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MediaFoundationRendererNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MediaFoundationRendererNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mediaFoundationRendererCreated(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec,
      null,
      [observer]);
  }

};

media.mojom.mojom.MediaFoundationRendererNotifier.getRemote = function() {
  let remote = new media.mojom.mojom.MediaFoundationRendererNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for MediaFoundationRendererCreated
media.mojom.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererNotifier.MediaFoundationRendererCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.MediaFoundationRendererObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.MediaFoundationRendererNotifierPtr = media.mojom.mojom.MediaFoundationRendererNotifierRemote;
media.mojom.mojom.MediaFoundationRendererNotifierRequest = media.mojom.mojom.MediaFoundationRendererNotifierPendingReceiver;

