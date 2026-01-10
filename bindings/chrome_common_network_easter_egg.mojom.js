// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_easter_egg.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.NetworkEasterEgg = {};
chrome.mojom.NetworkEasterEgg.$interfaceName = 'chrome.mojom.NetworkEasterEgg';
chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec = { $: {} };
chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParamsSpec = { $: {} };
chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec = { $: {} };
chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec = { $: {} };

// Interface: NetworkEasterEgg
mojo.internal.Struct(
    chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec, 'chrome.mojom.NetworkEasterEgg_GetHighScore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParamsSpec, 'chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParams', [
      mojo.internal.StructField('high_score', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec, 'chrome.mojom.NetworkEasterEgg_UpdateHighScore_Params', [
      mojo.internal.StructField('high_score', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec, 'chrome.mojom.NetworkEasterEgg_ResetHighScore_Params', [
    ],
    [[0, 8]]);

chrome.mojom.NetworkEasterEggPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.NetworkEasterEggRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.NetworkEasterEgg';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.NetworkEasterEggPendingReceiver,
      handle);
    this.$ = new chrome.mojom.NetworkEasterEggRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.NetworkEasterEggRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getHighScore() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec,
      chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParamsSpec,
      [],
      false);
  }

  updateHighScore(high_score) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec,
      null,
      [high_score],
      false);
  }

  resetHighScore() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec,
      null,
      [],
      false);
  }

};

chrome.mojom.NetworkEasterEgg.getRemote = function() {
  let remote = new chrome.mojom.NetworkEasterEggRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.NetworkEasterEgg',
    'context');
  return remote.$;
};

chrome.mojom.NetworkEasterEggReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: GetHighScore
        try {
             decoder.decodeStruct(chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHighScore (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: UpdateHighScore
        try {
             decoder.decodeStruct(chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateHighScore (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ResetHighScore
        try {
             decoder.decodeStruct(chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetHighScore (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHighScore');
          const result = this.impl.getHighScore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateHighScore');
          const result = this.impl.updateHighScore(params.high_score);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetHighScore');
          const result = this.impl.resetHighScore();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.NetworkEasterEggReceiver = chrome.mojom.NetworkEasterEggReceiver;

chrome.mojom.NetworkEasterEggPtr = chrome.mojom.NetworkEasterEggRemote;
chrome.mojom.NetworkEasterEggRequest = chrome.mojom.NetworkEasterEggPendingReceiver;

