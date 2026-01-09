// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/network_easter_egg.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: NetworkEasterEgg
chrome.mojom.NetworkEasterEggPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.NetworkEasterEgg';
  }

  getHighScore() {
    // Method: GetHighScore
    return new Promise((resolve) => {
      // Call: GetHighScore()
      resolve({});
    });
  }

  updateHighScore(high_score) {
    // Method: UpdateHighScore
    // Call: UpdateHighScore(high_score)
  }

  resetHighScore() {
    // Method: ResetHighScore
    // Call: ResetHighScore()
  }

};

chrome.mojom.NetworkEasterEggRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
