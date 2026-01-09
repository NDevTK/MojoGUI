// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/password_manager/password_manager.mojom
// Module: password_manager.mojom

'use strict';

// Module namespace
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};


// Struct: DomainInfo
password_manager.mojom.DomainInfo = class {
  constructor(values = {}) {
    this.signon_realm = values.signon_realm !== undefined ? values.signon_realm : "";
  }
};

// Struct: ActorLoginPermission
password_manager.mojom.ActorLoginPermission = class {
  constructor(values = {}) {
    this.username = values.username !== undefined ? values.username : "";
  }
};

// Interface: PageHandlerFactory
password_manager.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'password_manager.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

password_manager.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
password_manager.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'password_manager.mojom.PageHandler';
  }

  extendAuthValidity() {
    // Method: ExtendAuthValidity
    // Call: ExtendAuthValidity()
  }

  deleteAllPasswordManagerData() {
    // Method: DeleteAllPasswordManagerData
    return new Promise((resolve) => {
      // Call: DeleteAllPasswordManagerData()
      resolve({});
    });
  }

  copyPlaintextBackupPassword(id) {
    // Method: CopyPlaintextBackupPassword
    return new Promise((resolve) => {
      // Call: CopyPlaintextBackupPassword(id)
      resolve({});
    });
  }

  removeBackupPassword(id) {
    // Method: RemoveBackupPassword
    // Call: RemoveBackupPassword(id)
  }

  getActorLoginPermissions() {
    // Method: GetActorLoginPermissions
    return new Promise((resolve) => {
      // Call: GetActorLoginPermissions()
      resolve({});
    });
  }

  revokeActorLoginPermission(site) {
    // Method: RevokeActorLoginPermission
    // Call: RevokeActorLoginPermission(site)
  }

  changePasswordManagerPin() {
    // Method: ChangePasswordManagerPin
    return new Promise((resolve) => {
      // Call: ChangePasswordManagerPin()
      resolve({});
    });
  }

  showAddShortcutDialog() {
    // Method: ShowAddShortcutDialog
    // Call: ShowAddShortcutDialog()
  }

  isAccountStorageEnabled() {
    // Method: IsAccountStorageEnabled
    return new Promise((resolve) => {
      // Call: IsAccountStorageEnabled()
      resolve({});
    });
  }

  setAccountStorageEnabled(enabled) {
    // Method: SetAccountStorageEnabled
    // Call: SetAccountStorageEnabled(enabled)
  }

  shouldShowAccountStorageSettingToggle() {
    // Method: ShouldShowAccountStorageSettingToggle
    return new Promise((resolve) => {
      // Call: ShouldShowAccountStorageSettingToggle()
      resolve({});
    });
  }

  isPasswordManagerPinAvailable() {
    // Method: IsPasswordManagerPinAvailable
    return new Promise((resolve) => {
      // Call: IsPasswordManagerPinAvailable()
      resolve({});
    });
  }

  switchBiometricAuthBeforeFillingState() {
    // Method: SwitchBiometricAuthBeforeFillingState
    return new Promise((resolve) => {
      // Call: SwitchBiometricAuthBeforeFillingState()
      resolve({});
    });
  }

};

password_manager.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
password_manager.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'password_manager.mojom.Page';
  }

};

password_manager.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
