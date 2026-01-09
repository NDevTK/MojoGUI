// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_text.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: NodeLocationType
blink.mojom.NodeLocationType = {
  kStart: 0,
};

// Struct: InnerTextFrame
blink.mojom.InnerTextFrameSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerTextFrame',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'segments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InnerTextParams
blink.mojom.InnerTextParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerTextParams',
      packedSize: 32,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
        { name: 'max_words_per_aggregate_passage', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'max_passages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'min_words_per_passage', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'greedily_aggregate_sibling_nodes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: InnerTextAgent
blink.mojom.InnerTextAgent = {};

blink.mojom.InnerTextAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.InnerTextAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InnerTextAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.InnerTextAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.InnerTextAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.InnerTextAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInnerText(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.InnerTextAgent_GetInnerText_ParamsSpec,
      blink.mojom.InnerTextAgent_GetInnerText_ResponseParamsSpec,
      [params]);
  }

};

blink.mojom.InnerTextAgent.getRemote = function() {
  let remote = new blink.mojom.InnerTextAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InnerTextAgent',
    'context');
  return remote.$;
};

// ParamsSpec for GetInnerText
blink.mojom.InnerTextAgent_GetInnerText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerTextAgent.GetInnerText_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.InnerTextAgent_GetInnerText_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerTextAgent.GetInnerText_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.InnerTextAgentPtr = blink.mojom.InnerTextAgentRemote;
blink.mojom.InnerTextAgentRequest = blink.mojom.InnerTextAgentPendingReceiver;

