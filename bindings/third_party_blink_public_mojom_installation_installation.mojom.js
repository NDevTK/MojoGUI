// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installation/installation.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.InstallationService = {};
blink.mojom.InstallationService.$interfaceName = 'blink.mojom.InstallationService';
blink.mojom.InstallationService_OnInstall_ParamsSpec = { $: {} };

// Interface: InstallationService
mojo.internal.Struct(
    blink.mojom.InstallationService_OnInstall_ParamsSpec, 'blink.mojom.InstallationService_OnInstall_Params', [
    ],
    [[0, 8]]);

blink.mojom.InstallationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.InstallationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InstallationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.InstallationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.InstallationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onInstall() {
    return this.$.onInstall();
  }
};

blink.mojom.InstallationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InstallationService', [
      { explicit: null },
    ]);
  }

  onInstall() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.InstallationService_OnInstall_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.InstallationService.getRemote = function() {
  let remote = new blink.mojom.InstallationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InstallationService',
    'context');
  return remote.$;
};

blink.mojom.InstallationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InstallationService', [
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
             decoder.decodeStructInline(blink.mojom.InstallationService_OnInstall_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.InstallationService_OnInstall_ParamsSpec.$.structSpec);
          const result = this.impl.onInstall();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.InstallationServiceReceiver = blink.mojom.InstallationServiceReceiver;

blink.mojom.InstallationServicePtr = blink.mojom.InstallationServiceRemote;
blink.mojom.InstallationServiceRequest = blink.mojom.InstallationServicePendingReceiver;

