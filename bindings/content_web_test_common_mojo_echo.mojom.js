// Auto-generated MojoJS binding
 // Source: chromium_src/content/web_test/common/mojo_echo.mojom
 // Module: content.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.content = mojo.internal.bindings.content || {};
mojo.internal.bindings.content.mojom = mojo.internal.bindings.content.mojom || {};

mojo.internal.bindings.content.mojom.TestUnionSpec = { $: {} };
mojo.internal.bindings.content.mojom.NestedUnionSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho = {};
mojo.internal.bindings.content.mojom.MojoEchoSpec = { $ : {} };
mojo.internal.bindings.content.mojom.MojoEcho.$interfaceName = 'content.mojom.MojoEcho';
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec = { $: {} };

// Union: TestUnion
mojo.internal.Union(
    mojo.internal.bindings.content.mojom.TestUnionSpec, 'content.mojom.TestUnion', {
      'arg_bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_int32_value': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'arg_string_value': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: NestedUnion
mojo.internal.Union(
    mojo.internal.bindings.content.mojom.NestedUnionSpec, 'content.mojom.NestedUnion', {
      'arg_int8_value': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
      'arg_union_value': {
        'ordinal': 1,
        'type': mojo.internal.bindings.content.mojom.TestUnionSpec.$,
        'nullable': false,
      },
    });

// Interface: MojoEcho
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromOptionalUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalUnion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsOptionalUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromNestedUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromNestedUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromNestedUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsNestedUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsNestedUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsNestedUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_Params', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('arg_test_union', 0, 0, mojo.internal.bindings.content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolArray_Params', [
      mojo.internal.StructField('arg_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolArray_ResponseParams', [
      mojo.internal.StructField('arg_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.content.mojom.MojoEchoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.MojoEchoRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MojoEcho';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.MojoEchoPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.MojoEchoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoBoolFromUnion(arg_test_union) {
    return this.$.echoBoolFromUnion(arg_test_union);
  }
  echoInt32FromUnion(arg_test_union) {
    return this.$.echoInt32FromUnion(arg_test_union);
  }
  echoStringFromUnion(arg_test_union) {
    return this.$.echoStringFromUnion(arg_test_union);
  }
  echoBoolAsUnion(arg_value) {
    return this.$.echoBoolAsUnion(arg_value);
  }
  echoInt32AsUnion(arg_value) {
    return this.$.echoInt32AsUnion(arg_value);
  }
  echoStringAsUnion(arg_value) {
    return this.$.echoStringAsUnion(arg_value);
  }
  echoNullFromOptionalUnion(arg_test_union) {
    return this.$.echoNullFromOptionalUnion(arg_test_union);
  }
  echoBoolFromOptionalUnion(arg_test_union) {
    return this.$.echoBoolFromOptionalUnion(arg_test_union);
  }
  echoInt32FromOptionalUnion(arg_test_union) {
    return this.$.echoInt32FromOptionalUnion(arg_test_union);
  }
  echoStringFromOptionalUnion(arg_test_union) {
    return this.$.echoStringFromOptionalUnion(arg_test_union);
  }
  echoNullAsOptionalUnion() {
    return this.$.echoNullAsOptionalUnion();
  }
  echoBoolAsOptionalUnion(arg_value) {
    return this.$.echoBoolAsOptionalUnion(arg_value);
  }
  echoInt32AsOptionalUnion(arg_value) {
    return this.$.echoInt32AsOptionalUnion(arg_value);
  }
  echoStringAsOptionalUnion(arg_value) {
    return this.$.echoStringAsOptionalUnion(arg_value);
  }
  echoInt8FromNestedUnion(arg_test_union) {
    return this.$.echoInt8FromNestedUnion(arg_test_union);
  }
  echoBoolFromNestedUnion(arg_test_union) {
    return this.$.echoBoolFromNestedUnion(arg_test_union);
  }
  echoStringFromNestedUnion(arg_test_union) {
    return this.$.echoStringFromNestedUnion(arg_test_union);
  }
  echoInt8AsNestedUnion(arg_value) {
    return this.$.echoInt8AsNestedUnion(arg_value);
  }
  echoBoolAsNestedUnion(arg_value) {
    return this.$.echoBoolAsNestedUnion(arg_value);
  }
  echoStringAsNestedUnion(arg_value) {
    return this.$.echoStringAsNestedUnion(arg_value);
  }
  echoNullFromOptionalNestedUnion(arg_test_union) {
    return this.$.echoNullFromOptionalNestedUnion(arg_test_union);
  }
  echoInt8FromOptionalNestedUnion(arg_test_union) {
    return this.$.echoInt8FromOptionalNestedUnion(arg_test_union);
  }
  echoBoolFromOptionalNestedUnion(arg_test_union) {
    return this.$.echoBoolFromOptionalNestedUnion(arg_test_union);
  }
  echoStringFromOptionalNestedUnion(arg_test_union) {
    return this.$.echoStringFromOptionalNestedUnion(arg_test_union);
  }
  echoNullAsOptionalNestedUnion() {
    return this.$.echoNullAsOptionalNestedUnion();
  }
  echoInt8AsOptionalNestedUnion(arg_value) {
    return this.$.echoInt8AsOptionalNestedUnion(arg_value);
  }
  echoBoolAsOptionalNestedUnion(arg_value) {
    return this.$.echoBoolAsOptionalNestedUnion(arg_value);
  }
  echoStringAsOptionalNestedUnion(arg_value) {
    return this.$.echoStringAsOptionalNestedUnion(arg_value);
  }
  echoBoolArray(arg_values) {
    return this.$.echoBoolArray(arg_values);
  }
};

mojo.internal.bindings.content.mojom.MojoEchoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('content.mojom.MojoEcho', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  echoBoolFromUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoInt32FromUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoStringFromUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoBoolAsUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoInt32AsUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoStringAsUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoNullFromOptionalUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoBoolFromOptionalUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoInt32FromOptionalUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoStringFromOptionalUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoNullAsOptionalUnion() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec,
      [],
      false);
  }

  echoBoolAsOptionalUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoInt32AsOptionalUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoStringAsOptionalUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoInt8FromNestedUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoBoolFromNestedUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoStringFromNestedUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoInt8AsNestedUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoBoolAsNestedUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoStringAsNestedUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoNullFromOptionalNestedUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoInt8FromOptionalNestedUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoBoolFromOptionalNestedUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoStringFromOptionalNestedUnion(arg_test_union) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec,
      [arg_test_union],
      false);
  }

  echoNullAsOptionalNestedUnion() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec,
      [],
      false);
  }

  echoInt8AsOptionalNestedUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoBoolAsOptionalNestedUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoStringAsOptionalNestedUnion(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec,
      [arg_value],
      false);
  }

  echoBoolArray(arg_values) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ParamsSpec,
      mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec,
      [arg_values],
      false);
  }

};

mojo.internal.bindings.content.mojom.MojoEcho.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.MojoEchoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MojoEcho',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.MojoEchoReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('content.mojom.MojoEcho', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EchoBoolFromUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolFromUnion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EchoInt32FromUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt32FromUnion (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EchoStringFromUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringFromUnion (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: EchoBoolAsUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolAsUnion (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: EchoInt32AsUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt32AsUnion (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EchoStringAsUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringAsUnion (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: EchoNullFromOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoNullFromOptionalUnion (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EchoBoolFromOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolFromOptionalUnion (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: EchoInt32FromOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt32FromOptionalUnion (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: EchoStringFromOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringFromOptionalUnion (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: EchoNullAsOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoNullAsOptionalUnion (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: EchoBoolAsOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolAsOptionalUnion (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: EchoInt32AsOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt32AsOptionalUnion (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: EchoStringAsOptionalUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringAsOptionalUnion (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: EchoInt8FromNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt8FromNestedUnion (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EchoBoolFromNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolFromNestedUnion (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: EchoStringFromNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringFromNestedUnion (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: EchoInt8AsNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt8AsNestedUnion (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: EchoBoolAsNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolAsNestedUnion (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: EchoStringAsNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringAsNestedUnion (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: EchoNullFromOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoNullFromOptionalNestedUnion (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: EchoInt8FromOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt8FromOptionalNestedUnion (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: EchoBoolFromOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolFromOptionalNestedUnion (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: EchoStringFromOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringFromOptionalNestedUnion (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: EchoNullAsOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoNullAsOptionalNestedUnion (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: EchoInt8AsOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoInt8AsOptionalNestedUnion (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: EchoBoolAsOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolAsOptionalNestedUnion (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: EchoStringAsOptionalNestedUnion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringAsOptionalNestedUnion (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: EchoBoolArray
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoBoolArray (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromUnion');
          const result = this.impl.echoBoolFromUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolFromUnion FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt32FromUnion');
          const result = this.impl.echoInt32FromUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt32FromUnion FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromUnion');
          const result = this.impl.echoStringFromUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringFromUnion FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsUnion');
          const result = this.impl.echoBoolAsUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolAsUnion FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt32AsUnion');
          const result = this.impl.echoInt32AsUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt32AsUnion FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsUnion');
          const result = this.impl.echoStringAsUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringAsUnion FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoNullFromOptionalUnion');
          const result = this.impl.echoNullFromOptionalUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoNullFromOptionalUnion FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromOptionalUnion');
          const result = this.impl.echoBoolFromOptionalUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolFromOptionalUnion FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt32FromOptionalUnion');
          const result = this.impl.echoInt32FromOptionalUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt32FromOptionalUnion FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromOptionalUnion');
          const result = this.impl.echoStringFromOptionalUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringFromOptionalUnion FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoNullAsOptionalUnion');
          const result = this.impl.echoNullAsOptionalUnion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoNullAsOptionalUnion FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsOptionalUnion');
          const result = this.impl.echoBoolAsOptionalUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolAsOptionalUnion FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt32AsOptionalUnion');
          const result = this.impl.echoInt32AsOptionalUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt32AsOptionalUnion FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsOptionalUnion');
          const result = this.impl.echoStringAsOptionalUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringAsOptionalUnion FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt8FromNestedUnion');
          const result = this.impl.echoInt8FromNestedUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt8FromNestedUnion FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromNestedUnion');
          const result = this.impl.echoBoolFromNestedUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolFromNestedUnion FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromNestedUnion');
          const result = this.impl.echoStringFromNestedUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringFromNestedUnion FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt8AsNestedUnion');
          const result = this.impl.echoInt8AsNestedUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt8AsNestedUnion FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsNestedUnion');
          const result = this.impl.echoBoolAsNestedUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolAsNestedUnion FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsNestedUnion');
          const result = this.impl.echoStringAsNestedUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringAsNestedUnion FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoNullFromOptionalNestedUnion');
          const result = this.impl.echoNullFromOptionalNestedUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoNullFromOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt8FromOptionalNestedUnion');
          const result = this.impl.echoInt8FromOptionalNestedUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt8FromOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromOptionalNestedUnion');
          const result = this.impl.echoBoolFromOptionalNestedUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolFromOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromOptionalNestedUnion');
          const result = this.impl.echoStringFromOptionalNestedUnion(params.arg_test_union);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringFromOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoNullAsOptionalNestedUnion');
          const result = this.impl.echoNullAsOptionalNestedUnion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoNullAsOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoInt8AsOptionalNestedUnion');
          const result = this.impl.echoInt8AsOptionalNestedUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoInt8AsOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsOptionalNestedUnion');
          const result = this.impl.echoBoolAsOptionalNestedUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolAsOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsOptionalNestedUnion');
          const result = this.impl.echoStringAsOptionalNestedUnion(params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoStringAsOptionalNestedUnion FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.echoBoolArray');
          const result = this.impl.echoBoolArray(params.arg_values);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EchoBoolArray FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.MojoEchoReceiver = mojo.internal.bindings.content.mojom.MojoEchoReceiver;

mojo.internal.bindings.content.mojom.MojoEchoPtr = mojo.internal.bindings.content.mojom.MojoEchoRemote;
mojo.internal.bindings.content.mojom.MojoEchoRequest = mojo.internal.bindings.content.mojom.MojoEchoPendingReceiver;

