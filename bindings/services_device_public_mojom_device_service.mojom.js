// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/device_service.mojom
// Module: device.mojom

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
  bindFingerprint(receiver) {
    return this.$.bindFingerprint(receiver);
  }
  bindGeolocationContext(receiver) {
    return this.$.bindGeolocationContext(receiver);
  }
  bindGeolocationControl(receiver) {
    return this.$.bindGeolocationControl(receiver);
  }
  bindGeolocationInternals(receiver) {
    return this.$.bindGeolocationInternals(receiver);
  }
  bindInputDeviceManager(receiver) {
    return this.$.bindInputDeviceManager(receiver);
  }
  bindBatteryMonitor(receiver) {
    return this.$.bindBatteryMonitor(receiver);
  }
  bindPressureManager(receiver) {
    return this.$.bindPressureManager(receiver);
  }
  bindNFCProvider(receiver) {
    return this.$.bindNFCProvider(receiver);
  }
  bindVibrationManager(receiver, listener) {
    return this.$.bindVibrationManager(receiver, listener);
  }
  bindHidManager(receiver) {
    return this.$.bindHidManager(receiver);
  }
  bindMtpManager(receiver) {
    return this.$.bindMtpManager(receiver);
  }
  bindPowerMonitor(receiver) {
    return this.$.bindPowerMonitor(receiver);
  }
  bindPublicIpAddressGeolocationProvider(receiver) {
    return this.$.bindPublicIpAddressGeolocationProvider(receiver);
  }
  bindScreenOrientationListener(receiver) {
    return this.$.bindScreenOrientationListener(receiver);
  }
  bindSensorProvider(receiver) {
    return this.$.bindSensorProvider(receiver);
  }
  bindSerialPortManager(receiver) {
    return this.$.bindSerialPortManager(receiver);
  }
  bindTimeZoneMonitor(receiver) {
    return this.$.bindTimeZoneMonitor(receiver);
  }
  bindWakeLockProvider(receiver) {
    return this.$.bindWakeLockProvider(receiver);
  }
  bindUsbDeviceManager(receiver) {
    return this.$.bindUsbDeviceManager(receiver);
  }
  bindUsbDeviceManagerTest(receiver) {
    return this.$.bindUsbDeviceManagerTest(receiver);
  }
};

device.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindFingerprint(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.DeviceService_BindFingerprint_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationContext(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.DeviceService_BindGeolocationContext_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationControl(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.DeviceService_BindGeolocationControl_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationInternals(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindInputDeviceManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindBatteryMonitor(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPressureManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.DeviceService_BindPressureManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindNFCProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      device.mojom.DeviceService_BindNFCProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVibrationManager(receiver, listener) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      device.mojom.DeviceService_BindVibrationManager_ParamsSpec,
      null,
      [receiver, listener],
      false);
  }

  bindHidManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      device.mojom.DeviceService_BindHidManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMtpManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      device.mojom.DeviceService_BindMtpManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPowerMonitor(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      device.mojom.DeviceService_BindPowerMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPublicIpAddressGeolocationProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindScreenOrientationListener(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSensorProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      device.mojom.DeviceService_BindSensorProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSerialPortManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      device.mojom.DeviceService_BindSerialPortManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTimeZoneMonitor(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindWakeLockProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindUsbDeviceManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindUsbDeviceManagerTest(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DeviceService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindFingerprint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindGeolocationContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindGeolocationControl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindPressureManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindNFCProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindVibrationManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindHidManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindMtpManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindPowerMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindSensorProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindSerialPortManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindFingerprint_ParamsSpec.$.structSpec);
          const result = this.impl.bindFingerprint(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindGeolocationContext_ParamsSpec.$.structSpec);
          const result = this.impl.bindGeolocationContext(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindGeolocationControl_ParamsSpec.$.structSpec);
          const result = this.impl.bindGeolocationControl(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec.$.structSpec);
          const result = this.impl.bindGeolocationInternals(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindInputDeviceManager(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.bindBatteryMonitor(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindPressureManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindPressureManager(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindNFCProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindNFCProvider(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindVibrationManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindVibrationManager(params.receiver, params.listener);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindHidManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindHidManager(params.receiver);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindMtpManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindMtpManager(params.receiver);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindPowerMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.bindPowerMonitor(params.receiver);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindPublicIpAddressGeolocationProvider(params.receiver);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec.$.structSpec);
          const result = this.impl.bindScreenOrientationListener(params.receiver);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindSensorProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindSensorProvider(params.receiver);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindSerialPortManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindSerialPortManager(params.receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.bindTimeZoneMonitor(params.receiver);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindWakeLockProvider(params.receiver);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindUsbDeviceManager(params.receiver);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec.$.structSpec);
          const result = this.impl.bindUsbDeviceManagerTest(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.DeviceServiceReceiver = device.mojom.DeviceServiceReceiver;

device.mojom.DeviceServicePtr = device.mojom.DeviceServiceRemote;
device.mojom.DeviceServiceRequest = device.mojom.DeviceServicePendingReceiver;

