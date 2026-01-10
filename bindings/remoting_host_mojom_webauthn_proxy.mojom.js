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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
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
      mojo.internal.StructField('request_canceller', 8, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnRequestCancellerRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('request_canceller', 8, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnRequestCancellerRemote), null, false, 0, undefined),
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isUserVerifyingPlatformAuthenticatorAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = remoting.mojom.WebAuthnProxy_Create_ParamsSpec.$.decode(message.payload);
          const result = this.impl.create(params.request_data, params.request_canceller);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = remoting.mojom.WebAuthnProxy_Get_ParamsSpec.$.decode(message.payload);
          const result = this.impl.get(params.request_data, params.request_canceller);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

remoting.mojom.WebAuthnProxyReceiver = remoting.mojom.WebAuthnProxyReceiver;

remoting.mojom.WebAuthnProxyPtr = remoting.mojom.WebAuthnProxyRemote;
remoting.mojom.WebAuthnProxyRequest = remoting.mojom.WebAuthnProxyPendingReceiver;

