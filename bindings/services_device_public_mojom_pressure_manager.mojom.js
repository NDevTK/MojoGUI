// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/pressure_manager.mojom
// Module: device.mojom

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
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.PressureManagerAddClientResultSpec = { $: mojo.internal.Enum() };
device.mojom.VirtualPressureSourceMetadataSpec = { $: {} };
device.mojom.PressureManager = {};
device.mojom.PressureManager.$interfaceName = 'device.mojom.PressureManager';
device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec = { $: {} };
device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec = { $: {} };
device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec = { $: {} };
device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec = { $: {} };
device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec = { $: {} };
device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec = { $: {} };
device.mojom.PressureManager_AddClient_ParamsSpec = { $: {} };
device.mojom.PressureManager_AddClient_ResponseParamsSpec = { $: {} };
device.mojom.PressureClient = {};
device.mojom.PressureClient.$interfaceName = 'device.mojom.PressureClient';
device.mojom.PressureClient_OnPressureUpdated_ParamsSpec = { $: {} };

// Enum: PressureManagerAddClientResult
device.mojom.PressureManagerAddClientResult = {
  kNotSupported: 0,
  kOk: 1,
};

// Struct: VirtualPressureSourceMetadata
mojo.internal.Struct(
    device.mojom.VirtualPressureSourceMetadataSpec, 'device.mojom.VirtualPressureSourceMetadata', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PressureManager
mojo.internal.Struct(
    device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec, 'device.mojom.PressureManager_AddVirtualPressureSource_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 16, 0, device.mojom.VirtualPressureSourceMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec, 'device.mojom.PressureManager_AddVirtualPressureSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec, 'device.mojom.PressureManager_RemoveVirtualPressureSource_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec, 'device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec, 'device.mojom.PressureManager_UpdateVirtualPressureSourceData_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 16, 0, device.mojom.PressureStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('own_contribution_estimate', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec, 'device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PressureManager_AddClient_ParamsSpec, 'device.mojom.PressureManager_AddClient_Params', [
      mojo.internal.StructField('source', 0, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client', 16, 0, pending_associated_remote<device.mojom.PressureClient>Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.PressureManager_AddClient_ResponseParamsSpec, 'device.mojom.PressureManager_AddClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.PressureManagerAddClientResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.PressureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PressureManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PressureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PressureManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.PressureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addVirtualPressureSource(token, source, metadata) {
    return this.$.addVirtualPressureSource(token, source, metadata);
  }
  removeVirtualPressureSource(token, source) {
    return this.$.removeVirtualPressureSource(token, source);
  }
  updateVirtualPressureSourceData(token, source, state, own_contribution_estimate) {
    return this.$.updateVirtualPressureSourceData(token, source, state, own_contribution_estimate);
  }
  addClient(source, token, client) {
    return this.$.addClient(source, token, client);
  }
};

device.mojom.PressureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PressureManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addVirtualPressureSource(token, source, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec,
      device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec,
      [token, source, metadata],
      false);
  }

  removeVirtualPressureSource(token, source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec,
      device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec,
      [token, source],
      false);
  }

  updateVirtualPressureSourceData(token, source, state, own_contribution_estimate) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec,
      device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec,
      [token, source, state, own_contribution_estimate],
      false);
  }

  addClient(source, token, client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.PressureManager_AddClient_ParamsSpec,
      device.mojom.PressureManager_AddClient_ResponseParamsSpec,
      [source, token, client],
      false);
  }

};

device.mojom.PressureManager.getRemote = function() {
  let remote = new device.mojom.PressureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PressureManager',
    'context');
  return remote.$;
};

device.mojom.PressureManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PressureManager', [
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
        
        // Try Method 0: AddVirtualPressureSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddVirtualPressureSource (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemoveVirtualPressureSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveVirtualPressureSource (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateVirtualPressureSourceData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateVirtualPressureSourceData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureManager_AddClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddClient (3)');
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
          const params = decoder.decodeStructInline(device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addVirtualPressureSource');
          const result = this.impl.addVirtualPressureSource(params.token, params.source, params.metadata);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddVirtualPressureSource FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeVirtualPressureSource');
          const result = this.impl.removeVirtualPressureSource(params.token, params.source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveVirtualPressureSource FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateVirtualPressureSourceData');
          const result = this.impl.updateVirtualPressureSourceData(params.token, params.source, params.state, params.own_contribution_estimate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateVirtualPressureSourceData FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureManager_AddClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addClient');
          const result = this.impl.addClient(params.source, params.token, params.client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_AddClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddClient FAILED:', e));
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

device.mojom.PressureManagerReceiver = device.mojom.PressureManagerReceiver;

device.mojom.PressureManagerPtr = device.mojom.PressureManagerRemote;
device.mojom.PressureManagerRequest = device.mojom.PressureManagerPendingReceiver;


// Interface: PressureClient
mojo.internal.Struct(
    device.mojom.PressureClient_OnPressureUpdated_ParamsSpec, 'device.mojom.PressureClient_OnPressureUpdated_Params', [
      mojo.internal.StructField('update', 0, 0, device.mojom.PressureUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.PressureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PressureClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PressureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PressureClientPendingReceiver,
      handle);
    this.$ = new device.mojom.PressureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPressureUpdated(update) {
    return this.$.onPressureUpdated(update);
  }
};

device.mojom.PressureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PressureClient', [
      { explicit: null },
    ]);
  }

  onPressureUpdated(update) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.PressureClient_OnPressureUpdated_ParamsSpec,
      null,
      [update],
      false);
  }

};

device.mojom.PressureClient.getRemote = function() {
  let remote = new device.mojom.PressureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PressureClient',
    'context');
  return remote.$;
};

device.mojom.PressureClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PressureClient', [
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
        
        // Try Method 0: OnPressureUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureClient_OnPressureUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPressureUpdated (0)');
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
          const params = decoder.decodeStructInline(device.mojom.PressureClient_OnPressureUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPressureUpdated');
          const result = this.impl.onPressureUpdated(params.update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.PressureClientReceiver = device.mojom.PressureClientReceiver;

device.mojom.PressureClientPtr = device.mojom.PressureClientRemote;
device.mojom.PressureClientRequest = device.mojom.PressureClientPendingReceiver;

