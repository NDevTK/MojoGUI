// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/google_accounts_private_api_extension.mojom
// Module: chrome.mojom

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
  setConsentResult(consent_result) {
    return this.$.setConsentResult(consent_result);
  }
};

chrome.mojom.GoogleAccountsPrivateApiExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GoogleAccountsPrivateApiExtension', [
      { explicit: null },
    ]);
  }

  setConsentResult(consent_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GoogleAccountsPrivateApiExtension', [
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
             decoder.decodeStructInline(chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec.$.structSpec);
          const result = this.impl.setConsentResult(params.consent_result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.GoogleAccountsPrivateApiExtensionReceiver = chrome.mojom.GoogleAccountsPrivateApiExtensionReceiver;

chrome.mojom.GoogleAccountsPrivateApiExtensionPtr = chrome.mojom.GoogleAccountsPrivateApiExtensionRemote;
chrome.mojom.GoogleAccountsPrivateApiExtensionRequest = chrome.mojom.GoogleAccountsPrivateApiExtensionPendingReceiver;

