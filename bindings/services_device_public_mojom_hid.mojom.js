// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/hid.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.HidBusTypeSpec = { $: mojo.internal.Enum() };
device.mojom.HidUsageAndPageSpec = { $: {} };
device.mojom.HidReportItemSpec = { $: {} };
device.mojom.HidReportDescriptionSpec = { $: {} };
device.mojom.HidCollectionInfoSpec = { $: {} };
device.mojom.HidDeviceInfoSpec = { $: {} };
device.mojom.HidManagerClient = {};
device.mojom.HidManagerClient.$interfaceName = 'device.mojom.HidManagerClient';
device.mojom.HidManagerClient_DeviceAdded_ParamsSpec = { $: {} };
device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec = { $: {} };
device.mojom.HidManagerClient_DeviceChanged_ParamsSpec = { $: {} };
device.mojom.HidManager = {};
device.mojom.HidManager.$interfaceName = 'device.mojom.HidManager';
device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec = { $: {} };
device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec = { $: {} };
device.mojom.HidManager_GetDevices_ParamsSpec = { $: {} };
device.mojom.HidManager_GetDevices_ResponseParamsSpec = { $: {} };
device.mojom.HidManager_Connect_ParamsSpec = { $: {} };
device.mojom.HidManager_Connect_ResponseParamsSpec = { $: {} };
device.mojom.HidManager_AddReceiver_ParamsSpec = { $: {} };
device.mojom.HidConnection = {};
device.mojom.HidConnection.$interfaceName = 'device.mojom.HidConnection';
device.mojom.HidConnection_Read_ParamsSpec = { $: {} };
device.mojom.HidConnection_Read_ResponseParamsSpec = { $: {} };
device.mojom.HidConnection_Write_ParamsSpec = { $: {} };
device.mojom.HidConnection_Write_ResponseParamsSpec = { $: {} };
device.mojom.HidConnection_GetFeatureReport_ParamsSpec = { $: {} };
device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec = { $: {} };
device.mojom.HidConnection_SendFeatureReport_ParamsSpec = { $: {} };
device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec = { $: {} };
device.mojom.HidConnectionClient = {};
device.mojom.HidConnectionClient.$interfaceName = 'device.mojom.HidConnectionClient';
device.mojom.HidConnectionClient_OnInputReport_ParamsSpec = { $: {} };
device.mojom.HidConnectionWatcher = {};
device.mojom.HidConnectionWatcher.$interfaceName = 'device.mojom.HidConnectionWatcher';

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
  MinVersion: 1,
};

// Struct: HidUsageAndPage
mojo.internal.Struct(
    device.mojom.HidUsageAndPageSpec, 'device.mojom.HidUsageAndPage', [
      mojo.internal.StructField('usage', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('usage_page', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HidReportItem
mojo.internal.Struct(
    device.mojom.HidReportItemSpec, 'device.mojom.HidReportItem', [
      mojo.internal.StructField('usages', 0, 0, mojo.internal.Array(device.mojom.HidUsageAndPageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('usage_minimum', 8, 0, device.mojom.HidUsageAndPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('usage_maximum', 16, 0, device.mojom.HidUsageAndPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('designator_minimum', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('designator_maximum', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('string_minimum', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('string_maximum', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('logical_minimum', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('logical_maximum', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('physical_minimum', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('physical_maximum', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('unit_exponent', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('unit', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('report_size', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('report_count', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_range', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_constant', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_variable', 72, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_relative', 72, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wrap', 72, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_non_linear', 72, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('no_preferred_state', 72, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_null_position', 72, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_volatile', 73, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_buffered_bytes', 73, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: HidReportDescription
mojo.internal.Struct(
    device.mojom.HidReportDescriptionSpec, 'device.mojom.HidReportDescription', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(device.mojom.HidReportItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HidCollectionInfo
mojo.internal.Struct(
    device.mojom.HidCollectionInfoSpec, 'device.mojom.HidCollectionInfo', [
      mojo.internal.StructField('usage', 0, 0, device.mojom.HidUsageAndPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('input_reports', 16, 0, mojo.internal.Array(device.mojom.HidReportDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_reports', 24, 0, mojo.internal.Array(device.mojom.HidReportDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('feature_reports', 32, 0, mojo.internal.Array(device.mojom.HidReportDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('children', 40, 0, mojo.internal.Array(device.mojom.HidCollectionInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('collection_type', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: HidDeviceInfo
mojo.internal.Struct(
    device.mojom.HidDeviceInfoSpec, 'device.mojom.HidDeviceInfo', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('physical_device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('product_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bus_type', 32, 0, device.mojom.HidBusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_descriptor', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('collections', 48, 0, mojo.internal.Array(device.mojom.HidCollectionInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('max_input_report_size', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('max_output_report_size', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('max_feature_report_size', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('device_node', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 88, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('product_id', 90, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_report_id', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('protected_input_report_ids', 96, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 1, undefined),
      mojo.internal.StructField('protected_output_report_ids', 104, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 1, undefined),
      mojo.internal.StructField('protected_feature_report_ids', 112, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 1, undefined),
      mojo.internal.StructField('is_excluded_by_blocklist', 120, 0, mojo.internal.Bool, false, false, 3, undefined),
    ],
    [[0, 104], [1, 128], [3, 136]]);

// Interface: HidManagerClient
mojo.internal.Struct(
    device.mojom.HidManagerClient_DeviceAdded_ParamsSpec, 'device.mojom.HidManagerClient_DeviceAdded_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.HidDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec, 'device.mojom.HidManagerClient_DeviceRemoved_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.HidDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidManagerClient_DeviceChanged_ParamsSpec, 'device.mojom.HidManagerClient_DeviceChanged_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.HidDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [device_info],
      false);
  }

  deviceRemoved(device_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec,
      null,
      [device_info],
      false);
  }

  deviceChanged(device_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.HidManagerClient_DeviceChanged_ParamsSpec,
      null,
      [device_info],
      false);
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

device.mojom.HidManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: DeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidManagerClient_DeviceAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeviceAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeviceRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeviceRemoved (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeviceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidManagerClient_DeviceChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeviceChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(device.mojom.HidManagerClient_DeviceAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deviceAdded');
          const result = this.impl.deviceAdded(params.device_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deviceRemoved');
          const result = this.impl.deviceRemoved(params.device_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidManagerClient_DeviceChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deviceChanged');
          const result = this.impl.deviceChanged(params.device_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.HidManagerClientReceiver = device.mojom.HidManagerClientReceiver;

device.mojom.HidManagerClientPtr = device.mojom.HidManagerClientRemote;
device.mojom.HidManagerClientRequest = device.mojom.HidManagerClientPendingReceiver;


// Interface: HidManager
mojo.internal.Struct(
    device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec, 'device.mojom.HidManager_GetDevicesAndSetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec, 'device.mojom.HidManager_GetDevicesAndSetClient_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.HidDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidManager_GetDevices_ParamsSpec, 'device.mojom.HidManager_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.HidManager_GetDevices_ResponseParamsSpec, 'device.mojom.HidManager_GetDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.HidDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidManager_Connect_ParamsSpec, 'device.mojom.HidManager_Connect_Params', [
      mojo.internal.StructField('device_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_client', 8, 0, mojo.internal.InterfaceProxy(device.mojom.HidConnectionClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('watcher', 16, 0, mojo.internal.InterfaceProxy(device.mojom.HidConnectionWatcherSpec), null, true, 0, undefined),
      mojo.internal.StructField('allow_protected_reports', 24, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('allow_fido_reports', 24, 1, mojo.internal.Bool, false, false, 2, undefined),
    ],
    [[0, 32], [1, 40], [2, 40]]);

mojo.internal.Struct(
    device.mojom.HidManager_Connect_ResponseParamsSpec, 'device.mojom.HidManager_Connect_ResponseParams', [
      mojo.internal.StructField('connection', 0, 0, mojo.internal.InterfaceProxy(device.mojom.HidConnectionSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidManager_AddReceiver_ParamsSpec, 'device.mojom.HidManager_AddReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.HidManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [client],
      false);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.HidManager_GetDevices_ParamsSpec,
      device.mojom.HidManager_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  connect(device_guid, connection_client, watcher, allow_protected_reports, allow_fido_reports) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.HidManager_Connect_ParamsSpec,
      device.mojom.HidManager_Connect_ResponseParamsSpec,
      [device_guid, connection_client, watcher, allow_protected_reports, allow_fido_reports],
      false);
  }

  addReceiver(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.HidManager_AddReceiver_ParamsSpec,
      null,
      [receiver],
      false);
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

device.mojom.HidManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: GetDevicesAndSetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevicesAndSetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidManager_GetDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevices (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidManager_Connect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidManager_AddReceiver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddReceiver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDevicesAndSetClient');
          const result = this.impl.getDevicesAndSetClient(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidManager_GetDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDevices');
          const result = this.impl.getDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.HidManager_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidManager_Connect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.device_guid, params.connection_client, params.watcher, params.allow_protected_reports, params.allow_fido_reports);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.HidManager_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidManager_AddReceiver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addReceiver');
          const result = this.impl.addReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.HidManagerReceiver = device.mojom.HidManagerReceiver;

device.mojom.HidManagerPtr = device.mojom.HidManagerRemote;
device.mojom.HidManagerRequest = device.mojom.HidManagerPendingReceiver;


// Interface: HidConnection
mojo.internal.Struct(
    device.mojom.HidConnection_Read_ParamsSpec, 'device.mojom.HidConnection_Read_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.HidConnection_Read_ResponseParamsSpec, 'device.mojom.HidConnection_Read_ResponseParams', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_id', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.HidConnection_Write_ParamsSpec, 'device.mojom.HidConnection_Write_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.HidConnection_Write_ResponseParamsSpec, 'device.mojom.HidConnection_Write_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidConnection_GetFeatureReport_ParamsSpec, 'device.mojom.HidConnection_GetFeatureReport_Params', [
      mojo.internal.StructField('report_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec, 'device.mojom.HidConnection_GetFeatureReport_ResponseParams', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.HidConnection_SendFeatureReport_ParamsSpec, 'device.mojom.HidConnection_SendFeatureReport_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec, 'device.mojom.HidConnection_SendFeatureReport_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  write(report_id, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.HidConnection_Write_ParamsSpec,
      device.mojom.HidConnection_Write_ResponseParamsSpec,
      [report_id, buffer],
      false);
  }

  getFeatureReport(report_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.HidConnection_GetFeatureReport_ParamsSpec,
      device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec,
      [report_id],
      false);
  }

  sendFeatureReport(report_id, buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.HidConnection_SendFeatureReport_ParamsSpec,
      device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec,
      [report_id, buffer],
      false);
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

device.mojom.HidConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidConnection_Read_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Read (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Write
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidConnection_Write_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Write (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetFeatureReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidConnection_GetFeatureReport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeatureReport (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SendFeatureReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidConnection_SendFeatureReport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendFeatureReport (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(device.mojom.HidConnection_Read_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.HidConnection_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidConnection_Write_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.write');
          const result = this.impl.write(params.report_id, params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.HidConnection_Write_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidConnection_GetFeatureReport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFeatureReport');
          const result = this.impl.getFeatureReport(params.report_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.HidConnection_SendFeatureReport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendFeatureReport');
          const result = this.impl.sendFeatureReport(params.report_id, params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec);
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

device.mojom.HidConnectionReceiver = device.mojom.HidConnectionReceiver;

device.mojom.HidConnectionPtr = device.mojom.HidConnectionRemote;
device.mojom.HidConnectionRequest = device.mojom.HidConnectionPendingReceiver;


// Interface: HidConnectionClient
mojo.internal.Struct(
    device.mojom.HidConnectionClient_OnInputReport_ParamsSpec, 'device.mojom.HidConnectionClient_OnInputReport_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [report_id, buffer],
      false);
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

device.mojom.HidConnectionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: OnInputReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.HidConnectionClient_OnInputReport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInputReport (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(device.mojom.HidConnectionClient_OnInputReport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInputReport');
          const result = this.impl.onInputReport(params.report_id, params.buffer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.HidConnectionClientReceiver = device.mojom.HidConnectionClientReceiver;

device.mojom.HidConnectionClientPtr = device.mojom.HidConnectionClientRemote;
device.mojom.HidConnectionClientRequest = device.mojom.HidConnectionClientPendingReceiver;


// Interface: HidConnectionWatcher
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

device.mojom.HidConnectionWatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.HidConnectionWatcherReceiver = device.mojom.HidConnectionWatcherReceiver;

device.mojom.HidConnectionWatcherPtr = device.mojom.HidConnectionWatcherRemote;
device.mojom.HidConnectionWatcherRequest = device.mojom.HidConnectionWatcherPendingReceiver;

