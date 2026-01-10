// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/hid.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


device.mojom.kPageUndefined = 0x00;

device.mojom.kPageGenericDesktop = 0x01;

device.mojom.kPageSimulation = 0x02;

device.mojom.kPageVirtualReality = 0x03;

device.mojom.kPageSport = 0x04;

device.mojom.kPageGame = 0x05;

device.mojom.kPageGenericDevice = 0x06;

device.mojom.kPageKeyboard = 0x07;

device.mojom.kPageLed = 0x08;

device.mojom.kPageButton = 0x09;

device.mojom.kPageOrdinal = 0x0A;

device.mojom.kPageTelephony = 0x0B;

device.mojom.kPageConsumer = 0x0C;

device.mojom.kPageDigitizer = 0x0D;

device.mojom.kPagePidPage = 0x0F;

device.mojom.kPageUnicode = 0x10;

device.mojom.kPageAlphanumericDisplay = 0x14;

device.mojom.kPageMedicalInstruments = 0x40;

device.mojom.kPageMonitor0 = 0x80;

device.mojom.kPageMonitor1 = 0x81;

device.mojom.kPageMonitor2 = 0x82;

device.mojom.kPageMonitor3 = 0x83;

device.mojom.kPagePower0 = 0x84;

device.mojom.kPagePower1 = 0x85;

device.mojom.kPagePower2 = 0x86;

device.mojom.kPagePower3 = 0x87;

device.mojom.kPageBarCodeScanner = 0x8C;

device.mojom.kPageScale = 0x8D;

device.mojom.kPageMagneticStripeReader = 0x8E;

device.mojom.kPageReservedPointOfSale = 0x8F;

device.mojom.kPageCameraControl = 0x90;

device.mojom.kPageArcade = 0x91;

device.mojom.kPageFido = 0xF1D0;

device.mojom.kPageVendor = 0xFF00;

device.mojom.kPageMediaCenter = 0xFFBC;

device.mojom.kGenericDesktopUndefined = 0x00;

device.mojom.kGenericDesktopPointer = 0x01;

device.mojom.kGenericDesktopMouse = 0x02;

device.mojom.kGenericDesktopJoystick = 0x04;

device.mojom.kGenericDesktopGamePad = 0x05;

device.mojom.kGenericDesktopKeyboard = 0x06;

device.mojom.kGenericDesktopKeypad = 0x07;

device.mojom.kGenericDesktopMultiAxisController = 0x08;

device.mojom.kGenericDesktopX = 0x30;

device.mojom.kGenericDesktopY = 0x31;

device.mojom.kGenericDesktopZ = 0x32;

device.mojom.kGenericDesktopRx = 0x33;

device.mojom.kGenericDesktopRy = 0x34;

device.mojom.kGenericDesktopRz = 0x35;

device.mojom.kGenericDesktopSlider = 0x36;

device.mojom.kGenericDesktopDial = 0x37;

device.mojom.kGenericDesktopWheel = 0x38;

device.mojom.kGenericDesktopHatSwitch = 0x39;

device.mojom.kGenericDesktopCountedBuffer = 0x3a;

device.mojom.kGenericDesktopByteCount = 0x3b;

device.mojom.kGenericDesktopMotionWakeup = 0x3c;

device.mojom.kGenericDesktopStart = 0x3d;

device.mojom.kGenericDesktopSelect = 0x3e;

device.mojom.kGenericDesktopVx = 0x40;

device.mojom.kGenericDesktopVy = 0x41;

device.mojom.kGenericDesktopVz = 0x42;

device.mojom.kGenericDesktopVbrx = 0x43;

device.mojom.kGenericDesktopVbry = 0x44;

device.mojom.kGenericDesktopVbrz = 0x45;

device.mojom.kGenericDesktopVno = 0x46;

device.mojom.kGenericDesktopSystemControl = 0x80;

device.mojom.kGenericDesktopSystemPowerDown = 0x81;

device.mojom.kGenericDesktopSystemSleep = 0x82;

device.mojom.kGenericDesktopSystemWakeUp = 0x83;

device.mojom.kGenericDesktopSystemContextMenu = 0x84;

device.mojom.kGenericDesktopSystemMainMenu = 0x85;

device.mojom.kGenericDesktopSystemAppMenu = 0x86;

device.mojom.kGenericDesktopSystemMenuHelp = 0x87;

device.mojom.kGenericDesktopSystemMenuExit = 0x88;

device.mojom.kGenericDesktopSystemMenuSelect = 0x89;

device.mojom.kGenericDesktopSystemMenuRight = 0x8a;

device.mojom.kGenericDesktopSystemMenuLeft = 0x8b;

device.mojom.kGenericDesktopSystemMenuUp = 0x8c;

device.mojom.kGenericDesktopSystemMenuDown = 0x8d;

device.mojom.kGenericDesktopSystemColdRestart = 0x8e;

device.mojom.kGenericDesktopSystemWarmRestart = 0x8f;

device.mojom.kGenericDesktopDPadUp = 0x90;

device.mojom.kGenericDesktopDPadDown = 0x91;

device.mojom.kGenericDesktopDPadLeft = 0x92;

device.mojom.kGenericDesktopDPadRight = 0x93;

device.mojom.kGenericDesktopSystemDock = 0xa0;

device.mojom.kGenericDesktopSystemUndock = 0xa1;

device.mojom.kGenericDesktopSystemSetup = 0xa2;

device.mojom.kGenericDesktopSystemBreak = 0xa3;

device.mojom.kGenericDesktopSystemDebuggerBreak = 0xa4;

device.mojom.kGenericDesktopApplicationBreak = 0xa5;

device.mojom.kGenericDesktopApplicationDebuggerBreak = 0xa6;

device.mojom.kGenericDesktopSystemSpeakerMute = 0xa7;

device.mojom.kGenericDesktopSystemHibernate = 0xa8;

device.mojom.kGenericDesktopSystemDisplayInvert = 0xb0;

device.mojom.kGenericDesktopSystemDisplayInternal = 0xb1;

device.mojom.kGenericDesktopSystemDisplayExternal = 0xb2;

device.mojom.kGenericDesktopSystemDisplayBoth = 0xb3;

device.mojom.kGenericDesktopSystemDisplayDual = 0xb4;

device.mojom.kGenericDesktopSystemDisplayToggle = 0xb5;

device.mojom.kGenericDesktopSystemDisplaySwap = 0xb6;

device.mojom.kHIDCollectionTypePhysical = 0x00;

device.mojom.kHIDCollectionTypeApplication = 0x01;

device.mojom.kHIDCollectionTypeLogical = 0x02;

device.mojom.kHIDCollectionTypeReport = 0x03;

device.mojom.kHIDCollectionTypeNamedArray = 0x04;

device.mojom.kHIDCollectionTypeUsageSwitch = 0x05;

device.mojom.kHIDCollectionTypeUsageModifier = 0x06;

device.mojom.kHIDCollectionTypeVendorMin = 0x80;

device.mojom.kHIDCollectionTypeVendorMax = 0xff;

// Enum: HidBusType
device.mojom.HidBusType = {
  kHIDBusTypeUSB: 0,
  kHIDBusTypeBluetooth: 1,
};
device.mojom.HidBusTypeSpec = { $: mojo.internal.Enum() };

// Struct: HidUsageAndPage
device.mojom.HidUsageAndPageSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidUsageAndPage',
      packedSize: 16,
      fields: [
        { name: 'usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'usage_page', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HidReportItem
device.mojom.HidReportItemSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidReportItem',
      packedSize: 88,
      fields: [
        { name: 'is_range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_constant', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_variable', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_relative', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wrap', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_non_linear', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'no_preferred_state', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_null_position', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_volatile', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_buffered_bytes', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'usages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidUsageAndPageSpec, false), nullable: false, minVersion: 0 },
        { name: 'usage_minimum', packedOffset: 16, packedBitOffset: 0, type: device.mojom.HidUsageAndPageSpec, nullable: false, minVersion: 0 },
        { name: 'usage_maximum', packedOffset: 24, packedBitOffset: 0, type: device.mojom.HidUsageAndPageSpec, nullable: false, minVersion: 0 },
        { name: 'designator_minimum', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'designator_maximum', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'string_minimum', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'string_maximum', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'logical_minimum', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'logical_maximum', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'physical_minimum', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'physical_maximum', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'unit_exponent', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'unit', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'report_size', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'report_count', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: HidReportDescription
device.mojom.HidReportDescriptionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidReportDescription',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'items', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HidCollectionInfo
device.mojom.HidCollectionInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidCollectionInfo',
      packedSize: 64,
      fields: [
        { name: 'usage', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HidUsageAndPageSpec, nullable: false, minVersion: 0 },
        { name: 'report_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'collection_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input_reports', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'output_reports', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'feature_reports', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidCollectionInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: HidDeviceInfo
device.mojom.HidDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidDeviceInfo',
      packedSize: 128,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'physical_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'product_id', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'product_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'serial_number', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bus_type', packedOffset: 20, packedBitOffset: 0, type: device.mojom.HidBusTypeSpec, nullable: false, minVersion: 0 },
        { name: 'report_descriptor', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'collections', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidCollectionInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_report_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'max_input_report_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'max_output_report_size', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'max_feature_report_size', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'device_node', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'protected_input_report_ids', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 1 },
        { name: 'protected_output_report_ids', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 1 },
        { name: 'protected_feature_report_ids', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 1 },
        { name: 'is_excluded_by_blocklist', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 104}, {version: 1, packedSize: 128}, {version: 3, packedSize: 128}]
    }
  }
};

// Interface: HidManagerClient
device.mojom.HidManagerClient = {};

device.mojom.HidManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.HidManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  deviceAdded(device_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.HidManagerClient_DeviceAdded_ParamsSpec,
      null,
      [device_info]);
  }

  deviceRemoved(device_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec,
      null,
      [device_info]);
  }

  deviceChanged(device_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.HidManagerClient_DeviceChanged_ParamsSpec,
      null,
      [device_info]);
  }

};

device.mojom.HidManagerClient.getRemote = function() {
  let remote = new device.mojom.HidManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for DeviceAdded
device.mojom.HidManagerClient_DeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManagerClient.DeviceAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HidDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeviceRemoved
device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManagerClient.DeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HidDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeviceChanged
device.mojom.HidManagerClient_DeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManagerClient.DeviceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HidDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.HidManagerClientPtr = device.mojom.HidManagerClientRemote;
device.mojom.HidManagerClientRequest = device.mojom.HidManagerClientPendingReceiver;


// Interface: HidManager
device.mojom.HidManager = {};

device.mojom.HidManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.HidManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDevicesAndSetClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec,
      device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec,
      [client]);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.HidManager_GetDevices_ParamsSpec,
      device.mojom.HidManager_GetDevices_ResponseParamsSpec,
      []);
  }

  connect(device_guid, connection_client, watcher, allow_protected_reports, allow_fido_reports) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.HidManager_Connect_ParamsSpec,
      device.mojom.HidManager_Connect_ResponseParamsSpec,
      [device_guid, connection_client, watcher, allow_protected_reports, allow_fido_reports]);
  }

  addReceiver(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.HidManager_AddReceiver_ParamsSpec,
      null,
      [receiver]);
  }

};

device.mojom.HidManager.getRemote = function() {
  let remote = new device.mojom.HidManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetDevicesAndSetClient
device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManager.GetDevicesAndSetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManager.GetDevicesAndSetClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDevices
device.mojom.HidManager_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManager.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.HidManager_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManager.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Connect
device.mojom.HidManager_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManager.Connect_Params',
      packedSize: 32,
      fields: [
        { name: 'device_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'connection_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'watcher', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'allow_protected_reports', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'allow_fido_reports', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 32}, {version: 2, packedSize: 32}]
    }
  }
};

device.mojom.HidManager_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManager.Connect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddReceiver
device.mojom.HidManager_AddReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidManager.AddReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.HidManagerPtr = device.mojom.HidManagerRemote;
device.mojom.HidManagerRequest = device.mojom.HidManagerPendingReceiver;


// Interface: HidConnection
device.mojom.HidConnection = {};

device.mojom.HidConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidConnectionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidConnectionPendingReceiver,
      handle);
    this.$ = new device.mojom.HidConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.HidConnection_Read_ParamsSpec,
      device.mojom.HidConnection_Read_ResponseParamsSpec,
      []);
  }

  write(report_id, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.HidConnection_Write_ParamsSpec,
      device.mojom.HidConnection_Write_ResponseParamsSpec,
      [report_id, buffer]);
  }

  getFeatureReport(report_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.HidConnection_GetFeatureReport_ParamsSpec,
      device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec,
      [report_id]);
  }

  sendFeatureReport(report_id, buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.HidConnection_SendFeatureReport_ParamsSpec,
      device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec,
      [report_id, buffer]);
  }

};

device.mojom.HidConnection.getRemote = function() {
  let remote = new device.mojom.HidConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnection',
    'context');
  return remote.$;
};

// ParamsSpec for Read
device.mojom.HidConnection_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.Read_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.HidConnection_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.Read_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'report_id', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Write
device.mojom.HidConnection_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.Write_Params',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.HidConnection_Write_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.Write_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFeatureReport
device.mojom.HidConnection_GetFeatureReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.GetFeatureReport_Params',
      packedSize: 16,
      fields: [
        { name: 'report_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.GetFeatureReport_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendFeatureReport
device.mojom.HidConnection_SendFeatureReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.SendFeatureReport_Params',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.SendFeatureReport_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.HidConnectionPtr = device.mojom.HidConnectionRemote;
device.mojom.HidConnectionRequest = device.mojom.HidConnectionPendingReceiver;


// Interface: HidConnectionClient
device.mojom.HidConnectionClient = {};

device.mojom.HidConnectionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidConnectionClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidConnectionClientPendingReceiver,
      handle);
    this.$ = new device.mojom.HidConnectionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidConnectionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInputReport(report_id, buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.HidConnectionClient_OnInputReport_ParamsSpec,
      null,
      [report_id, buffer]);
  }

};

device.mojom.HidConnectionClient.getRemote = function() {
  let remote = new device.mojom.HidConnectionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnInputReport
device.mojom.HidConnectionClient_OnInputReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnectionClient.OnInputReport_Params',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
device.mojom.HidConnectionClientPtr = device.mojom.HidConnectionClientRemote;
device.mojom.HidConnectionClientRequest = device.mojom.HidConnectionClientPendingReceiver;


// Interface: HidConnectionWatcher
device.mojom.HidConnectionWatcher = {};

device.mojom.HidConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidConnectionWatcherPendingReceiver,
      handle);
    this.$ = new device.mojom.HidConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.HidConnectionWatcher.getRemote = function() {
  let remote = new device.mojom.HidConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionWatcher',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.HidConnectionWatcherPtr = device.mojom.HidConnectionWatcherRemote;
device.mojom.HidConnectionWatcherRequest = device.mojom.HidConnectionWatcherPendingReceiver;

