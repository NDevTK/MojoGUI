// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/picture_in_picture/picture_in_picture.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var media = media || {};
var media_session = media_session || {};
var viz = viz || {};
var gfx = gfx || {};

blink.mojom.PictureInPictureSessionObserver = {};
blink.mojom.PictureInPictureSessionObserver.$interfaceName = 'blink.mojom.PictureInPictureSessionObserver';
blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession = {};
blink.mojom.PictureInPictureSession.$interfaceName = 'blink.mojom.PictureInPictureSession';
blink.mojom.PictureInPictureSession_Update_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession_Stop_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession_Stop_ResponseParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureService = {};
blink.mojom.PictureInPictureService.$interfaceName = 'blink.mojom.PictureInPictureService';
blink.mojom.PictureInPictureService_StartSession_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec = { $: {} };

// Interface: PictureInPictureSessionObserver
mojo.internal.Struct(
    blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec, 'blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec, 'blink.mojom.PictureInPictureSessionObserver_OnStopped_Params', [
    ],
    [[0, 8]]);

blink.mojom.PictureInPictureSessionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PictureInPictureSessionObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureSessionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PictureInPictureSessionObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.PictureInPictureSessionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWindowSizeChanged(size) {
    return this.$.onWindowSizeChanged(size);
  }
  onStopped() {
    return this.$.onStopped();
  }
};

blink.mojom.PictureInPictureSessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PictureInPictureSessionObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWindowSizeChanged(size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec,
      null,
      [size],
      false);
  }

  onStopped() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.PictureInPictureSessionObserver.getRemote = function() {
  let remote = new blink.mojom.PictureInPictureSessionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureSessionObserver',
    'context');
  return remote.$;
};

blink.mojom.PictureInPictureSessionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PictureInPictureSessionObserver', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowSizeChanged(params.size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec.$.structSpec);
          const result = this.impl.onStopped();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.PictureInPictureSessionObserverReceiver = blink.mojom.PictureInPictureSessionObserverReceiver;

blink.mojom.PictureInPictureSessionObserverPtr = blink.mojom.PictureInPictureSessionObserverRemote;
blink.mojom.PictureInPictureSessionObserverRequest = blink.mojom.PictureInPictureSessionObserverPendingReceiver;


// Interface: PictureInPictureSession
mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_Update_ParamsSpec, 'blink.mojom.PictureInPictureSession_Update_Params', [
      mojo.internal.StructField('player_remote', 0, 0, pending_associated_remote<media.mojom.MediaPlayer>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('surface_id', 8, 0, viz.mojom.SurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('player_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('show_play_pause_button', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_Stop_ParamsSpec, 'blink.mojom.PictureInPictureSession_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_Stop_ResponseParamsSpec, 'blink.mojom.PictureInPictureSession_Stop_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec, 'blink.mojom.PictureInPictureSession_UpdateMediaPosition_Params', [
      mojo.internal.StructField('media_position', 0, 0, media_session.mojom.MediaPositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PictureInPictureSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PictureInPictureSessionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PictureInPictureSessionPendingReceiver,
      handle);
    this.$ = new blink.mojom.PictureInPictureSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(player_id, player_remote, surface_id, natural_size, show_play_pause_button) {
    return this.$.update(player_id, player_remote, surface_id, natural_size, show_play_pause_button);
  }
  stop() {
    return this.$.stop();
  }
  updateMediaPosition(media_position) {
    return this.$.updateMediaPosition(media_position);
  }
};

blink.mojom.PictureInPictureSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PictureInPictureSession', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  update(player_id, player_remote, surface_id, natural_size, show_play_pause_button) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PictureInPictureSession_Update_ParamsSpec,
      null,
      [player_id, player_remote, surface_id, natural_size, show_play_pause_button],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PictureInPictureSession_Stop_ParamsSpec,
      blink.mojom.PictureInPictureSession_Stop_ResponseParamsSpec,
      [],
      false);
  }

  updateMediaPosition(media_position) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec,
      null,
      [media_position],
      false);
  }

};

blink.mojom.PictureInPictureSession.getRemote = function() {
  let remote = new blink.mojom.PictureInPictureSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureSession',
    'context');
  return remote.$;
};

blink.mojom.PictureInPictureSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PictureInPictureSession', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.PictureInPictureSession_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PictureInPictureSession_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PictureInPictureSession_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.player_id, params.player_remote, params.surface_id, params.natural_size, params.show_play_pause_button);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PictureInPictureSession_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PictureInPictureSession_Stop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec.$.structSpec);
          const result = this.impl.updateMediaPosition(params.media_position);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.PictureInPictureSessionReceiver = blink.mojom.PictureInPictureSessionReceiver;

blink.mojom.PictureInPictureSessionPtr = blink.mojom.PictureInPictureSessionRemote;
blink.mojom.PictureInPictureSessionRequest = blink.mojom.PictureInPictureSessionPendingReceiver;


// Interface: PictureInPictureService
mojo.internal.Struct(
    blink.mojom.PictureInPictureService_StartSession_ParamsSpec, 'blink.mojom.PictureInPictureService_StartSession_Params', [
      mojo.internal.StructField('player_remote', 0, 0, pending_associated_remote<media.mojom.MediaPlayer>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('surface_id', 8, 0, viz.mojom.SurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.PictureInPictureSessionObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('source_bounds', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('player_id', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('show_play_pause_button', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec, 'blink.mojom.PictureInPictureService_StartSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PictureInPictureSessionRemote), null, true, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.PictureInPictureServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PictureInPictureServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PictureInPictureServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PictureInPictureServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startSession(player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds) {
    return this.$.startSession(player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds);
  }
};

blink.mojom.PictureInPictureServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PictureInPictureService', [
      { explicit: null },
    ]);
  }

  startSession(player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PictureInPictureService_StartSession_ParamsSpec,
      blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec,
      [player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds],
      false);
  }

};

blink.mojom.PictureInPictureService.getRemote = function() {
  let remote = new blink.mojom.PictureInPictureServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureService',
    'context');
  return remote.$;
};

blink.mojom.PictureInPictureServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PictureInPictureService', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.PictureInPictureService_StartSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PictureInPictureService_StartSession_ParamsSpec.$.structSpec);
          const result = this.impl.startSession(params.player_id, params.player_remote, params.surface_id, params.natural_size, params.show_play_pause_button, params.observer, params.source_bounds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec);
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

blink.mojom.PictureInPictureServiceReceiver = blink.mojom.PictureInPictureServiceReceiver;

blink.mojom.PictureInPictureServicePtr = blink.mojom.PictureInPictureServiceRemote;
blink.mojom.PictureInPictureServiceRequest = blink.mojom.PictureInPictureServicePendingReceiver;

