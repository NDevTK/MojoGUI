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
      mojo.internal.StructField('topic', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('taxonomy_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
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
      [observe]);
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

blink.mojom.BrowsingTopicsDocumentServicePtr = blink.mojom.BrowsingTopicsDocumentServiceRemote;
blink.mojom.BrowsingTopicsDocumentServiceRequest = blink.mojom.BrowsingTopicsDocumentServicePendingReceiver;

