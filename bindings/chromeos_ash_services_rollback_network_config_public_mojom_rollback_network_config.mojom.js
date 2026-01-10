// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/rollback_network_config/public/mojom/rollback_network_config.mojom
// Module: ash.rollback_network_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.rollback_network_config = ash.rollback_network_config || {};
ash.rollback_network_config.mojom = ash.rollback_network_config.mojom || {};

ash.rollback_network_config.mojom.RollbackNetworkConfig = {};
ash.rollback_network_config.mojom.RollbackNetworkConfig.$interfaceName = 'ash.rollback_network_config.mojom.RollbackNetworkConfig';
ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec = { $: {} };
ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ResponseParamsSpec = { $: {} };
ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec = { $: {} };
ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ResponseParamsSpec = { $: {} };

// Interface: RollbackNetworkConfig
mojo.internal.Struct(
    ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec, 'ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_Params', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ResponseParamsSpec, 'ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec, 'ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ResponseParamsSpec, 'ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.rollback_network_config.mojom.RollbackNetworkConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.rollback_network_config.mojom.RollbackNetworkConfigRemote = class {
  static get $interfaceName() {
    return 'ash.rollback_network_config.mojom.RollbackNetworkConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.rollback_network_config.mojom.RollbackNetworkConfigPendingReceiver,
      handle);
    this.$ = new ash.rollback_network_config.mojom.RollbackNetworkConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.rollback_network_config.mojom.RollbackNetworkConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  rollbackConfigImport(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec,
      ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ResponseParamsSpec,
      [config],
      false);
  }

  rollbackConfigExport() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec,
      ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ResponseParamsSpec,
      [],
      false);
  }

};

ash.rollback_network_config.mojom.RollbackNetworkConfig.getRemote = function() {
  let remote = new ash.rollback_network_config.mojom.RollbackNetworkConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.rollback_network_config.mojom.RollbackNetworkConfig',
    'context');
  return remote.$;
};

ash.rollback_network_config.mojom.RollbackNetworkConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RollbackConfigImport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RollbackConfigImport (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RollbackConfigExport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RollbackConfigExport (1)');
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
          const params = decoder.decodeStruct(ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rollbackConfigImport');
          const result = this.impl.rollbackConfigImport(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rollbackConfigExport');
          const result = this.impl.rollbackConfigExport();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ResponseParamsSpec);
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

ash.rollback_network_config.mojom.RollbackNetworkConfigReceiver = ash.rollback_network_config.mojom.RollbackNetworkConfigReceiver;

ash.rollback_network_config.mojom.RollbackNetworkConfigPtr = ash.rollback_network_config.mojom.RollbackNetworkConfigRemote;
ash.rollback_network_config.mojom.RollbackNetworkConfigRequest = ash.rollback_network_config.mojom.RollbackNetworkConfigPendingReceiver;

