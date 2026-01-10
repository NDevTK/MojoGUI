// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_untrusted_ui.mojom
// Module: new_tab_page.mojom

'use strict';

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerSpec), null, false, 0, undefined),
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
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToParentDocument(child_document) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec,
      null,
      [child_document],
      false);
  }

  createPageHandler(handler, document) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: ConnectToParentDocument
        try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToParentDocument (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: CreatePageHandler
        try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connectToParentDocument');
          const result = this.impl.connectToParentDocument(params.child_document);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler, params.document);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clearAuthData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec,
      null,
      [],
      false);
  }

  maybeAcquireTokenSilent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec,
      null,
      [],
      false);
  }

  setAccessToken(access_token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec,
      null,
      [access_token],
      false);
  }

  setAuthStateError(error_code, error_message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: ClearAuthData
        try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAuthData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: MaybeAcquireTokenSilent
        try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeAcquireTokenSilent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: SetAccessToken
        try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccessToken (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: SetAuthStateError
        try {
             decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAuthStateError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearAuthData');
          const result = this.impl.clearAuthData();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeAcquireTokenSilent');
          const result = this.impl.maybeAcquireTokenSilent();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAccessToken');
          const result = this.impl.setAccessToken(params.access_token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAuthStateError');
          const result = this.impl.setAuthStateError(params.error_code, params.error_message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPtr = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRequest = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver;

