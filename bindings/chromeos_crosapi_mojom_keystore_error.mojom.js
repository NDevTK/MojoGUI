// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/keystore_error.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.KeystoreErrorSpec = { $: mojo.internal.Enum() };

// Enum: KeystoreError
crosapi.mojom.KeystoreError = {
  kUnknown: 0,
  kAlgorithmNotSupported: 1,
  kAlgorithmNotPermittedByCertificate: 2,
  kCertificateNotFound: 3,
  kCertificateInvalid: 4,
  kInputTooLong: 5,
  kGrantKeyPermissionForExtension: 6,
  kInternal: 7,
  kKeyAttributeRetrievalFailed: 8,
  kKeyAttributeSettingFailed: 9,
  kKeyNotAllowedForOperation: 10,
  kKeyNotFound: 11,
  kShutDown: 12,
  kNetAddUserCertFailed: 13,
  kNetCertificateDateInvalid: 14,
  kNetCertificateInvalid: 15,
  kUnsupportedKeystoreType: 16,
  kUnsupportedAlgorithmType: 17,
  kUnsupportedKeyTag: 18,
  kMojoUnavailable: 19,
  kUnsupportedKeyType: 20,
};
