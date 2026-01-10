// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/most_relevant_tab_resumption/most_relevant_tab_resumption.mojom
// Module: ntp.most_relevant_tab_resumption.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.most_relevant_tab_resumption = ntp.most_relevant_tab_resumption || {};
ntp.most_relevant_tab_resumption.mojom = ntp.most_relevant_tab_resumption.mojom || {};
var url = url || {};

ntp.most_relevant_tab_resumption.mojom.ScoredURLUserActionSpec = { $: mojo.internal.Enum() };
ntp.most_relevant_tab_resumption.mojom.PageHandler = {};
ntp.most_relevant_tab_resumption.mojom.PageHandler.$interfaceName = 'ntp.most_relevant_tab_resumption.mojom.PageHandler';
ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec = { $: {} };
ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ResponseParamsSpec = { $: {} };
ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec = { $: {} };
ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec = { $: {} };
ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec = { $: {} };
ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec = { $: {} };
ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_ParamsSpec = { $: {} };

// Enum: ScoredURLUserAction
ntp.most_relevant_tab_resumption.mojom.ScoredURLUserAction = {
  kUnknown: 0,
  kSeen: 1,
  kActivated: 2,
  kDismissed: 3,
};

// Interface: PageHandler
mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec, 'ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ResponseParamsSpec, 'ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ResponseParams', [
      mojo.internal.StructField('url_visits', 0, 0, mojo.internal.Array(ntp.most_relevant_tab_resumption.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec, 'ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_Params', [
      mojo.internal.StructField('url_visits', 0, 0, mojo.internal.Array(ntp.most_relevant_tab_resumption.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec, 'ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_Params', [
      mojo.internal.StructField('url_visit', 0, 0, ntp.most_relevant_tab_resumption.mojom.URLVisitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec, 'ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_Params', [
      mojo.internal.StructField('url_visits', 0, 0, mojo.internal.Array(ntp.most_relevant_tab_resumption.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec, 'ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_Params', [
      mojo.internal.StructField('url_visit', 0, 0, ntp.most_relevant_tab_resumption.mojom.URLVisitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_ParamsSpec, 'ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_Params', [
      mojo.internal.StructField('action', 0, 0, ntp.most_relevant_tab_resumption.mojom.ScoredURLUserActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('visit_request_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

ntp.most_relevant_tab_resumption.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.most_relevant_tab_resumption.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.most_relevant_tab_resumption.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.most_relevant_tab_resumption.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.most_relevant_tab_resumption.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.most_relevant_tab_resumption.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getURLVisits() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec,
      ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ResponseParamsSpec,
      [],
      false);
  }

  dismissModule(url_visits) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec,
      null,
      [url_visits],
      false);
  }

  dismissURLVisit(url_visit) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec,
      null,
      [url_visit],
      false);
  }

  restoreModule(url_visits) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec,
      null,
      [url_visits],
      false);
  }

  restoreURLVisit(url_visit) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec,
      null,
      [url_visit],
      false);
  }

  recordAction(action, url_key, visit_request_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_ParamsSpec,
      null,
      [action, url_key, visit_request_id],
      false);
  }

};

ntp.most_relevant_tab_resumption.mojom.PageHandler.getRemote = function() {
  let remote = new ntp.most_relevant_tab_resumption.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.most_relevant_tab_resumption.mojom.PageHandler',
    'context');
  return remote.$;
};

ntp.most_relevant_tab_resumption.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetURLVisits
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetURLVisits (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DismissModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissModule (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DismissURLVisit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissURLVisit (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RestoreModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreModule (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RestoreURLVisit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreURLVisit (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RecordAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordAction (5)');
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
          const params = decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getURLVisits');
          const result = this.impl.getURLVisits();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dismissModule');
          const result = this.impl.dismissModule(params.url_visits);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dismissURLVisit');
          const result = this.impl.dismissURLVisit(params.url_visit);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreModule');
          const result = this.impl.restoreModule(params.url_visits);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreURLVisit');
          const result = this.impl.restoreURLVisit(params.url_visit);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordAction');
          const result = this.impl.recordAction(params.action, params.url_key, params.visit_request_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ntp.most_relevant_tab_resumption.mojom.PageHandlerReceiver = ntp.most_relevant_tab_resumption.mojom.PageHandlerReceiver;

ntp.most_relevant_tab_resumption.mojom.PageHandlerPtr = ntp.most_relevant_tab_resumption.mojom.PageHandlerRemote;
ntp.most_relevant_tab_resumption.mojom.PageHandlerRequest = ntp.most_relevant_tab_resumption.mojom.PageHandlerPendingReceiver;

