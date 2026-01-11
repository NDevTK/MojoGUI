// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/most_relevant_tab_resumption/most_relevant_tab_resumption.mojom
// Module: ntp.most_relevant_tab_resumption.mojom

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
  getURLVisits() {
    return this.$.getURLVisits();
  }
  dismissModule(url_visits) {
    return this.$.dismissModule(url_visits);
  }
  dismissURLVisit(url_visit) {
    return this.$.dismissURLVisit(url_visit);
  }
  restoreModule(url_visits) {
    return this.$.restoreModule(url_visits);
  }
  restoreURLVisit(url_visit) {
    return this.$.restoreURLVisit(url_visit);
  }
  recordAction(action, url_key, visit_request_id) {
    return this.$.recordAction(action, url_key, visit_request_id);
  }
};

ntp.most_relevant_tab_resumption.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getURLVisits() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec,
      ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ResponseParamsSpec,
      [],
      false);
  }

  dismissModule(url_visits) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec,
      null,
      [url_visits],
      false);
  }

  dismissURLVisit(url_visit) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec,
      null,
      [url_visit],
      false);
  }

  restoreModule(url_visits) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec,
      null,
      [url_visits],
      false);
  }

  restoreURLVisit(url_visit) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec,
      null,
      [url_visit],
      false);
  }

  recordAction(action, url_key, visit_request_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_GetURLVisits_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissModule_ParamsSpec.$.structSpec);
          const result = this.impl.dismissModule(params.url_visits);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_DismissURLVisit_ParamsSpec.$.structSpec);
          const result = this.impl.dismissURLVisit(params.url_visit);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreModule_ParamsSpec.$.structSpec);
          const result = this.impl.restoreModule(params.url_visits);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_RestoreURLVisit_ParamsSpec.$.structSpec);
          const result = this.impl.restoreURLVisit(params.url_visit);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.most_relevant_tab_resumption.mojom.PageHandler_RecordAction_ParamsSpec.$.structSpec);
          const result = this.impl.recordAction(params.action, params.url_key, params.visit_request_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ntp.most_relevant_tab_resumption.mojom.PageHandlerReceiver = ntp.most_relevant_tab_resumption.mojom.PageHandlerReceiver;

ntp.most_relevant_tab_resumption.mojom.PageHandlerPtr = ntp.most_relevant_tab_resumption.mojom.PageHandlerRemote;
ntp.most_relevant_tab_resumption.mojom.PageHandlerRequest = ntp.most_relevant_tab_resumption.mojom.PageHandlerPendingReceiver;

