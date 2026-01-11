// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_untrusted_ui.mojom
// Module: ash.mojom.sample_swa

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};

ash.mojom.sample_swa.UntrustedPageInterfacesFactory = {};
ash.mojom.sample_swa.UntrustedPageInterfacesFactory.$interfaceName = 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory';
ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec = { $: {} };

// Interface: UntrustedPageInterfacesFactory
mojo.internal.Struct(
    ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec, 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_Params', [
      mojo.internal.StructField('child_page', 0, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.ChildUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('parent_page', 8, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.ParentTrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createParentPage(child_page, parent_page) {
    return this.$.createParentPage(child_page, parent_page);
  }
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPageInterfacesFactory', [
      { explicit: null },
    ]);
  }

  createParentPage(child_page, parent_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec,
      null,
      [child_page, parent_page],
      false);
  }

};

ash.mojom.sample_swa.UntrustedPageInterfacesFactory.getRemote = function() {
  let remote = new ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.UntrustedPageInterfacesFactory',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPageInterfacesFactory', [
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
             decoder.decodeStructInline(ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec.$.structSpec);
          const result = this.impl.createParentPage(params.child_page, params.parent_page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryReceiver = ash.mojom.sample_swa.UntrustedPageInterfacesFactoryReceiver;

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPtr = ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemote;
ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRequest = ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver;

