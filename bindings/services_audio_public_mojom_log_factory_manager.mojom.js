// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/log_factory_manager.mojom
// Module: audio.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var media = media || {};
var sandbox = sandbox || {};

audio.mojom.LogFactoryManager = {};
audio.mojom.LogFactoryManager.$interfaceName = 'audio.mojom.LogFactoryManager';
audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec = { $: {} };

// Interface: LogFactoryManager
mojo.internal.Struct(
    audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec, 'audio.mojom.LogFactoryManager_SetLogFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

audio.mojom.LogFactoryManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.LogFactoryManagerRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.LogFactoryManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.LogFactoryManagerPendingReceiver,
      handle);
    this.$ = new audio.mojom.LogFactoryManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setLogFactory(factory) {
    return this.$.setLogFactory(factory);
  }
};

audio.mojom.LogFactoryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LogFactoryManager', [
      { explicit: null },
    ]);
  }

  setLogFactory(factory) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec,
      null,
      [factory],
      false);
  }

};

audio.mojom.LogFactoryManager.getRemote = function() {
  let remote = new audio.mojom.LogFactoryManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.LogFactoryManager',
    'context');
  return remote.$;
};

audio.mojom.LogFactoryManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LogFactoryManager', [
      { explicit: null },
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec.$.structSpec);
          const result = this.impl.setLogFactory(params.factory);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

audio.mojom.LogFactoryManagerReceiver = audio.mojom.LogFactoryManagerReceiver;

audio.mojom.LogFactoryManagerPtr = audio.mojom.LogFactoryManagerRemote;
audio.mojom.LogFactoryManagerRequest = audio.mojom.LogFactoryManagerPendingReceiver;

