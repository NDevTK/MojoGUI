// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/focus_mode/mojom/focus_mode.mojom
// Module: ash.focus_mode.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.focus_mode = ash.focus_mode || {};
ash.focus_mode.mojom = ash.focus_mode.mojom || {};
var url = url || {};
var mojo_base = mojo_base || {};

ash.focus_mode.mojom.PlaybackStateSpec = { $: mojo.internal.Enum() };
ash.focus_mode.mojom.TrackDefinitionSpec = { $: {} };
ash.focus_mode.mojom.PlaybackDataSpec = { $: {} };
ash.focus_mode.mojom.MediaClient = {};
ash.focus_mode.mojom.MediaClient.$interfaceName = 'ash.focus_mode.mojom.MediaClient';
ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider = {};
ash.focus_mode.mojom.TrackProvider.$interfaceName = 'ash.focus_mode.mojom.TrackProvider';
ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec = { $: {} };
ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec = { $: {} };

// Enum: PlaybackState
ash.focus_mode.mojom.PlaybackState = {
  kPlaying: 0,
  kPaused: 1,
  kSwitchedToNext: 2,
  kEnded: 3,
  kNone: 4,
};

// Struct: TrackDefinition
mojo.internal.Struct(
    ash.focus_mode.mojom.TrackDefinitionSpec, 'ash.focus_mode.mojom.TrackDefinition', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('artist', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_playback_reporting', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PlaybackData
mojo.internal.Struct(
    ash.focus_mode.mojom.PlaybackDataSpec, 'ash.focus_mode.mojom.PlaybackData', [
      mojo.internal.StructField('state', 0, 0, ash.focus_mode.mojom.PlaybackStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_current_time', 24, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_start_time', 32, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('playback_start_offset', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_time_current', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_start', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_end', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('initial_playback', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: MediaClient
mojo.internal.Struct(
    ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec, 'ash.focus_mode.mojom.MediaClient_StartPlay_Params', [
      mojo.internal.StructField('track', 0, 0, ash.focus_mode.mojom.TrackDefinitionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.focus_mode.mojom.MediaClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.focus_mode.mojom.MediaClientRemote = class {
  static get $interfaceName() {
    return 'ash.focus_mode.mojom.MediaClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.focus_mode.mojom.MediaClientPendingReceiver,
      handle);
    this.$ = new ash.focus_mode.mojom.MediaClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.focus_mode.mojom.MediaClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startPlay(track) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec,
      null,
      [track],
      false);
  }

};

ash.focus_mode.mojom.MediaClient.getRemote = function() {
  let remote = new ash.focus_mode.mojom.MediaClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.focus_mode.mojom.MediaClient',
    'context');
  return remote.$;
};

ash.focus_mode.mojom.MediaClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: StartPlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPlay (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(ash.focus_mode.mojom.MediaClient_StartPlay_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startPlay');
          const result = this.impl.startPlay(params.track);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.focus_mode.mojom.MediaClientReceiver = ash.focus_mode.mojom.MediaClientReceiver;

ash.focus_mode.mojom.MediaClientPtr = ash.focus_mode.mojom.MediaClientRemote;
ash.focus_mode.mojom.MediaClientRequest = ash.focus_mode.mojom.MediaClientPendingReceiver;


// Interface: TrackProvider
mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_GetTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec, 'ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParams', [
      mojo.internal.StructField('track', 0, 0, ash.focus_mode.mojom.TrackDefinitionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_SetMediaClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(ash.focus_mode.mojom.MediaClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_ReportPlayback_Params', [
      mojo.internal.StructField('data', 0, 0, ash.focus_mode.mojom.PlaybackDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec, 'ash.focus_mode.mojom.TrackProvider_ReportPlayerError_Params', [
    ],
    [[0, 8]]);

ash.focus_mode.mojom.TrackProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.focus_mode.mojom.TrackProviderRemote = class {
  static get $interfaceName() {
    return 'ash.focus_mode.mojom.TrackProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.focus_mode.mojom.TrackProviderPendingReceiver,
      handle);
    this.$ = new ash.focus_mode.mojom.TrackProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.focus_mode.mojom.TrackProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTrack() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec,
      ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec,
      [],
      false);
  }

  setMediaClient(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec,
      null,
      [client],
      false);
  }

  reportPlayback(data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec,
      null,
      [data],
      false);
  }

  reportPlayerError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.focus_mode.mojom.TrackProvider.getRemote = function() {
  let remote = new ash.focus_mode.mojom.TrackProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.focus_mode.mojom.TrackProvider',
    'context');
  return remote.$;
};

ash.focus_mode.mojom.TrackProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: GetTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTrack (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetMediaClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMediaClient (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportPlayback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportPlayback (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReportPlayerError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportPlayerError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_GetTrack_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getTrack');
          const result = this.impl.getTrack();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.focus_mode.mojom.TrackProvider_GetTrack_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_SetMediaClient_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setMediaClient');
          const result = this.impl.setMediaClient(params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_ReportPlayback_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reportPlayback');
          const result = this.impl.reportPlayback(params.data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.focus_mode.mojom.TrackProvider_ReportPlayerError_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reportPlayerError');
          const result = this.impl.reportPlayerError();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.focus_mode.mojom.TrackProviderReceiver = ash.focus_mode.mojom.TrackProviderReceiver;

ash.focus_mode.mojom.TrackProviderPtr = ash.focus_mode.mojom.TrackProviderRemote;
ash.focus_mode.mojom.TrackProviderRequest = ash.focus_mode.mojom.TrackProviderPendingReceiver;

