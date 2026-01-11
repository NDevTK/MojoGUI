// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/settings/public/constants/routes.mojom
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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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

mojo.internal.bindings.chromeos.settings.mojom.SectionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.settings.mojom.SubpageSpec = { $: mojo.internal.Enum() };

mojo.internal.bindings.chromeos.settings.mojom.kNetworkSectionPath = "internet";

mojo.internal.bindings.chromeos.settings.mojom.kEthernetDetailsSubpagePath = "networkDetail";

mojo.internal.bindings.chromeos.settings.mojom.kNetworksSubpageBasePath = "networks";

mojo.internal.bindings.chromeos.settings.mojom.kWifiNetworksSubpagePath = "networks?type=WiFi";

mojo.internal.bindings.chromeos.settings.mojom.kCellularNetworksSubpagePath = "networks?type=Cellular";

mojo.internal.bindings.chromeos.settings.mojom.kMobileDataNetworksSubpagePath = "networks?type=Tether";

mojo.internal.bindings.chromeos.settings.mojom.kKnownNetworksSubpagePath = "knownNetworks";

mojo.internal.bindings.chromeos.settings.mojom.kWifiDetailsSubpagePath = "networkDetail";

mojo.internal.bindings.chromeos.settings.mojom.kCellularDetailsSubpagePath = "networkDetail";

mojo.internal.bindings.chromeos.settings.mojom.kTetherDetailsSubpagePath = "networkDetail";

mojo.internal.bindings.chromeos.settings.mojom.kVpnDetailsSubpagePath = "networkDetail";

mojo.internal.bindings.chromeos.settings.mojom.kApnSubpagePath = "apn";

mojo.internal.bindings.chromeos.settings.mojom.kHotspotSubpagePath = "hotspotDetail";

mojo.internal.bindings.chromeos.settings.mojom.kPasspointDetailSubpagePath = "passpointDetail";

mojo.internal.bindings.chromeos.settings.mojom.kBluetoothSectionPath = "bluetooth";

mojo.internal.bindings.chromeos.settings.mojom.kBluetoothDevicesSubpagePath = "bluetoothDevices";

mojo.internal.bindings.chromeos.settings.mojom.kBluetoothDeviceDetailSubpagePath = "bluetoothDeviceDetail";

mojo.internal.bindings.chromeos.settings.mojom.kBluetoothSavedDevicesSubpagePath = "bluetoothSavedDevices";

mojo.internal.bindings.chromeos.settings.mojom.kMultiDeviceSectionPath = "multidevice";

mojo.internal.bindings.chromeos.settings.mojom.kMultiDeviceFeaturesSubpagePath = "multidevice/features";

mojo.internal.bindings.chromeos.settings.mojom.kNearbyShareSubpagePath = "multidevice/nearbyshare";

mojo.internal.bindings.chromeos.settings.mojom.kPeopleSectionPath = "osPeople";

mojo.internal.bindings.chromeos.settings.mojom.kSyncSetupSubpagePath = "osSyncSetup";

mojo.internal.bindings.chromeos.settings.mojom.kSyncControlsSubpagePath = "osSync";

mojo.internal.bindings.chromeos.settings.mojom.kSyncDeprecatedAdvancedSubpagePath = "osSyncSetup/advanced";

mojo.internal.bindings.chromeos.settings.mojom.kDeviceSectionPath = "device";

mojo.internal.bindings.chromeos.settings.mojom.kPointersSubpagePath = "pointer-overlay";

mojo.internal.bindings.chromeos.settings.mojom.kPerDeviceKeyboardSubpagePath = "per-device-keyboard";

mojo.internal.bindings.chromeos.settings.mojom.kPerDeviceKeyboardRemapKeysSubpagePath = "per-device-keyboard/remap-keys";

mojo.internal.bindings.chromeos.settings.mojom.kPerDeviceMouseSubpagePath = "per-device-mouse";

mojo.internal.bindings.chromeos.settings.mojom.kCustomizeMouseButtonsSubpagePath = "per-device-mouse/customizeButtons";

mojo.internal.bindings.chromeos.settings.mojom.kPerDevicePointingStickSubpagePath = "per-device-pointing-stick";

mojo.internal.bindings.chromeos.settings.mojom.kPerDeviceTouchpadSubpagePath = "per-device-touchpad";

mojo.internal.bindings.chromeos.settings.mojom.kKeyboardSubpagePath = "keyboard-overlay";

mojo.internal.bindings.chromeos.settings.mojom.kStylusSubpagePath = "stylus";

mojo.internal.bindings.chromeos.settings.mojom.kDisplaySubpagePath = "display";

mojo.internal.bindings.chromeos.settings.mojom.kAudioSubpagePath = "audio";

mojo.internal.bindings.chromeos.settings.mojom.kStorageSubpagePath = "storage";

mojo.internal.bindings.chromeos.settings.mojom.kExternalStorageSubpagePath = "storage/externalStoragePreferences";

mojo.internal.bindings.chromeos.settings.mojom.kPowerSubpagePath = "power";

mojo.internal.bindings.chromeos.settings.mojom.kGraphicsTabletSubpagePath = "graphics-tablet";

mojo.internal.bindings.chromeos.settings.mojom.kCustomizeTabletButtonsSubpagePath = "graphics-tablet/customizeTabletButtons";

mojo.internal.bindings.chromeos.settings.mojom.kCustomizePenButtonsSubpagePath = "graphics-tablet/customizePenButtons";

mojo.internal.bindings.chromeos.settings.mojom.kPersonalizationSectionPath = "personalization";

mojo.internal.bindings.chromeos.settings.mojom.kSearchSubpagePath = "osSearch/search";

mojo.internal.bindings.chromeos.settings.mojom.kAppsSectionPath = "apps";

mojo.internal.bindings.chromeos.settings.mojom.kAppManagementSubpagePath = "app-management";

mojo.internal.bindings.chromeos.settings.mojom.kAppNotificationsSubpagePath = "app-notifications";

mojo.internal.bindings.chromeos.settings.mojom.kAppNotificationsManagerSubpagePath = "app-notifications-manager";

mojo.internal.bindings.chromeos.settings.mojom.kAppDetailsSubpagePath = "app-management/detail";

mojo.internal.bindings.chromeos.settings.mojom.kGooglePlayStoreSubpagePath = "androidAppsDetails";

mojo.internal.bindings.chromeos.settings.mojom.kPluginVmSharedPathsSubpagePath = "app-management/pluginVm/sharedPaths";

mojo.internal.bindings.chromeos.settings.mojom.kPluginVmUsbPreferencesSubpagePath = "app-management/pluginVm/sharedUsbDevices";

mojo.internal.bindings.chromeos.settings.mojom.kArcVmUsbPreferencesSubpagePath = "androidAppsDetails/sharedUsbDevices";

mojo.internal.bindings.chromeos.settings.mojom.kManageIsolatedWebAppsSubpagePath = "manage-isolated-web-apps";

mojo.internal.bindings.chromeos.settings.mojom.kAppParentalControlsSubpagePath = "app-parental-controls";

mojo.internal.bindings.chromeos.settings.mojom.kCrostiniDetailsSubpagePath = "crostini/details";

mojo.internal.bindings.chromeos.settings.mojom.kCrostiniManageSharedFoldersSubpagePath = "crostini/sharedPaths";

mojo.internal.bindings.chromeos.settings.mojom.kCrostiniUsbPreferencesSubpagePath = "crostini/sharedUsbDevices";

mojo.internal.bindings.chromeos.settings.mojom.kCrostiniBackupAndRestoreSubpagePath = "crostini/exportImport";

mojo.internal.bindings.chromeos.settings.mojom.kCrostiniPortForwardingSubpagePath = "crostini/portForwarding";

mojo.internal.bindings.chromeos.settings.mojom.kCrostiniExtraContainersSubpagePath = "crostini/extraContainers";

mojo.internal.bindings.chromeos.settings.mojom.kBruschettaDetailsSubpagePath = "bruschetta/details";

mojo.internal.bindings.chromeos.settings.mojom.kBruschettaUsbPreferencesSubpagePath = "bruschetta/sharedUsbDevices";

mojo.internal.bindings.chromeos.settings.mojom.kBruschettaManageSharedFoldersSubpagePath = "bruschetta/sharedPaths";

mojo.internal.bindings.chromeos.settings.mojom.kTimeZoneSubpagePath = "dateTime/timeZone";

mojo.internal.bindings.chromeos.settings.mojom.kPrivacyAndSecuritySectionPath = "osPrivacy";

mojo.internal.bindings.chromeos.settings.mojom.kManageOtherPeopleSubpagePathV2 = "osPrivacy/accounts";

mojo.internal.bindings.chromeos.settings.mojom.kSecurityAndSignInSubpagePathV2 = "osPrivacy/lockScreen";

mojo.internal.bindings.chromeos.settings.mojom.kFingerprintSubpagePathV2 = "osPrivacy/lockScreen/fingerprint";

mojo.internal.bindings.chromeos.settings.mojom.kSmartPrivacySubpagePath = "osPrivacy/smartPrivacy";

mojo.internal.bindings.chromeos.settings.mojom.kPrivacyHubSubpagePath = "osPrivacy/privacyHub";

mojo.internal.bindings.chromeos.settings.mojom.kPrivacyHubMicrophoneSubpagePath = "osPrivacy/privacyHub/microphone";

mojo.internal.bindings.chromeos.settings.mojom.kPrivacyHubCameraSubpagePath = "osPrivacy/privacyHub/camera";

mojo.internal.bindings.chromeos.settings.mojom.kPrivacyHubGeolocationSubpagePath = "osPrivacy/privacyHub/geolocation";

mojo.internal.bindings.chromeos.settings.mojom.kPrivacyHubGeolocationAdvancedSubpagePath = "osPrivacy/privacyHub/geolocation/advanced";

mojo.internal.bindings.chromeos.settings.mojom.kInputMethodOptionsSubpagePath = "osLanguages/inputMethodOptions";

mojo.internal.bindings.chromeos.settings.mojom.kLanguagesSubpagePath = "osLanguages/languages";

mojo.internal.bindings.chromeos.settings.mojom.kInputSubpagePath = "osLanguages/input";

mojo.internal.bindings.chromeos.settings.mojom.kEditDictionarySubpagePath = "osLanguages/editDictionary";

mojo.internal.bindings.chromeos.settings.mojom.kJapaneseManageUserDictionarySubpagePath = "osLanguages/japaneseManageUserDictionary";

mojo.internal.bindings.chromeos.settings.mojom.kAppLanguagesSubpagePath = "osLanguages/languages/appLanguages";

mojo.internal.bindings.chromeos.settings.mojom.kGoogleDriveSubpagePath = "googleDrive";

mojo.internal.bindings.chromeos.settings.mojom.kOneDriveSubpagePath = "oneDrive";

mojo.internal.bindings.chromeos.settings.mojom.kOfficeFilesSubpagePath = "officeFiles";

mojo.internal.bindings.chromeos.settings.mojom.kNetworkFileSharesSubpagePath = "smbShares";

mojo.internal.bindings.chromeos.settings.mojom.kPrintingDetailsSubpagePath = "cupsPrinters";

mojo.internal.bindings.chromeos.settings.mojom.kAccessibilitySectionPath = "osAccessibility";

mojo.internal.bindings.chromeos.settings.mojom.kManageAccessibilitySubpagePath = "manageAccessibility";

mojo.internal.bindings.chromeos.settings.mojom.kTextToSpeechPagePath = "textToSpeech";

mojo.internal.bindings.chromeos.settings.mojom.kDisplayAndMagnificationSubpagePath = "displayAndMagnification";

mojo.internal.bindings.chromeos.settings.mojom.kKeyboardAndTextInputSubpagePath = "keyboardAndTextInput";

mojo.internal.bindings.chromeos.settings.mojom.kCursorAndTouchpadSubpagePath = "cursorAndTouchpad";

mojo.internal.bindings.chromeos.settings.mojom.kSelectToSpeakSubpagePath = "textToSpeech/selectToSpeak";

mojo.internal.bindings.chromeos.settings.mojom.kChromeVoxSubpagePath = "textToSpeech/chromeVox";

mojo.internal.bindings.chromeos.settings.mojom.kAudioAndCaptionsSubpagePath = "audioAndCaptions";

mojo.internal.bindings.chromeos.settings.mojom.kTextToSpeechSubpagePath = "manageAccessibility/tts";

mojo.internal.bindings.chromeos.settings.mojom.kSwitchAccessOptionsSubpagePath = "manageAccessibility/switchAccess";

mojo.internal.bindings.chromeos.settings.mojom.kFaceGazeSettingsSubpagePath = "manageAccessibility/faceGaze";

mojo.internal.bindings.chromeos.settings.mojom.kMouseKeysSettingsSubpagePath = "manageAccessibility/mouseKeys";

mojo.internal.bindings.chromeos.settings.mojom.kAboutChromeOsSectionPath = "help";

mojo.internal.bindings.chromeos.settings.mojom.kDetailedBuildInfoSubpagePath = "help/details";

mojo.internal.bindings.chromeos.settings.mojom.kKerberosSectionPath = "kerberos";

mojo.internal.bindings.chromeos.settings.mojom.kKerberosAccountsV2SubpagePath = "kerberos/kerberosAccounts";

mojo.internal.bindings.chromeos.settings.mojom.kSystemPreferencesSectionPath = "systemPreferences";

mojo.internal.bindings.chromeos.settings.mojom.kInternalStorybookSubpagePath = "_internal/_storybook";

// Enum: Section
mojo.internal.bindings.chromeos.settings.mojom.Section = {
  kNetwork: 0,
  kBluetooth: 1,
  kMultiDevice: 2,
  kPeople: 3,
  kDevice: 4,
  kPersonalization: 5,
  kApps: 7,
  kPrivacyAndSecurity: 11,
  kAccessibility: 15,
  kAboutChromeOs: 17,
  kKerberos: 18,
  kSystemPreferences: 19,
};

// Enum: Subpage
mojo.internal.bindings.chromeos.settings.mojom.Subpage = {
  kEthernetDetails: 0,
  kWifiNetworks: 1,
  kWifiDetails: 2,
  kKnownNetworks: 3,
  kMobileDataNetworks: 4,
  kCellularDetails: 5,
  kTetherDetails: 6,
  kVpnDetails: 7,
  kApn: 8,
  kHotspotDetails: 9,
  kPasspointDetails: 10,
  kBluetoothDevices: 100,
  kBluetoothDeviceDetail: 101,
  kBluetoothSavedDevices: 102,
  kMultiDeviceFeatures: 200,
  kNearbyShare: 202,
  kSyncControls: 301,
  kSyncSetup: 302,
  kSyncDeprecatedAdvanced: 303,
  kPointers: 400,
  kKeyboard: 401,
  kStylus: 402,
  kDisplay: 403,
  kStorage: 404,
  kExternalStorage: 405,
  kPower: 407,
  kAudio: 408,
  kPerDeviceKeyboard: 409,
  kPerDeviceMouse: 410,
  kPerDeviceTouchpad: 411,
  kPerDevicePointingStick: 412,
  kPerDeviceKeyboardRemapKeys: 413,
  kGraphicsTablet: 414,
  kCustomizeMouseButtons: 415,
  kCustomizeTabletButtons: 416,
  kCustomizePenButtons: 417,
  kSearch: 601,
  kAppManagement: 700,
  kAppDetails: 701,
  kGooglePlayStore: 702,
  kPluginVmSharedPaths: 703,
  kPluginVmUsbPreferences: 704,
  kAppNotifications: 706,
  kArcVmUsbPreferences: 707,
  kManageIsolatedWebApps: 708,
  kAppNotificationsManager: 709,
  kAppParentalControls: 710,
  kCrostiniDetails: 800,
  kCrostiniManageSharedFolders: 801,
  kCrostiniUsbPreferences: 802,
  kCrostiniBackupAndRestore: 803,
  kCrostiniPortForwarding: 805,
  kCrostiniExtraContainers: 806,
  kBruschettaDetails: 850,
  kBruschettaUsbPreferences: 851,
  kBruschettaManageSharedFolders: 852,
  kTimeZone: 1000,
  kManageOtherPeopleV2: 1100,
  kSecurityAndSignInV2: 1101,
  kFingerprintV2: 1102,
  kSmartPrivacy: 1103,
  kPrivacyHub: 1104,
  kPrivacyHubMicrophone: 1105,
  kPrivacyHubCamera: 1106,
  kPrivacyHubGeolocation: 1107,
  kPrivacyHubGeolocationAdvanced: 1108,
  kInputMethodOptions: 1203,
  kLanguages: 1204,
  kInput: 1205,
  kEditDictionary: 1206,
  kJapaneseManageUserDictionary: 1207,
  kAppLanguages: 1208,
  kNetworkFileShares: 1300,
  kOfficeFiles: 1301,
  kGoogleDrive: 1302,
  kOneDrive: 1303,
  kPrintingDetails: 1400,
  kManageAccessibility: 1500,
  kTextToSpeech: 1502,
  kSwitchAccessOptions: 1503,
  kTextToSpeechPage: 1505,
  kDisplayAndMagnification: 1506,
  kKeyboardAndTextInput: 1507,
  kCursorAndTouchpad: 1508,
  kAudioAndCaptions: 1509,
  kSelectToSpeak: 1510,
  kChromeVox: 1511,
  kFaceGazeSettings: 1512,
  kMouseKeysSettings: 1513,
  kDetailedBuildInfo: 1701,
  kInternalStorybook: 1702,
  kKerberosAccountsV2: 1800,
};
