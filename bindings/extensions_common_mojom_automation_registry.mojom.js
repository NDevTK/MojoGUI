// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/automation_registry.mojom
// Module: extensions.mojom

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var ax = ax || {};

extensions.mojom.RendererAutomationRegistry = {};
extensions.mojom.RendererAutomationRegistry.$interfaceName = 'extensions.mojom.RendererAutomationRegistry';
extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec = { $: {} };

// Interface: RendererAutomationRegistry
mojo.internal.Struct(
    extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec, 'extensions.mojom.RendererAutomationRegistry_BindAutomation_Params', [
      mojo.internal.StructField('automation', 0, 0, pending_associated_remote<ax.mojom.Automation>Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.RendererAutomationRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.RendererAutomationRegistryRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.RendererAutomationRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.RendererAutomationRegistryPendingReceiver,
      handle);
    this.$ = new extensions.mojom.RendererAutomationRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindAutomation(automation) {
    return this.$.bindAutomation(automation);
  }
};

extensions.mojom.RendererAutomationRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererAutomationRegistry', [
      { explicit: null },
    ]);
  }

  bindAutomation(automation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec,
      null,
      [automation],
      false);
  }

};

extensions.mojom.RendererAutomationRegistry.getRemote = function() {
  let remote = new extensions.mojom.RendererAutomationRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.RendererAutomationRegistry',
    'context');
  return remote.$;
};

extensions.mojom.RendererAutomationRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RendererAutomationRegistry', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec.$.structSpec);
          const result = this.impl.bindAutomation(params.automation);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.RendererAutomationRegistryReceiver = extensions.mojom.RendererAutomationRegistryReceiver;

extensions.mojom.RendererAutomationRegistryPtr = extensions.mojom.RendererAutomationRegistryRemote;
extensions.mojom.RendererAutomationRegistryRequest = extensions.mojom.RendererAutomationRegistryPendingReceiver;

