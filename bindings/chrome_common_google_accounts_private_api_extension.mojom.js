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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: SetConsentResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetConsentResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.GoogleAccountsPrivateApiExtension_SetConsentResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setConsentResult');
          const result = this.impl.setConsentResult(params.consent_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.GoogleAccountsPrivateApiExtensionReceiver = chrome.mojom.GoogleAccountsPrivateApiExtensionReceiver;

chrome.mojom.GoogleAccountsPrivateApiExtensionPtr = chrome.mojom.GoogleAccountsPrivateApiExtensionRemote;
chrome.mojom.GoogleAccountsPrivateApiExtensionRequest = chrome.mojom.GoogleAccountsPrivateApiExtensionPendingReceiver;

