// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_login.mojom
 // Module: ash.screens_login.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.screens_login = mojo.internal.bindings.ash.screens_login || {};
mojo.internal.bindings.ash.screens_login.mojom = mojo.internal.bindings.ash.screens_login.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmUIStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.screens_login.mojom.UIStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler = {};
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler.$interfaceName = 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler';
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage = {};
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageSpec = { $ : {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage.$interfaceName = 'ash.screens_login.mojom.ArcVmDataMigrationPage';
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler = {};
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler.$interfaceName = 'ash.screens_login.mojom.EncryptionMigrationPageHandler';
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage = {};
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageSpec = { $ : {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage.$interfaceName = 'ash.screens_login.mojom.EncryptionMigrationPage';
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec = { $: {} };

// Enum: ArcVmUIState
mojo.internal.bindings.ash.screens_login.mojom.ArcVmUIState = {
  kLoading: 0,
  kWelcome: 1,
  kResume: 2,
  kProgress: 3,
  kSuccess: 4,
  kFailure: 5,
};

// Enum: UIState
mojo.internal.bindings.ash.screens_login.mojom.UIState = {
  kInitial: 0,
  kReady: 1,
  kMigrating: 2,
  kMigratingFailed: 3,
  kNotEnoughStorage: 4,
};

// Interface: ArcVmDataMigrationPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.ArcVmDataMigrationPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResumeClicked() {
    return this.$.onResumeClicked();
  }
  onUpdateClicked() {
    return this.$.onUpdateClicked();
  }
  onFinishClicked() {
    return this.$.onFinishClicked();
  }
  onSkipClicked() {
    return this.$.onSkipClicked();
  }
  onReportClicked() {
    return this.$.onReportClicked();
  }
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.ArcVmDataMigrationPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResumeClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onUpdateClicked() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onFinishClicked() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onSkipClicked() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onReportClicked() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.ArcVmDataMigrationPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.ArcVmDataMigrationPageHandler', [
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
        
        // Try Method 0: OnResumeClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResumeClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnUpdateClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUpdateClicked (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFinishClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFinishClicked (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnSkipClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSkipClicked (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnReportClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportClicked (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnResumeClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResumeClicked');
          const result = this.impl.onResumeClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnUpdateClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUpdateClicked');
          const result = this.impl.onUpdateClicked();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnFinishClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFinishClicked');
          const result = this.impl.onFinishClicked();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnSkipClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSkipClicked');
          const result = this.impl.onSkipClicked();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandler_OnReportClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportClicked');
          const result = this.impl.onReportClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerReceiver = mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerReceiver;

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPtr = mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote;
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRequest = mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerPendingReceiver;


// Interface: ArcVmDataMigrationPage
mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.screens_login.mojom.ArcVmUIStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_Params', [
      mojo.internal.StructField('arg_required_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_Params', [
      mojo.internal.StructField('arg_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_Params', [
      mojo.internal.StructField('arg_enough', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connected', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_Params', [
      mojo.internal.StructField('arg_progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec, 'ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_Params', [
      mojo.internal.StructField('arg_remaining_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.ArcVmDataMigrationPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setUIState(arg_state) {
    return this.$.setUIState(arg_state);
  }
  setRequiredFreeDiskSpace(arg_required_space) {
    return this.$.setRequiredFreeDiskSpace(arg_required_space);
  }
  setMinimumBatteryPercent(arg_percent) {
    return this.$.setMinimumBatteryPercent(arg_percent);
  }
  setBatteryState(arg_enough, arg_connected) {
    return this.$.setBatteryState(arg_enough, arg_connected);
  }
  setMigrationProgress(arg_progress) {
    return this.$.setMigrationProgress(arg_progress);
  }
  setEstimatedRemainingTime(arg_remaining_time) {
    return this.$.setEstimatedRemainingTime(arg_remaining_time);
  }
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.ArcVmDataMigrationPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setUIState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  setRequiredFreeDiskSpace(arg_required_space) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec,
      null,
      [arg_required_space],
      false);
  }

  setMinimumBatteryPercent(arg_percent) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec,
      null,
      [arg_percent],
      false);
  }

  setBatteryState(arg_enough, arg_connected) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec,
      null,
      [arg_enough, arg_connected],
      false);
  }

  setMigrationProgress(arg_progress) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      [arg_progress],
      false);
  }

  setEstimatedRemainingTime(arg_remaining_time) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec,
      null,
      [arg_remaining_time],
      false);
  }

};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.ArcVmDataMigrationPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.ArcVmDataMigrationPage', [
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
        
        // Try Method 0: SetUIState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUIState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetRequiredFreeDiskSpace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRequiredFreeDiskSpace (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetMinimumBatteryPercent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMinimumBatteryPercent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBatteryState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBatteryState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetMigrationProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMigrationProgress (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetEstimatedRemainingTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEstimatedRemainingTime (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetUIState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUIState');
          const result = this.impl.setUIState(params.arg_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetRequiredFreeDiskSpace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRequiredFreeDiskSpace');
          const result = this.impl.setRequiredFreeDiskSpace(params.arg_required_space);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMinimumBatteryPercent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMinimumBatteryPercent');
          const result = this.impl.setMinimumBatteryPercent(params.arg_percent);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetBatteryState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBatteryState');
          const result = this.impl.setBatteryState(params.arg_enough, params.arg_connected);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetMigrationProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMigrationProgress');
          const result = this.impl.setMigrationProgress(params.arg_progress);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPage_SetEstimatedRemainingTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEstimatedRemainingTime');
          const result = this.impl.setEstimatedRemainingTime(params.arg_remaining_time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageReceiver = mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageReceiver;

mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPagePtr = mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageRemote;
mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageRequest = mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPagePendingReceiver;


// Interface: EncryptionMigrationPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.EncryptionMigrationPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStartMigration() {
    return this.$.onStartMigration();
  }
  onSkipMigration() {
    return this.$.onSkipMigration();
  }
  onRequestRestartOnLowStorage() {
    return this.$.onRequestRestartOnLowStorage();
  }
  onRequestRestartOnFailure() {
    return this.$.onRequestRestartOnFailure();
  }
  onOpenFeedbackDialog() {
    return this.$.onOpenFeedbackDialog();
  }
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.EncryptionMigrationPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStartMigration() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec,
      null,
      [],
      false);
  }

  onSkipMigration() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec,
      null,
      [],
      false);
  }

  onRequestRestartOnLowStorage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec,
      null,
      [],
      false);
  }

  onRequestRestartOnFailure() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec,
      null,
      [],
      false);
  }

  onOpenFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.EncryptionMigrationPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.EncryptionMigrationPageHandler', [
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
        
        // Try Method 0: OnStartMigration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartMigration (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSkipMigration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSkipMigration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnRequestRestartOnLowStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestRestartOnLowStorage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnRequestRestartOnFailure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestRestartOnFailure (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnOpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpenFeedbackDialog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnStartMigration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStartMigration');
          const result = this.impl.onStartMigration();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnSkipMigration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSkipMigration');
          const result = this.impl.onSkipMigration();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnLowStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRequestRestartOnLowStorage');
          const result = this.impl.onRequestRestartOnLowStorage();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnRequestRestartOnFailure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRequestRestartOnFailure');
          const result = this.impl.onRequestRestartOnFailure();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandler_OnOpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpenFeedbackDialog');
          const result = this.impl.onOpenFeedbackDialog();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerReceiver = mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerReceiver;

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerPtr = mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote;
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerRequest = mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerPendingReceiver;


// Interface: EncryptionMigrationPage
mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.screens_login.mojom.UIStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_Params', [
      mojo.internal.StructField('arg_progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_Params', [
      mojo.internal.StructField('arg_is_resuming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_Params', [
      mojo.internal.StructField('arg_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_enough', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_charging', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_Params', [
      mojo.internal.StructField('arg_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec, 'ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_Params', [
      mojo.internal.StructField('arg_available_space', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_required_space', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_login.mojom.EncryptionMigrationPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setUIState(arg_state) {
    return this.$.setUIState(arg_state);
  }
  setMigrationProgress(arg_progress) {
    return this.$.setMigrationProgress(arg_progress);
  }
  setIsResuming(arg_is_resuming) {
    return this.$.setIsResuming(arg_is_resuming);
  }
  setBatteryState(arg_percent, arg_is_enough, arg_is_charging) {
    return this.$.setBatteryState(arg_percent, arg_is_enough, arg_is_charging);
  }
  setNecessaryBatteryPercent(arg_percent) {
    return this.$.setNecessaryBatteryPercent(arg_percent);
  }
  setSpaceInfoInString(arg_available_space, arg_required_space) {
    return this.$.setSpaceInfoInString(arg_available_space, arg_required_space);
  }
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.EncryptionMigrationPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setUIState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  setMigrationProgress(arg_progress) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec,
      null,
      [arg_progress],
      false);
  }

  setIsResuming(arg_is_resuming) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec,
      null,
      [arg_is_resuming],
      false);
  }

  setBatteryState(arg_percent, arg_is_enough, arg_is_charging) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec,
      null,
      [arg_percent, arg_is_enough, arg_is_charging],
      false);
  }

  setNecessaryBatteryPercent(arg_percent) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec,
      null,
      [arg_percent],
      false);
  }

  setSpaceInfoInString(arg_available_space, arg_required_space) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec,
      null,
      [arg_available_space, arg_required_space],
      false);
  }

};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_login.mojom.EncryptionMigrationPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.screens_login.mojom.EncryptionMigrationPage', [
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
        
        // Try Method 0: SetUIState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUIState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetMigrationProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMigrationProgress (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetIsResuming
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsResuming (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBatteryState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBatteryState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetNecessaryBatteryPercent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNecessaryBatteryPercent (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetSpaceInfoInString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSpaceInfoInString (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetUIState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUIState');
          const result = this.impl.setUIState(params.arg_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetMigrationProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMigrationProgress');
          const result = this.impl.setMigrationProgress(params.arg_progress);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetIsResuming_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsResuming');
          const result = this.impl.setIsResuming(params.arg_is_resuming);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetBatteryState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBatteryState');
          const result = this.impl.setBatteryState(params.arg_percent, params.arg_is_enough, params.arg_is_charging);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetNecessaryBatteryPercent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNecessaryBatteryPercent');
          const result = this.impl.setNecessaryBatteryPercent(params.arg_percent);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPage_SetSpaceInfoInString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSpaceInfoInString');
          const result = this.impl.setSpaceInfoInString(params.arg_available_space, params.arg_required_space);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageReceiver = mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageReceiver;

mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPagePtr = mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageRemote;
mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageRequest = mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPagePendingReceiver;

