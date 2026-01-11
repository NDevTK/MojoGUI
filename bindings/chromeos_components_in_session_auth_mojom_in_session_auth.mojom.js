// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/in_session_auth/mojom/in_session_auth.mojom
// Module: chromeos.auth.mojom

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
  requestToken(reason, prompt) {
    return this.$.requestToken(reason, prompt);
  }
  checkToken(reason, token) {
    return this.$.checkToken(reason, token);
  }
  invalidateToken(token) {
    return this.$.invalidateToken(token);
  }
  requestLegacyWebAuthn(rp_id, window_id) {
    return this.$.requestLegacyWebAuthn(rp_id, window_id);
  }
};

chromeos.auth.mojom.InSessionAuthRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InSessionAuth', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  requestToken(reason, prompt) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.auth.mojom.InSessionAuth_RequestToken_ParamsSpec,
      chromeos.auth.mojom.InSessionAuth_RequestToken_ResponseParamsSpec,
      [reason, prompt],
      false);
  }

  checkToken(reason, token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.auth.mojom.InSessionAuth_CheckToken_ParamsSpec,
      chromeos.auth.mojom.InSessionAuth_CheckToken_ResponseParamsSpec,
      [reason, token],
      false);
  }

  invalidateToken(token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.auth.mojom.InSessionAuth_InvalidateToken_ParamsSpec,
      null,
      [token],
      false);
  }

  requestLegacyWebAuthn(rp_id, window_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InSessionAuth', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_RequestToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_CheckToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_InvalidateToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_RequestToken_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_CheckToken_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_InvalidateToken_ParamsSpec.$.structSpec);
          const result = this.impl.invalidateToken(params.token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.auth.mojom.InSessionAuth_RequestLegacyWebAuthn_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

chromeos.auth.mojom.InSessionAuthReceiver = chromeos.auth.mojom.InSessionAuthReceiver;

chromeos.auth.mojom.InSessionAuthPtr = chromeos.auth.mojom.InSessionAuthRemote;
chromeos.auth.mojom.InSessionAuthRequest = chromeos.auth.mojom.InSessionAuthPendingReceiver;

