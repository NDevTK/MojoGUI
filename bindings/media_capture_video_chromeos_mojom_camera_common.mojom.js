// Auto-generated MojoJS binding
 // Source: chromium_src/media/capture/video/chromeos/mojom/camera_common.mojom
 // Module: cros.mojom

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
 

 mojo.internal.bindings.cros = mojo.internal.bindings.cros || {};
mojo.internal.bindings.cros.mojom = mojo.internal.bindings.cros.mojom || {};

mojo.internal.bindings.cros.mojom.CameraFacingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.CameraDeviceStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.TorchModeStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.CameraResourceCostSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraInfoSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModuleCallbacks = {};
mojo.internal.bindings.cros.mojom.CameraModuleCallbacksSpec = { $ : {} };
mojo.internal.bindings.cros.mojom.CameraModuleCallbacks.$interfaceName = 'cros.mojom.CameraModuleCallbacks';
mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps = {};
mojo.internal.bindings.cros.mojom.VendorTagOpsSpec = { $ : {} };
mojo.internal.bindings.cros.mojom.VendorTagOps.$interfaceName = 'cros.mojom.VendorTagOps';
mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule = {};
mojo.internal.bindings.cros.mojom.CameraModuleSpec = { $ : {} };
mojo.internal.bindings.cros.mojom.CameraModule.$interfaceName = 'cros.mojom.CameraModule';
mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec = { $: {} };

mojo.internal.bindings.cros.mojom.CAMERA_DEVICE_API_VERSION_3_0 = 0x300;

mojo.internal.bindings.cros.mojom.CAMERA_DEVICE_API_VERSION_3_1 = 0x301;

mojo.internal.bindings.cros.mojom.CAMERA_DEVICE_API_VERSION_3_2 = 0x302;

mojo.internal.bindings.cros.mojom.CAMERA_DEVICE_API_VERSION_3_3 = 0x303;

mojo.internal.bindings.cros.mojom.CAMERA_DEVICE_API_VERSION_3_4 = 0x304;

mojo.internal.bindings.cros.mojom.CAMERA_DEVICE_API_VERSION_3_5 = 0x305;

mojo.internal.bindings.cros.mojom.CAMERA_DEVICE_API_VERSION_3_6 = 0x306;

// Enum: CameraFacing
mojo.internal.bindings.cros.mojom.CameraFacing = {
  CAMERA_FACING_BACK: 0,
  CAMERA_FACING_FRONT: 1,
  CAMERA_FACING_EXTERNAL: 2,
  CAMERA_FACING_VIRTUAL_BACK: 3,
  CAMERA_FACING_VIRTUAL_FRONT: 4,
  CAMERA_FACING_VIRTUAL_EXTERNAL: 5,
};

// Enum: CameraDeviceStatus
mojo.internal.bindings.cros.mojom.CameraDeviceStatus = {
  CAMERA_DEVICE_STATUS_NOT_PRESENT: 0,
  CAMERA_DEVICE_STATUS_PRESENT: 1,
  CAMERA_DEVICE_STATUS_ENUMERATING: 2,
};

// Enum: TorchModeStatus
mojo.internal.bindings.cros.mojom.TorchModeStatus = {
  TORCH_MODE_STATUS_NOT_AVAILABLE: 0,
  TORCH_MODE_STATUS_AVAILABLE_OFF: 1,
  TORCH_MODE_STATUS_AVAILABLE_ON: 2,
};

// Struct: CameraResourceCost
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraResourceCostSpec, 'cros.mojom.CameraResourceCost', [
      mojo.internal.StructField('arg_resource_cost', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraInfo
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraInfoSpec, 'cros.mojom.CameraInfo', [
      mojo.internal.StructField('arg_facing', 0, 0, mojo.internal.bindings.cros.mojom.CameraFacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_static_camera_characteristics', 8, 0, mojo.internal.bindings.cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_orientation', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_version', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_resource_cost', 24, 0, mojo.internal.bindings.cros.mojom.CameraResourceCostSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_conflicting_devices', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 1, undefined),
    ],
    [[0, 32], [1, 48]]);

// Interface: CameraModuleCallbacks
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec, 'cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_Params', [
      mojo.internal.StructField('arg_new_status', 0, 0, mojo.internal.bindings.cros.mojom.CameraDeviceStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec, 'cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_Params', [
      mojo.internal.StructField('arg_new_status', 0, 0, mojo.internal.bindings.cros.mojom.TorchModeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.cros.mojom.CameraModuleCallbacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraModuleCallbacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CameraModuleCallbacksPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cameraDeviceStatusChange(arg_camera_id, arg_new_status) {
    return this.$.cameraDeviceStatusChange(arg_camera_id, arg_new_status);
  }
  torchModeStatusChange(arg_camera_id, arg_new_status) {
    return this.$.torchModeStatusChange(arg_camera_id, arg_new_status);
  }
};

mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('cros.mojom.CameraModuleCallbacks', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  cameraDeviceStatusChange(arg_camera_id, arg_new_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec,
      null,
      [arg_camera_id, arg_new_status],
      false);
  }

  torchModeStatusChange(arg_camera_id, arg_new_status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec,
      null,
      [arg_camera_id, arg_new_status],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CameraModuleCallbacks.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraModuleCallbacks',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CameraModuleCallbacksReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('cros.mojom.CameraModuleCallbacks', [
      { explicit: 0 },
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
        
        // Try Method 0: CameraDeviceStatusChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraDeviceStatusChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TorchModeStatusChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TorchModeStatusChange (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraDeviceStatusChange');
          const result = this.impl.cameraDeviceStatusChange(params.arg_camera_id, params.arg_new_status);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.torchModeStatusChange');
          const result = this.impl.torchModeStatusChange(params.arg_camera_id, params.arg_new_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.CameraModuleCallbacksReceiver = mojo.internal.bindings.cros.mojom.CameraModuleCallbacksReceiver;

mojo.internal.bindings.cros.mojom.CameraModuleCallbacksPtr = mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRemote;
mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRequest = mojo.internal.bindings.cros.mojom.CameraModuleCallbacksPendingReceiver;


// Interface: VendorTagOps
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ParamsSpec, 'cros.mojom.VendorTagOps_GetTagCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetTagCount_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ParamsSpec, 'cros.mojom.VendorTagOps_GetAllTags_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetAllTags_ResponseParams', [
      mojo.internal.StructField('arg_tag_array', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ParamsSpec, 'cros.mojom.VendorTagOps_GetSectionName_Params', [
      mojo.internal.StructField('arg_tag', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetSectionName_ResponseParams', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ParamsSpec, 'cros.mojom.VendorTagOps_GetTagName_Params', [
      mojo.internal.StructField('arg_tag', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetTagName_ResponseParams', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ParamsSpec, 'cros.mojom.VendorTagOps_GetTagType_Params', [
      mojo.internal.StructField('arg_tag', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetTagType_ResponseParams', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.VendorTagOpsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.VendorTagOpsRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.VendorTagOps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.VendorTagOpsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.VendorTagOpsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getTagCount() {
    return this.$.getTagCount();
  }
  getAllTags() {
    return this.$.getAllTags();
  }
  getSectionName(arg_tag) {
    return this.$.getSectionName(arg_tag);
  }
  getTagName(arg_tag) {
    return this.$.getTagName(arg_tag);
  }
  getTagType(arg_tag) {
    return this.$.getTagType(arg_tag);
  }
};

mojo.internal.bindings.cros.mojom.VendorTagOpsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('cros.mojom.VendorTagOps', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  getTagCount() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ParamsSpec,
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec,
      [],
      false);
  }

  getAllTags() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ParamsSpec,
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec,
      [],
      false);
  }

  getSectionName(arg_tag) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ParamsSpec,
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec,
      [arg_tag],
      false);
  }

  getTagName(arg_tag) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ParamsSpec,
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec,
      [arg_tag],
      false);
  }

  getTagType(arg_tag) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ParamsSpec,
      mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec,
      [arg_tag],
      false);
  }

};

mojo.internal.bindings.cros.mojom.VendorTagOps.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.VendorTagOpsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.VendorTagOps',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.VendorTagOpsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('cros.mojom.VendorTagOps', [
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
        
        // Try Method 0: GetTagCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTagCount (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAllTags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllTags (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSectionName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSectionName (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetTagName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTagName (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetTagType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTagType (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTagCount');
          const result = this.impl.getTagCount();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTagCount FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllTags');
          const result = this.impl.getAllTags();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllTags FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSectionName');
          const result = this.impl.getSectionName(params.arg_tag);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSectionName FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTagName');
          const result = this.impl.getTagName(params.arg_tag);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTagName FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTagType');
          const result = this.impl.getTagType(params.arg_tag);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTagType FAILED:', e));
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

mojo.internal.bindings.cros.mojom.VendorTagOpsReceiver = mojo.internal.bindings.cros.mojom.VendorTagOpsReceiver;

mojo.internal.bindings.cros.mojom.VendorTagOpsPtr = mojo.internal.bindings.cros.mojom.VendorTagOpsRemote;
mojo.internal.bindings.cros.mojom.VendorTagOpsRequest = mojo.internal.bindings.cros.mojom.VendorTagOpsPendingReceiver;


// Interface: CameraModule
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ParamsSpec, 'cros.mojom.CameraModule_OpenDevice_Params', [
      mojo.internal.StructField('arg_device_ops_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.cros.mojom.Camera3DeviceOpsRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec, 'cros.mojom.CameraModule_OpenDevice_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec, 'cros.mojom.CameraModule_GetNumberOfCameras_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec, 'cros.mojom.CameraModule_GetNumberOfCameras_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ParamsSpec, 'cros.mojom.CameraModule_GetCameraInfo_Params', [
      mojo.internal.StructField('arg_camera_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec, 'cros.mojom.CameraModule_GetCameraInfo_ResponseParams', [
      mojo.internal.StructField('arg_camera_info', 0, 0, mojo.internal.bindings.cros.mojom.CameraInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ParamsSpec, 'cros.mojom.CameraModule_SetCallbacks_Params', [
      mojo.internal.StructField('arg_callbacks', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec, 'cros.mojom.CameraModule_SetCallbacks_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ParamsSpec, 'cros.mojom.CameraModule_SetTorchMode_Params', [
      mojo.internal.StructField('arg_camera_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec, 'cros.mojom.CameraModule_SetTorchMode_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_Init_ParamsSpec, 'cros.mojom.CameraModule_Init_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_Init_ResponseParamsSpec, 'cros.mojom.CameraModule_Init_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec, 'cros.mojom.CameraModule_GetVendorTagOps_Params', [
      mojo.internal.StructField('arg_vendor_tag_ops_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.cros.mojom.VendorTagOpsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec, 'cros.mojom.CameraModule_GetVendorTagOps_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec, 'cros.mojom.CameraModule_SetCallbacksAssociated_Params', [
      mojo.internal.StructField('arg_callbacks', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.cros.mojom.CameraModuleCallbacksRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec, 'cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.CameraModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CameraModuleRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CameraModulePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CameraModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openDevice(arg_camera_id, arg_device_ops_receiver) {
    return this.$.openDevice(arg_camera_id, arg_device_ops_receiver);
  }
  getNumberOfCameras() {
    return this.$.getNumberOfCameras();
  }
  getCameraInfo(arg_camera_id) {
    return this.$.getCameraInfo(arg_camera_id);
  }
  setCallbacks(arg_callbacks) {
    return this.$.setCallbacks(arg_callbacks);
  }
  setTorchMode(arg_camera_id, arg_enabled) {
    return this.$.setTorchMode(arg_camera_id, arg_enabled);
  }
  init() {
    return this.$.init();
  }
  getVendorTagOps(arg_vendor_tag_ops_receiver) {
    return this.$.getVendorTagOps(arg_vendor_tag_ops_receiver);
  }
  setCallbacksAssociated(arg_callbacks) {
    return this.$.setCallbacksAssociated(arg_callbacks);
  }
};

mojo.internal.bindings.cros.mojom.CameraModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('cros.mojom.CameraModule', [
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

  openDevice(arg_camera_id, arg_device_ops_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec,
      [arg_camera_id, arg_device_ops_receiver],
      false);
  }

  getNumberOfCameras() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec,
      [],
      false);
  }

  getCameraInfo(arg_camera_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec,
      [arg_camera_id],
      false);
  }

  setCallbacks(arg_callbacks) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec,
      [arg_callbacks],
      false);
  }

  setTorchMode(arg_camera_id, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec,
      [arg_camera_id, arg_enabled],
      false);
  }

  init() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_Init_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_Init_ResponseParamsSpec,
      [],
      false);
  }

  getVendorTagOps(arg_vendor_tag_ops_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec,
      [arg_vendor_tag_ops_receiver],
      false);
  }

  setCallbacksAssociated(arg_callbacks) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec,
      [arg_callbacks],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CameraModule.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CameraModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraModule',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CameraModuleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('cros.mojom.CameraModule', [
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
        
        // Try Method 0: OpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetNumberOfCameras
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNumberOfCameras (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetCameraInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCallbacks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCallbacks (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetTorchMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTorchMode (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_Init_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetVendorTagOps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVendorTagOps (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetCallbacksAssociated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCallbacksAssociated (7)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDevice');
          const result = this.impl.openDevice(params.arg_camera_id, params.arg_device_ops_receiver);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenDevice FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNumberOfCameras');
          const result = this.impl.getNumberOfCameras();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNumberOfCameras FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraInfo');
          const result = this.impl.getCameraInfo(params.arg_camera_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraInfo FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCallbacks');
          const result = this.impl.setCallbacks(params.arg_callbacks);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCallbacks FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTorchMode');
          const result = this.impl.setTorchMode(params.arg_camera_id, params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTorchMode FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVendorTagOps');
          const result = this.impl.getVendorTagOps(params.arg_vendor_tag_ops_receiver);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVendorTagOps FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCallbacksAssociated');
          const result = this.impl.setCallbacksAssociated(params.arg_callbacks);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCallbacksAssociated FAILED:', e));
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

mojo.internal.bindings.cros.mojom.CameraModuleReceiver = mojo.internal.bindings.cros.mojom.CameraModuleReceiver;

mojo.internal.bindings.cros.mojom.CameraModulePtr = mojo.internal.bindings.cros.mojom.CameraModuleRemote;
mojo.internal.bindings.cros.mojom.CameraModuleRequest = mojo.internal.bindings.cros.mojom.CameraModulePendingReceiver;

