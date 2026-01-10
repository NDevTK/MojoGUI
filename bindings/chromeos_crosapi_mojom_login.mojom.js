// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/login.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.SamlUserSessionPropertiesSpec = { $: {} };
crosapi.mojom.ExternalLogoutRequestObserver = {};
crosapi.mojom.ExternalLogoutRequestObserver.$interfaceName = 'crosapi.mojom.ExternalLogoutRequestObserver';
crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec = { $: {} };
crosapi.mojom.Login = {};
crosapi.mojom.Login.$interfaceName = 'crosapi.mojom.Login';
crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec = { $: {} };
crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_0_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_4_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_5_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_6_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_7_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_10_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_12_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec = { $: {} };

// Struct: SamlUserSessionProperties
mojo.internal.Struct(
    crosapi.mojom.SamlUserSessionPropertiesSpec, 'crosapi.mojom.SamlUserSessionProperties', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gaia_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('oauth_code', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ExternalLogoutRequestObserver
mojo.internal.Struct(
    crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec, 'crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

crosapi.mojom.ExternalLogoutRequestObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRequestExternalLogout();
          break;
        }
      }
    }});
  }
};

crosapi.mojom.ExternalLogoutRequestObserverReceiver = crosapi.mojom.ExternalLogoutRequestObserverReceiver;

crosapi.mojom.ExternalLogoutRequestObserverPtr = crosapi.mojom.ExternalLogoutRequestObserverRemote;
crosapi.mojom.ExternalLogoutRequestObserverRequest = crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver;


// Interface: Login
mojo.internal.Struct(
    crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec, 'crosapi.mojom.Login_AddExternalLogoutRequestObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.ExternalLogoutRequestObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec, 'crosapi.mojom.Login_NotifyOnExternalLogoutDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_0_ParamsSpec, 'crosapi.mojom.Login_REMOVED_0_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_0_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_4_ParamsSpec, 'crosapi.mojom.Login_REMOVED_4_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_4_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_5_ParamsSpec, 'crosapi.mojom.Login_REMOVED_5_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_5_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_6_ParamsSpec, 'crosapi.mojom.Login_REMOVED_6_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_6_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_7_ParamsSpec, 'crosapi.mojom.Login_REMOVED_7_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_7_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_10_ParamsSpec, 'crosapi.mojom.Login_REMOVED_10_Params', [
      mojo.internal.StructField('properties', 0, 0, crosapi.mojom.SamlUserSessionPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_10_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_12_ParamsSpec, 'crosapi.mojom.Login_REMOVED_12_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_12_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
  }

  notifyOnExternalLogoutDone() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec,
      null,
      [],
      false);
  }

  rEMOVED_0(password) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.Login_REMOVED_0_ParamsSpec,
      crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_4(password) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.Login_REMOVED_4_ParamsSpec,
      crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_5(password) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.Login_REMOVED_5_ParamsSpec,
      crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_6(password) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.Login_REMOVED_6_ParamsSpec,
      crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_7(password) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.Login_REMOVED_7_ParamsSpec,
      crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_10(properties) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.Login_REMOVED_10_ParamsSpec,
      crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec,
      [properties],
      false);
  }

  rEMOVED_12(password) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.Login_REMOVED_12_ParamsSpec,
      crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec,
      [password],
      false);
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

crosapi.mojom.LoginReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 14: {
          const params = crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addExternalLogoutRequestObserver(params.observer);
          break;
        }
        case 16: {
          const params = crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyOnExternalLogoutDone();
          break;
        }
        case 0: {
          const params = crosapi.mojom.Login_REMOVED_0_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_0(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = crosapi.mojom.Login_REMOVED_4_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_4(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = crosapi.mojom.Login_REMOVED_5_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_5(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = crosapi.mojom.Login_REMOVED_6_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_6(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = crosapi.mojom.Login_REMOVED_7_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_7(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = crosapi.mojom.Login_REMOVED_10_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_10(params.properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = crosapi.mojom.Login_REMOVED_12_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rEMOVED_12(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

crosapi.mojom.LoginReceiver = crosapi.mojom.LoginReceiver;

crosapi.mojom.LoginPtr = crosapi.mojom.LoginRemote;
crosapi.mojom.LoginRequest = crosapi.mojom.LoginPendingReceiver;

