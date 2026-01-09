// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/sensor_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: SensorCreationResult
device.mojom.SensorCreationResult = {
  SUCCESS: 0,
  ERROR_NOT_AVAILABLE: 1,
  ERROR_NOT_ALLOWED: 2,
};

// Enum: CreateVirtualSensorResult
device.mojom.CreateVirtualSensorResult = {
  kSuccess: 0,
  kSensorTypeAlreadyOverridden: 1,
};

// Enum: UpdateVirtualSensorResult
device.mojom.UpdateVirtualSensorResult = {
  kSuccess: 0,
  kSensorTypeNotOverridden: 1,
};

// Enum: GetVirtualSensorInformationError
device.mojom.GetVirtualSensorInformationError = {
  kSensorTypeNotOverridden: 0,
};

// Struct: SensorInitParams
device.mojom.SensorInitParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorInitParams',
      packedSize: 72,
      fields: [
        { name: 'sensor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'client_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'memory', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false },
        { name: 'buffer_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'mode', packedOffset: 32, packedBitOffset: 0, type: device.mojom.ReportingModeSpec, nullable: false },
        { name: 'default_configuration', packedOffset: 40, packedBitOffset: 0, type: device.mojom.SensorConfigurationSpec, nullable: false },
        { name: 'maximum_frequency', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'minimum_frequency', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'kReadBufferSizeForTests', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VirtualSensorMetadata
device.mojom.VirtualSensorMetadataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VirtualSensorMetadata',
      packedSize: 40,
      fields: [
        { name: 'available', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'maximum_frequency', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
        { name: 'minimum_frequency', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
        { name: 'reporting_mode', packedOffset: 32, packedBitOffset: 0, type: device.mojom.ReportingModeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VirtualSensorInformation
device.mojom.VirtualSensorInformationSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VirtualSensorInformation',
      packedSize: 16,
      fields: [
        { name: 'sampling_frequency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SensorProvider
device.mojom.SensorProvider = {};

device.mojom.SensorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SensorProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SensorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SensorProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.SensorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SensorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSensor(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SensorProvider_GetSensor_ParamsSpec,
      device.mojom.SensorProvider_GetSensor_ResponseParamsSpec,
      [type]);
  }

  createVirtualSensor(type, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SensorProvider_CreateVirtualSensor_ParamsSpec,
      device.mojom.SensorProvider_CreateVirtualSensor_ResponseParamsSpec,
      [type, metadata]);
  }

  updateVirtualSensor(type, reading) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SensorProvider_UpdateVirtualSensor_ParamsSpec,
      device.mojom.SensorProvider_UpdateVirtualSensor_ResponseParamsSpec,
      [type, reading]);
  }

  removeVirtualSensor(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SensorProvider_RemoveVirtualSensor_ParamsSpec,
      null,
      [type]);
  }

  getVirtualSensorInformation(type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.SensorProvider_GetVirtualSensorInformation_ParamsSpec,
      device.mojom.SensorProvider_GetVirtualSensorInformation_ResponseParamsSpec,
      [type]);
  }

};

device.mojom.SensorProvider.getRemote = function() {
  let remote = new device.mojom.SensorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SensorProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetSensor
device.mojom.SensorProvider_GetSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.GetSensor_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SensorTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SensorProvider_GetSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.GetSensor_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SensorCreationResultSpec, nullable: false },
        { name: 'init_params', packedOffset: 16, packedBitOffset: 0, type: device.mojom.SensorInitParamsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateVirtualSensor
device.mojom.SensorProvider_CreateVirtualSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.CreateVirtualSensor_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SensorTypeSpec, nullable: false },
        { name: 'metadata', packedOffset: 16, packedBitOffset: 0, type: device.mojom.VirtualSensorMetadataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SensorProvider_CreateVirtualSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.CreateVirtualSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: device.mojom.CreateVirtualSensorResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateVirtualSensor
device.mojom.SensorProvider_UpdateVirtualSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.UpdateVirtualSensor_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SensorTypeSpec, nullable: false },
        { name: 'reading', packedOffset: 16, packedBitOffset: 0, type: device.mojom.SensorReadingRawSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SensorProvider_UpdateVirtualSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.UpdateVirtualSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: device.mojom.UpdateVirtualSensorResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveVirtualSensor
device.mojom.SensorProvider_RemoveVirtualSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.RemoveVirtualSensor_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SensorTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVirtualSensorInformation
device.mojom.SensorProvider_GetVirtualSensorInformation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.GetVirtualSensorInformation_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SensorTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SensorProvider_GetVirtualSensorInformation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorProvider.GetVirtualSensorInformation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: device.mojom.GetVirtualSensorInformationResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.SensorProviderPtr = device.mojom.SensorProviderRemote;
device.mojom.SensorProviderRequest = device.mojom.SensorProviderPendingReceiver;

