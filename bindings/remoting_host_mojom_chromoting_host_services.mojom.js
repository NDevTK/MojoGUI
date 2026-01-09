// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/chromoting_host_services.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Interface: ChromotingHostServices
remoting.mojom.ChromotingHostServices = {};

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
      null,
      [receiver],
      undefined,
      undefined
    );
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

// ParamsSpec for BindSessionServices
remoting.mojom.ChromotingHostServices_BindSessionServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingHostServices.BindSessionServices_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.ChromotingHostServicesPtr = remoting.mojom.ChromotingHostServicesRemote;
remoting.mojom.ChromotingHostServicesRequest = remoting.mojom.ChromotingHostServicesPendingReceiver;


// Interface: ChromotingSessionServices
remoting.mojom.ChromotingSessionServices = {};

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
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindRemoteUrlOpener(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  bindSecurityKeyForwarder(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
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

// ParamsSpec for BindWebAuthnProxy
remoting.mojom.ChromotingSessionServices_BindWebAuthnProxy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingSessionServices.BindWebAuthnProxy_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindRemoteUrlOpener
remoting.mojom.ChromotingSessionServices_BindRemoteUrlOpener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingSessionServices.BindRemoteUrlOpener_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindSecurityKeyForwarder
remoting.mojom.ChromotingSessionServices_BindSecurityKeyForwarder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ChromotingSessionServices.BindSecurityKeyForwarder_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.ChromotingSessionServicesPtr = remoting.mojom.ChromotingSessionServicesRemote;
remoting.mojom.ChromotingSessionServicesRequest = remoting.mojom.ChromotingSessionServicesPendingReceiver;

