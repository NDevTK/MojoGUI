// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymaster.mojom
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
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.KeyPurposeSpec = { $: mojo.internal.Enum() };
arc.mojom.KeyFormatSpec = { $: mojo.internal.Enum() };
arc.mojom.IntegerKeyParamSpec = { $: {} };
arc.mojom.KeyParameterSpec = { $: {} };
arc.mojom.KeyCharacteristicsSpec = { $: {} };
arc.mojom.GetKeyCharacteristicsRequestSpec = { $: {} };
arc.mojom.GetKeyCharacteristicsResultSpec = { $: {} };
arc.mojom.GenerateKeyResultSpec = { $: {} };
arc.mojom.ImportKeyRequestSpec = { $: {} };
arc.mojom.ImportKeyResultSpec = { $: {} };
arc.mojom.ExportKeyRequestSpec = { $: {} };
arc.mojom.ExportKeyResultSpec = { $: {} };
arc.mojom.AttestKeyRequestSpec = { $: {} };
arc.mojom.AttestKeyResultSpec = { $: {} };
arc.mojom.UpgradeKeyRequestSpec = { $: {} };
arc.mojom.UpgradeKeyResultSpec = { $: {} };
arc.mojom.BeginRequestSpec = { $: {} };
arc.mojom.BeginResultSpec = { $: {} };
arc.mojom.UpdateRequestSpec = { $: {} };
arc.mojom.UpdateResultSpec = { $: {} };
arc.mojom.FinishRequestSpec = { $: {} };
arc.mojom.FinishResultSpec = { $: {} };
arc.mojom.KeymasterHost = {};
arc.mojom.KeymasterHost.$interfaceName = 'arc.mojom.KeymasterHost';
arc.mojom.KeymasterHost_GetServer_ParamsSpec = { $: {} };
arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterInstance = {};
arc.mojom.KeymasterInstance.$interfaceName = 'arc.mojom.KeymasterInstance';
arc.mojom.KeymasterInstance_Init_ParamsSpec = { $: {} };
arc.mojom.KeymasterInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer = {};
arc.mojom.KeymasterServer.$interfaceName = 'arc.mojom.KeymasterServer';
arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_GenerateKey_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_ImportKey_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_ExportKey_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_AttestKey_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_DeleteKey_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Begin_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Begin_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Update_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Update_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Finish_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Finish_ResponseParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Abort_ParamsSpec = { $: {} };
arc.mojom.KeymasterServer_Abort_ResponseParamsSpec = { $: {} };

// Enum: KeyPurpose
arc.mojom.KeyPurpose = {
  ENCRYPT: 0,
  DECRYPT: 1,
  SIGN: 2,
  VERIFY: 3,
  DERIVE_KEY: 4,
  WRAP_KEY: 5,
};

// Enum: KeyFormat
arc.mojom.KeyFormat = {
  X509: 0,
  PKCS8: 1,
  RAW: 3,
};

// Union: IntegerKeyParam
mojo.internal.Union(
    arc.mojom.IntegerKeyParamSpec, 'arc.mojom.IntegerKeyParam', {
      'boolean_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'integer': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'long_integer': {
        'ordinal': 2,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'date_time': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'blob': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: KeyParameter
mojo.internal.Struct(
    arc.mojom.KeyParameterSpec, 'arc.mojom.KeyParameter', [
      mojo.internal.StructField('param', 0, 0, arc.mojom.IntegerKeyParamSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tag', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyCharacteristics
mojo.internal.Struct(
    arc.mojom.KeyCharacteristicsSpec, 'arc.mojom.KeyCharacteristics', [
      mojo.internal.StructField('software_enforced', 0, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tee_enforced', 8, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GetKeyCharacteristicsRequest
mojo.internal.Struct(
    arc.mojom.GetKeyCharacteristicsRequestSpec, 'arc.mojom.GetKeyCharacteristicsRequest', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('app_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetKeyCharacteristicsResult
mojo.internal.Struct(
    arc.mojom.GetKeyCharacteristicsResultSpec, 'arc.mojom.GetKeyCharacteristicsResult', [
      mojo.internal.StructField('key_characteristics', 0, 0, arc.mojom.KeyCharacteristicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GenerateKeyResult
mojo.internal.Struct(
    arc.mojom.GenerateKeyResultSpec, 'arc.mojom.GenerateKeyResult', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_characteristics', 8, 0, arc.mojom.KeyCharacteristicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ImportKeyRequest
mojo.internal.Struct(
    arc.mojom.ImportKeyRequestSpec, 'arc.mojom.ImportKeyRequest', [
      mojo.internal.StructField('key_description', 0, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('key_format', 8, 0, arc.mojom.KeyFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ImportKeyResult
mojo.internal.Struct(
    arc.mojom.ImportKeyResultSpec, 'arc.mojom.ImportKeyResult', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_characteristics', 8, 0, arc.mojom.KeyCharacteristicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ExportKeyRequest
mojo.internal.Struct(
    arc.mojom.ExportKeyRequestSpec, 'arc.mojom.ExportKeyRequest', [
      mojo.internal.StructField('key_format', 0, 0, arc.mojom.KeyFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_blob', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('app_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ExportKeyResult
mojo.internal.Struct(
    arc.mojom.ExportKeyResultSpec, 'arc.mojom.ExportKeyResult', [
      mojo.internal.StructField('key_material', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AttestKeyRequest
mojo.internal.Struct(
    arc.mojom.AttestKeyRequestSpec, 'arc.mojom.AttestKeyRequest', [
      mojo.internal.StructField('key_to_attest', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('attest_params', 8, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AttestKeyResult
mojo.internal.Struct(
    arc.mojom.AttestKeyResultSpec, 'arc.mojom.AttestKeyResult', [
      mojo.internal.StructField('cert_chain', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UpgradeKeyRequest
mojo.internal.Struct(
    arc.mojom.UpgradeKeyRequestSpec, 'arc.mojom.UpgradeKeyRequest', [
      mojo.internal.StructField('key_blob_to_upgrade', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('upgrade_params', 8, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UpgradeKeyResult
mojo.internal.Struct(
    arc.mojom.UpgradeKeyResultSpec, 'arc.mojom.UpgradeKeyResult', [
      mojo.internal.StructField('upgraded_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginRequest
mojo.internal.Struct(
    arc.mojom.BeginRequestSpec, 'arc.mojom.BeginRequest', [
      mojo.internal.StructField('purpose', 0, 0, arc.mojom.KeyPurposeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('in_params', 16, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BeginResult
mojo.internal.Struct(
    arc.mojom.BeginResultSpec, 'arc.mojom.BeginResult', [
      mojo.internal.StructField('out_params', 0, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('op_handle', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateRequest
mojo.internal.Struct(
    arc.mojom.UpdateRequestSpec, 'arc.mojom.UpdateRequest', [
      mojo.internal.StructField('op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('in_params', 8, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('input', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateResult
mojo.internal.Struct(
    arc.mojom.UpdateResultSpec, 'arc.mojom.UpdateResult', [
      mojo.internal.StructField('out_params', 0, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('input_consumed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('error', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FinishRequest
mojo.internal.Struct(
    arc.mojom.FinishRequestSpec, 'arc.mojom.FinishRequest', [
      mojo.internal.StructField('op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('in_params', 8, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('input', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FinishResult
mojo.internal.Struct(
    arc.mojom.FinishResultSpec, 'arc.mojom.FinishResult', [
      mojo.internal.StructField('out_params', 0, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: KeymasterHost
mojo.internal.Struct(
    arc.mojom.KeymasterHost_GetServer_ParamsSpec, 'arc.mojom.KeymasterHost_GetServer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec, 'arc.mojom.KeymasterHost_GetServer_ResponseParams', [
      mojo.internal.StructField('server_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KeymasterServerSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.KeymasterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KeymasterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KeymasterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.KeymasterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getServer() {
    return this.$.getServer();
  }
};

arc.mojom.KeymasterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeymasterHost', [
      { explicit: 0 },
    ]);
  }

  getServer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.KeymasterHost_GetServer_ParamsSpec,
      arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.KeymasterHost.getRemote = function() {
  let remote = new arc.mojom.KeymasterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterHost',
    'context');
  return remote.$;
};

arc.mojom.KeymasterHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeymasterHost', [
      { explicit: 0 },
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
        
        // Try Method 0: GetServer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterHost_GetServer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetServer (0)');
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
          const params = decoder.decodeStructInline(arc.mojom.KeymasterHost_GetServer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getServer');
          const result = this.impl.getServer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec);
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

arc.mojom.KeymasterHostReceiver = arc.mojom.KeymasterHostReceiver;

arc.mojom.KeymasterHostPtr = arc.mojom.KeymasterHostRemote;
arc.mojom.KeymasterHostRequest = arc.mojom.KeymasterHostPendingReceiver;


// Interface: KeymasterInstance
mojo.internal.Struct(
    arc.mojom.KeymasterInstance_Init_ParamsSpec, 'arc.mojom.KeymasterInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KeymasterHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterInstance_Init_ResponseParamsSpec, 'arc.mojom.KeymasterInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.KeymasterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KeymasterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KeymasterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.KeymasterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.KeymasterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeymasterInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.KeymasterInstance_Init_ParamsSpec,
      arc.mojom.KeymasterInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.KeymasterInstance.getRemote = function() {
  let remote = new arc.mojom.KeymasterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterInstance',
    'context');
  return remote.$;
};

arc.mojom.KeymasterInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeymasterInstance', [
      { explicit: 0 },
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
             decoder.decodeStructInline(arc.mojom.KeymasterInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
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
          const params = decoder.decodeStructInline(arc.mojom.KeymasterInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterInstance_Init_ResponseParamsSpec);
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

arc.mojom.KeymasterInstanceReceiver = arc.mojom.KeymasterInstanceReceiver;

arc.mojom.KeymasterInstancePtr = arc.mojom.KeymasterInstanceRemote;
arc.mojom.KeymasterInstanceRequest = arc.mojom.KeymasterInstancePendingReceiver;


// Interface: KeymasterServer
mojo.internal.Struct(
    arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec, 'arc.mojom.KeymasterServer_SetSystemVersion_Params', [
      mojo.internal.StructField('os_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('os_patchlevel', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec, 'arc.mojom.KeymasterServer_AddRngEntropy_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec, 'arc.mojom.KeymasterServer_AddRngEntropy_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec, 'arc.mojom.KeymasterServer_GetKeyCharacteristics_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.GetKeyCharacteristicsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec, 'arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.GetKeyCharacteristicsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_GenerateKey_ParamsSpec, 'arc.mojom.KeymasterServer_GenerateKey_Params', [
      mojo.internal.StructField('key_params', 0, 0, mojo.internal.Array(arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_GenerateKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.GenerateKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_ImportKey_ParamsSpec, 'arc.mojom.KeymasterServer_ImportKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.ImportKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_ImportKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.ImportKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_ExportKey_ParamsSpec, 'arc.mojom.KeymasterServer_ExportKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.ExportKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_ExportKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.ExportKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_AttestKey_ParamsSpec, 'arc.mojom.KeymasterServer_AttestKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.AttestKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_AttestKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.AttestKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec, 'arc.mojom.KeymasterServer_UpgradeKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.UpgradeKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_UpgradeKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.UpgradeKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_DeleteKey_ParamsSpec, 'arc.mojom.KeymasterServer_DeleteKey_Params', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_DeleteKey_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec, 'arc.mojom.KeymasterServer_DeleteAllKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec, 'arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Begin_ParamsSpec, 'arc.mojom.KeymasterServer_Begin_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.BeginRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Begin_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Begin_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.BeginResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Update_ParamsSpec, 'arc.mojom.KeymasterServer_Update_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.UpdateRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Update_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Update_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.UpdateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Finish_ParamsSpec, 'arc.mojom.KeymasterServer_Finish_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.FinishRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Finish_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Finish_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.FinishResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Abort_ParamsSpec, 'arc.mojom.KeymasterServer_Abort_Params', [
      mojo.internal.StructField('op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KeymasterServer_Abort_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Abort_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.KeymasterServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KeymasterServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KeymasterServerPendingReceiver,
      handle);
    this.$ = new arc.mojom.KeymasterServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setSystemVersion(os_version, os_patchlevel) {
    return this.$.setSystemVersion(os_version, os_patchlevel);
  }
  addRngEntropy(data) {
    return this.$.addRngEntropy(data);
  }
  getKeyCharacteristics(request) {
    return this.$.getKeyCharacteristics(request);
  }
  generateKey(key_params) {
    return this.$.generateKey(key_params);
  }
  importKey(request) {
    return this.$.importKey(request);
  }
  exportKey(request) {
    return this.$.exportKey(request);
  }
  attestKey(request) {
    return this.$.attestKey(request);
  }
  upgradeKey(request) {
    return this.$.upgradeKey(request);
  }
  deleteKey(key_blob) {
    return this.$.deleteKey(key_blob);
  }
  deleteAllKeys() {
    return this.$.deleteAllKeys();
  }
  begin(request) {
    return this.$.begin(request);
  }
  update(request) {
    return this.$.update(request);
  }
  finish(request) {
    return this.$.finish(request);
  }
  abort(op_handle) {
    return this.$.abort(op_handle);
  }
};

arc.mojom.KeymasterServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeymasterServer', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
    ]);
  }

  setSystemVersion(os_version, os_patchlevel) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec,
      null,
      [os_version, os_patchlevel],
      false);
  }

  addRngEntropy(data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec,
      arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec,
      [data],
      false);
  }

  getKeyCharacteristics(request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec,
      arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec,
      [request],
      false);
  }

  generateKey(key_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.KeymasterServer_GenerateKey_ParamsSpec,
      arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec,
      [key_params],
      false);
  }

  importKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.KeymasterServer_ImportKey_ParamsSpec,
      arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec,
      [request],
      false);
  }

  exportKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.KeymasterServer_ExportKey_ParamsSpec,
      arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec,
      [request],
      false);
  }

  attestKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.KeymasterServer_AttestKey_ParamsSpec,
      arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec,
      [request],
      false);
  }

  upgradeKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec,
      arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec,
      [request],
      false);
  }

  deleteKey(key_blob) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.KeymasterServer_DeleteKey_ParamsSpec,
      arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec,
      [key_blob],
      false);
  }

  deleteAllKeys() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec,
      arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec,
      [],
      false);
  }

  begin(request) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.KeymasterServer_Begin_ParamsSpec,
      arc.mojom.KeymasterServer_Begin_ResponseParamsSpec,
      [request],
      false);
  }

  update(request) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.KeymasterServer_Update_ParamsSpec,
      arc.mojom.KeymasterServer_Update_ResponseParamsSpec,
      [request],
      false);
  }

  finish(request) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.KeymasterServer_Finish_ParamsSpec,
      arc.mojom.KeymasterServer_Finish_ResponseParamsSpec,
      [request],
      false);
  }

  abort(op_handle) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.KeymasterServer_Abort_ParamsSpec,
      arc.mojom.KeymasterServer_Abort_ResponseParamsSpec,
      [op_handle],
      false);
  }

};

arc.mojom.KeymasterServer.getRemote = function() {
  let remote = new arc.mojom.KeymasterServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterServer',
    'context');
  return remote.$;
};

arc.mojom.KeymasterServerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeymasterServer', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
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
        
        // Try Method 0: SetSystemVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSystemVersion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddRngEntropy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRngEntropy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetKeyCharacteristics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyCharacteristics (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GenerateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_GenerateKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateKey (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ImportKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_ImportKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportKey (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ExportKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_ExportKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExportKey (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AttestKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_AttestKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttestKey (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpgradeKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpgradeKey (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DeleteKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_DeleteKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteKey (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DeleteAllKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllKeys (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Begin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Begin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Begin (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Finish
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Finish_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Finish (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Abort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSystemVersion');
          const result = this.impl.setSystemVersion(params.os_version, params.os_patchlevel);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRngEntropy');
          const result = this.impl.addRngEntropy(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyCharacteristics');
          const result = this.impl.getKeyCharacteristics(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_GenerateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateKey');
          const result = this.impl.generateKey(params.key_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_ImportKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.importKey');
          const result = this.impl.importKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_ExportKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exportKey');
          const result = this.impl.exportKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_AttestKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attestKey');
          const result = this.impl.attestKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.upgradeKey');
          const result = this.impl.upgradeKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_DeleteKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteKey');
          const result = this.impl.deleteKey(params.key_blob);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllKeys');
          const result = this.impl.deleteAllKeys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_Begin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.begin');
          const result = this.impl.begin(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_Begin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_Update_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_Finish_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finish');
          const result = this.impl.finish(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_Finish_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_Abort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort(params.op_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KeymasterServer_Abort_ResponseParamsSpec);
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

arc.mojom.KeymasterServerReceiver = arc.mojom.KeymasterServerReceiver;

arc.mojom.KeymasterServerPtr = arc.mojom.KeymasterServerRemote;
arc.mojom.KeymasterServerRequest = arc.mojom.KeymasterServerPendingReceiver;

