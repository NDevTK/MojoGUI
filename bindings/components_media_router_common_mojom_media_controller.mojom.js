// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_controller.mojom
// Module: media_router.mojom

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var mojo_base = mojo_base || {};

media_router.mojom.MediaController = {};
media_router.mojom.MediaController.$interfaceName = 'media_router.mojom.MediaController';
media_router.mojom.MediaController_Play_ParamsSpec = { $: {} };
media_router.mojom.MediaController_Pause_ParamsSpec = { $: {} };
media_router.mojom.MediaController_SetMute_ParamsSpec = { $: {} };
media_router.mojom.MediaController_SetVolume_ParamsSpec = { $: {} };
media_router.mojom.MediaController_Seek_ParamsSpec = { $: {} };
media_router.mojom.MediaController_NextTrack_ParamsSpec = { $: {} };
media_router.mojom.MediaController_PreviousTrack_ParamsSpec = { $: {} };

// Interface: MediaController
mojo.internal.Struct(
    media_router.mojom.MediaController_Play_ParamsSpec, 'media_router.mojom.MediaController_Play_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_Pause_ParamsSpec, 'media_router.mojom.MediaController_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_SetMute_ParamsSpec, 'media_router.mojom.MediaController_SetMute_Params', [
      mojo.internal.StructField('mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_SetVolume_ParamsSpec, 'media_router.mojom.MediaController_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_Seek_ParamsSpec, 'media_router.mojom.MediaController_Seek_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_NextTrack_ParamsSpec, 'media_router.mojom.MediaController_NextTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_PreviousTrack_ParamsSpec, 'media_router.mojom.MediaController_PreviousTrack_Params', [
    ],
    [[0, 8]]);

media_router.mojom.MediaControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.MediaControllerRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.MediaControllerPendingReceiver,
      handle);
    this.$ = new media_router.mojom.MediaControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  play() {
    return this.$.play();
  }
  pause() {
    return this.$.pause();
  }
  setMute(mute) {
    return this.$.setMute(mute);
  }
  setVolume(volume) {
    return this.$.setVolume(volume);
  }
  seek(time) {
    return this.$.seek(time);
  }
  nextTrack() {
    return this.$.nextTrack();
  }
  previousTrack() {
    return this.$.previousTrack();
  }
};

media_router.mojom.MediaControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  play() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_router.mojom.MediaController_Play_ParamsSpec,
      null,
      [],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_router.mojom.MediaController_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  setMute(mute) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_router.mojom.MediaController_SetMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  setVolume(volume) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media_router.mojom.MediaController_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  seek(time) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media_router.mojom.MediaController_Seek_ParamsSpec,
      null,
      [time],
      false);
  }

  nextTrack() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media_router.mojom.MediaController_NextTrack_ParamsSpec,
      null,
      [],
      false);
  }

  previousTrack() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media_router.mojom.MediaController_PreviousTrack_ParamsSpec,
      null,
      [],
      false);
  }

};

media_router.mojom.MediaController.getRemote = function() {
  let remote = new media_router.mojom.MediaControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaController',
    'context');
  return remote.$;
};

media_router.mojom.MediaControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(media_router.mojom.MediaController_Play_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_Pause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_SetMute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_SetVolume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_Seek_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_NextTrack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_PreviousTrack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_Play_ParamsSpec.$.structSpec);
          const result = this.impl.play();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_Pause_ParamsSpec.$.structSpec);
          const result = this.impl.pause();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_SetMute_ParamsSpec.$.structSpec);
          const result = this.impl.setMute(params.mute);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_SetVolume_ParamsSpec.$.structSpec);
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_Seek_ParamsSpec.$.structSpec);
          const result = this.impl.seek(params.time);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_NextTrack_ParamsSpec.$.structSpec);
          const result = this.impl.nextTrack();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_PreviousTrack_ParamsSpec.$.structSpec);
          const result = this.impl.previousTrack();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_router.mojom.MediaControllerReceiver = media_router.mojom.MediaControllerReceiver;

media_router.mojom.MediaControllerPtr = media_router.mojom.MediaControllerRemote;
media_router.mojom.MediaControllerRequest = media_router.mojom.MediaControllerPendingReceiver;

