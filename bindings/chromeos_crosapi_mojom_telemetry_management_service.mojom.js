// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_management_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: TelemetryManagementService
crosapi.mojom.TelemetryManagementService = {};

crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryManagementService_SetAudioGain_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'gain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryManagementService_SetAudioVolume_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'volume', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_muted', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.TelemetryManagementServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryManagementServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryManagementService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryManagementServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryManagementServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryManagementServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAudioGain(node_id, gain) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec,
      crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParamsSpec,
      [node_id, gain]);
  }

  setAudioVolume(node_id, volume, is_muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec,
      crosapi.mojom.TelemetryManagementService_SetAudioVolume_ResponseParamsSpec,
      [node_id, volume, is_muted]);
  }

};

crosapi.mojom.TelemetryManagementService.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryManagementServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryManagementService',
    'context');
  return remote.$;
};

// ParamsSpec for SetAudioGain
crosapi.mojom.TelemetryManagementService_SetAudioGain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryManagementService.SetAudioGain_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'gain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.TelemetryManagementService_SetAudioGain_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryManagementService.SetAudioGain_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAudioVolume
crosapi.mojom.TelemetryManagementService_SetAudioVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryManagementService.SetAudioVolume_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'volume', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_muted', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.TelemetryManagementService_SetAudioVolume_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryManagementService.SetAudioVolume_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.TelemetryManagementServicePtr = crosapi.mojom.TelemetryManagementServiceRemote;
crosapi.mojom.TelemetryManagementServiceRequest = crosapi.mojom.TelemetryManagementServicePendingReceiver;

