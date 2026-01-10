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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.acquireTokenPopup();
          break;
        }
        case 1: {
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.acquireTokenSilent();
          break;
        }
        case 2: {
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec.$.decode(message.payload);
          const result = this.impl.signOut();
          break;
        }
      }
    });
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPtr = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRequest = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPendingReceiver;

