// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_messages.mojom
// Module: blink.mojom

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
  applySpellCheckSuggestion(suggestion) {
    return this.$.applySpellCheckSuggestion(suggestion);
  }
  applyTextSuggestion(marker_tag, suggestion_index) {
    return this.$.applyTextSuggestion(marker_tag, suggestion_index);
  }
  deleteActiveSuggestionRange() {
    return this.$.deleteActiveSuggestionRange();
  }
  onNewWordAddedToDictionary(suggestion) {
    return this.$.onNewWordAddedToDictionary(suggestion);
  }
  onSuggestionMenuClosed() {
    return this.$.onSuggestionMenuClosed();
  }
  suggestionMenuTimeoutCallback(max_number_of_suggestions) {
    return this.$.suggestionMenuTimeoutCallback(max_number_of_suggestions);
  }
};

blink.mojom.TextSuggestionBackendRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextSuggestionBackend', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  applySpellCheckSuggestion(suggestion) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec,
      null,
      [suggestion],
      false);
  }

  applyTextSuggestion(marker_tag, suggestion_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec,
      null,
      [marker_tag, suggestion_index],
      false);
  }

  deleteActiveSuggestionRange() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec,
      null,
      [],
      false);
  }

  onNewWordAddedToDictionary(suggestion) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec,
      null,
      [suggestion],
      false);
  }

  onSuggestionMenuClosed() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec,
      null,
      [],
      false);
  }

  suggestionMenuTimeoutCallback(max_number_of_suggestions) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextSuggestionBackend', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec.$.structSpec);
          const result = this.impl.applySpellCheckSuggestion(params.suggestion);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec.$.structSpec);
          const result = this.impl.applyTextSuggestion(params.marker_tag, params.suggestion_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec.$.structSpec);
          const result = this.impl.deleteActiveSuggestionRange();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec.$.structSpec);
          const result = this.impl.onNewWordAddedToDictionary(params.suggestion);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onSuggestionMenuClosed();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec.$.structSpec);
          const result = this.impl.suggestionMenuTimeoutCallback(params.max_number_of_suggestions);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.TextSuggestionBackendReceiver = blink.mojom.TextSuggestionBackendReceiver;

blink.mojom.TextSuggestionBackendPtr = blink.mojom.TextSuggestionBackendRemote;
blink.mojom.TextSuggestionBackendRequest = blink.mojom.TextSuggestionBackendPendingReceiver;

