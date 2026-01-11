// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/mojom/updater_service_internal.mojom
// Module: updater.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};

updater.mojom.UpdateServiceInternal = {};
updater.mojom.UpdateServiceInternal.$interfaceName = 'updater.mojom.UpdateServiceInternal';
updater.mojom.UpdateServiceInternal_Run_ParamsSpec = { $: {} };
updater.mojom.UpdateServiceInternal_Run_ResponseParamsSpec = { $: {} };
updater.mojom.UpdateServiceInternal_Hello_ParamsSpec = { $: {} };
updater.mojom.UpdateServiceInternal_Hello_ResponseParamsSpec = { $: {} };

// Interface: UpdateServiceInternal
mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Run_ParamsSpec, 'updater.mojom.UpdateServiceInternal_Run_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Run_ResponseParamsSpec, 'updater.mojom.UpdateServiceInternal_Run_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Hello_ParamsSpec, 'updater.mojom.UpdateServiceInternal_Hello_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater.mojom.UpdateServiceInternal_Hello_ResponseParamsSpec, 'updater.mojom.UpdateServiceInternal_Hello_ResponseParams', [
    ],
    [[0, 8]]);

updater.mojom.UpdateServiceInternalPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.UpdateServiceInternalRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.UpdateServiceInternal';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.UpdateServiceInternalPendingReceiver,
      handle);
    this.$ = new updater.mojom.UpdateServiceInternalRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  run() {
    return this.$.run();
  }
  hello() {
    return this.$.hello();
  }
};

updater.mojom.UpdateServiceInternalRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UpdateServiceInternal', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  run() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater.mojom.UpdateServiceInternal_Run_ParamsSpec,
      updater.mojom.UpdateServiceInternal_Run_ResponseParamsSpec,
      [],
      false);
  }

  hello() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      updater.mojom.UpdateServiceInternal_Hello_ParamsSpec,
      updater.mojom.UpdateServiceInternal_Hello_ResponseParamsSpec,
      [],
      false);
  }

};

updater.mojom.UpdateServiceInternal.getRemote = function() {
  let remote = new updater.mojom.UpdateServiceInternalRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.UpdateServiceInternal',
    'context');
  return remote.$;
};

updater.mojom.UpdateServiceInternalReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UpdateServiceInternal', [
      { explicit: null },
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
             decoder.decodeStructInline(updater.mojom.UpdateServiceInternal_Run_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.UpdateServiceInternal_Hello_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.UpdateServiceInternal_Run_ParamsSpec.$.structSpec);
          const result = this.impl.run();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateServiceInternal_Run_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.UpdateServiceInternal_Hello_ParamsSpec.$.structSpec);
          const result = this.impl.hello();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.UpdateServiceInternal_Hello_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

updater.mojom.UpdateServiceInternalReceiver = updater.mojom.UpdateServiceInternalReceiver;

updater.mojom.UpdateServiceInternalPtr = updater.mojom.UpdateServiceInternalRemote;
updater.mojom.UpdateServiceInternalRequest = updater.mojom.UpdateServiceInternalPendingReceiver;

