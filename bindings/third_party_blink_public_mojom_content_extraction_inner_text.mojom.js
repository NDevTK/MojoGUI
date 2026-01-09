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
blink.mojom.NodeLocationTypeSpec = { $: mojo.internal.Enum() };

// Union: InnerTextSegment
blink.mojom.InnerTextSegmentSpec = { $: mojo.internal.Union(
    'blink.mojom.InnerTextSegment', {
      'node_location': {
        'ordinal': 0,
        'type': blink.mojom.NodeLocationTypeSpec,
      }},
      'text': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
      'frame': {
        'ordinal': 2,
        'type': blink.mojom.InnerTextFrameSpec,
      }},
    })
};

// Struct: InnerTextFrame
blink.mojom.InnerTextFrameSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerTextFrame',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'segments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.InnerTextSegmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'node_id_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'node_id_$value', originalFieldName: 'node_id' } },
        { name: 'node_id_$value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'node_id_$flag', originalFieldName: 'node_id' } },
        { name: 'max_words_per_aggregate_passage_$flag', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_words_per_aggregate_passage_$value', originalFieldName: 'max_words_per_aggregate_passage' } },
        { name: 'max_words_per_aggregate_passage_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_words_per_aggregate_passage_$flag', originalFieldName: 'max_words_per_aggregate_passage' } },
        { name: 'greedily_aggregate_sibling_nodes_$flag', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'greedily_aggregate_sibling_nodes_$value', originalFieldName: 'greedily_aggregate_sibling_nodes' } },
        { name: 'greedily_aggregate_sibling_nodes_$value', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'greedily_aggregate_sibling_nodes_$flag', originalFieldName: 'greedily_aggregate_sibling_nodes' } },
        { name: 'max_passages', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'min_words_per_passage_$flag', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'min_words_per_passage_$value', originalFieldName: 'min_words_per_passage' } },
        { name: 'min_words_per_passage_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'min_words_per_passage_$flag', originalFieldName: 'min_words_per_passage' } },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InnerTextParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.InnerTextAgent_GetInnerText_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InnerTextFrameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.InnerTextAgentPtr = blink.mojom.InnerTextAgentRemote;
blink.mojom.InnerTextAgentRequest = blink.mojom.InnerTextAgentPendingReceiver;

