// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_messages.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: TextSuggestionBackend
blink.mojom.TextSuggestionBackendPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TextSuggestionBackendRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextSuggestionBackend';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TextSuggestionBackendPendingReceiver,
      handle);
    this.$ = new blink.mojom.TextSuggestionBackendRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TextSuggestionBackendRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  applySpellCheckSuggestion(suggestion) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec.$,
      null,
      [suggestion]);
  }

  applyTextSuggestion(marker_tag, suggestion_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec.$,
      null,
      [marker_tag, suggestion_index]);
  }

  deleteActiveSuggestionRange() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec.$,
      null,
      []);
  }

  onNewWordAddedToDictionary(suggestion) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec.$,
      null,
      [suggestion]);
  }

  onSuggestionMenuClosed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec.$,
      null,
      []);
  }

  suggestionMenuTimeoutCallback(max_number_of_suggestions) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec.$,
      null,
      [max_number_of_suggestions]);
  }

};

blink.mojom.TextSuggestionBackend.getRemote = function() {
  let remote = new blink.mojom.TextSuggestionBackendRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextSuggestionBackend',
    'context');
  return remote.$;
}};

// ParamsSpec for ApplySpellCheckSuggestion
blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionBackend.ApplySpellCheckSuggestion_Params',
      packedSize: 16,
      fields: [
        { name: 'suggestion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ApplyTextSuggestion
blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionBackend.ApplyTextSuggestion_Params',
      packedSize: 24,
      fields: [
        { name: 'marker_tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'suggestion_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DeleteActiveSuggestionRange
blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionBackend.DeleteActiveSuggestionRange_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnNewWordAddedToDictionary
blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionBackend.OnNewWordAddedToDictionary_Params',
      packedSize: 16,
      fields: [
        { name: 'suggestion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnSuggestionMenuClosed
blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionBackend.OnSuggestionMenuClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SuggestionMenuTimeoutCallback
blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionBackend.SuggestionMenuTimeoutCallback_Params',
      packedSize: 16,
      fields: [
        { name: 'max_number_of_suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.TextSuggestionBackendPtr = blink.mojom.TextSuggestionBackendRemote;
blink.mojom.TextSuggestionBackendRequest = blink.mojom.TextSuggestionBackendPendingReceiver;

