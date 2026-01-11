// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/settings/public/constants/routes.mojom
// Module: chromeos.settings.mojom

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
