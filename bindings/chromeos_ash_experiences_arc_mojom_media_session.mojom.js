// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/media_session.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: MediaSessionInstance
arc.mojom.mojom.MediaSessionInstance = {};

arc.mojom.mojom.MediaSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.MediaSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MediaSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.MediaSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.MediaSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.MediaSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableAudioFocus(service) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec,
      null,
      [service]);
  }

  disableAudioFocus() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.MediaSessionInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.MediaSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MediaSessionInstance',
    'context');
  return remote.$;
};

// ParamsSpec for EnableAudioFocus
arc.mojom.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MediaSessionInstance.EnableAudioFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_session.mojom.AudioFocusManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableAudioFocus
arc.mojom.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MediaSessionInstance.DisableAudioFocus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.MediaSessionInstancePtr = arc.mojom.mojom.MediaSessionInstanceRemote;
arc.mojom.mojom.MediaSessionInstanceRequest = arc.mojom.mojom.MediaSessionInstancePendingReceiver;

