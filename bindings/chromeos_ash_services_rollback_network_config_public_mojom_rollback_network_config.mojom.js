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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec.$.decode(message.payload);
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
          const params = ash.rollback_network_config.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

ash.rollback_network_config.mojom.RollbackNetworkConfigReceiver = ash.rollback_network_config.mojom.RollbackNetworkConfigReceiver;

ash.rollback_network_config.mojom.RollbackNetworkConfigPtr = ash.rollback_network_config.mojom.RollbackNetworkConfigRemote;
ash.rollback_network_config.mojom.RollbackNetworkConfigRequest = ash.rollback_network_config.mojom.RollbackNetworkConfigPendingReceiver;

