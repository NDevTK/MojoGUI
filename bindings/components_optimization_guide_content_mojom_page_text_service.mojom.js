// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/content/mojom/page_text_service.mojom
// Module: optimization_guide.mojom

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
  onTextDumpChunk(chunk) {
    return this.$.onTextDumpChunk(chunk);
  }
  onChunksEnd() {
    return this.$.onChunksEnd();
  }
};

optimization_guide.mojom.PageTextConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageTextConsumer', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onTextDumpChunk(chunk) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec,
      null,
      [chunk],
      false);
  }

  onChunksEnd() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageTextConsumer', [
      { explicit: null },
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
             decoder.decodeStructInline(optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(optimization_guide.mojom.PageTextConsumer_OnTextDumpChunk_ParamsSpec.$.structSpec);
          const result = this.impl.onTextDumpChunk(params.chunk);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(optimization_guide.mojom.PageTextConsumer_OnChunksEnd_ParamsSpec.$.structSpec);
          const result = this.impl.onChunksEnd();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

optimization_guide.mojom.PageTextConsumerReceiver = optimization_guide.mojom.PageTextConsumerReceiver;

optimization_guide.mojom.PageTextConsumerPtr = optimization_guide.mojom.PageTextConsumerRemote;
optimization_guide.mojom.PageTextConsumerRequest = optimization_guide.mojom.PageTextConsumerPendingReceiver;


// Interface: PageTextService
mojo.internal.Struct(
    optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec, 'optimization_guide.mojom.PageTextService_RequestPageTextDump_Params', [
      mojo.internal.StructField('request', 0, 0, optimization_guide.mojom.PageTextDumpRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('consumer', 8, 0, mojo.internal.InterfaceProxy(optimization_guide.mojom.PageTextConsumerRemote), null, false, 0, undefined),
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
  requestPageTextDump(request, consumer) {
    return this.$.requestPageTextDump(request, consumer);
  }
};

optimization_guide.mojom.PageTextServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageTextService', [
      { explicit: null },
    ]);
  }

  requestPageTextDump(request, consumer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageTextService', [
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
             decoder.decodeStructInline(optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(optimization_guide.mojom.PageTextService_RequestPageTextDump_ParamsSpec.$.structSpec);
          const result = this.impl.requestPageTextDump(params.request, params.consumer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

optimization_guide.mojom.PageTextServiceReceiver = optimization_guide.mojom.PageTextServiceReceiver;

optimization_guide.mojom.PageTextServicePtr = optimization_guide.mojom.PageTextServiceRemote;
optimization_guide.mojom.PageTextServiceRequest = optimization_guide.mojom.PageTextServicePendingReceiver;

