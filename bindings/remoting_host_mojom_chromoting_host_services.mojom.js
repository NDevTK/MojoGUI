// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/chromoting_host_services.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.ChromotingHostServices = {};
remoting.mojom.ChromotingHostServices.$interfaceName = 'remoting.mojom.ChromotingHostServices';
remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices = {};
remoting.mojom.ChromotingSessionServices.$interfaceName = 'remoting.mojom.ChromotingSessionServices';
remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec = { $: {} };
remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec = { $: {} };

// Interface: ChromotingHostServices
mojo.internal.Struct(
    remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec, 'remoting.mojom.ChromotingHostServices_BindSessionServices_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.ChromotingSessionServicesSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.ChromotingHostServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.ChromotingHostServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingHostServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.ChromotingHostServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.ChromotingHostServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.ChromotingHostServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSessionServices(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

remoting.mojom.ChromotingHostServices.getRemote = function() {
  let remote = new remoting.mojom.ChromotingHostServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingHostServices',
    'context');
  return remote.$;
};

remoting.mojom.ChromotingHostServicesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSessionServices(params.receiver);
          break;
        }
      }
    }});
  }
};

remoting.mojom.ChromotingHostServicesReceiver = remoting.mojom.ChromotingHostServicesReceiver;

remoting.mojom.ChromotingHostServicesPtr = remoting.mojom.ChromotingHostServicesRemote;
remoting.mojom.ChromotingHostServicesRequest = remoting.mojom.ChromotingHostServicesPendingReceiver;


// Interface: ChromotingSessionServices
mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnProxyRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.RemoteUrlOpenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec, 'remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.SecurityKeyForwarderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.ChromotingSessionServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.ChromotingSessionServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingSessionServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.ChromotingSessionServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.ChromotingSessionServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.ChromotingSessionServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindWebAuthnProxy(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindRemoteUrlOpener(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSecurityKeyForwarder(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

remoting.mojom.ChromotingSessionServices.getRemote = function() {
  let remote = new remoting.mojom.ChromotingSessionServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingSessionServices',
    'context');
  return remote.$;
};

remoting.mojom.ChromotingSessionServicesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindWebAuthnProxy(params.receiver);
          break;
        }
        case 1: {
          const params = remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindRemoteUrlOpener(params.receiver);
          break;
        }
        case 2: {
          const params = remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSecurityKeyForwarder(params.receiver);
          break;
        }
      }
    }});
  }
};

remoting.mojom.ChromotingSessionServicesReceiver = remoting.mojom.ChromotingSessionServicesReceiver;

remoting.mojom.ChromotingSessionServicesPtr = remoting.mojom.ChromotingSessionServicesRemote;
remoting.mojom.ChromotingSessionServicesRequest = remoting.mojom.ChromotingSessionServicesPendingReceiver;

