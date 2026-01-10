// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/device.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};

bluetooth.mojom.PropertySpec = { $: mojo.internal.Enum() };
bluetooth.mojom.GattResultSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.RSSIWrapperSpec = { $: {} };
bluetooth.mojom.DeviceInfoSpec = { $: {} };
bluetooth.mojom.ServiceInfoSpec = { $: {} };
bluetooth.mojom.CharacteristicInfoSpec = { $: {} };
bluetooth.mojom.DescriptorInfoSpec = { $: {} };
bluetooth.mojom.Device = {};
bluetooth.mojom.Device.$interfaceName = 'bluetooth.mojom.Device';
bluetooth.mojom.Device_Disconnect_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetInfo_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetInfo_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_GetServices_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetServices_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_GetCharacteristics_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_GetDescriptors_ParamsSpec = { $: {} };
bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec = { $: {} };

// Enum: Property
bluetooth.mojom.Property = {
  NONE: 0,
  BROADCAST: 1,
  READ: 2,
  WRITE_WITHOUT_RESPONSE: 4,
  WRITE: 8,
  NOTIFY: 16,
  INDICATE: 32,
  AUTHENTICATED_SIGNED_WRITES: 64,
  EXTENDED_PROPERTIES: 128,
  RELIABLE_WRITE: 256,
  WRITABLE_AUXILIARIES: 512,
  READ_ENCRYPTED: 1024,
  WRITE_ENCRYPTED: 2048,
  READ_ENCRYPTED_AUTHENTICATED: 4096,
  WRITE_ENCRYPTED_AUTHENTICATED: 8192,
};

// Enum: GattResult
bluetooth.mojom.GattResult = {
  SUCCESS: 0,
  UNKNOWN: 1,
  FAILED: 2,
  IN_PROGRESS: 3,
  INVALID_LENGTH: 4,
  NOT_PERMITTED: 5,
  NOT_AUTHORIZED: 6,
  NOT_PAIRED: 7,
  NOT_SUPPORTED: 8,
  SERVICE_NOT_FOUND: 9,
  CHARACTERISTIC_NOT_FOUND: 10,
  DESCRIPTOR_NOT_FOUND: 11,
};

// Struct: RSSIWrapper
mojo.internal.Struct(
    bluetooth.mojom.RSSIWrapperSpec, 'bluetooth.mojom.RSSIWrapper', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceInfo
mojo.internal.Struct(
    bluetooth.mojom.DeviceInfoSpec, 'bluetooth.mojom.DeviceInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name_for_display', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rssi', 24, 0, bluetooth.mojom.RSSIWrapperSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('service_uuids', 32, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_data_map', 40, 0, mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('service_data_map', 48, 0, mojo.internal.Map(bluetooth.mojom.UUIDSpec.$, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('is_gatt_connected', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ServiceInfo
mojo.internal.Struct(
    bluetooth.mojom.ServiceInfoSpec, 'bluetooth.mojom.ServiceInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_primary', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CharacteristicInfo
mojo.internal.Struct(
    bluetooth.mojom.CharacteristicInfoSpec, 'bluetooth.mojom.CharacteristicInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_known_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('properties', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('permissions', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DescriptorInfo
mojo.internal.Struct(
    bluetooth.mojom.DescriptorInfoSpec, 'bluetooth.mojom.DescriptorInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_known_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Device
mojo.internal.Struct(
    bluetooth.mojom.Device_Disconnect_ParamsSpec, 'bluetooth.mojom.Device_Disconnect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetInfo_ParamsSpec, 'bluetooth.mojom.Device_GetInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetInfo_ResponseParamsSpec, 'bluetooth.mojom.Device_GetInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, bluetooth.mojom.DeviceInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetServices_ParamsSpec, 'bluetooth.mojom.Device_GetServices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetServices_ResponseParamsSpec, 'bluetooth.mojom.Device_GetServices_ResponseParams', [
      mojo.internal.StructField('services', 0, 0, mojo.internal.Array(bluetooth.mojom.ServiceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetCharacteristics_ParamsSpec, 'bluetooth.mojom.Device_GetCharacteristics_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec, 'bluetooth.mojom.Device_GetCharacteristics_ResponseParams', [
      mojo.internal.StructField('characteristics', 0, 0, mojo.internal.Array(bluetooth.mojom.CharacteristicInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec, 'bluetooth.mojom.Device_ReadValueForCharacteristic_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec, 'bluetooth.mojom.Device_WriteValueForCharacteristic_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetDescriptors_ParamsSpec, 'bluetooth.mojom.Device_GetDescriptors_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec, 'bluetooth.mojom.Device_GetDescriptors_ResponseParams', [
      mojo.internal.StructField('descriptors', 0, 0, mojo.internal.Array(bluetooth.mojom.DescriptorInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec, 'bluetooth.mojom.Device_ReadValueForDescriptor_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec, 'bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec, 'bluetooth.mojom.Device_WriteValueForDescriptor_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec, 'bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.GattResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.DevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.DeviceRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.Device';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.DevicePendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.DeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.DeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disconnect() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bluetooth.mojom.Device_Disconnect_ParamsSpec,
      null,
      [],
      false);
  }

  getInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bluetooth.mojom.Device_GetInfo_ParamsSpec,
      bluetooth.mojom.Device_GetInfo_ResponseParamsSpec,
      [],
      false);
  }

  getServices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bluetooth.mojom.Device_GetServices_ParamsSpec,
      bluetooth.mojom.Device_GetServices_ResponseParamsSpec,
      [],
      false);
  }

  getCharacteristics(service_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bluetooth.mojom.Device_GetCharacteristics_ParamsSpec,
      bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec,
      [service_id],
      false);
  }

  readValueForCharacteristic(service_id, characteristic_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec,
      bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec,
      [service_id, characteristic_id],
      false);
  }

  writeValueForCharacteristic(service_id, characteristic_id, value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec,
      bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec,
      [service_id, characteristic_id, value],
      false);
  }

  getDescriptors(service_id, characteristic_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      bluetooth.mojom.Device_GetDescriptors_ParamsSpec,
      bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec,
      [service_id, characteristic_id],
      false);
  }

  readValueForDescriptor(service_id, characteristic_id, descriptor_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec,
      bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec,
      [service_id, characteristic_id, descriptor_id],
      false);
  }

  writeValueForDescriptor(service_id, characteristic_id, descriptor_id, value) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec,
      bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec,
      [service_id, characteristic_id, descriptor_id, value],
      false);
  }

};

bluetooth.mojom.Device.getRemote = function() {
  let remote = new bluetooth.mojom.DeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.Device',
    'context');
  return remote.$;
};

bluetooth.mojom.DeviceReceiver = class {
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
        
        // Try Method 0: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_Disconnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_GetInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_GetServices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetServices (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetCharacteristics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_GetCharacteristics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCharacteristics (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReadValueForCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadValueForCharacteristic (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: WriteValueForCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteValueForCharacteristic (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetDescriptors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_GetDescriptors_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDescriptors (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReadValueForDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadValueForDescriptor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: WriteValueForDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteValueForDescriptor (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStruct(bluetooth.mojom.Device_Disconnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_GetInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInfo');
          const result = this.impl.getInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_GetInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_GetServices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getServices');
          const result = this.impl.getServices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_GetServices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_GetCharacteristics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCharacteristics');
          const result = this.impl.getCharacteristics(params.service_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_GetCharacteristics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_ReadValueForCharacteristic_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readValueForCharacteristic');
          const result = this.impl.readValueForCharacteristic(params.service_id, params.characteristic_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_ReadValueForCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_WriteValueForCharacteristic_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeValueForCharacteristic');
          const result = this.impl.writeValueForCharacteristic(params.service_id, params.characteristic_id, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_WriteValueForCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_GetDescriptors_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDescriptors');
          const result = this.impl.getDescriptors(params.service_id, params.characteristic_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_GetDescriptors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_ReadValueForDescriptor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readValueForDescriptor');
          const result = this.impl.readValueForDescriptor(params.service_id, params.characteristic_id, params.descriptor_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_ReadValueForDescriptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(bluetooth.mojom.Device_WriteValueForDescriptor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeValueForDescriptor');
          const result = this.impl.writeValueForDescriptor(params.service_id, params.characteristic_id, params.descriptor_id, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.Device_WriteValueForDescriptor_ResponseParamsSpec);
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

bluetooth.mojom.DeviceReceiver = bluetooth.mojom.DeviceReceiver;

bluetooth.mojom.DevicePtr = bluetooth.mojom.DeviceRemote;
bluetooth.mojom.DeviceRequest = bluetooth.mojom.DevicePendingReceiver;

