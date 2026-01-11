// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/password_manager/password_manager.mojom
// Module: password_manager.mojom

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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

password_manager.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
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
  extendAuthValidity() {
    return this.$.extendAuthValidity();
  }
  deleteAllPasswordManagerData() {
    return this.$.deleteAllPasswordManagerData();
  }
  copyPlaintextBackupPassword(id) {
    return this.$.copyPlaintextBackupPassword(id);
  }
  removeBackupPassword(id) {
    return this.$.removeBackupPassword(id);
  }
  getActorLoginPermissions() {
    return this.$.getActorLoginPermissions();
  }
  revokeActorLoginPermission(site) {
    return this.$.revokeActorLoginPermission(site);
  }
  changePasswordManagerPin() {
    return this.$.changePasswordManagerPin();
  }
  showAddShortcutDialog() {
    return this.$.showAddShortcutDialog();
  }
  isAccountStorageEnabled() {
    return this.$.isAccountStorageEnabled();
  }
  setAccountStorageEnabled(enabled) {
    return this.$.setAccountStorageEnabled(enabled);
  }
  shouldShowAccountStorageSettingToggle() {
    return this.$.shouldShowAccountStorageSettingToggle();
  }
  isPasswordManagerPinAvailable() {
    return this.$.isPasswordManagerPinAvailable();
  }
  switchBiometricAuthBeforeFillingState() {
    return this.$.switchBiometricAuthBeforeFillingState();
  }
};

password_manager.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  extendAuthValidity() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec,
      null,
      [],
      false);
  }

  deleteAllPasswordManagerData() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec,
      password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec,
      [],
      false);
  }

  copyPlaintextBackupPassword(id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec,
      password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec,
      [id],
      false);
  }

  removeBackupPassword(id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec,
      null,
      [id],
      false);
  }

  getActorLoginPermissions() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec,
      password_manager.mojom.PageHandler_GetActorLoginPermissions_ResponseParamsSpec,
      [],
      false);
  }

  revokeActorLoginPermission(site) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec,
      null,
      [site],
      false);
  }

  changePasswordManagerPin() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec,
      password_manager.mojom.PageHandler_ChangePasswordManagerPin_ResponseParamsSpec,
      [],
      false);
  }

  showAddShortcutDialog() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec,
      null,
      [],
      false);
  }

  isAccountStorageEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec,
      password_manager.mojom.PageHandler_IsAccountStorageEnabled_ResponseParamsSpec,
      [],
      false);
  }

  setAccountStorageEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  shouldShowAccountStorageSettingToggle() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec,
      password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ResponseParamsSpec,
      [],
      false);
  }

  isPasswordManagerPinAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec,
      password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec,
      [],
      false);
  }

  switchBiometricAuthBeforeFillingState() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ExtendAuthValidity_ParamsSpec.$.structSpec);
          const result = this.impl.extendAuthValidity();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_DeleteAllPasswordManagerData_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_CopyPlaintextBackupPassword_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_RemoveBackupPassword_ParamsSpec.$.structSpec);
          const result = this.impl.removeBackupPassword(params.id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_GetActorLoginPermissions_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_RevokeActorLoginPermission_ParamsSpec.$.structSpec);
          const result = this.impl.revokeActorLoginPermission(params.site);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ChangePasswordManagerPin_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ShowAddShortcutDialog_ParamsSpec.$.structSpec);
          const result = this.impl.showAddShortcutDialog();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_IsAccountStorageEnabled_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_SetAccountStorageEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setAccountStorageEnabled(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_ShouldShowAccountStorageSettingToggle_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_IsPasswordManagerPinAvailable_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(password_manager.mojom.PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

password_manager.mojom.PageReceiver = password_manager.mojom.PageReceiver;

password_manager.mojom.PagePtr = password_manager.mojom.PageRemote;
password_manager.mojom.PageRequest = password_manager.mojom.PagePendingReceiver;

