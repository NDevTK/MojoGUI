// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/webauthn_proxy.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.WebAuthnCreateResponseSpec = { $: {} };
remoting.mojom.WebAuthnGetResponseSpec = { $: {} };
remoting.mojom.WebAuthnExceptionDetailsSpec = { $: {} };
remoting.mojom.WebAuthnRequestCanceller = {};
remoting.mojom.WebAuthnRequestCanceller.$interfaceName = 'remoting.mojom.WebAuthnRequestCanceller';
remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy = {};
remoting.mojom.WebAuthnProxy.$interfaceName = 'remoting.mojom.WebAuthnProxy';
remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Create_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Get_ParamsSpec = { $: {} };
remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec = { $: {} };

// Union: WebAuthnCreateResponse
mojo.internal.Union(
    remoting.mojom.WebAuthnCreateResponseSpec, 'remoting.mojom.WebAuthnCreateResponse', {
      'error_details': {
        'ordinal': 0,
        'type': remoting.mojom.WebAuthnExceptionDetailsSpec.$,
        'nullable': false,
      },
      'response_data': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: WebAuthnGetResponse
mojo.internal.Union(
    remoting.mojom.WebAuthnGetResponseSpec, 'remoting.mojom.WebAuthnGetResponse', {
      'error_details': {
        'ordinal': 0,
        'type': remoting.mojom.WebAuthnExceptionDetailsSpec.$,
        'nullable': false,
      },
      'response_data': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: WebAuthnExceptionDetails
mojo.internal.Struct(
    remoting.mojom.WebAuthnExceptionDetailsSpec, 'remoting.mojom.WebAuthnExceptionDetails', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebAuthnRequestCanceller
mojo.internal.Struct(
    remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec, 'remoting.mojom.WebAuthnRequestCanceller_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec, 'remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParams', [
      mojo.internal.StructField('was_canceled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.WebAuthnRequestCancellerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.WebAuthnRequestCancellerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WebAuthnRequestCanceller';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.WebAuthnRequestCancellerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.WebAuthnRequestCancellerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.WebAuthnRequestCancellerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec,
      remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec,
      [],
      false);
  }

};

remoting.mojom.WebAuthnRequestCanceller.getRemote = function() {
  let remote = new remoting.mojom.WebAuthnRequestCancellerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WebAuthnRequestCanceller',
    'context');
  return remote.$;
};

remoting.mojom.WebAuthnRequestCancellerReceiver = class {
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
        
        // Try Method 0: Cancel
        try {
             decoder.decodeStruct(remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.WebAuthnRequestCancellerReceiver = remoting.mojom.WebAuthnRequestCancellerReceiver;

remoting.mojom.WebAuthnRequestCancellerPtr = remoting.mojom.WebAuthnRequestCancellerRemote;
remoting.mojom.WebAuthnRequestCancellerRequest = remoting.mojom.WebAuthnRequestCancellerPendingReceiver;


// Interface: WebAuthnProxy
mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec, 'remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec, 'remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams', [
      mojo.internal.StructField('is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Create_ParamsSpec, 'remoting.mojom.WebAuthnProxy_Create_Params', [
      mojo.internal.StructField('request_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_canceller', 8, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnRequestCancellerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec, 'remoting.mojom.WebAuthnProxy_Create_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, remoting.mojom.WebAuthnCreateResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Get_ParamsSpec, 'remoting.mojom.WebAuthnProxy_Get_Params', [
      mojo.internal.StructField('request_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_canceller', 8, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnRequestCancellerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec, 'remoting.mojom.WebAuthnProxy_Get_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, remoting.mojom.WebAuthnGetResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.WebAuthnProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.WebAuthnProxyRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WebAuthnProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.WebAuthnProxyPendingReceiver,
      handle);
    this.$ = new remoting.mojom.WebAuthnProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.WebAuthnProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec,
      remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec,
      [],
      false);
  }

  create(request_data, request_canceller) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.WebAuthnProxy_Create_ParamsSpec,
      remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec,
      [request_data, request_canceller],
      false);
  }

  get(request_data, request_canceller) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.WebAuthnProxy_Get_ParamsSpec,
      remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec,
      [request_data, request_canceller],
      false);
  }

};

remoting.mojom.WebAuthnProxy.getRemote = function() {
  let remote = new remoting.mojom.WebAuthnProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WebAuthnProxy',
    'context');
  return remote.$;
};

remoting.mojom.WebAuthnProxyReceiver = class {
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
        
        // Try Method 0: IsUserVerifyingPlatformAuthenticatorAvailable
        try {
             decoder.decodeStruct(remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsUserVerifyingPlatformAuthenticatorAvailable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: Create
        try {
             decoder.decodeStruct(remoting.mojom.WebAuthnProxy_Create_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: Get
        try {
             decoder.decodeStruct(remoting.mojom.WebAuthnProxy_Get_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Get (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isUserVerifyingPlatformAuthenticatorAvailable');
          const result = this.impl.isUserVerifyingPlatformAuthenticatorAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.WebAuthnProxy_Create_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.request_data, params.request_canceller);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.WebAuthnProxy_Get_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.get');
          const result = this.impl.get(params.request_data, params.request_canceller);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.WebAuthnProxyReceiver = remoting.mojom.WebAuthnProxyReceiver;

remoting.mojom.WebAuthnProxyPtr = remoting.mojom.WebAuthnProxyRemote;
remoting.mojom.WebAuthnProxyRequest = remoting.mojom.WebAuthnProxyPendingReceiver;

