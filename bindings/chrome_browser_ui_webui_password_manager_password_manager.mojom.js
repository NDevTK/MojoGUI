// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/password_manager/password_manager.mojom
// Module: password_manager.mojom

'use strict';

// Module namespace
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};
var url = url || {};

password_manager.mojom.DomainInfoSpec = { $: {} };
password_manager.mojom.ActorLoginPermissionSpec = { $: {} };
password_manager.mojom.PageHandlerFactory = {};
password_manager.mojom.PageHandlerFactory.$interfaceName = 'password_manager.mojom.PageHandlerFactory';
password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler = {};
password_manager.mojom.PageHandler.$interfaceName = 'password_manager.mojom.PageHandler';
password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec = { $: {} };
password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec = { $: {} };
password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec = { $: {} };
password_manager.mojom.Page = {};
password_manager.mojom.Page.$interfaceName = 'password_manager.mojom.Page';

// Struct: DomainInfo
mojo.internal.Struct(
    password_manager.mojom.DomainInfoSpec, 'password_manager.mojom.DomainInfo', [
      mojo.internal.StructField('human_readable_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('signon_realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ActorLoginPermission
mojo.internal.Struct(
    password_manager.mojom.ActorLoginPermissionSpec, 'password_manager.mojom.ActorLoginPermission', [
      mojo.internal.StructField('domain_info', 0, 0, password_manager.mojom.DomainInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('username', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'password_manager.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(password_manager.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(password_manager.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

password_manager.mojom.PageHandlerFactoryPtr = password_manager.mojom.PageHandlerFactoryRemote;
password_manager.mojom.PageHandlerFactoryRequest = password_manager.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec, 'password_manager.mojom.PageHandler_ExtendAuthValidity_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec, 'password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec, 'password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec, 'password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec, 'password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec, 'password_manager.mojom.PageHandler_RemoveBackupPassword_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec, 'password_manager.mojom.PageHandler_GetActorLoginPermissions_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec, 'password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParams', [
      mojo.internal.StructField('sites', 0, 0, mojo.internal.Array(password_manager.mojom.ActorLoginPermissionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec, 'password_manager.mojom.PageHandler_RevokeActorLoginPermission_Params', [
      mojo.internal.StructField('site', 0, 0, password_manager.mojom.ActorLoginPermissionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec, 'password_manager.mojom.PageHandler_ChangePasswordManagerPin_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec, 'password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec, 'password_manager.mojom.PageHandler_ShowAddShortcutDialog_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec, 'password_manager.mojom.PageHandler_IsAccountStorageEnabled_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec, 'password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec, 'password_manager.mojom.PageHandler_SetAccountStorageEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec, 'password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec, 'password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParams', [
      mojo.internal.StructField('should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec, 'password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec, 'password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParams', [
      mojo.internal.StructField('is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec, 'password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec, 'password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

password_manager.mojom.PageHandlerPtr = password_manager.mojom.PageHandlerRemote;
password_manager.mojom.PageHandlerRequest = password_manager.mojom.PageHandlerPendingReceiver;


// Interface: Page
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

password_manager.mojom.PagePtr = password_manager.mojom.PageRemote;
password_manager.mojom.PageRequest = password_manager.mojom.PagePendingReceiver;

