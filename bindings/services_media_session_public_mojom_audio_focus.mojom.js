// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/audio_focus.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Enum: EnforcementMode
media_session.mojom.EnforcementMode = {
  kNone: 0,
  kSingleGroup: 1,
  kSingleSession: 2,
};
media_session.mojom.EnforcementModeSpec = { $: mojo.internal.Enum() };

// Enum: AudioFocusType
media_session.mojom.AudioFocusType = {
  kGain: 0,
  kGainTransientMayDuck: 1,
  kGainTransient: 2,
  kAmbient: 3,
};
media_session.mojom.AudioFocusTypeSpec = { $: mojo.internal.Enum() };

// Struct: AudioFocusRequestState
media_session.mojom.AudioFocusRequestStateSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusRequestState',
      packedSize: 48,
      fields: [
        { name: 'session_info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'audio_focus_type', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.AudioFocusTypeSpec, nullable: false, minVersion: 0 },
        { name: 'source_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'request_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 3 },
        { name: 'source_id', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 2, packedSize: 32}, {version: 3, packedSize: 40}, {version: 9, packedSize: 48}]
    }
  }
};

// Interface: AudioFocusObserver
media_session.mojom.AudioFocusObserver = {};

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
      [state]);
  }

  onFocusLost(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec,
      null,
      [state]);
  }

  onRequestIdReleased(request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec,
      null,
      [request_id]);
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

// ParamsSpec for OnFocusGained
media_session.mojom.AudioFocusObserver_OnFocusGained_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusObserver.OnFocusGained_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.AudioFocusRequestStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFocusLost
media_session.mojom.AudioFocusObserver_OnFocusLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusObserver.OnFocusLost_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.AudioFocusRequestStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRequestIdReleased
media_session.mojom.AudioFocusObserver_OnRequestIdReleased_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusObserver.OnRequestIdReleased_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_session.mojom.AudioFocusObserverPtr = media_session.mojom.AudioFocusObserverRemote;
media_session.mojom.AudioFocusObserverRequest = media_session.mojom.AudioFocusObserverPendingReceiver;


// Interface: AudioFocusRequestClient
media_session.mojom.AudioFocusRequestClient = {};

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
      null,
      [session_info, type]);
  }

  abandonAudioFocus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec,
      null,
      []);
  }

  mediaSessionInfoChanged(session_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec,
      null,
      [session_info]);
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

// ParamsSpec for RequestAudioFocus
media_session.mojom.AudioFocusRequestClient_RequestAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusRequestClient.RequestAudioFocus_Params',
      packedSize: 24,
      fields: [
        { name: 'session_info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.AudioFocusTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AbandonAudioFocus
media_session.mojom.AudioFocusRequestClient_AbandonAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusRequestClient.AbandonAudioFocus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MediaSessionInfoChanged
media_session.mojom.AudioFocusRequestClient_MediaSessionInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusRequestClient.MediaSessionInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'session_info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_session.mojom.AudioFocusRequestClientPtr = media_session.mojom.AudioFocusRequestClientRemote;
media_session.mojom.AudioFocusRequestClientRequest = media_session.mojom.AudioFocusRequestClientPendingReceiver;


// Interface: AudioFocusManager
media_session.mojom.AudioFocusManager = {};

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
      [client, session, session_info, type]);
  }

  requestGroupedAudioFocus(request_id, client, session, session_info, type, group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec,
      media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec,
      [request_id, client, session, session_info, type, group_id]);
  }

  getFocusRequests() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec,
      media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec,
      []);
  }

  addObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  setSource(identity, name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_session.mojom.AudioFocusManager_SetSource_ParamsSpec,
      null,
      [identity, name]);
  }

  setEnforcementMode(mode) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec,
      null,
      [mode]);
  }

  addSourceObserver(source_id, observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec,
      null,
      [source_id, observer]);
  }

  getSourceFocusRequests(source_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec,
      media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec,
      [source_id]);
  }

  requestIdReleased(request_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec,
      null,
      [request_id]);
  }

  startDuckingAllAudio(exempted_request_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec,
      null,
      [exempted_request_id]);
  }

  stopDuckingAllAudio() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec,
      null,
      []);
  }

  flushForTesting() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec,
      null,
      []);
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

// ParamsSpec for RequestAudioFocus
media_session.mojom.AudioFocusManager_RequestAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.RequestAudioFocus_Params',
      packedSize: 32,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'session_info', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: media_session.mojom.AudioFocusTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media_session.mojom.AudioFocusManager_RequestAudioFocus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestGroupedAudioFocus
media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.RequestGroupedAudioFocus_Params',
      packedSize: 48,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'session_info', packedOffset: 16, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: media_session.mojom.AudioFocusTypeSpec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

media_session.mojom.AudioFocusManager_RequestGroupedAudioFocus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFocusRequests
media_session.mojom.AudioFocusManager_GetFocusRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.GetFocusRequests_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.AudioFocusManager_GetFocusRequests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.AudioFocusRequestStateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddObserver
media_session.mojom.AudioFocusManager_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSource
media_session.mojom.AudioFocusManager_SetSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.SetSource_Params',
      packedSize: 24,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetEnforcementMode
media_session.mojom.AudioFocusManager_SetEnforcementMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.SetEnforcementMode_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.EnforcementModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddSourceObserver
media_session.mojom.AudioFocusManager_AddSourceObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.AddSourceObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetSourceFocusRequests
media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.GetSourceFocusRequests_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.AudioFocusManager_GetSourceFocusRequests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.AudioFocusRequestStateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestIdReleased
media_session.mojom.AudioFocusManager_RequestIdReleased_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.RequestIdReleased_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDuckingAllAudio
media_session.mojom.AudioFocusManager_StartDuckingAllAudio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.StartDuckingAllAudio_Params',
      packedSize: 16,
      fields: [
        { name: 'exempted_request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopDuckingAllAudio
media_session.mojom.AudioFocusManager_StopDuckingAllAudio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.StopDuckingAllAudio_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for FlushForTesting
media_session.mojom.AudioFocusManager_FlushForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManager.FlushForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media_session.mojom.AudioFocusManagerPtr = media_session.mojom.AudioFocusManagerRemote;
media_session.mojom.AudioFocusManagerRequest = media_session.mojom.AudioFocusManagerPendingReceiver;


// Interface: AudioFocusManagerDebug
media_session.mojom.AudioFocusManagerDebug = {};

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
      [request_id]);
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

// ParamsSpec for GetDebugInfoForRequest
media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusManagerDebug.GetDebugInfoForRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.AudioFocusManagerDebug_GetDebugInfoForRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'debug_info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionDebugInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_session.mojom.AudioFocusManagerDebugPtr = media_session.mojom.AudioFocusManagerDebugRemote;
media_session.mojom.AudioFocusManagerDebugRequest = media_session.mojom.AudioFocusManagerDebugPendingReceiver;

