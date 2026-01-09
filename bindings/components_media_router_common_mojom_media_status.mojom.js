// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_status.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Enum: PlayState
media_router.mojom.PlayState = {
  PLAYING: 0,
  PAUSED: 1,
  BUFFERING: 2,
};

// Interface: MediaStatusObserver
media_router.mojom.MediaStatusObserver = {};

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
};

media_router.mojom.MediaStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMediaStatusUpdated(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_ParamsSpec,
      null,
      [status]);
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

// ParamsSpec for OnMediaStatusUpdated
media_router.mojom.MediaStatusObserver_OnMediaStatusUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaStatusObserver.OnMediaStatusUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media_router.mojom.MediaStatusObserverPtr = media_router.mojom.MediaStatusObserverRemote;
media_router.mojom.MediaStatusObserverRequest = media_router.mojom.MediaStatusObserverPendingReceiver;

