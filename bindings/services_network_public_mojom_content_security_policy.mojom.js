// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/content_security_policy.mojom
 // Module: network.mojom

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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.ContentSecurityPolicyTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.ContentSecurityPolicySourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CSPDispositionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CSPDirectiveNameSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CSPRequireTrustedTypesForSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.AllowCSPFromHeaderValueSpec = { $: {} };
mojo.internal.bindings.network.mojom.ContentSecurityPolicyHeaderSpec = { $: {} };
mojo.internal.bindings.network.mojom.CSPSourceSpec = { $: {} };
mojo.internal.bindings.network.mojom.CSPSourceListSpec = { $: {} };
mojo.internal.bindings.network.mojom.CSPTrustedTypesSpec = { $: {} };
mojo.internal.bindings.network.mojom.ContentSecurityPolicySpec = { $: {} };
mojo.internal.bindings.network.mojom.CSPViolationSpec = { $: {} };

// Enum: ContentSecurityPolicyType
mojo.internal.bindings.network.mojom.ContentSecurityPolicyType = {
  kReport: 0,
  kEnforce: 1,
};

// Enum: ContentSecurityPolicySource
mojo.internal.bindings.network.mojom.ContentSecurityPolicySource = {
  kHTTP: 0,
  kMeta: 1,
};

// Enum: CSPDisposition
mojo.internal.bindings.network.mojom.CSPDisposition = {
  CHECK: 0,
  DO_NOT_CHECK: 1,
};

// Enum: CSPDirectiveName
mojo.internal.bindings.network.mojom.CSPDirectiveName = {
  Unknown: 0,
  BaseURI: 1,
  BlockAllMixedContent: 2,
  ChildSrc: 3,
  ConnectSrc: 4,
  DefaultSrc: 5,
  FencedFrameSrc: 6,
  FontSrc: 7,
  FormAction: 8,
  FrameAncestors: 9,
  FrameSrc: 10,
  ImgSrc: 11,
  ManifestSrc: 12,
  MediaSrc: 13,
  ObjectSrc: 14,
  ReportTo: 15,
  ReportURI: 16,
  RequireTrustedTypesFor: 17,
  Sandbox: 18,
  ScriptSrc: 19,
  ScriptSrcV2: 20,
  ScriptSrcAttr: 21,
  ScriptSrcElem: 22,
  StyleSrc: 23,
  StyleSrcAttr: 24,
  StyleSrcElem: 25,
  TreatAsPublicAddress: 26,
  TrustedTypes: 27,
  UpgradeInsecureRequests: 28,
  WorkerSrc: 29,
};

// Enum: CSPRequireTrustedTypesFor
mojo.internal.bindings.network.mojom.CSPRequireTrustedTypesFor = {
  None: 0,
  Script: 1,
};

// Union: AllowCSPFromHeaderValue
mojo.internal.Union(
    mojo.internal.bindings.network.mojom.AllowCSPFromHeaderValueSpec, 'network.mojom.AllowCSPFromHeaderValue', {
      'arg_allow_star': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_origin': {
        'ordinal': 1,
        'type': mojo.internal.bindings.url.mojom.OriginSpec.$,
        'nullable': false,
      },
      'arg_error_message': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: ContentSecurityPolicyHeader
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ContentSecurityPolicyHeaderSpec, 'network.mojom.ContentSecurityPolicyHeader', [
      mojo.internal.StructField('arg_header_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.network.mojom.ContentSecurityPolicyTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.bindings.network.mojom.ContentSecurityPolicySourceSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CSPSource
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CSPSourceSpec, 'network.mojom.CSPSource', [
      mojo.internal.StructField('arg_scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 24, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('arg_is_host_wildcard', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_port_wildcard', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CSPSourceList
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CSPSourceListSpec, 'network.mojom.CSPSourceList', [
      mojo.internal.StructField('arg_sources', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CSPSourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_nonces', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_hashes', 16, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.IntegrityMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_url_hashes', 24, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.IntegrityMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_eval_hashes', 32, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.IntegrityMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_report_hash_algorithm', 40, 0, mojo.internal.bindings.network.mojom.IntegrityAlgorithmSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_self', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_star', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_inline', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_inline_speculation_rules', 48, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_eval', 48, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_wasm_eval', 48, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_wasm_unsafe_eval', 48, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_dynamic', 48, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_dynamic_url', 49, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_unsafe_hashes', 49, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_report_sample', 49, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_trusted_types_eval', 49, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: CSPTrustedTypes
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CSPTrustedTypesSpec, 'network.mojom.CSPTrustedTypes', [
      mojo.internal.StructField('arg_list', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_any', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_duplicates', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ContentSecurityPolicy
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ContentSecurityPolicySpec, 'network.mojom.ContentSecurityPolicy', [
      mojo.internal.StructField('arg_self_origin', 0, 0, mojo.internal.bindings.network.mojom.CSPSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_raw_directives', 8, 0, mojo.internal.Map(mojo.internal.bindings.network.mojom.CSPDirectiveNameSpec.$, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_directives', 16, 0, mojo.internal.Map(mojo.internal.bindings.network.mojom.CSPDirectiveNameSpec.$, mojo.internal.bindings.network.mojom.CSPSourceListSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sandbox', 24, 0, mojo.internal.bindings.network.mojom.WebSandboxFlagsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_header', 32, 0, mojo.internal.bindings.network.mojom.ContentSecurityPolicyHeaderSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_endpoints', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_trusted_types', 48, 0, mojo.internal.bindings.network.mojom.CSPTrustedTypesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parsing_errors', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_upgrade_insecure_requests', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_treat_as_public_address', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_block_all_mixed_content', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_reporting_api', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: CSPViolation
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CSPViolationSpec, 'network.mojom.CSPViolation', [
      mojo.internal.StructField('arg_directive', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_effective_directive', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_console_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_blocked_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_endpoints', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_header', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 48, 0, mojo.internal.bindings.network.mojom.ContentSecurityPolicyTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_location', 56, 0, mojo.internal.bindings.network.mojom.SourceLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_reporting_api', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);
