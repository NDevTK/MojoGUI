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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'init_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reading', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.SensorProviderPtr = device.mojom.SensorProviderRemote;
device.mojom.SensorProviderRequest = device.mojom.SensorProviderPendingReceiver;

