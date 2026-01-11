// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_control.mojom
// Module: service_manager.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  requestQuit() {
    return this.$.requestQuit();
  }
};

service_manager.mojom.ServiceControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceControl', [
      { explicit: null },
    ]);
  }

  requestQuit() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceControl', [
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec.$.structSpec);
          const result = this.impl.requestQuit();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

service_manager.mojom.ServiceControlReceiver = service_manager.mojom.ServiceControlReceiver;

service_manager.mojom.ServiceControlPtr = service_manager.mojom.ServiceControlRemote;
service_manager.mojom.ServiceControlRequest = service_manager.mojom.ServiceControlPendingReceiver;

