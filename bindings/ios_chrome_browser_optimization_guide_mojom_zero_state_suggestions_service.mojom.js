// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/zero_state_suggestions_service.mojom
// Module: ai.mojom

'use strict';

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
};

ai.mojom.ZeroStateSuggestionsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchZeroStateSuggestions() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

ai.mojom.ZeroStateSuggestionsServiceReceiver = ai.mojom.ZeroStateSuggestionsServiceReceiver;

ai.mojom.ZeroStateSuggestionsServicePtr = ai.mojom.ZeroStateSuggestionsServiceRemote;
ai.mojom.ZeroStateSuggestionsServiceRequest = ai.mojom.ZeroStateSuggestionsServicePendingReceiver;

