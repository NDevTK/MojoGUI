// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/in_session_auth/mojom/in_session_auth.mojom
// Module: chromeos.auth.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.auth = chromeos.auth || {};
chromeos.auth.mojom = chromeos.auth.mojom || {};
var mojo_base = mojo_base || {};

chromeos.auth.mojom.ReasonSpec = { $: mojo.internal.Enum() };
chromeos.auth.mojom.RequestTokenReplySpec = { $: {} };
chromeos.auth.mojom.InSessionAuth = {};
chromeos.auth.mojom.InSessionAuth.$interfaceName = 'chromeos.auth.mojom.InSessionAuth';
chromeos.auth.mojom.InSessionAuth_RequestToken_ParamsSpec = { $: {} };
chromeos.auth.mojom.InSessionAuth_RequestToken_ResponseParamsSpec = { $: {} };
chromeos.auth.mojom.InSessionAuth_CheckToken_ParamsSpec = { $: {} };
chromeos.auth.mojom.InSessionAuth_CheckToken_ResponseParamsSpec = { $: {} };
chromeos.auth.mojom.InSessionAuth_InvalidateToken_ParamsSpec = { $: {} };
chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec = { $: {} };
chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec = { $: {} };

// Enum: Reason
chromeos.auth.mojom.Reason = {
  kAccessPasswordManager: 0,
  kAccessAuthenticationSettings: 1,
  kAccessMultideviceSettings: 2,
  MinVersion: 2,
};

// Struct: RequestTokenReply
mojo.internal.Struct(
    chromeos.auth.mojom.RequestTokenReplySpec, 'chromeos.auth.mojom.RequestTokenReply', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: InSessionAuth
mojo.internal.Struct(
    chromeos.auth.mojom.InSessionAuth_RequestToken_ParamsSpec, 'chromeos.auth.mojom.InSessionAuth_RequestToken_Params', [
      mojo.internal.StructField('reason', 0, 0, chromeos.auth.mojom.ReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prompt', 8, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

mojo.internal.Struct(
    chromeos.auth.mojom.InSessionAuth_RequestToken_ResponseParamsSpec, 'chromeos.auth.mojom.InSessionAuth_RequestToken_ResponseParams', [
      mojo.internal.StructField('reply', 0, 0, chromeos.auth.mojom.RequestTokenReplySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.auth.mojom.InSessionAuth_CheckToken_ParamsSpec, 'chromeos.auth.mojom.InSessionAuth_CheckToken_Params', [
      mojo.internal.StructField('reason', 0, 0, chromeos.auth.mojom.ReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.auth.mojom.InSessionAuth_CheckToken_ResponseParamsSpec, 'chromeos.auth.mojom.InSessionAuth_CheckToken_ResponseParams', [
      mojo.internal.StructField('valid', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.auth.mojom.InSessionAuth_InvalidateToken_ParamsSpec, 'chromeos.auth.mojom.InSessionAuth_InvalidateToken_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec, 'chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_Params', [
      mojo.internal.StructField('rp_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('window_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec, 'chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.auth.mojom.InSessionAuthPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.auth.mojom.InSessionAuthRemote = class {
  static get $interfaceName() {
    return 'chromeos.auth.mojom.InSessionAuth';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.auth.mojom.InSessionAuthPendingReceiver,
      handle);
    this.$ = new chromeos.auth.mojom.InSessionAuthRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.auth.mojom.InSessionAuthRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestToken(reason, prompt) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.auth.mojom.InSessionAuth_RequestToken_ParamsSpec,
      chromeos.auth.mojom.InSessionAuth_RequestToken_ResponseParamsSpec,
      [reason, prompt],
      false);
  }

  checkToken(reason, token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.auth.mojom.InSessionAuth_CheckToken_ParamsSpec,
      chromeos.auth.mojom.InSessionAuth_CheckToken_ResponseParamsSpec,
      [reason, token],
      false);
  }

  invalidateToken(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.auth.mojom.InSessionAuth_InvalidateToken_ParamsSpec,
      null,
      [token],
      false);
  }

  requestLegacyWebAuthn(rp_id, window_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec,
      chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec,
      [rp_id, window_id],
      false);
  }

};

chromeos.auth.mojom.InSessionAuth.getRemote = function() {
  let remote = new chromeos.auth.mojom.InSessionAuthRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.auth.mojom.InSessionAuth',
    'context');
  return remote.$;
};

chromeos.auth.mojom.InSessionAuthReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.auth.mojom.InSessionAuth_RequestToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestToken(params.reason, params.prompt);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.auth.mojom.InSessionAuth_RequestToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chromeos.auth.mojom.InSessionAuth_CheckToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.checkToken(params.reason, params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.auth.mojom.InSessionAuth_CheckToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = chromeos.auth.mojom.InSessionAuth_InvalidateToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.invalidateToken(params.token);
          break;
        }
        case 3: {
          const params = chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestLegacyWebAuthn(params.rp_id, params.window_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

chromeos.auth.mojom.InSessionAuthReceiver = chromeos.auth.mojom.InSessionAuthReceiver;

chromeos.auth.mojom.InSessionAuthPtr = chromeos.auth.mojom.InSessionAuthRemote;
chromeos.auth.mojom.InSessionAuthRequest = chromeos.auth.mojom.InSessionAuthPendingReceiver;

