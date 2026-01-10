// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/google_accounts_private_api_extension.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.GoogleAccountsPrivateApiExtension = {};
chrome.mojom.GoogleAccountsPrivateApiExtension.$interfaceName = 'chrome.mojom.GoogleAccountsPrivateApiExtension';
chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec = { $: {} };

// Interface: GoogleAccountsPrivateApiExtension
mojo.internal.Struct(
    chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec, 'chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_Params', [
      mojo.internal.StructField('consent_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [consent_result],
      false);
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

chrome.mojom.GoogleAccountsPrivateApiExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setConsentResult(params.consent_result);
          break;
        }
      }
    }});
  }
};

chrome.mojom.GoogleAccountsPrivateApiExtensionReceiver = chrome.mojom.GoogleAccountsPrivateApiExtensionReceiver;

chrome.mojom.GoogleAccountsPrivateApiExtensionPtr = chrome.mojom.GoogleAccountsPrivateApiExtensionRemote;
chrome.mojom.GoogleAccountsPrivateApiExtensionRequest = chrome.mojom.GoogleAccountsPrivateApiExtensionPendingReceiver;

