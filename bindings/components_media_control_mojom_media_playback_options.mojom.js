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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'components.media_control.mojom.MediaPlaybackOptions',
    'context');
  return remote.$;
};

components.media_control.mojom.MediaPlaybackOptionsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMediaLoadingBlocked(params.blocked);
          break;
        }
        case 1: {
          const params = components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBackgroundVideoPlaybackEnabled(params.enabled);
          break;
        }
        case 2: {
          const params = components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setRendererType(params.type);
          break;
        }
      }
      }
    }});
  }
};

components.media_control.mojom.MediaPlaybackOptionsReceiver = components.media_control.mojom.MediaPlaybackOptionsReceiver;

components.media_control.mojom.MediaPlaybackOptionsPtr = components.media_control.mojom.MediaPlaybackOptionsRemote;
components.media_control.mojom.MediaPlaybackOptionsRequest = components.media_control.mojom.MediaPlaybackOptionsPendingReceiver;

