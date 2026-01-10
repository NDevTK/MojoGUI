// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/chromoting_host_services.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Interface: ChromotingHostServices
remoting.mojom.mojom.ChromotingHostServices = {};

remoting.mojom.mojom.ChromotingHostServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.ChromotingHostServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingHostServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.ChromotingHostServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.ChromotingHostServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.ChromotingHostServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSessionServices(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec,
      null,
      [receiver]);
  }

};

remoting.mojom.mojom.ChromotingHostServices.getRemote = function() {
  let remote = new remoting.mojom.mojom.ChromotingHostServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingHostServices',
    'context');
  return remote.$;
};

// ParamsSpec for BindSessionServices
remoting.mojom.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingHostServices.BindSessionServices_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(remoting.mojom.ChromotingSessionServicesRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.ChromotingHostServicesPtr = remoting.mojom.mojom.ChromotingHostServicesRemote;
remoting.mojom.mojom.ChromotingHostServicesRequest = remoting.mojom.mojom.ChromotingHostServicesPendingReceiver;


// Interface: ChromotingSessionServices
remoting.mojom.mojom.ChromotingSessionServices = {};

remoting.mojom.mojom.ChromotingSessionServicesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.ChromotingSessionServicesRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.ChromotingSessionServices';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.ChromotingSessionServicesPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.ChromotingSessionServicesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.ChromotingSessionServicesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindWebAuthnProxy(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec,
      null,
      [receiver]);
  }

  bindRemoteUrlOpener(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec,
      null,
      [receiver]);
  }

  bindSecurityKeyForwarder(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec,
      null,
      [receiver]);
  }

};

remoting.mojom.mojom.ChromotingSessionServices.getRemote = function() {
  let remote = new remoting.mojom.mojom.ChromotingSessionServicesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.ChromotingSessionServices',
    'context');
  return remote.$;
};

// ParamsSpec for BindWebAuthnProxy
remoting.mojom.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingSessionServices.BindWebAuthnProxy_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(remoting.mojom.WebAuthnProxyRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindRemoteUrlOpener
remoting.mojom.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingSessionServices.BindRemoteUrlOpener_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(remoting.mojom.RemoteUrlOpenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindSecurityKeyForwarder
remoting.mojom.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingSessionServices.BindSecurityKeyForwarder_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(remoting.mojom.SecurityKeyForwarderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.ChromotingSessionServicesPtr = remoting.mojom.mojom.ChromotingSessionServicesRemote;
remoting.mojom.mojom.ChromotingSessionServicesRequest = remoting.mojom.mojom.ChromotingSessionServicesPendingReceiver;

