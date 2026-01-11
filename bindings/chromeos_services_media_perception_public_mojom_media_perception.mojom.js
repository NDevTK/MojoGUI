// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/media_perception/public/mojom/media_perception.mojom
// Module: chromeos.media_perception.mojom

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
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPerception', [
    ]);
  }

};

chromeos.media_perception.mojom.MediaPerception.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.media_perception.mojom.MediaPerception',
    'context');
  return remote.$;
};

chromeos.media_perception.mojom.MediaPerceptionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPerception', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

chromeos.media_perception.mojom.MediaPerceptionReceiver = chromeos.media_perception.mojom.MediaPerceptionReceiver;

chromeos.media_perception.mojom.MediaPerceptionPtr = chromeos.media_perception.mojom.MediaPerceptionRemote;
chromeos.media_perception.mojom.MediaPerceptionRequest = chromeos.media_perception.mojom.MediaPerceptionPendingReceiver;

