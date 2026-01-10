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
device_signals.mojom.PresenceValueSpec = { $: mojo.internal.Enum() };

// Enum: AntiVirusProductState
device_signals.mojom.AntiVirusProductState = {
  kOn: 0,
  kOff: 1,
  kSnoozed: 2,
  kExpired: 3,
};
device_signals.mojom.AntiVirusProductStateSpec = { $: mojo.internal.Enum() };

// Struct: ExecutableMetadata
device_signals.mojom.ExecutableMetadataSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.ExecutableMetadata',
      packedSize: 48,
      fields: [
        { name: 'is_running', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'public_keys_hashes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ByteStringSpec, false), nullable: true, minVersion: 0 },
        { name: 'product_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_os_verified', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'subject_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: FileSystemItem
device_signals.mojom.FileSystemItemSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.FileSystemItem',
      packedSize: 40,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'presence', packedOffset: 24, packedBitOffset: 0, type: device_signals.mojom.PresenceValueSpec, nullable: false, minVersion: 0 },
        { name: 'sha256_hash', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: true, minVersion: 0 },
        { name: 'executable_metadata', packedOffset: 16, packedBitOffset: 0, type: device_signals.mojom.ExecutableMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: FileSystemItemRequest
device_signals.mojom.FileSystemItemRequestSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.FileSystemItemRequest',
      packedSize: 24,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'compute_sha256', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'compute_executable_metadata', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AntiVirusSignal
device_signals.mojom.AntiVirusSignalSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.AntiVirusSignal',
      packedSize: 24,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: device_signals.mojom.AntiVirusProductStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HotfixSignal
device_signals.mojom.HotfixSignalSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.HotfixSignal',
      packedSize: 16,
      fields: [
        { name: 'hotfix_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: SystemSignalsService
device_signals.mojom.SystemSignalsService = {};

device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService_GetFileSystemSignals_Params',
      packedSize: 16,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device_signals.mojom.FileSystemItemRequestSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService_GetHotfixSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec,
      [requests]);
  }

  getAntiVirusSignals() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec,
      []);
  }

  getHotfixSignals() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec,
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
};

// ParamsSpec for GetFileSystemSignals
device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetFileSystemSignals_Params',
      packedSize: 16,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device_signals.mojom.FileSystemItemRequestSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetFileSystemSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device_signals.mojom.FileSystemItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAntiVirusSignals
device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetAntiVirusSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetAntiVirusSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'av_signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device_signals.mojom.AntiVirusSignalSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHotfixSignals
device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetHotfixSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_signals.mojom.SystemSignalsService.GetHotfixSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hotfix_signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device_signals.mojom.HotfixSignalSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device_signals.mojom.SystemSignalsServicePtr = device_signals.mojom.SystemSignalsServiceRemote;
device_signals.mojom.SystemSignalsServiceRequest = device_signals.mojom.SystemSignalsServicePendingReceiver;

