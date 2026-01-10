// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/media_session.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var media_session = media_session || {};

arc.mojom.MediaSessionInstance = {};
arc.mojom.MediaSessionInstance.$interfaceName = 'arc.mojom.MediaSessionInstance';
arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec = { $: {} };
arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec = { $: {} };

// Interface: MediaSessionInstance
mojo.internal.Struct(
    arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec, 'arc.mojom.MediaSessionInstance_EnableAudioFocus_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceProxy(media_session.mojom.AudioFocusManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec, 'arc.mojom.MediaSessionInstance_DisableAudioFocus_Params', [
    ],
    [[0, 8]]);

arc.mojom.MediaSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MediaSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MediaSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MediaSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MediaSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MediaSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableAudioFocus(service) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec,
      null,
      [service],
      false);
  }

  disableAudioFocus() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.MediaSessionInstance.getRemote = function() {
  let remote = new arc.mojom.MediaSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MediaSessionInstance',
    'context');
  return remote.$;
};

arc.mojom.MediaSessionInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.MediaSessionInstance_EnableAudioFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableAudioFocus(params.service);
          break;
        }
        case 2: {
          const params = arc.mojom.MediaSessionInstance_DisableAudioFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disableAudioFocus();
          break;
        }
      }
    }});
  }
};

arc.mojom.MediaSessionInstanceReceiver = arc.mojom.MediaSessionInstanceReceiver;

arc.mojom.MediaSessionInstancePtr = arc.mojom.MediaSessionInstanceRemote;
arc.mojom.MediaSessionInstanceRequest = arc.mojom.MediaSessionInstancePendingReceiver;

