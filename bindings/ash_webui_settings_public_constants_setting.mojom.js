// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/settings/public/constants/setting.mojom
 // Module: chromeos.settings.mojom

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
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.settings = mojo.internal.bindings.chromeos.settings || {};
mojo.internal.bindings.chromeos.settings.mojom = mojo.internal.bindings.chromeos.settings.mojom || {};

mojo.internal.bindings.chromeos.settings.mojom.SettingSpec = { $: mojo.internal.Enum() };

// Enum: Setting
mojo.internal.bindings.chromeos.settings.mojom.Setting = {
  kConfigureEthernet: 0,
  kEthernetAutoConfigureIp: 1,
  kEthernetDns: 2,
  kEthernetProxy: 3,
  kWifiOnOff: 4,
  kDisconnectWifiNetwork: 5,
  kPreferWifiNetwork: 6,
  kForgetWifiNetwork: 7,
  kWifiAddNetwork: 8,
  kWifiAutoConfigureIp: 9,
  kWifiDns: 10,
  kWifiProxy: 11,
  kWifiAutoConnectToNetwork: 12,
  kMobileOnOff: 13,
  kCellularSimLock: 14,
  kCellularRoaming: 15,
  kCellularApn: 16,
  kDisconnectCellularNetwork: 17,
  kCellularAutoConfigureIp: 18,
  kCellularDns: 19,
  kCellularProxy: 20,
  kCellularAutoConnectToNetwork: 21,
  kInstantTetheringOnOff: 22,
  kDisconnectTetherNetwork: 23,
  kWifiMetered: 24,
  kCellularMetered: 25,
  kAddESimNetwork: 26,
  kCellularRemoveESimNetwork: 27,
  kCellularRenameESimNetwork: 28,
  kWifiHidden: 29,
  kHotspotOnOff: 30,
  kHotspotAutoDisabled: 31,
  kCellularAddApn: 32,
  kBluetoothOnOff: 100,
  kBluetoothPairDevice: 103,
  kBluetoothUnpairDevice: 104,
  kFastPairOnOff: 105,
  kFastPairSavedDevices: 106,
  kSetUpMultiDevice: 200,
  kVerifyMultiDeviceSetup: 201,
  kMultiDeviceOnOff: 202,
  kSmartLockOnOff: 203,
  kForgetPhone: 207,
  kNearbyShareOnOff: 208,
  kPhoneHubOnOff: 209,
  kPhoneHubNotificationsOnOff: 210,
  kPhoneHubTaskContinuationOnOff: 212,
  kWifiSyncOnOff: 213,
  kNearbyShareDeviceName: 214,
  kNearbyShareDeviceVisibility: 215,
  kNearbyShareContacts: 216,
  kNearbyShareDataUsage: 217,
  kPhoneHubAppsOnOff: 218,
  kPhoneHubCameraRollOnOff: 219,
  kDevicesNearbyAreSharingNotificationOnOff: 220,
  kAddAccount: 300,
  kRemoveAccount: 301,
  kSplitSyncOnOff: 302,
  kSetUpParentalControls: 315,
  kNonSplitSyncEncryptionOptions: 316,
  kImproveSearchSuggestions: 317,
  kMakeSearchesAndBrowsingBetter: 318,
  kGoogleDriveSearchSuggestions: 319,
  kGraduation: 320,
  kTouchpadTapToClick: 400,
  kTouchpadTapDragging: 401,
  kTouchpadReverseScrolling: 402,
  kTouchpadAcceleration: 403,
  kTouchpadScrollAcceleration: 404,
  kTouchpadSpeed: 405,
  kMouseSwapPrimaryButtons: 406,
  kMouseReverseScrolling: 407,
  kMouseAcceleration: 408,
  kMouseScrollAcceleration: 409,
  kMouseSpeed: 410,
  kKeyboardFunctionKeys: 411,
  kKeyboardAutoRepeat: 412,
  kKeyboardShortcuts: 413,
  kDisplaySize: 414,
  kNightLight: 415,
  kStylusToolsInShelf: 416,
  kStylusNoteTakingApp: 417,
  kDisplayOrientation: 420,
  kDisplayArrangement: 421,
  kPowerIdleBehaviorWhileCharging: 422,
  kPowerSource: 423,
  kSleepWhenLaptopLidClosed: 424,
  kDisplayResolution: 425,
  kDisplayRefreshRate: 426,
  kDisplayMirroring: 428,
  kAllowWindowsToSpanDisplays: 429,
  kAmbientColors: 430,
  kTouchscreenCalibration: 431,
  kNightLightColorTemperature: 432,
  kPowerIdleBehaviorWhileOnBattery: 433,
  kDisplayOverscan: 434,
  kPointingStickSpeed: 435,
  kPointingStickAcceleration: 436,
  kPointingStickSwapPrimaryButtons: 437,
  kTouchpadHapticFeedback: 438,
  kTouchpadHapticClickSensitivity: 439,
  kAdaptiveCharging: 440,
  kKeyboardBlockMetaFkeyRewrites: 441,
  kKeyboardRemapKeys: 442,
  kChargingSounds: 443,
  kLowBatterySound: 444,
  kBatterySaver: 445,
  kTouchpadSimulateRightClick: 446,
  kOptimizedCharging: 447,
  kChargeLimit: 448,
  kOpenWallpaper: 500,
  kPreferredSearchEngine: 600,
  kQuickAnswersOnOff: 608,
  kQuickAnswersDefinition: 609,
  kQuickAnswersTranslation: 610,
  kQuickAnswersUnitConversion: 611,
  kMahiOnOff: 612,
  kMagicBoostOnOff: 613,
  kLobsterOnOff: 614,
  kSunfishOnOff: 615,
  kScannerOnOff: 616,
  kManageAndroidPreferences: 700,
  kRemovePlayStore: 701,
  kTurnOnPlayStore: 702,
  kRestoreAppsAndPages: 703,
  kDoNotDisturbOnOff: 704,
  kAppBadgingOnOff: 705,
  kEnableIsolatedWebAppsOnOff: 706,
  kAppNotificationOnOff: 707,
  kAppPinToShelfOnOff: 708,
  kAppResizeLockOnOff: 709,
  kAppParentalControls: 710,
  kSetUpCrostini: 800,
  kUninstallCrostini: 801,
  kBackupLinuxAppsAndFiles: 802,
  kRestoreLinuxAppsAndFiles: 803,
  kCrostiniDiskResize: 805,
  kCrostiniMicAccess: 806,
  kBruschettaMicAccess: 808,
  kGuestUsbNotification: 809,
  kGuestUsbPersistentPassthrough: 810,
  k24HourClock: 1000,
  kChangeTimeZone: 1001,
  kVerifiedAccess: 1101,
  kUsageStatsAndCrashReports: 1103,
  kGuestBrowsingV2: 1104,
  kShowUsernamesAndPhotosAtSignInV2: 1105,
  kRestrictSignInV2: 1106,
  kAddToUserAllowlistV2: 1107,
  kRemoveFromUserAllowlistV2: 1108,
  kLockScreenV2: 1109,
  kChangeAuthPinV2: 1110,
  kAddFingerprintV2: 1111,
  kRemoveFingerprintV2: 1112,
  kPeripheralDataAccessProtection: 1113,
  kSnoopingProtection: 1114,
  kQuickDim: 1115,
  kCameraOnOff: 1116,
  kMicrophoneOnOff: 1117,
  kGeolocationOnOff: 1118,
  kLockScreenNotification: 1119,
  kSpeakOnMuteDetectionOnOff: 1120,
  kDataRecovery: 1121,
  kRevenEnableHwDataUsage: 1122,
  kGeolocationAdvanced: 1123,
  kAddLanguage: 1200,
  kShowInputOptionsInShelf: 1201,
  kChangeDeviceLanguage: 1204,
  kOfferTranslation: 1205,
  kAddInputMethod: 1206,
  kSpellCheckOnOff: 1207,
  kShowPKAutoCorrection: 1209,
  kShowVKAutoCorrection: 1210,
  kShowDiacritic: 1211,
  kShowOrca: 1212,
  kRemoveInputMethod: 1213,
  kSetCurrentInputMethod: 1214,
  kAddSpellCheckLanguage: 1215,
  kRemoveSpellCheckLanguage: 1216,
  kAddSpellCheckWord: 1217,
  kRemoveSpellCheckWord: 1218,
  kRemoveLanguage: 1219,
  kMoveLanguageToFront: 1220,
  kMoveLanguageUp: 1221,
  kMoveLanguageDown: 1222,
  kEnableTranslateLanguage: 1223,
  kDisableTranslateLanguage: 1224,
  kGoogleDriveConnection: 1300,
  kGoogleDriveRemoveAccess: 1301,
  kGoogleDriveFileSync: 1302,
  kAddPrinter: 1400,
  kSavedPrinters: 1401,
  kPrintJobs: 1402,
  kScanningApp: 1403,
  kRemovePrinter: 1404,
  kA11yQuickSettings: 1500,
  kChromeVox: 1501,
  kSelectToSpeak: 1502,
  kTextToSpeechRate: 1503,
  kTextToSpeechPitch: 1504,
  kTextToSpeechVolume: 1505,
  kTextToSpeechVoice: 1506,
  kTextToSpeechEngines: 1507,
  kHighContrastMode: 1508,
  kFullscreenMagnifier: 1509,
  kDockedMagnifier: 1510,
  kStickyKeys: 1511,
  kOnScreenKeyboard: 1512,
  kDictation: 1513,
  kHighlightKeyboardFocus: 1514,
  kHighlightTextCaret: 1515,
  kAutoClickWhenCursorStops: 1516,
  kLargeCursor: 1517,
  kHighlightCursorWhileMoving: 1518,
  kTabletNavigationButtons: 1519,
  kMonoAudio: 1520,
  kStartupSound: 1521,
  kEnableSwitchAccess: 1522,
  kSwitchActionAssignment: 1523,
  kSwitchActionAutoScan: 1524,
  kSwitchActionAutoScanKeyboard: 1525,
  kGetImageDescriptionsFromGoogle: 1526,
  kLiveCaption: 1527,
  kEnableCursorColor: 1528,
  kFullscreenMagnifierFocusFollowing: 1529,
  kFullscreenMagnifierMouseFollowingMode: 1530,
  kSelectToSpeakWordHighlight: 1531,
  kSelectToSpeakBackgroundShading: 1532,
  kSelectToSpeakNavigationControls: 1533,
  kColorCorrectionEnabled: 1534,
  kColorCorrectionFilterType: 1535,
  kColorCorrectionFilterAmount: 1536,
  kReducedAnimationsEnabled: 1537,
  kMouseKeysEnabled: 1538,
  kMouseKeysShortcutToPauseEnabled: 1539,
  kMouseKeysDisableInTextFields: 1540,
  kMouseKeysAcceleration: 1541,
  kMouseKeysMaxSpeed: 1542,
  kMouseKeysDominantHand: 1543,
  kCaretBlinkInterval: 1544,
  kAccessibilityMagnifierFollowsSts: 1545,
  kOverscrollEnabled: 1547,
  kCaretBrowsing: 1548,
  kMagnifierFollowsChromeVox: 1549,
  kMainNodeAnnotationsEnabled: 1550,
  kFlashNotifications: 1551,
  kAlwaysShowScrollbarsEnabled: 1552,
  kFaceGaze: 1553,
  kBounceKeys: 1554,
  kSlowKeys: 1555,
  kDisableTouchpad: 1556,
  kPowerwash: 1600,
  kSanitizeCrosSettings: 1601,
  kChangeChromeChannel: 1700,
  kCopyDetailedBuildInfo: 1701,
  kCheckForOsUpdate: 1702,
  kSeeWhatsNew: 1703,
  kGetHelpWithChromeOs: 1704,
  kReportAnIssue: 1705,
  kTermsOfService: 1706,
  kDiagnostics: 1707,
  kFirmwareUpdates: 1709,
  kAddKerberosTicketV2: 1800,
  kRemoveKerberosTicketV2: 1801,
  kSetActiveKerberosTicketV2: 1802,
  kSnapWindowSuggestions: 1900,
};
