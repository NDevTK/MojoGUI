// Auto-generated MojoJS binding
// Source: chromium_src/components/legion/mojom/oak_session.mojom
// Module: legion.mojom

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
  initiateHandshake() {
    return this.$.initiateHandshake();
  }
  completeHandshake(response) {
    return this.$.completeHandshake(response);
  }
  encrypt(input) {
    return this.$.encrypt(input);
  }
  decrypt(input) {
    return this.$.decrypt(input);
  }
};

legion.mojom.OakSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OakSession', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initiateHandshake() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      legion.mojom.OakSession_InitiateHandshake_ParamsSpec,
      legion.mojom.OakSession_InitiateHandshake_ResponseParamsSpec,
      [],
      false);
  }

  completeHandshake(response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      legion.mojom.OakSession_CompleteHandshake_ParamsSpec,
      legion.mojom.OakSession_CompleteHandshake_ResponseParamsSpec,
      [response],
      false);
  }

  encrypt(input) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      legion.mojom.OakSession_Encrypt_ParamsSpec,
      legion.mojom.OakSession_Encrypt_ResponseParamsSpec,
      [input],
      false);
  }

  decrypt(input) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OakSession', [
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
             decoder.decodeStructInline(legion.mojom.OakSession_InitiateHandshake_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(legion.mojom.OakSession_CompleteHandshake_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(legion.mojom.OakSession_Encrypt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(legion.mojom.OakSession_Decrypt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(legion.mojom.OakSession_InitiateHandshake_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(legion.mojom.OakSession_CompleteHandshake_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(legion.mojom.OakSession_Encrypt_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(legion.mojom.OakSession_Decrypt_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

legion.mojom.OakSessionReceiver = legion.mojom.OakSessionReceiver;

legion.mojom.OakSessionPtr = legion.mojom.OakSessionRemote;
legion.mojom.OakSessionRequest = legion.mojom.OakSessionPendingReceiver;

