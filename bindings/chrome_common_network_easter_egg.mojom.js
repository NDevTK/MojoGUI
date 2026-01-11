// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_easter_egg.mojom
// Module: chrome.mojom

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
  getHighScore() {
    return this.$.getHighScore();
  }
  updateHighScore(high_score) {
    return this.$.updateHighScore(high_score);
  }
  resetHighScore() {
    return this.$.resetHighScore();
  }
};

chrome.mojom.NetworkEasterEggRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkEasterEgg', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getHighScore() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec,
      chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParamsSpec,
      [],
      false);
  }

  updateHighScore(high_score) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec,
      null,
      [high_score],
      false);
  }

  resetHighScore() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('NetworkEasterEgg', [
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
             decoder.decodeStructInline(chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec.$.structSpec);
          const result = this.impl.getHighScore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec.$.structSpec);
          const result = this.impl.updateHighScore(params.high_score);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec.$.structSpec);
          const result = this.impl.resetHighScore();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.NetworkEasterEggReceiver = chrome.mojom.NetworkEasterEggReceiver;

chrome.mojom.NetworkEasterEggPtr = chrome.mojom.NetworkEasterEggRemote;
chrome.mojom.NetworkEasterEggRequest = chrome.mojom.NetworkEasterEggPendingReceiver;

