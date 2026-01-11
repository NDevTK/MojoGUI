// Auto-generated MojoJS binding
 // Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_internals_types.mojom
 // Module: storage.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.storage = mojo.internal.bindings.storage || {};
mojo.internal.bindings.storage.mojom = mojo.internal.bindings.storage.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.storage.mojom.IdbTransactionModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.storage.mojom.IdbTransactionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.storage.mojom.IdbOriginMetadataSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IdbStorageKeyMetadataSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IdbBucketMetadataSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IdbDatabaseMetadataSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IdbTransactionMetadataSpec = { $: {} };
mojo.internal.bindings.storage.mojom.IdbTransactionMetadataStateHistorySpec = { $: {} };

// Enum: IdbTransactionMode
mojo.internal.bindings.storage.mojom.IdbTransactionMode = {
  kReadOnly: 0,
  kReadWrite: 1,
  kVersionChange: 2,
};

// Enum: IdbTransactionState
mojo.internal.bindings.storage.mojom.IdbTransactionState = {
  kBlocked: 0,
  kRunning: 1,
  kStarted: 2,
  kCommitting: 3,
  kFinished: 4,
};

// Struct: IdbOriginMetadata
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IdbOriginMetadataSpec, 'storage.mojom.IdbOriginMetadata', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_keys', 8, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.IdbStorageKeyMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IdbStorageKeyMetadata
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IdbStorageKeyMetadataSpec, 'storage.mojom.IdbStorageKeyMetadata', [
      mojo.internal.StructField('arg_top_level_site', 0, 0, mojo.internal.bindings.network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_serialized_storage_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_buckets', 16, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.IdbBucketMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IdbBucketMetadata
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IdbBucketMetadataSpec, 'storage.mojom.IdbBucketMetadata', [
      mojo.internal.StructField('arg_bucket_locator', 0, 0, mojo.internal.bindings.storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_last_modified', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_paths', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_count', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_databases', 48, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.IdbDatabaseMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_clients', 56, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.BucketClientInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_delta_recording_start_ms', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: IdbDatabaseMetadata
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IdbDatabaseMetadataSpec, 'storage.mojom.IdbDatabaseMetadata', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_count', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active_open_delete', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pending_open_delete', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_transactions', 32, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.IdbTransactionMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IdbTransactionMetadata
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IdbTransactionMetadataSpec, 'storage.mojom.IdbTransactionMetadata', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.storage.mojom.IdbTransactionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 8, 0, mojo.internal.bindings.storage.mojom.IdbTransactionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tid', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_client_token', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_age', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_runtime', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tasks_scheduled', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tasks_completed', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scope', 64, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_state_history', 72, 0, mojo.internal.Array(mojo.internal.bindings.storage.mojom.IdbTransactionMetadataStateHistorySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: IdbTransactionMetadataStateHistory
mojo.internal.Struct(
    mojo.internal.bindings.storage.mojom.IdbTransactionMetadataStateHistorySpec, 'storage.mojom.IdbTransactionMetadataStateHistory', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.storage.mojom.IdbTransactionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);
