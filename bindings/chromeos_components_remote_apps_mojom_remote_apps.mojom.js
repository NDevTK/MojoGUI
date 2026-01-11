// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/components/remote_apps/mojom/remote_apps.mojom
 // Module: chromeos.remote_apps.mojom

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
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.remote_apps = mojo.internal.bindings.chromeos.remote_apps || {};
mojo.internal.bindings.chromeos.remote_apps.mojom = mojo.internal.bindings.chromeos.remote_apps.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chromeos.remote_apps.mojom.AddFolderResultSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.AddAppResultSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps = {};
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsSpec = { $ : {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps.$interfaceName = 'chromeos.remote_apps.mojom.RemoteApps';
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory = {};
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactorySpec = { $ : {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory.$interfaceName = 'chromeos.remote_apps.mojom.RemoteAppsFactory';
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver = {};
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverSpec = { $ : {} };
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver.$interfaceName = 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver';
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec = { $: {} };

// Union: AddFolderResult
mojo.internal.Union(
    mojo.internal.bindings.chromeos.remote_apps.mojom.AddFolderResultSpec, 'chromeos.remote_apps.mojom.AddFolderResult', {
      'arg_folder_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: AddAppResult
mojo.internal.Union(
    mojo.internal.bindings.chromeos.remote_apps.mojom.AddAppResultSpec, 'chromeos.remote_apps.mojom.AddAppResult', {
      'arg_app_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Interface: RemoteApps
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddFolder_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_add_to_front', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.remote_apps.mojom.AddFolderResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddApp_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_folder_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_add_to_front', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.remote_apps.mojom.AddAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_DeleteApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_Params', [
      mojo.internal.StructField('arg_app_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec, 'chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteApps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addFolder(arg_name, arg_add_to_front) {
    return this.$.addFolder(arg_name, arg_add_to_front);
  }
  addApp(arg_source_id, arg_name, arg_folder_id, arg_icon_url, arg_add_to_front) {
    return this.$.addApp(arg_source_id, arg_name, arg_folder_id, arg_icon_url, arg_add_to_front);
  }
  deleteApp(arg_app_id) {
    return this.$.deleteApp(arg_app_id);
  }
  sortLauncherWithRemoteAppsFirst() {
    return this.$.sortLauncherWithRemoteAppsFirst();
  }
  setPinnedApps(arg_app_ids) {
    return this.$.setPinnedApps(arg_app_ids);
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.remote_apps.mojom.RemoteApps', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  addFolder(arg_name, arg_add_to_front) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec,
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec,
      [arg_name, arg_add_to_front],
      false);
  }

  addApp(arg_source_id, arg_name, arg_folder_id, arg_icon_url, arg_add_to_front) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec,
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec,
      [arg_source_id, arg_name, arg_folder_id, arg_icon_url, arg_add_to_front],
      false);
  }

  deleteApp(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec,
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  sortLauncherWithRemoteAppsFirst() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec,
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec,
      [],
      false);
  }

  setPinnedApps(arg_app_ids) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec,
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec,
      [arg_app_ids],
      false);
  }

};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteApps',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.remote_apps.mojom.RemoteApps', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
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
        
        // Try Method 0: AddFolder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFolder (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeleteApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteApp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SortLauncherWithRemoteAppsFirst
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SortLauncherWithRemoteAppsFirst (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetPinnedApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPinnedApps (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFolder');
          const result = this.impl.addFolder(params.arg_name, params.arg_add_to_front);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddFolder_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddFolder FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addApp');
          const result = this.impl.addApp(params.arg_source_id, params.arg_name, params.arg_folder_id, params.arg_icon_url, params.arg_add_to_front);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_AddApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddApp FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteApp');
          const result = this.impl.deleteApp(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_DeleteApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteApp FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sortLauncherWithRemoteAppsFirst');
          const result = this.impl.sortLauncherWithRemoteAppsFirst();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SortLauncherWithRemoteAppsFirst_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SortLauncherWithRemoteAppsFirst FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPinnedApps');
          const result = this.impl.setPinnedApps(params.arg_app_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteApps_SetPinnedApps_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPinnedApps FAILED:', e));
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

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsReceiver = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsReceiver;

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsPtr = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsRemote;
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsRequest = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsPendingReceiver;


// Interface: RemoteAppsFactory
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_apps', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppsFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindRemoteAppsAndAppLaunchObserver(arg_source_id, arg_remote_apps, arg_observer) {
    return this.$.bindRemoteAppsAndAppLaunchObserver(arg_source_id, arg_remote_apps, arg_observer);
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.remote_apps.mojom.RemoteAppsFactory', [
      { explicit: 0 },
    ]);
  }

  bindRemoteAppsAndAppLaunchObserver(arg_source_id, arg_remote_apps, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec,
      null,
      [arg_source_id, arg_remote_apps, arg_observer],
      false);
  }

};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppsFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.remote_apps.mojom.RemoteAppsFactory', [
      { explicit: 0 },
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
        
        // Try Method 0: BindRemoteAppsAndAppLaunchObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindRemoteAppsAndAppLaunchObserver (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactory_BindRemoteAppsAndAppLaunchObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindRemoteAppsAndAppLaunchObserver');
          const result = this.impl.bindRemoteAppsAndAppLaunchObserver(params.arg_source_id, params.arg_remote_apps, params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryReceiver = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryReceiver;

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryPtr = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryRemote;
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryRequest = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppsFactoryPendingReceiver;


// Interface: RemoteAppLaunchObserver
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec, 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onRemoteAppLaunched(arg_app_id, arg_source_id) {
    return this.$.onRemoteAppLaunched(arg_app_id, arg_source_id);
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.remote_apps.mojom.RemoteAppLaunchObserver', [
      { explicit: 0 },
    ]);
  }

  onRemoteAppLaunched(arg_app_id, arg_source_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec,
      null,
      [arg_app_id, arg_source_id],
      false);
  }

};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.remote_apps.mojom.RemoteAppLaunchObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.remote_apps.mojom.RemoteAppLaunchObserver', [
      { explicit: 0 },
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
        
        // Try Method 0: OnRemoteAppLaunched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemoteAppLaunched (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserver_OnRemoteAppLaunched_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRemoteAppLaunched');
          const result = this.impl.onRemoteAppLaunched(params.arg_app_id, params.arg_source_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverReceiver = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverReceiver;

mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverPtr = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverRemote;
mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverRequest = mojo.internal.bindings.chromeos.remote_apps.mojom.RemoteAppLaunchObserverPendingReceiver;

