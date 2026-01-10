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
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signon_realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ActorLoginPermission
mojo.internal.Struct(
    password_manager.mojom.ActorLoginPermissionSpec, 'password_manager.mojom.ActorLoginPermission', [
      mojo.internal.StructField('domain_info', 0, 0, password_manager.mojom.DomainInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('username', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'password_manager.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(password_manager.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(password_manager.mojom.PageHandlerSpec), null, false, 0, undefined),
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
      [page, handler],
      false);
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

password_manager.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

password_manager.mojom.PageHandlerFactoryReceiver = password_manager.mojom.PageHandlerFactoryReceiver;

password_manager.mojom.PageHandlerFactoryPtr = password_manager.mojom.PageHandlerFactoryRemote;
password_manager.mojom.PageHandlerFactoryRequest = password_manager.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec, 'password_manager.mojom.PageHandler_ExtendAuthValidity_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec, 'password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_Params', [
    ],
    [[0, 8]]);

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
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec, 'password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParams', [
      mojo.internal.StructField('sites', 0, 0, mojo.internal.Array(password_manager.mojom.ActorLoginPermissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec, 'password_manager.mojom.PageHandler_RevokeActorLoginPermission_Params', [
      mojo.internal.StructField('site', 0, 0, password_manager.mojom.ActorLoginPermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec, 'password_manager.mojom.PageHandler_ChangePasswordManagerPin_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec, 'password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec, 'password_manager.mojom.PageHandler_ShowAddShortcutDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec, 'password_manager.mojom.PageHandler_IsAccountStorageEnabled_Params', [
    ],
    [[0, 8]]);

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
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec, 'password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParams', [
      mojo.internal.StructField('should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec, 'password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec, 'password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParams', [
      mojo.internal.StructField('is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec, 'password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  deleteAllPasswordManagerData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec,
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec,
      [],
      false);
  }

  copyPlaintextBackupPassword(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec,
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec,
      [id],
      false);
  }

  removeBackupPassword(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec,
      null,
      [id],
      false);
  }

  getActorLoginPermissions() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec,
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec,
      [],
      false);
  }

  revokeActorLoginPermission(site) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec,
      null,
      [site],
      false);
  }

  changePasswordManagerPin() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec,
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec,
      [],
      false);
  }

  showAddShortcutDialog() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec,
      null,
      [],
      false);
  }

  isAccountStorageEnabled() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec,
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setAccountStorageEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  shouldShowAccountStorageSettingToggle() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec,
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec,
      [],
      false);
  }

  isPasswordManagerPinAvailable() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec,
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec,
      [],
      false);
  }

  switchBiometricAuthBeforeFillingState() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec,
      password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec,
      [],
      false);
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

password_manager.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.extendAuthValidity');
          const result = this.impl.extendAuthValidity();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.deleteAllPasswordManagerData');
          const result = this.impl.deleteAllPasswordManagerData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.copyPlaintextBackupPassword');
          const result = this.impl.copyPlaintextBackupPassword(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.removeBackupPassword');
          const result = this.impl.removeBackupPassword(params.id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getActorLoginPermissions');
          const result = this.impl.getActorLoginPermissions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.revokeActorLoginPermission');
          const result = this.impl.revokeActorLoginPermission(params.site);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.changePasswordManagerPin');
          const result = this.impl.changePasswordManagerPin();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.showAddShortcutDialog');
          const result = this.impl.showAddShortcutDialog();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.isAccountStorageEnabled');
          const result = this.impl.isAccountStorageEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAccountStorageEnabled');
          const result = this.impl.setAccountStorageEnabled(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.shouldShowAccountStorageSettingToggle');
          const result = this.impl.shouldShowAccountStorageSettingToggle();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.isPasswordManagerPinAvailable');
          const result = this.impl.isPasswordManagerPinAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.switchBiometricAuthBeforeFillingState');
          const result = this.impl.switchBiometricAuthBeforeFillingState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec);
               responder(response);
            });
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

password_manager.mojom.PageHandlerReceiver = password_manager.mojom.PageHandlerReceiver;

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

password_manager.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

password_manager.mojom.PageReceiver = password_manager.mojom.PageReceiver;

password_manager.mojom.PagePtr = password_manager.mojom.PageRemote;
password_manager.mojom.PageRequest = password_manager.mojom.PagePendingReceiver;

