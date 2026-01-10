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

media.mojom.FrameTextureInfoSpec = { $: {} };
media.mojom.FramePoolInitializationParametersSpec = { $: {} };
media.mojom.FlingingRendererClientExtension = {};
media.mojom.FlingingRendererClientExtension.$interfaceName = 'media.mojom.FlingingRendererClientExtension';
media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension = {};
media.mojom.MediaFoundationRendererExtension.$interfaceName = 'media.mojom.MediaFoundationRendererExtension';
media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererObserver = {};
media.mojom.MediaFoundationRendererObserver.$interfaceName = 'media.mojom.MediaFoundationRendererObserver';
media.mojom.MediaFoundationRendererNotifier = {};
media.mojom.MediaFoundationRendererNotifier.$interfaceName = 'media.mojom.MediaFoundationRendererNotifier';
media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec = { $: {} };

// Struct: FrameTextureInfo
mojo.internal.Struct(
    media.mojom.FrameTextureInfoSpec, 'media.mojom.FrameTextureInfo', [
      mojo.internal.StructField('texture_handle', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FramePoolInitializationParameters
mojo.internal.Struct(
    media.mojom.FramePoolInitializationParametersSpec, 'media.mojom.FramePoolInitializationParameters', [
      mojo.internal.StructField('frame_textures', 0, 0, mojo.internal.Array(media.mojom.FrameTextureInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('texture_size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FlingingRendererClientExtension
mojo.internal.Struct(
    media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec, 'media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, media.mojom.MediaStatusStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.FlingingRendererClientExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FlingingRendererClientExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FlingingRendererClientExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FlingingRendererClientExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.FlingingRendererClientExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.FlingingRendererClientExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRemotePlayStateChange(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec,
      null,
      [state]);
  }

};

media.mojom.FlingingRendererClientExtension.getRemote = function() {
  let remote = new media.mojom.FlingingRendererClientExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FlingingRendererClientExtension',
    'context');
  return remote.$;
};

media.mojom.FlingingRendererClientExtensionPtr = media.mojom.FlingingRendererClientExtensionRemote;
media.mojom.FlingingRendererClientExtensionRequest = media.mojom.FlingingRendererClientExtensionPendingReceiver;


// Interface: MediaFoundationRendererExtension
mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec, 'media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec, 'media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec, 'media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec, 'media.mojom.MediaFoundationRendererExtension_SetOutputRect_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec, 'media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaFoundationRendererExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDCOMPSurface() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec,
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec,
      []);
  }

  setVideoStreamEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setOutputRect(rect) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec,
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec,
      [rect]);
  }

};

media.mojom.MediaFoundationRendererExtension.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererExtension',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationRendererExtensionPtr = media.mojom.MediaFoundationRendererExtensionRemote;
media.mojom.MediaFoundationRendererExtensionRequest = media.mojom.MediaFoundationRendererExtensionPendingReceiver;


// Interface: MediaFoundationRendererObserver
media.mojom.MediaFoundationRendererObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.MediaFoundationRendererObserver.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererObserver',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationRendererObserverPtr = media.mojom.MediaFoundationRendererObserverRemote;
media.mojom.MediaFoundationRendererObserverRequest = media.mojom.MediaFoundationRendererObserverPendingReceiver;


// Interface: MediaFoundationRendererNotifier
mojo.internal.Struct(
    media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec, 'media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(media.mojom.MediaFoundationRendererObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaFoundationRendererNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererNotifierRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererNotifierPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mediaFoundationRendererCreated(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec,
      null,
      [observer]);
  }

};

media.mojom.MediaFoundationRendererNotifier.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererNotifier',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationRendererNotifierPtr = media.mojom.MediaFoundationRendererNotifierRemote;
media.mojom.MediaFoundationRendererNotifierRequest = media.mojom.MediaFoundationRendererNotifierPendingReceiver;

