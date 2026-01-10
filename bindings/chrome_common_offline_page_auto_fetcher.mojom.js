// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/offline_page_auto_fetcher.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.OfflinePageAutoFetcherScheduleResultSpec = { $: mojo.internal.Enum() };
chrome.mojom.OfflinePageAutoFetcher = {};
chrome.mojom.OfflinePageAutoFetcher.$interfaceName = 'chrome.mojom.OfflinePageAutoFetcher';
chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec = { $: {} };
chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParamsSpec = { $: {} };
chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec = { $: {} };

// Enum: OfflinePageAutoFetcherScheduleResult
chrome.mojom.OfflinePageAutoFetcherScheduleResult = {
  kNotEnoughQuota: 0,
  kOtherError: 1,
  kAlreadyScheduled: 2,
  kScheduled: 3,
};

// Interface: OfflinePageAutoFetcher
mojo.internal.Struct(
    chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec, 'chrome.mojom.OfflinePageAutoFetcher_TrySchedule_Params', [
      mojo.internal.StructField('user_requested', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParamsSpec, 'chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, chrome.mojom.OfflinePageAutoFetcherScheduleResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec, 'chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_Params', [
    ],
    [[0, 8]]);

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
      chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec,
      chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParamsSpec,
      [user_requested],
      false);
  }

  cancelSchedule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec,
      null,
      [],
      false);
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
};

chrome.mojom.OfflinePageAutoFetcherPtr = chrome.mojom.OfflinePageAutoFetcherRemote;
chrome.mojom.OfflinePageAutoFetcherRequest = chrome.mojom.OfflinePageAutoFetcherPendingReceiver;

