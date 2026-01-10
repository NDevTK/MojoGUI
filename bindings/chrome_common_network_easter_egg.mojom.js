// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_easter_egg.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: NetworkEasterEgg
chrome.mojom.NetworkEasterEgg = {};

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
      []);
  }

  updateHighScore(high_score) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec,
      null,
      [high_score]);
  }

  resetHighScore() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec,
      null,
      []);
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

// ParamsSpec for GetHighScore
chrome.mojom.NetworkEasterEgg_GetHighScore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkEasterEgg.GetHighScore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chrome.mojom.NetworkEasterEgg_GetHighScore_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'high_score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateHighScore
chrome.mojom.NetworkEasterEgg_UpdateHighScore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkEasterEgg.UpdateHighScore_Params',
      packedSize: 16,
      fields: [
        { name: 'high_score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResetHighScore
chrome.mojom.NetworkEasterEgg_ResetHighScore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetworkEasterEgg.ResetHighScore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chrome.mojom.NetworkEasterEggPtr = chrome.mojom.NetworkEasterEggRemote;
chrome.mojom.NetworkEasterEggRequest = chrome.mojom.NetworkEasterEggPendingReceiver;

