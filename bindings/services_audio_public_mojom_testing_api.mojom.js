// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/testing_api.mojom
// Module: audio.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};

audio.mojom.TestingApi = {};
audio.mojom.TestingApi.$interfaceName = 'audio.mojom.TestingApi';
audio.mojom.TestingApi_Crash_ParamsSpec = { $: {} };

// Interface: TestingApi
mojo.internal.Struct(
    audio.mojom.TestingApi_Crash_ParamsSpec, 'audio.mojom.TestingApi_Crash_Params', [
    ],
    [[0, 8]]);

audio.mojom.TestingApiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.TestingApiRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.TestingApi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.TestingApiPendingReceiver,
      handle);
    this.$ = new audio.mojom.TestingApiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  crash() {
    return this.$.crash();
  }
};

audio.mojom.TestingApiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestingApi', [
      { explicit: null },
    ]);
  }

  crash() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      audio.mojom.TestingApi_Crash_ParamsSpec,
      null,
      [],
      false);
  }

};

audio.mojom.TestingApi.getRemote = function() {
  let remote = new audio.mojom.TestingApiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.TestingApi',
    'context');
  return remote.$;
};

audio.mojom.TestingApiReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestingApi', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.TestingApi_Crash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.TestingApi_Crash_ParamsSpec.$.structSpec);
          const result = this.impl.crash();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

audio.mojom.TestingApiReceiver = audio.mojom.TestingApiReceiver;

audio.mojom.TestingApiPtr = audio.mojom.TestingApiRemote;
audio.mojom.TestingApiRequest = audio.mojom.TestingApiPendingReceiver;

