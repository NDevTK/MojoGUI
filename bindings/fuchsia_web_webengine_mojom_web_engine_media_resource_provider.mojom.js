// Auto-generated MojoJS binding
// Source: chromium_src/fuchsia_web/webengine/mojom/web_engine_media_resource_provider.mojom
// Module: mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojom = mojom || {};

mojom.AudioConsumerRequestSpec = { $: {} };
mojom.WebEngineMediaResourceProvider = {};
mojom.WebEngineMediaResourceProvider.$interfaceName = 'mojom.WebEngineMediaResourceProvider';
mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec = { $: {} };
mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec = { $: {} };
mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec = { $: {} };

// Struct: AudioConsumerRequest
mojo.internal.Struct(
    mojom.AudioConsumerRequestSpec, 'mojom.AudioConsumerRequest', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: WebEngineMediaResourceProvider
mojo.internal.Struct(
    mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec, 'mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec, 'mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec, 'mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_Params', [
      mojo.internal.StructField('request', 0, 0, mojom.AudioConsumerRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.WebEngineMediaResourceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.WebEngineMediaResourceProviderRemote = class {
  static get $interfaceName() {
    return 'mojom.WebEngineMediaResourceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.WebEngineMediaResourceProviderPendingReceiver,
      handle);
    this.$ = new mojom.WebEngineMediaResourceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  shouldUseAudioConsumer() {
    return this.$.shouldUseAudioConsumer();
  }
  createAudioConsumer(request) {
    return this.$.createAudioConsumer(request);
  }
};

mojom.WebEngineMediaResourceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebEngineMediaResourceProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  shouldUseAudioConsumer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec,
      mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec,
      [],
      false);
  }

  createAudioConsumer(request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec,
      null,
      [request],
      false);
  }

};

mojom.WebEngineMediaResourceProvider.getRemote = function() {
  let remote = new mojom.WebEngineMediaResourceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.WebEngineMediaResourceProvider',
    'context');
  return remote.$;
};

mojom.WebEngineMediaResourceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebEngineMediaResourceProvider', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec.$.structSpec);
          const result = this.impl.shouldUseAudioConsumer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec.$.structSpec);
          const result = this.impl.createAudioConsumer(params.request);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.WebEngineMediaResourceProviderReceiver = mojom.WebEngineMediaResourceProviderReceiver;

mojom.WebEngineMediaResourceProviderPtr = mojom.WebEngineMediaResourceProviderRemote;
mojom.WebEngineMediaResourceProviderRequest = mojom.WebEngineMediaResourceProviderPendingReceiver;

