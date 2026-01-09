// Auto-generated MojoJS binding
// Source: chromium_src/components/legion/mojom/oak_session.mojom
// Module: legion.mojom

'use strict';

// Module namespace
var legion = legion || {};
legion.mojom = legion.mojom || {};


// Interface: OakSession
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
      legion.mojom.OakSession_InitiateHandshake_ParamsSpec.$,
      legion.mojom.OakSession_InitiateHandshake_ResponseParamsSpec.$,
      []);
  }

  completeHandshake(response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      legion.mojom.OakSession_CompleteHandshake_ParamsSpec.$,
      legion.mojom.OakSession_CompleteHandshake_ResponseParamsSpec.$,
      [response]);
  }

  encrypt(input) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      legion.mojom.OakSession_Encrypt_ParamsSpec.$,
      legion.mojom.OakSession_Encrypt_ResponseParamsSpec.$,
      [input]);
  }

  decrypt(input) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      legion.mojom.OakSession_Decrypt_ParamsSpec.$,
      legion.mojom.OakSession_Decrypt_ResponseParamsSpec.$,
      [input]);
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
}};

// ParamsSpec for InitiateHandshake
legion.mojom.OakSession_InitiateHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.InitiateHandshake_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

legion.mojom.OakSession_InitiateHandshake_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.InitiateHandshake_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CompleteHandshake
legion.mojom.OakSession_CompleteHandshake_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.CompleteHandshake_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

legion.mojom.OakSession_CompleteHandshake_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.CompleteHandshake_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Encrypt
legion.mojom.OakSession_Encrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Encrypt_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

legion.mojom.OakSession_Encrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Encrypt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Decrypt
legion.mojom.OakSession_Decrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Decrypt_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

legion.mojom.OakSession_Decrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion.mojom.OakSession.Decrypt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
legion.mojom.OakSessionPtr = legion.mojom.OakSessionRemote;
legion.mojom.OakSessionRequest = legion.mojom.OakSessionPendingReceiver;

