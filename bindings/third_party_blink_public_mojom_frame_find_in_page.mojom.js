// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/find_in_page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.StopFindActionSpec = { $: mojo.internal.Enum() };
blink.mojom.FindMatchUpdateTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FindOptionsSpec = { $: {} };
blink.mojom.FindInPage = {};
blink.mojom.FindInPage.$interfaceName = 'blink.mojom.FindInPage';
blink.mojom.FindInPage_Find_ParamsSpec = { $: {} };
blink.mojom.FindInPage_StopFinding_ParamsSpec = { $: {} };
blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec = { $: {} };
blink.mojom.FindInPage_SetClient_ParamsSpec = { $: {} };
blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec = { $: {} };
blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec = { $: {} };
blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec = { $: {} };
blink.mojom.FindInPage_FindMatchRects_ParamsSpec = { $: {} };
blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec = { $: {} };
blink.mojom.FindInPageClient = {};
blink.mojom.FindInPageClient.$interfaceName = 'blink.mojom.FindInPageClient';
blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec = { $: {} };
blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec = { $: {} };

// Enum: StopFindAction
blink.mojom.StopFindAction = {
  kStopFindActionClearSelection: 0,
  kStopFindActionKeepSelection: 1,
  kStopFindActionActivateSelection: 2,
};

// Enum: FindMatchUpdateType
blink.mojom.FindMatchUpdateType = {
  kFinalUpdate: 0,
  kMoreUpdatesComing: 1,
};

// Struct: FindOptions
mojo.internal.Struct(
    blink.mojom.FindOptionsSpec, 'blink.mojom.FindOptions', [
      mojo.internal.StructField('forward', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('match_case', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('new_session', 0, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('find_match', 0, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('force', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('run_synchronously_for_testing', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FindInPage
mojo.internal.Struct(
    blink.mojom.FindInPage_Find_ParamsSpec, 'blink.mojom.FindInPage_Find_Params', [
      mojo.internal.StructField('search_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.FindOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_StopFinding_ParamsSpec, 'blink.mojom.FindInPage_StopFinding_Params', [
      mojo.internal.StructField('action', 0, 0, blink.mojom.StopFindActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec, 'blink.mojom.FindInPage_ClearActiveFindMatch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_SetClient_ParamsSpec, 'blink.mojom.FindInPage_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FindInPageClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec, 'blink.mojom.FindInPage_GetNearestFindResult_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec, 'blink.mojom.FindInPage_GetNearestFindResult_ResponseParams', [
      mojo.internal.StructField('distance', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec, 'blink.mojom.FindInPage_ActivateNearestFindResult_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_FindMatchRects_ParamsSpec, 'blink.mojom.FindInPage_FindMatchRects_Params', [
      mojo.internal.StructField('current_version', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec, 'blink.mojom.FindInPage_FindMatchRects_ResponseParams', [
      mojo.internal.StructField('rects', 0, 0, mojo.internal.Array(gfx.mojom.RectFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('active_match_rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.FindInPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FindInPageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FindInPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FindInPagePendingReceiver,
      handle);
    this.$ = new blink.mojom.FindInPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FindInPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  find(request_id, search_text, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FindInPage_Find_ParamsSpec,
      null,
      [request_id, search_text, options],
      false);
  }

  stopFinding(action) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FindInPage_StopFinding_ParamsSpec,
      null,
      [action],
      false);
  }

  clearActiveFindMatch() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec,
      null,
      [],
      false);
  }

  setClient(client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FindInPage_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  getNearestFindResult(point) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec,
      blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec,
      [point],
      false);
  }

  activateNearestFindResult(request_id, point) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec,
      null,
      [request_id, point],
      false);
  }

  findMatchRects(current_version) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FindInPage_FindMatchRects_ParamsSpec,
      blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec,
      [current_version],
      false);
  }

};

blink.mojom.FindInPage.getRemote = function() {
  let remote = new blink.mojom.FindInPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FindInPage',
    'context');
  return remote.$;
};

blink.mojom.FindInPageReceiver = class {
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
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: Find
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPage_Find_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Find (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopFinding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPage_StopFinding_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopFinding (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ClearActiveFindMatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearActiveFindMatch (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPage_SetClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetNearestFindResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNearestFindResult (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ActivateNearestFindResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateNearestFindResult (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FindMatchRects
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPage_FindMatchRects_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FindMatchRects (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.FindInPage_Find_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.find');
          const result = this.impl.find(params.request_id, params.search_text, params.options);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FindInPage_StopFinding_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopFinding');
          const result = this.impl.stopFinding(params.action);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearActiveFindMatch');
          const result = this.impl.clearActiveFindMatch();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FindInPage_SetClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNearestFindResult');
          const result = this.impl.getNearestFindResult(params.point);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.activateNearestFindResult');
          const result = this.impl.activateNearestFindResult(params.request_id, params.point);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FindInPage_FindMatchRects_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.findMatchRects');
          const result = this.impl.findMatchRects(params.current_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec);
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

blink.mojom.FindInPageReceiver = blink.mojom.FindInPageReceiver;

blink.mojom.FindInPagePtr = blink.mojom.FindInPageRemote;
blink.mojom.FindInPageRequest = blink.mojom.FindInPagePendingReceiver;


// Interface: FindInPageClient
mojo.internal.Struct(
    blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec, 'blink.mojom.FindInPageClient_SetNumberOfMatches_Params', [
      mojo.internal.StructField('update_type', 0, 0, blink.mojom.FindMatchUpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_matches', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec, 'blink.mojom.FindInPageClient_SetActiveMatch_Params', [
      mojo.internal.StructField('active_match_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_type', 8, 0, blink.mojom.FindMatchUpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('active_match_ordinal', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.FindInPageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FindInPageClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FindInPageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FindInPageClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.FindInPageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FindInPageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNumberOfMatches(request_id, number_of_matches, update_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec,
      null,
      [request_id, number_of_matches, update_type],
      false);
  }

  setActiveMatch(request_id, active_match_rect, active_match_ordinal, update_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec,
      null,
      [request_id, active_match_rect, active_match_ordinal, update_type],
      false);
  }

};

blink.mojom.FindInPageClient.getRemote = function() {
  let remote = new blink.mojom.FindInPageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FindInPageClient',
    'context');
  return remote.$;
};

blink.mojom.FindInPageClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: SetNumberOfMatches
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNumberOfMatches (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetActiveMatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActiveMatch (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNumberOfMatches');
          const result = this.impl.setNumberOfMatches(params.request_id, params.number_of_matches, params.update_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setActiveMatch');
          const result = this.impl.setActiveMatch(params.request_id, params.active_match_rect, params.active_match_ordinal, params.update_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FindInPageClientReceiver = blink.mojom.FindInPageClientReceiver;

blink.mojom.FindInPageClientPtr = blink.mojom.FindInPageClientRemote;
blink.mojom.FindInPageClientRequest = blink.mojom.FindInPageClientPendingReceiver;

