// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_untrusted_ui.mojom
// Module: new_tab_page.mojom

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};
var mojo_base = mojo_base || {};

new_tab_page.mojom.AccessTokenSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory = {};
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory.$interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory';
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler = {};
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.$interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler';
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec = { $: {} };

// Struct: AccessToken
mojo.internal.Struct(
    new_tab_page.mojom.AccessTokenSpec, 'new_tab_page.mojom.AccessToken', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiration', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MicrosoftAuthUntrustedDocumentInterfacesFactory
mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_Params', [
      mojo.internal.StructField('child_document', 0, 0, mojo.internal.InterfaceProxy(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('document', 8, 0, mojo.internal.InterfaceProxy(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectToParentDocument(child_document) {
    return this.$.connectToParentDocument(child_document);
  }
  createPageHandler(handler, document) {
    return this.$.createPageHandler(handler, document);
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthUntrustedDocumentInterfacesFactory', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  connectToParentDocument(child_document) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec,
      null,
      [child_document],
      false);
  }

  createPageHandler(handler, document) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler, document],
      false);
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory.getRemote = function() {
  let remote = new new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory',
    'context');
  return remote.$;
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthUntrustedDocumentInterfacesFactory', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec.$.structSpec);
          const result = this.impl.connectToParentDocument(params.child_document);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler, params.document);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPtr = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRequest = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver;


// Interface: MicrosoftAuthUntrustedPageHandler
mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_Params', [
      mojo.internal.StructField('access_token', 0, 0, new_tab_page.mojom.AccessTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_Params', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  clearAuthData() {
    return this.$.clearAuthData();
  }
  maybeAcquireTokenSilent() {
    return this.$.maybeAcquireTokenSilent();
  }
  setAccessToken(access_token) {
    return this.$.setAccessToken(access_token);
  }
  setAuthStateError(error_code, error_message) {
    return this.$.setAuthStateError(error_code, error_message);
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  clearAuthData() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec,
      null,
      [],
      false);
  }

  maybeAcquireTokenSilent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec,
      null,
      [],
      false);
  }

  setAccessToken(access_token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec,
      null,
      [access_token],
      false);
  }

  setAuthStateError(error_code, error_message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec,
      null,
      [error_code, error_message],
      false);
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.getRemote = function() {
  let remote = new new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler',
    'context');
  return remote.$;
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthUntrustedPageHandler', [
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec.$.structSpec);
          const result = this.impl.clearAuthData();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec.$.structSpec);
          const result = this.impl.maybeAcquireTokenSilent();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec.$.structSpec);
          const result = this.impl.setAccessToken(params.access_token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec.$.structSpec);
          const result = this.impl.setAuthStateError(params.error_code, params.error_message);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPtr = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRequest = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver;

