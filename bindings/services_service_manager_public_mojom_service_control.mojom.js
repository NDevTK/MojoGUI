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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.requestQuit');
          const result = this.impl.requestQuit();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

service_manager.mojom.ServiceControlReceiver = service_manager.mojom.ServiceControlReceiver;

service_manager.mojom.ServiceControlPtr = service_manager.mojom.ServiceControlRemote;
service_manager.mojom.ServiceControlRequest = service_manager.mojom.ServiceControlPendingReceiver;

