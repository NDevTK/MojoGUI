// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymaster.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
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
      mojo.internal.StructField('server_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KeymasterServerRemote), null, true, 0, undefined),
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterHost_GetServer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterHost_GetServer_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.KeymasterHostReceiver = arc.mojom.KeymasterHostReceiver;

arc.mojom.KeymasterHostPtr = arc.mojom.KeymasterHostRemote;
arc.mojom.KeymasterHostRequest = arc.mojom.KeymasterHostPendingReceiver;


// Interface: KeymasterInstance
mojo.internal.Struct(
    arc.mojom.KeymasterInstance_Init_ParamsSpec, 'arc.mojom.KeymasterInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KeymasterHostRemote), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterInstance_Init_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_GenerateKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_ImportKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_ExportKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_AttestKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_DeleteKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Begin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Finish_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KeymasterServer_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec.$.structSpec);
          const result = this.impl.setSystemVersion(params.os_version, params.os_patchlevel);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.KeymasterServerReceiver = arc.mojom.KeymasterServerReceiver;

arc.mojom.KeymasterServerPtr = arc.mojom.KeymasterServerRemote;
arc.mojom.KeymasterServerRequest = arc.mojom.KeymasterServerPendingReceiver;

