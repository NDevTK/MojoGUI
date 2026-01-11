// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/privacy/mojom/app_permission_handler.mojom
 // Module: ash.settings.app_permission.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.settings = mojo.internal.bindings.ash.settings || {};
mojo.internal.bindings.ash.settings.app_permission = mojo.internal.bindings.ash.settings.app_permission || {};
mojo.internal.bindings.ash.settings.app_permission.mojom = mojo.internal.bindings.ash.settings.app_permission.mojom || {};
mojo.internal.bindings.app_management = mojo.internal.bindings.app_management || {};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler = {};
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler.$interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsHandler';
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver = {};
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver.$interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsObserver';
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec = { $: {} };

// Struct: App
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppSpec, 'ash.settings.app_permission.mojom.App', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.bindings.app_management.mojom.AppTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_permissions', 24, 0, mojo.internal.Map(mojo.internal.bindings.app_management.mojom.PermissionTypeSpec.$, mojo.internal.bindings.app_management.mojom.PermissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppPermissionsHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('arg_apps', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.settings.app_permission.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParams', [
      mojo.internal.StructField('arg_apps', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.settings.app_permission.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParams', [
      mojo.internal.StructField('arg_apps', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.settings.app_permission.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_Params', [
      mojo.internal.StructField('arg_permission_type', 0, 0, mojo.internal.bindings.app_management.mojom.PermissionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_permission', 8, 0, mojo.internal.bindings.app_management.mojom.PermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  getApps() {
    return this.$.getApps();
  }
  getSystemAppsThatUseCamera() {
    return this.$.getSystemAppsThatUseCamera();
  }
  getSystemAppsThatUseMicrophone() {
    return this.$.getSystemAppsThatUseMicrophone();
  }
  openBrowserPermissionSettings(arg_permission_type) {
    return this.$.openBrowserPermissionSettings(arg_permission_type);
  }
  openNativeSettings(arg_app_id) {
    return this.$.openNativeSettings(arg_app_id);
  }
  setPermission(arg_app_id, arg_permission) {
    return this.$.setPermission(arg_app_id, arg_permission);
  }
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppPermissionsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getApps() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec,
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getSystemAppsThatUseCamera() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec,
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec,
      [],
      false);
  }

  getSystemAppsThatUseMicrophone() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec,
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec,
      [],
      false);
  }

  openBrowserPermissionSettings(arg_permission_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec,
      null,
      [arg_permission_type],
      false);
  }

  openNativeSettings(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  setPermission(arg_app_id, arg_permission) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec,
      null,
      [arg_app_id, arg_permission],
      false);
  }

};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppPermissionsHandler', [
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApps (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSystemAppsThatUseCamera
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSystemAppsThatUseCamera (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetSystemAppsThatUseMicrophone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSystemAppsThatUseMicrophone (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenBrowserPermissionSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenBrowserPermissionSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenNativeSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNativeSettings (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPermission (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getApps');
          const result = this.impl.getApps();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetApps FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSystemAppsThatUseCamera');
          const result = this.impl.getSystemAppsThatUseCamera();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSystemAppsThatUseCamera FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSystemAppsThatUseMicrophone');
          const result = this.impl.getSystemAppsThatUseMicrophone();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSystemAppsThatUseMicrophone FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openBrowserPermissionSettings');
          const result = this.impl.openBrowserPermissionSettings(params.arg_permission_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openNativeSettings');
          const result = this.impl.openNativeSettings(params.arg_app_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPermission');
          const result = this.impl.setPermission(params.arg_app_id, params.arg_permission);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerReceiver = mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerReceiver;

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerPtr = mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerRemote;
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerRequest = mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver;


// Interface: AppPermissionsObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_Params', [
      mojo.internal.StructField('arg_app', 0, 0, mojo.internal.bindings.ash.settings.app_permission.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAppRemoved(arg_app_id) {
    return this.$.onAppRemoved(arg_app_id);
  }
  onAppUpdated(arg_app) {
    return this.$.onAppUpdated(arg_app);
  }
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppPermissionsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAppRemoved(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  onAppUpdated(arg_app) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec,
      null,
      [arg_app],
      false);
  }

};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppPermissionsObserver', [
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
        
        // Try Method 0: OnAppRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppRemoved (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAppUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppUpdated (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppRemoved');
          const result = this.impl.onAppRemoved(params.arg_app_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppUpdated');
          const result = this.impl.onAppUpdated(params.arg_app);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverReceiver = mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverReceiver;

mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverPtr = mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverRemote;
mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverRequest = mojo.internal.bindings.ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver;

