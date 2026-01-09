// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/device_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: DeviceService
device.mojom.DeviceService = {};

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
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindGeolocationContext(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.DeviceService_BindGeolocationContext_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindGeolocationControl(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.DeviceService_BindGeolocationControl_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindGeolocationInternals(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindInputDeviceManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindBatteryMonitor(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindPressureManager(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.DeviceService_BindPressureManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindNFCProvider(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.DeviceService_BindNFCProvider_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindVibrationManager(receiver, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.DeviceService_BindVibrationManager_ParamsSpec,
      null,
      null,
      [receiver, listener],
      undefined,
      undefined
    );
  }

  bindHidManager(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.DeviceService_BindHidManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindMtpManager(receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.DeviceService_BindMtpManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindPowerMonitor(receiver) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      device.mojom.DeviceService_BindPowerMonitor_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindPublicIpAddressGeolocationProvider(receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindScreenOrientationListener(receiver) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindSensorProvider(receiver) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      device.mojom.DeviceService_BindSensorProvider_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindSerialPortManager(receiver) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      device.mojom.DeviceService_BindSerialPortManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindTimeZoneMonitor(receiver) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindWakeLockProvider(receiver) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindUsbDeviceManager(receiver) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindUsbDeviceManagerTest(receiver) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
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

// ParamsSpec for BindFingerprint
device.mojom.DeviceService_BindFingerprint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindFingerprint_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindGeolocationContext
device.mojom.DeviceService_BindGeolocationContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindGeolocationContext_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindGeolocationControl
device.mojom.DeviceService_BindGeolocationControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindGeolocationControl_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindGeolocationInternals
device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindGeolocationInternals_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindInputDeviceManager
device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindInputDeviceManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindBatteryMonitor
device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindBatteryMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPressureManager
device.mojom.DeviceService_BindPressureManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindPressureManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindNFCProvider
device.mojom.DeviceService_BindNFCProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindNFCProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindVibrationManager
device.mojom.DeviceService_BindVibrationManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindVibrationManager_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindHidManager
device.mojom.DeviceService_BindHidManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindHidManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMtpManager
device.mojom.DeviceService_BindMtpManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindMtpManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPowerMonitor
device.mojom.DeviceService_BindPowerMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindPowerMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindPublicIpAddressGeolocationProvider
device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindPublicIpAddressGeolocationProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindScreenOrientationListener
device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindScreenOrientationListener_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindSensorProvider
device.mojom.DeviceService_BindSensorProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindSensorProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindSerialPortManager
device.mojom.DeviceService_BindSerialPortManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindSerialPortManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTimeZoneMonitor
device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindTimeZoneMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindWakeLockProvider
device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindWakeLockProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindUsbDeviceManager
device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindUsbDeviceManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindUsbDeviceManagerTest
device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.DeviceService.BindUsbDeviceManagerTest_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.DeviceServicePtr = device.mojom.DeviceServiceRemote;
device.mojom.DeviceServiceRequest = device.mojom.DeviceServicePendingReceiver;

