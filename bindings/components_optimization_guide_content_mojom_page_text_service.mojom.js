// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/content/mojom/page_text_service.mojom
// Module: optimization_guide.mojom

'use strict';

// Module namespace
var optimization_guide = optimization_guide || {};
optimization_guide.mojom = optimization_guide.mojom || {};
var mojo_base = mojo_base || {};

optimization_guide.mojom.TextDumpEventSpec = { $: mojo.internal.Enum() };
optimization_guide.mojom.PageTextDumpRequestSpec = { $: {} };
optimization_guide.mojom.PageTextConsumer = {};
optimization_guide.mojom.PageTextConsumer.$interfaceName = 'optimization_guide.mojom.PageTextConsumer';
optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec = { $: {} };
optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec = { $: {} };
optimization_guide.mojom.PageTextService = {};
optimization_guide.mojom.PageTextService.$interfaceName = 'optimization_guide.mojom.PageTextService';
optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec = { $: {} };

// Enum: TextDumpEvent
optimization_guide.mojom.TextDumpEvent = {
  kFirstLayout: 0,
  kFinishedLoad: 1,
};

// Struct: PageTextDumpRequest
mojo.internal.Struct(
    optimization_guide.mojom.PageTextDumpRequestSpec, 'optimization_guide.mojom.PageTextDumpRequest', [
      mojo.internal.StructField('event', 0, 0, optimization_guide.mojom.TextDumpEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageTextConsumer
mojo.internal.Struct(
    optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec, 'optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_Params', [
      mojo.internal.StructField('chunk', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec, 'optimization_guide.mojom.PageTextConsumer_OnChunksEnd_Params', [
    ],
    [[0, 8]]);

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
      [chunk],
      false);
  }

  onChunksEnd() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec,
      null,
      [],
      false);
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

optimization_guide.mojom.PageTextConsumerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTextDumpChunk(params.chunk);
          break;
        }
        case 1: {
          const params = optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onChunksEnd();
          break;
        }
      }
    });
  }
};

optimization_guide.mojom.PageTextConsumerReceiver = optimization_guide.mojom.PageTextConsumerReceiver;

optimization_guide.mojom.PageTextConsumerPtr = optimization_guide.mojom.PageTextConsumerRemote;
optimization_guide.mojom.PageTextConsumerRequest = optimization_guide.mojom.PageTextConsumerPendingReceiver;


// Interface: PageTextService
mojo.internal.Struct(
    optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec, 'optimization_guide.mojom.PageTextService_RequestPageTextDump_Params', [
      mojo.internal.StructField('request', 0, 0, optimization_guide.mojom.PageTextDumpRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('consumer', 8, 0, mojo.internal.InterfaceProxy(optimization_guide.mojom.PageTextConsumerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [request, consumer],
      false);
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

optimization_guide.mojom.PageTextServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestPageTextDump(params.request, params.consumer);
          break;
        }
      }
    });
  }
};

optimization_guide.mojom.PageTextServiceReceiver = optimization_guide.mojom.PageTextServiceReceiver;

optimization_guide.mojom.PageTextServicePtr = optimization_guide.mojom.PageTextServiceRemote;
optimization_guide.mojom.PageTextServiceRequest = optimization_guide.mojom.PageTextServicePendingReceiver;

