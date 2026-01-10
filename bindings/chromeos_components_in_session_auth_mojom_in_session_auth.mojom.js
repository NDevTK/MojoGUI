// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/in_session_auth/mojom/in_session_auth.mojom
// Module: chromeos.auth.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.auth = chromeos.auth || {};
chromeos.auth.auth.mojom = chromeos.auth.auth.mojom || {};


// Enum: Reason
chromeos.auth.auth.mojom.mojom.Reason = {
  kAccessAuthenticationSettings: 0,
  kAccessMultideviceSettings: 1,
};
chromeos.auth.auth.mojom.mojom.ReasonSpec = { $: mojo.internal.Enum() };

// Struct: RequestTokenReply
chromeos.auth.auth.mojom.mojom.RequestTokenReplySpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.RequestTokenReply',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: InSessionAuth
chromeos.auth.auth.mojom.mojom.InSessionAuth = {};

chromeos.auth.auth.mojom.mojom.InSessionAuthPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.auth.auth.mojom.mojom.InSessionAuthRemote = class {
  static get $interfaceName() {
    return 'chromeos.auth.mojom.InSessionAuth';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.auth.auth.mojom.mojom.InSessionAuthPendingReceiver,
      handle);
    this.$ = new chromeos.auth.auth.mojom.mojom.InSessionAuthRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.auth.auth.mojom.mojom.InSessionAuthRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestToken(reason, prompt) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestToken_ParamsSpec,
      chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestToken_ResponseParamsSpec,
      [reason, prompt]);
  }

  checkToken(reason, token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.auth.auth.mojom.mojom.InSessionAuth_CheckToken_ParamsSpec,
      chromeos.auth.auth.mojom.mojom.InSessionAuth_CheckToken_ResponseParamsSpec,
      [reason, token]);
  }

  invalidateToken(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.auth.auth.mojom.mojom.InSessionAuth_InvalidateToken_ParamsSpec,
      null,
      [token]);
  }

  requestLegacyWebAuthn(rp_id, window_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec,
      chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec,
      [rp_id, window_id]);
  }

};

chromeos.auth.auth.mojom.mojom.InSessionAuth.getRemote = function() {
  let remote = new chromeos.auth.auth.mojom.mojom.InSessionAuthRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.auth.mojom.InSessionAuth',
    'context');
  return remote.$;
};

// ParamsSpec for RequestToken
chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.InSessionAuth.RequestToken_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: chromeos.auth.mojom.ReasonSpec, nullable: false, minVersion: 0 },
        { name: 'prompt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 24}]
    }
  }
};

chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.InSessionAuth.RequestToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: chromeos.auth.mojom.RequestTokenReplySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckToken
chromeos.auth.auth.mojom.mojom.InSessionAuth_CheckToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.InSessionAuth.CheckToken_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: chromeos.auth.mojom.ReasonSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.auth.auth.mojom.mojom.InSessionAuth_CheckToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.InSessionAuth.CheckToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'valid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InvalidateToken
chromeos.auth.auth.mojom.mojom.InSessionAuth_InvalidateToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.InSessionAuth.InvalidateToken_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestLegacyWebAuthn
chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.InSessionAuth.RequestLegacyWebAuthn_Params',
      packedSize: 24,
      fields: [
        { name: 'rp_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'window_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.auth.auth.mojom.mojom.InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.auth.mojom.InSessionAuth.RequestLegacyWebAuthn_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.auth.auth.mojom.mojom.InSessionAuthPtr = chromeos.auth.auth.mojom.mojom.InSessionAuthRemote;
chromeos.auth.auth.mojom.mojom.InSessionAuthRequest = chromeos.auth.auth.mojom.mojom.InSessionAuthPendingReceiver;

