// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browsing_topics/browsing_topics.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.EpochTopicSpec = { $: {} };
blink.mojom.BrowsingTopicsDocumentService = {};
blink.mojom.BrowsingTopicsDocumentService.$interfaceName = 'blink.mojom.BrowsingTopicsDocumentService';
blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec = { $: {} };

// Struct: EpochTopic
mojo.internal.Struct(
    blink.mojom.EpochTopicSpec, 'blink.mojom.EpochTopic', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('taxonomy_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('topic', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: BrowsingTopicsDocumentService
mojo.internal.Struct(
    blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec, 'blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_Params', [
      mojo.internal.StructField('observe', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BrowsingTopicsDocumentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BrowsingTopicsDocumentServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BrowsingTopicsDocumentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BrowsingTopicsDocumentServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.BrowsingTopicsDocumentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBrowsingTopics(observe) {
    return this.$.getBrowsingTopics(observe);
  }
};

blink.mojom.BrowsingTopicsDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BrowsingTopicsDocumentService', [
      { explicit: null },
    ]);
  }

  getBrowsingTopics(observe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec,
      null,
      [observe],
      false);
  }

};

blink.mojom.BrowsingTopicsDocumentService.getRemote = function() {
  let remote = new blink.mojom.BrowsingTopicsDocumentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BrowsingTopicsDocumentService',
    'context');
  return remote.$;
};

blink.mojom.BrowsingTopicsDocumentServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BrowsingTopicsDocumentService', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec.$.structSpec);
          const result = this.impl.getBrowsingTopics(params.observe);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.BrowsingTopicsDocumentServiceReceiver = blink.mojom.BrowsingTopicsDocumentServiceReceiver;

blink.mojom.BrowsingTopicsDocumentServicePtr = blink.mojom.BrowsingTopicsDocumentServiceRemote;
blink.mojom.BrowsingTopicsDocumentServiceRequest = blink.mojom.BrowsingTopicsDocumentServicePendingReceiver;

