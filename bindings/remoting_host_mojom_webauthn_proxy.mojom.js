// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/webauthn_proxy.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Struct: WebAuthnExceptionDetails
remoting.mojom.WebAuthnExceptionDetailsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnExceptionDetails',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WebAuthnRequestCanceller
remoting.mojom.WebAuthnRequestCanceller = {};

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
      []);
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

// ParamsSpec for Cancel
remoting.mojom.WebAuthnRequestCanceller_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnRequestCanceller.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remoting.mojom.WebAuthnRequestCanceller_Cancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnRequestCanceller.Cancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_canceled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remoting.mojom.WebAuthnRequestCancellerPtr = remoting.mojom.WebAuthnRequestCancellerRemote;
remoting.mojom.WebAuthnRequestCancellerRequest = remoting.mojom.WebAuthnRequestCancellerPendingReceiver;


// Interface: WebAuthnProxy
remoting.mojom.WebAuthnProxy = {};

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
      []);
  }

  create(request_data, request_canceller) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.WebAuthnProxy_Create_ParamsSpec,
      remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec,
      [request_data, request_canceller]);
  }

  get(request_data, request_canceller) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.WebAuthnProxy_Get_ParamsSpec,
      remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec,
      [request_data, request_canceller]);
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

// ParamsSpec for IsUserVerifyingPlatformAuthenticatorAvailable
remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.IsUserVerifyingPlatformAuthenticatorAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remoting.mojom.WebAuthnProxy_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Create
remoting.mojom.WebAuthnProxy_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'request_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'request_canceller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remoting.mojom.WebAuthnProxy_Create_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Create_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.WebAuthnCreateResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Get
remoting.mojom.WebAuthnProxy_Get_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Get_Params',
      packedSize: 24,
      fields: [
        { name: 'request_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'request_canceller', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remoting.mojom.WebAuthnProxy_Get_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WebAuthnProxy.Get_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.WebAuthnGetResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remoting.mojom.WebAuthnProxyPtr = remoting.mojom.WebAuthnProxyRemote;
remoting.mojom.WebAuthnProxyRequest = remoting.mojom.WebAuthnProxyPendingReceiver;

