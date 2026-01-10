// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/login.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Struct: SamlUserSessionProperties
crosapi.mojom.SamlUserSessionPropertiesSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.SamlUserSessionProperties',
      packedSize: 40,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gaia_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'oauth_code', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ExternalLogoutRequestObserver
crosapi.mojom.ExternalLogoutRequestObserver = {};

crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ExternalLogoutRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRequestExternalLogout() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.ExternalLogoutRequestObserver.getRemote = function() {
  let remote = new crosapi.mojom.ExternalLogoutRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ExternalLogoutRequestObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnRequestExternalLogout
crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ExternalLogoutRequestObserver.OnRequestExternalLogout_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.ExternalLogoutRequestObserverPtr = crosapi.mojom.ExternalLogoutRequestObserverRemote;
crosapi.mojom.ExternalLogoutRequestObserverRequest = crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver;


// Interface: Login
crosapi.mojom.Login = {};

crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_AddExternalLogoutRequestObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.ExternalLogoutRequestObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_NotifyOnExternalLogoutDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.Login_REMOVED_0_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_REMOVED_0_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_4_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_REMOVED_4_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_5_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_REMOVED_5_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_6_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_REMOVED_6_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_7_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_REMOVED_7_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_10_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_REMOVED_10_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.SamlUserSessionPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_12_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login_REMOVED_12_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.LoginPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LoginRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Login';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LoginPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LoginRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.LoginRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addExternalLogoutRequestObserver(observer) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec,
      null,
      [observer]);
  }

  notifyOnExternalLogoutDone() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec,
      null,
      []);
  }

  rEMOVED_0(password) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.Login_REMOVED_0_ParamsSpec,
      crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec,
      [password]);
  }

  rEMOVED_4(password) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.Login_REMOVED_4_ParamsSpec,
      crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec,
      [password]);
  }

  rEMOVED_5(password) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.Login_REMOVED_5_ParamsSpec,
      crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec,
      [password]);
  }

  rEMOVED_6(password) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.Login_REMOVED_6_ParamsSpec,
      crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec,
      [password]);
  }

  rEMOVED_7(password) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.Login_REMOVED_7_ParamsSpec,
      crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec,
      [password]);
  }

  rEMOVED_10(properties) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.Login_REMOVED_10_ParamsSpec,
      crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec,
      [properties]);
  }

  rEMOVED_12(password) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.Login_REMOVED_12_ParamsSpec,
      crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec,
      [password]);
  }

};

crosapi.mojom.Login.getRemote = function() {
  let remote = new crosapi.mojom.LoginRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Login',
    'context');
  return remote.$;
};

// ParamsSpec for AddExternalLogoutRequestObserver
crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.AddExternalLogoutRequestObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.ExternalLogoutRequestObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyOnExternalLogoutDone
crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.NotifyOnExternalLogoutDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for REMOVED_0
crosapi.mojom.Login_REMOVED_0_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_0_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_0_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_4
crosapi.mojom.Login_REMOVED_4_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_4_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_4_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_5
crosapi.mojom.Login_REMOVED_5_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_5_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_5_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_6
crosapi.mojom.Login_REMOVED_6_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_6_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_6_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_7
crosapi.mojom.Login_REMOVED_7_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_7_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_7_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_10
crosapi.mojom.Login_REMOVED_10_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_10_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.SamlUserSessionPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_10_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_12
crosapi.mojom.Login_REMOVED_12_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_12_Params',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Login.REMOVED_12_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.LoginPtr = crosapi.mojom.LoginRemote;
crosapi.mojom.LoginRequest = crosapi.mojom.LoginPendingReceiver;

