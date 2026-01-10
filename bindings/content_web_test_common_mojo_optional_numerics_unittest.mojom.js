// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/mojo_optional_numerics_unittest.mojom
// Module: content.optional_numerics_unittest.mojom

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
var content = content || {};
content.optional_numerics_unittest = content.optional_numerics_unittest || {};
content.optional_numerics_unittest.mojom = content.optional_numerics_unittest.mojom || {};

content.optional_numerics_unittest.mojom.RegularEnumSpec = { $: mojo.internal.Enum() };
content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec = { $: {} };
content.optional_numerics_unittest.mojom.VersionedStructV0Spec = { $: {} };
content.optional_numerics_unittest.mojom.VersionedStructV2Spec = { $: {} };
content.optional_numerics_unittest.mojom.Params = {};
content.optional_numerics_unittest.mojom.Params.$interfaceName = 'content.optional_numerics_unittest.mojom.Params';
content.optional_numerics_unittest.mojom.Params_SendNullBool_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullBool_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullFloat_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullFloat_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullDouble_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullDouble_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullEnum_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullEnum_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullBools_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullBools_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullEnums_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullEnums_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams = {};
content.optional_numerics_unittest.mojom.ResponseParams.$interfaceName = 'content.optional_numerics_unittest.mojom.ResponseParams';
content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV0 = {};
content.optional_numerics_unittest.mojom.InterfaceV0.$interfaceName = 'content.optional_numerics_unittest.mojom.InterfaceV0';
content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV2 = {};
content.optional_numerics_unittest.mojom.InterfaceV2.$interfaceName = 'content.optional_numerics_unittest.mojom.InterfaceV2';
content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ResponseParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ParamsSpec = { $: {} };
content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ResponseParamsSpec = { $: {} };

// Enum: RegularEnum
content.optional_numerics_unittest.mojom.RegularEnum = {
  kFoo: 1,
  kBar: 2,
};

// Struct: OptionalNumericsStruct
mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec, 'content.optional_numerics_unittest.mojom.OptionalNumericsStruct', [
      mojo.internal.StructField('optional_uint64_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint64_$flag', originalFieldName: 'optional_uint64' }),
      mojo.internal.StructField('optional_int64_$value', 8, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int64_$flag', originalFieldName: 'optional_int64' }),
      mojo.internal.StructField('optional_double_$value', 16, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_double_$flag', originalFieldName: 'optional_double' }),
      mojo.internal.StructField('optional_enum', 24, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('optional_uint32_$value', 32, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint32_$flag', originalFieldName: 'optional_uint32' }),
      mojo.internal.StructField('optional_int32_$value', 36, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int32_$flag', originalFieldName: 'optional_int32' }),
      mojo.internal.StructField('optional_float_$value', 40, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_float_$flag', originalFieldName: 'optional_float' }),
      mojo.internal.StructField('optional_uint16_$value', 44, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint16_$flag', originalFieldName: 'optional_uint16' }),
      mojo.internal.StructField('optional_int16_$value', 46, 0, mojo.internal.Int16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int16_$flag', originalFieldName: 'optional_int16' }),
      mojo.internal.StructField('optional_bool_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_bool_$value', originalFieldName: 'optional_bool' }),
      mojo.internal.StructField('optional_bool_$value', 48, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_bool_$flag', originalFieldName: 'optional_bool' }),
      mojo.internal.StructField('optional_uint8_$flag', 48, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint8_$value', originalFieldName: 'optional_uint8' }),
      mojo.internal.StructField('optional_uint8_$value', 49, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint8_$flag', originalFieldName: 'optional_uint8' }),
      mojo.internal.StructField('optional_int8_$flag', 50, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int8_$value', originalFieldName: 'optional_int8' }),
      mojo.internal.StructField('optional_int8_$value', 51, 0, mojo.internal.Int8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int8_$flag', originalFieldName: 'optional_int8' }),
      mojo.internal.StructField('optional_uint16_$flag', 52, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint16_$value', originalFieldName: 'optional_uint16' }),
      mojo.internal.StructField('optional_int16_$flag', 52, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int16_$value', originalFieldName: 'optional_int16' }),
      mojo.internal.StructField('optional_uint32_$flag', 52, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint32_$value', originalFieldName: 'optional_uint32' }),
      mojo.internal.StructField('optional_int32_$flag', 52, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int32_$value', originalFieldName: 'optional_int32' }),
      mojo.internal.StructField('optional_uint64_$flag', 52, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint64_$value', originalFieldName: 'optional_uint64' }),
      mojo.internal.StructField('optional_int64_$flag', 52, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int64_$value', originalFieldName: 'optional_int64' }),
      mojo.internal.StructField('optional_float_$flag', 52, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_float_$value', originalFieldName: 'optional_float' }),
      mojo.internal.StructField('optional_double_$flag', 52, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_double_$value', originalFieldName: 'optional_double' }),
    ],
    [[0, 64]]);

// Struct: VersionedStructV0
mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.VersionedStructV0Spec, 'content.optional_numerics_unittest.mojom.VersionedStructV0', [
    ],
    [[0, 8]]);

// Struct: VersionedStructV2
mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.VersionedStructV2Spec, 'content.optional_numerics_unittest.mojom.VersionedStructV2', [
      mojo.internal.StructField('uint64_value_$value', 0, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint64_value_$flag', originalFieldName: 'uint64_value' }),
      mojo.internal.StructField('int64_value_$value', 8, 0, mojo.internal.Int64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int64_value_$flag', originalFieldName: 'int64_value' }),
      mojo.internal.StructField('double_value_$value', 16, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'double_value_$flag', originalFieldName: 'double_value' }),
      mojo.internal.StructField('enum_value', 24, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('uint32_value_$value', 32, 0, mojo.internal.Uint32, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint32_value_$flag', originalFieldName: 'uint32_value' }),
      mojo.internal.StructField('int32_value_$value', 36, 0, mojo.internal.Int32, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int32_value_$flag', originalFieldName: 'int32_value' }),
      mojo.internal.StructField('float_value_$value', 40, 0, mojo.internal.Float, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'float_value_$flag', originalFieldName: 'float_value' }),
      mojo.internal.StructField('uint16_value_$value', 44, 0, mojo.internal.Uint16, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint16_value_$flag', originalFieldName: 'uint16_value' }),
      mojo.internal.StructField('int16_value_$value', 46, 0, mojo.internal.Int16, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int16_value_$flag', originalFieldName: 'int16_value' }),
      mojo.internal.StructField('bool_value_$flag', 48, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'bool_value_$value', originalFieldName: 'bool_value' }),
      mojo.internal.StructField('bool_value_$value', 48, 1, mojo.internal.Bool, false, false, 2, { isPrimary: false, linkedValueFieldName: 'bool_value_$flag', originalFieldName: 'bool_value' }),
      mojo.internal.StructField('uint8_value_$flag', 48, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint8_value_$value', originalFieldName: 'uint8_value' }),
      mojo.internal.StructField('uint8_value_$value', 49, 0, mojo.internal.Uint8, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint8_value_$flag', originalFieldName: 'uint8_value' }),
      mojo.internal.StructField('int8_value_$flag', 50, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int8_value_$value', originalFieldName: 'int8_value' }),
      mojo.internal.StructField('int8_value_$value', 51, 0, mojo.internal.Int8, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int8_value_$flag', originalFieldName: 'int8_value' }),
      mojo.internal.StructField('uint16_value_$flag', 52, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint16_value_$value', originalFieldName: 'uint16_value' }),
      mojo.internal.StructField('int16_value_$flag', 52, 1, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int16_value_$value', originalFieldName: 'int16_value' }),
      mojo.internal.StructField('uint32_value_$flag', 52, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint32_value_$value', originalFieldName: 'uint32_value' }),
      mojo.internal.StructField('int32_value_$flag', 52, 3, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int32_value_$value', originalFieldName: 'int32_value' }),
      mojo.internal.StructField('uint64_value_$flag', 52, 4, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint64_value_$value', originalFieldName: 'uint64_value' }),
      mojo.internal.StructField('int64_value_$flag', 52, 5, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int64_value_$value', originalFieldName: 'int64_value' }),
      mojo.internal.StructField('float_value_$flag', 52, 6, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'float_value_$value', originalFieldName: 'float_value' }),
      mojo.internal.StructField('double_value_$flag', 52, 7, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'double_value_$value', originalFieldName: 'double_value' }),
    ],
    [[0, 8], [2, 64]]);

// Interface: Params
mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullBool_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullBool_Params', [
      mojo.internal.StructField('optional_bool_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_bool_$value', originalFieldName: 'optional_bool' }),
      mojo.internal.StructField('optional_bool_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_bool_$flag', originalFieldName: 'optional_bool' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullBool_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullBool_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint8_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint8_Params', [
      mojo.internal.StructField('optional_uint8_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint8_$value', originalFieldName: 'optional_uint8' }),
      mojo.internal.StructField('optional_uint8_$value', 1, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint8_$flag', originalFieldName: 'optional_uint8' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint8_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt8_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt8_Params', [
      mojo.internal.StructField('optional_int8_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int8_$value', originalFieldName: 'optional_int8' }),
      mojo.internal.StructField('optional_int8_$value', 1, 0, mojo.internal.Int8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int8_$flag', originalFieldName: 'optional_int8' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt8_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint16_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint16_Params', [
      mojo.internal.StructField('optional_uint16_$value', 0, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint16_$flag', originalFieldName: 'optional_uint16' }),
      mojo.internal.StructField('optional_uint16_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint16_$value', originalFieldName: 'optional_uint16' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint16_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt16_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt16_Params', [
      mojo.internal.StructField('optional_int16_$value', 0, 0, mojo.internal.Int16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int16_$flag', originalFieldName: 'optional_int16' }),
      mojo.internal.StructField('optional_int16_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int16_$value', originalFieldName: 'optional_int16' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt16_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint32_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint32_Params', [
      mojo.internal.StructField('optional_uint32_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint32_$flag', originalFieldName: 'optional_uint32' }),
      mojo.internal.StructField('optional_uint32_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint32_$value', originalFieldName: 'optional_uint32' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint32_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt32_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt32_Params', [
      mojo.internal.StructField('optional_int32_$value', 0, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int32_$flag', originalFieldName: 'optional_int32' }),
      mojo.internal.StructField('optional_int32_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int32_$value', originalFieldName: 'optional_int32' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt32_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint64_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint64_Params', [
      mojo.internal.StructField('optional_uint64_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint64_$flag', originalFieldName: 'optional_uint64' }),
      mojo.internal.StructField('optional_uint64_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint64_$value', originalFieldName: 'optional_uint64' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint64_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt64_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt64_Params', [
      mojo.internal.StructField('optional_int64_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int64_$flag', originalFieldName: 'optional_int64' }),
      mojo.internal.StructField('optional_int64_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int64_$value', originalFieldName: 'optional_int64' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt64_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullFloat_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullFloat_Params', [
      mojo.internal.StructField('optional_float_$value', 0, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_float_$flag', originalFieldName: 'optional_float' }),
      mojo.internal.StructField('optional_float_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_float_$value', originalFieldName: 'optional_float' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullFloat_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullFloat_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullDouble_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullDouble_Params', [
      mojo.internal.StructField('optional_double_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_double_$flag', originalFieldName: 'optional_double' }),
      mojo.internal.StructField('optional_double_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_double_$value', originalFieldName: 'optional_double' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullDouble_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullDouble_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullEnum_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullEnum_Params', [
      mojo.internal.StructField('optional_enum', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullEnum_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullEnum_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullBools_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullBools_Params', [
      mojo.internal.StructField('optional_bools', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullBools_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullBools_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt16s_Params', [
      mojo.internal.StructField('optional_int16s', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint32s_Params', [
      mojo.internal.StructField('optional_uint32s', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullDoubles_Params', [
      mojo.internal.StructField('optional_doubles', 0, 0, mojo.internal.Array(mojo.internal.Double, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullEnums_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullEnums_Params', [
      mojo.internal.StructField('optional_enums', 0, 0, mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullEnums_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullEnums_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_Params', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_Params', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Double, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_Params', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalBool_Params', [
      mojo.internal.StructField('optional_bool_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_bool_$value', originalFieldName: 'optional_bool' }),
      mojo.internal.StructField('optional_bool_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_bool_$flag', originalFieldName: 'optional_bool' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_Params', [
      mojo.internal.StructField('optional_uint8_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint8_$value', originalFieldName: 'optional_uint8' }),
      mojo.internal.StructField('optional_uint8_$value', 1, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint8_$flag', originalFieldName: 'optional_uint8' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_Params', [
      mojo.internal.StructField('optional_int8_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int8_$value', originalFieldName: 'optional_int8' }),
      mojo.internal.StructField('optional_int8_$value', 1, 0, mojo.internal.Int8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int8_$flag', originalFieldName: 'optional_int8' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_Params', [
      mojo.internal.StructField('optional_uint16_$value', 0, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint16_$flag', originalFieldName: 'optional_uint16' }),
      mojo.internal.StructField('optional_uint16_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint16_$value', originalFieldName: 'optional_uint16' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_Params', [
      mojo.internal.StructField('optional_int16_$value', 0, 0, mojo.internal.Int16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int16_$flag', originalFieldName: 'optional_int16' }),
      mojo.internal.StructField('optional_int16_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int16_$value', originalFieldName: 'optional_int16' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_Params', [
      mojo.internal.StructField('optional_uint32_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint32_$flag', originalFieldName: 'optional_uint32' }),
      mojo.internal.StructField('optional_uint32_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint32_$value', originalFieldName: 'optional_uint32' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_Params', [
      mojo.internal.StructField('optional_int32_$value', 0, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int32_$flag', originalFieldName: 'optional_int32' }),
      mojo.internal.StructField('optional_int32_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int32_$value', originalFieldName: 'optional_int32' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_Params', [
      mojo.internal.StructField('optional_uint64_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_uint64_$flag', originalFieldName: 'optional_uint64' }),
      mojo.internal.StructField('optional_uint64_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_uint64_$value', originalFieldName: 'optional_uint64' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_Params', [
      mojo.internal.StructField('optional_int64_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_int64_$flag', originalFieldName: 'optional_int64' }),
      mojo.internal.StructField('optional_int64_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_int64_$value', originalFieldName: 'optional_int64' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_Params', [
      mojo.internal.StructField('optional_float_$value', 0, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_float_$flag', originalFieldName: 'optional_float' }),
      mojo.internal.StructField('optional_float_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_float_$value', originalFieldName: 'optional_float' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_Params', [
      mojo.internal.StructField('optional_double_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_double_$flag', originalFieldName: 'optional_double' }),
      mojo.internal.StructField('optional_double_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_double_$value', originalFieldName: 'optional_double' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_Params', [
      mojo.internal.StructField('optional_enum', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalBools_Params', [
      mojo.internal.StructField('optional_enums', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_Params', [
      mojo.internal.StructField('optional_int16s', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_Params', [
      mojo.internal.StructField('optional_uint32s', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_Params', [
      mojo.internal.StructField('optional_doubles', 0, 0, mojo.internal.Array(mojo.internal.Double, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_Params', [
      mojo.internal.StructField('optional_enums', 0, 0, mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_Params', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_Params', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Double, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.Double, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_Params', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Map(mojo.internal.Int32, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_Params', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_Params', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_Params', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ResponseParams', [
      mojo.internal.StructField('uint64_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('int64_value', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('double_value', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('enum_value', 24, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uint32_value', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('int32_value', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('float_value', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('uint16_value', 44, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('int16_value', 46, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('bool_value', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uint8_value', 49, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('int8_value', 50, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 64]]);

content.optional_numerics_unittest.mojom.ParamsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.mojom.ParamsRemote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.Params';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.mojom.ParamsPendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.mojom.ParamsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendNullBool(optional_bool) {
    return this.$.sendNullBool(optional_bool);
  }
  sendNullUint8(optional_uint8) {
    return this.$.sendNullUint8(optional_uint8);
  }
  sendNullInt8(optional_int8) {
    return this.$.sendNullInt8(optional_int8);
  }
  sendNullUint16(optional_uint16) {
    return this.$.sendNullUint16(optional_uint16);
  }
  sendNullInt16(optional_int16) {
    return this.$.sendNullInt16(optional_int16);
  }
  sendNullUint32(optional_uint32) {
    return this.$.sendNullUint32(optional_uint32);
  }
  sendNullInt32(optional_int32) {
    return this.$.sendNullInt32(optional_int32);
  }
  sendNullUint64(optional_uint64) {
    return this.$.sendNullUint64(optional_uint64);
  }
  sendNullInt64(optional_int64) {
    return this.$.sendNullInt64(optional_int64);
  }
  sendNullFloat(optional_float) {
    return this.$.sendNullFloat(optional_float);
  }
  sendNullDouble(optional_double) {
    return this.$.sendNullDouble(optional_double);
  }
  sendNullEnum(optional_enum) {
    return this.$.sendNullEnum(optional_enum);
  }
  sendNullBools(optional_bools) {
    return this.$.sendNullBools(optional_bools);
  }
  sendNullInt16s(optional_int16s) {
    return this.$.sendNullInt16s(optional_int16s);
  }
  sendNullUint32s(optional_uint32s) {
    return this.$.sendNullUint32s(optional_uint32s);
  }
  sendNullDoubles(optional_doubles) {
    return this.$.sendNullDoubles(optional_doubles);
  }
  sendNullEnums(optional_enums) {
    return this.$.sendNullEnums(optional_enums);
  }
  sendNullBoolMap(values) {
    return this.$.sendNullBoolMap(values);
  }
  sendNullDoubleMap(values) {
    return this.$.sendNullDoubleMap(values);
  }
  sendNullEnumMap(values) {
    return this.$.sendNullEnumMap(values);
  }
  sendOptionalBool(optional_bool) {
    return this.$.sendOptionalBool(optional_bool);
  }
  sendOptionalUint8(optional_uint8) {
    return this.$.sendOptionalUint8(optional_uint8);
  }
  sendOptionalInt8(optional_int8) {
    return this.$.sendOptionalInt8(optional_int8);
  }
  sendOptionalUint16(optional_uint16) {
    return this.$.sendOptionalUint16(optional_uint16);
  }
  sendOptionalInt16(optional_int16) {
    return this.$.sendOptionalInt16(optional_int16);
  }
  sendOptionalUint32(optional_uint32) {
    return this.$.sendOptionalUint32(optional_uint32);
  }
  sendOptionalInt32(optional_int32) {
    return this.$.sendOptionalInt32(optional_int32);
  }
  sendOptionalUint64(optional_uint64) {
    return this.$.sendOptionalUint64(optional_uint64);
  }
  sendOptionalInt64(optional_int64) {
    return this.$.sendOptionalInt64(optional_int64);
  }
  sendOptionalFloat(optional_float) {
    return this.$.sendOptionalFloat(optional_float);
  }
  sendOptionalDouble(optional_double) {
    return this.$.sendOptionalDouble(optional_double);
  }
  sendOptionalEnum(optional_enum) {
    return this.$.sendOptionalEnum(optional_enum);
  }
  sendOptionalBools(optional_enums) {
    return this.$.sendOptionalBools(optional_enums);
  }
  sendOptionalInt16s(optional_int16s) {
    return this.$.sendOptionalInt16s(optional_int16s);
  }
  sendOptionalUint32s(optional_uint32s) {
    return this.$.sendOptionalUint32s(optional_uint32s);
  }
  sendOptionalDoubles(optional_doubles) {
    return this.$.sendOptionalDoubles(optional_doubles);
  }
  sendOptionalEnums(optional_enums) {
    return this.$.sendOptionalEnums(optional_enums);
  }
  sendOptionalBoolMap(values) {
    return this.$.sendOptionalBoolMap(values);
  }
  sendOptionalDoubleMap(values) {
    return this.$.sendOptionalDoubleMap(values);
  }
  sendOptionalEnumMap(values) {
    return this.$.sendOptionalEnumMap(values);
  }
  sendNullStructWithOptionalNumerics(s) {
    return this.$.sendNullStructWithOptionalNumerics(s);
  }
  sendStructWithNullOptionalNumerics(s) {
    return this.$.sendStructWithNullOptionalNumerics(s);
  }
  sendStructWithOptionalNumerics(s) {
    return this.$.sendStructWithOptionalNumerics(s);
  }
};

content.optional_numerics_unittest.mojom.ParamsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Params', [
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

  sendNullBool(optional_bool) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullBool_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullBool_ResponseParamsSpec,
      [optional_bool],
      false);
  }

  sendNullUint8(optional_uint8) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullUint8_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullUint8_ResponseParamsSpec,
      [optional_uint8],
      false);
  }

  sendNullInt8(optional_int8) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullInt8_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullInt8_ResponseParamsSpec,
      [optional_int8],
      false);
  }

  sendNullUint16(optional_uint16) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullUint16_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullUint16_ResponseParamsSpec,
      [optional_uint16],
      false);
  }

  sendNullInt16(optional_int16) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullInt16_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullInt16_ResponseParamsSpec,
      [optional_int16],
      false);
  }

  sendNullUint32(optional_uint32) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullUint32_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullUint32_ResponseParamsSpec,
      [optional_uint32],
      false);
  }

  sendNullInt32(optional_int32) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullInt32_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullInt32_ResponseParamsSpec,
      [optional_int32],
      false);
  }

  sendNullUint64(optional_uint64) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullUint64_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullUint64_ResponseParamsSpec,
      [optional_uint64],
      false);
  }

  sendNullInt64(optional_int64) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullInt64_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullInt64_ResponseParamsSpec,
      [optional_int64],
      false);
  }

  sendNullFloat(optional_float) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullFloat_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullFloat_ResponseParamsSpec,
      [optional_float],
      false);
  }

  sendNullDouble(optional_double) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullDouble_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullDouble_ResponseParamsSpec,
      [optional_double],
      false);
  }

  sendNullEnum(optional_enum) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullEnum_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullEnum_ResponseParamsSpec,
      [optional_enum],
      false);
  }

  sendNullBools(optional_bools) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullBools_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullBools_ResponseParamsSpec,
      [optional_bools],
      false);
  }

  sendNullInt16s(optional_int16s) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ResponseParamsSpec,
      [optional_int16s],
      false);
  }

  sendNullUint32s(optional_uint32s) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ResponseParamsSpec,
      [optional_uint32s],
      false);
  }

  sendNullDoubles(optional_doubles) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ResponseParamsSpec,
      [optional_doubles],
      false);
  }

  sendNullEnums(optional_enums) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullEnums_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullEnums_ResponseParamsSpec,
      [optional_enums],
      false);
  }

  sendNullBoolMap(values) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ResponseParamsSpec,
      [values],
      false);
  }

  sendNullDoubleMap(values) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ResponseParamsSpec,
      [values],
      false);
  }

  sendNullEnumMap(values) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ResponseParamsSpec,
      [values],
      false);
  }

  sendOptionalBool(optional_bool) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ResponseParamsSpec,
      [optional_bool],
      false);
  }

  sendOptionalUint8(optional_uint8) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ResponseParamsSpec,
      [optional_uint8],
      false);
  }

  sendOptionalInt8(optional_int8) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ResponseParamsSpec,
      [optional_int8],
      false);
  }

  sendOptionalUint16(optional_uint16) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ResponseParamsSpec,
      [optional_uint16],
      false);
  }

  sendOptionalInt16(optional_int16) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ResponseParamsSpec,
      [optional_int16],
      false);
  }

  sendOptionalUint32(optional_uint32) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ResponseParamsSpec,
      [optional_uint32],
      false);
  }

  sendOptionalInt32(optional_int32) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ResponseParamsSpec,
      [optional_int32],
      false);
  }

  sendOptionalUint64(optional_uint64) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ResponseParamsSpec,
      [optional_uint64],
      false);
  }

  sendOptionalInt64(optional_int64) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ResponseParamsSpec,
      [optional_int64],
      false);
  }

  sendOptionalFloat(optional_float) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ResponseParamsSpec,
      [optional_float],
      false);
  }

  sendOptionalDouble(optional_double) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ResponseParamsSpec,
      [optional_double],
      false);
  }

  sendOptionalEnum(optional_enum) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ResponseParamsSpec,
      [optional_enum],
      false);
  }

  sendOptionalBools(optional_enums) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ResponseParamsSpec,
      [optional_enums],
      false);
  }

  sendOptionalInt16s(optional_int16s) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ResponseParamsSpec,
      [optional_int16s],
      false);
  }

  sendOptionalUint32s(optional_uint32s) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ResponseParamsSpec,
      [optional_uint32s],
      false);
  }

  sendOptionalDoubles(optional_doubles) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ResponseParamsSpec,
      [optional_doubles],
      false);
  }

  sendOptionalEnums(optional_enums) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ResponseParamsSpec,
      [optional_enums],
      false);
  }

  sendOptionalBoolMap(values) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ResponseParamsSpec,
      [values],
      false);
  }

  sendOptionalDoubleMap(values) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ResponseParamsSpec,
      [values],
      false);
  }

  sendOptionalEnumMap(values) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ResponseParamsSpec,
      [values],
      false);
  }

  sendNullStructWithOptionalNumerics(s) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ResponseParamsSpec,
      [s],
      false);
  }

  sendStructWithNullOptionalNumerics(s) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ResponseParamsSpec,
      [s],
      false);
  }

  sendStructWithOptionalNumerics(s) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ResponseParamsSpec,
      [s],
      false);
  }

};

content.optional_numerics_unittest.mojom.Params.getRemote = function() {
  let remote = new content.optional_numerics_unittest.mojom.ParamsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.Params',
    'context');
  return remote.$;
};

content.optional_numerics_unittest.mojom.ParamsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Params', [
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
        
        // Try Method 0: SendNullBool
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullBool_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullBool (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendNullUint8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullUint8 (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendNullInt8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullInt8 (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SendNullUint16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullUint16 (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SendNullInt16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullInt16 (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SendNullUint32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullUint32 (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SendNullInt32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullInt32 (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SendNullUint64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullUint64 (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SendNullInt64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullInt64 (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SendNullFloat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullFloat_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullFloat (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SendNullDouble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullDouble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullDouble (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SendNullEnum
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullEnum_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullEnum (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SendNullBools
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullBools_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullBools (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SendNullInt16s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullInt16s (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SendNullUint32s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullUint32s (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SendNullDoubles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullDoubles (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SendNullEnums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullEnums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullEnums (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SendNullBoolMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullBoolMap (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SendNullDoubleMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullDoubleMap (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SendNullEnumMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullEnumMap (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SendOptionalBool
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalBool (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: SendOptionalUint8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalUint8 (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SendOptionalInt8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalInt8 (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SendOptionalUint16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalUint16 (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: SendOptionalInt16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalInt16 (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: SendOptionalUint32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalUint32 (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: SendOptionalInt32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalInt32 (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: SendOptionalUint64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalUint64 (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: SendOptionalInt64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalInt64 (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SendOptionalFloat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalFloat (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: SendOptionalDouble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalDouble (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: SendOptionalEnum
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalEnum (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: SendOptionalBools
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalBools (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: SendOptionalInt16s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalInt16s (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: SendOptionalUint32s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalUint32s (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: SendOptionalDoubles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalDoubles (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: SendOptionalEnums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalEnums (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: SendOptionalBoolMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalBoolMap (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: SendOptionalDoubleMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalDoubleMap (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: SendOptionalEnumMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendOptionalEnumMap (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: SendNullStructWithOptionalNumerics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNullStructWithOptionalNumerics (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: SendStructWithNullOptionalNumerics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendStructWithNullOptionalNumerics (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: SendStructWithOptionalNumerics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendStructWithOptionalNumerics (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
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
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullBool_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullBool');
          const result = this.impl.sendNullBool(params.optional_bool);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullBool_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullUint8');
          const result = this.impl.sendNullUint8(params.optional_uint8);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullUint8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullInt8');
          const result = this.impl.sendNullInt8(params.optional_int8);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullInt8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullUint16');
          const result = this.impl.sendNullUint16(params.optional_uint16);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullUint16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullInt16');
          const result = this.impl.sendNullInt16(params.optional_int16);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullInt16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullUint32');
          const result = this.impl.sendNullUint32(params.optional_uint32);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullUint32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullInt32');
          const result = this.impl.sendNullInt32(params.optional_int32);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullInt32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullUint64');
          const result = this.impl.sendNullUint64(params.optional_uint64);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullUint64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullInt64');
          const result = this.impl.sendNullInt64(params.optional_int64);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullInt64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullFloat_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullFloat');
          const result = this.impl.sendNullFloat(params.optional_float);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullFloat_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullDouble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullDouble');
          const result = this.impl.sendNullDouble(params.optional_double);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullDouble_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullEnum_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullEnum');
          const result = this.impl.sendNullEnum(params.optional_enum);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullEnum_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullBools_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullBools');
          const result = this.impl.sendNullBools(params.optional_bools);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullBools_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullInt16s');
          const result = this.impl.sendNullInt16s(params.optional_int16s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullInt16s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullUint32s');
          const result = this.impl.sendNullUint32s(params.optional_uint32s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullUint32s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullDoubles');
          const result = this.impl.sendNullDoubles(params.optional_doubles);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullDoubles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullEnums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullEnums');
          const result = this.impl.sendNullEnums(params.optional_enums);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullEnums_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullBoolMap');
          const result = this.impl.sendNullBoolMap(params.values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullBoolMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullDoubleMap');
          const result = this.impl.sendNullDoubleMap(params.values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullDoubleMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullEnumMap');
          const result = this.impl.sendNullEnumMap(params.values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullEnumMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalBool');
          const result = this.impl.sendOptionalBool(params.optional_bool);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalBool_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalUint8');
          const result = this.impl.sendOptionalUint8(params.optional_uint8);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalUint8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalInt8');
          const result = this.impl.sendOptionalInt8(params.optional_int8);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalInt8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalUint16');
          const result = this.impl.sendOptionalUint16(params.optional_uint16);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalUint16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalInt16');
          const result = this.impl.sendOptionalInt16(params.optional_int16);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalInt16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalUint32');
          const result = this.impl.sendOptionalUint32(params.optional_uint32);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalUint32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalInt32');
          const result = this.impl.sendOptionalInt32(params.optional_int32);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalInt32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalUint64');
          const result = this.impl.sendOptionalUint64(params.optional_uint64);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalUint64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalInt64');
          const result = this.impl.sendOptionalInt64(params.optional_int64);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalInt64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalFloat');
          const result = this.impl.sendOptionalFloat(params.optional_float);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalFloat_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalDouble');
          const result = this.impl.sendOptionalDouble(params.optional_double);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalDouble_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalEnum');
          const result = this.impl.sendOptionalEnum(params.optional_enum);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalEnum_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalBools');
          const result = this.impl.sendOptionalBools(params.optional_enums);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalBools_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalInt16s');
          const result = this.impl.sendOptionalInt16s(params.optional_int16s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalInt16s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalUint32s');
          const result = this.impl.sendOptionalUint32s(params.optional_uint32s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalUint32s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalDoubles');
          const result = this.impl.sendOptionalDoubles(params.optional_doubles);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalDoubles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalEnums');
          const result = this.impl.sendOptionalEnums(params.optional_enums);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalEnums_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalBoolMap');
          const result = this.impl.sendOptionalBoolMap(params.values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalBoolMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalDoubleMap');
          const result = this.impl.sendOptionalDoubleMap(params.values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalDoubleMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendOptionalEnumMap');
          const result = this.impl.sendOptionalEnumMap(params.values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendOptionalEnumMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendNullStructWithOptionalNumerics');
          const result = this.impl.sendNullStructWithOptionalNumerics(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendNullStructWithOptionalNumerics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendStructWithNullOptionalNumerics');
          const result = this.impl.sendStructWithNullOptionalNumerics(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendStructWithNullOptionalNumerics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendStructWithOptionalNumerics');
          const result = this.impl.sendStructWithOptionalNumerics(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.Params_SendStructWithOptionalNumerics_ResponseParamsSpec);
               responder(response);
            });
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

content.optional_numerics_unittest.mojom.ParamsReceiver = content.optional_numerics_unittest.mojom.ParamsReceiver;

content.optional_numerics_unittest.mojom.ParamsPtr = content.optional_numerics_unittest.mojom.ParamsRemote;
content.optional_numerics_unittest.mojom.ParamsRequest = content.optional_numerics_unittest.mojom.ParamsPendingReceiver;


// Interface: ResponseParams
mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ResponseParams', [
      mojo.internal.StructField('optional_value_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ResponseParams', [
      mojo.internal.StructField('optional_value_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$value', 1, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ResponseParams', [
      mojo.internal.StructField('optional_value_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$value', 1, 0, mojo.internal.Int8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Int16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ResponseParams', [
      mojo.internal.StructField('optional_value', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Double, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Map(mojo.internal.Int16, mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Map(mojo.internal.Int16, mojo.internal.Int32, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Map(mojo.internal.Int16, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ResponseParams', [
      mojo.internal.StructField('optional_value_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ResponseParams', [
      mojo.internal.StructField('optional_value_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$value', 1, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ResponseParams', [
      mojo.internal.StructField('optional_value_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$value', 1, 0, mojo.internal.Int8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Int16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 2, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ResponseParams', [
      mojo.internal.StructField('optional_value_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' }),
      mojo.internal.StructField('optional_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_Params', [
      mojo.internal.StructField('value', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ResponseParams', [
      mojo.internal.StructField('optional_value', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Int16, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(mojo.internal.Double, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_Params', [
      mojo.internal.StructField('value', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('value', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Map(mojo.internal.Int16, mojo.internal.Bool, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('key', 4, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Map(mojo.internal.Int16, mojo.internal.Float, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_Params', [
      mojo.internal.StructField('value', 0, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ResponseParams', [
      mojo.internal.StructField('optional_values', 0, 0, mojo.internal.Map(mojo.internal.Int16, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ResponseParams', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ResponseParams', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_Params', [
      mojo.internal.StructField('uint64_value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('int64_value', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('double_value', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('enum_value', 24, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uint32_value', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('int32_value', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('float_value', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('uint16_value', 44, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('int16_value', 46, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('bool_value', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uint8_value', 49, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('int8_value', 50, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ResponseParams', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.optional_numerics_unittest.mojom.ResponseParamsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.mojom.ResponseParamsRemote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.ResponseParams';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.mojom.ResponseParamsPendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.mojom.ResponseParamsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNullBool() {
    return this.$.getNullBool();
  }
  getNullUint8() {
    return this.$.getNullUint8();
  }
  getNullInt8() {
    return this.$.getNullInt8();
  }
  getNullUint16() {
    return this.$.getNullUint16();
  }
  getNullInt16() {
    return this.$.getNullInt16();
  }
  getNullUint32() {
    return this.$.getNullUint32();
  }
  getNullInt32() {
    return this.$.getNullInt32();
  }
  getNullUint64() {
    return this.$.getNullUint64();
  }
  getNullInt64() {
    return this.$.getNullInt64();
  }
  getNullFloat() {
    return this.$.getNullFloat();
  }
  getNullDouble() {
    return this.$.getNullDouble();
  }
  getNullEnum() {
    return this.$.getNullEnum();
  }
  getNullBools() {
    return this.$.getNullBools();
  }
  getNullInt16s() {
    return this.$.getNullInt16s();
  }
  getNullUint32s() {
    return this.$.getNullUint32s();
  }
  getNullDoubles() {
    return this.$.getNullDoubles();
  }
  getNullEnums() {
    return this.$.getNullEnums();
  }
  getNullBoolMap() {
    return this.$.getNullBoolMap();
  }
  getNullInt32Map() {
    return this.$.getNullInt32Map();
  }
  getNullEnumMap() {
    return this.$.getNullEnumMap();
  }
  getOptionalBool(value) {
    return this.$.getOptionalBool(value);
  }
  getOptionalUint8(value) {
    return this.$.getOptionalUint8(value);
  }
  getOptionalInt8(value) {
    return this.$.getOptionalInt8(value);
  }
  getOptionalUint16(value) {
    return this.$.getOptionalUint16(value);
  }
  getOptionalInt16(value) {
    return this.$.getOptionalInt16(value);
  }
  getOptionalUint32(value) {
    return this.$.getOptionalUint32(value);
  }
  getOptionalInt32(value) {
    return this.$.getOptionalInt32(value);
  }
  getOptionalUint64(value) {
    return this.$.getOptionalUint64(value);
  }
  getOptionalInt64(value) {
    return this.$.getOptionalInt64(value);
  }
  getOptionalFloat(value) {
    return this.$.getOptionalFloat(value);
  }
  getOptionalDouble(value) {
    return this.$.getOptionalDouble(value);
  }
  getOptionalEnum(value) {
    return this.$.getOptionalEnum(value);
  }
  getOptionalBools(value) {
    return this.$.getOptionalBools(value);
  }
  getOptionalInt16s(value) {
    return this.$.getOptionalInt16s(value);
  }
  getOptionalUint32s(value) {
    return this.$.getOptionalUint32s(value);
  }
  getOptionalDoubles(value) {
    return this.$.getOptionalDoubles(value);
  }
  getOptionalEnums(value) {
    return this.$.getOptionalEnums(value);
  }
  getOptionalBoolMap(key, value) {
    return this.$.getOptionalBoolMap(key, value);
  }
  getOptionalFloatMap(key, value) {
    return this.$.getOptionalFloatMap(key, value);
  }
  getOptionalEnumMap(key, value) {
    return this.$.getOptionalEnumMap(key, value);
  }
  getNullStructWithOptionalNumerics() {
    return this.$.getNullStructWithOptionalNumerics();
  }
  getStructWithNullOptionalNumerics() {
    return this.$.getStructWithNullOptionalNumerics();
  }
  getStructWithOptionalNumerics(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value) {
    return this.$.getStructWithOptionalNumerics(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value);
  }
};

content.optional_numerics_unittest.mojom.ResponseParamsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResponseParams', [
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

  getNullBool() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ResponseParamsSpec,
      [],
      false);
  }

  getNullUint8() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ResponseParamsSpec,
      [],
      false);
  }

  getNullInt8() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ResponseParamsSpec,
      [],
      false);
  }

  getNullUint16() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ResponseParamsSpec,
      [],
      false);
  }

  getNullInt16() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ResponseParamsSpec,
      [],
      false);
  }

  getNullUint32() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ResponseParamsSpec,
      [],
      false);
  }

  getNullInt32() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ResponseParamsSpec,
      [],
      false);
  }

  getNullUint64() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ResponseParamsSpec,
      [],
      false);
  }

  getNullInt64() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ResponseParamsSpec,
      [],
      false);
  }

  getNullFloat() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ResponseParamsSpec,
      [],
      false);
  }

  getNullDouble() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ResponseParamsSpec,
      [],
      false);
  }

  getNullEnum() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ResponseParamsSpec,
      [],
      false);
  }

  getNullBools() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ResponseParamsSpec,
      [],
      false);
  }

  getNullInt16s() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ResponseParamsSpec,
      [],
      false);
  }

  getNullUint32s() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ResponseParamsSpec,
      [],
      false);
  }

  getNullDoubles() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ResponseParamsSpec,
      [],
      false);
  }

  getNullEnums() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ResponseParamsSpec,
      [],
      false);
  }

  getNullBoolMap() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ResponseParamsSpec,
      [],
      false);
  }

  getNullInt32Map() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ResponseParamsSpec,
      [],
      false);
  }

  getNullEnumMap() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ResponseParamsSpec,
      [],
      false);
  }

  getOptionalBool(value) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalUint8(value) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalInt8(value) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalUint16(value) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalInt16(value) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalUint32(value) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalInt32(value) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalUint64(value) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalInt64(value) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalFloat(value) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalDouble(value) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalEnum(value) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalBools(value) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalInt16s(value) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalUint32s(value) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalDoubles(value) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalEnums(value) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ResponseParamsSpec,
      [value],
      false);
  }

  getOptionalBoolMap(key, value) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ResponseParamsSpec,
      [key, value],
      false);
  }

  getOptionalFloatMap(key, value) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ResponseParamsSpec,
      [key, value],
      false);
  }

  getOptionalEnumMap(key, value) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ResponseParamsSpec,
      [key, value],
      false);
  }

  getNullStructWithOptionalNumerics() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ResponseParamsSpec,
      [],
      false);
  }

  getStructWithNullOptionalNumerics() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ResponseParamsSpec,
      [],
      false);
  }

  getStructWithOptionalNumerics(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ResponseParamsSpec,
      [bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value],
      false);
  }

};

content.optional_numerics_unittest.mojom.ResponseParams.getRemote = function() {
  let remote = new content.optional_numerics_unittest.mojom.ResponseParamsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.ResponseParams',
    'context');
  return remote.$;
};

content.optional_numerics_unittest.mojom.ResponseParamsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResponseParams', [
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
        
        // Try Method 0: GetNullBool
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullBool (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetNullUint8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullUint8 (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetNullInt8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullInt8 (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetNullUint16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullUint16 (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetNullInt16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullInt16 (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetNullUint32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullUint32 (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetNullInt32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullInt32 (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetNullUint64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullUint64 (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetNullInt64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullInt64 (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetNullFloat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullFloat (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetNullDouble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullDouble (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetNullEnum
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullEnum (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetNullBools
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullBools (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetNullInt16s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullInt16s (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetNullUint32s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullUint32s (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetNullDoubles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullDoubles (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: GetNullEnums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullEnums (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: GetNullBoolMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullBoolMap (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: GetNullInt32Map
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullInt32Map (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: GetNullEnumMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullEnumMap (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: GetOptionalBool
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalBool (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: GetOptionalUint8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalUint8 (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: GetOptionalInt8
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalInt8 (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: GetOptionalUint16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalUint16 (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: GetOptionalInt16
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalInt16 (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: GetOptionalUint32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalUint32 (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: GetOptionalInt32
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalInt32 (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GetOptionalUint64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalUint64 (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: GetOptionalInt64
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalInt64 (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: GetOptionalFloat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalFloat (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: GetOptionalDouble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalDouble (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: GetOptionalEnum
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalEnum (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: GetOptionalBools
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalBools (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: GetOptionalInt16s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalInt16s (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: GetOptionalUint32s
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalUint32s (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: GetOptionalDoubles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalDoubles (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: GetOptionalEnums
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalEnums (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: GetOptionalBoolMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalBoolMap (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: GetOptionalFloatMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalFloatMap (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: GetOptionalEnumMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionalEnumMap (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: GetNullStructWithOptionalNumerics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNullStructWithOptionalNumerics (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: GetStructWithNullOptionalNumerics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStructWithNullOptionalNumerics (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: GetStructWithOptionalNumerics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStructWithOptionalNumerics (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
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
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullBool');
          const result = this.impl.getNullBool();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullBool_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullUint8');
          const result = this.impl.getNullUint8();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullInt8');
          const result = this.impl.getNullInt8();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullUint16');
          const result = this.impl.getNullUint16();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullInt16');
          const result = this.impl.getNullInt16();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullUint32');
          const result = this.impl.getNullUint32();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullInt32');
          const result = this.impl.getNullInt32();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullUint64');
          const result = this.impl.getNullUint64();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullInt64');
          const result = this.impl.getNullInt64();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullFloat');
          const result = this.impl.getNullFloat();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullFloat_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullDouble');
          const result = this.impl.getNullDouble();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullDouble_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullEnum');
          const result = this.impl.getNullEnum();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnum_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullBools');
          const result = this.impl.getNullBools();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullBools_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullInt16s');
          const result = this.impl.getNullInt16s();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt16s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullUint32s');
          const result = this.impl.getNullUint32s();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullUint32s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullDoubles');
          const result = this.impl.getNullDoubles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullDoubles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullEnums');
          const result = this.impl.getNullEnums();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnums_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullBoolMap');
          const result = this.impl.getNullBoolMap();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullBoolMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullInt32Map');
          const result = this.impl.getNullInt32Map();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullInt32Map_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullEnumMap');
          const result = this.impl.getNullEnumMap();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullEnumMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalBool');
          const result = this.impl.getOptionalBool(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBool_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalUint8');
          const result = this.impl.getOptionalUint8(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalInt8');
          const result = this.impl.getOptionalInt8(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt8_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalUint16');
          const result = this.impl.getOptionalUint16(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalInt16');
          const result = this.impl.getOptionalInt16(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalUint32');
          const result = this.impl.getOptionalUint32(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalInt32');
          const result = this.impl.getOptionalInt32(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt32_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalUint64');
          const result = this.impl.getOptionalUint64(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalInt64');
          const result = this.impl.getOptionalInt64(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt64_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalFloat');
          const result = this.impl.getOptionalFloat(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloat_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalDouble');
          const result = this.impl.getOptionalDouble(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDouble_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalEnum');
          const result = this.impl.getOptionalEnum(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnum_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalBools');
          const result = this.impl.getOptionalBools(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBools_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalInt16s');
          const result = this.impl.getOptionalInt16s(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalInt16s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalUint32s');
          const result = this.impl.getOptionalUint32s(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalUint32s_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalDoubles');
          const result = this.impl.getOptionalDoubles(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalDoubles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalEnums');
          const result = this.impl.getOptionalEnums(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnums_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalBoolMap');
          const result = this.impl.getOptionalBoolMap(params.key, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalBoolMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalFloatMap');
          const result = this.impl.getOptionalFloatMap(params.key, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalFloatMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionalEnumMap');
          const result = this.impl.getOptionalEnumMap(params.key, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetOptionalEnumMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNullStructWithOptionalNumerics');
          const result = this.impl.getNullStructWithOptionalNumerics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStructWithNullOptionalNumerics');
          const result = this.impl.getStructWithNullOptionalNumerics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStructWithOptionalNumerics');
          const result = this.impl.getStructWithOptionalNumerics(params.bool_value, params.uint8_value, params.int8_value, params.uint16_value, params.int16_value, params.uint32_value, params.int32_value, params.uint64_value, params.int64_value, params.float_value, params.double_value, params.enum_value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.ResponseParams_GetStructWithOptionalNumerics_ResponseParamsSpec);
               responder(response);
            });
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

content.optional_numerics_unittest.mojom.ResponseParamsReceiver = content.optional_numerics_unittest.mojom.ResponseParamsReceiver;

content.optional_numerics_unittest.mojom.ResponseParamsPtr = content.optional_numerics_unittest.mojom.ResponseParamsRemote;
content.optional_numerics_unittest.mojom.ResponseParamsRequest = content.optional_numerics_unittest.mojom.ResponseParamsPendingReceiver;


// Interface: InterfaceV0
mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_Params', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.VersionedStructV0Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ResponseParams', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.VersionedStructV0Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.optional_numerics_unittest.mojom.InterfaceV0PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.mojom.InterfaceV0Remote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.InterfaceV0';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.mojom.InterfaceV0PendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.mojom.InterfaceV0RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  methodWithVersionedParams() {
    return this.$.methodWithVersionedParams();
  }
  methodWithVersionedStruct(s) {
    return this.$.methodWithVersionedStruct(s);
  }
};

content.optional_numerics_unittest.mojom.InterfaceV0RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InterfaceV0', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  methodWithVersionedParams() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ParamsSpec,
      content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ResponseParamsSpec,
      [],
      false);
  }

  methodWithVersionedStruct(s) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ParamsSpec,
      content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ResponseParamsSpec,
      [s],
      false);
  }

};

content.optional_numerics_unittest.mojom.InterfaceV0.getRemote = function() {
  let remote = new content.optional_numerics_unittest.mojom.InterfaceV0Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.InterfaceV0',
    'context');
  return remote.$;
};

content.optional_numerics_unittest.mojom.InterfaceV0Receiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InterfaceV0', [
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: MethodWithVersionedParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MethodWithVersionedParams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MethodWithVersionedStruct
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MethodWithVersionedStruct (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.methodWithVersionedParams');
          const result = this.impl.methodWithVersionedParams();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.methodWithVersionedStruct');
          const result = this.impl.methodWithVersionedStruct(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.InterfaceV0_MethodWithVersionedStruct_ResponseParamsSpec);
               responder(response);
            });
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

content.optional_numerics_unittest.mojom.InterfaceV0Receiver = content.optional_numerics_unittest.mojom.InterfaceV0Receiver;

content.optional_numerics_unittest.mojom.InterfaceV0Ptr = content.optional_numerics_unittest.mojom.InterfaceV0Remote;
content.optional_numerics_unittest.mojom.InterfaceV0Request = content.optional_numerics_unittest.mojom.InterfaceV0PendingReceiver;


// Interface: InterfaceV2
mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_Params', [
      mojo.internal.StructField('uint64_value_$value', 0, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint64_value_$flag', originalFieldName: 'uint64_value' }),
      mojo.internal.StructField('int64_value_$value', 8, 0, mojo.internal.Int64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int64_value_$flag', originalFieldName: 'int64_value' }),
      mojo.internal.StructField('double_value_$value', 16, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'double_value_$flag', originalFieldName: 'double_value' }),
      mojo.internal.StructField('enum_value', 24, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('uint32_value_$value', 32, 0, mojo.internal.Uint32, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint32_value_$flag', originalFieldName: 'uint32_value' }),
      mojo.internal.StructField('int32_value_$value', 36, 0, mojo.internal.Int32, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int32_value_$flag', originalFieldName: 'int32_value' }),
      mojo.internal.StructField('float_value_$value', 40, 0, mojo.internal.Float, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'float_value_$flag', originalFieldName: 'float_value' }),
      mojo.internal.StructField('uint16_value_$value', 44, 0, mojo.internal.Uint16, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint16_value_$flag', originalFieldName: 'uint16_value' }),
      mojo.internal.StructField('int16_value_$value', 46, 0, mojo.internal.Int16, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int16_value_$flag', originalFieldName: 'int16_value' }),
      mojo.internal.StructField('bool_value_$flag', 48, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'bool_value_$value', originalFieldName: 'bool_value' }),
      mojo.internal.StructField('bool_value_$value', 48, 1, mojo.internal.Bool, false, false, 2, { isPrimary: false, linkedValueFieldName: 'bool_value_$flag', originalFieldName: 'bool_value' }),
      mojo.internal.StructField('uint8_value_$flag', 48, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint8_value_$value', originalFieldName: 'uint8_value' }),
      mojo.internal.StructField('uint8_value_$value', 49, 0, mojo.internal.Uint8, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint8_value_$flag', originalFieldName: 'uint8_value' }),
      mojo.internal.StructField('int8_value_$flag', 50, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int8_value_$value', originalFieldName: 'int8_value' }),
      mojo.internal.StructField('int8_value_$value', 51, 0, mojo.internal.Int8, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int8_value_$flag', originalFieldName: 'int8_value' }),
      mojo.internal.StructField('uint16_value_$flag', 52, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint16_value_$value', originalFieldName: 'uint16_value' }),
      mojo.internal.StructField('int16_value_$flag', 52, 1, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int16_value_$value', originalFieldName: 'int16_value' }),
      mojo.internal.StructField('uint32_value_$flag', 52, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint32_value_$value', originalFieldName: 'uint32_value' }),
      mojo.internal.StructField('int32_value_$flag', 52, 3, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int32_value_$value', originalFieldName: 'int32_value' }),
      mojo.internal.StructField('uint64_value_$flag', 52, 4, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint64_value_$value', originalFieldName: 'uint64_value' }),
      mojo.internal.StructField('int64_value_$flag', 52, 5, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int64_value_$value', originalFieldName: 'int64_value' }),
      mojo.internal.StructField('float_value_$flag', 52, 6, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'float_value_$value', originalFieldName: 'float_value' }),
      mojo.internal.StructField('double_value_$flag', 52, 7, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'double_value_$value', originalFieldName: 'double_value' }),
    ],
    [[0, 8], [2, 64]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ResponseParams', [
      mojo.internal.StructField('uint64_value_$value', 0, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint64_value_$flag', originalFieldName: 'uint64_value' }),
      mojo.internal.StructField('int64_value_$value', 8, 0, mojo.internal.Int64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int64_value_$flag', originalFieldName: 'int64_value' }),
      mojo.internal.StructField('double_value_$value', 16, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'double_value_$flag', originalFieldName: 'double_value' }),
      mojo.internal.StructField('enum_value', 24, 0, content.optional_numerics_unittest.mojom.RegularEnumSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('uint32_value_$value', 32, 0, mojo.internal.Uint32, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint32_value_$flag', originalFieldName: 'uint32_value' }),
      mojo.internal.StructField('int32_value_$value', 36, 0, mojo.internal.Int32, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int32_value_$flag', originalFieldName: 'int32_value' }),
      mojo.internal.StructField('float_value_$value', 40, 0, mojo.internal.Float, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'float_value_$flag', originalFieldName: 'float_value' }),
      mojo.internal.StructField('uint16_value_$value', 44, 0, mojo.internal.Uint16, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint16_value_$flag', originalFieldName: 'uint16_value' }),
      mojo.internal.StructField('int16_value_$value', 46, 0, mojo.internal.Int16, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int16_value_$flag', originalFieldName: 'int16_value' }),
      mojo.internal.StructField('bool_value_$flag', 48, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'bool_value_$value', originalFieldName: 'bool_value' }),
      mojo.internal.StructField('bool_value_$value', 48, 1, mojo.internal.Bool, false, false, 2, { isPrimary: false, linkedValueFieldName: 'bool_value_$flag', originalFieldName: 'bool_value' }),
      mojo.internal.StructField('uint8_value_$flag', 48, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint8_value_$value', originalFieldName: 'uint8_value' }),
      mojo.internal.StructField('uint8_value_$value', 49, 0, mojo.internal.Uint8, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'uint8_value_$flag', originalFieldName: 'uint8_value' }),
      mojo.internal.StructField('int8_value_$flag', 50, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int8_value_$value', originalFieldName: 'int8_value' }),
      mojo.internal.StructField('int8_value_$value', 51, 0, mojo.internal.Int8, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'int8_value_$flag', originalFieldName: 'int8_value' }),
      mojo.internal.StructField('uint16_value_$flag', 52, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint16_value_$value', originalFieldName: 'uint16_value' }),
      mojo.internal.StructField('int16_value_$flag', 52, 1, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int16_value_$value', originalFieldName: 'int16_value' }),
      mojo.internal.StructField('uint32_value_$flag', 52, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint32_value_$value', originalFieldName: 'uint32_value' }),
      mojo.internal.StructField('int32_value_$flag', 52, 3, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int32_value_$value', originalFieldName: 'int32_value' }),
      mojo.internal.StructField('uint64_value_$flag', 52, 4, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'uint64_value_$value', originalFieldName: 'uint64_value' }),
      mojo.internal.StructField('int64_value_$flag', 52, 5, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'int64_value_$value', originalFieldName: 'int64_value' }),
      mojo.internal.StructField('float_value_$flag', 52, 6, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'float_value_$value', originalFieldName: 'float_value' }),
      mojo.internal.StructField('double_value_$flag', 52, 7, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'double_value_$value', originalFieldName: 'double_value' }),
    ],
    [[0, 8], [2, 64]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_Params', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.VersionedStructV2Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ResponseParamsSpec, 'content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ResponseParams', [
      mojo.internal.StructField('s', 0, 0, content.optional_numerics_unittest.mojom.VersionedStructV2Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.optional_numerics_unittest.mojom.InterfaceV2PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.mojom.InterfaceV2Remote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.InterfaceV2';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.mojom.InterfaceV2PendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.mojom.InterfaceV2RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  methodWithVersionedParams(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value) {
    return this.$.methodWithVersionedParams(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value);
  }
  methodWithVersionedStruct(s) {
    return this.$.methodWithVersionedStruct(s);
  }
};

content.optional_numerics_unittest.mojom.InterfaceV2RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InterfaceV2', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  methodWithVersionedParams(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ParamsSpec,
      content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ResponseParamsSpec,
      [bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value],
      false);
  }

  methodWithVersionedStruct(s) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ParamsSpec,
      content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ResponseParamsSpec,
      [s],
      false);
  }

};

content.optional_numerics_unittest.mojom.InterfaceV2.getRemote = function() {
  let remote = new content.optional_numerics_unittest.mojom.InterfaceV2Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.InterfaceV2',
    'context');
  return remote.$;
};

content.optional_numerics_unittest.mojom.InterfaceV2Receiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InterfaceV2', [
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: MethodWithVersionedParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MethodWithVersionedParams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MethodWithVersionedStruct
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MethodWithVersionedStruct (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.methodWithVersionedParams');
          const result = this.impl.methodWithVersionedParams(params.bool_value, params.uint8_value, params.int8_value, params.uint16_value, params.int16_value, params.uint32_value, params.int32_value, params.uint64_value, params.int64_value, params.float_value, params.double_value, params.enum_value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.methodWithVersionedStruct');
          const result = this.impl.methodWithVersionedStruct(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.optional_numerics_unittest.mojom.InterfaceV2_MethodWithVersionedStruct_ResponseParamsSpec);
               responder(response);
            });
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

content.optional_numerics_unittest.mojom.InterfaceV2Receiver = content.optional_numerics_unittest.mojom.InterfaceV2Receiver;

content.optional_numerics_unittest.mojom.InterfaceV2Ptr = content.optional_numerics_unittest.mojom.InterfaceV2Remote;
content.optional_numerics_unittest.mojom.InterfaceV2Request = content.optional_numerics_unittest.mojom.InterfaceV2PendingReceiver;

