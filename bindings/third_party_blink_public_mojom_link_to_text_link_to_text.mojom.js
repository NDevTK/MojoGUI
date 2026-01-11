// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/link_to_text/link_to_text.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.LinkGenerationReadyStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.LinkGenerationErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.TextFragmentReceiver = {};
blink.mojom.TextFragmentReceiver.$interfaceName = 'blink.mojom.TextFragmentReceiver';
blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec = { $: {} };

// Enum: LinkGenerationReadyStatus
blink.mojom.LinkGenerationReadyStatus = {
  kRequestedBeforeReady: 0,
  kRequestedAfterReady: 1,
};

// Enum: LinkGenerationError
blink.mojom.LinkGenerationError = {
  kNone: -1,
  kIncorrectSelector: 0,
  kNoRange: 1,
  kNoContext: 2,
  kContextExhausted: 3,
  kContextLimitReached: 4,
  kEmptySelection: 5,
  kTabHidden: 6,
  kOmniboxNavigation: 7,
  kTabCrash: 8,
  kUnknown: 9,
  kIFrame: 10,
  kTimeout: 11,
  kBlockList: 12,
  kNoRemoteConnection: 13,
  kNotGenerated: 14,
};

// Interface: TextFragmentReceiver
mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec, 'blink.mojom.TextFragmentReceiver_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec, 'blink.mojom.TextFragmentReceiver_RequestSelector_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParams', [
      mojo.internal.StructField('selector', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.LinkGenerationErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ready_status', 16, 0, blink.mojom.LinkGenerationReadyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec, 'blink.mojom.TextFragmentReceiver_RemoveFragments_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec, 'blink.mojom.TextFragmentReceiver_GetExistingSelectors_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParams', [
      mojo.internal.StructField('selectors', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.TextFragmentReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TextFragmentReceiverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextFragmentReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TextFragmentReceiverPendingReceiver,
      handle);
    this.$ = new blink.mojom.TextFragmentReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cancel() {
    return this.$.cancel();
  }
  requestSelector() {
    return this.$.requestSelector();
  }
  removeFragments() {
    return this.$.removeFragments();
  }
  extractTextFragmentsMatches() {
    return this.$.extractTextFragmentsMatches();
  }
  getExistingSelectors() {
    return this.$.getExistingSelectors();
  }
  extractFirstFragmentRect() {
    return this.$.extractFirstFragmentRect();
  }
};

blink.mojom.TextFragmentReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextFragmentReceiver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

  requestSelector() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec,
      blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec,
      [],
      false);
  }

  removeFragments() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec,
      null,
      [],
      false);
  }

  extractTextFragmentsMatches() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec,
      blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec,
      [],
      false);
  }

  getExistingSelectors() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec,
      blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec,
      [],
      false);
  }

  extractFirstFragmentRect() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec,
      blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.TextFragmentReceiver.getRemote = function() {
  let remote = new blink.mojom.TextFragmentReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextFragmentReceiver',
    'context');
  return remote.$;
};

blink.mojom.TextFragmentReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextFragmentReceiver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec.$.structSpec);
          const result = this.impl.cancel();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec.$.structSpec);
          const result = this.impl.requestSelector();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec.$.structSpec);
          const result = this.impl.removeFragments();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec.$.structSpec);
          const result = this.impl.extractTextFragmentsMatches();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec.$.structSpec);
          const result = this.impl.getExistingSelectors();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec.$.structSpec);
          const result = this.impl.extractFirstFragmentRect();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec);
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

blink.mojom.TextFragmentReceiverReceiver = blink.mojom.TextFragmentReceiverReceiver;

blink.mojom.TextFragmentReceiverPtr = blink.mojom.TextFragmentReceiverRemote;
blink.mojom.TextFragmentReceiverRequest = blink.mojom.TextFragmentReceiverPendingReceiver;

