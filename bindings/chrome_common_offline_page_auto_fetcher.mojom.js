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

chrome.mojom.OfflinePageAutoFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: TrySchedule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TrySchedule (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CancelSchedule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelSchedule (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.OfflinePageAutoFetcher_TrySchedule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.trySchedule');
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
          const params = decoder.decodeStruct(chrome.mojom.OfflinePageAutoFetcher_CancelSchedule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelSchedule');
          const result = this.impl.cancelSchedule();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.OfflinePageAutoFetcherReceiver = chrome.mojom.OfflinePageAutoFetcherReceiver;

chrome.mojom.OfflinePageAutoFetcherPtr = chrome.mojom.OfflinePageAutoFetcherRemote;
chrome.mojom.OfflinePageAutoFetcherRequest = chrome.mojom.OfflinePageAutoFetcherPendingReceiver;

