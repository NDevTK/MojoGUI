// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider.mojom
// Module: service_manager.mojom

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.InterfaceProvider = {};
service_manager.mojom.InterfaceProvider.$interfaceName = 'service_manager.mojom.InterfaceProvider';
service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec = { $: {} };

// Interface: InterfaceProvider
mojo.internal.Struct(
    service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec, 'service_manager.mojom.InterfaceProvider_GetInterface_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

service_manager.mojom.InterfaceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.InterfaceProviderRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.InterfaceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.InterfaceProviderPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.InterfaceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getInterface(interface_name, pipe) {
    return this.$.getInterface(interface_name, pipe);
  }
};

service_manager.mojom.InterfaceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InterfaceProvider', [
      { explicit: null },
    ]);
  }

  getInterface(interface_name, pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec,
      null,
      [interface_name, pipe],
      false);
  }

};

service_manager.mojom.InterfaceProvider.getRemote = function() {
  let remote = new service_manager.mojom.InterfaceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.InterfaceProvider',
    'context');
  return remote.$;
};

service_manager.mojom.InterfaceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InterfaceProvider', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.InterfaceProvider_GetInterface_ParamsSpec.$.structSpec);
          const result = this.impl.getInterface(params.interface_name, params.pipe);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

service_manager.mojom.InterfaceProviderReceiver = service_manager.mojom.InterfaceProviderReceiver;

service_manager.mojom.InterfaceProviderPtr = service_manager.mojom.InterfaceProviderRemote;
service_manager.mojom.InterfaceProviderRequest = service_manager.mojom.InterfaceProviderPendingReceiver;

