// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/rollback_network_config/public/mojom/rollback_network_config.mojom
// Module: ash.rollback_network_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.rollback_network_config = ash.rollback_network_config || {};
ash.rollback_network_config.rollback_network_config.mojom = ash.rollback_network_config.rollback_network_config.mojom || {};


// Interface: RollbackNetworkConfig
ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig = {};

ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigRemote = class {
  static get $interfaceName() {
    return 'ash.rollback_network_config.mojom.RollbackNetworkConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigPendingReceiver,
      handle);
    this.$ = new ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  rollbackConfigImport(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec,
      ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigImport_ResponseParamsSpec,
      [config]);
  }

  rollbackConfigExport() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec,
      ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigExport_ResponseParamsSpec,
      []);
  }

};

ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig.getRemote = function() {
  let remote = new ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.rollback_network_config.mojom.RollbackNetworkConfig',
    'context');
  return remote.$;
};

// ParamsSpec for RollbackConfigImport
ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigImport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.rollback_network_config.mojom.RollbackNetworkConfig.RollbackConfigImport_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigImport_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.rollback_network_config.mojom.RollbackNetworkConfig.RollbackConfigImport_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RollbackConfigExport
ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigExport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.rollback_network_config.mojom.RollbackNetworkConfig.RollbackConfigExport_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfig_RollbackConfigExport_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.rollback_network_config.mojom.RollbackNetworkConfig.RollbackConfigExport_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigPtr = ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigRemote;
ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigRequest = ash.rollback_network_config.rollback_network_config.mojom.mojom.RollbackNetworkConfigPendingReceiver;

