// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_controller.mojom
// Module: media_router.mojom

'use strict';

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
};

media_router.mojom.MediaControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  play() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.MediaController_Play_ParamsSpec,
      null,
      [],
      false);
  }

  pause() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.MediaController_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  setMute(mute) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.MediaController_SetMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  setVolume(volume) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.MediaController_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  seek(time) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_router.mojom.MediaController_Seek_ParamsSpec,
      null,
      [time],
      false);
  }

  nextTrack() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_router.mojom.MediaController_NextTrack_ParamsSpec,
      null,
      [],
      false);
  }

  previousTrack() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Play
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_Play_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Play (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_Pause_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetMute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_SetMute_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMute (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_SetVolume_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Seek
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_Seek_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Seek (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: NextTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_NextTrack_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NextTrack (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PreviousTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaController_PreviousTrack_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviousTrack (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_Play_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.play');
          const result = this.impl.play();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_Pause_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_SetMute_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setMute');
          const result = this.impl.setMute(params.mute);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_SetVolume_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_Seek_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.seek');
          const result = this.impl.seek(params.time);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_NextTrack_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.nextTrack');
          const result = this.impl.nextTrack();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaController_PreviousTrack_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.previousTrack');
          const result = this.impl.previousTrack();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_router.mojom.MediaControllerReceiver = media_router.mojom.MediaControllerReceiver;

media_router.mojom.MediaControllerPtr = media_router.mojom.MediaControllerRemote;
media_router.mojom.MediaControllerRequest = media_router.mojom.MediaControllerPendingReceiver;

