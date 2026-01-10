// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/hid.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


device.mojom.mojom.kPageUndefined = 0x00;

device.mojom.mojom.kPageGenericDesktop = 0x01;

device.mojom.mojom.kPageSimulation = 0x02;

device.mojom.mojom.kPageVirtualReality = 0x03;

device.mojom.mojom.kPageSport = 0x04;

device.mojom.mojom.kPageGame = 0x05;

device.mojom.mojom.kPageGenericDevice = 0x06;

device.mojom.mojom.kPageKeyboard = 0x07;

device.mojom.mojom.kPageLed = 0x08;

device.mojom.mojom.kPageButton = 0x09;

device.mojom.mojom.kPageOrdinal = 0x0A;

device.mojom.mojom.kPageTelephony = 0x0B;

device.mojom.mojom.kPageConsumer = 0x0C;

device.mojom.mojom.kPageDigitizer = 0x0D;

device.mojom.mojom.kPagePidPage = 0x0F;

device.mojom.mojom.kPageUnicode = 0x10;

device.mojom.mojom.kPageAlphanumericDisplay = 0x14;

device.mojom.mojom.kPageMedicalInstruments = 0x40;

device.mojom.mojom.kPageMonitor0 = 0x80;

device.mojom.mojom.kPageMonitor1 = 0x81;

device.mojom.mojom.kPageMonitor2 = 0x82;

device.mojom.mojom.kPageMonitor3 = 0x83;

device.mojom.mojom.kPagePower0 = 0x84;

device.mojom.mojom.kPagePower1 = 0x85;

device.mojom.mojom.kPagePower2 = 0x86;

device.mojom.mojom.kPagePower3 = 0x87;

device.mojom.mojom.kPageBarCodeScanner = 0x8C;

device.mojom.mojom.kPageScale = 0x8D;

device.mojom.mojom.kPageMagneticStripeReader = 0x8E;

device.mojom.mojom.kPageReservedPointOfSale = 0x8F;

device.mojom.mojom.kPageCameraControl = 0x90;

device.mojom.mojom.kPageArcade = 0x91;

device.mojom.mojom.kPageFido = 0xF1D0;

device.mojom.mojom.kPageVendor = 0xFF00;

device.mojom.mojom.kPageMediaCenter = 0xFFBC;

device.mojom.mojom.kGenericDesktopUndefined = 0x00;

device.mojom.mojom.kGenericDesktopPointer = 0x01;

device.mojom.mojom.kGenericDesktopMouse = 0x02;

device.mojom.mojom.kGenericDesktopJoystick = 0x04;

device.mojom.mojom.kGenericDesktopGamePad = 0x05;

device.mojom.mojom.kGenericDesktopKeyboard = 0x06;

device.mojom.mojom.kGenericDesktopKeypad = 0x07;

device.mojom.mojom.kGenericDesktopMultiAxisController = 0x08;

device.mojom.mojom.kGenericDesktopX = 0x30;

device.mojom.mojom.kGenericDesktopY = 0x31;

device.mojom.mojom.kGenericDesktopZ = 0x32;

device.mojom.mojom.kGenericDesktopRx = 0x33;

device.mojom.mojom.kGenericDesktopRy = 0x34;

device.mojom.mojom.kGenericDesktopRz = 0x35;

device.mojom.mojom.kGenericDesktopSlider = 0x36;

device.mojom.mojom.kGenericDesktopDial = 0x37;

device.mojom.mojom.kGenericDesktopWheel = 0x38;

device.mojom.mojom.kGenericDesktopHatSwitch = 0x39;

device.mojom.mojom.kGenericDesktopCountedBuffer = 0x3a;

device.mojom.mojom.kGenericDesktopByteCount = 0x3b;

device.mojom.mojom.kGenericDesktopMotionWakeup = 0x3c;

device.mojom.mojom.kGenericDesktopStart = 0x3d;

device.mojom.mojom.kGenericDesktopSelect = 0x3e;

device.mojom.mojom.kGenericDesktopVx = 0x40;

device.mojom.mojom.kGenericDesktopVy = 0x41;

device.mojom.mojom.kGenericDesktopVz = 0x42;

device.mojom.mojom.kGenericDesktopVbrx = 0x43;

device.mojom.mojom.kGenericDesktopVbry = 0x44;

device.mojom.mojom.kGenericDesktopVbrz = 0x45;

device.mojom.mojom.kGenericDesktopVno = 0x46;

device.mojom.mojom.kGenericDesktopSystemControl = 0x80;

device.mojom.mojom.kGenericDesktopSystemPowerDown = 0x81;

device.mojom.mojom.kGenericDesktopSystemSleep = 0x82;

device.mojom.mojom.kGenericDesktopSystemWakeUp = 0x83;

device.mojom.mojom.kGenericDesktopSystemContextMenu = 0x84;

device.mojom.mojom.kGenericDesktopSystemMainMenu = 0x85;

device.mojom.mojom.kGenericDesktopSystemAppMenu = 0x86;

device.mojom.mojom.kGenericDesktopSystemMenuHelp = 0x87;

device.mojom.mojom.kGenericDesktopSystemMenuExit = 0x88;

device.mojom.mojom.kGenericDesktopSystemMenuSelect = 0x89;

device.mojom.mojom.kGenericDesktopSystemMenuRight = 0x8a;

device.mojom.mojom.kGenericDesktopSystemMenuLeft = 0x8b;

device.mojom.mojom.kGenericDesktopSystemMenuUp = 0x8c;

device.mojom.mojom.kGenericDesktopSystemMenuDown = 0x8d;

device.mojom.mojom.kGenericDesktopSystemColdRestart = 0x8e;

device.mojom.mojom.kGenericDesktopSystemWarmRestart = 0x8f;

device.mojom.mojom.kGenericDesktopDPadUp = 0x90;

device.mojom.mojom.kGenericDesktopDPadDown = 0x91;

device.mojom.mojom.kGenericDesktopDPadLeft = 0x92;

device.mojom.mojom.kGenericDesktopDPadRight = 0x93;

device.mojom.mojom.kGenericDesktopSystemDock = 0xa0;

device.mojom.mojom.kGenericDesktopSystemUndock = 0xa1;

device.mojom.mojom.kGenericDesktopSystemSetup = 0xa2;

device.mojom.mojom.kGenericDesktopSystemBreak = 0xa3;

device.mojom.mojom.kGenericDesktopSystemDebuggerBreak = 0xa4;

device.mojom.mojom.kGenericDesktopApplicationBreak = 0xa5;

device.mojom.mojom.kGenericDesktopApplicationDebuggerBreak = 0xa6;

device.mojom.mojom.kGenericDesktopSystemSpeakerMute = 0xa7;

device.mojom.mojom.kGenericDesktopSystemHibernate = 0xa8;

device.mojom.mojom.kGenericDesktopSystemDisplayInvert = 0xb0;

device.mojom.mojom.kGenericDesktopSystemDisplayInternal = 0xb1;

device.mojom.mojom.kGenericDesktopSystemDisplayExternal = 0xb2;

device.mojom.mojom.kGenericDesktopSystemDisplayBoth = 0xb3;

device.mojom.mojom.kGenericDesktopSystemDisplayDual = 0xb4;

device.mojom.mojom.kGenericDesktopSystemDisplayToggle = 0xb5;

device.mojom.mojom.kGenericDesktopSystemDisplaySwap = 0xb6;

device.mojom.mojom.kHIDCollectionTypePhysical = 0x00;

device.mojom.mojom.kHIDCollectionTypeApplication = 0x01;

device.mojom.mojom.kHIDCollectionTypeLogical = 0x02;

device.mojom.mojom.kHIDCollectionTypeReport = 0x03;

device.mojom.mojom.kHIDCollectionTypeNamedArray = 0x04;

device.mojom.mojom.kHIDCollectionTypeUsageSwitch = 0x05;

device.mojom.mojom.kHIDCollectionTypeUsageModifier = 0x06;

device.mojom.mojom.kHIDCollectionTypeVendorMin = 0x80;

device.mojom.mojom.kHIDCollectionTypeVendorMax = 0xff;

// Enum: HidBusType
device.mojom.mojom.HidBusType = {
  kHIDBusTypeUSB: 0,
  kHIDBusTypeBluetooth: 1,
};
device.mojom.mojom.HidBusTypeSpec = { $: mojo.internal.Enum() };

// Struct: HidUsageAndPage
device.mojom.mojom.HidUsageAndPageSpec = {
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
device.mojom.mojom.HidReportItemSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidReportItem',
      packedSize: 88,
      fields: [
        { name: 'is_range', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_constant', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_variable', packedOffset: 72, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_relative', packedOffset: 72, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wrap', packedOffset: 72, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_non_linear', packedOffset: 72, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'no_preferred_state', packedOffset: 72, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_null_position', packedOffset: 72, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_volatile', packedOffset: 73, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_buffered_bytes', packedOffset: 73, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'usages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidUsageAndPageSpec, false), nullable: false, minVersion: 0 },
        { name: 'usage_minimum', packedOffset: 8, packedBitOffset: 0, type: device.mojom.HidUsageAndPageSpec, nullable: false, minVersion: 0 },
        { name: 'usage_maximum', packedOffset: 16, packedBitOffset: 0, type: device.mojom.HidUsageAndPageSpec, nullable: false, minVersion: 0 },
        { name: 'designator_minimum', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'designator_maximum', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'string_minimum', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'string_maximum', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'logical_minimum', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'logical_maximum', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'physical_minimum', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'physical_maximum', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'unit_exponent', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'unit', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'report_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'report_count', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: HidReportDescription
device.mojom.mojom.HidReportDescriptionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidReportDescription',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HidCollectionInfo
device.mojom.mojom.HidCollectionInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidCollectionInfo',
      packedSize: 64,
      fields: [
        { name: 'usage', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HidUsageAndPageSpec, nullable: false, minVersion: 0 },
        { name: 'report_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'collection_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input_reports', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'output_reports', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'feature_reports', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidReportDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidCollectionInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: HidDeviceInfo
device.mojom.mojom.HidDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidDeviceInfo',
      packedSize: 128,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'physical_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'product_id', packedOffset: 110, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'product_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'serial_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bus_type', packedOffset: 104, packedBitOffset: 0, type: device.mojom.HidBusTypeSpec, nullable: false, minVersion: 0 },
        { name: 'report_descriptor', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'collections', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidCollectionInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_report_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'max_input_report_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'max_output_report_size', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'max_feature_report_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'device_node', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'protected_input_report_ids', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 1 },
        { name: 'protected_output_report_ids', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 1 },
        { name: 'protected_feature_report_ids', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 1 },
        { name: 'is_excluded_by_blocklist', packedOffset: 112, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 128}, {version: 1, packedSize: 128}, {version: 3, packedSize: 128}]
    }
  }
};

// Interface: HidManagerClient
device.mojom.mojom.HidManagerClient = {};

device.mojom.mojom.HidManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.HidManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.HidManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.HidManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.HidManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  deviceAdded(device_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.HidManagerClient_DeviceAdded_ParamsSpec,
      null,
      [device_info]);
  }

  deviceRemoved(device_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.HidManagerClient_DeviceRemoved_ParamsSpec,
      null,
      [device_info]);
  }

  deviceChanged(device_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.HidManagerClient_DeviceChanged_ParamsSpec,
      null,
      [device_info]);
  }

};

device.mojom.mojom.HidManagerClient.getRemote = function() {
  let remote = new device.mojom.mojom.HidManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for DeviceAdded
device.mojom.mojom.HidManagerClient_DeviceAdded_ParamsSpec = {
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
device.mojom.mojom.HidManagerClient_DeviceRemoved_ParamsSpec = {
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
device.mojom.mojom.HidManagerClient_DeviceChanged_ParamsSpec = {
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
device.mojom.mojom.HidManagerClientPtr = device.mojom.mojom.HidManagerClientRemote;
device.mojom.mojom.HidManagerClientRequest = device.mojom.mojom.HidManagerClientPendingReceiver;


// Interface: HidManager
device.mojom.mojom.HidManager = {};

device.mojom.mojom.HidManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.HidManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.HidManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.HidManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.HidManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDevicesAndSetClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec,
      device.mojom.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec,
      [client]);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.HidManager_GetDevices_ParamsSpec,
      device.mojom.mojom.HidManager_GetDevices_ResponseParamsSpec,
      []);
  }

  connect(device_guid, connection_client, watcher, allow_protected_reports, allow_fido_reports) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.HidManager_Connect_ParamsSpec,
      device.mojom.mojom.HidManager_Connect_ResponseParamsSpec,
      [device_guid, connection_client, watcher, allow_protected_reports, allow_fido_reports]);
  }

  addReceiver(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.HidManager_AddReceiver_ParamsSpec,
      null,
      [receiver]);
  }

};

device.mojom.mojom.HidManager.getRemote = function() {
  let remote = new device.mojom.mojom.HidManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetDevicesAndSetClient
device.mojom.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec = {
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

device.mojom.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec = {
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
device.mojom.mojom.HidManager_GetDevices_ParamsSpec = {
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

device.mojom.mojom.HidManager_GetDevices_ResponseParamsSpec = {
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
device.mojom.mojom.HidManager_Connect_ParamsSpec = {
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

device.mojom.mojom.HidManager_Connect_ResponseParamsSpec = {
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
device.mojom.mojom.HidManager_AddReceiver_ParamsSpec = {
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
device.mojom.mojom.HidManagerPtr = device.mojom.mojom.HidManagerRemote;
device.mojom.mojom.HidManagerRequest = device.mojom.mojom.HidManagerPendingReceiver;


// Interface: HidConnection
device.mojom.mojom.HidConnection = {};

device.mojom.mojom.HidConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.HidConnectionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.HidConnectionPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.HidConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.HidConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.HidConnection_Read_ParamsSpec,
      device.mojom.mojom.HidConnection_Read_ResponseParamsSpec,
      []);
  }

  write(report_id, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.HidConnection_Write_ParamsSpec,
      device.mojom.mojom.HidConnection_Write_ResponseParamsSpec,
      [report_id, buffer]);
  }

  getFeatureReport(report_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.HidConnection_GetFeatureReport_ParamsSpec,
      device.mojom.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec,
      [report_id]);
  }

  sendFeatureReport(report_id, buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.HidConnection_SendFeatureReport_ParamsSpec,
      device.mojom.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec,
      [report_id, buffer]);
  }

};

device.mojom.mojom.HidConnection.getRemote = function() {
  let remote = new device.mojom.mojom.HidConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnection',
    'context');
  return remote.$;
};

// ParamsSpec for Read
device.mojom.mojom.HidConnection_Read_ParamsSpec = {
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

device.mojom.mojom.HidConnection_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.Read_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'report_id', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Write
device.mojom.mojom.HidConnection_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.Write_Params',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.HidConnection_Write_ResponseParamsSpec = {
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
device.mojom.mojom.HidConnection_GetFeatureReport_ParamsSpec = {
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

device.mojom.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.GetFeatureReport_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendFeatureReport
device.mojom.mojom.HidConnection_SendFeatureReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnection.SendFeatureReport_Params',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec = {
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
device.mojom.mojom.HidConnectionPtr = device.mojom.mojom.HidConnectionRemote;
device.mojom.mojom.HidConnectionRequest = device.mojom.mojom.HidConnectionPendingReceiver;


// Interface: HidConnectionClient
device.mojom.mojom.HidConnectionClient = {};

device.mojom.mojom.HidConnectionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.HidConnectionClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.HidConnectionClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.HidConnectionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.HidConnectionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInputReport(report_id, buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.HidConnectionClient_OnInputReport_ParamsSpec,
      null,
      [report_id, buffer]);
  }

};

device.mojom.mojom.HidConnectionClient.getRemote = function() {
  let remote = new device.mojom.mojom.HidConnectionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnInputReport
device.mojom.mojom.HidConnectionClient_OnInputReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidConnectionClient.OnInputReport_Params',
      packedSize: 24,
      fields: [
        { name: 'report_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.HidConnectionClientPtr = device.mojom.mojom.HidConnectionClientRemote;
device.mojom.mojom.HidConnectionClientRequest = device.mojom.mojom.HidConnectionClientPendingReceiver;


// Interface: HidConnectionWatcher
device.mojom.mojom.HidConnectionWatcher = {};

device.mojom.mojom.HidConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.HidConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.HidConnectionWatcherPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.HidConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.HidConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.mojom.HidConnectionWatcher.getRemote = function() {
  let remote = new device.mojom.mojom.HidConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionWatcher',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.mojom.HidConnectionWatcherPtr = device.mojom.mojom.HidConnectionWatcherRemote;
device.mojom.mojom.HidConnectionWatcherRequest = device.mojom.mojom.HidConnectionWatcherPendingReceiver;

