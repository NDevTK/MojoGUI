// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymaster.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: KeyPurpose
arc.mojom.mojom.KeyPurpose = {
  ENCRYPT: 0,
  DECRYPT: 1,
  SIGN: 2,
  VERIFY: 3,
  DERIVE_KEY: 4,
  WRAP_KEY: 5,
};
arc.mojom.mojom.KeyPurposeSpec = { $: mojo.internal.Enum() };

// Enum: KeyFormat
arc.mojom.mojom.KeyFormat = {
  X509: 0,
  PKCS8: 1,
  RAW: 2,
};
arc.mojom.mojom.KeyFormatSpec = { $: mojo.internal.Enum() };

// Union: IntegerKeyParam
arc.mojom.mojom.IntegerKeyParamSpec = { $: mojo.internal.Union(
    'arc.mojom.IntegerKeyParam', {
      'boolean_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'integer': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
      }},
      'long_integer': {
        'ordinal': 2,
        'type': mojo.internal.Uint64,
      }},
      'date_time': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
      }},
      'blob': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Struct: KeyParameter
arc.mojom.mojom.KeyParameterSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeyParameter',
      packedSize: 32,
      fields: [
        { name: 'tag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'param', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.IntegerKeyParamSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: KeyCharacteristics
arc.mojom.mojom.KeyCharacteristicsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeyCharacteristics',
      packedSize: 24,
      fields: [
        { name: 'software_enforced', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'tee_enforced', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GetKeyCharacteristicsRequest
arc.mojom.mojom.GetKeyCharacteristicsRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GetKeyCharacteristicsRequest',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'app_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GetKeyCharacteristicsResult
arc.mojom.mojom.GetKeyCharacteristicsResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GetKeyCharacteristicsResult',
      packedSize: 24,
      fields: [
        { name: 'key_characteristics', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.KeyCharacteristicsSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GenerateKeyResult
arc.mojom.mojom.GenerateKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GenerateKeyResult',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'key_characteristics', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.KeyCharacteristicsSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ImportKeyRequest
arc.mojom.mojom.ImportKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImportKeyRequest',
      packedSize: 32,
      fields: [
        { name: 'key_description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'key_format', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.KeyFormatSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ImportKeyResult
arc.mojom.mojom.ImportKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImportKeyResult',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'key_characteristics', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.KeyCharacteristicsSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ExportKeyRequest
arc.mojom.mojom.ExportKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ExportKeyRequest',
      packedSize: 40,
      fields: [
        { name: 'key_format', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.KeyFormatSpec, nullable: false, minVersion: 0 },
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'app_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ExportKeyResult
arc.mojom.mojom.ExportKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ExportKeyResult',
      packedSize: 24,
      fields: [
        { name: 'key_material', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AttestKeyRequest
arc.mojom.mojom.AttestKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AttestKeyRequest',
      packedSize: 24,
      fields: [
        { name: 'key_to_attest', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'attest_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AttestKeyResult
arc.mojom.mojom.AttestKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AttestKeyResult',
      packedSize: 24,
      fields: [
        { name: 'cert_chain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UpgradeKeyRequest
arc.mojom.mojom.UpgradeKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpgradeKeyRequest',
      packedSize: 24,
      fields: [
        { name: 'key_blob_to_upgrade', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'upgrade_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UpgradeKeyResult
arc.mojom.mojom.UpgradeKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpgradeKeyResult',
      packedSize: 24,
      fields: [
        { name: 'upgraded_key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BeginRequest
arc.mojom.mojom.BeginRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BeginRequest',
      packedSize: 32,
      fields: [
        { name: 'purpose', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.KeyPurposeSpec, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'in_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BeginResult
arc.mojom.mojom.BeginResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BeginResult',
      packedSize: 32,
      fields: [
        { name: 'out_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'op_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UpdateRequest
arc.mojom.mojom.UpdateRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpdateRequest',
      packedSize: 32,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'in_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UpdateResult
arc.mojom.mojom.UpdateResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpdateResult',
      packedSize: 32,
      fields: [
        { name: 'input_consumed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'out_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FinishRequest
arc.mojom.mojom.FinishRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FinishRequest',
      packedSize: 40,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'in_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: FinishResult
arc.mojom.mojom.FinishResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FinishResult',
      packedSize: 32,
      fields: [
        { name: 'out_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: KeymasterHost
arc.mojom.mojom.KeymasterHost = {};

arc.mojom.mojom.KeymasterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.KeymasterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.KeymasterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.KeymasterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.KeymasterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getServer() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.KeymasterHost_GetServer_ParamsSpec,
      arc.mojom.mojom.KeymasterHost_GetServer_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.KeymasterHost.getRemote = function() {
  let remote = new arc.mojom.mojom.KeymasterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetServer
arc.mojom.mojom.KeymasterHost_GetServer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterHost.GetServer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.KeymasterHost_GetServer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterHost.GetServer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'server_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.KeymasterHostPtr = arc.mojom.mojom.KeymasterHostRemote;
arc.mojom.mojom.KeymasterHostRequest = arc.mojom.mojom.KeymasterHostPendingReceiver;


// Interface: KeymasterInstance
arc.mojom.mojom.KeymasterInstance = {};

arc.mojom.mojom.KeymasterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.KeymasterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.KeymasterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.KeymasterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.KeymasterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.KeymasterInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.KeymasterInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.KeymasterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.KeymasterInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.KeymasterInstancePtr = arc.mojom.mojom.KeymasterInstanceRemote;
arc.mojom.mojom.KeymasterInstanceRequest = arc.mojom.mojom.KeymasterInstancePendingReceiver;


// Interface: KeymasterServer
arc.mojom.mojom.KeymasterServer = {};

arc.mojom.mojom.KeymasterServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.KeymasterServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.KeymasterServerPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.KeymasterServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.KeymasterServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSystemVersion(os_version, os_patchlevel) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.KeymasterServer_SetSystemVersion_ParamsSpec,
      null,
      [os_version, os_patchlevel]);
  }

  addRngEntropy(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.KeymasterServer_AddRngEntropy_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec,
      [data]);
  }

  getKeyCharacteristics(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec,
      [request]);
  }

  generateKey(key_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.KeymasterServer_GenerateKey_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec,
      [key_params]);
  }

  importKey(request) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.KeymasterServer_ImportKey_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_ImportKey_ResponseParamsSpec,
      [request]);
  }

  exportKey(request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.KeymasterServer_ExportKey_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_ExportKey_ResponseParamsSpec,
      [request]);
  }

  attestKey(request) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.KeymasterServer_AttestKey_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_AttestKey_ResponseParamsSpec,
      [request]);
  }

  upgradeKey(request) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.KeymasterServer_UpgradeKey_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec,
      [request]);
  }

  deleteKey(key_blob) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.KeymasterServer_DeleteKey_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec,
      [key_blob]);
  }

  deleteAllKeys() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec,
      []);
  }

  begin(request) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.KeymasterServer_Begin_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_Begin_ResponseParamsSpec,
      [request]);
  }

  update(request) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.mojom.KeymasterServer_Update_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_Update_ResponseParamsSpec,
      [request]);
  }

  finish(request) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.mojom.KeymasterServer_Finish_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_Finish_ResponseParamsSpec,
      [request]);
  }

  abort(op_handle) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.mojom.KeymasterServer_Abort_ParamsSpec,
      arc.mojom.mojom.KeymasterServer_Abort_ResponseParamsSpec,
      [op_handle]);
  }

};

arc.mojom.mojom.KeymasterServer.getRemote = function() {
  let remote = new arc.mojom.mojom.KeymasterServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterServer',
    'context');
  return remote.$;
};

// ParamsSpec for SetSystemVersion
arc.mojom.mojom.KeymasterServer_SetSystemVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.SetSystemVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'os_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'os_patchlevel', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddRngEntropy
arc.mojom.mojom.KeymasterServer_AddRngEntropy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.AddRngEntropy_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.AddRngEntropy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetKeyCharacteristics
arc.mojom.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.GetKeyCharacteristics_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GetKeyCharacteristicsRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.GetKeyCharacteristics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GetKeyCharacteristicsResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateKey
arc.mojom.mojom.KeymasterServer_GenerateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.GenerateKey_Params',
      packedSize: 16,
      fields: [
        { name: 'key_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.KeyParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.GenerateKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GenerateKeyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ImportKey
arc.mojom.mojom.KeymasterServer_ImportKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.ImportKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ImportKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_ImportKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.ImportKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ImportKeyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExportKey
arc.mojom.mojom.KeymasterServer_ExportKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.ExportKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ExportKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_ExportKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.ExportKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ExportKeyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AttestKey
arc.mojom.mojom.KeymasterServer_AttestKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.AttestKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AttestKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_AttestKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.AttestKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AttestKeyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpgradeKey
arc.mojom.mojom.KeymasterServer_UpgradeKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.UpgradeKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.UpgradeKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.UpgradeKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.UpgradeKeyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteKey
arc.mojom.mojom.KeymasterServer_DeleteKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.DeleteKey_Params',
      packedSize: 16,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.DeleteKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteAllKeys
arc.mojom.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.DeleteAllKeys_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.DeleteAllKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Begin
arc.mojom.mojom.KeymasterServer_Begin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Begin_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BeginRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_Begin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Begin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BeginResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Update
arc.mojom.mojom.KeymasterServer_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.UpdateRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_Update_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Update_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.UpdateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Finish
arc.mojom.mojom.KeymasterServer_Finish_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Finish_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FinishRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_Finish_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Finish_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FinishResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Abort
arc.mojom.mojom.KeymasterServer_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Abort_Params',
      packedSize: 16,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.KeymasterServer_Abort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeymasterServer.Abort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.KeymasterServerPtr = arc.mojom.mojom.KeymasterServerRemote;
arc.mojom.mojom.KeymasterServerRequest = arc.mojom.mojom.KeymasterServerPendingReceiver;

