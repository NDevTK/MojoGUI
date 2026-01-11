// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/public/mojom/gesture_properties_service.mojom
// Module: ui.ozone.mojom

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
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};

ui.ozone.mojom.SetGesturePropErrorCodeSpec = { $: mojo.internal.Enum() };
ui.ozone.mojom.GesturePropValueSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService = {};
ui.ozone.mojom.GesturePropertiesService.$interfaceName = 'ui.ozone.mojom.GesturePropertiesService';
ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec = { $: {} };

// Enum: SetGesturePropErrorCode
ui.ozone.mojom.SetGesturePropErrorCode = {
  SUCCESS: 0,
  UNKNOWN_ERROR: 1,
  NOT_FOUND: 2,
  READ_ONLY: 3,
  TYPE_MISMATCH: 4,
  SIZE_MISMATCH: 5,
};

// Union: GesturePropValue
mojo.internal.Union(
    ui.ozone.mojom.GesturePropValueSpec, 'ui.ozone.mojom.GesturePropValue', {
      'ints': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
        'nullable': false,
      },
      'shorts': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Int16, false),
        'nullable': false,
      },
      'bools': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Bool, false),
        'nullable': false,
      },
      'str': {
        'ordinal': 3,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'reals': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Double, false),
        'nullable': false,
      },
    });

// Interface: GesturePropertiesService
mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListProperties_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_GetProperty_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, ui.ozone.mojom.GesturePropValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_read_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_SetProperty_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ui.ozone.mojom.GesturePropValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ui.ozone.mojom.SetGesturePropErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ui.ozone.mojom.GesturePropertiesServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.ozone.mojom.GesturePropertiesServiceRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.GesturePropertiesService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.ozone.mojom.GesturePropertiesServicePendingReceiver,
      handle);
    this.$ = new ui.ozone.mojom.GesturePropertiesServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  listDevices() {
    return this.$.listDevices();
  }
  listProperties(device_id) {
    return this.$.listProperties(device_id);
  }
  getProperty(device_id, name) {
    return this.$.getProperty(device_id, name);
  }
  setProperty(device_id, name, value) {
    return this.$.setProperty(device_id, name, value);
  }
};

ui.ozone.mojom.GesturePropertiesServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GesturePropertiesService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  listDevices() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec,
      [],
      false);
  }

  listProperties(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec,
      [device_id],
      false);
  }

  getProperty(device_id, name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec,
      [device_id, name],
      false);
  }

  setProperty(device_id, name, value) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec,
      [device_id, name, value],
      false);
  }

};

ui.ozone.mojom.GesturePropertiesService.getRemote = function() {
  let remote = new ui.ozone.mojom.GesturePropertiesServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.GesturePropertiesService',
    'context');
  return remote.$;
};

ui.ozone.mojom.GesturePropertiesServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GesturePropertiesService', [
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
        
        // Try Method 0: ListDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListDevices (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ListProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListProperties (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetProperty
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProperty (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetProperty
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProperty (3)');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listDevices');
          const result = this.impl.listDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ListDevices FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listProperties');
          const result = this.impl.listProperties(params.device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ListProperties FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProperty');
          const result = this.impl.getProperty(params.device_id, params.name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProperty FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProperty');
          const result = this.impl.setProperty(params.device_id, params.name, params.value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetProperty FAILED:', e));
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

ui.ozone.mojom.GesturePropertiesServiceReceiver = ui.ozone.mojom.GesturePropertiesServiceReceiver;

ui.ozone.mojom.GesturePropertiesServicePtr = ui.ozone.mojom.GesturePropertiesServiceRemote;
ui.ozone.mojom.GesturePropertiesServiceRequest = ui.ozone.mojom.GesturePropertiesServicePendingReceiver;

