// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browsing_topics/browsing_topics.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: EpochTopic
blink.mojom.mojom.EpochTopicSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EpochTopic',
      packedSize: 48,
      fields: [
        { name: 'topic', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'config_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'model_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'taxonomy_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: BrowsingTopicsDocumentService
blink.mojom.mojom.BrowsingTopicsDocumentService = {};

blink.mojom.mojom.BrowsingTopicsDocumentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BrowsingTopicsDocumentServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BrowsingTopicsDocumentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BrowsingTopicsDocumentServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BrowsingTopicsDocumentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BrowsingTopicsDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBrowsingTopics(observe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec,
      null,
      [observe]);
  }

};

blink.mojom.mojom.BrowsingTopicsDocumentService.getRemote = function() {
  let remote = new blink.mojom.mojom.BrowsingTopicsDocumentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BrowsingTopicsDocumentService',
    'context');
  return remote.$;
};

// ParamsSpec for GetBrowsingTopics
blink.mojom.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BrowsingTopicsDocumentService.GetBrowsingTopics_Params',
      packedSize: 16,
      fields: [
        { name: 'observe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BrowsingTopicsDocumentServicePtr = blink.mojom.mojom.BrowsingTopicsDocumentServiceRemote;
blink.mojom.mojom.BrowsingTopicsDocumentServiceRequest = blink.mojom.mojom.BrowsingTopicsDocumentServicePendingReceiver;

