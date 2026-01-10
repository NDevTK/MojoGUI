// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_control.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.ServiceControl = {};
service_manager.mojom.ServiceControl.$interfaceName = 'service_manager.mojom.ServiceControl';
service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec = { $: {} };

// Interface: ServiceControl
mojo.internal.Struct(
    service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec, 'service_manager.mojom.ServiceControl_RequestQuit_Params', [
    ],
    [[0, 8]]);

service_manager.mojom.ServiceControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceControlRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ServiceControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServiceControlPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ServiceControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestQuit() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec,
      null,
      [],
      false);
  }

};

service_manager.mojom.ServiceControl.getRemote = function() {
  let remote = new service_manager.mojom.ServiceControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ServiceControl',
    'context');
  return remote.$;
};

service_manager.mojom.ServiceControlReceiver = class {
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
          const params = service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestQuit();
          break;
        }
      }
    }});
  }
};

service_manager.mojom.ServiceControlReceiver = service_manager.mojom.ServiceControlReceiver;

service_manager.mojom.ServiceControlPtr = service_manager.mojom.ServiceControlRemote;
service_manager.mojom.ServiceControlRequest = service_manager.mojom.ServiceControlPendingReceiver;

