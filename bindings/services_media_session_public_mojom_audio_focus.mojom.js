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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFocusGained(params.state);
          break;
        }
        case 1: {
          const params = media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFocusLost(params.state);
          break;
        }
        case 2: {
          const params = media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRequestIdReleased(params.request_id);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestAudioFocus(params.session_info, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.abandonAudioFocus();
          break;
        }
        case 2: {
          const params = media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaSessionInfoChanged(params.session_info);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestAudioFocus(params.client, params.session, params.session_info, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestGroupedAudioFocus(params.request_id, params.client, params.session, params.session_info, params.type, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFocusRequests();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 6: {
          const params = media_session.mojom.AudioFocusManager_SetSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSource(params.identity, params.name);
          break;
        }
        case 5: {
          const params = media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEnforcementMode(params.mode);
          break;
        }
        case 7: {
          const params = media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addSourceObserver(params.source_id, params.observer);
          break;
        }
        case 8: {
          const params = media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSourceFocusRequests(params.source_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 9: {
          const params = media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestIdReleased(params.request_id);
          break;
        }
        case 10: {
          const params = media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startDuckingAllAudio(params.exempted_request_id);
          break;
        }
        case 11: {
          const params = media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopDuckingAllAudio();
          break;
        }
        case 12: {
          const params = media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flushForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_session.mojom.AudioFocusManager_FlushForTesting_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDebugInfoForRequest(params.request_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

media_session.mojom.AudioFocusManagerDebugReceiver = media_session.mojom.AudioFocusManagerDebugReceiver;

media_session.mojom.AudioFocusManagerDebugPtr = media_session.mojom.AudioFocusManagerDebugRemote;
media_session.mojom.AudioFocusManagerDebugRequest = media_session.mojom.AudioFocusManagerDebugPendingReceiver;

