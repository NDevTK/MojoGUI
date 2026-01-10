// Auto-generated MojoJS binding
// Source: chromium_src/components/legion/mojom/oak_session.mojom
// Module: legion.mojom

'use strict';

// Module namespace
var legion = legion || {};
legion.mojom = legion.mojom || {};
var sandbox = sandbox || {};

legion.mojom.HandshakeMessageSpec = { $: {} };
legion.mojom.OakSession = {};
legion.mojom.OakSession.$interfaceName = 'legion.mojom.OakSession';
legion.mojom.OakSession_InitiateHandshake_ParamsSpec = { $: {} };
legion.mojom.OakSession_InitiateHandshake_ResponseParamsSpec = { $: {} };
legion.mojom.OakSession_CompleteHandshake_ParamsSpec = { $: {} };
legion.mojom.OakSession_CompleteHandshake_ResponseParamsSpec = { $: {} };
legion.mojom.OakSession_Encrypt_ParamsSpec = { $: {} };
legion.mojom.OakSession_Encrypt_ResponseParamsSpec = { $: {} };
legion.mojom.OakSession_Decrypt_ParamsSpec = { $: {} };
legion.mojom.OakSession_Decrypt_ResponseParamsSpec = { $: {} };

// Struct: HandshakeMessage
mojo.internal.Struct(
    legion.mojom.HandshakeMessageSpec, 'legion.mojom.HandshakeMessage', [
      mojo.internal.StructField('ephemeral_public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('ciphertext', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: OakSession
mojo.internal.Struct(
    legion.mojom.OakSession_InitiateHandshake_ParamsSpec, 'legion.mojom.OakSession_InitiateHandshake_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    legion.mojom.OakSession_InitiateHandshake_ResponseParamsSpec, 'legion.mojom.OakSession_InitiateHandshake_ResponseParams', [
      mojo.internal.StructField('request', 0, 0, legion.mojom.HandshakeMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    legion.mojom.OakSession_CompleteHandshake_ParamsSpec, 'legion.mojom.OakSession_CompleteHandshake_Params', [
      mojo.internal.StructField('response', 0, 0, legion.mojom.HandshakeMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    legion.mojom.OakSession_CompleteHandshake_ResponseParamsSpec, 'legion.mojom.OakSession_CompleteHandshake_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    legion.mojom.OakSession_Encrypt_ParamsSpec, 'legion.mojom.OakSession_Encrypt_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    legion.mojom.OakSession_Encrypt_ResponseParamsSpec, 'legion.mojom.OakSession_Encrypt_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    legion.mojom.OakSession_Decrypt_ParamsSpec, 'legion.mojom.OakSession_Decrypt_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    legion.mojom.OakSession_Decrypt_ResponseParamsSpec, 'legion.mojom.OakSession_Decrypt_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

legion.mojom.OakSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

legion.mojom.OakSessionRemote = class {
  static get $interfaceName() {
    return 'legion.mojom.OakSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      legion.mojom.OakSessionPendingReceiver,
      handle);
    this.$ = new legion.mojom.OakSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

legion.mojom.OakSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initiateHandshake() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      legion.mojom.OakSession_InitiateHandshake_ParamsSpec,
      legion.mojom.OakSession_InitiateHandshake_ResponseParamsSpec,
      [],
      false);
  }

  completeHandshake(response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      legion.mojom.OakSession_CompleteHandshake_ParamsSpec,
      legion.mojom.OakSession_CompleteHandshake_ResponseParamsSpec,
      [response],
      false);
  }

  encrypt(input) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      legion.mojom.OakSession_Encrypt_ParamsSpec,
      legion.mojom.OakSession_Encrypt_ResponseParamsSpec,
      [input],
      false);
  }

  decrypt(input) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      legion.mojom.OakSession_Decrypt_ParamsSpec,
      legion.mojom.OakSession_Decrypt_ResponseParamsSpec,
      [input],
      false);
  }

};

legion.mojom.OakSession.getRemote = function() {
  let remote = new legion.mojom.OakSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'legion.mojom.OakSession',
    'context');
  return remote.$;
};

legion.mojom.OakSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = legion.mojom.OakSession_InitiateHandshake_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initiateHandshake();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, legion.mojom.OakSession_InitiateHandshake_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = legion.mojom.OakSession_CompleteHandshake_ParamsSpec.$.decode(message.payload);
          const result = this.impl.completeHandshake(params.response);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, legion.mojom.OakSession_CompleteHandshake_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = legion.mojom.OakSession_Encrypt_ParamsSpec.$.decode(message.payload);
          const result = this.impl.encrypt(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, legion.mojom.OakSession_Encrypt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = legion.mojom.OakSession_Decrypt_ParamsSpec.$.decode(message.payload);
          const result = this.impl.decrypt(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, legion.mojom.OakSession_Decrypt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

legion.mojom.OakSessionReceiver = legion.mojom.OakSessionReceiver;

legion.mojom.OakSessionPtr = legion.mojom.OakSessionRemote;
legion.mojom.OakSessionRequest = legion.mojom.OakSessionPendingReceiver;

