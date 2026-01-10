// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/device_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.DeviceService = {};
device.mojom.DeviceService.$interfaceName = 'device.mojom.DeviceService';
device.mojom.DeviceService_BindFingerprint_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindGeolocationContext_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindGeolocationControl_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindPressureManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindNFCProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindVibrationManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindHidManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindMtpManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindPowerMonitor_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindSensorProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindSerialPortManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec = { $: {} };

// Interface: DeviceService
mojo.internal.Struct(
    device.mojom.DeviceService_BindFingerprint_ParamsSpec, 'device.mojom.DeviceService_BindFingerprint_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.FingerprintRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindGeolocationContext_ParamsSpec, 'device.mojom.DeviceService_BindGeolocationContext_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindGeolocationControl_ParamsSpec, 'device.mojom.DeviceService_BindGeolocationControl_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationControlRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec, 'device.mojom.DeviceService_BindGeolocationInternals_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationInternalsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec, 'device.mojom.DeviceService_BindInputDeviceManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.InputDeviceManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec, 'device.mojom.DeviceService_BindBatteryMonitor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.BatteryMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindPressureManager_ParamsSpec, 'device.mojom.DeviceService_BindPressureManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.PressureManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindNFCProvider_ParamsSpec, 'device.mojom.DeviceService_BindNFCProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.NFCProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindVibrationManager_ParamsSpec, 'device.mojom.DeviceService_BindVibrationManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.VibrationManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 8, 0, mojo.internal.InterfaceProxy(device.mojom.VibrationManagerListenerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindHidManager_ParamsSpec, 'device.mojom.DeviceService_BindHidManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.HidManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindMtpManager_ParamsSpec, 'device.mojom.DeviceService_BindMtpManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.MtpManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindPowerMonitor_ParamsSpec, 'device.mojom.DeviceService_BindPowerMonitor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.PowerMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec, 'device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.PublicIpAddressGeolocationProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec, 'device.mojom.DeviceService_BindScreenOrientationListener_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.ScreenOrientationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindSensorProvider_ParamsSpec, 'device.mojom.DeviceService_BindSensorProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.SensorProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindSerialPortManager_ParamsSpec, 'device.mojom.DeviceService_BindSerialPortManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.SerialPortManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec, 'device.mojom.DeviceService_BindTimeZoneMonitor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.TimeZoneMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec, 'device.mojom.DeviceService_BindWakeLockProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec, 'device.mojom.DeviceService_BindUsbDeviceManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec, 'device.mojom.DeviceService_BindUsbDeviceManagerTest_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceManagerTestRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.DeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.DeviceServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.DeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.DeviceServicePendingReceiver,
      handle);
    this.$ = new device.mojom.DeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindFingerprint(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.DeviceService_BindFingerprint_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationContext(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.DeviceService_BindGeolocationContext_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationControl(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.DeviceService_BindGeolocationControl_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationInternals(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindInputDeviceManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindBatteryMonitor(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPressureManager(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.DeviceService_BindPressureManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindNFCProvider(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.DeviceService_BindNFCProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVibrationManager(receiver, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.DeviceService_BindVibrationManager_ParamsSpec,
      null,
      [receiver, listener],
      false);
  }

  bindHidManager(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.DeviceService_BindHidManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMtpManager(receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.DeviceService_BindMtpManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPowerMonitor(receiver) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      device.mojom.DeviceService_BindPowerMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPublicIpAddressGeolocationProvider(receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindScreenOrientationListener(receiver) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSensorProvider(receiver) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      device.mojom.DeviceService_BindSensorProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSerialPortManager(receiver) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      device.mojom.DeviceService_BindSerialPortManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTimeZoneMonitor(receiver) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindWakeLockProvider(receiver) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindUsbDeviceManager(receiver) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindUsbDeviceManagerTest(receiver) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

device.mojom.DeviceService.getRemote = function() {
  let remote = new device.mojom.DeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.DeviceService',
    'context');
  return remote.$;
};

device.mojom.DeviceServiceReceiver = class {
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
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
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
        
        // Try Method 0: BindFingerprint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindFingerprint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindFingerprint (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: BindGeolocationContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindGeolocationContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGeolocationContext (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: BindGeolocationControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindGeolocationControl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGeolocationControl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: BindGeolocationInternals
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGeolocationInternals (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: BindInputDeviceManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInputDeviceManager (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: BindBatteryMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBatteryMonitor (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: BindPressureManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindPressureManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPressureManager (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: BindNFCProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindNFCProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindNFCProvider (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: BindVibrationManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindVibrationManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindVibrationManager (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: BindHidManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindHidManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindHidManager (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: BindMtpManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindMtpManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMtpManager (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: BindPowerMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindPowerMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPowerMonitor (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: BindPublicIpAddressGeolocationProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPublicIpAddressGeolocationProvider (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: BindScreenOrientationListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindScreenOrientationListener (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: BindSensorProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindSensorProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSensorProvider (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 15: BindSerialPortManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindSerialPortManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSerialPortManager (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 16: BindTimeZoneMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTimeZoneMonitor (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 17: BindWakeLockProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWakeLockProvider (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 18: BindUsbDeviceManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindUsbDeviceManager (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 19: BindUsbDeviceManagerTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindUsbDeviceManagerTest (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindFingerprint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindFingerprint');
          const result = this.impl.bindFingerprint(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindGeolocationContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindGeolocationContext');
          const result = this.impl.bindGeolocationContext(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindGeolocationControl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindGeolocationControl');
          const result = this.impl.bindGeolocationControl(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindGeolocationInternals');
          const result = this.impl.bindGeolocationInternals(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindInputDeviceManager');
          const result = this.impl.bindInputDeviceManager(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindBatteryMonitor');
          const result = this.impl.bindBatteryMonitor(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindPressureManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPressureManager');
          const result = this.impl.bindPressureManager(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindNFCProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindNFCProvider');
          const result = this.impl.bindNFCProvider(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindVibrationManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindVibrationManager');
          const result = this.impl.bindVibrationManager(params.receiver, params.listener);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindHidManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindHidManager');
          const result = this.impl.bindHidManager(params.receiver);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindMtpManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindMtpManager');
          const result = this.impl.bindMtpManager(params.receiver);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindPowerMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPowerMonitor');
          const result = this.impl.bindPowerMonitor(params.receiver);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPublicIpAddressGeolocationProvider');
          const result = this.impl.bindPublicIpAddressGeolocationProvider(params.receiver);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindScreenOrientationListener');
          const result = this.impl.bindScreenOrientationListener(params.receiver);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindSensorProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindSensorProvider');
          const result = this.impl.bindSensorProvider(params.receiver);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindSerialPortManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindSerialPortManager');
          const result = this.impl.bindSerialPortManager(params.receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindTimeZoneMonitor');
          const result = this.impl.bindTimeZoneMonitor(params.receiver);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindWakeLockProvider');
          const result = this.impl.bindWakeLockProvider(params.receiver);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindUsbDeviceManager');
          const result = this.impl.bindUsbDeviceManager(params.receiver);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindUsbDeviceManagerTest');
          const result = this.impl.bindUsbDeviceManagerTest(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.DeviceServiceReceiver = device.mojom.DeviceServiceReceiver;

device.mojom.DeviceServicePtr = device.mojom.DeviceServiceRemote;
device.mojom.DeviceServiceRequest = device.mojom.DeviceServicePendingReceiver;

