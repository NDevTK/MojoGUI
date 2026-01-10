// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymaster.mojom
// Module: arc.mojom

'use strict';

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
};

arc.mojom.KeymasterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getServer() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetServer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterHost_GetServer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetServer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterHost_GetServer_ParamsSpec.$, message.header.headerSize);
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
};

arc.mojom.KeymasterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterInstance_Init_ParamsSpec.$, message.header.headerSize);
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
};

arc.mojom.KeymasterServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSystemVersion(os_version, os_patchlevel) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec,
      null,
      [os_version, os_patchlevel],
      false);
  }

  addRngEntropy(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec,
      arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec,
      [data],
      false);
  }

  getKeyCharacteristics(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec,
      arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec,
      [request],
      false);
  }

  generateKey(key_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.KeymasterServer_GenerateKey_ParamsSpec,
      arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec,
      [key_params],
      false);
  }

  importKey(request) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.KeymasterServer_ImportKey_ParamsSpec,
      arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec,
      [request],
      false);
  }

  exportKey(request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.KeymasterServer_ExportKey_ParamsSpec,
      arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec,
      [request],
      false);
  }

  attestKey(request) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.KeymasterServer_AttestKey_ParamsSpec,
      arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec,
      [request],
      false);
  }

  upgradeKey(request) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec,
      arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec,
      [request],
      false);
  }

  deleteKey(key_blob) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.KeymasterServer_DeleteKey_ParamsSpec,
      arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec,
      [key_blob],
      false);
  }

  deleteAllKeys() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec,
      arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec,
      [],
      false);
  }

  begin(request) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.KeymasterServer_Begin_ParamsSpec,
      arc.mojom.KeymasterServer_Begin_ResponseParamsSpec,
      [request],
      false);
  }

  update(request) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.KeymasterServer_Update_ParamsSpec,
      arc.mojom.KeymasterServer_Update_ResponseParamsSpec,
      [request],
      false);
  }

  finish(request) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.KeymasterServer_Finish_ParamsSpec,
      arc.mojom.KeymasterServer_Finish_ResponseParamsSpec,
      [request],
      false);
  }

  abort(op_handle) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetSystemVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSystemVersion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AddRngEntropy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRngEntropy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: GetKeyCharacteristics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyCharacteristics (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GenerateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_GenerateKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateKey (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: ImportKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_ImportKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportKey (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: ExportKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_ExportKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExportKey (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: AttestKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_AttestKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttestKey (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: UpgradeKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpgradeKey (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: DeleteKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_DeleteKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteKey (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: DeleteAllKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllKeys (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: Begin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_Begin_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Begin (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: Finish
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_Finish_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Finish (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.KeymasterServer_Abort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSystemVersion');
          const result = this.impl.setSystemVersion(params.os_version, params.os_patchlevel);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_GenerateKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_ImportKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_ExportKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_AttestKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_DeleteKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_Begin_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_Update_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_Finish_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.KeymasterServer_Abort_ParamsSpec.$, message.header.headerSize);
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

