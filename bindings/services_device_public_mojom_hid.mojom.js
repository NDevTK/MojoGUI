// Auto-generated MojoJS binding
 // Source: chromium_src/services/device/public/mojom/hid.mojom
 // Module: device.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};

mojo.internal.bindings.device.mojom.HidBusTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.HidUsageAndPageSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidReportItemSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidReportDescriptionSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidCollectionInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidDeviceInfoSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManagerClient = {};
mojo.internal.bindings.device.mojom.HidManagerClient.$interfaceName = 'device.mojom.HidManagerClient';
mojo.internal.bindings.device.mojom.HidManagerClient_DeviceAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManagerClient_DeviceChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManager = {};
mojo.internal.bindings.device.mojom.HidManager.$interfaceName = 'device.mojom.HidManager';
mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManager_GetDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManager_GetDevices_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManager_Connect_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManager_Connect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidManager_AddReceiver_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection = {};
mojo.internal.bindings.device.mojom.HidConnection.$interfaceName = 'device.mojom.HidConnection';
mojo.internal.bindings.device.mojom.HidConnection_Read_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection_Read_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection_Write_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection_Write_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnectionClient = {};
mojo.internal.bindings.device.mojom.HidConnectionClient.$interfaceName = 'device.mojom.HidConnectionClient';
mojo.internal.bindings.device.mojom.HidConnectionClient_OnInputReport_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.HidConnectionWatcher = {};
mojo.internal.bindings.device.mojom.HidConnectionWatcher.$interfaceName = 'device.mojom.HidConnectionWatcher';

mojo.internal.bindings.device.mojom.kPageUndefined = 0x00;

mojo.internal.bindings.device.mojom.kPageGenericDesktop = 0x01;

mojo.internal.bindings.device.mojom.kPageSimulation = 0x02;

mojo.internal.bindings.device.mojom.kPageVirtualReality = 0x03;

mojo.internal.bindings.device.mojom.kPageSport = 0x04;

mojo.internal.bindings.device.mojom.kPageGame = 0x05;

mojo.internal.bindings.device.mojom.kPageGenericDevice = 0x06;

mojo.internal.bindings.device.mojom.kPageKeyboard = 0x07;

mojo.internal.bindings.device.mojom.kPageLed = 0x08;

mojo.internal.bindings.device.mojom.kPageButton = 0x09;

mojo.internal.bindings.device.mojom.kPageOrdinal = 0x0A;

mojo.internal.bindings.device.mojom.kPageTelephony = 0x0B;

mojo.internal.bindings.device.mojom.kPageConsumer = 0x0C;

mojo.internal.bindings.device.mojom.kPageDigitizer = 0x0D;

mojo.internal.bindings.device.mojom.kPagePidPage = 0x0F;

mojo.internal.bindings.device.mojom.kPageUnicode = 0x10;

mojo.internal.bindings.device.mojom.kPageAlphanumericDisplay = 0x14;

mojo.internal.bindings.device.mojom.kPageMedicalInstruments = 0x40;

mojo.internal.bindings.device.mojom.kPageMonitor0 = 0x80;

mojo.internal.bindings.device.mojom.kPageMonitor1 = 0x81;

mojo.internal.bindings.device.mojom.kPageMonitor2 = 0x82;

mojo.internal.bindings.device.mojom.kPageMonitor3 = 0x83;

mojo.internal.bindings.device.mojom.kPagePower0 = 0x84;

mojo.internal.bindings.device.mojom.kPagePower1 = 0x85;

mojo.internal.bindings.device.mojom.kPagePower2 = 0x86;

mojo.internal.bindings.device.mojom.kPagePower3 = 0x87;

mojo.internal.bindings.device.mojom.kPageBarCodeScanner = 0x8C;

mojo.internal.bindings.device.mojom.kPageScale = 0x8D;

mojo.internal.bindings.device.mojom.kPageMagneticStripeReader = 0x8E;

mojo.internal.bindings.device.mojom.kPageReservedPointOfSale = 0x8F;

mojo.internal.bindings.device.mojom.kPageCameraControl = 0x90;

mojo.internal.bindings.device.mojom.kPageArcade = 0x91;

mojo.internal.bindings.device.mojom.kPageFido = 0xF1D0;

mojo.internal.bindings.device.mojom.kPageVendor = 0xFF00;

mojo.internal.bindings.device.mojom.kPageMediaCenter = 0xFFBC;

mojo.internal.bindings.device.mojom.kGenericDesktopUndefined = 0x00;

mojo.internal.bindings.device.mojom.kGenericDesktopPointer = 0x01;

mojo.internal.bindings.device.mojom.kGenericDesktopMouse = 0x02;

mojo.internal.bindings.device.mojom.kGenericDesktopJoystick = 0x04;

mojo.internal.bindings.device.mojom.kGenericDesktopGamePad = 0x05;

mojo.internal.bindings.device.mojom.kGenericDesktopKeyboard = 0x06;

mojo.internal.bindings.device.mojom.kGenericDesktopKeypad = 0x07;

mojo.internal.bindings.device.mojom.kGenericDesktopMultiAxisController = 0x08;

mojo.internal.bindings.device.mojom.kGenericDesktopX = 0x30;

mojo.internal.bindings.device.mojom.kGenericDesktopY = 0x31;

mojo.internal.bindings.device.mojom.kGenericDesktopZ = 0x32;

mojo.internal.bindings.device.mojom.kGenericDesktopRx = 0x33;

mojo.internal.bindings.device.mojom.kGenericDesktopRy = 0x34;

mojo.internal.bindings.device.mojom.kGenericDesktopRz = 0x35;

mojo.internal.bindings.device.mojom.kGenericDesktopSlider = 0x36;

mojo.internal.bindings.device.mojom.kGenericDesktopDial = 0x37;

mojo.internal.bindings.device.mojom.kGenericDesktopWheel = 0x38;

mojo.internal.bindings.device.mojom.kGenericDesktopHatSwitch = 0x39;

mojo.internal.bindings.device.mojom.kGenericDesktopCountedBuffer = 0x3a;

mojo.internal.bindings.device.mojom.kGenericDesktopByteCount = 0x3b;

mojo.internal.bindings.device.mojom.kGenericDesktopMotionWakeup = 0x3c;

mojo.internal.bindings.device.mojom.kGenericDesktopStart = 0x3d;

mojo.internal.bindings.device.mojom.kGenericDesktopSelect = 0x3e;

mojo.internal.bindings.device.mojom.kGenericDesktopVx = 0x40;

mojo.internal.bindings.device.mojom.kGenericDesktopVy = 0x41;

mojo.internal.bindings.device.mojom.kGenericDesktopVz = 0x42;

mojo.internal.bindings.device.mojom.kGenericDesktopVbrx = 0x43;

mojo.internal.bindings.device.mojom.kGenericDesktopVbry = 0x44;

mojo.internal.bindings.device.mojom.kGenericDesktopVbrz = 0x45;

mojo.internal.bindings.device.mojom.kGenericDesktopVno = 0x46;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemControl = 0x80;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemPowerDown = 0x81;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemSleep = 0x82;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemWakeUp = 0x83;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemContextMenu = 0x84;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMainMenu = 0x85;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemAppMenu = 0x86;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMenuHelp = 0x87;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMenuExit = 0x88;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMenuSelect = 0x89;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMenuRight = 0x8a;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMenuLeft = 0x8b;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMenuUp = 0x8c;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemMenuDown = 0x8d;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemColdRestart = 0x8e;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemWarmRestart = 0x8f;

mojo.internal.bindings.device.mojom.kGenericDesktopDPadUp = 0x90;

mojo.internal.bindings.device.mojom.kGenericDesktopDPadDown = 0x91;

mojo.internal.bindings.device.mojom.kGenericDesktopDPadLeft = 0x92;

mojo.internal.bindings.device.mojom.kGenericDesktopDPadRight = 0x93;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDock = 0xa0;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemUndock = 0xa1;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemSetup = 0xa2;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemBreak = 0xa3;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDebuggerBreak = 0xa4;

mojo.internal.bindings.device.mojom.kGenericDesktopApplicationBreak = 0xa5;

mojo.internal.bindings.device.mojom.kGenericDesktopApplicationDebuggerBreak = 0xa6;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemSpeakerMute = 0xa7;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemHibernate = 0xa8;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDisplayInvert = 0xb0;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDisplayInternal = 0xb1;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDisplayExternal = 0xb2;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDisplayBoth = 0xb3;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDisplayDual = 0xb4;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDisplayToggle = 0xb5;

mojo.internal.bindings.device.mojom.kGenericDesktopSystemDisplaySwap = 0xb6;

mojo.internal.bindings.device.mojom.kHIDCollectionTypePhysical = 0x00;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeApplication = 0x01;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeLogical = 0x02;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeReport = 0x03;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeNamedArray = 0x04;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeUsageSwitch = 0x05;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeUsageModifier = 0x06;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeVendorMin = 0x80;

mojo.internal.bindings.device.mojom.kHIDCollectionTypeVendorMax = 0xff;

// Enum: HidBusType
mojo.internal.bindings.device.mojom.HidBusType = {
  kHIDBusTypeUSB: 0,
  kHIDBusTypeBluetooth: 1,
  MinVersion: 1,
};

// Struct: HidUsageAndPage
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidUsageAndPageSpec, 'device.mojom.HidUsageAndPage', [
      mojo.internal.StructField('arg_usage', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_usage_page', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HidReportItem
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidReportItemSpec, 'device.mojom.HidReportItem', [
      mojo.internal.StructField('arg_usages', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidUsageAndPageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_usage_minimum', 8, 0, mojo.internal.bindings.device.mojom.HidUsageAndPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_usage_maximum', 16, 0, mojo.internal.bindings.device.mojom.HidUsageAndPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_designator_minimum', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_designator_maximum', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_string_minimum', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_string_maximum', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_logical_minimum', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_logical_maximum', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physical_minimum', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physical_maximum', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_unit_exponent', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_unit', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_report_size', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_report_count', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_range', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_constant', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_variable', 72, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_relative', 72, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wrap', 72, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_non_linear', 72, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_no_preferred_state', 72, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_null_position', 72, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_volatile', 73, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_buffered_bytes', 73, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: HidReportDescription
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidReportDescriptionSpec, 'device.mojom.HidReportDescription', [
      mojo.internal.StructField('arg_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidReportItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HidCollectionInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidCollectionInfoSpec, 'device.mojom.HidCollectionInfo', [
      mojo.internal.StructField('arg_usage', 0, 0, mojo.internal.bindings.device.mojom.HidUsageAndPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_input_reports', 16, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidReportDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_output_reports', 24, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidReportDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_feature_reports', 32, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidReportDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_children', 40, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidCollectionInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_collection_type', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: HidDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidDeviceInfoSpec, 'device.mojom.HidDeviceInfo', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_physical_device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bus_type', 32, 0, mojo.internal.bindings.device.mojom.HidBusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_descriptor', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_collections', 48, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidCollectionInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_max_input_report_size', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_output_report_size', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_feature_report_size', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_node', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 88, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_product_id', 90, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_report_id', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_protected_input_report_ids', 96, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_protected_output_report_ids', 104, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_protected_feature_report_ids', 112, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_is_excluded_by_blocklist', 120, 0, mojo.internal.Bool, false, false, 3, undefined),
    ],
    [[0, 104], [1, 128], [3, 136]]);

// Interface: HidManagerClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManagerClient_DeviceAdded_ParamsSpec, 'device.mojom.HidManagerClient_DeviceAdded_Params', [
      mojo.internal.StructField('arg_device_info', 0, 0, mojo.internal.bindings.device.mojom.HidDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec, 'device.mojom.HidManagerClient_DeviceRemoved_Params', [
      mojo.internal.StructField('arg_device_info', 0, 0, mojo.internal.bindings.device.mojom.HidDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManagerClient_DeviceChanged_ParamsSpec, 'device.mojom.HidManagerClient_DeviceChanged_Params', [
      mojo.internal.StructField('arg_device_info', 0, 0, mojo.internal.bindings.device.mojom.HidDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.HidManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.HidManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.HidManagerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.HidManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  deviceAdded(arg_device_info) {
    return this.$.deviceAdded(arg_device_info);
  }
  deviceRemoved(arg_device_info) {
    return this.$.deviceRemoved(arg_device_info);
  }
  deviceChanged(arg_device_info) {
    return this.$.deviceChanged(arg_device_info);
  }
};

mojo.internal.bindings.device.mojom.HidManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HidManagerClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  deviceAdded(arg_device_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.HidManagerClient_DeviceAdded_ParamsSpec,
      null,
      [arg_device_info],
      false);
  }

  deviceRemoved(arg_device_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec,
      null,
      [arg_device_info],
      false);
  }

  deviceChanged(arg_device_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.HidManagerClient_DeviceChanged_ParamsSpec,
      null,
      [arg_device_info],
      false);
  }

};

mojo.internal.bindings.device.mojom.HidManagerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.HidManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManagerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.HidManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HidManagerClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManagerClient_DeviceAdded_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManagerClient_DeviceChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManagerClient_DeviceAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deviceAdded');
          const result = this.impl.deviceAdded(params.arg_device_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManagerClient_DeviceRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deviceRemoved');
          const result = this.impl.deviceRemoved(params.arg_device_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManagerClient_DeviceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deviceChanged');
          const result = this.impl.deviceChanged(params.arg_device_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.HidManagerClientReceiver = mojo.internal.bindings.device.mojom.HidManagerClientReceiver;

mojo.internal.bindings.device.mojom.HidManagerClientPtr = mojo.internal.bindings.device.mojom.HidManagerClientRemote;
mojo.internal.bindings.device.mojom.HidManagerClientRequest = mojo.internal.bindings.device.mojom.HidManagerClientPendingReceiver;


// Interface: HidManager
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec, 'device.mojom.HidManager_GetDevicesAndSetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.device.mojom.HidManagerClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec, 'device.mojom.HidManager_GetDevicesAndSetClient_ResponseParams', [
      mojo.internal.StructField('arg_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManager_GetDevices_ParamsSpec, 'device.mojom.HidManager_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManager_GetDevices_ResponseParamsSpec, 'device.mojom.HidManager_GetDevices_ResponseParams', [
      mojo.internal.StructField('arg_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.HidDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManager_Connect_ParamsSpec, 'device.mojom.HidManager_Connect_Params', [
      mojo.internal.StructField('arg_device_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.HidConnectionClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_watcher', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.HidConnectionWatcherSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_protected_reports', 24, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('arg_allow_fido_reports', 24, 1, mojo.internal.Bool, false, false, 2, undefined),
    ],
    [[0, 32], [1, 40], [2, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManager_Connect_ResponseParamsSpec, 'device.mojom.HidManager_Connect_ResponseParams', [
      mojo.internal.StructField('arg_connection', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.HidConnectionSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidManager_AddReceiver_ParamsSpec, 'device.mojom.HidManager_AddReceiver_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device.mojom.HidManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.HidManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.HidManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.HidManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.HidManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDevicesAndSetClient(arg_client) {
    return this.$.getDevicesAndSetClient(arg_client);
  }
  getDevices() {
    return this.$.getDevices();
  }
  connect(arg_device_guid, arg_connection_client, arg_watcher, arg_allow_protected_reports, arg_allow_fido_reports) {
    return this.$.connect(arg_device_guid, arg_connection_client, arg_watcher, arg_allow_protected_reports, arg_allow_fido_reports);
  }
  addReceiver(arg_receiver) {
    return this.$.addReceiver(arg_receiver);
  }
};

mojo.internal.bindings.device.mojom.HidManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HidManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  getDevicesAndSetClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec,
      mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec,
      [arg_client],
      false);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.HidManager_GetDevices_ParamsSpec,
      mojo.internal.bindings.device.mojom.HidManager_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  connect(arg_device_guid, arg_connection_client, arg_watcher, arg_allow_protected_reports, arg_allow_fido_reports) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.HidManager_Connect_ParamsSpec,
      mojo.internal.bindings.device.mojom.HidManager_Connect_ResponseParamsSpec,
      [arg_device_guid, arg_connection_client, arg_watcher, arg_allow_protected_reports, arg_allow_fido_reports],
      false);
  }

  addReceiver(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.HidManager_AddReceiver_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.device.mojom.HidManager.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.HidManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.HidManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HidManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDevicesAndSetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_GetDevices_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_Connect_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_AddReceiver_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevicesAndSetClient');
          const result = this.impl.getDevicesAndSetClient(params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.HidManager_GetDevicesAndSetClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDevicesAndSetClient FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_GetDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDevices');
          const result = this.impl.getDevices();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.HidManager_GetDevices_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDevices FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.arg_device_guid, params.arg_connection_client, params.arg_watcher, params.arg_allow_protected_reports, params.arg_allow_fido_reports);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.HidManager_Connect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Connect FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidManager_AddReceiver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addReceiver');
          const result = this.impl.addReceiver(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.HidManagerReceiver = mojo.internal.bindings.device.mojom.HidManagerReceiver;

mojo.internal.bindings.device.mojom.HidManagerPtr = mojo.internal.bindings.device.mojom.HidManagerRemote;
mojo.internal.bindings.device.mojom.HidManagerRequest = mojo.internal.bindings.device.mojom.HidManagerPendingReceiver;


// Interface: HidConnection
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_Read_ParamsSpec, 'device.mojom.HidConnection_Read_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_Read_ResponseParamsSpec, 'device.mojom.HidConnection_Read_ResponseParams', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_report_id', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_Write_ParamsSpec, 'device.mojom.HidConnection_Write_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_Write_ResponseParamsSpec, 'device.mojom.HidConnection_Write_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ParamsSpec, 'device.mojom.HidConnection_GetFeatureReport_Params', [
      mojo.internal.StructField('arg_report_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec, 'device.mojom.HidConnection_GetFeatureReport_ResponseParams', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ParamsSpec, 'device.mojom.HidConnection_SendFeatureReport_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec, 'device.mojom.HidConnection_SendFeatureReport_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.HidConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.HidConnectionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.HidConnectionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.HidConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  read() {
    return this.$.read();
  }
  write(arg_report_id, arg_buffer) {
    return this.$.write(arg_report_id, arg_buffer);
  }
  getFeatureReport(arg_report_id) {
    return this.$.getFeatureReport(arg_report_id);
  }
  sendFeatureReport(arg_report_id, arg_buffer) {
    return this.$.sendFeatureReport(arg_report_id, arg_buffer);
  }
};

mojo.internal.bindings.device.mojom.HidConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HidConnection', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  read() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.HidConnection_Read_ParamsSpec,
      mojo.internal.bindings.device.mojom.HidConnection_Read_ResponseParamsSpec,
      [],
      false);
  }

  write(arg_report_id, arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.HidConnection_Write_ParamsSpec,
      mojo.internal.bindings.device.mojom.HidConnection_Write_ResponseParamsSpec,
      [arg_report_id, arg_buffer],
      false);
  }

  getFeatureReport(arg_report_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ParamsSpec,
      mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec,
      [arg_report_id],
      false);
  }

  sendFeatureReport(arg_report_id, arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ParamsSpec,
      mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec,
      [arg_report_id, arg_buffer],
      false);
  }

};

mojo.internal.bindings.device.mojom.HidConnection.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.HidConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnection',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.HidConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HidConnection', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_Read_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_Write_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_Read_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.HidConnection_Read_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Read FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_Write_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.write');
          const result = this.impl.write(params.arg_report_id, params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.HidConnection_Write_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Write FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeatureReport');
          const result = this.impl.getFeatureReport(params.arg_report_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.HidConnection_GetFeatureReport_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFeatureReport FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendFeatureReport');
          const result = this.impl.sendFeatureReport(params.arg_report_id, params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.HidConnection_SendFeatureReport_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SendFeatureReport FAILED:', e));
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

mojo.internal.bindings.device.mojom.HidConnectionReceiver = mojo.internal.bindings.device.mojom.HidConnectionReceiver;

mojo.internal.bindings.device.mojom.HidConnectionPtr = mojo.internal.bindings.device.mojom.HidConnectionRemote;
mojo.internal.bindings.device.mojom.HidConnectionRequest = mojo.internal.bindings.device.mojom.HidConnectionPendingReceiver;


// Interface: HidConnectionClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.HidConnectionClient_OnInputReport_ParamsSpec, 'device.mojom.HidConnectionClient_OnInputReport_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_report_id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.device.mojom.HidConnectionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.HidConnectionClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.HidConnectionClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.HidConnectionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onInputReport(arg_report_id, arg_buffer) {
    return this.$.onInputReport(arg_report_id, arg_buffer);
  }
};

mojo.internal.bindings.device.mojom.HidConnectionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HidConnectionClient', [
      { explicit: 0 },
    ]);
  }

  onInputReport(arg_report_id, arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.HidConnectionClient_OnInputReport_ParamsSpec,
      null,
      [arg_report_id, arg_buffer],
      false);
  }

};

mojo.internal.bindings.device.mojom.HidConnectionClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.HidConnectionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.HidConnectionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HidConnectionClient', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnInputReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnectionClient_OnInputReport_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.HidConnectionClient_OnInputReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInputReport');
          const result = this.impl.onInputReport(params.arg_report_id, params.arg_buffer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.HidConnectionClientReceiver = mojo.internal.bindings.device.mojom.HidConnectionClientReceiver;

mojo.internal.bindings.device.mojom.HidConnectionClientPtr = mojo.internal.bindings.device.mojom.HidConnectionClientRemote;
mojo.internal.bindings.device.mojom.HidConnectionClientRequest = mojo.internal.bindings.device.mojom.HidConnectionClientPendingReceiver;


// Interface: HidConnectionWatcher
mojo.internal.bindings.device.mojom.HidConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.HidConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.HidConnectionWatcherPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.HidConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.device.mojom.HidConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HidConnectionWatcher', [
    ]);
  }

};

mojo.internal.bindings.device.mojom.HidConnectionWatcher.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.HidConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionWatcher',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.HidConnectionWatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HidConnectionWatcher', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
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

mojo.internal.bindings.device.mojom.HidConnectionWatcherReceiver = mojo.internal.bindings.device.mojom.HidConnectionWatcherReceiver;

mojo.internal.bindings.device.mojom.HidConnectionWatcherPtr = mojo.internal.bindings.device.mojom.HidConnectionWatcherRemote;
mojo.internal.bindings.device.mojom.HidConnectionWatcherRequest = mojo.internal.bindings.device.mojom.HidConnectionWatcherPendingReceiver;

