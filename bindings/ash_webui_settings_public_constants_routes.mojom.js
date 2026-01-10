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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var chromeos = chromeos || {};
chromeos.settings = chromeos.settings || {};
chromeos.settings.mojom = chromeos.settings.mojom || {};

chromeos.settings.mojom.SectionSpec = { $: mojo.internal.Enum() };
chromeos.settings.mojom.SubpageSpec = { $: mojo.internal.Enum() };

chromeos.settings.mojom.kNetworkSectionPath = "internet";

chromeos.settings.mojom.kEthernetDetailsSubpagePath = "networkDetail";

chromeos.settings.mojom.kNetworksSubpageBasePath = "networks";

chromeos.settings.mojom.kWifiNetworksSubpagePath = "networks?type=WiFi";

chromeos.settings.mojom.kCellularNetworksSubpagePath = "networks?type=Cellular";

chromeos.settings.mojom.kMobileDataNetworksSubpagePath = "networks?type=Tether";

chromeos.settings.mojom.kKnownNetworksSubpagePath = "knownNetworks";

chromeos.settings.mojom.kWifiDetailsSubpagePath = "networkDetail";

chromeos.settings.mojom.kCellularDetailsSubpagePath = "networkDetail";

chromeos.settings.mojom.kTetherDetailsSubpagePath = "networkDetail";

chromeos.settings.mojom.kVpnDetailsSubpagePath = "networkDetail";

chromeos.settings.mojom.kApnSubpagePath = "apn";

chromeos.settings.mojom.kHotspotSubpagePath = "hotspotDetail";

chromeos.settings.mojom.kPasspointDetailSubpagePath = "passpointDetail";

chromeos.settings.mojom.kBluetoothSectionPath = "bluetooth";

chromeos.settings.mojom.kBluetoothDevicesSubpagePath = "bluetoothDevices";

chromeos.settings.mojom.kBluetoothDeviceDetailSubpagePath = "bluetoothDeviceDetail";

chromeos.settings.mojom.kBluetoothSavedDevicesSubpagePath = "bluetoothSavedDevices";

chromeos.settings.mojom.kMultiDeviceSectionPath = "multidevice";

chromeos.settings.mojom.kMultiDeviceFeaturesSubpagePath = "multidevice/features";

chromeos.settings.mojom.kNearbyShareSubpagePath = "multidevice/nearbyshare";

chromeos.settings.mojom.kPeopleSectionPath = "osPeople";

chromeos.settings.mojom.kSyncSetupSubpagePath = "osSyncSetup";

chromeos.settings.mojom.kSyncControlsSubpagePath = "osSync";

chromeos.settings.mojom.kSyncDeprecatedAdvancedSubpagePath = "osSyncSetup/advanced";

chromeos.settings.mojom.kDeviceSectionPath = "device";

chromeos.settings.mojom.kPointersSubpagePath = "pointer-overlay";

chromeos.settings.mojom.kPerDeviceKeyboardSubpagePath = "per-device-keyboard";

chromeos.settings.mojom.kPerDeviceKeyboardRemapKeysSubpagePath = "per-device-keyboard/remap-keys";

chromeos.settings.mojom.kPerDeviceMouseSubpagePath = "per-device-mouse";

chromeos.settings.mojom.kCustomizeMouseButtonsSubpagePath = "per-device-mouse/customizeButtons";

chromeos.settings.mojom.kPerDevicePointingStickSubpagePath = "per-device-pointing-stick";

chromeos.settings.mojom.kPerDeviceTouchpadSubpagePath = "per-device-touchpad";

chromeos.settings.mojom.kKeyboardSubpagePath = "keyboard-overlay";

chromeos.settings.mojom.kStylusSubpagePath = "stylus";

chromeos.settings.mojom.kDisplaySubpagePath = "display";

chromeos.settings.mojom.kAudioSubpagePath = "audio";

chromeos.settings.mojom.kStorageSubpagePath = "storage";

chromeos.settings.mojom.kExternalStorageSubpagePath = "storage/externalStoragePreferences";

chromeos.settings.mojom.kPowerSubpagePath = "power";

chromeos.settings.mojom.kGraphicsTabletSubpagePath = "graphics-tablet";

chromeos.settings.mojom.kCustomizeTabletButtonsSubpagePath = "graphics-tablet/customizeTabletButtons";

chromeos.settings.mojom.kCustomizePenButtonsSubpagePath = "graphics-tablet/customizePenButtons";

chromeos.settings.mojom.kPersonalizationSectionPath = "personalization";

chromeos.settings.mojom.kSearchSubpagePath = "osSearch/search";

chromeos.settings.mojom.kAppsSectionPath = "apps";

chromeos.settings.mojom.kAppManagementSubpagePath = "app-management";

chromeos.settings.mojom.kAppNotificationsSubpagePath = "app-notifications";

chromeos.settings.mojom.kAppNotificationsManagerSubpagePath = "app-notifications-manager";

chromeos.settings.mojom.kAppDetailsSubpagePath = "app-management/detail";

chromeos.settings.mojom.kGooglePlayStoreSubpagePath = "androidAppsDetails";

chromeos.settings.mojom.kPluginVmSharedPathsSubpagePath = "app-management/pluginVm/sharedPaths";

chromeos.settings.mojom.kPluginVmUsbPreferencesSubpagePath = "app-management/pluginVm/sharedUsbDevices";

chromeos.settings.mojom.kArcVmUsbPreferencesSubpagePath = "androidAppsDetails/sharedUsbDevices";

chromeos.settings.mojom.kManageIsolatedWebAppsSubpagePath = "manage-isolated-web-apps";

chromeos.settings.mojom.kAppParentalControlsSubpagePath = "app-parental-controls";

chromeos.settings.mojom.kCrostiniDetailsSubpagePath = "crostini/details";

chromeos.settings.mojom.kCrostiniManageSharedFoldersSubpagePath = "crostini/sharedPaths";

chromeos.settings.mojom.kCrostiniUsbPreferencesSubpagePath = "crostini/sharedUsbDevices";

chromeos.settings.mojom.kCrostiniBackupAndRestoreSubpagePath = "crostini/exportImport";

chromeos.settings.mojom.kCrostiniPortForwardingSubpagePath = "crostini/portForwarding";

chromeos.settings.mojom.kCrostiniExtraContainersSubpagePath = "crostini/extraContainers";

chromeos.settings.mojom.kBruschettaDetailsSubpagePath = "bruschetta/details";

chromeos.settings.mojom.kBruschettaUsbPreferencesSubpagePath = "bruschetta/sharedUsbDevices";

chromeos.settings.mojom.kBruschettaManageSharedFoldersSubpagePath = "bruschetta/sharedPaths";

chromeos.settings.mojom.kTimeZoneSubpagePath = "dateTime/timeZone";

chromeos.settings.mojom.kPrivacyAndSecuritySectionPath = "osPrivacy";

chromeos.settings.mojom.kManageOtherPeopleSubpagePathV2 = "osPrivacy/accounts";

chromeos.settings.mojom.kSecurityAndSignInSubpagePathV2 = "osPrivacy/lockScreen";

chromeos.settings.mojom.kFingerprintSubpagePathV2 = "osPrivacy/lockScreen/fingerprint";

chromeos.settings.mojom.kSmartPrivacySubpagePath = "osPrivacy/smartPrivacy";

chromeos.settings.mojom.kPrivacyHubSubpagePath = "osPrivacy/privacyHub";

chromeos.settings.mojom.kPrivacyHubMicrophoneSubpagePath = "osPrivacy/privacyHub/microphone";

chromeos.settings.mojom.kPrivacyHubCameraSubpagePath = "osPrivacy/privacyHub/camera";

chromeos.settings.mojom.kPrivacyHubGeolocationSubpagePath = "osPrivacy/privacyHub/geolocation";

chromeos.settings.mojom.kPrivacyHubGeolocationAdvancedSubpagePath = "osPrivacy/privacyHub/geolocation/advanced";

chromeos.settings.mojom.kInputMethodOptionsSubpagePath = "osLanguages/inputMethodOptions";

chromeos.settings.mojom.kLanguagesSubpagePath = "osLanguages/languages";

chromeos.settings.mojom.kInputSubpagePath = "osLanguages/input";

chromeos.settings.mojom.kEditDictionarySubpagePath = "osLanguages/editDictionary";

chromeos.settings.mojom.kJapaneseManageUserDictionarySubpagePath = "osLanguages/japaneseManageUserDictionary";

chromeos.settings.mojom.kAppLanguagesSubpagePath = "osLanguages/languages/appLanguages";

chromeos.settings.mojom.kGoogleDriveSubpagePath = "googleDrive";

chromeos.settings.mojom.kOneDriveSubpagePath = "oneDrive";

chromeos.settings.mojom.kOfficeFilesSubpagePath = "officeFiles";

chromeos.settings.mojom.kNetworkFileSharesSubpagePath = "smbShares";

chromeos.settings.mojom.kPrintingDetailsSubpagePath = "cupsPrinters";

chromeos.settings.mojom.kAccessibilitySectionPath = "osAccessibility";

chromeos.settings.mojom.kManageAccessibilitySubpagePath = "manageAccessibility";

chromeos.settings.mojom.kTextToSpeechPagePath = "textToSpeech";

chromeos.settings.mojom.kDisplayAndMagnificationSubpagePath = "displayAndMagnification";

chromeos.settings.mojom.kKeyboardAndTextInputSubpagePath = "keyboardAndTextInput";

chromeos.settings.mojom.kCursorAndTouchpadSubpagePath = "cursorAndTouchpad";

chromeos.settings.mojom.kSelectToSpeakSubpagePath = "textToSpeech/selectToSpeak";

chromeos.settings.mojom.kChromeVoxSubpagePath = "textToSpeech/chromeVox";

chromeos.settings.mojom.kAudioAndCaptionsSubpagePath = "audioAndCaptions";

chromeos.settings.mojom.kTextToSpeechSubpagePath = "manageAccessibility/tts";

chromeos.settings.mojom.kSwitchAccessOptionsSubpagePath = "manageAccessibility/switchAccess";

chromeos.settings.mojom.kFaceGazeSettingsSubpagePath = "manageAccessibility/faceGaze";

chromeos.settings.mojom.kMouseKeysSettingsSubpagePath = "manageAccessibility/mouseKeys";

chromeos.settings.mojom.kAboutChromeOsSectionPath = "help";

chromeos.settings.mojom.kDetailedBuildInfoSubpagePath = "help/details";

chromeos.settings.mojom.kKerberosSectionPath = "kerberos";

chromeos.settings.mojom.kKerberosAccountsV2SubpagePath = "kerberos/kerberosAccounts";

chromeos.settings.mojom.kSystemPreferencesSectionPath = "systemPreferences";

chromeos.settings.mojom.kInternalStorybookSubpagePath = "_internal/_storybook";

// Enum: Section
chromeos.settings.mojom.Section = {
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
chromeos.settings.mojom.Subpage = {
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
