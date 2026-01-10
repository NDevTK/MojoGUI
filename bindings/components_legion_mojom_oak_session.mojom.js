// Auto-generated MojoJS binding
// Source: chromium_src/components/legion/mojom/oak_session.mojom
// Module: legion.mojom

'use strict';

// Module namespace
var legion = legion || {};
legion.mojom = legion.mojom || {};


// Struct: HandshakeMessage
legion.mojom.mojom.HandshakeMessageSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.HandshakeMessage',
      packedSize: 24,
      fields: [
        { name: 'ephemeral_public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'ciphertext', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: OakSession
legion.mojom.mojom.OakSession = {};

legion.mojom.mojom.OakSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

legion.mojom.mojom.OakSessionRemote = class {
  static get $interfaceName() {
    return 'legion.mojom.OakSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      legion.mojom.mojom.OakSessionPendingReceiver,
      handle);
    this.$ = new legion.mojom.mojom.OakSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

legion.mojom.mojom.OakSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initiateHandshake() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      legion.mojom.mojom.OakSession_InitiateHandshake_ParamsSpec,
      legion.mojom.mojom.OakSession_InitiateHandshake_ResponseParamsSpec,
      []);
  }

  completeHandshake(response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      legion.mojom.mojom.OakSession_CompleteHandshake_ParamsSpec,
      legion.mojom.mojom.OakSession_CompleteHandshake_ResponseParamsSpec,
      [response]);
  }

  encrypt(input) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      legion.mojom.mojom.OakSession_Encrypt_ParamsSpec,
      legion.mojom.mojom.OakSession_Encrypt_ResponseParamsSpec,
      [input]);
  }

  decrypt(input) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      legion.mojom.mojom.OakSession_Decrypt_ParamsSpec,
      legion.mojom.mojom.OakSession_Decrypt_ResponseParamsSpec,
      [input]);
  }

};

legion.mojom.mojom.OakSession.getRemote = function() {
  let remote = new legion.mojom.mojom.OakSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'legion.mojom.OakSession',
    'context');
  return remote.$;
};

// ParamsSpec for InitiateHandshake
legion.mojom.mojom.OakSession_InitiateHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.InitiateHandshake_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

legion.mojom.mojom.OakSession_InitiateHandshake_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.InitiateHandshake_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: legion.mojom.HandshakeMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CompleteHandshake
legion.mojom.mojom.OakSession_CompleteHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.CompleteHandshake_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: legion.mojom.HandshakeMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

legion.mojom.mojom.OakSession_CompleteHandshake_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.CompleteHandshake_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Encrypt
legion.mojom.mojom.OakSession_Encrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Encrypt_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

legion.mojom.mojom.OakSession_Encrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Encrypt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Decrypt
legion.mojom.mojom.OakSession_Decrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Decrypt_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

legion.mojom.mojom.OakSession_Decrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Decrypt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
legion.mojom.mojom.OakSessionPtr = legion.mojom.mojom.OakSessionRemote;
legion.mojom.mojom.OakSessionRequest = legion.mojom.mojom.OakSessionPendingReceiver;

