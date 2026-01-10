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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ApplySpellCheckSuggestion
        try {
             decoder.decodeStruct(blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplySpellCheckSuggestion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ApplyTextSuggestion
        try {
             decoder.decodeStruct(blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyTextSuggestion (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: DeleteActiveSuggestionRange
        try {
             decoder.decodeStruct(blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteActiveSuggestionRange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnNewWordAddedToDictionary
        try {
             decoder.decodeStruct(blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewWordAddedToDictionary (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: OnSuggestionMenuClosed
        try {
             decoder.decodeStruct(blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSuggestionMenuClosed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: SuggestionMenuTimeoutCallback
        try {
             decoder.decodeStruct(blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuggestionMenuTimeoutCallback (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextSuggestionBackend_ApplySpellCheckSuggestion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applySpellCheckSuggestion');
          const result = this.impl.applySpellCheckSuggestion(params.suggestion);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextSuggestionBackend_ApplyTextSuggestion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyTextSuggestion');
          const result = this.impl.applyTextSuggestion(params.marker_tag, params.suggestion_index);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextSuggestionBackend_DeleteActiveSuggestionRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteActiveSuggestionRange');
          const result = this.impl.deleteActiveSuggestionRange();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextSuggestionBackend_OnNewWordAddedToDictionary_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNewWordAddedToDictionary');
          const result = this.impl.onNewWordAddedToDictionary(params.suggestion);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextSuggestionBackend_OnSuggestionMenuClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSuggestionMenuClosed');
          const result = this.impl.onSuggestionMenuClosed();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextSuggestionBackend_SuggestionMenuTimeoutCallback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suggestionMenuTimeoutCallback');
          const result = this.impl.suggestionMenuTimeoutCallback(params.max_number_of_suggestions);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.TextSuggestionBackendReceiver = blink.mojom.TextSuggestionBackendReceiver;

blink.mojom.TextSuggestionBackendPtr = blink.mojom.TextSuggestionBackendRemote;
blink.mojom.TextSuggestionBackendRequest = blink.mojom.TextSuggestionBackendPendingReceiver;

