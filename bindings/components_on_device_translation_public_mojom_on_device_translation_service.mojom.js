// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/on_device_translation_service.mojom
// Module: on_device_translation.mojom

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
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

on_device_translation.mojom.CreateTranslatorResultSpec = { $: mojo.internal.Enum() };
on_device_translation.mojom.OnDeviceTranslationLanguagePackageSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationServiceConfigSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy = {};
on_device_translation.mojom.FileOperationProxy.$interfaceName = 'on_device_translation.mojom.FileOperationProxy';
on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService = {};
on_device_translation.mojom.OnDeviceTranslationService.$interfaceName = 'on_device_translation.mojom.OnDeviceTranslationService';
on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec = { $: {} };

on_device_translation.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kOnDeviceTranslation;

on_device_translation.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kService;

on_device_translation.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kNoSandbox;

// Enum: CreateTranslatorResult
on_device_translation.mojom.CreateTranslatorResult = {
  kSuccess: 0,
  kErrorInvalidBinary: 1,
  kErrorInvalidFunctionPointer: 2,
  kErrorFailedToInitialize: 3,
  kErrorFailedToCreateTranslator: 4,
  kErrorInvalidVersion: 5,
};

// Struct: OnDeviceTranslationLanguagePackage
mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationLanguagePackageSpec, 'on_device_translation.mojom.OnDeviceTranslationLanguagePackage', [
      mojo.internal.StructField('language1', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language2', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OnDeviceTranslationServiceConfig
mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationServiceConfigSpec, 'on_device_translation.mojom.OnDeviceTranslationServiceConfig', [
      mojo.internal.StructField('packages', 0, 0, mojo.internal.Array(on_device_translation.mojom.OnDeviceTranslationLanguagePackageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('file_operation_proxy', 8, 0, mojo.internal.InterfaceProxy(on_device_translation.mojom.FileOperationProxySpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileOperationProxy
mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec, 'on_device_translation.mojom.FileOperationProxy_FileExists_Params', [
      mojo.internal.StructField('relative_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('package_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec, 'on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParams', [
      mojo.internal.StructField('exists', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_directory', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec, 'on_device_translation.mojom.FileOperationProxy_Open_Params', [
      mojo.internal.StructField('relative_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('package_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec, 'on_device_translation.mojom.FileOperationProxy_Open_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation.mojom.FileOperationProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.FileOperationProxyRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.FileOperationProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.FileOperationProxyPendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.FileOperationProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  fileExists(package_index, relative_path) {
    return this.$.fileExists(package_index, relative_path);
  }
  open(package_index, relative_path) {
    return this.$.open(package_index, relative_path);
  }
};

on_device_translation.mojom.FileOperationProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileOperationProxy', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  fileExists(package_index, relative_path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec,
      on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec,
      [package_index, relative_path],
      false);
  }

  open(package_index, relative_path) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec,
      on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec,
      [package_index, relative_path],
      false);
  }

};

on_device_translation.mojom.FileOperationProxy.getRemote = function() {
  let remote = new on_device_translation.mojom.FileOperationProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.FileOperationProxy',
    'context');
  return remote.$;
};

on_device_translation.mojom.FileOperationProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileOperationProxy', [
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
        
        // Try Method 0: FileExists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FileExists (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Open
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Open (1)');
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
          const params = decoder.decodeStructInline(on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fileExists');
          const result = this.impl.fileExists(params.package_index, params.relative_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FileExists FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.open');
          const result = this.impl.open(params.package_index, params.relative_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Open FAILED:', e));
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

on_device_translation.mojom.FileOperationProxyReceiver = on_device_translation.mojom.FileOperationProxyReceiver;

on_device_translation.mojom.FileOperationProxyPtr = on_device_translation.mojom.FileOperationProxyRemote;
on_device_translation.mojom.FileOperationProxyRequest = on_device_translation.mojom.FileOperationProxyPendingReceiver;


// Interface: OnDeviceTranslationService
mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_Params', [
      mojo.internal.StructField('config', 0, 0, on_device_translation.mojom.OnDeviceTranslationServiceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_Params', [
      mojo.internal.StructField('source_lang', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(on_device_translation.mojom.TranslatorRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_translation.mojom.CreateTranslatorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_Params', [
      mojo.internal.StructField('source_lang', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParams', [
      mojo.internal.StructField('can_stranslate', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation.mojom.OnDeviceTranslationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.OnDeviceTranslationServiceRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.OnDeviceTranslationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.OnDeviceTranslationServicePendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.OnDeviceTranslationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setServiceConfig(config) {
    return this.$.setServiceConfig(config);
  }
  createTranslator(source_lang, target_lang, receiver) {
    return this.$.createTranslator(source_lang, target_lang, receiver);
  }
  canTranslate(source_lang, target_lang) {
    return this.$.canTranslate(source_lang, target_lang);
  }
};

on_device_translation.mojom.OnDeviceTranslationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OnDeviceTranslationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setServiceConfig(config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec,
      null,
      [config],
      false);
  }

  createTranslator(source_lang, target_lang, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec,
      on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec,
      [source_lang, target_lang, receiver],
      false);
  }

  canTranslate(source_lang, target_lang) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec,
      on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec,
      [source_lang, target_lang],
      false);
  }

};

on_device_translation.mojom.OnDeviceTranslationService.getRemote = function() {
  let remote = new on_device_translation.mojom.OnDeviceTranslationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.OnDeviceTranslationService',
    'context');
  return remote.$;
};

on_device_translation.mojom.OnDeviceTranslationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OnDeviceTranslationService', [
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
        
        // Try Method 0: SetServiceConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetServiceConfig (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateTranslator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTranslator (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CanTranslate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanTranslate (2)');
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
          const params = decoder.decodeStructInline(on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setServiceConfig');
          const result = this.impl.setServiceConfig(params.config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTranslator');
          const result = this.impl.createTranslator(params.source_lang, params.target_lang, params.receiver);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTranslator FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.canTranslate');
          const result = this.impl.canTranslate(params.source_lang, params.target_lang);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CanTranslate FAILED:', e));
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

on_device_translation.mojom.OnDeviceTranslationServiceReceiver = on_device_translation.mojom.OnDeviceTranslationServiceReceiver;

on_device_translation.mojom.OnDeviceTranslationServicePtr = on_device_translation.mojom.OnDeviceTranslationServiceRemote;
on_device_translation.mojom.OnDeviceTranslationServiceRequest = on_device_translation.mojom.OnDeviceTranslationServicePendingReceiver;

