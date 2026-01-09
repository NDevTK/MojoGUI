// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom
// Module: ash.auth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.auth = ash.auth || {};
ash.auth.mojom = ash.auth.mojom || {};


// Enum: AuthFactor
ash.auth.mojom.AuthFactor = {
};

// Enum: ManagementType
ash.auth.mojom.ManagementType = {
};

// Enum: ConfigureResult
ash.auth.mojom.ConfigureResult = {
};

// Enum: PinComplexity
ash.auth.mojom.PinComplexity = {
};

// Enum: PasswordComplexity
ash.auth.mojom.PasswordComplexity = {
};

// Interface: FactorObserver
ash.auth.mojom.FactorObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.auth.mojom.FactorObserver';
  }

  onFactorChanged(factor) {
    // Method: OnFactorChanged
    // Call: OnFactorChanged(factor)
  }

};

ash.auth.mojom.FactorObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AuthFactorConfig
ash.auth.mojom.AuthFactorConfigPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.auth.mojom.AuthFactorConfig';
  }

  observeFactorChanges(observer) {
    // Method: ObserveFactorChanges
    // Call: ObserveFactorChanges(observer)
  }

  isSupported(auth_token, factor) {
    // Method: IsSupported
    return new Promise((resolve) => {
      // Call: IsSupported(auth_token, factor)
      resolve({});
    });
  }

  isConfigured(auth_token, factor) {
    // Method: IsConfigured
    return new Promise((resolve) => {
      // Call: IsConfigured(auth_token, factor)
      resolve({});
    });
  }

  getManagementType(auth_token, factor) {
    // Method: GetManagementType
    return new Promise((resolve) => {
      // Call: GetManagementType(auth_token, factor)
      resolve({});
    });
  }

  isEditable(auth_token, factor) {
    // Method: IsEditable
    return new Promise((resolve) => {
      // Call: IsEditable(auth_token, factor)
      resolve({});
    });
  }

};

ash.auth.mojom.AuthFactorConfigRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RecoveryFactorEditor
ash.auth.mojom.RecoveryFactorEditorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.auth.mojom.RecoveryFactorEditor';
  }

  configure(auth_token, enabled) {
    // Method: Configure
    return new Promise((resolve) => {
      // Call: Configure(auth_token, enabled)
      resolve({});
    });
  }

};

ash.auth.mojom.RecoveryFactorEditorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PinFactorEditor
ash.auth.mojom.PinFactorEditorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.auth.mojom.PinFactorEditor';
  }

  setPin(auth_token, pin) {
    // Method: SetPin
    return new Promise((resolve) => {
      // Call: SetPin(auth_token, pin)
      resolve({});
    });
  }

  updatePin(auth_token, pin) {
    // Method: UpdatePin
    return new Promise((resolve) => {
      // Call: UpdatePin(auth_token, pin)
      resolve({});
    });
  }

  removePin(auth_token) {
    // Method: RemovePin
    return new Promise((resolve) => {
      // Call: RemovePin(auth_token)
      resolve({});
    });
  }

  getConfiguredPinFactor(auth_token) {
    // Method: GetConfiguredPinFactor
    return new Promise((resolve) => {
      // Call: GetConfiguredPinFactor(auth_token)
      resolve({});
    });
  }

  checkPinComplexity(auth_token, pin) {
    // Method: CheckPinComplexity
    return new Promise((resolve) => {
      // Call: CheckPinComplexity(auth_token, pin)
      resolve({});
    });
  }

};

ash.auth.mojom.PinFactorEditorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PasswordFactorEditor
ash.auth.mojom.PasswordFactorEditorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.auth.mojom.PasswordFactorEditor';
  }

  updateOrSetLocalPassword(auth_token, new_password) {
    // Method: UpdateOrSetLocalPassword
    return new Promise((resolve) => {
      // Call: UpdateOrSetLocalPassword(auth_token, new_password)
      resolve({});
    });
  }

  updateOrSetOnlinePassword(auth_token, new_password) {
    // Method: UpdateOrSetOnlinePassword
    return new Promise((resolve) => {
      // Call: UpdateOrSetOnlinePassword(auth_token, new_password)
      resolve({});
    });
  }

  setLocalPassword(auth_token, new_password) {
    // Method: SetLocalPassword
    return new Promise((resolve) => {
      // Call: SetLocalPassword(auth_token, new_password)
      resolve({});
    });
  }

  setOnlinePassword(auth_token, new_password) {
    // Method: SetOnlinePassword
    return new Promise((resolve) => {
      // Call: SetOnlinePassword(auth_token, new_password)
      resolve({});
    });
  }

  checkLocalPasswordComplexity(password) {
    // Method: CheckLocalPasswordComplexity
    return new Promise((resolve) => {
      // Call: CheckLocalPasswordComplexity(password)
      resolve({});
    });
  }

  removePassword(auth_token) {
    // Method: RemovePassword
    return new Promise((resolve) => {
      // Call: RemovePassword(auth_token)
      resolve({});
    });
  }

};

ash.auth.mojom.PasswordFactorEditorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
