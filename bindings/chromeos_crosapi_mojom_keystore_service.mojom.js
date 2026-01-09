// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/keystore_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: KeystoreType
crosapi.mojom.KeystoreType = {
  kUser: 0,
  kDevice: 1,
};

// Enum: KeystoreAlgorithmName
crosapi.mojom.KeystoreAlgorithmName = {
  kRsassaPkcs115: 0,
  kRsaOaep: 1,
  kEcdsa: 2,
};

// Enum: KeystoreKeyAttributeType
crosapi.mojom.KeystoreKeyAttributeType = {
  kPlatformKeysTag: 0,
};

// Enum: KeystoreSigningScheme
crosapi.mojom.KeystoreSigningScheme = {
  kRsassaPkcs1V15None: 0,
  kRsassaPkcs1V15Sha1: 1,
  kRsassaPkcs1V15Sha256: 2,
  kRsassaPkcs1V15Sha384: 3,
  kRsassaPkcs1V15Sha512: 4,
  kEcdsaSha1: 5,
  kEcdsaSha256: 6,
  kEcdsaSha384: 7,
  kEcdsaSha512: 8,
};

// Enum: KeyTag
crosapi.mojom.KeyTag = {
  kNoTags: 0,
  kCorporate: 1,
};

// Struct: KeystoreRsaParams
crosapi.mojom.KeystoreRsaParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreRsaParams',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeystoreEcdsaParams
crosapi.mojom.KeystoreEcdsaParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreEcdsaParams',
      packedSize: 16,
      fields: [
        { name: 'named_curve', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetPublicKeySuccessResult
crosapi.mojom.GetPublicKeySuccessResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GetPublicKeySuccessResult',
      packedSize: 24,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'algorithm_properties', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: KeystoreService
crosapi.mojom.KeystoreService = {};

crosapi.mojom.KeystoreServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.KeystoreServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.KeystoreService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.KeystoreServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.KeystoreServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.KeystoreServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.KeystoreService.getRemote = function() {
  let remote = new crosapi.mojom.KeystoreServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.KeystoreService',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.KeystoreServicePtr = crosapi.mojom.KeystoreServiceRemote;
crosapi.mojom.KeystoreServiceRequest = crosapi.mojom.KeystoreServicePendingReceiver;

