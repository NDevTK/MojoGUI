// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/password_manager/password_manager.mojom
// Module: password_manager.mojom

'use strict';

// Module namespace
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};
var url = url || {};


// Struct: DomainInfo
password_manager.mojom.DomainInfoSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.DomainInfo',
      packedSize: 32,
      fields: [
        { name: 'human_readable_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'signon_realm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ActorLoginPermission
password_manager.mojom.ActorLoginPermissionSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.ActorLoginPermission',
      packedSize: 32,
      fields: [
        { name: 'domain_info', packedOffset: 0, packedBitOffset: 0, type: password_manager.mojom.DomainInfoSpec, nullable: false, minVersion: 0 },
        { name: 'favicon_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'username', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageHandlerFactory
password_manager.mojom.PageHandlerFactory = {};

password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(password_manager.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(password_manager.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

password_manager.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new password_manager.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

password_manager.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

password_manager.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new password_manager.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(password_manager.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(password_manager.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
password_manager.mojom.PageHandlerFactoryPtr = password_manager.mojom.PageHandlerFactoryRemote;
password_manager.mojom.PageHandlerFactoryRequest = password_manager.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
password_manager.mojom.PageHandler = {};

password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_ExtendAuthValidity_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_RemoveBackupPassword_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_GetActorLoginPermissions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_RevokeActorLoginPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: password_manager.mojom.ActorLoginPermissionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_ChangePasswordManagerPin_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_ShowAddShortcutDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_IsAccountStorageEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_SetAccountStorageEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new password_manager.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

password_manager.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extendAuthValidity() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec,
      null,
      []);
  }

  deleteAllPasswordManagerData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec,
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec,
      []);
  }

  copyPlaintextBackupPassword(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec,
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec,
      [id]);
  }

  removeBackupPassword(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec,
      null,
      [id]);
  }

  getActorLoginPermissions() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec,
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec,
      []);
  }

  revokeActorLoginPermission(site) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec,
      null,
      [site]);
  }

  changePasswordManagerPin() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec,
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec,
      []);
  }

  showAddShortcutDialog() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec,
      null,
      []);
  }

  isAccountStorageEnabled() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec,
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec,
      []);
  }

  setAccountStorageEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  shouldShowAccountStorageSettingToggle() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec,
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec,
      []);
  }

  isPasswordManagerPinAvailable() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec,
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec,
      []);
  }

  switchBiometricAuthBeforeFillingState() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec,
      password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec,
      []);
  }

};

password_manager.mojom.PageHandler.getRemote = function() {
  let remote = new password_manager.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ExtendAuthValidity
password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.ExtendAuthValidity_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DeleteAllPasswordManagerData
password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.DeleteAllPasswordManagerData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.DeleteAllPasswordManagerData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CopyPlaintextBackupPassword
password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.CopyPlaintextBackupPassword_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.CopyPlaintextBackupPassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveBackupPassword
password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.RemoveBackupPassword_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetActorLoginPermissions
password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.GetActorLoginPermissions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.GetActorLoginPermissions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sites', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(password_manager.mojom.ActorLoginPermissionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RevokeActorLoginPermission
password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.RevokeActorLoginPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: password_manager.mojom.ActorLoginPermissionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ChangePasswordManagerPin
password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.ChangePasswordManagerPin_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.ChangePasswordManagerPin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowAddShortcutDialog
password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.ShowAddShortcutDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IsAccountStorageEnabled
password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.IsAccountStorageEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.IsAccountStorageEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAccountStorageEnabled
password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.SetAccountStorageEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShouldShowAccountStorageSettingToggle
password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.ShouldShowAccountStorageSettingToggle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.ShouldShowAccountStorageSettingToggle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsPasswordManagerPinAvailable
password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.IsPasswordManagerPinAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.IsPasswordManagerPinAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SwitchBiometricAuthBeforeFillingState
password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.SwitchBiometricAuthBeforeFillingState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.PageHandler.SwitchBiometricAuthBeforeFillingState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
password_manager.mojom.PageHandlerPtr = password_manager.mojom.PageHandlerRemote;
password_manager.mojom.PageHandlerRequest = password_manager.mojom.PageHandlerPendingReceiver;


// Interface: Page
password_manager.mojom.Page = {};

password_manager.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.PagePendingReceiver,
      handle);
    this.$ = new password_manager.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

password_manager.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

password_manager.mojom.Page.getRemote = function() {
  let remote = new password_manager.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
password_manager.mojom.PagePtr = password_manager.mojom.PageRemote;
password_manager.mojom.PageRequest = password_manager.mojom.PagePendingReceiver;

