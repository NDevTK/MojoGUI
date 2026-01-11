// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/login.mojom
// Module: crosapi.mojom

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
  onRequestExternalLogout() {
    return this.$.onRequestExternalLogout();
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalLogoutRequestObserver', [
      { explicit: 0 },
    ]);
  }

  onRequestExternalLogout() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ExternalLogoutRequestObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestExternalLogout();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

crosapi.mojom.ExternalLogoutRequestObserverReceiver = crosapi.mojom.ExternalLogoutRequestObserverReceiver;

crosapi.mojom.ExternalLogoutRequestObserverPtr = crosapi.mojom.ExternalLogoutRequestObserverRemote;
crosapi.mojom.ExternalLogoutRequestObserverRequest = crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver;


// Interface: Login
mojo.internal.Struct(
    crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec, 'crosapi.mojom.Login_AddExternalLogoutRequestObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.ExternalLogoutRequestObserverRemote), null, false, 0, undefined),
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
  addExternalLogoutRequestObserver(observer) {
    return this.$.addExternalLogoutRequestObserver(observer);
  }
  notifyOnExternalLogoutDone() {
    return this.$.notifyOnExternalLogoutDone();
  }
  rEMOVED_0(password) {
    return this.$.rEMOVED_0(password);
  }
  rEMOVED_4(password) {
    return this.$.rEMOVED_4(password);
  }
  rEMOVED_5(password) {
    return this.$.rEMOVED_5(password);
  }
  rEMOVED_6(password) {
    return this.$.rEMOVED_6(password);
  }
  rEMOVED_7(password) {
    return this.$.rEMOVED_7(password);
  }
  rEMOVED_10(properties) {
    return this.$.rEMOVED_10(properties);
  }
  rEMOVED_12(password) {
    return this.$.rEMOVED_12(password);
  }
};

crosapi.mojom.LoginRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Login', [
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 10 },
      { explicit: 12 },
    ]);
  }

  addExternalLogoutRequestObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  notifyOnExternalLogoutDone() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec,
      null,
      [],
      false);
  }

  rEMOVED_0(password) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.Login_REMOVED_0_ParamsSpec,
      crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_4(password) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.Login_REMOVED_4_ParamsSpec,
      crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_5(password) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.Login_REMOVED_5_ParamsSpec,
      crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_6(password) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.Login_REMOVED_6_ParamsSpec,
      crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_7(password) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.Login_REMOVED_7_ParamsSpec,
      crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_10(properties) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.Login_REMOVED_10_ParamsSpec,
      crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec,
      [properties],
      false);
  }

  rEMOVED_12(password) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Login', [
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 0 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 10 },
      { explicit: 12 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_0_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_4_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_5_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_6_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_7_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_10_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_12_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addExternalLogoutRequestObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec.$.structSpec);
          const result = this.impl.notifyOnExternalLogoutDone();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_0_ParamsSpec.$.structSpec);
          const result = this.impl.rEMOVED_0(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_4_ParamsSpec.$.structSpec);
          const result = this.impl.rEMOVED_4(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_5_ParamsSpec.$.structSpec);
          const result = this.impl.rEMOVED_5(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_6_ParamsSpec.$.structSpec);
          const result = this.impl.rEMOVED_6(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_7_ParamsSpec.$.structSpec);
          const result = this.impl.rEMOVED_7(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_10_ParamsSpec.$.structSpec);
          const result = this.impl.rEMOVED_10(params.properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Login_REMOVED_12_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

crosapi.mojom.LoginReceiver = crosapi.mojom.LoginReceiver;

crosapi.mojom.LoginPtr = crosapi.mojom.LoginRemote;
crosapi.mojom.LoginRequest = crosapi.mojom.LoginPendingReceiver;

