// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/wifi_direct/public/mojom/wifi_direct_manager.mojom
// Module: ash.wifi_direct.mojom

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
var ash = ash || {};
ash.wifi_direct = ash.wifi_direct || {};
ash.wifi_direct.mojom = ash.wifi_direct.mojom || {};

ash.wifi_direct.mojom.WifiDirectOperationResultSpec = { $: mojo.internal.Enum() };
ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec = { $: {} };
ash.wifi_direct.mojom.WifiCredentialsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager = {};
ash.wifi_direct.mojom.WifiDirectManager.$interfaceName = 'ash.wifi_direct.mojom.WifiDirectManager';
ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection = {};
ash.wifi_direct.mojom.WifiDirectConnection.$interfaceName = 'ash.wifi_direct.mojom.WifiDirectConnection';
ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec = { $: {} };

// Enum: WifiDirectOperationResult
ash.wifi_direct.mojom.WifiDirectOperationResult = {
  kSuccess: 0,
  kNotAllowed: 1,
  kNotSupported: 2,
  kNotConnected: 3,
  kConcurrencyNotSupported: 4,
  kFrequencyNotSupported: 5,
  kAuthFailure: 6,
  kGroupNotFound: 7,
  kAlreadyConnected: 8,
  kOperationInProgress: 9,
  kInvalidArguments: 10,
  kTimeout: 11,
  kInvalidResultCode: 12,
  kInvalidGroupProperties: 13,
  kUnknownFailure: 14,
};

// Struct: WifiP2PCapabilities
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec, 'ash.wifi_direct.mojom.WifiP2PCapabilities', [
      mojo.internal.StructField('is_owner_ready', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_client_ready', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_p2p_supported', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WifiCredentials
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiCredentialsSpec, 'ash.wifi_direct.mojom.WifiCredentials', [
      mojo.internal.StructField('ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passphrase', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WifiDirectConnectionProperties
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec, 'ash.wifi_direct.mojom.WifiDirectConnectionProperties', [
      mojo.internal.StructField('credentials', 0, 0, ash.wifi_direct.mojom.WifiCredentialsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ipv4_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: WifiDirectManager
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_Params', [
      mojo.internal.StructField('credentials', 0, 0, ash.wifi_direct.mojom.WifiCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.wifi_direct.mojom.WifiDirectOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wifi_direct_connection', 8, 0, mojo.internal.InterfaceProxy(ash.wifi_direct.mojom.WifiDirectConnectionSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_Params', [
      mojo.internal.StructField('credentials', 0, 0, ash.wifi_direct.mojom.WifiCredentialsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frequency_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'frequency_$flag', originalFieldName: 'frequency' }),
      mojo.internal.StructField('frequency_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'frequency_$value', originalFieldName: 'frequency' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.wifi_direct.mojom.WifiDirectOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wifi_direct_connection', 8, 0, mojo.internal.InterfaceProxy(ash.wifi_direct.mojom.WifiDirectConnectionSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.mojom.WifiDirectManagerRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.mojom.WifiDirectManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWifiDirectGroup(credentials) {
    return this.$.createWifiDirectGroup(credentials);
  }
  connectToWifiDirectGroup(credentials, frequency) {
    return this.$.connectToWifiDirectGroup(credentials, frequency);
  }
  getWifiP2PCapabilities() {
    return this.$.getWifiP2PCapabilities();
  }
};

ash.wifi_direct.mojom.WifiDirectManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WifiDirectManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createWifiDirectGroup(credentials) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec,
      [credentials],
      false);
  }

  connectToWifiDirectGroup(credentials, frequency) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec,
      [credentials, frequency],
      false);
  }

  getWifiP2PCapabilities() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec,
      [],
      false);
  }

};

ash.wifi_direct.mojom.WifiDirectManager.getRemote = function() {
  let remote = new ash.wifi_direct.mojom.WifiDirectManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectManager',
    'context');
  return remote.$;
};

ash.wifi_direct.mojom.WifiDirectManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WifiDirectManager', [
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
        
        // Try Method 0: CreateWifiDirectGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWifiDirectGroup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ConnectToWifiDirectGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToWifiDirectGroup (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetWifiP2PCapabilities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWifiP2PCapabilities (2)');
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
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWifiDirectGroup');
          const result = this.impl.createWifiDirectGroup(params.credentials);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateWifiDirectGroup FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToWifiDirectGroup');
          const result = this.impl.connectToWifiDirectGroup(params.credentials, params.frequency);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConnectToWifiDirectGroup FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWifiP2PCapabilities');
          const result = this.impl.getWifiP2PCapabilities();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWifiP2PCapabilities FAILED:', e));
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

ash.wifi_direct.mojom.WifiDirectManagerReceiver = ash.wifi_direct.mojom.WifiDirectManagerReceiver;

ash.wifi_direct.mojom.WifiDirectManagerPtr = ash.wifi_direct.mojom.WifiDirectManagerRemote;
ash.wifi_direct.mojom.WifiDirectManagerRequest = ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver;


// Interface: WifiDirectConnection
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_Params', [
      mojo.internal.StructField('socket', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.mojom.WifiDirectConnectionRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.mojom.WifiDirectConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProperties() {
    return this.$.getProperties();
  }
  associateSocket(socket) {
    return this.$.associateSocket(socket);
  }
};

ash.wifi_direct.mojom.WifiDirectConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WifiDirectConnection', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  associateSocket(socket) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec,
      [socket],
      false);
  }

};

ash.wifi_direct.mojom.WifiDirectConnection.getRemote = function() {
  let remote = new ash.wifi_direct.mojom.WifiDirectConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectConnection',
    'context');
  return remote.$;
};

ash.wifi_direct.mojom.WifiDirectConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WifiDirectConnection', [
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
        
        // Try Method 0: GetProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AssociateSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AssociateSocket (1)');
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
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProperties');
          const result = this.impl.getProperties();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProperties FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.associateSocket');
          const result = this.impl.associateSocket(params.socket);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AssociateSocket FAILED:', e));
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

ash.wifi_direct.mojom.WifiDirectConnectionReceiver = ash.wifi_direct.mojom.WifiDirectConnectionReceiver;

ash.wifi_direct.mojom.WifiDirectConnectionPtr = ash.wifi_direct.mojom.WifiDirectConnectionRemote;
ash.wifi_direct.mojom.WifiDirectConnectionRequest = ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver;

