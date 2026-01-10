// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/link_to_text/link_to_text.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.TextFragmentReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

  requestSelector() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec,
      blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec,
      [],
      false);
  }

  removeFragments() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec,
      null,
      [],
      false);
  }

  extractTextFragmentsMatches() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec,
      blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec,
      [],
      false);
  }

  getExistingSelectors() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec,
      blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec,
      [],
      false);
  }

  extractFirstFragmentRect() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestSelector
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSelector (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RemoveFragments
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveFragments (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ExtractTextFragmentsMatches
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractTextFragmentsMatches (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetExistingSelectors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetExistingSelectors (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ExtractFirstFragmentRect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractFirstFragmentRect (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestSelector');
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
          const params = decoder.decodeStruct(blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeFragments');
          const result = this.impl.removeFragments();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extractTextFragmentsMatches');
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
          const params = decoder.decodeStruct(blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getExistingSelectors');
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
          const params = decoder.decodeStruct(blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extractFirstFragmentRect');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.TextFragmentReceiverReceiver = blink.mojom.TextFragmentReceiverReceiver;

blink.mojom.TextFragmentReceiverPtr = blink.mojom.TextFragmentReceiverRemote;
blink.mojom.TextFragmentReceiverRequest = blink.mojom.TextFragmentReceiverPendingReceiver;

