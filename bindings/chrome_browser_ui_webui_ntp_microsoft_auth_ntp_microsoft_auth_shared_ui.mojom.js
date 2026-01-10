// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_shared_ui.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};

new_tab_page.mojom.AuthTypeSpec = { $: mojo.internal.Enum() };
new_tab_page.mojom.MicrosoftAuthUntrustedDocument = {};
new_tab_page.mojom.MicrosoftAuthUntrustedDocument.$interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedDocument';
new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec = { $: {} };

// Enum: AuthType
new_tab_page.mojom.AuthType = {
  kSilent: 0,
  kPopup: 1,
};

// Interface: MicrosoftAuthUntrustedDocument
mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_Params', [
    ],
    [[0, 8]]);

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.MicrosoftAuthUntrustedDocument';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquireTokenPopup() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec,
      null,
      [],
      false);
  }

  acquireTokenSilent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec,
      null,
      [],
      false);
  }

  signOut() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec,
      null,
      [],
      false);
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedDocument.getRemote = function() {
  let remote = new new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.MicrosoftAuthUntrustedDocument',
    'context');
  return remote.$;
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentReceiver = class {
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
        
        // Try Method 0: AcquireTokenPopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireTokenPopup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AcquireTokenSilent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireTokenSilent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: SignOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignOut (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acquireTokenPopup');
          const result = this.impl.acquireTokenPopup();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acquireTokenSilent');
          const result = this.impl.acquireTokenSilent();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.signOut');
          const result = this.impl.signOut();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPtr = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRequest = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPendingReceiver;

