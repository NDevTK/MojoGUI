// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer_extensions.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('texture_handle', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FramePoolInitializationParameters
mojo.internal.Struct(
    media.mojom.FramePoolInitializationParametersSpec, 'media.mojom.FramePoolInitializationParameters', [
      mojo.internal.StructField('frame_textures', 0, 0, mojo.internal.Array(media.mojom.FrameTextureInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('texture_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FlingingRendererClientExtension
mojo.internal.Struct(
    media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec, 'media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, media.mojom.MediaStatusStateSpec.$, null, false, 0, undefined),
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
  onRemotePlayStateChange(state) {
    return this.$.onRemotePlayStateChange(state);
  }
};

media.mojom.FlingingRendererClientExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FlingingRendererClientExtension', [
      { explicit: null },
    ]);
  }

  onRemotePlayStateChange(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec,
      null,
      [state],
      false);
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

media.mojom.FlingingRendererClientExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FlingingRendererClientExtension', [
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
             decoder.decodeStructInline(media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.onRemotePlayStateChange(params.state);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.FlingingRendererClientExtensionReceiver = media.mojom.FlingingRendererClientExtensionReceiver;

media.mojom.FlingingRendererClientExtensionPtr = media.mojom.FlingingRendererClientExtensionRemote;
media.mojom.FlingingRendererClientExtensionRequest = media.mojom.FlingingRendererClientExtensionPendingReceiver;


// Interface: MediaFoundationRendererExtension
mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec, 'media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec, 'media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
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
  getDCOMPSurface() {
    return this.$.getDCOMPSurface();
  }
  setVideoStreamEnabled(enabled) {
    return this.$.setVideoStreamEnabled(enabled);
  }
  setOutputRect(rect) {
    return this.$.setOutputRect(rect);
  }
};

media.mojom.MediaFoundationRendererExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererExtension', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDCOMPSurface() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec,
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec,
      [],
      false);
  }

  setVideoStreamEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setOutputRect(rect) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec,
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec,
      [rect],
      false);
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

media.mojom.MediaFoundationRendererExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererExtension', [
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
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec.$.structSpec);
          const result = this.impl.getDCOMPSurface();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setVideoStreamEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec.$.structSpec);
          const result = this.impl.setOutputRect(params.rect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaFoundationRendererExtensionReceiver = media.mojom.MediaFoundationRendererExtensionReceiver;

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
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererObserver', [
    ]);
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

media.mojom.MediaFoundationRendererObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererObserver', [
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
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaFoundationRendererObserverReceiver = media.mojom.MediaFoundationRendererObserverReceiver;

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
  mediaFoundationRendererCreated(observer) {
    return this.$.mediaFoundationRendererCreated(observer);
  }
};

media.mojom.MediaFoundationRendererNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererNotifier', [
      { explicit: null },
    ]);
  }

  mediaFoundationRendererCreated(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec,
      null,
      [observer],
      false);
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

media.mojom.MediaFoundationRendererNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererNotifier', [
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
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec.$.structSpec);
          const result = this.impl.mediaFoundationRendererCreated(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaFoundationRendererNotifierReceiver = media.mojom.MediaFoundationRendererNotifierReceiver;

media.mojom.MediaFoundationRendererNotifierPtr = media.mojom.MediaFoundationRendererNotifierRemote;
media.mojom.MediaFoundationRendererNotifierRequest = media.mojom.MediaFoundationRendererNotifierPendingReceiver;

