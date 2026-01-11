// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service.mojom
// Module: service_manager.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.BindSourceInfoSpec = { $: {} };
service_manager.mojom.Service = {};
service_manager.mojom.Service.$interfaceName = 'service_manager.mojom.Service';
service_manager.mojom.Service_OnStart_ParamsSpec = { $: {} };
service_manager.mojom.Service_OnStart_ResponseParamsSpec = { $: {} };
service_manager.mojom.Service_OnBindInterface_ParamsSpec = { $: {} };
service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec = { $: {} };
service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec = { $: {} };

// Struct: BindSourceInfo
mojo.internal.Struct(
    service_manager.mojom.BindSourceInfoSpec, 'service_manager.mojom.BindSourceInfo', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('required_capabilities', 8, 0, service_manager.mojom.CapabilitySetSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: Service
mojo.internal.Struct(
    service_manager.mojom.Service_OnStart_ParamsSpec, 'service_manager.mojom.Service_OnStart_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.Service_OnStart_ResponseParamsSpec, 'service_manager.mojom.Service_OnStart_ResponseParams', [
      mojo.internal.StructField('connector_receiver', 0, 0, mojo.internal.InterfaceRequest(service_manager.mojom.ConnectorRemote), null, false, 0, undefined),
      mojo.internal.StructField('control_receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    service_manager.mojom.Service_OnBindInterface_ParamsSpec, 'service_manager.mojom.Service_OnBindInterface_Params', [
      mojo.internal.StructField('source', 0, 0, service_manager.mojom.BindSourceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec, 'service_manager.mojom.Service_OnBindInterface_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec, 'service_manager.mojom.Service_CreatePackagedServiceInstance_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(service_manager.mojom.ServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('metadata', 16, 0, mojo.internal.InterfaceProxy(service_manager.mojom.ProcessMetadataRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

service_manager.mojom.ServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.Service';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServicePendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStart(identity) {
    return this.$.onStart(identity);
  }
  onBindInterface(source, interface_name, interface_pipe) {
    return this.$.onBindInterface(source, interface_name, interface_pipe);
  }
  createPackagedServiceInstance(identity, receiver, metadata) {
    return this.$.createPackagedServiceInstance(identity, receiver, metadata);
  }
};

service_manager.mojom.ServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Service', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStart(identity) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      service_manager.mojom.Service_OnStart_ParamsSpec,
      service_manager.mojom.Service_OnStart_ResponseParamsSpec,
      [identity],
      false);
  }

  onBindInterface(source, interface_name, interface_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      service_manager.mojom.Service_OnBindInterface_ParamsSpec,
      service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec,
      [source, interface_name, interface_pipe],
      false);
  }

  createPackagedServiceInstance(identity, receiver, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec,
      null,
      [identity, receiver, metadata],
      false);
  }

};

service_manager.mojom.Service.getRemote = function() {
  let remote = new service_manager.mojom.ServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.Service',
    'context');
  return remote.$;
};

service_manager.mojom.ServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Service', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(service_manager.mojom.Service_OnStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.Service_OnBindInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.Service_OnStart_ParamsSpec.$.structSpec);
          const result = this.impl.onStart(params.identity);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, service_manager.mojom.Service_OnStart_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.Service_OnBindInterface_ParamsSpec.$.structSpec);
          const result = this.impl.onBindInterface(params.source, params.interface_name, params.interface_pipe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, service_manager.mojom.Service_OnBindInterface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.Service_CreatePackagedServiceInstance_ParamsSpec.$.structSpec);
          const result = this.impl.createPackagedServiceInstance(params.identity, params.receiver, params.metadata);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

service_manager.mojom.ServiceReceiver = service_manager.mojom.ServiceReceiver;

service_manager.mojom.ServicePtr = service_manager.mojom.ServiceRemote;
service_manager.mojom.ServiceRequest = service_manager.mojom.ServicePendingReceiver;

