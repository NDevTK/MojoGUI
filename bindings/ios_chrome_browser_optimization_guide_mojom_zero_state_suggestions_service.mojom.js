// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/zero_state_suggestions_service.mojom
// Module: ai.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};
var mojo_base = mojo_base || {};

ai.mojom.ZeroStateSuggestionsResponseResultSpec = { $: {} };
ai.mojom.ZeroStateSuggestionsService = {};
ai.mojom.ZeroStateSuggestionsService.$interfaceName = 'ai.mojom.ZeroStateSuggestionsService';
ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec = { $: {} };
ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec = { $: {} };

// Union: ZeroStateSuggestionsResponseResult
mojo.internal.Union(
    ai.mojom.ZeroStateSuggestionsResponseResultSpec, 'ai.mojom.ZeroStateSuggestionsResponseResult', {
      'response': {
        'ordinal': 0,
        'type': mojo_base.mojom.ProtoWrapperSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Interface: ZeroStateSuggestionsService
mojo.internal.Struct(
    ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec, 'ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec, 'ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ai.mojom.ZeroStateSuggestionsResponseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ai.mojom.ZeroStateSuggestionsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.ZeroStateSuggestionsServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.ZeroStateSuggestionsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.ZeroStateSuggestionsServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.ZeroStateSuggestionsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  fetchZeroStateSuggestions() {
    return this.$.fetchZeroStateSuggestions();
  }
};

ai.mojom.ZeroStateSuggestionsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ZeroStateSuggestionsService', [
      { explicit: null },
    ]);
  }

  fetchZeroStateSuggestions() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec,
      ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec,
      [],
      false);
  }

};

ai.mojom.ZeroStateSuggestionsService.getRemote = function() {
  let remote = new ai.mojom.ZeroStateSuggestionsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.ZeroStateSuggestionsService',
    'context');
  return remote.$;
};

ai.mojom.ZeroStateSuggestionsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ZeroStateSuggestionsService', [
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
             decoder.decodeStructInline(ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec.$.structSpec);
          const result = this.impl.fetchZeroStateSuggestions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ai.mojom.ZeroStateSuggestionsServiceReceiver = ai.mojom.ZeroStateSuggestionsServiceReceiver;

ai.mojom.ZeroStateSuggestionsServicePtr = ai.mojom.ZeroStateSuggestionsServiceRemote;
ai.mojom.ZeroStateSuggestionsServiceRequest = ai.mojom.ZeroStateSuggestionsServicePendingReceiver;

