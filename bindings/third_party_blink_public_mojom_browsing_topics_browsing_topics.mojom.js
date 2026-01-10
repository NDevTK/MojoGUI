// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browsing_topics/browsing_topics.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.BrowsingTopicsDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBrowsingTopics(observe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
          const params = blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getBrowsingTopics');
          const result = this.impl.getBrowsingTopics(params.observe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BrowsingTopicsDocumentServiceReceiver = blink.mojom.BrowsingTopicsDocumentServiceReceiver;

blink.mojom.BrowsingTopicsDocumentServicePtr = blink.mojom.BrowsingTopicsDocumentServiceRemote;
blink.mojom.BrowsingTopicsDocumentServiceRequest = blink.mojom.BrowsingTopicsDocumentServicePendingReceiver;

