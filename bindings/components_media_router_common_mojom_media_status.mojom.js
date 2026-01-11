// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_status.mojom
// Module: media_router.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

media_router.mojom.PlayStateSpec = { $: mojo.internal.Enum() };
media_router.mojom.MediaImageSpec = { $: {} };
media_router.mojom.MediaStatusSpec = { $: {} };
media_router.mojom.MediaStatusObserver = {};
media_router.mojom.MediaStatusObserver.$interfaceName = 'media_router.mojom.MediaStatusObserver';
media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_ParamsSpec = { $: {} };

// Enum: PlayState
media_router.mojom.PlayState = {
  PLAYING: 0,
  PAUSED: 1,
  BUFFERING: 2,
};

// Struct: MediaImage
mojo.internal.Struct(
    media_router.mojom.MediaImageSpec, 'media_router.mojom.MediaImage', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaStatus
mojo.internal.Struct(
    media_router.mojom.MediaStatusSpec, 'media_router.mojom.MediaStatus', [
      mojo.internal.StructField('PLAYING', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MediaStatusObserver
mojo.internal.Struct(
    media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_ParamsSpec, 'media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_Params', [
      mojo.internal.StructField('status', 0, 0, media_router.mojom.MediaStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media_router.mojom.MediaStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.MediaStatusObserverRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.MediaStatusObserverPendingReceiver,
      handle);
    this.$ = new media_router.mojom.MediaStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMediaStatusUpdated(status) {
    return this.$.onMediaStatusUpdated(status);
  }
};

media_router.mojom.MediaStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaStatusObserver', [
      { explicit: null },
    ]);
  }

  onMediaStatusUpdated(status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_ParamsSpec,
      null,
      [status],
      false);
  }

};

media_router.mojom.MediaStatusObserver.getRemote = function() {
  let remote = new media_router.mojom.MediaStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaStatusObserver',
    'context');
  return remote.$;
};

media_router.mojom.MediaStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaStatusObserver', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaStatusUpdated(params.status);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_router.mojom.MediaStatusObserverReceiver = media_router.mojom.MediaStatusObserverReceiver;

media_router.mojom.MediaStatusObserverPtr = media_router.mojom.MediaStatusObserverRemote;
media_router.mojom.MediaStatusObserverRequest = media_router.mojom.MediaStatusObserverPendingReceiver;

