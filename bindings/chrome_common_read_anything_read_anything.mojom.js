// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/common/read_anything/read_anything.mojom
 // Module: read_anything.mojom

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
 

 mojo.internal.bindings.read_anything = mojo.internal.bindings.read_anything || {};
mojo.internal.bindings.read_anything.mojom = mojo.internal.bindings.read_anything.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};

mojo.internal.bindings.read_anything.mojom.InstallationStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.ReadAnythingPresentationStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.ColorsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.LetterSpacingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.LineSpacingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.HighlightGranularitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.LineFocusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.DistillationStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.read_anything.mojom.VoicePackInstallationStateSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.VoicePackInfoSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory = {};
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory.$interfaceName = 'read_anything.mojom.UntrustedPageHandlerFactory';
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler = {};
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler.$interfaceName = 'read_anything.mojom.UntrustedPageHandler';
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage = {};
mojo.internal.bindings.read_anything.mojom.UntrustedPage.$interfaceName = 'read_anything.mojom.UntrustedPage';
mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec = { $: {} };
mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec = { $: {} };

// Enum: InstallationState
mojo.internal.bindings.read_anything.mojom.InstallationState = {
  kUnknown: 0,
  kNotInstalled: 1,
  kInstalling: 2,
  kInstalled: 3,
};

// Enum: ErrorCode
mojo.internal.bindings.read_anything.mojom.ErrorCode = {
  kNone: 0,
  kOther: 1,
  kWrongId: 2,
  kNeedReboot: 3,
  kAllocation: 4,
  kUnsupportedPlatform: 5,
  MinVersion: 5,
};

// Enum: ReadAnythingPresentationState
mojo.internal.bindings.read_anything.mojom.ReadAnythingPresentationState = {
  kUndefined: 0,
  kInactive: 1,
  kInSidePanel: 2,
  kInImmersiveOverlay: 3,
};

// Enum: Colors
mojo.internal.bindings.read_anything.mojom.Colors = {
  kDefault: 0,
  kLight: 1,
  kDark: 2,
  kYellow: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
};

// Enum: LetterSpacing
mojo.internal.bindings.read_anything.mojom.LetterSpacing = {
  kTightDeprecated: 0,
  kStandard: 1,
  kWide: 2,
  kVeryWide: 3,
};

// Enum: LineSpacing
mojo.internal.bindings.read_anything.mojom.LineSpacing = {
  kTightDeprecated: 0,
  kStandard: 1,
  kLoose: 2,
  kVeryLoose: 3,
};

// Enum: HighlightGranularity
mojo.internal.bindings.read_anything.mojom.HighlightGranularity = {
  kOn: 0,
  kOff: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: LineFocus
mojo.internal.bindings.read_anything.mojom.LineFocus = {
  kOff: 0,
  kWindow1: 1,
  kWindow3: 2,
  kWindow5: 3,
  kLineStatic: 4,
  kLineCursor: 5,
};

// Enum: DistillationStatus
mojo.internal.bindings.read_anything.mojom.DistillationStatus = {
  kFailure: 0,
  kSuccess: 1,
  kStillRunning: 2,
  kRestarted: 3,
};

// Union: VoicePackInstallationState
mojo.internal.Union(
    mojo.internal.bindings.read_anything.mojom.VoicePackInstallationStateSpec, 'read_anything.mojom.VoicePackInstallationState', {
      'arg_installation_state': {
        'ordinal': 0,
        'type': mojo.internal.bindings.read_anything.mojom.InstallationStateSpec.$,
        'nullable': false,
      },
      'arg_error_code': {
        'ordinal': 1,
        'type': mojo.internal.bindings.read_anything.mojom.ErrorCodeSpec.$,
        'nullable': false,
      },
    });

// Struct: VoicePackInfo
mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.VoicePackInfoSpec, 'read_anything.mojom.VoicePackInfo', [
      mojo.internal.StructField('arg_pack_state', 0, 0, mojo.internal.bindings.read_anything.mojom.VoicePackInstallationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedPageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec, 'read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.read_anything.mojom.UntrustedPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec, 'read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'read_anything.mojom.UntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createUntrustedPageHandler(arg_page, arg_handler) {
    return this.$.createUntrustedPageHandler(arg_page, arg_handler);
  }
  shouldShowUI() {
    return this.$.shouldShowUI();
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandlerFactory', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createUntrustedPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

  shouldShowUI() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'read_anything.mojom.UntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandlerFactory', [
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
        
        // Try Method 0: CreateUntrustedPageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUntrustedPageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShouldShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowUI (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_CreateUntrustedPageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createUntrustedPageHandler');
          const result = this.impl.createUntrustedPageHandler(params.arg_page, params.arg_handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactory_ShouldShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowUI');
          const result = this.impl.shouldShowUI();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryReceiver = mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryReceiver;

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryPtr = mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryRemote;
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryRequest = mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParams', [
      mojo.internal.StructField('arg_model_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetPresentationState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_Params', [
      mojo.internal.StructField('arg_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_InstallVoicePack_Params', [
      mojo.internal.StructField('arg_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_UninstallVoice_Params', [
      mojo.internal.StructField('arg_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnCopy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_Params', [
      mojo.internal.StructField('arg_line_spacing', 0, 0, mojo.internal.bindings.read_anything.mojom.LineSpacingSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_Params', [
      mojo.internal.StructField('arg_letter_spacing', 0, 0, mojo.internal.bindings.read_anything.mojom.LetterSpacingSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnFontChange_Params', [
      mojo.internal.StructField('arg_font', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_Params', [
      mojo.internal.StructField('arg_font_size', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnColorChange_Params', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.bindings.read_anything.mojom.ColorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_Params', [
      mojo.internal.StructField('arg_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnVoiceChange_Params', [
      mojo.internal.StructField('arg_voice', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_Params', [
      mojo.internal.StructField('arg_lang', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_LogExtensionState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_Params', [
      mojo.internal.StructField('arg_granularity', 0, 0, mojo.internal.bindings.read_anything.mojom.HighlightGranularitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_Params', [
      mojo.internal.StructField('arg_granularity', 0, 0, mojo.internal.bindings.read_anything.mojom.LineFocusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_Params', [
      mojo.internal.StructField('arg_playing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnLinkClicked_Params', [
      mojo.internal.StructField('arg_target_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_Params', [
      mojo.internal.StructField('arg_target_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnSelectionChange_Params', [
      mojo.internal.StructField('arg_target_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_focus_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_focus_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.read_anything.mojom.DistillationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_word_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_Params', [
      mojo.internal.StructField('arg_target_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_TogglePinState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_TogglePresentation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec, 'read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'read_anything.mojom.UntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDependencyParserModel() {
    return this.$.getDependencyParserModel();
  }
  getPresentationState() {
    return this.$.getPresentationState();
  }
  getVoicePackInfo(arg_language) {
    return this.$.getVoicePackInfo(arg_language);
  }
  installVoicePack(arg_language) {
    return this.$.installVoicePack(arg_language);
  }
  uninstallVoice(arg_language) {
    return this.$.uninstallVoice(arg_language);
  }
  onCopy() {
    return this.$.onCopy();
  }
  onLineSpaceChange(arg_line_spacing) {
    return this.$.onLineSpaceChange(arg_line_spacing);
  }
  onLetterSpaceChange(arg_letter_spacing) {
    return this.$.onLetterSpaceChange(arg_letter_spacing);
  }
  onFontChange(arg_font) {
    return this.$.onFontChange(arg_font);
  }
  onFontSizeChange(arg_font_size) {
    return this.$.onFontSizeChange(arg_font_size);
  }
  onLinksEnabledChanged(arg_enabled) {
    return this.$.onLinksEnabledChanged(arg_enabled);
  }
  onImagesEnabledChanged(arg_enabled) {
    return this.$.onImagesEnabledChanged(arg_enabled);
  }
  onColorChange(arg_color) {
    return this.$.onColorChange(arg_color);
  }
  onSpeechRateChange(arg_rate) {
    return this.$.onSpeechRateChange(arg_rate);
  }
  onVoiceChange(arg_voice, arg_lang) {
    return this.$.onVoiceChange(arg_voice, arg_lang);
  }
  onLanguagePrefChange(arg_lang, arg_enabled) {
    return this.$.onLanguagePrefChange(arg_lang, arg_enabled);
  }
  logExtensionState() {
    return this.$.logExtensionState();
  }
  onHighlightGranularityChanged(arg_granularity) {
    return this.$.onHighlightGranularityChanged(arg_granularity);
  }
  onLineFocusChanged(arg_granularity) {
    return this.$.onLineFocusChanged(arg_granularity);
  }
  onReadAloudAudioStateChange(arg_playing) {
    return this.$.onReadAloudAudioStateChange(arg_playing);
  }
  onLinkClicked(arg_target_tree_id, arg_target_node_id) {
    return this.$.onLinkClicked(arg_target_tree_id, arg_target_node_id);
  }
  onImageDataRequested(arg_target_tree_id, arg_target_node_id) {
    return this.$.onImageDataRequested(arg_target_tree_id, arg_target_node_id);
  }
  onSelectionChange(arg_target_tree_id, arg_anchor_node_id, arg_anchor_offset, arg_focus_node_id, arg_focus_offset) {
    return this.$.onSelectionChange(arg_target_tree_id, arg_anchor_node_id, arg_anchor_offset, arg_focus_node_id, arg_focus_offset);
  }
  onCollapseSelection() {
    return this.$.onCollapseSelection();
  }
  onScreenshotRequested() {
    return this.$.onScreenshotRequested();
  }
  onDistillationStatus(arg_status, arg_word_count) {
    return this.$.onDistillationStatus(arg_status, arg_word_count);
  }
  scrollToTargetNode(arg_target_tree_id, arg_target_node_id) {
    return this.$.scrollToTargetNode(arg_target_tree_id, arg_target_node_id);
  }
  closeUI() {
    return this.$.closeUI();
  }
  togglePinState() {
    return this.$.togglePinState();
  }
  sendPinStateRequest() {
    return this.$.sendPinStateRequest();
  }
  togglePresentation() {
    return this.$.togglePresentation();
  }
  ackReadingModeHidden() {
    return this.$.ackReadingModeHidden();
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandler', [
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

  getDependencyParserModel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec,
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec,
      [],
      false);
  }

  getPresentationState() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec,
      null,
      [],
      false);
  }

  getVoicePackInfo(arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec,
      null,
      [arg_language],
      false);
  }

  installVoicePack(arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec,
      null,
      [arg_language],
      false);
  }

  uninstallVoice(arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec,
      null,
      [arg_language],
      false);
  }

  onCopy() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec,
      null,
      [],
      false);
  }

  onLineSpaceChange(arg_line_spacing) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec,
      null,
      [arg_line_spacing],
      false);
  }

  onLetterSpaceChange(arg_letter_spacing) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec,
      null,
      [arg_letter_spacing],
      false);
  }

  onFontChange(arg_font) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec,
      null,
      [arg_font],
      false);
  }

  onFontSizeChange(arg_font_size) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec,
      null,
      [arg_font_size],
      false);
  }

  onLinksEnabledChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  onImagesEnabledChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  onColorChange(arg_color) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec,
      null,
      [arg_color],
      false);
  }

  onSpeechRateChange(arg_rate) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec,
      null,
      [arg_rate],
      false);
  }

  onVoiceChange(arg_voice, arg_lang) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec,
      null,
      [arg_voice, arg_lang],
      false);
  }

  onLanguagePrefChange(arg_lang, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec,
      null,
      [arg_lang, arg_enabled],
      false);
  }

  logExtensionState() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec,
      null,
      [],
      false);
  }

  onHighlightGranularityChanged(arg_granularity) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec,
      null,
      [arg_granularity],
      false);
  }

  onLineFocusChanged(arg_granularity) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec,
      null,
      [arg_granularity],
      false);
  }

  onReadAloudAudioStateChange(arg_playing) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec,
      null,
      [arg_playing],
      false);
  }

  onLinkClicked(arg_target_tree_id, arg_target_node_id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec,
      null,
      [arg_target_tree_id, arg_target_node_id],
      false);
  }

  onImageDataRequested(arg_target_tree_id, arg_target_node_id) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec,
      null,
      [arg_target_tree_id, arg_target_node_id],
      false);
  }

  onSelectionChange(arg_target_tree_id, arg_anchor_node_id, arg_anchor_offset, arg_focus_node_id, arg_focus_offset) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec,
      null,
      [arg_target_tree_id, arg_anchor_node_id, arg_anchor_offset, arg_focus_node_id, arg_focus_offset],
      false);
  }

  onCollapseSelection() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec,
      null,
      [],
      false);
  }

  onScreenshotRequested() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec,
      null,
      [],
      false);
  }

  onDistillationStatus(arg_status, arg_word_count) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec,
      null,
      [arg_status, arg_word_count],
      false);
  }

  scrollToTargetNode(arg_target_tree_id, arg_target_node_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec,
      null,
      [arg_target_tree_id, arg_target_node_id],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  togglePinState() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec,
      null,
      [],
      false);
  }

  sendPinStateRequest() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec,
      null,
      [],
      false);
  }

  togglePresentation() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec,
      null,
      [],
      false);
  }

  ackReadingModeHidden() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'read_anything.mojom.UntrustedPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandler', [
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
        
        // Try Method 0: GetDependencyParserModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDependencyParserModel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetPresentationState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPresentationState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetVoicePackInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVoicePackInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: InstallVoicePack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallVoicePack (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UninstallVoice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninstallVoice (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnCopy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCopy (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnLineSpaceChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLineSpaceChange (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnLetterSpaceChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLetterSpaceChange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnFontChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFontChange (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnFontSizeChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFontSizeChange (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnLinksEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLinksEnabledChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnImagesEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImagesEnabledChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnColorChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnColorChange (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnSpeechRateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpeechRateChange (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnVoiceChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVoiceChange (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnLanguagePrefChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLanguagePrefChange (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: LogExtensionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogExtensionState (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OnHighlightGranularityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHighlightGranularityChanged (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnLineFocusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLineFocusChanged (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OnReadAloudAudioStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReadAloudAudioStateChange (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: OnLinkClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLinkClicked (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: OnImageDataRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImageDataRequested (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: OnSelectionChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSelectionChange (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: OnCollapseSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCollapseSelection (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: OnScreenshotRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenshotRequested (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: OnDistillationStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDistillationStatus (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: ScrollToTargetNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollToTargetNode (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: TogglePinState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TogglePinState (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SendPinStateRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendPinStateRequest (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: TogglePresentation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TogglePresentation (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: AckReadingModeHidden
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AckReadingModeHidden (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDependencyParserModel');
          const result = this.impl.getDependencyParserModel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetDependencyParserModel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDependencyParserModel FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetPresentationState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPresentationState');
          const result = this.impl.getPresentationState();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_GetVoicePackInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVoicePackInfo');
          const result = this.impl.getVoicePackInfo(params.arg_language);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_InstallVoicePack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installVoicePack');
          const result = this.impl.installVoicePack(params.arg_language);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_UninstallVoice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninstallVoice');
          const result = this.impl.uninstallVoice(params.arg_language);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCopy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCopy');
          const result = this.impl.onCopy();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineSpaceChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLineSpaceChange');
          const result = this.impl.onLineSpaceChange(params.arg_line_spacing);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLetterSpaceChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLetterSpaceChange');
          const result = this.impl.onLetterSpaceChange(params.arg_letter_spacing);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFontChange');
          const result = this.impl.onFontChange(params.arg_font);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnFontSizeChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFontSizeChange');
          const result = this.impl.onFontSizeChange(params.arg_font_size);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinksEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLinksEnabledChanged');
          const result = this.impl.onLinksEnabledChanged(params.arg_enabled);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImagesEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImagesEnabledChanged');
          const result = this.impl.onImagesEnabledChanged(params.arg_enabled);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnColorChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onColorChange');
          const result = this.impl.onColorChange(params.arg_color);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSpeechRateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRateChange');
          const result = this.impl.onSpeechRateChange(params.arg_rate);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnVoiceChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVoiceChange');
          const result = this.impl.onVoiceChange(params.arg_voice, params.arg_lang);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLanguagePrefChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLanguagePrefChange');
          const result = this.impl.onLanguagePrefChange(params.arg_lang, params.arg_enabled);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_LogExtensionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logExtensionState');
          const result = this.impl.logExtensionState();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnHighlightGranularityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHighlightGranularityChanged');
          const result = this.impl.onHighlightGranularityChanged(params.arg_granularity);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLineFocusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLineFocusChanged');
          const result = this.impl.onLineFocusChanged(params.arg_granularity);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnReadAloudAudioStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReadAloudAudioStateChange');
          const result = this.impl.onReadAloudAudioStateChange(params.arg_playing);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnLinkClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLinkClicked');
          const result = this.impl.onLinkClicked(params.arg_target_tree_id, params.arg_target_node_id);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnImageDataRequested_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImageDataRequested');
          const result = this.impl.onImageDataRequested(params.arg_target_tree_id, params.arg_target_node_id);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnSelectionChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSelectionChange');
          const result = this.impl.onSelectionChange(params.arg_target_tree_id, params.arg_anchor_node_id, params.arg_anchor_offset, params.arg_focus_node_id, params.arg_focus_offset);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnCollapseSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCollapseSelection');
          const result = this.impl.onCollapseSelection();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnScreenshotRequested_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenshotRequested');
          const result = this.impl.onScreenshotRequested();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_OnDistillationStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDistillationStatus');
          const result = this.impl.onDistillationStatus(params.arg_status, params.arg_word_count);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_ScrollToTargetNode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollToTargetNode');
          const result = this.impl.scrollToTargetNode(params.arg_target_tree_id, params.arg_target_node_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_CloseUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePinState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.togglePinState');
          const result = this.impl.togglePinState();
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_SendPinStateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendPinStateRequest');
          const result = this.impl.sendPinStateRequest();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_TogglePresentation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.togglePresentation');
          const result = this.impl.togglePresentation();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPageHandler_AckReadingModeHidden_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.ackReadingModeHidden');
          const result = this.impl.ackReadingModeHidden();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerReceiver = mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerReceiver;

mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerPtr = mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerRemote;
mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerRequest = mojo.internal.bindings.read_anything.mojom.UntrustedPageHandlerPendingReceiver;


// Interface: UntrustedPage
mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_AccessibilityEventReceived_Params', [
      mojo.internal.StructField('arg_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_updates', 8, 0, mojo.internal.Array(mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_events', 16, 0, mojo.internal.Array(mojo.internal.bindings.ax.mojom.AXEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnGetPresentationState_Params', [
      mojo.internal.StructField('arg_presentation_state', 0, 0, mojo.internal.bindings.read_anything.mojom.ReadAnythingPresentationStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_Params', [
      mojo.internal.StructField('arg_voice_pack_info', 0, 0, mojo.internal.bindings.read_anything.mojom.VoicePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_Params', [
      mojo.internal.StructField('arg_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 8, 0, mojo.internal.bindings.ax.mojom.AXLocationAndScrollUpdatesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_Params', [
      mojo.internal.StructField('arg_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ukm_source_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_pdf', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_Params', [
      mojo.internal.StructField('arg_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec, 'read_anything.mojom.UntrustedPage_SetLanguageCode_Params', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnDeviceLocked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec, 'read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_Params', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_Params', [
      mojo.internal.StructField('arg_line_spacing', 0, 0, mojo.internal.bindings.read_anything.mojom.LineSpacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_letter_spacing', 8, 0, mojo.internal.bindings.read_anything.mojom.LetterSpacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_font', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_font_size', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_color', 32, 0, mojo.internal.bindings.read_anything.mojom.ColorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_speech_rate', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_voices', 48, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_languages_enabled_in_pref', 56, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_granularity', 64, 0, mojo.internal.bindings.read_anything.mojom.HighlightGranularitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_focus', 72, 0, mojo.internal.bindings.read_anything.mojom.LineFocusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_links_enabled', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_images_enabled', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec, 'read_anything.mojom.UntrustedPage_ScreenAIServiceReady_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnReadingModeHidden_Params', [
      mojo.internal.StructField('arg_tab_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTabWillDetach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnTabMuteStateChange_Params', [
      mojo.internal.StructField('arg_muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnImageDataDownloaded_Params', [
      mojo.internal.StructField('arg_tree_id', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image', 8, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec, 'read_anything.mojom.UntrustedPage_OnPinStatusReceived_Params', [
      mojo.internal.StructField('arg_new_pin_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.read_anything.mojom.UntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageRemote = class {
  static get $interfaceName() {
    return 'read_anything.mojom.UntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.read_anything.mojom.UntrustedPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.read_anything.mojom.UntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  accessibilityEventReceived(arg_tree_id, arg_updates, arg_events) {
    return this.$.accessibilityEventReceived(arg_tree_id, arg_updates, arg_events);
  }
  onGetPresentationState(arg_presentation_state) {
    return this.$.onGetPresentationState(arg_presentation_state);
  }
  onGetVoicePackInfo(arg_voice_pack_info) {
    return this.$.onGetVoicePackInfo(arg_voice_pack_info);
  }
  accessibilityLocationChangesReceived(arg_tree_id, arg_details) {
    return this.$.accessibilityLocationChangesReceived(arg_tree_id, arg_details);
  }
  onActiveAXTreeIDChanged(arg_tree_id, arg_ukm_source_id, arg_is_pdf) {
    return this.$.onActiveAXTreeIDChanged(arg_tree_id, arg_ukm_source_id, arg_is_pdf);
  }
  onAXTreeDestroyed(arg_tree_id) {
    return this.$.onAXTreeDestroyed(arg_tree_id);
  }
  setLanguageCode(arg_code) {
    return this.$.setLanguageCode(arg_code);
  }
  onDeviceLocked() {
    return this.$.onDeviceLocked();
  }
  onTtsEngineInstalled() {
    return this.$.onTtsEngineInstalled();
  }
  setDefaultLanguageCode(arg_code) {
    return this.$.setDefaultLanguageCode(arg_code);
  }
  onSettingsRestoredFromPrefs(arg_line_spacing, arg_letter_spacing, arg_font, arg_font_size, arg_links_enabled, arg_images_enabled, arg_color, arg_speech_rate, arg_voices, arg_languages_enabled_in_pref, arg_granularity, arg_line_focus) {
    return this.$.onSettingsRestoredFromPrefs(arg_line_spacing, arg_letter_spacing, arg_font, arg_font_size, arg_links_enabled, arg_images_enabled, arg_color, arg_speech_rate, arg_voices, arg_languages_enabled_in_pref, arg_granularity, arg_line_focus);
  }
  screenAIServiceReady() {
    return this.$.screenAIServiceReady();
  }
  onReadingModeHidden(arg_tab_active) {
    return this.$.onReadingModeHidden(arg_tab_active);
  }
  onTabWillDetach() {
    return this.$.onTabWillDetach();
  }
  onTabMuteStateChange(arg_muted) {
    return this.$.onTabMuteStateChange(arg_muted);
  }
  onImageDataDownloaded(arg_tree_id, arg_node_id, arg_image) {
    return this.$.onImageDataDownloaded(arg_tree_id, arg_node_id, arg_image);
  }
  onPinStatusReceived(arg_new_pin_state) {
    return this.$.onPinStatusReceived(arg_new_pin_state);
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPage', [
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

  accessibilityEventReceived(arg_tree_id, arg_updates, arg_events) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec,
      null,
      [arg_tree_id, arg_updates, arg_events],
      false);
  }

  onGetPresentationState(arg_presentation_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec,
      null,
      [arg_presentation_state],
      false);
  }

  onGetVoicePackInfo(arg_voice_pack_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec,
      null,
      [arg_voice_pack_info],
      false);
  }

  accessibilityLocationChangesReceived(arg_tree_id, arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec,
      null,
      [arg_tree_id, arg_details],
      false);
  }

  onActiveAXTreeIDChanged(arg_tree_id, arg_ukm_source_id, arg_is_pdf) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec,
      null,
      [arg_tree_id, arg_ukm_source_id, arg_is_pdf],
      false);
  }

  onAXTreeDestroyed(arg_tree_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec,
      null,
      [arg_tree_id],
      false);
  }

  setLanguageCode(arg_code) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec,
      null,
      [arg_code],
      false);
  }

  onDeviceLocked() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec,
      null,
      [],
      false);
  }

  onTtsEngineInstalled() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec,
      null,
      [],
      false);
  }

  setDefaultLanguageCode(arg_code) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec,
      null,
      [arg_code],
      false);
  }

  onSettingsRestoredFromPrefs(arg_line_spacing, arg_letter_spacing, arg_font, arg_font_size, arg_links_enabled, arg_images_enabled, arg_color, arg_speech_rate, arg_voices, arg_languages_enabled_in_pref, arg_granularity, arg_line_focus) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec,
      null,
      [arg_line_spacing, arg_letter_spacing, arg_font, arg_font_size, arg_links_enabled, arg_images_enabled, arg_color, arg_speech_rate, arg_voices, arg_languages_enabled_in_pref, arg_granularity, arg_line_focus],
      false);
  }

  screenAIServiceReady() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec,
      null,
      [],
      false);
  }

  onReadingModeHidden(arg_tab_active) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec,
      null,
      [arg_tab_active],
      false);
  }

  onTabWillDetach() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec,
      null,
      [],
      false);
  }

  onTabMuteStateChange(arg_muted) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec,
      null,
      [arg_muted],
      false);
  }

  onImageDataDownloaded(arg_tree_id, arg_node_id, arg_image) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec,
      null,
      [arg_tree_id, arg_node_id, arg_image],
      false);
  }

  onPinStatusReceived(arg_new_pin_state) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec,
      null,
      [arg_new_pin_state],
      false);
  }

};

mojo.internal.bindings.read_anything.mojom.UntrustedPage.getRemote = function() {
  let remote = new mojo.internal.bindings.read_anything.mojom.UntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'read_anything.mojom.UntrustedPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPage', [
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
        
        // Try Method 0: AccessibilityEventReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AccessibilityEventReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnGetPresentationState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGetPresentationState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnGetVoicePackInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGetVoicePackInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AccessibilityLocationChangesReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AccessibilityLocationChangesReceived (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnActiveAXTreeIDChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnActiveAXTreeIDChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnAXTreeDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAXTreeDestroyed (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetLanguageCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLanguageCode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnDeviceLocked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceLocked (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnTtsEngineInstalled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTtsEngineInstalled (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetDefaultLanguageCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDefaultLanguageCode (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnSettingsRestoredFromPrefs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSettingsRestoredFromPrefs (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ScreenAIServiceReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScreenAIServiceReady (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnReadingModeHidden
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReadingModeHidden (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnTabWillDetach
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabWillDetach (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnTabMuteStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabMuteStateChange (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnImageDataDownloaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImageDataDownloaded (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnPinStatusReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPinStatusReceived (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityEventReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.accessibilityEventReceived');
          const result = this.impl.accessibilityEventReceived(params.arg_tree_id, params.arg_updates, params.arg_events);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetPresentationState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGetPresentationState');
          const result = this.impl.onGetPresentationState(params.arg_presentation_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnGetVoicePackInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGetVoicePackInfo');
          const result = this.impl.onGetVoicePackInfo(params.arg_voice_pack_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_AccessibilityLocationChangesReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.accessibilityLocationChangesReceived');
          const result = this.impl.accessibilityLocationChangesReceived(params.arg_tree_id, params.arg_details);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnActiveAXTreeIDChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActiveAXTreeIDChanged');
          const result = this.impl.onActiveAXTreeIDChanged(params.arg_tree_id, params.arg_ukm_source_id, params.arg_is_pdf);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnAXTreeDestroyed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAXTreeDestroyed');
          const result = this.impl.onAXTreeDestroyed(params.arg_tree_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetLanguageCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLanguageCode');
          const result = this.impl.setLanguageCode(params.arg_code);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnDeviceLocked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceLocked');
          const result = this.impl.onDeviceLocked();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTtsEngineInstalled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTtsEngineInstalled');
          const result = this.impl.onTtsEngineInstalled();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_SetDefaultLanguageCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDefaultLanguageCode');
          const result = this.impl.setDefaultLanguageCode(params.arg_code);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnSettingsRestoredFromPrefs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSettingsRestoredFromPrefs');
          const result = this.impl.onSettingsRestoredFromPrefs(params.arg_line_spacing, params.arg_letter_spacing, params.arg_font, params.arg_font_size, params.arg_links_enabled, params.arg_images_enabled, params.arg_color, params.arg_speech_rate, params.arg_voices, params.arg_languages_enabled_in_pref, params.arg_granularity, params.arg_line_focus);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_ScreenAIServiceReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.screenAIServiceReady');
          const result = this.impl.screenAIServiceReady();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnReadingModeHidden_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReadingModeHidden');
          const result = this.impl.onReadingModeHidden(params.arg_tab_active);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabWillDetach_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabWillDetach');
          const result = this.impl.onTabWillDetach();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnTabMuteStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabMuteStateChange');
          const result = this.impl.onTabMuteStateChange(params.arg_muted);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnImageDataDownloaded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImageDataDownloaded');
          const result = this.impl.onImageDataDownloaded(params.arg_tree_id, params.arg_node_id, params.arg_image);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.read_anything.mojom.UntrustedPage_OnPinStatusReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPinStatusReceived');
          const result = this.impl.onPinStatusReceived(params.arg_new_pin_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.read_anything.mojom.UntrustedPageReceiver = mojo.internal.bindings.read_anything.mojom.UntrustedPageReceiver;

mojo.internal.bindings.read_anything.mojom.UntrustedPagePtr = mojo.internal.bindings.read_anything.mojom.UntrustedPageRemote;
mojo.internal.bindings.read_anything.mojom.UntrustedPageRequest = mojo.internal.bindings.read_anything.mojom.UntrustedPagePendingReceiver;

