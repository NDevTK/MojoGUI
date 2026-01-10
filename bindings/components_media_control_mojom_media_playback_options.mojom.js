// Auto-generated MojoJS binding
// Source: chromium_src/components/media_control/mojom/media_playback_options.mojom
// Module: components.media_control.mojom

'use strict';

// Module namespace
var components = components || {};
components.media_control = components.media_control || {};
components.media_control.mojom = components.media_control.mojom || {};
var content = content || {};

components.media_control.mojom.MediaPlaybackOptions = {};
components.media_control.mojom.MediaPlaybackOptions.$interfaceName = 'components.media_control.mojom.MediaPlaybackOptions';
components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec = { $: {} };
components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec = { $: {} };
components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec = { $: {} };

// Interface: MediaPlaybackOptions
mojo.internal.Struct(
    components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec, 'components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_Params', [
      mojo.internal.StructField('blocked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec, 'components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec, 'components.media_control.mojom.MediaPlaybackOptions_SetRendererType_Params', [
      mojo.internal.StructField('type', 0, 0, content.mojom.RendererTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

components.media_control.mojom.MediaPlaybackOptionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

components.media_control.mojom.MediaPlaybackOptionsRemote = class {
  static get $interfaceName() {
    return 'components.media_control.mojom.MediaPlaybackOptions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      components.media_control.mojom.MediaPlaybackOptionsPendingReceiver,
      handle);
    this.$ = new components.media_control.mojom.MediaPlaybackOptionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

components.media_control.mojom.MediaPlaybackOptionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMediaLoadingBlocked(blocked) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec,
      null,
      [blocked],
      false);
  }

  setBackgroundVideoPlaybackEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setRendererType(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec,
      null,
      [type],
      false);
  }

};

components.media_control.mojom.MediaPlaybackOptions.getRemote = function() {
  let remote = new components.media_control.mojom.MediaPlaybackOptionsRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'components.media_control.mojom.MediaPlaybackOptions',
    'context');
  return remote.$;
};

components.media_control.mojom.MediaPlaybackOptionsPtr = components.media_control.mojom.MediaPlaybackOptionsRemote;
components.media_control.mojom.MediaPlaybackOptionsRequest = components.media_control.mojom.MediaPlaybackOptionsPendingReceiver;

