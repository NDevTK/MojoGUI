// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/google_accounts_private_api_extension.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: GoogleAccountsPrivateApiExtension
chrome.mojom.GoogleAccountsPrivateApiExtension = {};

chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_Params',
      packedSize: 16,
      fields: [
        { name: 'consent_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chrome.mojom.GoogleAccountsPrivateApiExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.GoogleAccountsPrivateApiExtensionRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.GoogleAccountsPrivateApiExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.GoogleAccountsPrivateApiExtensionPendingReceiver,
      handle);
    this.$ = new chrome.mojom.GoogleAccountsPrivateApiExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.GoogleAccountsPrivateApiExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setConsentResult(consent_result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec,
      null,
      [consent_result]);
  }

};

chrome.mojom.GoogleAccountsPrivateApiExtension.getRemote = function() {
  let remote = new chrome.mojom.GoogleAccountsPrivateApiExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.GoogleAccountsPrivateApiExtension',
    'context');
  return remote.$;
};

// ParamsSpec for SetConsentResult
chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.GoogleAccountsPrivateApiExtension.SetConsentResult_Params',
      packedSize: 16,
      fields: [
        { name: 'consent_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.GoogleAccountsPrivateApiExtensionPtr = chrome.mojom.GoogleAccountsPrivateApiExtensionRemote;
chrome.mojom.GoogleAccountsPrivateApiExtensionRequest = chrome.mojom.GoogleAccountsPrivateApiExtensionPendingReceiver;

