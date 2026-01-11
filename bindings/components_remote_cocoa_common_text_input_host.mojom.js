// Auto-generated MojoJS binding
 // Source: chromium_src/components/remote_cocoa/common/text_input_host.mojom
 // Module: remote_cocoa.mojom

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
 

 mojo.internal.bindings.remote_cocoa = mojo.internal.bindings.remote_cocoa || {};
mojo.internal.bindings.remote_cocoa.mojom = mojo.internal.bindings.remote_cocoa.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.remote_cocoa.mojom.TextInputHost = {};
mojo.internal.bindings.remote_cocoa.mojom.TextInputHostSpec = { $ : {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost.$interfaceName = 'remote_cocoa.mojom.TextInputHost';
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec = { $: {} };

// Interface: TextInputHost
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasClient_ResponseParams', [
      mojo.internal.StructField('arg_has_client', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasInputContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParams', [
      mojo.internal.StructField('arg_has_input_context', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsRTL_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParams', [
      mojo.internal.StructField('arg_is_rtl', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionRange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParams', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParams', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_InsertText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_as_character', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_DeleteRange_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_SetCompositionText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_range', 8, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_replacement_range', 16, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasCompositionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParams', [
      mojo.internal.StructField('arg_has_composition_text', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParams', [
      mojo.internal.StructField('arg_composition_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_Params', [
      mojo.internal.StructField('arg_requested_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParams', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_actual_range', 8, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_Params', [
      mojo.internal.StructField('arg_requested_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParams', [
      mojo.internal.StructField('arg_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_actual_range', 8, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_Params', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.bindings.ui.mojom.TextEditCommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_Params', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.bindings.ui.mojom.TextEditCommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remote_cocoa.mojom.TextInputHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.TextInputHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.TextInputHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.TextInputHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  hasClient() {
    return this.$.hasClient();
  }
  hasInputContext() {
    return this.$.hasInputContext();
  }
  isRTL() {
    return this.$.isRTL();
  }
  getSelectionRange() {
    return this.$.getSelectionRange();
  }
  getSelectionText() {
    return this.$.getSelectionText();
  }
  insertText(arg_text, arg_as_character) {
    return this.$.insertText(arg_text, arg_as_character);
  }
  deleteRange(arg_range) {
    return this.$.deleteRange(arg_range);
  }
  setCompositionText(arg_text, arg_selected_range, arg_replacement_range) {
    return this.$.setCompositionText(arg_text, arg_selected_range, arg_replacement_range);
  }
  confirmCompositionText() {
    return this.$.confirmCompositionText();
  }
  hasCompositionText() {
    return this.$.hasCompositionText();
  }
  getCompositionTextRange() {
    return this.$.getCompositionTextRange();
  }
  getAttributedSubstringForRange(arg_requested_range) {
    return this.$.getAttributedSubstringForRange(arg_requested_range);
  }
  getFirstRectForRange(arg_requested_range) {
    return this.$.getFirstRectForRange(arg_requested_range);
  }
  isTextEditCommandEnabled(arg_command) {
    return this.$.isTextEditCommandEnabled(arg_command);
  }
  setTextEditCommandForNextKeyEvent(arg_command) {
    return this.$.setTextEditCommandForNextKeyEvent(arg_command);
  }
};

mojo.internal.bindings.remote_cocoa.mojom.TextInputHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remote_cocoa.mojom.TextInputHost', [
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

  hasClient() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec,
      [],
      false);
  }

  hasInputContext() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec,
      [],
      false);
  }

  isRTL() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec,
      [],
      false);
  }

  getSelectionRange() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec,
      [],
      false);
  }

  getSelectionText() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec,
      [],
      false);
  }

  insertText(arg_text, arg_as_character) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec,
      null,
      [arg_text, arg_as_character],
      false);
  }

  deleteRange(arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec,
      null,
      [arg_range],
      false);
  }

  setCompositionText(arg_text, arg_selected_range, arg_replacement_range) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec,
      null,
      [arg_text, arg_selected_range, arg_replacement_range],
      false);
  }

  confirmCompositionText() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec,
      null,
      [],
      false);
  }

  hasCompositionText() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec,
      [],
      false);
  }

  getCompositionTextRange() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec,
      [],
      false);
  }

  getAttributedSubstringForRange(arg_requested_range) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec,
      [arg_requested_range],
      false);
  }

  getFirstRectForRange(arg_requested_range) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec,
      [arg_requested_range],
      false);
  }

  isTextEditCommandEnabled(arg_command) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec,
      [arg_command],
      false);
  }

  setTextEditCommandForNextKeyEvent(arg_command) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec,
      null,
      [arg_command],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.TextInputHost.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.TextInputHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.TextInputHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.TextInputHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remote_cocoa.mojom.TextInputHost', [
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
        
        // Try Method 0: HasClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HasInputContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasInputContext (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsRTL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRTL (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetSelectionRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSelectionRange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetSelectionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSelectionText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: InsertText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertText (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteRange (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionText (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ConfirmCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfirmCompositionText (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: HasCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasCompositionText (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetCompositionTextRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCompositionTextRange (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetAttributedSubstringForRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAttributedSubstringForRange (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetFirstRectForRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFirstRectForRange (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: IsTextEditCommandEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsTextEditCommandEnabled (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetTextEditCommandForNextKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextEditCommandForNextKeyEvent (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasClient');
          const result = this.impl.hasClient();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasClient FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasInputContext');
          const result = this.impl.hasInputContext();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasInputContext FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isRTL');
          const result = this.impl.isRTL();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsRTL FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSelectionRange');
          const result = this.impl.getSelectionRange();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSelectionRange FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSelectionText');
          const result = this.impl.getSelectionText();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSelectionText FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.arg_text, params.arg_as_character);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteRange');
          const result = this.impl.deleteRange(params.arg_range);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCompositionText');
          const result = this.impl.setCompositionText(params.arg_text, params.arg_selected_range, params.arg_replacement_range);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.confirmCompositionText');
          const result = this.impl.confirmCompositionText();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasCompositionText');
          const result = this.impl.hasCompositionText();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasCompositionText FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCompositionTextRange');
          const result = this.impl.getCompositionTextRange();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCompositionTextRange FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAttributedSubstringForRange');
          const result = this.impl.getAttributedSubstringForRange(params.arg_requested_range);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAttributedSubstringForRange FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFirstRectForRange');
          const result = this.impl.getFirstRectForRange(params.arg_requested_range);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFirstRectForRange FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isTextEditCommandEnabled');
          const result = this.impl.isTextEditCommandEnabled(params.arg_command);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsTextEditCommandEnabled FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTextEditCommandForNextKeyEvent');
          const result = this.impl.setTextEditCommandForNextKeyEvent(params.arg_command);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.TextInputHostReceiver = mojo.internal.bindings.remote_cocoa.mojom.TextInputHostReceiver;

mojo.internal.bindings.remote_cocoa.mojom.TextInputHostPtr = mojo.internal.bindings.remote_cocoa.mojom.TextInputHostRemote;
mojo.internal.bindings.remote_cocoa.mojom.TextInputHostRequest = mojo.internal.bindings.remote_cocoa.mojom.TextInputHostPendingReceiver;

