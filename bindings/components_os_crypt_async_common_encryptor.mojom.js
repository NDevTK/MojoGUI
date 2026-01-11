// Auto-generated MojoJS binding
// Source: chromium_src/components/os_crypt/async/common/encryptor.mojom
// Module: os_crypt_async.mojom

// Module namespace
var os_crypt_async = os_crypt_async || {};
os_crypt_async.mojom = os_crypt_async.mojom || {};
var mojo_base = mojo_base || {};

os_crypt_async.mojom.KeySpec = { $: {} };
os_crypt_async.mojom.EncryptorSpec = { $: {} };

// Struct: Key
mojo.internal.Struct(
    os_crypt_async.mojom.KeySpec, 'os_crypt_async.mojom.Key', [
      mojo.internal.StructField('algorithm', 0, 0, os_crypt_async.mojom.AlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Encryptor
mojo.internal.Struct(
    os_crypt_async.mojom.EncryptorSpec, 'os_crypt_async.mojom.Encryptor', [
      mojo.internal.StructField('provider_for_encryption', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key_entries', 8, 0, mojo.internal.Map(mojo.internal.String, os_crypt_async.mojom.KeySpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);
