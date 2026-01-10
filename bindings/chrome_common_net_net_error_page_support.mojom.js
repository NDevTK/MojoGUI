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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec.$.decode(message.payload);
          const result = this.impl.downloadPageLater();
          break;
        }
        case 1: {
          const params = chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsShowingDownloadButtonInErrorPage(params.showing_download_button);
          break;
        }
        case 2: {
          const params = chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showPortalSignin();
          break;
        }
      }
    }});
  }
};

chrome.mojom.NetErrorPageSupportReceiver = chrome.mojom.NetErrorPageSupportReceiver;

chrome.mojom.NetErrorPageSupportPtr = chrome.mojom.NetErrorPageSupportRemote;
chrome.mojom.NetErrorPageSupportRequest = chrome.mojom.NetErrorPageSupportPendingReceiver;

