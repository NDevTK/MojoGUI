// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/zero_state_suggestions_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: ZeroStateSuggestionsService
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
      ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec.$,
      ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for FetchZeroStateSuggestions
ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.ZeroStateSuggestionsService.FetchZeroStateSuggestions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ai.mojom.ZeroStateSuggestionsService_FetchZeroStateSuggestions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ai.mojom.ZeroStateSuggestionsService.FetchZeroStateSuggestions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ai.mojom.ZeroStateSuggestionsServicePtr = ai.mojom.ZeroStateSuggestionsServiceRemote;
ai.mojom.ZeroStateSuggestionsServiceRequest = ai.mojom.ZeroStateSuggestionsServicePendingReceiver;

