// Auto-generated MojoJS binding
// Source: chromium_src/components/device_signals/core/common/mojom/system_signals.mojom
// Module: device_signals.mojom

'use strict';

// Module namespace
var device_signals = device_signals || {};
device_signals.mojom = device_signals.mojom || {};


// Enum: PresenceValue
device_signals.mojom.PresenceValue = {
  kUnspecified: 0,
  kAccessDenied: 1,
  kNotFound: 2,
  kFound: 3,
};

// Enum: AntiVirusProductState
device_signals.mojom.AntiVirusProductState = {
  kOn: 0,
  kOff: 1,
  kSnoozed: 2,
  kExpired: 3,
};

// Interface: SystemSignalsService
device_signals.mojom.SystemSignalsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device_signals.mojom.SystemSignalsServiceRemote = class {
  static get $interfaceName() {
    return 'device_signals.mojom.SystemSignalsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device_signals.mojom.SystemSignalsServicePendingReceiver,
      handle);
    this.$ = new device_signals.mojom.SystemSignalsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device_signals.mojom.SystemSignalsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFileSystemSignals(requests) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec.$,
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec.$,
      [requests]);
  }

  getAntiVirusSignals() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec.$,
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec.$,
      []);
  }

  getHotfixSignals() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec.$,
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec.$,
      []);
  }

};

device_signals.mojom.SystemSignalsService.getRemote = function() {
  let remote = new device_signals.mojom.SystemSignalsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device_signals.mojom.SystemSignalsService',
    'context');
  return remote.$;
}};

// ParamsSpec for GetFileSystemSignals
device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetFileSystemSignals_Params',
      packedSize: 16,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetFileSystemSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetAntiVirusSignals
device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetAntiVirusSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetAntiVirusSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'av_signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetHotfixSignals
device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetHotfixSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetHotfixSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hotfix_signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
device_signals.mojom.SystemSignalsServicePtr = device_signals.mojom.SystemSignalsServiceRemote;
device_signals.mojom.SystemSignalsServiceRequest = device_signals.mojom.SystemSignalsServicePendingReceiver;

