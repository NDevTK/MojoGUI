// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net/net_error_page_support.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: NetErrorPageSupport
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
      chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec.$,
      null,
      []);
  }

  setIsShowingDownloadButtonInErrorPage(showing_download_button) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec.$,
      null,
      [showing_download_button]);
  }

  showPortalSignin() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for DownloadPageLater
chrome.mojom.NetErrorPageSupport_DownloadPageLater_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetErrorPageSupport.DownloadPageLater_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsShowingDownloadButtonInErrorPage
chrome.mojom.NetErrorPageSupport_SetIsShowingDownloadButtonInErrorPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetErrorPageSupport.SetIsShowingDownloadButtonInErrorPage_Params',
      packedSize: 16,
      fields: [
        { name: 'showing_download_button', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowPortalSignin
chrome.mojom.NetErrorPageSupport_ShowPortalSignin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetErrorPageSupport.ShowPortalSignin_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.NetErrorPageSupportPtr = chrome.mojom.NetErrorPageSupportRemote;
chrome.mojom.NetErrorPageSupportRequest = chrome.mojom.NetErrorPageSupportPendingReceiver;

