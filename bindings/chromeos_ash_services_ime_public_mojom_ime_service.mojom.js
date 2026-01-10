// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/ime_service.mojom
// Module: ash.ime.mojom

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
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var sandbox = sandbox || {};

ash.ime.mojom.InputEngineManager = {};
ash.ime.mojom.InputEngineManager.$interfaceName = 'ash.ime.mojom.InputEngineManager';
ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec = { $: {} };
ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec = { $: {} };
ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec = { $: {} };
ash.ime.mojom.PlatformAccessProvider = {};
ash.ime.mojom.PlatformAccessProvider.$interfaceName = 'ash.ime.mojom.PlatformAccessProvider';
ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec = { $: {} };
ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec = { $: {} };
ash.ime.mojom.ImeService = {};
ash.ime.mojom.ImeService.$interfaceName = 'ash.ime.mojom.ImeService';
ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec = { $: {} };
ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec = { $: {} };
ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec = { $: {} };

// Interface: InputEngineManager
mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec, 'ash.ime.mojom.InputEngineManager_ConnectToImeEngine_Params', [
      mojo.internal.StructField('ime_spec', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('to_engine_request', 8, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.InputChannelRemote), null, false, 0, undefined),
      mojo.internal.StructField('from_engine', 16, 0, mojo.internal.InterfaceProxy(ash.ime.mojom.InputChannelRemote), null, false, 0, undefined),
      mojo.internal.StructField('extra', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec, 'ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec, 'ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_Params', [
      mojo.internal.StructField('connection_factory', 0, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.ConnectionFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec, 'ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.InputEngineManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputEngineManagerRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputEngineManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputEngineManagerPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputEngineManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputEngineManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputEngineManager', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  connectToImeEngine(ime_spec, to_engine_request, from_engine, extra) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec,
      ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec,
      [ime_spec, to_engine_request, from_engine, extra],
      false);
  }

  initializeConnectionFactory(connection_factory) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec,
      ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec,
      [connection_factory],
      false);
  }

};

ash.ime.mojom.InputEngineManager.getRemote = function() {
  let remote = new ash.ime.mojom.InputEngineManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputEngineManager',
    'context');
  return remote.$;
};

ash.ime.mojom.InputEngineManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputEngineManager', [
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
        
        // Try Method 0: ConnectToImeEngine
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToImeEngine (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InitializeConnectionFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeConnectionFactory (1)');
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
          const params = decoder.decodeStructInline(ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToImeEngine');
          const result = this.impl.connectToImeEngine(params.ime_spec, params.to_engine_request, params.from_engine, params.extra);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeConnectionFactory');
          const result = this.impl.initializeConnectionFactory(params.connection_factory);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec);
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

ash.ime.mojom.InputEngineManagerReceiver = ash.ime.mojom.InputEngineManagerReceiver;

ash.ime.mojom.InputEngineManagerPtr = ash.ime.mojom.InputEngineManagerRemote;
ash.ime.mojom.InputEngineManagerRequest = ash.ime.mojom.InputEngineManagerPendingReceiver;


// Interface: PlatformAccessProvider
mojo.internal.Struct(
    ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec, 'ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec, 'ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParams', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.PlatformAccessProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.PlatformAccessProviderRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.PlatformAccessProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.PlatformAccessProviderPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.PlatformAccessProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.PlatformAccessProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PlatformAccessProvider', [
      { explicit: null },
    ]);
  }

  downloadImeFileTo(url, file_path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec,
      ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec,
      [url, file_path],
      false);
  }

};

ash.ime.mojom.PlatformAccessProvider.getRemote = function() {
  let remote = new ash.ime.mojom.PlatformAccessProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.PlatformAccessProvider',
    'context');
  return remote.$;
};

ash.ime.mojom.PlatformAccessProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PlatformAccessProvider', [
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
        
        // Try Method 0: DownloadImeFileTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadImeFileTo (0)');
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
          const params = decoder.decodeStructInline(ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadImeFileTo');
          const result = this.impl.downloadImeFileTo(params.url, params.file_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec);
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

ash.ime.mojom.PlatformAccessProviderReceiver = ash.ime.mojom.PlatformAccessProviderReceiver;

ash.ime.mojom.PlatformAccessProviderPtr = ash.ime.mojom.PlatformAccessProviderRemote;
ash.ime.mojom.PlatformAccessProviderRequest = ash.ime.mojom.PlatformAccessProviderPendingReceiver;


// Interface: ImeService
mojo.internal.Struct(
    ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec, 'ash.ime.mojom.ImeService_SetPlatformAccessProvider_Params', [
      mojo.internal.StructField('provider', 0, 0, mojo.internal.InterfaceProxy(ash.ime.mojom.PlatformAccessProviderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec, 'ash.ime.mojom.ImeService_BindInputEngineManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.InputEngineManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec, 'ash.ime.mojom.ImeService_BindInputMethodUserDataService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.InputMethodUserDataServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.ImeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.ImeServiceRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.ImeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.ImeServicePendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.ImeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.ImeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImeService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPlatformAccessProvider(provider) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec,
      null,
      [provider],
      false);
  }

  bindInputEngineManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindInputMethodUserDataService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

ash.ime.mojom.ImeService.getRemote = function() {
  let remote = new ash.ime.mojom.ImeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.ImeService',
    'context');
  return remote.$;
};

ash.ime.mojom.ImeServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImeService', [
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
        
        // Try Method 0: SetPlatformAccessProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPlatformAccessProvider (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindInputEngineManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInputEngineManager (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindInputMethodUserDataService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInputMethodUserDataService (2)');
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
          const params = decoder.decodeStructInline(ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPlatformAccessProvider');
          const result = this.impl.setPlatformAccessProvider(params.provider);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindInputEngineManager');
          const result = this.impl.bindInputEngineManager(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindInputMethodUserDataService');
          const result = this.impl.bindInputMethodUserDataService(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.ime.mojom.ImeServiceReceiver = ash.ime.mojom.ImeServiceReceiver;

ash.ime.mojom.ImeServicePtr = ash.ime.mojom.ImeServiceRemote;
ash.ime.mojom.ImeServiceRequest = ash.ime.mojom.ImeServicePendingReceiver;

