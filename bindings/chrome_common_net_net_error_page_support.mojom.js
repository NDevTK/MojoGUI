// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net/net_error_page_support.mojom
// Module: chrome.mojom

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
  downloadPageLater() {
    return this.$.downloadPageLater();
  }
  setIsShowingDownloadButtonInErrorPage(showing_download_button) {
    return this.$.setIsShowingDownloadButtonInErrorPage(showing_download_button);
  }
  showPortalSignin() {
    return this.$.showPortalSignin();
  }
};

chrome.mojom.NetErrorPageSupportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetErrorPageSupport', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  downloadPageLater() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec,
      null,
      [],
      false);
  }

  setIsShowingDownloadButtonInErrorPage(showing_download_button) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec,
      null,
      [showing_download_button],
      false);
  }

  showPortalSignin() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('NetErrorPageSupport', [
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
             decoder.decodeStructInline(chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec.$.structSpec);
          const result = this.impl.downloadPageLater();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec.$.structSpec);
          const result = this.impl.setIsShowingDownloadButtonInErrorPage(params.showing_download_button);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec.$.structSpec);
          const result = this.impl.showPortalSignin();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.NetErrorPageSupportReceiver = chrome.mojom.NetErrorPageSupportReceiver;

chrome.mojom.NetErrorPageSupportPtr = chrome.mojom.NetErrorPageSupportRemote;
chrome.mojom.NetErrorPageSupportRequest = chrome.mojom.NetErrorPageSupportPendingReceiver;

