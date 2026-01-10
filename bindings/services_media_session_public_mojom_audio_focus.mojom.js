// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/audio_focus.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};
var mojo_base = mojo_base || {};

media_session.mojom.EnforcementModeSpec = { $: mojo.internal.Enum() };
media_session.mojom.AudioFocusTypeSpec = { $: mojo.internal.Enum() };
media_session.mojom.AudioFocusRequestStateSpec = { $: {} };
media_session.mojom.AudioFocusObserver = {};
media_session.mojom.AudioFocusObserver.$interfaceName = 'media_session.mojom.AudioFocusObserver';
media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusRequestClient = {};
media_session.mojom.AudioFocusRequestClient.$interfaceName = 'media_session.mojom.AudioFocusRequestClient';
media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec = { $: {} };
media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager = {};
media_session.mojom.AudioFocusManager.$interfaceName = 'media_session.mojom.AudioFocusManager';
media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_SetSource_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec = { $: {} };
media_session.mojom.AudioFocusManagerDebug = {};
media_session.mojom.AudioFocusManagerDebug.$interfaceName = 'media_session.mojom.AudioFocusManagerDebug';
media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec = { $: {} };
media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec = { $: {} };

// Enum: EnforcementMode
media_session.mojom.EnforcementMode = {
  kDefault: 0,
  kNone: 1,
  kSingleGroup: 2,
  kSingleSession: 3,
};

// Enum: AudioFocusType
media_session.mojom.AudioFocusType = {
  kGain: 0,
  kGainTransientMayDuck: 1,
  kGainTransient: 2,
  kAmbient: 3,
};

// Struct: AudioFocusRequestState
mojo.internal.Struct(
    media_session.mojom.AudioFocusRequestStateSpec, 'media_session.mojom.AudioFocusRequestState', [
      mojo.internal.StructField('session_info', 0, 0, media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_focus_type', 8, 0, media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_name', 16, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('request_id', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('source_id', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 9, undefined),
    ],
    [[0, 24], [2, 32], [3, 40], [9, 48]]);

// Interface: AudioFocusObserver
mojo.internal.Struct(
    media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec, 'media_session.mojom.AudioFocusObserver_OnFocusGained_Params', [
      mojo.internal.StructField('state', 0, 0, media_session.mojom.AudioFocusRequestStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec, 'media_session.mojom.AudioFocusObserver_OnFocusLost_Params', [
      mojo.internal.StructField('state', 0, 0, media_session.mojom.AudioFocusRequestStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec, 'media_session.mojom.AudioFocusObserver_OnRequestIdReleased_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.AudioFocusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.AudioFocusObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.AudioFocusObserverPendingReceiver,
      handle);
    this.$ = new media_session.mojom.AudioFocusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.AudioFocusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFocusGained(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec,
      null,
      [state],
      false);
  }

  onFocusLost(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec,
      null,
      [state],
      false);
  }

  onRequestIdReleased(request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec,
      null,
      [request_id],
      false);
  }

};

media_session.mojom.AudioFocusObserver.getRemote = function() {
  let remote = new media_session.mojom.AudioFocusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusObserver',
    'context');
  return remote.$;
};

media_session.mojom.AudioFocusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnFocusGained
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusGained (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFocusLost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusLost (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnRequestIdReleased
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestIdReleased (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFocusGained');
          const result = this.impl.onFocusGained(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFocusLost');
          const result = this.impl.onFocusLost(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRequestIdReleased');
          const result = this.impl.onRequestIdReleased(params.request_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.AudioFocusObserverReceiver = media_session.mojom.AudioFocusObserverReceiver;

media_session.mojom.AudioFocusObserverPtr = media_session.mojom.AudioFocusObserverRemote;
media_session.mojom.AudioFocusObserverRequest = media_session.mojom.AudioFocusObserverPendingReceiver;


// Interface: AudioFocusRequestClient
mojo.internal.Struct(
    media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_Params', [
      mojo.internal.StructField('session_info', 0, 0, media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec, 'media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec, 'media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_Params', [
      mojo.internal.StructField('session_info', 0, 0, media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.AudioFocusRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.AudioFocusRequestClientRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.AudioFocusRequestClientPendingReceiver,
      handle);
    this.$ = new media_session.mojom.AudioFocusRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.AudioFocusRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestAudioFocus(session_info, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec,
      media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec,
      [session_info, type],
      false);
  }

  abandonAudioFocus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec,
      null,
      [],
      false);
  }

  mediaSessionInfoChanged(session_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec,
      null,
      [session_info],
      false);
  }

};

media_session.mojom.AudioFocusRequestClient.getRemote = function() {
  let remote = new media_session.mojom.AudioFocusRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusRequestClient',
    'context');
  return remote.$;
};

media_session.mojom.AudioFocusRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAudioFocus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AbandonAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AbandonAudioFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MediaSessionInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionInfoChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAudioFocus');
          const result = this.impl.requestAudioFocus(params.session_info, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.abandonAudioFocus');
          const result = this.impl.abandonAudioFocus();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionInfoChanged');
          const result = this.impl.mediaSessionInfoChanged(params.session_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.AudioFocusRequestClientReceiver = media_session.mojom.AudioFocusRequestClientReceiver;

media_session.mojom.AudioFocusRequestClientPtr = media_session.mojom.AudioFocusRequestClientRemote;
media_session.mojom.AudioFocusRequestClientRequest = media_session.mojom.AudioFocusRequestClientPendingReceiver;


// Interface: AudioFocusManager
mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusManager_RequestAudioFocus_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusRequestClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.InterfaceProxy(media_session.mojom.MediaSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('session_info', 16, 0, media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParams', [
      mojo.internal.StructField('request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec, 'media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusRequestClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.InterfaceProxy(media_session.mojom.MediaSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('session_info', 24, 0, media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 32, 0, media_session.mojom.AudioFocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec, 'media_session.mojom.AudioFocusManager_GetFocusRequests_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParams', [
      mojo.internal.StructField('requests', 0, 0, mojo.internal.Array(media_session.mojom.AudioFocusRequestStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec, 'media_session.mojom.AudioFocusManager_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media_session.mojom.AudioFocusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_SetSource_ParamsSpec, 'media_session.mojom.AudioFocusManager_SetSource_Params', [
      mojo.internal.StructField('identity', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec, 'media_session.mojom.AudioFocusManager_SetEnforcementMode_Params', [
      mojo.internal.StructField('mode', 0, 0, media_session.mojom.EnforcementModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec, 'media_session.mojom.AudioFocusManager_AddSourceObserver_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(media_session.mojom.AudioFocusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec, 'media_session.mojom.AudioFocusManager_GetSourceFocusRequests_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParams', [
      mojo.internal.StructField('requests', 0, 0, mojo.internal.Array(media_session.mojom.AudioFocusRequestStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec, 'media_session.mojom.AudioFocusManager_RequestIdReleased_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec, 'media_session.mojom.AudioFocusManager_StartDuckingAllAudio_Params', [
      mojo.internal.StructField('exempted_request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec, 'media_session.mojom.AudioFocusManager_StopDuckingAllAudio_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec, 'media_session.mojom.AudioFocusManager_FlushForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec, 'media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParams', [
    ],
    [[0, 8]]);

media_session.mojom.AudioFocusManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.AudioFocusManagerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.AudioFocusManagerPendingReceiver,
      handle);
    this.$ = new media_session.mojom.AudioFocusManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.AudioFocusManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestAudioFocus(client, session, session_info, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec,
      media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec,
      [client, session, session_info, type],
      false);
  }

  requestGroupedAudioFocus(request_id, client, session, session_info, type, group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec,
      media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec,
      [request_id, client, session, session_info, type, group_id],
      false);
  }

  getFocusRequests() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec,
      media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec,
      [],
      false);
  }

  addObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setSource(identity, name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_session.mojom.AudioFocusManager_SetSource_ParamsSpec,
      null,
      [identity, name],
      false);
  }

  setEnforcementMode(mode) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec,
      null,
      [mode],
      false);
  }

  addSourceObserver(source_id, observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec,
      null,
      [source_id, observer],
      false);
  }

  getSourceFocusRequests(source_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec,
      media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec,
      [source_id],
      false);
  }

  requestIdReleased(request_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec,
      null,
      [request_id],
      false);
  }

  startDuckingAllAudio(exempted_request_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec,
      null,
      [exempted_request_id],
      false);
  }

  stopDuckingAllAudio() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec,
      null,
      [],
      false);
  }

  flushForTesting() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec,
      media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec,
      [],
      false);
  }

};

media_session.mojom.AudioFocusManager.getRemote = function() {
  let remote = new media_session.mojom.AudioFocusManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusManager',
    'context');
  return remote.$;
};

media_session.mojom.AudioFocusManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(4, 1); // Default ordinal 4 -> Index 1
    this.ordinalMap.set(1, 2); // Default ordinal 1 -> Index 2
    this.ordinalMap.set(2, 3); // Default ordinal 2 -> Index 3
    this.ordinalMap.set(6, 4); // Default ordinal 6 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(7, 6); // Default ordinal 7 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    this.ordinalMap.set(9, 8); // Default ordinal 9 -> Index 8
    this.ordinalMap.set(10, 9); // Default ordinal 10 -> Index 9
    this.ordinalMap.set(11, 10); // Default ordinal 11 -> Index 10
    this.ordinalMap.set(12, 11); // Default ordinal 12 -> Index 11
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAudioFocus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestGroupedAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestGroupedAudioFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetFocusRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFocusRequests (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_SetSource_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSource (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetEnforcementMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnforcementMode (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddSourceObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSourceObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetSourceFocusRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSourceFocusRequests (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RequestIdReleased
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestIdReleased (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: StartDuckingAllAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDuckingAllAudio (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: StopDuckingAllAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDuckingAllAudio (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: FlushForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushForTesting (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAudioFocus');
          const result = this.impl.requestAudioFocus(params.client, params.session, params.session_info, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestGroupedAudioFocus');
          const result = this.impl.requestGroupedAudioFocus(params.request_id, params.client, params.session, params.session_info, params.type, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFocusRequests');
          const result = this.impl.getFocusRequests();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_SetSource_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSource');
          const result = this.impl.setSource(params.identity, params.name);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setEnforcementMode');
          const result = this.impl.setEnforcementMode(params.mode);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addSourceObserver');
          const result = this.impl.addSourceObserver(params.source_id, params.observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSourceFocusRequests');
          const result = this.impl.getSourceFocusRequests(params.source_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestIdReleased');
          const result = this.impl.requestIdReleased(params.request_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDuckingAllAudio');
          const result = this.impl.startDuckingAllAudio(params.exempted_request_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopDuckingAllAudio');
          const result = this.impl.stopDuckingAllAudio();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flushForTesting');
          const result = this.impl.flushForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.AudioFocusManagerReceiver = media_session.mojom.AudioFocusManagerReceiver;

media_session.mojom.AudioFocusManagerPtr = media_session.mojom.AudioFocusManagerRemote;
media_session.mojom.AudioFocusManagerRequest = media_session.mojom.AudioFocusManagerPendingReceiver;


// Interface: AudioFocusManagerDebug
mojo.internal.Struct(
    media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec, 'media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec, 'media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParams', [
      mojo.internal.StructField('debug_info', 0, 0, media_session.mojom.MediaSessionDebugInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.AudioFocusManagerDebugPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.AudioFocusManagerDebugRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.AudioFocusManagerDebug';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.AudioFocusManagerDebugPendingReceiver,
      handle);
    this.$ = new media_session.mojom.AudioFocusManagerDebugRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.AudioFocusManagerDebugRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDebugInfoForRequest(request_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec,
      media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec,
      [request_id],
      false);
  }

};

media_session.mojom.AudioFocusManagerDebug.getRemote = function() {
  let remote = new media_session.mojom.AudioFocusManagerDebugRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.AudioFocusManagerDebug',
    'context');
  return remote.$;
};

media_session.mojom.AudioFocusManagerDebugReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDebugInfoForRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugInfoForRequest (0)');
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
          const params = decoder.decodeStruct(media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDebugInfoForRequest');
          const result = this.impl.getDebugInfoForRequest(params.request_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.AudioFocusManagerDebugReceiver = media_session.mojom.AudioFocusManagerDebugReceiver;

media_session.mojom.AudioFocusManagerDebugPtr = media_session.mojom.AudioFocusManagerDebugRemote;
media_session.mojom.AudioFocusManagerDebugRequest = media_session.mojom.AudioFocusManagerDebugPendingReceiver;

