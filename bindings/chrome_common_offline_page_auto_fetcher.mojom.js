// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/offline_page_auto_fetcher.mojom
// Module: chrome.mojom

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
      mojo.internal.StructField('out', 0, 0, chrome.mojom.OfflinePageAutoFetcherScheduleResultSpec.$, null, false, 0, undefined),
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
  trySchedule(user_requested) {
    return this.$.trySchedule(user_requested);
  }
  cancelSchedule() {
    return this.$.cancelSchedule();
  }
};

chrome.mojom.OfflinePageAutoFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OfflinePageAutoFetcher', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  trySchedule(user_requested) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec,
      chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParamsSpec,
      [user_requested],
      false);
  }

  cancelSchedule() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

chrome.mojom.OfflinePageAutoFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OfflinePageAutoFetcher', [
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
             decoder.decodeStructInline(chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec.$.structSpec);
          const result = this.impl.trySchedule(params.user_requested);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec.$.structSpec);
          const result = this.impl.cancelSchedule();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.OfflinePageAutoFetcherReceiver = chrome.mojom.OfflinePageAutoFetcherReceiver;

chrome.mojom.OfflinePageAutoFetcherPtr = chrome.mojom.OfflinePageAutoFetcherRemote;
chrome.mojom.OfflinePageAutoFetcherRequest = chrome.mojom.OfflinePageAutoFetcherPendingReceiver;

