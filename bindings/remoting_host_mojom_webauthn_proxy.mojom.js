// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/webauthn_proxy.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Union: WebAuthnCreateResponse
remoting.mojom.mojom.WebAuthnCreateResponseSpec = { $: mojo.internal.Union(
    'remoting.mojom.WebAuthnCreateResponse', {
      'error_details': {
        'ordinal': 0,
        'type': remoting.mojom.WebAuthnExceptionDetailsSpec,
      }},
      'response_data': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Union: WebAuthnGetResponse
remoting.mojom.mojom.WebAuthnGetResponseSpec = { $: mojo.internal.Union(
    'remoting.mojom.WebAuthnGetResponse', {
      'error_details': {
        'ordinal': 0,
        'type': remoting.mojom.WebAuthnExceptionDetailsSpec,
      }},
      'response_data': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: WebAuthnExceptionDetails
remoting.mojom.mojom.WebAuthnExceptionDetailsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnExceptionDetails',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebAuthnRequestCanceller
remoting.mojom.mojom.WebAuthnRequestCanceller = {};

remoting.mojom.mojom.WebAuthnRequestCancellerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.WebAuthnRequestCancellerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WebAuthnRequestCanceller';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.WebAuthnRequestCancellerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.WebAuthnRequestCancellerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.WebAuthnRequestCancellerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec,
      remoting.mojom.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec,
      []);
  }

};

remoting.mojom.mojom.WebAuthnRequestCanceller.getRemote = function() {
  let remote = new remoting.mojom.mojom.WebAuthnRequestCancellerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WebAuthnRequestCanceller',
    'context');
  return remote.$;
};

// ParamsSpec for Cancel
remoting.mojom.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnRequestCanceller.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnRequestCanceller.Cancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_canceled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.WebAuthnRequestCancellerPtr = remoting.mojom.mojom.WebAuthnRequestCancellerRemote;
remoting.mojom.mojom.WebAuthnRequestCancellerRequest = remoting.mojom.mojom.WebAuthnRequestCancellerPendingReceiver;


// Interface: WebAuthnProxy
remoting.mojom.mojom.WebAuthnProxy = {};

remoting.mojom.mojom.WebAuthnProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.WebAuthnProxyRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WebAuthnProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.WebAuthnProxyPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.WebAuthnProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.WebAuthnProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec,
      remoting.mojom.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec,
      []);
  }

  create(request_data, request_canceller) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.mojom.WebAuthnProxy_Create_ParamsSpec,
      remoting.mojom.mojom.WebAuthnProxy_Create_ResponseParamsSpec,
      [request_data, request_canceller]);
  }

  get(request_data, request_canceller) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.mojom.WebAuthnProxy_Get_ParamsSpec,
      remoting.mojom.mojom.WebAuthnProxy_Get_ResponseParamsSpec,
      [request_data, request_canceller]);
  }

};

remoting.mojom.mojom.WebAuthnProxy.getRemote = function() {
  let remote = new remoting.mojom.mojom.WebAuthnProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WebAuthnProxy',
    'context');
  return remote.$;
};

// ParamsSpec for IsUserVerifyingPlatformAuthenticatorAvailable
remoting.mojom.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.IsUserVerifyingPlatformAuthenticatorAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Create
remoting.mojom.mojom.WebAuthnProxy_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'request_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'request_canceller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

remoting.mojom.mojom.WebAuthnProxy_Create_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Create_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.WebAuthnCreateResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Get
remoting.mojom.mojom.WebAuthnProxy_Get_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Get_Params',
      packedSize: 24,
      fields: [
        { name: 'request_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'request_canceller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

remoting.mojom.mojom.WebAuthnProxy_Get_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Get_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.WebAuthnGetResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.WebAuthnProxyPtr = remoting.mojom.mojom.WebAuthnProxyRemote;
remoting.mojom.mojom.WebAuthnProxyRequest = remoting.mojom.mojom.WebAuthnProxyPendingReceiver;

