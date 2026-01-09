// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymaster.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


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
  RAW: 2,
};

// Struct: KeyParameter
arc.mojom.KeyParameterSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeyParameter',
      packedSize: 24,
      fields: [
        { name: 'param', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeyCharacteristics
arc.mojom.KeyCharacteristicsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeyCharacteristics',
      packedSize: 24,
      fields: [
        { name: 'software_enforced', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'tee_enforced', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetKeyCharacteristicsRequest
arc.mojom.GetKeyCharacteristicsRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GetKeyCharacteristicsRequest',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'app_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetKeyCharacteristicsResult
arc.mojom.GetKeyCharacteristicsResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GetKeyCharacteristicsResult',
      packedSize: 24,
      fields: [
        { name: 'key_characteristics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GenerateKeyResult
arc.mojom.GenerateKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GenerateKeyResult',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'key_characteristics', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ImportKeyRequest
arc.mojom.ImportKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImportKeyRequest',
      packedSize: 32,
      fields: [
        { name: 'key_description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'key_format', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ImportKeyResult
arc.mojom.ImportKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImportKeyResult',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'key_characteristics', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExportKeyRequest
arc.mojom.ExportKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ExportKeyRequest',
      packedSize: 40,
      fields: [
        { name: 'key_format', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'client_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'app_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExportKeyResult
arc.mojom.ExportKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ExportKeyResult',
      packedSize: 24,
      fields: [
        { name: 'key_material', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AttestKeyRequest
arc.mojom.AttestKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AttestKeyRequest',
      packedSize: 24,
      fields: [
        { name: 'key_to_attest', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attest_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AttestKeyResult
arc.mojom.AttestKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AttestKeyResult',
      packedSize: 24,
      fields: [
        { name: 'cert_chain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UpgradeKeyRequest
arc.mojom.UpgradeKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpgradeKeyRequest',
      packedSize: 24,
      fields: [
        { name: 'key_blob_to_upgrade', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'upgrade_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UpgradeKeyResult
arc.mojom.UpgradeKeyResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpgradeKeyResult',
      packedSize: 24,
      fields: [
        { name: 'upgraded_key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BeginRequest
arc.mojom.BeginRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BeginRequest',
      packedSize: 32,
      fields: [
        { name: 'purpose', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'in_params', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BeginResult
arc.mojom.BeginResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BeginResult',
      packedSize: 32,
      fields: [
        { name: 'out_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'op_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UpdateRequest
arc.mojom.UpdateRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpdateRequest',
      packedSize: 32,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'in_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'input', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UpdateResult
arc.mojom.UpdateResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UpdateResult',
      packedSize: 32,
      fields: [
        { name: 'out_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'input_consumed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'error', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FinishRequest
arc.mojom.FinishRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FinishRequest',
      packedSize: 40,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'in_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'input', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'signature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FinishResult
arc.mojom.FinishResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FinishResult',
      packedSize: 32,
      fields: [
        { name: 'out_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: KeymasterHost
arc.mojom.KeymasterHost = {};

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
};

arc.mojom.KeymasterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
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

// Legacy compatibility
arc.mojom.KeymasterHostPtr = arc.mojom.KeymasterHostRemote;
arc.mojom.KeymasterHostRequest = arc.mojom.KeymasterHostPendingReceiver;


// Interface: KeymasterInstance
arc.mojom.KeymasterInstance = {};

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
};

arc.mojom.KeymasterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
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

// Legacy compatibility
arc.mojom.KeymasterInstancePtr = arc.mojom.KeymasterInstanceRemote;
arc.mojom.KeymasterInstanceRequest = arc.mojom.KeymasterInstancePendingReceiver;


// Interface: KeymasterServer
arc.mojom.KeymasterServer = {};

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
};

arc.mojom.KeymasterServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
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

// Legacy compatibility
arc.mojom.KeymasterServerPtr = arc.mojom.KeymasterServerRemote;
arc.mojom.KeymasterServerRequest = arc.mojom.KeymasterServerPendingReceiver;

