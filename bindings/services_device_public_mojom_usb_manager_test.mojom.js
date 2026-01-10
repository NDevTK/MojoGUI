// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_test.mojom
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
var url = url || {};

device.mojom.TestDeviceInfoSpec = { $: {} };
device.mojom.UsbDeviceManagerTest = {};
device.mojom.UsbDeviceManagerTest.$interfaceName = 'device.mojom.UsbDeviceManagerTest';
device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec = { $: {} };

// Struct: TestDeviceInfo
mojo.internal.Struct(
    device.mojom.TestDeviceInfoSpec, 'device.mojom.TestDeviceInfo', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('landing_page', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: UsbDeviceManagerTest
mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('landing_page', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_GetTestDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.TestDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.UsbDeviceManagerTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceManagerTestRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDeviceManagerTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDeviceManagerTestPendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceManagerTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addDeviceForTesting(name, serial_number, landing_page) {
    return this.$.addDeviceForTesting(name, serial_number, landing_page);
  }
  removeDeviceForTesting(guid) {
    return this.$.removeDeviceForTesting(guid);
  }
  getTestDevices() {
    return this.$.getTestDevices();
  }
};

device.mojom.UsbDeviceManagerTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManagerTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addDeviceForTesting(name, serial_number, landing_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec,
      [name, serial_number, landing_page],
      false);
  }

  removeDeviceForTesting(guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec,
      [guid],
      false);
  }

  getTestDevices() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.UsbDeviceManagerTest.getRemote = function() {
  let remote = new device.mojom.UsbDeviceManagerTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDeviceManagerTest',
    'context');
  return remote.$;
};

device.mojom.UsbDeviceManagerTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManagerTest', [
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
        
        // Try Method 0: AddDeviceForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDeviceForTesting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemoveDeviceForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveDeviceForTesting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetTestDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTestDevices (2)');
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
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDeviceForTesting');
          const result = this.impl.addDeviceForTesting(params.name, params.serial_number, params.landing_page);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeDeviceForTesting');
          const result = this.impl.removeDeviceForTesting(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTestDevices');
          const result = this.impl.getTestDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec);
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

device.mojom.UsbDeviceManagerTestReceiver = device.mojom.UsbDeviceManagerTestReceiver;

device.mojom.UsbDeviceManagerTestPtr = device.mojom.UsbDeviceManagerTestRemote;
device.mojom.UsbDeviceManagerTestRequest = device.mojom.UsbDeviceManagerTestPendingReceiver;

