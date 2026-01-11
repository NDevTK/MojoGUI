// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/volume_mounter.mojom
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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.arc.mojom.MountEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.MountPointInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterHost = {};
mojo.internal.bindings.arc.mojom.VolumeMounterHost.$interfaceName = 'arc.mojom.VolumeMounterHost';
mojo.internal.bindings.arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterInstance = {};
mojo.internal.bindings.arc.mojom.VolumeMounterInstance.$interfaceName = 'arc.mojom.VolumeMounterInstance';
mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec = { $: {} };

// Enum: MountEvent
mojo.internal.bindings.arc.mojom.MountEvent = {
  MOUNTING: 0,
  UNMOUNTING: 1,
};

// Enum: DeviceType
mojo.internal.bindings.arc.mojom.DeviceType = {
  DEVICE_TYPE_UNKNOWN: 0,
  DEVICE_TYPE_USB: 1,
  DEVICE_TYPE_SD: 2,
};

// Struct: MountPointInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.MountPointInfoSpec, 'arc.mojom.MountPointInfo', [
      mojo.internal.StructField('arg_mount_event', 0, 0, mojo.internal.bindings.arc.mojom.MountEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mount_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_fs_uuid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_type', 40, 0, mojo.internal.bindings.arc.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible', 48, 0, mojo.internal.Bool, false, false, 2, undefined),
    ],
    [[0, 56], [2, 64]]);

// Interface: VolumeMounterHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec, 'arc.mojom.VolumeMounterHost_RequestAllMountPoints_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec, 'arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_Params', [
      mojo.internal.StructField('arg_media_provider_uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec, 'arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec, 'arc.mojom.VolumeMounterHost_OnReadyToSuspend_Params', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.VolumeMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VolumeMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VolumeMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VolumeMounterHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VolumeMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestAllMountPoints() {
    return this.$.requestAllMountPoints();
  }
  setUpExternalStorageMountPoints(arg_media_provider_uid) {
    return this.$.setUpExternalStorageMountPoints(arg_media_provider_uid);
  }
  onReadyToSuspend(arg_success) {
    return this.$.onReadyToSuspend(arg_success);
  }
};

mojo.internal.bindings.arc.mojom.VolumeMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VolumeMounterHost', [
      { explicit: 1 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  requestAllMountPoints() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec,
      null,
      [],
      false);
  }

  setUpExternalStorageMountPoints(arg_media_provider_uid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec,
      [arg_media_provider_uid],
      false);
  }

  onReadyToSuspend(arg_success) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec,
      null,
      [arg_success],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VolumeMounterHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VolumeMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VolumeMounterHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VolumeMounterHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VolumeMounterHost', [
      { explicit: 1 },
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
        
        // Try Method 0: RequestAllMountPoints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAllMountPoints (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetUpExternalStorageMountPoints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpExternalStorageMountPoints (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnReadyToSuspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReadyToSuspend (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAllMountPoints');
          const result = this.impl.requestAllMountPoints();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpExternalStorageMountPoints');
          const result = this.impl.setUpExternalStorageMountPoints(params.arg_media_provider_uid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetUpExternalStorageMountPoints FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReadyToSuspend');
          const result = this.impl.onReadyToSuspend(params.arg_success);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.VolumeMounterHostReceiver = mojo.internal.bindings.arc.mojom.VolumeMounterHostReceiver;

mojo.internal.bindings.arc.mojom.VolumeMounterHostPtr = mojo.internal.bindings.arc.mojom.VolumeMounterHostRemote;
mojo.internal.bindings.arc.mojom.VolumeMounterHostRequest = mojo.internal.bindings.arc.mojom.VolumeMounterHostPendingReceiver;


// Interface: VolumeMounterInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ParamsSpec, 'arc.mojom.VolumeMounterInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VolumeMounterHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec, 'arc.mojom.VolumeMounterInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec, 'arc.mojom.VolumeMounterInstance_OnMountEvent_Params', [
      mojo.internal.StructField('arg_mount_point_info', 0, 0, mojo.internal.bindings.arc.mojom.MountPointInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec, 'arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec, 'arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.VolumeMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VolumeMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VolumeMounterInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  onMountEvent(arg_mount_point_info) {
    return this.$.onMountEvent(arg_mount_point_info);
  }
  prepareForRemovableMediaUnmount(arg_path) {
    return this.$.prepareForRemovableMediaUnmount(arg_path);
  }
};

mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VolumeMounterInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  onMountEvent(arg_mount_point_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec,
      null,
      [arg_mount_point_info],
      false);
  }

  prepareForRemovableMediaUnmount(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec,
      [arg_path],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VolumeMounterInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VolumeMounterInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VolumeMounterInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VolumeMounterInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMountEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMountEvent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PrepareForRemovableMediaUnmount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareForRemovableMediaUnmount (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMountEvent');
          const result = this.impl.onMountEvent(params.arg_mount_point_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForRemovableMediaUnmount');
          const result = this.impl.prepareForRemovableMediaUnmount(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepareForRemovableMediaUnmount FAILED:', e));
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

mojo.internal.bindings.arc.mojom.VolumeMounterInstanceReceiver = mojo.internal.bindings.arc.mojom.VolumeMounterInstanceReceiver;

mojo.internal.bindings.arc.mojom.VolumeMounterInstancePtr = mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRemote;
mojo.internal.bindings.arc.mojom.VolumeMounterInstanceRequest = mojo.internal.bindings.arc.mojom.VolumeMounterInstancePendingReceiver;

