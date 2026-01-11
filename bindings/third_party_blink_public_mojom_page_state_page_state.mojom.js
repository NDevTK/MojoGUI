// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/page_state/page_state.mojom
 // Module: blink.mojom

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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.blink.mojom.ScrollRestorationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ElementSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DEPRECATED_FileSystemFileSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RequestBodySpec = { $: {} };
mojo.internal.bindings.blink.mojom.HttpBodySpec = { $: {} };
mojo.internal.bindings.blink.mojom.ViewStateSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameStateSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PageStateSpec = { $: {} };

// Enum: ScrollRestorationType
mojo.internal.bindings.blink.mojom.ScrollRestorationType = {
  kAuto: 0,
  kManual: 1,
};

// Union: Element
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.ElementSpec, 'blink.mojom.Element', {
      'arg_blob_uuid': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_bytes': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'arg_file': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.FileSpec.$,
        'nullable': false,
      },
      'arg_DEPRECATED_file_system_file': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.DEPRECATED_FileSystemFileSpec.$,
        'nullable': false,
      },
    });

// Struct: DEPRECATED_FileSystemFile
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DEPRECATED_FileSystemFileSpec, 'blink.mojom.DEPRECATED_FileSystemFile', [
      mojo.internal.StructField('arg_filesystem_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_modification_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: File
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSpec, 'blink.mojom.File', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_modification_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: RequestBody
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RequestBodySpec, 'blink.mojom.RequestBody', [
      mojo.internal.StructField('arg_elements', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_identifier', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_contains_sensitive_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HttpBody
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.HttpBodySpec, 'blink.mojom.HttpBody', [
      mojo.internal.StructField('arg_http_content_type', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_request_body', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.RequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_contains_passwords', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ViewState
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ViewStateSpec, 'blink.mojom.ViewState', [
      mojo.internal.StructField('arg_visual_viewport_scroll_offset', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_offset', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_scale_factor', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_anchor_selector', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_scroll_anchor_offset', 32, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_scroll_anchor_simhash', 40, 0, mojo.internal.Uint64, 0, false, 1, undefined),
    ],
    [[0, 32], [1, 56]]);

// Struct: FrameState
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameStateSpec, 'blink.mojom.FrameState', [
      mojo.internal.StructField('arg_url_string', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_referrer', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_target', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_state_object', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_document_state', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_scroll_restoration_type', 40, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.ScrollRestorationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_view_state', 48, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.ViewStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_item_sequence_number', 56, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_document_sequence_number', 64, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_referrer_policy', 72, 0, mojo.internal.bindings.network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_body', 80, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.HttpBodySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_children', 88, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.FrameStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_initiator_origin', 96, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('arg_navigation_api_key', 104, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 3, undefined),
      mojo.internal.StructField('arg_navigation_api_id', 112, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 3, undefined),
      mojo.internal.StructField('arg_navigation_api_state', 120, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 4, undefined),
      mojo.internal.StructField('arg_protect_url_in_navigation_api', 128, 0, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('arg_initiator_base_url_string', 136, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 6, undefined),
    ],
    [[0, 104], [2, 112], [3, 128], [4, 136], [5, 144], [6, 152]]);

// Struct: PageState
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PageStateSpec, 'blink.mojom.PageState', [
      mojo.internal.StructField('arg_referenced_files', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_top', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.FrameStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
