// Auto-generated MojoJS binding
// Source: chromium_src/components/web_package/mojom/web_bundle_parser.mojom
// Module: web_package.mojom

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
var web_package = web_package || {};
web_package.mojom = web_package.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

web_package.mojom.BundleParseErrorTypeSpec = { $: mojo.internal.Enum() };
web_package.mojom.BundleFormatVersionSpec = { $: mojo.internal.Enum() };
web_package.mojom.SignatureInfoSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockParseErrorSpec = { $: {} };
web_package.mojom.BundleMetadataParseErrorSpec = { $: {} };
web_package.mojom.BundleResponseParseErrorSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockAttributesSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockSpec = { $: {} };
web_package.mojom.Ed25519PublicKeySpec = { $: {} };
web_package.mojom.Ed25519SignatureSpec = { $: {} };
web_package.mojom.SignatureInfoEd25519Spec = { $: {} };
web_package.mojom.EcdsaP256PublicKeySpec = { $: {} };
web_package.mojom.EcdsaP256SHA256SignatureSpec = { $: {} };
web_package.mojom.SignatureInfoEcdsaP256SHA256Spec = { $: {} };
web_package.mojom.SignatureInfoUnknownSpec = { $: {} };
web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec = { $: {} };
web_package.mojom.BundleMetadataSpec = { $: {} };
web_package.mojom.BundleResponseLocationSpec = { $: {} };
web_package.mojom.BundleResponseSpec = { $: {} };
web_package.mojom.WebBundleParserFactory = {};
web_package.mojom.WebBundleParserFactory.$interfaceName = 'web_package.mojom.WebBundleParserFactory';
web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser = {};
web_package.mojom.WebBundleParser.$interfaceName = 'web_package.mojom.WebBundleParser';
web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_Close_ParamsSpec = { $: {} };
web_package.mojom.WebBundleParser_Close_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource = {};
web_package.mojom.BundleDataSource.$interfaceName = 'web_package.mojom.BundleDataSource';
web_package.mojom.BundleDataSource_Read_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Read_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Length_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Length_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Close_ParamsSpec = { $: {} };
web_package.mojom.BundleDataSource_Close_ResponseParamsSpec = { $: {} };

// Enum: BundleParseErrorType
web_package.mojom.BundleParseErrorType = {
  kParserInternalError: 0,
  kFormatError: 1,
  kVersionError: 2,
};

// Enum: BundleFormatVersion
web_package.mojom.BundleFormatVersion = {
  kB1: 0,
  kB2: 1,
};

// Union: SignatureInfo
mojo.internal.Union(
    web_package.mojom.SignatureInfoSpec, 'web_package.mojom.SignatureInfo', {
      'unknown': {
        'ordinal': 0,
        'type': web_package.mojom.SignatureInfoUnknownSpec.$,
        'nullable': false,
      },
      'ed25519': {
        'ordinal': 1,
        'type': web_package.mojom.SignatureInfoEd25519Spec.$,
        'nullable': false,
      },
      'ecdsa_p256_sha256': {
        'ordinal': 2,
        'type': web_package.mojom.SignatureInfoEcdsaP256SHA256Spec.$,
        'nullable': false,
      },
    });

// Struct: BundleIntegrityBlockParseError
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockParseErrorSpec, 'web_package.mojom.BundleIntegrityBlockParseError', [
      mojo.internal.StructField('type', 0, 0, web_package.mojom.BundleParseErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleMetadataParseError
mojo.internal.Struct(
    web_package.mojom.BundleMetadataParseErrorSpec, 'web_package.mojom.BundleMetadataParseError', [
      mojo.internal.StructField('type', 0, 0, web_package.mojom.BundleParseErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleResponseParseError
mojo.internal.Struct(
    web_package.mojom.BundleResponseParseErrorSpec, 'web_package.mojom.BundleResponseParseError', [
      mojo.internal.StructField('type', 0, 0, web_package.mojom.BundleParseErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleIntegrityBlockAttributes
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockAttributesSpec, 'web_package.mojom.BundleIntegrityBlockAttributes', [
      mojo.internal.StructField('web_bundle_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cbor', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleIntegrityBlock
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockSpec, 'web_package.mojom.BundleIntegrityBlock', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('signature_stack', 8, 0, mojo.internal.Array(web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('attributes', 16, 0, web_package.mojom.BundleIntegrityBlockAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Ed25519PublicKey
mojo.internal.Struct(
    web_package.mojom.Ed25519PublicKeySpec, 'web_package.mojom.Ed25519PublicKey', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Ed25519Signature
mojo.internal.Struct(
    web_package.mojom.Ed25519SignatureSpec, 'web_package.mojom.Ed25519Signature', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SignatureInfoEd25519
mojo.internal.Struct(
    web_package.mojom.SignatureInfoEd25519Spec, 'web_package.mojom.SignatureInfoEd25519', [
      mojo.internal.StructField('public_key', 0, 0, web_package.mojom.Ed25519PublicKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, web_package.mojom.Ed25519SignatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EcdsaP256PublicKey
mojo.internal.Struct(
    web_package.mojom.EcdsaP256PublicKeySpec, 'web_package.mojom.EcdsaP256PublicKey', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EcdsaP256SHA256Signature
mojo.internal.Struct(
    web_package.mojom.EcdsaP256SHA256SignatureSpec, 'web_package.mojom.EcdsaP256SHA256Signature', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SignatureInfoEcdsaP256SHA256
mojo.internal.Struct(
    web_package.mojom.SignatureInfoEcdsaP256SHA256Spec, 'web_package.mojom.SignatureInfoEcdsaP256SHA256', [
      mojo.internal.StructField('public_key', 0, 0, web_package.mojom.EcdsaP256PublicKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, web_package.mojom.EcdsaP256SHA256SignatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SignatureInfoUnknown
mojo.internal.Struct(
    web_package.mojom.SignatureInfoUnknownSpec, 'web_package.mojom.SignatureInfoUnknown', [
    ],
    [[0, 8]]);

// Struct: BundleIntegrityBlockSignatureStackEntry
mojo.internal.Struct(
    web_package.mojom.BundleIntegrityBlockSignatureStackEntrySpec, 'web_package.mojom.BundleIntegrityBlockSignatureStackEntry', [
      mojo.internal.StructField('attributes_cbor', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature_info', 8, 0, web_package.mojom.SignatureInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleMetadata
mojo.internal.Struct(
    web_package.mojom.BundleMetadataSpec, 'web_package.mojom.BundleMetadata', [
      mojo.internal.StructField('version', 0, 0, web_package.mojom.BundleFormatVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('requests', 16, 0, mojo.internal.Map(url.mojom.UrlSpec.$, web_package.mojom.BundleResponseLocationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BundleResponseLocation
mojo.internal.Struct(
    web_package.mojom.BundleResponseLocationSpec, 'web_package.mojom.BundleResponseLocation', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundleResponse
mojo.internal.Struct(
    web_package.mojom.BundleResponseSpec, 'web_package.mojom.BundleResponse', [
      mojo.internal.StructField('response_headers', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('payload_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('payload_length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('response_code', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: WebBundleParserFactory
mojo.internal.Struct(
    web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec, 'web_package.mojom.WebBundleParserFactory_GetParserForDataSource_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(web_package.mojom.WebBundleParserSpec), null, false, 0, undefined),
      mojo.internal.StructField('base_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('data_source', 16, 0, mojo.internal.InterfaceProxy(web_package.mojom.BundleDataSourceSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec, 'web_package.mojom.WebBundleParserFactory_BindFileDataSource_Params', [
      mojo.internal.StructField('data_source', 0, 0, mojo.internal.InterfaceRequest(web_package.mojom.BundleDataSourceSpec), null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

web_package.mojom.WebBundleParserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_package.mojom.WebBundleParserFactoryRemote = class {
  static get $interfaceName() {
    return 'web_package.mojom.WebBundleParserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_package.mojom.WebBundleParserFactoryPendingReceiver,
      handle);
    this.$ = new web_package.mojom.WebBundleParserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getParserForDataSource(receiver, base_url, data_source) {
    return this.$.getParserForDataSource(receiver, base_url, data_source);
  }
  bindFileDataSource(data_source, file) {
    return this.$.bindFileDataSource(data_source, file);
  }
};

web_package.mojom.WebBundleParserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebBundleParserFactory', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getParserForDataSource(receiver, base_url, data_source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec,
      null,
      [receiver, base_url, data_source],
      false);
  }

  bindFileDataSource(data_source, file) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec,
      null,
      [data_source, file],
      false);
  }

};

web_package.mojom.WebBundleParserFactory.getRemote = function() {
  let remote = new web_package.mojom.WebBundleParserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_package.mojom.WebBundleParserFactory',
    'context');
  return remote.$;
};

web_package.mojom.WebBundleParserFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebBundleParserFactory', [
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
        
        // Try Method 0: GetParserForDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetParserForDataSource (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindFileDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindFileDataSource (1)');
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
          const params = decoder.decodeStructInline(web_package.mojom.WebBundleParserFactory_GetParserForDataSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getParserForDataSource');
          const result = this.impl.getParserForDataSource(params.receiver, params.base_url, params.data_source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_package.mojom.WebBundleParserFactory_BindFileDataSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindFileDataSource');
          const result = this.impl.bindFileDataSource(params.data_source, params.file);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

web_package.mojom.WebBundleParserFactoryReceiver = web_package.mojom.WebBundleParserFactoryReceiver;

web_package.mojom.WebBundleParserFactoryPtr = web_package.mojom.WebBundleParserFactoryRemote;
web_package.mojom.WebBundleParserFactoryRequest = web_package.mojom.WebBundleParserFactoryPendingReceiver;


// Interface: WebBundleParser
mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec, 'web_package.mojom.WebBundleParser_ParseIntegrityBlock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParams', [
      mojo.internal.StructField('Result', 0, 0, web_package.mojom.BundleIntegrityBlockSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, web_package.mojom.BundleIntegrityBlockParseErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec, 'web_package.mojom.WebBundleParser_ParseMetadata_Params', [
      mojo.internal.StructField('offset_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'offset_$flag', originalFieldName: 'offset' }),
      mojo.internal.StructField('offset_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'offset_$value', originalFieldName: 'offset' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_ParseMetadata_ResponseParams', [
      mojo.internal.StructField('Result', 0, 0, web_package.mojom.BundleMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, web_package.mojom.BundleMetadataParseErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec, 'web_package.mojom.WebBundleParser_ParseResponse_Params', [
      mojo.internal.StructField('response_offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('response_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_ParseResponse_ResponseParams', [
      mojo.internal.StructField('Result', 0, 0, web_package.mojom.BundleResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, web_package.mojom.BundleResponseParseErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_Close_ParamsSpec, 'web_package.mojom.WebBundleParser_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.WebBundleParser_Close_ResponseParamsSpec, 'web_package.mojom.WebBundleParser_Close_ResponseParams', [
    ],
    [[0, 8]]);

web_package.mojom.WebBundleParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_package.mojom.WebBundleParserRemote = class {
  static get $interfaceName() {
    return 'web_package.mojom.WebBundleParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_package.mojom.WebBundleParserPendingReceiver,
      handle);
    this.$ = new web_package.mojom.WebBundleParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  parseIntegrityBlock() {
    return this.$.parseIntegrityBlock();
  }
  parseMetadata(offset) {
    return this.$.parseMetadata(offset);
  }
  parseResponse(response_offset, response_length) {
    return this.$.parseResponse(response_offset, response_length);
  }
  close() {
    return this.$.close();
  }
};

web_package.mojom.WebBundleParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebBundleParser', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  parseIntegrityBlock() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec,
      [],
      false);
  }

  parseMetadata(offset) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec,
      [offset],
      false);
  }

  parseResponse(response_offset, response_length) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec,
      web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec,
      [response_offset, response_length],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      web_package.mojom.WebBundleParser_Close_ParamsSpec,
      web_package.mojom.WebBundleParser_Close_ResponseParamsSpec,
      [],
      false);
  }

};

web_package.mojom.WebBundleParser.getRemote = function() {
  let remote = new web_package.mojom.WebBundleParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_package.mojom.WebBundleParser',
    'context');
  return remote.$;
};

web_package.mojom.WebBundleParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebBundleParser', [
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
        
        // Try Method 0: ParseIntegrityBlock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseIntegrityBlock (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ParseMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseMetadata (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ParseResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseResponse (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.WebBundleParser_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (3)');
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
          const params = decoder.decodeStructInline(web_package.mojom.WebBundleParser_ParseIntegrityBlock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseIntegrityBlock');
          const result = this.impl.parseIntegrityBlock();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_ParseIntegrityBlock_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_package.mojom.WebBundleParser_ParseMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseMetadata');
          const result = this.impl.parseMetadata(params.offset);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_ParseMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_package.mojom.WebBundleParser_ParseResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseResponse');
          const result = this.impl.parseResponse(params.response_offset, params.response_length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_ParseResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_package.mojom.WebBundleParser_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.WebBundleParser_Close_ResponseParamsSpec);
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

web_package.mojom.WebBundleParserReceiver = web_package.mojom.WebBundleParserReceiver;

web_package.mojom.WebBundleParserPtr = web_package.mojom.WebBundleParserRemote;
web_package.mojom.WebBundleParserRequest = web_package.mojom.WebBundleParserPendingReceiver;


// Interface: BundleDataSource
mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Read_ParamsSpec, 'web_package.mojom.BundleDataSource_Read_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Read_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_Read_ResponseParams', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Length_ParamsSpec, 'web_package.mojom.BundleDataSource_Length_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Length_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_Length_ResponseParams', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec, 'web_package.mojom.BundleDataSource_IsRandomAccessContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParams', [
      mojo.internal.StructField('is_random_access', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Close_ParamsSpec, 'web_package.mojom.BundleDataSource_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    web_package.mojom.BundleDataSource_Close_ResponseParamsSpec, 'web_package.mojom.BundleDataSource_Close_ResponseParams', [
    ],
    [[0, 8]]);

web_package.mojom.BundleDataSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_package.mojom.BundleDataSourceRemote = class {
  static get $interfaceName() {
    return 'web_package.mojom.BundleDataSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_package.mojom.BundleDataSourcePendingReceiver,
      handle);
    this.$ = new web_package.mojom.BundleDataSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  read(offset, length) {
    return this.$.read(offset, length);
  }
  length() {
    return this.$.length();
  }
  isRandomAccessContext() {
    return this.$.isRandomAccessContext();
  }
  close() {
    return this.$.close();
  }
};

web_package.mojom.BundleDataSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BundleDataSource', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  read(offset, length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      web_package.mojom.BundleDataSource_Read_ParamsSpec,
      web_package.mojom.BundleDataSource_Read_ResponseParamsSpec,
      [offset, length],
      false);
  }

  length() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      web_package.mojom.BundleDataSource_Length_ParamsSpec,
      web_package.mojom.BundleDataSource_Length_ResponseParamsSpec,
      [],
      false);
  }

  isRandomAccessContext() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec,
      web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec,
      [],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      web_package.mojom.BundleDataSource_Close_ParamsSpec,
      web_package.mojom.BundleDataSource_Close_ResponseParamsSpec,
      [],
      false);
  }

};

web_package.mojom.BundleDataSource.getRemote = function() {
  let remote = new web_package.mojom.BundleDataSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_package.mojom.BundleDataSource',
    'context');
  return remote.$;
};

web_package.mojom.BundleDataSourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BundleDataSource', [
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
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.BundleDataSource_Read_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Read (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Length
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.BundleDataSource_Length_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Length (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsRandomAccessContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRandomAccessContext (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_package.mojom.BundleDataSource_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (3)');
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
          const params = decoder.decodeStructInline(web_package.mojom.BundleDataSource_Read_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read(params.offset, params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_package.mojom.BundleDataSource_Length_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.length');
          const result = this.impl.length();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_Length_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_package.mojom.BundleDataSource_IsRandomAccessContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isRandomAccessContext');
          const result = this.impl.isRandomAccessContext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_IsRandomAccessContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(web_package.mojom.BundleDataSource_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_package.mojom.BundleDataSource_Close_ResponseParamsSpec);
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

web_package.mojom.BundleDataSourceReceiver = web_package.mojom.BundleDataSourceReceiver;

web_package.mojom.BundleDataSourcePtr = web_package.mojom.BundleDataSourceRemote;
web_package.mojom.BundleDataSourceRequest = web_package.mojom.BundleDataSourcePendingReceiver;

