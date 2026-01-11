// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/app_home/app_home.mojom
 // Module: app_home.mojom

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
 

 mojo.internal.bindings.app_home = mojo.internal.bindings.app_home || {};
mojo.internal.bindings.app_home.mojom = mojo.internal.bindings.app_home.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.web_app = mojo.internal.bindings.web_app || {};

mojo.internal.bindings.app_home.mojom.RunOnOsLoginModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_home.mojom.AppTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_home.mojom.AppInfoSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.ClickEventSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandlerFactory = {};
mojo.internal.bindings.app_home.mojom.PageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.app_home.mojom.PageHandlerFactory.$interfaceName = 'app_home.mojom.PageHandlerFactory';
mojo.internal.bindings.app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler = {};
mojo.internal.bindings.app_home.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.app_home.mojom.PageHandler.$interfaceName = 'app_home.mojom.PageHandler';
mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_UninstallApp_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_LaunchApp_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.Page = {};
mojo.internal.bindings.app_home.mojom.PageSpec = { $ : {} };
mojo.internal.bindings.app_home.mojom.Page.$interfaceName = 'app_home.mojom.Page';
mojo.internal.bindings.app_home.mojom.Page_AddApp_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.Page_RemoveApp_ParamsSpec = { $: {} };
mojo.internal.bindings.app_home.mojom.Page_UpdateApp_ParamsSpec = { $: {} };

// Enum: RunOnOsLoginMode
mojo.internal.bindings.app_home.mojom.RunOnOsLoginMode = {
  kNotRun: 0,
  kWindowed: 1,
  kMinimized: 2,
};

// Enum: AppType
mojo.internal.bindings.app_home.mojom.AppType = {
  kWebApp: 0,
  kIsolatedWebApp: 1,
  kDeprecatedChromeApp: 2,
};

// Struct: AppInfo
mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.AppInfoSpec, 'app_home.mojom.AppInfo', [
      mojo.internal.StructField('arg_app_type', 0, 0, mojo.internal.bindings.app_home.mojom.AppTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_run_on_os_login_mode', 40, 0, mojo.internal.bindings.app_home.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_store_page_url', 48, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_may_show_run_on_os_login_mode', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_may_toggle_run_on_os_login_mode', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_locally_installed', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_open_in_window', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_may_uninstall', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ClickEvent
mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.ClickEventSpec, 'app_home.mojom.ClickEvent', [
      mojo.internal.StructField('arg_button', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'app_home.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.app_home.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.app_home.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.app_home.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.app_home.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'app_home.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.app_home.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.app_home.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.app_home.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('app_home.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.app_home.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.app_home.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_home.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.app_home.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('app_home.mojom.PageHandlerFactory', [
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
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.app_home.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.app_home.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.app_home.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.app_home.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.app_home.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.app_home.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ParamsSpec, 'app_home.mojom.PageHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ResponseParamsSpec, 'app_home.mojom.PageHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('arg_app_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.app_home.mojom.AppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec, 'app_home.mojom.PageHandler_GetDeprecationLinkString_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec, 'app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParams', [
      mojo.internal.StructField('arg_link_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_UninstallApp_ParamsSpec, 'app_home.mojom.PageHandler_UninstallApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec, 'app_home.mojom.PageHandler_ShowAppSettings_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec, 'app_home.mojom.PageHandler_CreateAppShortcut_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec, 'app_home.mojom.PageHandler_CreateAppShortcut_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_LaunchApp_ParamsSpec, 'app_home.mojom.PageHandler_LaunchApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_click_event', 8, 0, mojo.internal.bindings.app_home.mojom.ClickEventSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec, 'app_home.mojom.PageHandler_SetRunOnOsLoginMode_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_run_on_os_login_mode', 8, 0, mojo.internal.bindings.app_home.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec, 'app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec, 'app_home.mojom.PageHandler_InstallAppLocally_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec, 'app_home.mojom.PageHandler_SetUserDisplayMode_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_mode', 8, 0, mojo.internal.bindings.web_app.mojom.UserDisplayModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.app_home.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.app_home.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'app_home.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.app_home.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.app_home.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getApps() {
    return this.$.getApps();
  }
  getDeprecationLinkString() {
    return this.$.getDeprecationLinkString();
  }
  uninstallApp(arg_app_id) {
    return this.$.uninstallApp(arg_app_id);
  }
  showAppSettings(arg_app_id) {
    return this.$.showAppSettings(arg_app_id);
  }
  createAppShortcut(arg_app_id) {
    return this.$.createAppShortcut(arg_app_id);
  }
  launchApp(arg_app_id, arg_click_event) {
    return this.$.launchApp(arg_app_id, arg_click_event);
  }
  setRunOnOsLoginMode(arg_app_id, arg_run_on_os_login_mode) {
    return this.$.setRunOnOsLoginMode(arg_app_id, arg_run_on_os_login_mode);
  }
  launchDeprecatedAppDialog() {
    return this.$.launchDeprecatedAppDialog();
  }
  installAppLocally(arg_app_id) {
    return this.$.installAppLocally(arg_app_id);
  }
  setUserDisplayMode(arg_app_id, arg_display_mode) {
    return this.$.setUserDisplayMode(arg_app_id, arg_display_mode);
  }
};

mojo.internal.bindings.app_home.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('app_home.mojom.PageHandler', [
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

  getApps() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ParamsSpec,
      mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getDeprecationLinkString() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec,
      mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec,
      [],
      false);
  }

  uninstallApp(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_UninstallApp_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  showAppSettings(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  createAppShortcut(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec,
      mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  launchApp(arg_app_id, arg_click_event) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_LaunchApp_ParamsSpec,
      null,
      [arg_app_id, arg_click_event],
      false);
  }

  setRunOnOsLoginMode(arg_app_id, arg_run_on_os_login_mode) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec,
      null,
      [arg_app_id, arg_run_on_os_login_mode],
      false);
  }

  launchDeprecatedAppDialog() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec,
      null,
      [],
      false);
  }

  installAppLocally(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  setUserDisplayMode(arg_app_id, arg_display_mode) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec,
      null,
      [arg_app_id, arg_display_mode],
      false);
  }

};

mojo.internal.bindings.app_home.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.app_home.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_home.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.app_home.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('app_home.mojom.PageHandler', [
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
        
        // Try Method 0: GetApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApps (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDeprecationLinkString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeprecationLinkString (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UninstallApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_UninstallApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninstallApp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowAppSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowAppSettings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateAppShortcut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAppShortcut (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LaunchApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_LaunchApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchApp (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetRunOnOsLoginMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRunOnOsLoginMode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: LaunchDeprecatedAppDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchDeprecatedAppDialog (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: InstallAppLocally
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallAppLocally (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetUserDisplayMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserDisplayMode (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getApps');
          const result = this.impl.getApps();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_home.mojom.PageHandler_GetApps_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetApps FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeprecationLinkString');
          const result = this.impl.getDeprecationLinkString();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeprecationLinkString FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_UninstallApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninstallApp');
          const result = this.impl.uninstallApp(params.arg_app_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showAppSettings');
          const result = this.impl.showAppSettings(params.arg_app_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAppShortcut');
          const result = this.impl.createAppShortcut(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateAppShortcut FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_LaunchApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchApp');
          const result = this.impl.launchApp(params.arg_app_id, params.arg_click_event);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRunOnOsLoginMode');
          const result = this.impl.setRunOnOsLoginMode(params.arg_app_id, params.arg_run_on_os_login_mode);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchDeprecatedAppDialog');
          const result = this.impl.launchDeprecatedAppDialog();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installAppLocally');
          const result = this.impl.installAppLocally(params.arg_app_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserDisplayMode');
          const result = this.impl.setUserDisplayMode(params.arg_app_id, params.arg_display_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.app_home.mojom.PageHandlerReceiver = mojo.internal.bindings.app_home.mojom.PageHandlerReceiver;

mojo.internal.bindings.app_home.mojom.PageHandlerPtr = mojo.internal.bindings.app_home.mojom.PageHandlerRemote;
mojo.internal.bindings.app_home.mojom.PageHandlerRequest = mojo.internal.bindings.app_home.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.Page_AddApp_ParamsSpec, 'app_home.mojom.Page_AddApp_Params', [
      mojo.internal.StructField('arg_app_info', 0, 0, mojo.internal.bindings.app_home.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.Page_RemoveApp_ParamsSpec, 'app_home.mojom.Page_RemoveApp_Params', [
      mojo.internal.StructField('arg_app_info', 0, 0, mojo.internal.bindings.app_home.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_home.mojom.Page_UpdateApp_ParamsSpec, 'app_home.mojom.Page_UpdateApp_Params', [
      mojo.internal.StructField('arg_app_info', 0, 0, mojo.internal.bindings.app_home.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.app_home.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.app_home.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'app_home.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.app_home.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.app_home.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addApp(arg_app_info) {
    return this.$.addApp(arg_app_info);
  }
  removeApp(arg_app_info) {
    return this.$.removeApp(arg_app_info);
  }
  updateApp(arg_app_info) {
    return this.$.updateApp(arg_app_info);
  }
};

mojo.internal.bindings.app_home.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('app_home.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addApp(arg_app_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.app_home.mojom.Page_AddApp_ParamsSpec,
      null,
      [arg_app_info],
      false);
  }

  removeApp(arg_app_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.app_home.mojom.Page_RemoveApp_ParamsSpec,
      null,
      [arg_app_info],
      false);
  }

  updateApp(arg_app_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.app_home.mojom.Page_UpdateApp_ParamsSpec,
      null,
      [arg_app_info],
      false);
  }

};

mojo.internal.bindings.app_home.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.app_home.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_home.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.app_home.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('app_home.mojom.Page', [
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
        
        // Try Method 0: AddApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.Page_AddApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddApp (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemoveApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.Page_RemoveApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.Page_UpdateApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateApp (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.Page_AddApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addApp');
          const result = this.impl.addApp(params.arg_app_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.Page_RemoveApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeApp');
          const result = this.impl.removeApp(params.arg_app_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_home.mojom.Page_UpdateApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateApp');
          const result = this.impl.updateApp(params.arg_app_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.app_home.mojom.PageReceiver = mojo.internal.bindings.app_home.mojom.PageReceiver;

mojo.internal.bindings.app_home.mojom.PagePtr = mojo.internal.bindings.app_home.mojom.PageRemote;
mojo.internal.bindings.app_home.mojom.PageRequest = mojo.internal.bindings.app_home.mojom.PagePendingReceiver;

