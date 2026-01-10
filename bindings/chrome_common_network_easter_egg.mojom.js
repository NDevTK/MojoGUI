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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec.$.decode(message.payload);
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
          const params = chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateHighScore(params.high_score);
          break;
        }
        case 2: {
          const params = chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetHighScore();
          break;
        }
      }
    }});
  }
};

chrome.mojom.NetworkEasterEggReceiver = chrome.mojom.NetworkEasterEggReceiver;

chrome.mojom.NetworkEasterEggPtr = chrome.mojom.NetworkEasterEggRemote;
chrome.mojom.NetworkEasterEggRequest = chrome.mojom.NetworkEasterEggPendingReceiver;

