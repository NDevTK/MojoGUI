// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_common.mojom
// Module: ash.screens_common.mojom

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
var ash = ash || {};
ash.screens_common = ash.screens_common || {};
ash.screens_common.mojom = ash.screens_common.mojom || {};
var mojo_base = mojo_base || {};

ash.screens_common.mojom.UserCreationFlowTypeSpec = { $: mojo.internal.Enum() };
ash.screens_common.mojom.GesturePagesSpec = { $: mojo.internal.Enum() };
ash.screens_common.mojom.AiIntroPageHandler = {};
ash.screens_common.mojom.AiIntroPageHandler.$interfaceName = 'ash.screens_common.mojom.AiIntroPageHandler';
ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.AiIntroPage = {};
ash.screens_common.mojom.AiIntroPage.$interfaceName = 'ash.screens_common.mojom.AiIntroPage';
ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec = { $: {} };
ash.screens_common.mojom.AppDownloadingPageHandler = {};
ash.screens_common.mojom.AppDownloadingPageHandler.$interfaceName = 'ash.screens_common.mojom.AppDownloadingPageHandler';
ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.DrivePinningPageHandler = {};
ash.screens_common.mojom.DrivePinningPageHandler.$interfaceName = 'ash.screens_common.mojom.DrivePinningPageHandler';
ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.DrivePinningPage = {};
ash.screens_common.mojom.DrivePinningPage.$interfaceName = 'ash.screens_common.mojom.DrivePinningPage';
ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec = { $: {} };
ash.screens_common.mojom.FjordStationSetupPageHandler = {};
ash.screens_common.mojom.FjordStationSetupPageHandler.$interfaceName = 'ash.screens_common.mojom.FjordStationSetupPageHandler';
ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec = { $: {} };
ash.screens_common.mojom.GaiaInfoPageHandler = {};
ash.screens_common.mojom.GaiaInfoPageHandler.$interfaceName = 'ash.screens_common.mojom.GaiaInfoPageHandler';
ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GaiaInfoPage = {};
ash.screens_common.mojom.GaiaInfoPage.$interfaceName = 'ash.screens_common.mojom.GaiaInfoPage';
ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec = { $: {} };
ash.screens_common.mojom.GestureNavigationPageHandler = {};
ash.screens_common.mojom.GestureNavigationPageHandler.$interfaceName = 'ash.screens_common.mojom.GestureNavigationPageHandler';
ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec = { $: {} };
ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GeminiIntroPageHandler = {};
ash.screens_common.mojom.GeminiIntroPageHandler.$interfaceName = 'ash.screens_common.mojom.GeminiIntroPageHandler';
ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec = { $: {} };

// Enum: UserCreationFlowType
ash.screens_common.mojom.UserCreationFlowType = {
  kManual: 0,
  kQuickstart: 1,
};

// Enum: GesturePages
ash.screens_common.mojom.GesturePages = {
  kIntro: 0,
  kHome: 1,
  kOverview: 2,
  kBack: 3,
};

// Interface: AiIntroPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.AiIntroPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.AiIntroPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AiIntroPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.AiIntroPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.AiIntroPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNextClicked() {
    return this.$.onNextClicked();
  }
};

ash.screens_common.mojom.AiIntroPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AiIntroPageHandler', [
      { explicit: null },
    ]);
  }

  onNextClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.AiIntroPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.AiIntroPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AiIntroPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.AiIntroPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AiIntroPageHandler', [
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
        
        // Try Method 0: OnNextClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNextClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNextClicked');
          const result = this.impl.onNextClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.AiIntroPageHandlerReceiver = ash.screens_common.mojom.AiIntroPageHandlerReceiver;

ash.screens_common.mojom.AiIntroPageHandlerPtr = ash.screens_common.mojom.AiIntroPageHandlerRemote;
ash.screens_common.mojom.AiIntroPageHandlerRequest = ash.screens_common.mojom.AiIntroPageHandlerPendingReceiver;


// Interface: AiIntroPage
mojo.internal.Struct(
    ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec, 'ash.screens_common.mojom.AiIntroPage_SetAutoTransition_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_common.mojom.AiIntroPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.AiIntroPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AiIntroPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.AiIntroPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.AiIntroPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setAutoTransition(value) {
    return this.$.setAutoTransition(value);
  }
};

ash.screens_common.mojom.AiIntroPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AiIntroPage', [
      { explicit: null },
    ]);
  }

  setAutoTransition(value) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec,
      null,
      [value],
      false);
  }

};

ash.screens_common.mojom.AiIntroPage.getRemote = function() {
  let remote = new ash.screens_common.mojom.AiIntroPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AiIntroPage',
    'context');
  return remote.$;
};

ash.screens_common.mojom.AiIntroPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AiIntroPage', [
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
        
        // Try Method 0: SetAutoTransition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoTransition (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoTransition');
          const result = this.impl.setAutoTransition(params.value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.AiIntroPageReceiver = ash.screens_common.mojom.AiIntroPageReceiver;

ash.screens_common.mojom.AiIntroPagePtr = ash.screens_common.mojom.AiIntroPageRemote;
ash.screens_common.mojom.AiIntroPageRequest = ash.screens_common.mojom.AiIntroPagePendingReceiver;


// Interface: AppDownloadingPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec, 'ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.AppDownloadingPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.AppDownloadingPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AppDownloadingPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.AppDownloadingPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.AppDownloadingPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onContinueClicked() {
    return this.$.onContinueClicked();
  }
};

ash.screens_common.mojom.AppDownloadingPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppDownloadingPageHandler', [
      { explicit: null },
    ]);
  }

  onContinueClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.AppDownloadingPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.AppDownloadingPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AppDownloadingPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.AppDownloadingPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppDownloadingPageHandler', [
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
        
        // Try Method 0: OnContinueClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContinueClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContinueClicked');
          const result = this.impl.onContinueClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.AppDownloadingPageHandlerReceiver = ash.screens_common.mojom.AppDownloadingPageHandlerReceiver;

ash.screens_common.mojom.AppDownloadingPageHandlerPtr = ash.screens_common.mojom.AppDownloadingPageHandlerRemote;
ash.screens_common.mojom.AppDownloadingPageHandlerRequest = ash.screens_common.mojom.AppDownloadingPageHandlerPendingReceiver;


// Interface: DrivePinningPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec, 'ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_Params', [
      mojo.internal.StructField('enable_drive_pinning', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_Params', [
      mojo.internal.StructField('enable_drive_pinning', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_common.mojom.DrivePinningPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.DrivePinningPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.DrivePinningPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.DrivePinningPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.DrivePinningPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReturnClicked(enable_drive_pinning) {
    return this.$.onReturnClicked(enable_drive_pinning);
  }
  onNextClicked(enable_drive_pinning) {
    return this.$.onNextClicked(enable_drive_pinning);
  }
};

ash.screens_common.mojom.DrivePinningPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DrivePinningPageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReturnClicked(enable_drive_pinning) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec,
      null,
      [enable_drive_pinning],
      false);
  }

  onNextClicked(enable_drive_pinning) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec,
      null,
      [enable_drive_pinning],
      false);
  }

};

ash.screens_common.mojom.DrivePinningPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.DrivePinningPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.DrivePinningPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.DrivePinningPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DrivePinningPageHandler', [
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
        
        // Try Method 0: OnReturnClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReturnClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNextClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNextClicked (1)');
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReturnClicked');
          const result = this.impl.onReturnClicked(params.enable_drive_pinning);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNextClicked');
          const result = this.impl.onNextClicked(params.enable_drive_pinning);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.DrivePinningPageHandlerReceiver = ash.screens_common.mojom.DrivePinningPageHandlerReceiver;

ash.screens_common.mojom.DrivePinningPageHandlerPtr = ash.screens_common.mojom.DrivePinningPageHandlerRemote;
ash.screens_common.mojom.DrivePinningPageHandlerRequest = ash.screens_common.mojom.DrivePinningPageHandlerPendingReceiver;


// Interface: DrivePinningPage
mojo.internal.Struct(
    ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec, 'ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_Params', [
      mojo.internal.StructField('required_space', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('free_space', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.screens_common.mojom.DrivePinningPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.DrivePinningPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.DrivePinningPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.DrivePinningPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.DrivePinningPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setRequiredSpaceInfo(required_space, free_space) {
    return this.$.setRequiredSpaceInfo(required_space, free_space);
  }
};

ash.screens_common.mojom.DrivePinningPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DrivePinningPage', [
      { explicit: null },
    ]);
  }

  setRequiredSpaceInfo(required_space, free_space) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec,
      null,
      [required_space, free_space],
      false);
  }

};

ash.screens_common.mojom.DrivePinningPage.getRemote = function() {
  let remote = new ash.screens_common.mojom.DrivePinningPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.DrivePinningPage',
    'context');
  return remote.$;
};

ash.screens_common.mojom.DrivePinningPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DrivePinningPage', [
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
        
        // Try Method 0: SetRequiredSpaceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRequiredSpaceInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRequiredSpaceInfo');
          const result = this.impl.setRequiredSpaceInfo(params.required_space, params.free_space);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.DrivePinningPageReceiver = ash.screens_common.mojom.DrivePinningPageReceiver;

ash.screens_common.mojom.DrivePinningPagePtr = ash.screens_common.mojom.DrivePinningPageRemote;
ash.screens_common.mojom.DrivePinningPageRequest = ash.screens_common.mojom.DrivePinningPagePendingReceiver;


// Interface: FjordStationSetupPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec, 'ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.FjordStationSetupPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.FjordStationSetupPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.FjordStationSetupPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.FjordStationSetupPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.FjordStationSetupPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSetupComplete() {
    return this.$.onSetupComplete();
  }
};

ash.screens_common.mojom.FjordStationSetupPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FjordStationSetupPageHandler', [
      { explicit: null },
    ]);
  }

  onSetupComplete() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.FjordStationSetupPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.FjordStationSetupPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.FjordStationSetupPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.FjordStationSetupPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FjordStationSetupPageHandler', [
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
        
        // Try Method 0: OnSetupComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSetupComplete (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSetupComplete');
          const result = this.impl.onSetupComplete();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.FjordStationSetupPageHandlerReceiver = ash.screens_common.mojom.FjordStationSetupPageHandlerReceiver;

ash.screens_common.mojom.FjordStationSetupPageHandlerPtr = ash.screens_common.mojom.FjordStationSetupPageHandlerRemote;
ash.screens_common.mojom.FjordStationSetupPageHandlerRequest = ash.screens_common.mojom.FjordStationSetupPageHandlerPendingReceiver;


// Interface: GaiaInfoPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec, 'ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_Params', [
      mojo.internal.StructField('user_flow', 0, 0, ash.screens_common.mojom.UserCreationFlowTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_common.mojom.GaiaInfoPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GaiaInfoPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GaiaInfoPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GaiaInfoPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GaiaInfoPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBackClicked() {
    return this.$.onBackClicked();
  }
  onNextClicked(user_flow) {
    return this.$.onNextClicked(user_flow);
  }
};

ash.screens_common.mojom.GaiaInfoPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GaiaInfoPageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBackClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onNextClicked(user_flow) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec,
      null,
      [user_flow],
      false);
  }

};

ash.screens_common.mojom.GaiaInfoPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.GaiaInfoPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GaiaInfoPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GaiaInfoPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GaiaInfoPageHandler', [
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
        
        // Try Method 0: OnBackClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNextClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNextClicked (1)');
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBackClicked');
          const result = this.impl.onBackClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNextClicked');
          const result = this.impl.onNextClicked(params.user_flow);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.GaiaInfoPageHandlerReceiver = ash.screens_common.mojom.GaiaInfoPageHandlerReceiver;

ash.screens_common.mojom.GaiaInfoPageHandlerPtr = ash.screens_common.mojom.GaiaInfoPageHandlerRemote;
ash.screens_common.mojom.GaiaInfoPageHandlerRequest = ash.screens_common.mojom.GaiaInfoPageHandlerPendingReceiver;


// Interface: GaiaInfoPage
mojo.internal.Struct(
    ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec, 'ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.GaiaInfoPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GaiaInfoPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GaiaInfoPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GaiaInfoPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GaiaInfoPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setQuickStartVisible() {
    return this.$.setQuickStartVisible();
  }
};

ash.screens_common.mojom.GaiaInfoPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GaiaInfoPage', [
      { explicit: null },
    ]);
  }

  setQuickStartVisible() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.GaiaInfoPage.getRemote = function() {
  let remote = new ash.screens_common.mojom.GaiaInfoPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GaiaInfoPage',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GaiaInfoPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GaiaInfoPage', [
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
        
        // Try Method 0: SetQuickStartVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetQuickStartVisible (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setQuickStartVisible');
          const result = this.impl.setQuickStartVisible();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.GaiaInfoPageReceiver = ash.screens_common.mojom.GaiaInfoPageReceiver;

ash.screens_common.mojom.GaiaInfoPagePtr = ash.screens_common.mojom.GaiaInfoPageRemote;
ash.screens_common.mojom.GaiaInfoPageRequest = ash.screens_common.mojom.GaiaInfoPagePendingReceiver;


// Interface: GestureNavigationPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec, 'ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_Params', [
      mojo.internal.StructField('page', 0, 0, ash.screens_common.mojom.GesturePagesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec, 'ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec, 'ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.GestureNavigationPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GestureNavigationPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GestureNavigationPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GestureNavigationPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GestureNavigationPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPageChange(page) {
    return this.$.onPageChange(page);
  }
  onSkipClicked() {
    return this.$.onSkipClicked();
  }
  onExitClicked() {
    return this.$.onExitClicked();
  }
};

ash.screens_common.mojom.GestureNavigationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GestureNavigationPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPageChange(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec,
      null,
      [page],
      false);
  }

  onSkipClicked() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onExitClicked() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.GestureNavigationPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.GestureNavigationPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GestureNavigationPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GestureNavigationPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GestureNavigationPageHandler', [
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
        
        // Try Method 0: OnPageChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPageChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSkipClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSkipClicked (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnExitClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnExitClicked (2)');
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPageChange');
          const result = this.impl.onPageChange(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSkipClicked');
          const result = this.impl.onSkipClicked();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onExitClicked');
          const result = this.impl.onExitClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.GestureNavigationPageHandlerReceiver = ash.screens_common.mojom.GestureNavigationPageHandlerReceiver;

ash.screens_common.mojom.GestureNavigationPageHandlerPtr = ash.screens_common.mojom.GestureNavigationPageHandlerRemote;
ash.screens_common.mojom.GestureNavigationPageHandlerRequest = ash.screens_common.mojom.GestureNavigationPageHandlerPendingReceiver;


// Interface: GeminiIntroPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec, 'ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.GeminiIntroPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GeminiIntroPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GeminiIntroPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GeminiIntroPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GeminiIntroPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBackClicked() {
    return this.$.onBackClicked();
  }
  onNextClicked() {
    return this.$.onNextClicked();
  }
};

ash.screens_common.mojom.GeminiIntroPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GeminiIntroPageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBackClicked() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onNextClicked() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.GeminiIntroPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.GeminiIntroPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GeminiIntroPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GeminiIntroPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GeminiIntroPageHandler', [
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
        
        // Try Method 0: OnBackClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackClicked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNextClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNextClicked (1)');
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
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBackClicked');
          const result = this.impl.onBackClicked();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNextClicked');
          const result = this.impl.onNextClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_common.mojom.GeminiIntroPageHandlerReceiver = ash.screens_common.mojom.GeminiIntroPageHandlerReceiver;

ash.screens_common.mojom.GeminiIntroPageHandlerPtr = ash.screens_common.mojom.GeminiIntroPageHandlerRemote;
ash.screens_common.mojom.GeminiIntroPageHandlerRequest = ash.screens_common.mojom.GeminiIntroPageHandlerPendingReceiver;

