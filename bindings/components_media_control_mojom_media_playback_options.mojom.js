// Auto-generated MojoJS binding
// Source: chromium_src/components/media_control/mojom/media_playback_options.mojom
// Module: components.media_control.mojom

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
  setMediaLoadingBlocked(blocked) {
    return this.$.setMediaLoadingBlocked(blocked);
  }
  setBackgroundVideoPlaybackEnabled(enabled) {
    return this.$.setBackgroundVideoPlaybackEnabled(enabled);
  }
  setRendererType(type) {
    return this.$.setRendererType(type);
  }
};

components.media_control.mojom.MediaPlaybackOptionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlaybackOptions', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMediaLoadingBlocked(blocked) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec,
      null,
      [blocked],
      false);
  }

  setBackgroundVideoPlaybackEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setRendererType(type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlaybackOptions', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(components.media_control.mojom.MediaPlaybackOptions_SetMediaLoadingBlocked_ParamsSpec.$.structSpec);
          const result = this.impl.setMediaLoadingBlocked(params.blocked);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(components.media_control.mojom.MediaPlaybackOptions_SetBackgroundVideoPlaybackEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setBackgroundVideoPlaybackEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(components.media_control.mojom.MediaPlaybackOptions_SetRendererType_ParamsSpec.$.structSpec);
          const result = this.impl.setRendererType(params.type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

components.media_control.mojom.MediaPlaybackOptionsReceiver = components.media_control.mojom.MediaPlaybackOptionsReceiver;

components.media_control.mojom.MediaPlaybackOptionsPtr = components.media_control.mojom.MediaPlaybackOptionsRemote;
components.media_control.mojom.MediaPlaybackOptionsRequest = components.media_control.mojom.MediaPlaybackOptionsPendingReceiver;

