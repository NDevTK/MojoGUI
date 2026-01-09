// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/content/mojom/page_text_service.mojom
// Module: optimization_guide.mojom

'use strict';

// Module namespace
var optimization_guide = optimization_guide || {};
optimization_guide.mojom = optimization_guide.mojom || {};


// Enum: TextDumpEvent
optimization_guide.mojom.TextDumpEvent = {
  kFirstLayout: 0,
  kFinishedLoad: 1,
};

// Interface: PageTextConsumer
optimization_guide.mojom.PageTextConsumer = {};

optimization_guide.mojom.PageTextConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.PageTextConsumerRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.PageTextConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.PageTextConsumerPendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.PageTextConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.PageTextConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTextDumpChunk(chunk) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec,
      null,
      [chunk]);
  }

  onChunksEnd() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec,
      null,
      []);
  }

};

optimization_guide.mojom.PageTextConsumer.getRemote = function() {
  let remote = new optimization_guide.mojom.PageTextConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.PageTextConsumer',
    'context');
  return remote.$;
};

// ParamsSpec for OnTextDumpChunk
optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.PageTextConsumer.OnTextDumpChunk_Params',
      packedSize: 16,
      fields: [
        { name: 'chunk', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnChunksEnd
optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.PageTextConsumer.OnChunksEnd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.PageTextConsumerPtr = optimization_guide.mojom.PageTextConsumerRemote;
optimization_guide.mojom.PageTextConsumerRequest = optimization_guide.mojom.PageTextConsumerPendingReceiver;


// Interface: PageTextService
optimization_guide.mojom.PageTextService = {};

optimization_guide.mojom.PageTextServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide.mojom.PageTextServiceRemote = class {
  static get $interfaceName() {
    return 'optimization_guide.mojom.PageTextService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide.mojom.PageTextServicePendingReceiver,
      handle);
    this.$ = new optimization_guide.mojom.PageTextServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide.mojom.PageTextServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPageTextDump(request, consumer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec,
      null,
      [request, consumer]);
  }

};

optimization_guide.mojom.PageTextService.getRemote = function() {
  let remote = new optimization_guide.mojom.PageTextServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide.mojom.PageTextService',
    'context');
  return remote.$;
};

// ParamsSpec for RequestPageTextDump
optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide.mojom.PageTextService.RequestPageTextDump_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'consumer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
optimization_guide.mojom.PageTextServicePtr = optimization_guide.mojom.PageTextServiceRemote;
optimization_guide.mojom.PageTextServiceRequest = optimization_guide.mojom.PageTextServicePendingReceiver;

