// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_messages.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.TextSuggestionBackend = {};
blink.mojom.TextSuggestionBackend.$interfaceName = 'blink.mojom.TextSuggestionBackend';
blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec = { $: {} };

// Interface: TextSuggestionBackend
mojo.internal.Struct(
    blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec, 'blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_Params', [
      mojo.internal.StructField('suggestion', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec, 'blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_Params', [
      mojo.internal.StructField('marker_tag', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('suggestion_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec, 'blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec, 'blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_Params', [
      mojo.internal.StructField('suggestion', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec, 'blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec, 'blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_Params', [
      mojo.internal.StructField('max_number_of_suggestions', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec,
      null,
      [suggestion],
      false);
  }

  applyTextSuggestion(marker_tag, suggestion_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec,
      null,
      [marker_tag, suggestion_index],
      false);
  }

  deleteActiveSuggestionRange() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec,
      null,
      [],
      false);
  }

  onNewWordAddedToDictionary(suggestion) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec,
      null,
      [suggestion],
      false);
  }

  onSuggestionMenuClosed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec,
      null,
      [],
      false);
  }

  suggestionMenuTimeoutCallback(max_number_of_suggestions) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec,
      null,
      [max_number_of_suggestions],
      false);
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
};

blink.mojom.TextSuggestionBackendReceiver = class {
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
          const params = blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.applySpellCheckSuggestion(params.suggestion);
          break;
        }
        case 1: {
          const params = blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.applyTextSuggestion(params.marker_tag, params.suggestion_index);
          break;
        }
        case 2: {
          const params = blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteActiveSuggestionRange();
          break;
        }
        case 3: {
          const params = blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewWordAddedToDictionary(params.suggestion);
          break;
        }
        case 4: {
          const params = blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSuggestionMenuClosed();
          break;
        }
        case 5: {
          const params = blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suggestionMenuTimeoutCallback(params.max_number_of_suggestions);
          break;
        }
      }
    });
  }
};

blink.mojom.TextSuggestionBackendReceiver = blink.mojom.TextSuggestionBackendReceiver;

blink.mojom.TextSuggestionBackendPtr = blink.mojom.TextSuggestionBackendRemote;
blink.mojom.TextSuggestionBackendRequest = blink.mojom.TextSuggestionBackendPendingReceiver;

