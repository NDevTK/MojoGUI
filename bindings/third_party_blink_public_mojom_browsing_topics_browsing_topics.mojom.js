// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browsing_topics/browsing_topics.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: EpochTopic
blink.mojom.EpochTopicSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EpochTopic',
      packedSize: 16,
      fields: [
        { name: 'taxonomy_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: BrowsingTopicsDocumentService
blink.mojom.BrowsingTopicsDocumentService = {};

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

// ParamsSpec for GetBrowsingTopics
blink.mojom.BrowsingTopicsDocumentService_GetBrowsingTopics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BrowsingTopicsDocumentService.GetBrowsingTopics_Params',
      packedSize: 16,
      fields: [
        { name: 'observe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.BrowsingTopicsDocumentServicePtr = blink.mojom.BrowsingTopicsDocumentServiceRemote;
blink.mojom.BrowsingTopicsDocumentServiceRequest = blink.mojom.BrowsingTopicsDocumentServicePendingReceiver;

