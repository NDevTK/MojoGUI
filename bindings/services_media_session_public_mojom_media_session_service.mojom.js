// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session_service.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Interface: MediaSessionService
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

};

media_session.mojom.MediaSessionService.getRemote = function() {
  let remote = new media_session.mojom.MediaSessionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSessionService',
    'context');
  return remote.$;
}};

// Legacy compatibility
media_session.mojom.MediaSessionServicePtr = media_session.mojom.MediaSessionServiceRemote;
media_session.mojom.MediaSessionServiceRequest = media_session.mojom.MediaSessionServicePendingReceiver;

