// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/zero_state_suggestions_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Union: ZeroStateSuggestionsResponseResult
ai.mojom.mojom.ZeroStateSuggestionsResponseResultSpec = { $: mojo.internal.Union(
    'ai.mojom.ZeroStateSuggestionsResponseResult', {
      'response': {
        'ordinal': 0,
        'type': mojo_base.mojom.ProtoWrapperSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Interface: ZeroStateSuggestionsService
ai.mojom.mojom.ZeroStateSuggestionsService = {};

ai.mojom.mojom.ZeroStateSuggestionsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ai.mojom.mojom.ZeroStateSuggestionsServiceRemote = class {
  static get $interfaceName() {
    return 'ai.mojom.ZeroStateSuggestionsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ai.mojom.mojom.ZeroStateSuggestionsServicePendingReceiver,
      handle);
    this.$ = new ai.mojom.mojom.ZeroStateSuggestionsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ai.mojom.mojom.ZeroStateSuggestionsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchZeroStateSuggestions() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ai.mojom.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec,
      ai.mojom.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec,
      []);
  }

};

ai.mojom.mojom.ZeroStateSuggestionsService.getRemote = function() {
  let remote = new ai.mojom.mojom.ZeroStateSuggestionsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ai.mojom.ZeroStateSuggestionsService',
    'context');
  return remote.$;
};

// ParamsSpec for FetchZeroStateSuggestions
ai.mojom.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.ZeroStateSuggestionsService.FetchZeroStateSuggestions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ai.mojom.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.ZeroStateSuggestionsService.FetchZeroStateSuggestions_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ai.mojom.ZeroStateSuggestionsResponseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ai.mojom.mojom.ZeroStateSuggestionsServicePtr = ai.mojom.mojom.ZeroStateSuggestionsServiceRemote;
ai.mojom.mojom.ZeroStateSuggestionsServiceRequest = ai.mojom.mojom.ZeroStateSuggestionsServicePendingReceiver;

