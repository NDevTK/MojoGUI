// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/sensor_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.SensorCreationResultSpec = { $: mojo.internal.Enum() };
device.mojom.CreateVirtualSensorResultSpec = { $: mojo.internal.Enum() };
device.mojom.UpdateVirtualSensorResultSpec = { $: mojo.internal.Enum() };
device.mojom.GetVirtualSensorInformationErrorSpec = { $: mojo.internal.Enum() };
device.mojom.GetVirtualSensorInformationResultSpec = { $: {} };
device.mojom.SensorInitParamsSpec = { $: {} };
device.mojom.VirtualSensorMetadataSpec = { $: {} };
device.mojom.VirtualSensorInformationSpec = { $: {} };
device.mojom.SensorProvider = {};
device.mojom.SensorProvider.$interfaceName = 'device.mojom.SensorProvider';
device.mojom.SensorProvider_GetSensor_ParamsSpec = { $: {} };
device.mojom.SensorProvider_GetSensor_ResponseParamsSpec = { $: {} };
device.mojom.SensorProvider_CreateVirtualSensor_ParamsSpec = { $: {} };
device.mojom.SensorProvider_CreateVirtualSensor_ResponseParamsSpec = { $: {} };
device.mojom.SensorProvider_UpdateVirtualSensor_ParamsSpec = { $: {} };
device.mojom.SensorProvider_UpdateVirtualSensor_ResponseParamsSpec = { $: {} };
device.mojom.SensorProvider_RemoveVirtualSensor_ParamsSpec = { $: {} };
device.mojom.SensorProvider_RemoveVirtualSensor_ResponseParamsSpec = { $: {} };
device.mojom.SensorProvider_GetVirtualSensorInformation_ParamsSpec = { $: {} };
device.mojom.SensorProvider_GetVirtualSensorInformation_ResponseParamsSpec = { $: {} };

device.mojom.kReadBufferSizeForTests = 48;

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

// Union: GetVirtualSensorInformationResult
mojo.internal.Union(
    device.mojom.GetVirtualSensorInformationResultSpec, 'device.mojom.GetVirtualSensorInformationResult', {
      'info': {
        'ordinal': 0,
        'type': device.mojom.VirtualSensorInformationSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.GetVirtualSensorInformationErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: SensorInitParams
mojo.internal.Struct(
    device.mojom.SensorInitParamsSpec, 'device.mojom.SensorInitParams', [
      mojo.internal.StructField('sensor', 0, 0, mojo.internal.InterfaceProxy(device.mojom.SensorRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(device.mojom.SensorClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('memory', 16, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_offset', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('mode', 32, 0, device.mojom.ReportingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_configuration', 40, 0, device.mojom.SensorConfigurationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('maximum_frequency', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_frequency', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('kReadBufferSizeForTests', 64, 0, mojo.internal.Pointer, 48, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: VirtualSensorMetadata
mojo.internal.Struct(
    device.mojom.VirtualSensorMetadataSpec, 'device.mojom.VirtualSensorMetadata', [
      mojo.internal.StructField('maximum_frequency_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'maximum_frequency_$flag', originalFieldName: 'maximum_frequency' }),
      mojo.internal.StructField('minimum_frequency_$value', 8, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'minimum_frequency_$flag', originalFieldName: 'minimum_frequency' }),
      mojo.internal.StructField('reporting_mode', 16, 0, device.mojom.ReportingModeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('available', 24, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('maximum_frequency_$flag', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'maximum_frequency_$value', originalFieldName: 'maximum_frequency' }),
      mojo.internal.StructField('minimum_frequency_$flag', 24, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'minimum_frequency_$value', originalFieldName: 'minimum_frequency' }),
    ],
    [[0, 40]]);

// Struct: VirtualSensorInformation
mojo.internal.Struct(
    device.mojom.VirtualSensorInformationSpec, 'device.mojom.VirtualSensorInformation', [
      mojo.internal.StructField('sampling_frequency', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SensorProvider
mojo.internal.Struct(
    device.mojom.SensorProvider_GetSensor_ParamsSpec, 'device.mojom.SensorProvider_GetSensor_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.SensorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_GetSensor_ResponseParamsSpec, 'device.mojom.SensorProvider_GetSensor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SensorCreationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('init_params', 8, 0, device.mojom.SensorInitParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_CreateVirtualSensor_ParamsSpec, 'device.mojom.SensorProvider_CreateVirtualSensor_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.SensorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, device.mojom.VirtualSensorMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_CreateVirtualSensor_ResponseParamsSpec, 'device.mojom.SensorProvider_CreateVirtualSensor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.CreateVirtualSensorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_UpdateVirtualSensor_ParamsSpec, 'device.mojom.SensorProvider_UpdateVirtualSensor_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.SensorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reading', 8, 0, device.mojom.SensorReadingRawSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_UpdateVirtualSensor_ResponseParamsSpec, 'device.mojom.SensorProvider_UpdateVirtualSensor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.UpdateVirtualSensorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_RemoveVirtualSensor_ParamsSpec, 'device.mojom.SensorProvider_RemoveVirtualSensor_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.SensorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_RemoveVirtualSensor_ResponseParamsSpec, 'device.mojom.SensorProvider_RemoveVirtualSensor_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_GetVirtualSensorInformation_ParamsSpec, 'device.mojom.SensorProvider_GetVirtualSensorInformation_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.SensorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SensorProvider_GetVirtualSensorInformation_ResponseParamsSpec, 'device.mojom.SensorProvider_GetVirtualSensorInformation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GetVirtualSensorInformationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [type],
      false);
  }

  createVirtualSensor(type, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SensorProvider_CreateVirtualSensor_ParamsSpec,
      device.mojom.SensorProvider_CreateVirtualSensor_ResponseParamsSpec,
      [type, metadata],
      false);
  }

  updateVirtualSensor(type, reading) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SensorProvider_UpdateVirtualSensor_ParamsSpec,
      device.mojom.SensorProvider_UpdateVirtualSensor_ResponseParamsSpec,
      [type, reading],
      false);
  }

  removeVirtualSensor(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SensorProvider_RemoveVirtualSensor_ParamsSpec,
      device.mojom.SensorProvider_RemoveVirtualSensor_ResponseParamsSpec,
      [type],
      false);
  }

  getVirtualSensorInformation(type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.SensorProvider_GetVirtualSensorInformation_ParamsSpec,
      device.mojom.SensorProvider_GetVirtualSensorInformation_ResponseParamsSpec,
      [type],
      false);
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

device.mojom.SensorProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.SensorProvider_GetSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSensor(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SensorProvider_GetSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = device.mojom.SensorProvider_CreateVirtualSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVirtualSensor(params.type, params.metadata);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SensorProvider_CreateVirtualSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = device.mojom.SensorProvider_UpdateVirtualSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateVirtualSensor(params.type, params.reading);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SensorProvider_UpdateVirtualSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = device.mojom.SensorProvider_RemoveVirtualSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeVirtualSensor(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SensorProvider_RemoveVirtualSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = device.mojom.SensorProvider_GetVirtualSensorInformation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVirtualSensorInformation(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SensorProvider_GetVirtualSensorInformation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

device.mojom.SensorProviderReceiver = device.mojom.SensorProviderReceiver;

device.mojom.SensorProviderPtr = device.mojom.SensorProviderRemote;
device.mojom.SensorProviderRequest = device.mojom.SensorProviderPendingReceiver;

