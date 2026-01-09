// Auto-generated MojoJS binding
// Source: chromium_src/components/browsing_topics/mojom/browsing_topics_internals.mojom
// Module: browsing_topics.mojom

'use strict';

// Module namespace
var browsing_topics = browsing_topics || {};
browsing_topics.mojom = browsing_topics.mojom || {};


// Interface: PageHandler
browsing_topics.mojom.PageHandler = {};

browsing_topics.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

browsing_topics.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'browsing_topics.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      browsing_topics.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new browsing_topics.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

browsing_topics.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBrowsingTopicsConfiguration() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec,
      []);
  }

  getBrowsingTopicsState(calculate_now) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec,
      [calculate_now]);
  }

  getModelInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec,
      []);
  }

  classifyHosts(hosts) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec,
      browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec,
      [hosts]);
  }

};

browsing_topics.mojom.PageHandler.getRemote = function() {
  let remote = new browsing_topics.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'browsing_topics.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetBrowsingTopicsConfiguration
browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsConfiguration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsConfiguration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBrowsingTopicsState
browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsState_Params',
      packedSize: 16,
      fields: [
        { name: 'calculate_now', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetModelInfo
browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetModelInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetModelInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClassifyHosts
browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.ClassifyHosts_Params',
      packedSize: 16,
      fields: [
        { name: 'hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.ClassifyHosts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'topics_for_hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
browsing_topics.mojom.PageHandlerPtr = browsing_topics.mojom.PageHandlerRemote;
browsing_topics.mojom.PageHandlerRequest = browsing_topics.mojom.PageHandlerPendingReceiver;

