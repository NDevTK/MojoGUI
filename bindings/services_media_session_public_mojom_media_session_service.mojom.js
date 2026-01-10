// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session_service.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};
var services = services || {};
var services = services || {};

media_session.mojom.MediaSessionService = {};
media_session.mojom.MediaSessionService.$interfaceName = 'media_session.mojom.MediaSessionService';
media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionService_Bind_ParamsSpec = { $: {} };

// Interface: MediaSessionService
mojo.internal.Struct(
    media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec, 'media_session.mojom.MediaSessionService_BindAudioFocusManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec, 'media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerDebugRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec, 'media_session.mojom.MediaSessionService_BindMediaControllerManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionService_Bind_ParamsSpec, 'media_session.mojom.MediaSessionService_Bind_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaSessionServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.MediaSessionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaSessionServiceRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSessionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaSessionServicePendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaSessionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaSessionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAudioFocusManager(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaSessionService_BindAudioFocusManager_ParamsSpec,
      null,
      [receiver]);
  }

  bindAudioFocusManagerDebug(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaSessionService_BindAudioFocusManagerDebug_ParamsSpec,
      null,
      [receiver]);
  }

  bindMediaControllerManager(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaSessionService_BindMediaControllerManager_ParamsSpec,
      null,
      [receiver]);
  }

  bind(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaSessionService_Bind_ParamsSpec,
      null,
      [receiver]);
  }

};

media_session.mojom.MediaSessionService.getRemote = function() {
  let remote = new media_session.mojom.MediaSessionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSessionService',
    'context');
  return remote.$;
};

media_session.mojom.MediaSessionServicePtr = media_session.mojom.MediaSessionServiceRemote;
media_session.mojom.MediaSessionServiceRequest = media_session.mojom.MediaSessionServicePendingReceiver;

