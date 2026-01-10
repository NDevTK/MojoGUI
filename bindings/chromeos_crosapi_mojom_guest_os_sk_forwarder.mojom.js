// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/guest_os_sk_forwarder.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.GuestOsSkForwarderFactory = {};
crosapi.mojom.GuestOsSkForwarderFactory.$interfaceName = 'crosapi.mojom.GuestOsSkForwarderFactory';
crosapi.mojom.GuestOsSkForwarderFactory_BindGuestOsSkForwarder_ParamsSpec = { $: {} };
crosapi.mojom.GuestOsSkForwarder = {};
crosapi.mojom.GuestOsSkForwarder.$interfaceName = 'crosapi.mojom.GuestOsSkForwarder';
crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ParamsSpec = { $: {} };
crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ResponseParamsSpec = { $: {} };

// Interface: GuestOsSkForwarderFactory
mojo.internal.Struct(
    crosapi.mojom.GuestOsSkForwarderFactory_BindGuestOsSkForwarder_ParamsSpec, 'crosapi.mojom.GuestOsSkForwarderFactory_BindGuestOsSkForwarder_Params', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.GuestOsSkForwarderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.GuestOsSkForwarderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.GuestOsSkForwarderFactoryRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.GuestOsSkForwarderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.GuestOsSkForwarderFactoryPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.GuestOsSkForwarderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.GuestOsSkForwarderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGuestOsSkForwarder(remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.GuestOsSkForwarderFactory_BindGuestOsSkForwarder_ParamsSpec,
      null,
      [remote],
      false);
  }

};

crosapi.mojom.GuestOsSkForwarderFactory.getRemote = function() {
  let remote = new crosapi.mojom.GuestOsSkForwarderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.GuestOsSkForwarderFactory',
    'context');
  return remote.$;
};

crosapi.mojom.GuestOsSkForwarderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.GuestOsSkForwarderFactory_BindGuestOsSkForwarder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindGuestOsSkForwarder(params.remote);
          break;
        }
      }
    }});
  }
};

crosapi.mojom.GuestOsSkForwarderFactoryReceiver = crosapi.mojom.GuestOsSkForwarderFactoryReceiver;

crosapi.mojom.GuestOsSkForwarderFactoryPtr = crosapi.mojom.GuestOsSkForwarderFactoryRemote;
crosapi.mojom.GuestOsSkForwarderFactoryRequest = crosapi.mojom.GuestOsSkForwarderFactoryPendingReceiver;


// Interface: GuestOsSkForwarder
mojo.internal.Struct(
    crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ParamsSpec, 'crosapi.mojom.GuestOsSkForwarder_ForwardRequest_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ResponseParamsSpec, 'crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.GuestOsSkForwarderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.GuestOsSkForwarderRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.GuestOsSkForwarder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.GuestOsSkForwarderPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.GuestOsSkForwarderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.GuestOsSkForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  forwardRequest(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ParamsSpec,
      crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ResponseParamsSpec,
      [message],
      false);
  }

};

crosapi.mojom.GuestOsSkForwarder.getRemote = function() {
  let remote = new crosapi.mojom.GuestOsSkForwarderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.GuestOsSkForwarder',
    'context');
  return remote.$;
};

crosapi.mojom.GuestOsSkForwarderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forwardRequest(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.GuestOsSkForwarder_ForwardRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

crosapi.mojom.GuestOsSkForwarderReceiver = crosapi.mojom.GuestOsSkForwarderReceiver;

crosapi.mojom.GuestOsSkForwarderPtr = crosapi.mojom.GuestOsSkForwarderRemote;
crosapi.mojom.GuestOsSkForwarderRequest = crosapi.mojom.GuestOsSkForwarderPendingReceiver;

