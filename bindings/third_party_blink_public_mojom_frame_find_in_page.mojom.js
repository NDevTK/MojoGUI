// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/frame/find_in_page.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.blink.mojom.StopFindActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FindMatchUpdateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FindOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage = {};
mojo.internal.bindings.blink.mojom.FindInPageSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.FindInPage.$interfaceName = 'blink.mojom.FindInPage';
mojo.internal.bindings.blink.mojom.FindInPage_Find_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_StopFinding_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_SetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPageClient = {};
mojo.internal.bindings.blink.mojom.FindInPageClientSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.FindInPageClient.$interfaceName = 'blink.mojom.FindInPageClient';
mojo.internal.bindings.blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec = { $: {} };

// Enum: StopFindAction
mojo.internal.bindings.blink.mojom.StopFindAction = {
  kStopFindActionClearSelection: 0,
  kStopFindActionKeepSelection: 1,
  kStopFindActionActivateSelection: 2,
};

// Enum: FindMatchUpdateType
mojo.internal.bindings.blink.mojom.FindMatchUpdateType = {
  kFinalUpdate: 0,
  kMoreUpdatesComing: 1,
};

// Struct: FindOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindOptionsSpec, 'blink.mojom.FindOptions', [
      mojo.internal.StructField('arg_forward', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_match_case', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_new_session', 0, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_find_match', 0, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_force', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_run_synchronously_for_testing', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FindInPage
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_Find_ParamsSpec, 'blink.mojom.FindInPage_Find_Params', [
      mojo.internal.StructField('arg_search_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.blink.mojom.FindOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_StopFinding_ParamsSpec, 'blink.mojom.FindInPage_StopFinding_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.blink.mojom.StopFindActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec, 'blink.mojom.FindInPage_ClearActiveFindMatch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_SetClient_ParamsSpec, 'blink.mojom.FindInPage_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FindInPageClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec, 'blink.mojom.FindInPage_GetNearestFindResult_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec, 'blink.mojom.FindInPage_GetNearestFindResult_ResponseParams', [
      mojo.internal.StructField('arg_distance', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec, 'blink.mojom.FindInPage_ActivateNearestFindResult_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ParamsSpec, 'blink.mojom.FindInPage_FindMatchRects_Params', [
      mojo.internal.StructField('arg_current_version', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec, 'blink.mojom.FindInPage_FindMatchRects_ResponseParams', [
      mojo.internal.StructField('arg_rects', 0, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.RectFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_active_match_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.blink.mojom.FindInPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FindInPageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FindInPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FindInPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FindInPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  find(arg_request_id, arg_search_text, arg_options) {
    return this.$.find(arg_request_id, arg_search_text, arg_options);
  }
  stopFinding(arg_action) {
    return this.$.stopFinding(arg_action);
  }
  clearActiveFindMatch() {
    return this.$.clearActiveFindMatch();
  }
  setClient(arg_client) {
    return this.$.setClient(arg_client);
  }
  getNearestFindResult(arg_point) {
    return this.$.getNearestFindResult(arg_point);
  }
  activateNearestFindResult(arg_request_id, arg_point) {
    return this.$.activateNearestFindResult(arg_request_id, arg_point);
  }
  findMatchRects(arg_current_version) {
    return this.$.findMatchRects(arg_current_version);
  }
};

mojo.internal.bindings.blink.mojom.FindInPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FindInPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  find(arg_request_id, arg_search_text, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPage_Find_ParamsSpec,
      null,
      [arg_request_id, arg_search_text, arg_options],
      false);
  }

  stopFinding(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPage_StopFinding_ParamsSpec,
      null,
      [arg_action],
      false);
  }

  clearActiveFindMatch() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec,
      null,
      [],
      false);
  }

  setClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPage_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  getNearestFindResult(arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec,
      [arg_point],
      false);
  }

  activateNearestFindResult(arg_request_id, arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec,
      null,
      [arg_request_id, arg_point],
      false);
  }

  findMatchRects(arg_current_version) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec,
      [arg_current_version],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FindInPage.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FindInPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FindInPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FindInPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FindInPage', [
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
        
        // Try Method 0: Find
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_Find_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Find (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopFinding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_StopFinding_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopFinding (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ClearActiveFindMatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearActiveFindMatch (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_SetClient_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetNearestFindResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNearestFindResult (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ActivateNearestFindResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateNearestFindResult (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FindMatchRects
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindMatchRects (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_Find_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.find');
          const result = this.impl.find(params.arg_request_id, params.arg_search_text, params.arg_options);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_StopFinding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopFinding');
          const result = this.impl.stopFinding(params.arg_action);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearActiveFindMatch');
          const result = this.impl.clearActiveFindMatch();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNearestFindResult');
          const result = this.impl.getNearestFindResult(params.arg_point);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNearestFindResult FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateNearestFindResult');
          const result = this.impl.activateNearestFindResult(params.arg_request_id, params.arg_point);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.findMatchRects');
          const result = this.impl.findMatchRects(params.arg_current_version);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FindMatchRects FAILED:', e));
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

mojo.internal.bindings.blink.mojom.FindInPageReceiver = mojo.internal.bindings.blink.mojom.FindInPageReceiver;

mojo.internal.bindings.blink.mojom.FindInPagePtr = mojo.internal.bindings.blink.mojom.FindInPageRemote;
mojo.internal.bindings.blink.mojom.FindInPageRequest = mojo.internal.bindings.blink.mojom.FindInPagePendingReceiver;


// Interface: FindInPageClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec, 'blink.mojom.FindInPageClient_SetNumberOfMatches_Params', [
      mojo.internal.StructField('arg_update_type', 0, 0, mojo.internal.bindings.blink.mojom.FindMatchUpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_number_of_matches', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec, 'blink.mojom.FindInPageClient_SetActiveMatch_Params', [
      mojo.internal.StructField('arg_active_match_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_type', 8, 0, mojo.internal.bindings.blink.mojom.FindMatchUpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active_match_ordinal', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.blink.mojom.FindInPageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FindInPageClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FindInPageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FindInPageClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FindInPageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setNumberOfMatches(arg_request_id, arg_number_of_matches, arg_update_type) {
    return this.$.setNumberOfMatches(arg_request_id, arg_number_of_matches, arg_update_type);
  }
  setActiveMatch(arg_request_id, arg_active_match_rect, arg_active_match_ordinal, arg_update_type) {
    return this.$.setActiveMatch(arg_request_id, arg_active_match_rect, arg_active_match_ordinal, arg_update_type);
  }
};

mojo.internal.bindings.blink.mojom.FindInPageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FindInPageClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNumberOfMatches(arg_request_id, arg_number_of_matches, arg_update_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec,
      null,
      [arg_request_id, arg_number_of_matches, arg_update_type],
      false);
  }

  setActiveMatch(arg_request_id, arg_active_match_rect, arg_active_match_ordinal, arg_update_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec,
      null,
      [arg_request_id, arg_active_match_rect, arg_active_match_ordinal, arg_update_type],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FindInPageClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FindInPageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FindInPageClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FindInPageClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FindInPageClient', [
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
        
        // Try Method 0: SetNumberOfMatches
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNumberOfMatches (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetActiveMatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActiveMatch (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNumberOfMatches');
          const result = this.impl.setNumberOfMatches(params.arg_request_id, params.arg_number_of_matches, params.arg_update_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActiveMatch');
          const result = this.impl.setActiveMatch(params.arg_request_id, params.arg_active_match_rect, params.arg_active_match_ordinal, params.arg_update_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.FindInPageClientReceiver = mojo.internal.bindings.blink.mojom.FindInPageClientReceiver;

mojo.internal.bindings.blink.mojom.FindInPageClientPtr = mojo.internal.bindings.blink.mojom.FindInPageClientRemote;
mojo.internal.bindings.blink.mojom.FindInPageClientRequest = mojo.internal.bindings.blink.mojom.FindInPageClientPendingReceiver;

