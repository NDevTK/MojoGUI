// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_shared_ui.mojom
// Module: new_tab_page.mojom

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
  acquireTokenPopup() {
    return this.$.acquireTokenPopup();
  }
  acquireTokenSilent() {
    return this.$.acquireTokenSilent();
  }
  signOut() {
    return this.$.signOut();
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthUntrustedDocument', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  acquireTokenPopup() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec,
      null,
      [],
      false);
  }

  acquireTokenSilent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec,
      null,
      [],
      false);
  }

  signOut() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthUntrustedDocument', [
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
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec.$.structSpec);
          const result = this.impl.acquireTokenPopup();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec.$.structSpec);
          const result = this.impl.acquireTokenSilent();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec.$.structSpec);
          const result = this.impl.signOut();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPtr = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRequest = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPendingReceiver;

