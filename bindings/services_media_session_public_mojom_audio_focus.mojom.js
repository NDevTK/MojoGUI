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

// Enum: AudioFocusType
media_session.mojom.AudioFocusType = {
  kGain: 0,
  kGainTransientMayDuck: 1,
  kGainTransient: 2,
  kAmbient: 3,
};

// Struct: AudioFocusRequestState
media_session.mojom.AudioFocusRequestStateSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.AudioFocusRequestState',
      packedSize: 24,
      fields: [
        { name: 'session_info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: false },
        { name: 'audio_focus_type', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.AudioFocusTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
media_session.mojom.AudioFocusManagerDebugPtr = media_session.mojom.AudioFocusManagerDebugRemote;
media_session.mojom.AudioFocusManagerDebugRequest = media_session.mojom.AudioFocusManagerDebugPendingReceiver;

