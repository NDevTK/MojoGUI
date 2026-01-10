// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/help_app_ui.mojom
// Module: ash.help_app.mojom

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
var ash = ash || {};
ash.help_app = ash.help_app || {};
ash.help_app.mojom = ash.help_app.mojom || {};
var url = url || {};

ash.help_app.mojom.ActionTypeIdSpec = { $: mojo.internal.Enum() };
ash.help_app.mojom.SettingsComponentSpec = { $: mojo.internal.Enum() };
ash.help_app.mojom.DeviceInfoSpec = { $: {} };
ash.help_app.mojom.PageHandlerFactory = {};
ash.help_app.mojom.PageHandlerFactory.$interfaceName = 'ash.help_app.mojom.PageHandlerFactory';
ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler = {};
ash.help_app.mojom.PageHandler.$interfaceName = 'ash.help_app.mojom.PageHandler';
ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec = { $: {} };
ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec = { $: {} };

// Enum: ActionTypeId
ash.help_app.mojom.ActionTypeId = {
  INVALID: 0,
  OPEN_CHROME: 1,
  OPEN_LAUNCHER: 2,
  OPEN_PERSONALIZATION_APP: 3,
  OPEN_PLAY_STORE: 4,
  OPEN_GOOGLE_DOCS: 5,
  OPEN_GOOGLE_PHOTOS: 6,
  OPEN_SETTINGS_PRINTER: 7,
  OPEN_PHONE_HUB: 8,
  OPEN_YOUTUBE: 9,
  OPEN_FILE_MANAGER: 10,
};

// Enum: SettingsComponent
ash.help_app.mojom.SettingsComponent = {
  HOME: 0,
  ACCESSIBILITY: 1,
  BLUETOOTH: 2,
  DISPLAY: 3,
  INPUT: 4,
  MULTI_DEVICE: 5,
  PEOPLE: 6,
  PER_DEVICE_KEYBOARD: 7,
  PER_DEVICE_TOUCHPAD: 8,
  PERSONALIZATION: 9,
  PRINTING: 10,
  SECURITY_AND_SIGN_IN: 11,
  TOUCHPAD_REVERSE_SCROLLING: 12,
  TOUCHPAD_SIMULATE_RIGHT_CLICK: 13,
};

// Struct: DeviceInfo
mojo.internal.Struct(
    ash.help_app.mojom.DeviceInfoSpec, 'ash.help_app.mojom.DeviceInfo', [
      mojo.internal.StructField('board', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_steam_allowed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.help_app.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.help_app.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.help_app.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.help_app.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.help_app.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.help_app.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.help_app.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.help_app.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.help_app.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.help_app.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.help_app.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.help_app.mojom.PageHandlerFactoryReceiver = ash.help_app.mojom.PageHandlerFactoryReceiver;

ash.help_app.mojom.PageHandlerFactoryPtr = ash.help_app.mojom.PageHandlerFactoryRemote;
ash.help_app.mojom.PageHandlerFactoryRequest = ash.help_app.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.help_app.mojom.PageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec, 'ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec, 'ash.help_app.mojom.PageHandler_ShowParentalControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec, 'ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_Params', [
      mojo.internal.StructField('action_type_id', 0, 0, ash.help_app.mojom.ActionTypeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec, 'ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec, 'ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec, 'ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec, 'ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec, 'ash.help_app.mojom.PageHandler_GetDeviceInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec, 'ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_info', 0, 0, ash.help_app.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec, 'ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec, 'ash.help_app.mojom.PageHandler_OpenSettings_Params', [
      mojo.internal.StructField('component', 0, 0, ash.help_app.mojom.SettingsComponentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec, 'ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec, 'ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_Params', [
    ],
    [[0, 8]]);

ash.help_app.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.help_app.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.help_app.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.help_app.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.help_app.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.help_app.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  showOnDeviceAppControls() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec,
      null,
      [],
      false);
  }

  showParentalControls() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec,
      null,
      [],
      false);
  }

  triggerWelcomeTipCallToAction(action_type_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec,
      null,
      [action_type_id],
      false);
  }

  isLauncherSearchEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec,
      ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec,
      [],
      false);
  }

  launchMicrosoft365Setup() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec,
      null,
      [],
      false);
  }

  maybeShowReleaseNotesNotification() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec,
      null,
      [],
      false);
  }

  getDeviceInfo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec,
      ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec,
      [],
      false);
  }

  openUrlInBrowserAndTriggerInstallDialog(url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec,
      null,
      [url],
      false);
  }

  openSettings(component) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec,
      null,
      [component],
      false);
  }

  setHasCompletedNewDeviceChecklist() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec,
      null,
      [],
      false);
  }

  setHasVisitedHowToPage() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.help_app.mojom.PageHandler.getRemote = function() {
  let remote = new ash.help_app.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.help_app.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.help_app.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShowOnDeviceAppControls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowOnDeviceAppControls (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowParentalControls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowParentalControls (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: TriggerWelcomeTipCallToAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerWelcomeTipCallToAction (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: IsLauncherSearchEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsLauncherSearchEnabled (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LaunchMicrosoft365Setup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchMicrosoft365Setup (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: MaybeShowReleaseNotesNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowReleaseNotesNotification (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceInfo (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OpenUrlInBrowserAndTriggerInstallDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInBrowserAndTriggerInstallDialog (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OpenSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSettings (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetHasCompletedNewDeviceChecklist
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasCompletedNewDeviceChecklist (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetHasVisitedHowToPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasVisitedHowToPage (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowOnDeviceAppControls_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showOnDeviceAppControls');
          const result = this.impl.showOnDeviceAppControls();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_ShowParentalControls_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showParentalControls');
          const result = this.impl.showParentalControls();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_TriggerWelcomeTipCallToAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerWelcomeTipCallToAction');
          const result = this.impl.triggerWelcomeTipCallToAction(params.action_type_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isLauncherSearchEnabled');
          const result = this.impl.isLauncherSearchEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.PageHandler_IsLauncherSearchEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_LaunchMicrosoft365Setup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchMicrosoft365Setup');
          const result = this.impl.launchMicrosoft365Setup();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_MaybeShowReleaseNotesNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeShowReleaseNotesNotification');
          const result = this.impl.maybeShowReleaseNotesNotification();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_GetDeviceInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceInfo');
          const result = this.impl.getDeviceInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.PageHandler_GetDeviceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenUrlInBrowserAndTriggerInstallDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInBrowserAndTriggerInstallDialog');
          const result = this.impl.openUrlInBrowserAndTriggerInstallDialog(params.url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_OpenSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openSettings');
          const result = this.impl.openSettings(params.component);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasCompletedNewDeviceChecklist_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasCompletedNewDeviceChecklist');
          const result = this.impl.setHasCompletedNewDeviceChecklist();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.PageHandler_SetHasVisitedHowToPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasVisitedHowToPage');
          const result = this.impl.setHasVisitedHowToPage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.help_app.mojom.PageHandlerReceiver = ash.help_app.mojom.PageHandlerReceiver;

ash.help_app.mojom.PageHandlerPtr = ash.help_app.mojom.PageHandlerRemote;
ash.help_app.mojom.PageHandlerRequest = ash.help_app.mojom.PageHandlerPendingReceiver;

