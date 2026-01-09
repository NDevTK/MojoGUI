// Auto-generated MojoJS binding
// Source: chromium_src/components/unexportable_keys/mojom/unexportable_key_service.mojom
// Module: unexportable_keys.mojom

'use strict';

// Module namespace
var unexportable_keys = unexportable_keys || {};
unexportable_keys.mojom = unexportable_keys.mojom || {};


// Enum: SignatureAlgorithm
unexportable_keys.mojom.SignatureAlgorithm = {
  RSA_PKCS1_SHA1: 0,
  RSA_PKCS1_SHA256: 1,
  ECDSA_SHA256: 2,
  RSA_PSS_SHA256: 3,
};

// Enum: ServiceError
unexportable_keys.mojom.ServiceError = {
  kCryptoApiFailed: 0,
  kKeyNotFound: 1,
  kKeyCollision: 2,
  kNoKeyProvider: 3,
  kAlgorithmNotSupported: 4,
  kKeyNotReady: 5,
  kVerifySignatureFailed: 6,
  kOperationNotSupported: 7,
};

// Enum: BackgroundTaskPriority
unexportable_keys.mojom.BackgroundTaskPriority = {
  kBestEffort: 0,
  kUserVisible: 1,
  kUserBlocking: 2,
};

// Interface: UnexportableKeyService
unexportable_keys.mojom.UnexportableKeyService = {};

unexportable_keys.mojom.UnexportableKeyServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys.mojom.UnexportableKeyServiceRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys.mojom.UnexportableKeyService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys.mojom.UnexportableKeyServicePendingReceiver,
      handle);
    this.$ = new unexportable_keys.mojom.UnexportableKeyServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unexportable_keys.mojom.UnexportableKeyServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generateSigningKey(acceptable_algorithms, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec,
      null,
      [acceptable_algorithms, priority]);
  }

  fromWrappedSigningKey(wrapped_key, priority) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec,
      null,
      [wrapped_key, priority]);
  }

  sign(key_id, data, priority) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec,
      null,
      [key_id, data, priority]);
  }

  getAllSigningKeysForGarbageCollection(priority) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec,
      null,
      [priority]);
  }

  deleteKey(key_id, priority) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec,
      unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec,
      [key_id, priority]);
  }

  deleteAllKeys(priority) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec,
      null,
      [priority]);
  }

};

unexportable_keys.mojom.UnexportableKeyService.getRemote = function() {
  let remote = new unexportable_keys.mojom.UnexportableKeyServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys.mojom.UnexportableKeyService',
    'context');
  return remote.$;
};

// ParamsSpec for GenerateSigningKey
unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys.mojom.UnexportableKeyService.GenerateSigningKey_Params',
      packedSize: 24,
      fields: [
        { name: 'acceptable_algorithms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FromWrappedSigningKey
unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys.mojom.UnexportableKeyService.FromWrappedSigningKey_Params',
      packedSize: 24,
      fields: [
        { name: 'wrapped_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Sign
unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys.mojom.UnexportableKeyService.Sign_Params',
      packedSize: 32,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'priority', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllSigningKeysForGarbageCollection
unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys.mojom.UnexportableKeyService.GetAllSigningKeysForGarbageCollection_Params',
      packedSize: 16,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteKey
unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys.mojom.UnexportableKeyService.DeleteKey_Params',
      packedSize: 24,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys.mojom.UnexportableKeyService.DeleteKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteAllKeys
unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unexportable_keys.mojom.UnexportableKeyService.DeleteAllKeys_Params',
      packedSize: 16,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
unexportable_keys.mojom.UnexportableKeyServicePtr = unexportable_keys.mojom.UnexportableKeyServiceRemote;
unexportable_keys.mojom.UnexportableKeyServiceRequest = unexportable_keys.mojom.UnexportableKeyServicePendingReceiver;

