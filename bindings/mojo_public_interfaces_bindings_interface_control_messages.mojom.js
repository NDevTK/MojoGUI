// Auto-generated MojoJS binding
 // Source: chromium_src/mojo/public/interfaces/bindings/interface_control_messages.mojom
 // Module: mojo.interface_control

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
 

 mojo.internal.bindings.mojo = mojo.internal.bindings.mojo || {};
mojo.internal.bindings.mojo.interface_control = mojo.internal.bindings.mojo.interface_control || {};

mojo.internal.bindings.mojo.interface_control.RunInputSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.RunOutputSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.RunOrClosePipeInputSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.RunMessageParamsSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.RunResponseMessageParamsSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.QueryVersionSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.QueryVersionResultSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.FlushForTestingSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.RunOrClosePipeMessageParamsSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.RequireVersionSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.EnableIdleTrackingSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.MessageAckSpec = { $: {} };
mojo.internal.bindings.mojo.interface_control.NotifyIdleSpec = { $: {} };

mojo.internal.bindings.mojo.interface_control.kRunMessageId = 0xFFFFFFFF;

mojo.internal.bindings.mojo.interface_control.kRunOrClosePipeMessageId = 0xFFFFFFFE;

// Union: RunInput
mojo.internal.Union(
    mojo.internal.bindings.mojo.interface_control.RunInputSpec, 'mojo.interface_control.RunInput', {
      'arg_query_version': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.interface_control.QueryVersionSpec.$,
        'nullable': false,
      },
      'arg_flush_for_testing': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.interface_control.FlushForTestingSpec.$,
        'nullable': false,
      },
    });

// Union: RunOutput
mojo.internal.Union(
    mojo.internal.bindings.mojo.interface_control.RunOutputSpec, 'mojo.interface_control.RunOutput', {
      'arg_query_version_result': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.interface_control.QueryVersionResultSpec.$,
        'nullable': false,
      },
    });

// Union: RunOrClosePipeInput
mojo.internal.Union(
    mojo.internal.bindings.mojo.interface_control.RunOrClosePipeInputSpec, 'mojo.interface_control.RunOrClosePipeInput', {
      'arg_require_version': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.interface_control.RequireVersionSpec.$,
        'nullable': false,
      },
      'arg_enable_idle_tracking': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.interface_control.EnableIdleTrackingSpec.$,
        'nullable': false,
      },
      'arg_message_ack': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.interface_control.MessageAckSpec.$,
        'nullable': false,
      },
      'arg_notify_idle': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.interface_control.NotifyIdleSpec.$,
        'nullable': false,
      },
    });

// Struct: RunMessageParams
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.RunMessageParamsSpec, 'mojo.interface_control.RunMessageParams', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.mojo.interface_control.RunInputSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RunResponseMessageParams
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.RunResponseMessageParamsSpec, 'mojo.interface_control.RunResponseMessageParams', [
      mojo.internal.StructField('arg_output', 0, 0, mojo.internal.bindings.mojo.interface_control.RunOutputSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: QueryVersion
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.QueryVersionSpec, 'mojo.interface_control.QueryVersion', [
    ],
    [[0, 8]]);

// Struct: QueryVersionResult
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.QueryVersionResultSpec, 'mojo.interface_control.QueryVersionResult', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FlushForTesting
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.FlushForTestingSpec, 'mojo.interface_control.FlushForTesting', [
    ],
    [[0, 8]]);

// Struct: RunOrClosePipeMessageParams
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.RunOrClosePipeMessageParamsSpec, 'mojo.interface_control.RunOrClosePipeMessageParams', [
      mojo.internal.StructField('arg_input', 0, 0, mojo.internal.bindings.mojo.interface_control.RunOrClosePipeInputSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RequireVersion
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.RequireVersionSpec, 'mojo.interface_control.RequireVersion', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EnableIdleTracking
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.EnableIdleTrackingSpec, 'mojo.interface_control.EnableIdleTracking', [
      mojo.internal.StructField('arg_timeout_in_microseconds', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MessageAck
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.MessageAckSpec, 'mojo.interface_control.MessageAck', [
    ],
    [[0, 8]]);

// Struct: NotifyIdle
mojo.internal.Struct(
    mojo.internal.bindings.mojo.interface_control.NotifyIdleSpec, 'mojo.interface_control.NotifyIdle', [
    ],
    [[0, 8]]);
