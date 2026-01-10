// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net/net_error_page_support.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.NetErrorPageSupport = {};
chrome.mojom.NetErrorPageSupport.$interfaceName = 'chrome.mojom.NetErrorPageSupport';
chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec = { $: {} };
chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec = { $: {} };
chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec = { $: {} };

// Interface: NetErrorPageSupport
mojo.internal.Struct(
    chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec, 'chrome.mojom.NetErrorPageSupport_DownloadPageLater_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec, 'chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_Params', [
      mojo.internal.StructField('showing_download_button', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec, 'chrome.mojom.NetErrorPageSupport_ShowPortalSignin_Params', [
    ],
    [[0, 8]]);

chrome.mojom.NetErrorPageSupportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.NetErrorPageSupportRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.NetErrorPageSupport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.NetErrorPageSupportPendingReceiver,
      handle);
    this.$ = new chrome.mojom.NetErrorPageSupportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.NetErrorPageSupportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  downloadPageLater() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec,
      null,
      [],
      false);
  }

  setIsShowingDownloadButtonInErrorPage(showing_download_button) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec,
      null,
      [showing_download_button],
      false);
  }

  showPortalSignin() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec,
      null,
      [],
      false);
  }

};

chrome.mojom.NetErrorPageSupport.getRemote = function() {
  let remote = new chrome.mojom.NetErrorPageSupportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.NetErrorPageSupport',
    'context');
  return remote.$;
};

chrome.mojom.NetErrorPageSupportReceiver = class {
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
        
        // Try Method 0: DownloadPageLater
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadPageLater (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetIsShowingDownloadButtonInErrorPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsShowingDownloadButtonInErrorPage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowPortalSignin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPortalSignin (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.downloadPageLater');
          const result = this.impl.downloadPageLater();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsShowingDownloadButtonInErrorPage');
          const result = this.impl.setIsShowingDownloadButtonInErrorPage(params.showing_download_button);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showPortalSignin');
          const result = this.impl.showPortalSignin();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.NetErrorPageSupportReceiver = chrome.mojom.NetErrorPageSupportReceiver;

chrome.mojom.NetErrorPageSupportPtr = chrome.mojom.NetErrorPageSupportRemote;
chrome.mojom.NetErrorPageSupportRequest = chrome.mojom.NetErrorPageSupportPendingReceiver;

