// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_text.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.NodeLocationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.InnerTextSegmentSpec = { $: {} };
blink.mojom.InnerTextFrameSpec = { $: {} };
blink.mojom.InnerTextParamsSpec = { $: {} };
blink.mojom.InnerTextAgent = {};
blink.mojom.InnerTextAgent.$interfaceName = 'blink.mojom.InnerTextAgent';
blink.mojom.InnerTextAgent_GetInnerText_ParamsSpec = { $: {} };
blink.mojom.InnerTextAgent_GetInnerText_ResponseParamsSpec = { $: {} };

// Enum: NodeLocationType
blink.mojom.NodeLocationType = {
  kStart: 0,
};

// Union: InnerTextSegment
mojo.internal.Union(
    blink.mojom.InnerTextSegmentSpec, 'blink.mojom.InnerTextSegment', {
      'node_location': {
        'ordinal': 0,
        'type': blink.mojom.NodeLocationTypeSpec.$,
        'nullable': false,
      },
      'text': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'frame': {
        'ordinal': 2,
        'type': blink.mojom.InnerTextFrameSpec.$,
        'nullable': false,
      },
    });

// Struct: InnerTextFrame
mojo.internal.Struct(
    blink.mojom.InnerTextFrameSpec, 'blink.mojom.InnerTextFrame', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('segments', 8, 0, mojo.internal.Array(blink.mojom.InnerTextSegmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InnerTextParams
mojo.internal.Struct(
    blink.mojom.InnerTextParamsSpec, 'blink.mojom.InnerTextParams', [
      mojo.internal.StructField('node_id_$value', 0, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'node_id_$flag', originalFieldName: 'node_id' }),
      mojo.internal.StructField('max_words_per_aggregate_passage_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_words_per_aggregate_passage_$flag', originalFieldName: 'max_words_per_aggregate_passage' }),
      mojo.internal.StructField('max_passages', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('min_words_per_passage_$value', 12, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'min_words_per_passage_$flag', originalFieldName: 'min_words_per_passage' }),
      mojo.internal.StructField('node_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'node_id_$value', originalFieldName: 'node_id' }),
      mojo.internal.StructField('max_words_per_aggregate_passage_$flag', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_words_per_aggregate_passage_$value', originalFieldName: 'max_words_per_aggregate_passage' }),
      mojo.internal.StructField('greedily_aggregate_sibling_nodes_$flag', 16, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'greedily_aggregate_sibling_nodes_$value', originalFieldName: 'greedily_aggregate_sibling_nodes' }),
      mojo.internal.StructField('greedily_aggregate_sibling_nodes_$value', 16, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'greedily_aggregate_sibling_nodes_$flag', originalFieldName: 'greedily_aggregate_sibling_nodes' }),
      mojo.internal.StructField('min_words_per_passage_$flag', 16, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'min_words_per_passage_$value', originalFieldName: 'min_words_per_passage' }),
    ],
    [[0, 32]]);

// Interface: InnerTextAgent
mojo.internal.Struct(
    blink.mojom.InnerTextAgent_GetInnerText_ParamsSpec, 'blink.mojom.InnerTextAgent_GetInnerText_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.InnerTextParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.InnerTextAgent_GetInnerText_ResponseParamsSpec, 'blink.mojom.InnerTextAgent_GetInnerText_ResponseParams', [
      mojo.internal.StructField('frame', 0, 0, blink.mojom.InnerTextFrameSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getInnerText(params) {
    return this.$.getInnerText(params);
  }
};

blink.mojom.InnerTextAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InnerTextAgent', [
      { explicit: null },
    ]);
  }

  getInnerText(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.InnerTextAgent_GetInnerText_ParamsSpec,
      blink.mojom.InnerTextAgent_GetInnerText_ResponseParamsSpec,
      [params],
      false);
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

blink.mojom.InnerTextAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InnerTextAgent', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.InnerTextAgent_GetInnerText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.InnerTextAgent_GetInnerText_ParamsSpec.$.structSpec);
          const result = this.impl.getInnerText(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.InnerTextAgent_GetInnerText_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.InnerTextAgentReceiver = blink.mojom.InnerTextAgentReceiver;

blink.mojom.InnerTextAgentPtr = blink.mojom.InnerTextAgentRemote;
blink.mojom.InnerTextAgentRequest = blink.mojom.InnerTextAgentPendingReceiver;

