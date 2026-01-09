// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/offline_page_auto_fetcher.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: OfflinePageAutoFetcherScheduleResult
chrome.mojom.OfflinePageAutoFetcherScheduleResult = {
  kNotEnoughQuota: 0,
  kOtherError: 1,
  kAlreadyScheduled: 2,
  kScheduled: 3,
};

// Interface: OfflinePageAutoFetcher
chrome.mojom.OfflinePageAutoFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.OfflinePageAutoFetcherRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.OfflinePageAutoFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.OfflinePageAutoFetcherPendingReceiver,
      handle);
    this.$ = new chrome.mojom.OfflinePageAutoFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.OfflinePageAutoFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  trySchedule(user_requested) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec.$,
      chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParamsSpec.$,
      [user_requested]);
  }

  cancelSchedule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec.$,
      null,
      []);
  }

};

chrome.mojom.OfflinePageAutoFetcher.getRemote = function() {
  let remote = new chrome.mojom.OfflinePageAutoFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.OfflinePageAutoFetcher',
    'context');
  return remote.$;
}};

// ParamsSpec for TrySchedule
chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.OfflinePageAutoFetcher.TrySchedule_Params',
      packedSize: 16,
      fields: [
        { name: 'user_requested', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.OfflinePageAutoFetcher.TrySchedule_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CancelSchedule
chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.OfflinePageAutoFetcher.CancelSchedule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.OfflinePageAutoFetcherPtr = chrome.mojom.OfflinePageAutoFetcherRemote;
chrome.mojom.OfflinePageAutoFetcherRequest = chrome.mojom.OfflinePageAutoFetcherPendingReceiver;

