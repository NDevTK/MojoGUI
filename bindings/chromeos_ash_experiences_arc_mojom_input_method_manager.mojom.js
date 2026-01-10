// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/input_method_manager.mojom
// Module: arc.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

arc.mojom.ImeInfoSpec = { $: {} };
arc.mojom.TextInputStateSpec = { $: {} };
arc.mojom.InputConnection = {};
arc.mojom.InputConnection.$interfaceName = 'arc.mojom.InputConnection';
arc.mojom.InputConnection_CommitText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_FinishComposingText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_RequestTextInputState_ParamsSpec = { $: {} };
arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec = { $: {} };
arc.mojom.InputConnection_SetComposingText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_SetSelection_ParamsSpec = { $: {} };
arc.mojom.InputConnection_SendKeyEvent_ParamsSpec = { $: {} };
arc.mojom.InputConnection_SetCompositionRange_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerHost = {};
arc.mojom.InputMethodManagerHost.$interfaceName = 'arc.mojom.InputMethodManagerHost';
arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance = {};
arc.mojom.InputMethodManagerInstance.$interfaceName = 'arc.mojom.InputMethodManagerInstance';
arc.mojom.InputMethodManagerInstance_Init_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec = { $: {} };

// Struct: ImeInfo
mojo.internal.Struct(
    arc.mojom.ImeInfoSpec, 'arc.mojom.ImeInfo', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('settings_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_allowed_in_clamshell_mode', 24, 1, mojo.internal.Bool, false, false, 8, undefined),
    ],
    [[0, 40], [8, 40]]);

// Struct: TextInputState
mojo.internal.Struct(
    arc.mojom.TextInputStateSpec, 'arc.mojom.TextInputState', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_range', 8, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection_range', 16, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, arc.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cursor_pos', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('should_do_learning', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('first_update_after_operation', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('composition_text_range', 48, 0, arc.mojom.RangeSpec.$, null, true, 6, undefined),
    ],
    [[0, 56], [6, 64]]);

// Interface: InputConnection
mojo.internal.Struct(
    arc.mojom.InputConnection_CommitText_ParamsSpec, 'arc.mojom.InputConnection_CommitText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_cursor_pos', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec, 'arc.mojom.InputConnection_DeleteSurroundingText_Params', [
      mojo.internal.StructField('before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_FinishComposingText_ParamsSpec, 'arc.mojom.InputConnection_FinishComposingText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_RequestTextInputState_ParamsSpec, 'arc.mojom.InputConnection_RequestTextInputState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec, 'arc.mojom.InputConnection_RequestTextInputState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetComposingText_ParamsSpec, 'arc.mojom.InputConnection_SetComposingText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_cursor_pos', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('new_selection_range', 16, 0, arc.mojom.RangeSpec.$, null, true, 3, undefined),
    ],
    [[0, 24], [3, 32]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetSelection_ParamsSpec, 'arc.mojom.InputConnection_SetSelection_Params', [
      mojo.internal.StructField('new_selection_range', 0, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SendKeyEvent_ParamsSpec, 'arc.mojom.InputConnection_SendKeyEvent_Params', [
      mojo.internal.StructField('key_event_data', 0, 0, arc.mojom.KeyEventDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetCompositionRange_ParamsSpec, 'arc.mojom.InputConnection_SetCompositionRange_Params', [
      mojo.internal.StructField('new_range', 0, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.InputConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputConnectionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputConnectionPendingReceiver,
      handle);
    this.$ = new arc.mojom.InputConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputConnection', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
    ]);
  }

  commitText(text, new_cursor_pos) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.InputConnection_CommitText_ParamsSpec,
      null,
      [text, new_cursor_pos],
      false);
  }

  deleteSurroundingText(before, after) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec,
      null,
      [before, after],
      false);
  }

  finishComposingText() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.InputConnection_FinishComposingText_ParamsSpec,
      null,
      [],
      false);
  }

  requestTextInputState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.InputConnection_RequestTextInputState_ParamsSpec,
      arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec,
      [],
      false);
  }

  setComposingText(text, new_cursor_pos, new_selection_range) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.InputConnection_SetComposingText_ParamsSpec,
      null,
      [text, new_cursor_pos, new_selection_range],
      false);
  }

  setSelection(new_selection_range) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.InputConnection_SetSelection_ParamsSpec,
      null,
      [new_selection_range],
      false);
  }

  sendKeyEvent(key_event_data) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.InputConnection_SendKeyEvent_ParamsSpec,
      null,
      [key_event_data],
      false);
  }

  setCompositionRange(new_range) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.InputConnection_SetCompositionRange_ParamsSpec,
      null,
      [new_range],
      false);
  }

};

arc.mojom.InputConnection.getRemote = function() {
  let remote = new arc.mojom.InputConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputConnection',
    'context');
  return remote.$;
};

arc.mojom.InputConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputConnection', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
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
        
        // Try Method 0: CommitText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_CommitText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitText (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteSurroundingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSurroundingText (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FinishComposingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_FinishComposingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinishComposingText (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestTextInputState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_RequestTextInputState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTextInputState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetComposingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_SetComposingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetComposingText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_SetSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSelection (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SendKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_SendKeyEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendKeyEvent (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetCompositionRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputConnection_SetCompositionRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionRange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_CommitText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitText');
          const result = this.impl.commitText(params.text, params.new_cursor_pos);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSurroundingText');
          const result = this.impl.deleteSurroundingText(params.before, params.after);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_FinishComposingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finishComposingText');
          const result = this.impl.finishComposingText();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_RequestTextInputState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTextInputState');
          const result = this.impl.requestTextInputState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_SetComposingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setComposingText');
          const result = this.impl.setComposingText(params.text, params.new_cursor_pos, params.new_selection_range);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_SetSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSelection');
          const result = this.impl.setSelection(params.new_selection_range);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_SendKeyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendKeyEvent');
          const result = this.impl.sendKeyEvent(params.key_event_data);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputConnection_SetCompositionRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCompositionRange');
          const result = this.impl.setCompositionRange(params.new_range);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.InputConnectionReceiver = arc.mojom.InputConnectionReceiver;

arc.mojom.InputConnectionPtr = arc.mojom.InputConnectionRemote;
arc.mojom.InputConnectionRequest = arc.mojom.InputConnectionPendingReceiver;


// Interface: InputMethodManagerHost
mojo.internal.Struct(
    arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec, 'arc.mojom.InputMethodManagerHost_OnActiveImeChanged_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec, 'arc.mojom.InputMethodManagerHost_OnImeDisabled_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec, 'arc.mojom.InputMethodManagerHost_OnImeInfoChanged_Params', [
      mojo.internal.StructField('ime_infos', 0, 0, mojo.internal.Array(arc.mojom.ImeInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.InputMethodManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputMethodManagerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputMethodManagerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.InputMethodManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputMethodManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputMethodManagerHost', [
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 1 },
    ]);
  }

  onActiveImeChanged(ime_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec,
      null,
      [ime_id],
      false);
  }

  onImeDisabled(ime_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec,
      null,
      [ime_id],
      false);
  }

  onImeInfoChanged(ime_infos) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec,
      null,
      [ime_infos],
      false);
  }

};

arc.mojom.InputMethodManagerHost.getRemote = function() {
  let remote = new arc.mojom.InputMethodManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerHost',
    'context');
  return remote.$;
};

arc.mojom.InputMethodManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputMethodManagerHost', [
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 1 },
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
        
        // Try Method 0: OnActiveImeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnActiveImeChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnImeDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImeDisabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnImeInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImeInfoChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActiveImeChanged');
          const result = this.impl.onActiveImeChanged(params.ime_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImeDisabled');
          const result = this.impl.onImeDisabled(params.ime_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImeInfoChanged');
          const result = this.impl.onImeInfoChanged(params.ime_infos);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.InputMethodManagerHostReceiver = arc.mojom.InputMethodManagerHostReceiver;

arc.mojom.InputMethodManagerHostPtr = arc.mojom.InputMethodManagerHostRemote;
arc.mojom.InputMethodManagerHostRequest = arc.mojom.InputMethodManagerHostPendingReceiver;


// Interface: InputMethodManagerInstance
mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_Init_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.InputMethodManagerHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec, 'arc.mojom.InputMethodManagerInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_EnableIme_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec, 'arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_SwitchImeTo_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec, 'arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_Focus_Params', [
      mojo.internal.StructField('connection', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.InputConnectionSpec), null, false, 0, undefined),
      mojo.internal.StructField('initial_state', 8, 0, arc.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_UpdateTextInputState_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_Params', [
    ],
    [[0, 8]]);

arc.mojom.InputMethodManagerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputMethodManagerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputMethodManagerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.InputMethodManagerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputMethodManagerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputMethodManagerInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.InputMethodManagerInstance_Init_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  enableIme(ime_id, enable) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec,
      [ime_id, enable],
      false);
  }

  switchImeTo(ime_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec,
      [ime_id],
      false);
  }

  focus(connection, initial_state) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec,
      null,
      [connection, initial_state],
      false);
  }

  updateTextInputState(state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec,
      null,
      [state],
      false);
  }

  showVirtualKeyboard() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec,
      null,
      [],
      false);
  }

  hideVirtualKeyboard() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.InputMethodManagerInstance.getRemote = function() {
  let remote = new arc.mojom.InputMethodManagerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerInstance',
    'context');
  return remote.$;
};

arc.mojom.InputMethodManagerInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputMethodManagerInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableIme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableIme (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SwitchImeTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwitchImeTo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Focus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Focus (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateTextInputState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTextInputState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ShowVirtualKeyboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowVirtualKeyboard (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: HideVirtualKeyboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideVirtualKeyboard (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableIme');
          const result = this.impl.enableIme(params.ime_id, params.enable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.switchImeTo');
          const result = this.impl.switchImeTo(params.ime_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focus');
          const result = this.impl.focus(params.connection, params.initial_state);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTextInputState');
          const result = this.impl.updateTextInputState(params.state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showVirtualKeyboard');
          const result = this.impl.showVirtualKeyboard();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hideVirtualKeyboard');
          const result = this.impl.hideVirtualKeyboard();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.InputMethodManagerInstanceReceiver = arc.mojom.InputMethodManagerInstanceReceiver;

arc.mojom.InputMethodManagerInstancePtr = arc.mojom.InputMethodManagerInstanceRemote;
arc.mojom.InputMethodManagerInstanceRequest = arc.mojom.InputMethodManagerInstancePendingReceiver;

