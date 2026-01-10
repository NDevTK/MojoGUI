// Auto-generated MojoJS binding
// Source: chromium_src/components/media_control/mojom/media_playback_options.mojom
// Module: components.media_control.mojom

'use strict';

// Module namespace
var components = components || {};
components.media_control = components.media_control || {};
components.media_control.mojom = components.media_control.mojom || {};
var content = content || {};


// Interface: MediaPlaybackOptions
components.media_control.mojom.MediaPlaybackOptions = {};

components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_Params',
      packedSize: 16,
      fields: [
        { name: 'blocked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'components.media_control.mojom.MediaPlaybackOptions_SetRendererType_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: content.mojom.RendererTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [blocked]);
  }

  setBackgroundVideoPlaybackEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setRendererType(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec,
      null,
      [type]);
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

// ParamsSpec for SetMediaLoadingBlocked
components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'components.media_control.mojom.MediaPlaybackOptions.SetMediaLoadingBlocked_Params',
      packedSize: 16,
      fields: [
        { name: 'blocked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBackgroundVideoPlaybackEnabled
components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'components.media_control.mojom.MediaPlaybackOptions.SetBackgroundVideoPlaybackEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetRendererType
components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'components.media_control.mojom.MediaPlaybackOptions.SetRendererType_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: content.mojom.RendererTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
components.media_control.mojom.MediaPlaybackOptionsPtr = components.media_control.mojom.MediaPlaybackOptionsRemote;
components.media_control.mojom.MediaPlaybackOptionsRequest = components.media_control.mojom.MediaPlaybackOptionsPendingReceiver;

