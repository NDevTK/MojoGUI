// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/guest_os_sk_forwarder.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: GuestOsSkForwarderFactory
crosapi.mojom.mojom.GuestOsSkForwarderFactory = {};

crosapi.mojom.mojom.GuestOsSkForwarderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.GuestOsSkForwarderFactoryRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.GuestOsSkForwarderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.GuestOsSkForwarderFactoryPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.GuestOsSkForwarderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.GuestOsSkForwarderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGuestOsSkForwarder(remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.GuestOsSkForwarderFactory_BindGuestOsSkForwarder_ParamsSpec,
      null,
      [remote]);
  }

};

crosapi.mojom.mojom.GuestOsSkForwarderFactory.getRemote = function() {
  let remote = new crosapi.mojom.mojom.GuestOsSkForwarderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.GuestOsSkForwarderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for BindGuestOsSkForwarder
crosapi.mojom.mojom.GuestOsSkForwarderFactory_BindGuestOsSkForwarder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GuestOsSkForwarderFactory.BindGuestOsSkForwarder_Params',
      packedSize: 16,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(crosapi.mojom.GuestOsSkForwarderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.GuestOsSkForwarderFactoryPtr = crosapi.mojom.mojom.GuestOsSkForwarderFactoryRemote;
crosapi.mojom.mojom.GuestOsSkForwarderFactoryRequest = crosapi.mojom.mojom.GuestOsSkForwarderFactoryPendingReceiver;


// Interface: GuestOsSkForwarder
crosapi.mojom.mojom.GuestOsSkForwarder = {};

crosapi.mojom.mojom.GuestOsSkForwarderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.GuestOsSkForwarderRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.GuestOsSkForwarder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.GuestOsSkForwarderPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.GuestOsSkForwarderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.GuestOsSkForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  forwardRequest(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.GuestOsSkForwarder_ForwardRequest_ParamsSpec,
      crosapi.mojom.mojom.GuestOsSkForwarder_ForwardRequest_ResponseParamsSpec,
      [message]);
  }

};

crosapi.mojom.mojom.GuestOsSkForwarder.getRemote = function() {
  let remote = new crosapi.mojom.mojom.GuestOsSkForwarderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.GuestOsSkForwarder',
    'context');
  return remote.$;
};

// ParamsSpec for ForwardRequest
crosapi.mojom.mojom.GuestOsSkForwarder_ForwardRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GuestOsSkForwarder.ForwardRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.GuestOsSkForwarder_ForwardRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GuestOsSkForwarder.ForwardRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.GuestOsSkForwarderPtr = crosapi.mojom.mojom.GuestOsSkForwarderRemote;
crosapi.mojom.mojom.GuestOsSkForwarderRequest = crosapi.mojom.mojom.GuestOsSkForwarderPendingReceiver;

