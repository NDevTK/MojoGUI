// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/xu_camera.mojom
// Module: ash.cfm.mojom

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
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};

ash.cfm.mojom.GetFnSpec = { $: mojo.internal.Enum() };
ash.cfm.mojom.WebcamIdSpec = { $: {} };
ash.cfm.mojom.CtrlTypeSpec = { $: {} };
ash.cfm.mojom.MenuInfoSpec = { $: {} };
ash.cfm.mojom.MenuEntriesSpec = { $: {} };
ash.cfm.mojom.ControlMappingSpec = { $: {} };
ash.cfm.mojom.ControlQuerySpec = { $: {} };
ash.cfm.mojom.XuCamera = {};
ash.cfm.mojom.XuCamera.$interfaceName = 'ash.cfm.mojom.XuCamera';
ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec = { $: {} };

// Enum: GetFn
ash.cfm.mojom.GetFn = {
  kCur: 0,
  kMin: 1,
  kMax: 2,
  kDef: 3,
  kRes: 4,
  kLen: 5,
  kInfo: 6,
};

// Union: WebcamId
mojo.internal.Union(
    ash.cfm.mojom.WebcamIdSpec, 'ash.cfm.mojom.WebcamId', {
      'device_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'dev_path': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: CtrlType
mojo.internal.Union(
    ash.cfm.mojom.CtrlTypeSpec, 'ash.cfm.mojom.CtrlType', {
      'mapping_ctrl': {
        'ordinal': 0,
        'type': ash.cfm.mojom.ControlMappingSpec.$,
        'nullable': false,
      },
      'query_ctrl': {
        'ordinal': 1,
        'type': ash.cfm.mojom.ControlQuerySpec.$,
        'nullable': false,
      },
    });

// Struct: MenuInfo
mojo.internal.Struct(
    ash.cfm.mojom.MenuInfoSpec, 'ash.cfm.mojom.MenuInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MenuEntries
mojo.internal.Struct(
    ash.cfm.mojom.MenuEntriesSpec, 'ash.cfm.mojom.MenuEntries', [
      mojo.internal.StructField('menu_info', 0, 0, mojo.internal.Array(ash.cfm.mojom.MenuInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ControlMapping
mojo.internal.Struct(
    ash.cfm.mojom.ControlMappingSpec, 'ash.cfm.mojom.ControlMapping', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('menu_entries', 16, 0, ash.cfm.mojom.MenuEntriesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('v4l2_type', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data_type', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('selector', 36, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('size', 37, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 38, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ControlQuery
mojo.internal.Struct(
    ash.cfm.mojom.ControlQuerySpec, 'ash.cfm.mojom.ControlQuery', [
      mojo.internal.StructField('unit_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('selector', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: XuCamera
mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec, 'ash.cfm.mojom.XuCamera_GetUnitId_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_GetUnitId_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('unit_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec, 'ash.cfm.mojom.XuCamera_MapCtrl_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mapping_ctrl', 8, 0, ash.cfm.mojom.ControlMappingSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_MapCtrl_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec, 'ash.cfm.mojom.XuCamera_GetCtrl_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ctrl', 8, 0, ash.cfm.mojom.CtrlTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fn', 16, 0, ash.cfm.mojom.GetFnSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_GetCtrl_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec, 'ash.cfm.mojom.XuCamera_SetCtrl_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ctrl', 8, 0, ash.cfm.mojom.CtrlTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_SetCtrl_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cfm.mojom.XuCameraPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.mojom.XuCameraRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.XuCamera';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.mojom.XuCameraPendingReceiver,
      handle);
    this.$ = new ash.cfm.mojom.XuCameraRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.mojom.XuCameraRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XuCamera', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getUnitId(id, guid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec,
      ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec,
      [id, guid],
      false);
  }

  mapCtrl(id, mapping_ctrl) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec,
      [id, mapping_ctrl],
      false);
  }

  getCtrl(id, ctrl, fn) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec,
      [id, ctrl, fn],
      false);
  }

  setCtrl(id, ctrl, data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec,
      [id, ctrl, data],
      false);
  }

};

ash.cfm.mojom.XuCamera.getRemote = function() {
  let remote = new ash.cfm.mojom.XuCameraRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.XuCamera',
    'context');
  return remote.$;
};

ash.cfm.mojom.XuCameraReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XuCamera', [
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
        
        // Try Method 0: GetUnitId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUnitId (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MapCtrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MapCtrl (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetCtrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCtrl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCtrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCtrl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUnitId');
          const result = this.impl.getUnitId(params.id, params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mapCtrl');
          const result = this.impl.mapCtrl(params.id, params.mapping_ctrl);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCtrl');
          const result = this.impl.getCtrl(params.id, params.ctrl, params.fn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCtrl');
          const result = this.impl.setCtrl(params.id, params.ctrl, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec);
               responder(response);
            });
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

ash.cfm.mojom.XuCameraReceiver = ash.cfm.mojom.XuCameraReceiver;

ash.cfm.mojom.XuCameraPtr = ash.cfm.mojom.XuCameraRemote;
ash.cfm.mojom.XuCameraRequest = ash.cfm.mojom.XuCameraPendingReceiver;

