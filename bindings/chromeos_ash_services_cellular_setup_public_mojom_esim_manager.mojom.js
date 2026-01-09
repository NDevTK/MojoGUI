// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom
// Module: ash.cellular_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};


// Enum: ProfileState
ash.cellular_setup.mojom.ProfileState = {
};

// Enum: ProfileInstallResult
ash.cellular_setup.mojom.ProfileInstallResult = {
};

// Enum: ProfileInstallMethod
ash.cellular_setup.mojom.ProfileInstallMethod = {
};

// Enum: ESimOperationResult
ash.cellular_setup.mojom.ESimOperationResult = {
};

// Struct: EuiccProperties
ash.cellular_setup.mojom.EuiccProperties = class {
  constructor(values = {}) {
    this.is_active = values.is_active !== undefined ? values.is_active : false;
  }
};

// Struct: ESimProfileProperties
ash.cellular_setup.mojom.ESimProfileProperties = class {
  constructor(values = {}) {
    this.activation_code = values.activation_code !== undefined ? values.activation_code : "";
  }
};

// Struct: QRCode
ash.cellular_setup.mojom.QRCode = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Interface: ESimManagerObserver
ash.cellular_setup.mojom.ESimManagerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cellular_setup.mojom.ESimManagerObserver';
  }

  onAvailableEuiccListChanged() {
    // Method: OnAvailableEuiccListChanged
    // Call: OnAvailableEuiccListChanged()
  }

  onProfileListChanged(euicc) {
    // Method: OnProfileListChanged
    // Call: OnProfileListChanged(euicc)
  }

  onEuiccChanged(euicc) {
    // Method: OnEuiccChanged
    // Call: OnEuiccChanged(euicc)
  }

  onProfileChanged(profile) {
    // Method: OnProfileChanged
    // Call: OnProfileChanged(profile)
  }

};

ash.cellular_setup.mojom.ESimManagerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ESimManager
ash.cellular_setup.mojom.ESimManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cellular_setup.mojom.ESimManager';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  getAvailableEuiccs() {
    // Method: GetAvailableEuiccs
    return new Promise((resolve) => {
      // Call: GetAvailableEuiccs()
      resolve({});
    });
  }

};

ash.cellular_setup.mojom.ESimManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Euicc
ash.cellular_setup.mojom.EuiccPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cellular_setup.mojom.Euicc';
  }

  getProperties() {
    // Method: GetProperties
    return new Promise((resolve) => {
      // Call: GetProperties()
      resolve({});
    });
  }

  getProfileList() {
    // Method: GetProfileList
    return new Promise((resolve) => {
      // Call: GetProfileList()
      resolve({});
    });
  }

  requestAvailableProfiles() {
    // Method: RequestAvailableProfiles
    return new Promise((resolve) => {
      // Call: RequestAvailableProfiles()
      resolve({});
    });
  }

  refreshInstalledProfiles() {
    // Method: RefreshInstalledProfiles
    return new Promise((resolve) => {
      // Call: RefreshInstalledProfiles()
      resolve({});
    });
  }

  installProfileFromActivationCode(activation_code, confirmation_code, install_method) {
    // Method: InstallProfileFromActivationCode
    return new Promise((resolve) => {
      // Call: InstallProfileFromActivationCode(activation_code, confirmation_code, install_method)
      resolve({});
    });
  }

  getEidQRCode() {
    // Method: GetEidQRCode
    return new Promise((resolve) => {
      // Call: GetEidQRCode()
      resolve({});
    });
  }

};

ash.cellular_setup.mojom.EuiccRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ESimProfile
ash.cellular_setup.mojom.ESimProfilePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cellular_setup.mojom.ESimProfile';
  }

  getProperties() {
    // Method: GetProperties
    return new Promise((resolve) => {
      // Call: GetProperties()
      resolve({});
    });
  }

  installProfile(confirmation_code) {
    // Method: InstallProfile
    return new Promise((resolve) => {
      // Call: InstallProfile(confirmation_code)
      resolve({});
    });
  }

  uninstallProfile() {
    // Method: UninstallProfile
    return new Promise((resolve) => {
      // Call: UninstallProfile()
      resolve({});
    });
  }

  setProfileNickname(nickname) {
    // Method: SetProfileNickname
    return new Promise((resolve) => {
      // Call: SetProfileNickname(nickname)
      resolve({});
    });
  }

};

ash.cellular_setup.mojom.ESimProfileRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
