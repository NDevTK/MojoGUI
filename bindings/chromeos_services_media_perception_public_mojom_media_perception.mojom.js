// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/media_perception/public/mojom/media_perception.mojom
// Module: chromeos.media_perception.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.media_perception = chromeos.media_perception || {};
chromeos.media_perception.mojom = chromeos.media_perception.mojom || {};

chromeos.media_perception.mojom.MediaPerception = {};
chromeos.media_perception.mojom.MediaPerception.$interfaceName = 'chromeos.media_perception.mojom.MediaPerception';

// Interface: MediaPerception
chromeos.media_perception.mojom.MediaPerceptionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.media_perception.mojom.MediaPerceptionRemote = class {
  static get $interfaceName() {
    return 'chromeos.media_perception.mojom.MediaPerception';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.media_perception.mojom.MediaPerceptionPendingReceiver,
      handle);
    this.$ = new chromeos.media_perception.mojom.MediaPerceptionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.media_perception.mojom.MediaPerceptionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.media_perception.mojom.MediaPerception.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chromeos.media_perception.mojom.MediaPerception',
    'context');
  return remote.$;
};

chromeos.media_perception.mojom.MediaPerceptionPtr = chromeos.media_perception.mojom.MediaPerceptionRemote;
chromeos.media_perception.mojom.MediaPerceptionRequest = chromeos.media_perception.mojom.MediaPerceptionPendingReceiver;

