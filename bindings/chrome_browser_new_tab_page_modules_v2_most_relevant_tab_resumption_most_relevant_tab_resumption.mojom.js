// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/most_relevant_tab_resumption/most_relevant_tab_resumption.mojom
// Module: ntp.most_relevant_tab_resumption.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.most_relevant_tab_resumption = ntp.most_relevant_tab_resumption || {};
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom = ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom || {};
var url = url || {};


// Enum: ScoredURLUserAction
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.ScoredURLUserAction = {
  kUnknown: 0,
  kSeen: 1,
  kActivated: 2,
  kDismissed: 3,
};
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.ScoredURLUserActionSpec = { $: mojo.internal.Enum() };

// Interface: PageHandler
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler = {};

ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.most_relevant_tab_resumption.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getURLVisits() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_GetURLVisits_ParamsSpec,
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_GetURLVisits_ResponseParamsSpec,
      []);
  }

  dismissModule(url_visits) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_DismissModule_ParamsSpec,
      null,
      [url_visits]);
  }

  dismissURLVisit(url_visit) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_DismissURLVisit_ParamsSpec,
      null,
      [url_visit]);
  }

  restoreModule(url_visits) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_RestoreModule_ParamsSpec,
      null,
      [url_visits]);
  }

  restoreURLVisit(url_visit) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_RestoreURLVisit_ParamsSpec,
      null,
      [url_visit]);
  }

  recordAction(action, url_key, visit_request_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_RecordAction_ParamsSpec,
      null,
      [action, url_key, visit_request_id]);
  }

};

ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.most_relevant_tab_resumption.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetURLVisits
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_GetURLVisits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.PageHandler.GetURLVisits_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_GetURLVisits_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.PageHandler.GetURLVisits_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url_visits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ntp.most_relevant_tab_resumption.mojom.URLVisitSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DismissModule
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.PageHandler.DismissModule_Params',
      packedSize: 16,
      fields: [
        { name: 'url_visits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ntp.most_relevant_tab_resumption.mojom.URLVisitSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DismissURLVisit
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_DismissURLVisit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.PageHandler.DismissURLVisit_Params',
      packedSize: 16,
      fields: [
        { name: 'url_visit', packedOffset: 0, packedBitOffset: 0, type: ntp.most_relevant_tab_resumption.mojom.URLVisitSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RestoreModule
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.PageHandler.RestoreModule_Params',
      packedSize: 16,
      fields: [
        { name: 'url_visits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ntp.most_relevant_tab_resumption.mojom.URLVisitSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RestoreURLVisit
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_RestoreURLVisit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.PageHandler.RestoreURLVisit_Params',
      packedSize: 16,
      fields: [
        { name: 'url_visit', packedOffset: 0, packedBitOffset: 0, type: ntp.most_relevant_tab_resumption.mojom.URLVisitSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordAction
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandler_RecordAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.PageHandler.RecordAction_Params',
      packedSize: 32,
      fields: [
        { name: 'action', packedOffset: 16, packedBitOffset: 0, type: ntp.most_relevant_tab_resumption.mojom.ScoredURLUserActionSpec, nullable: false, minVersion: 0 },
        { name: 'url_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'visit_request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerPtr = ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerRemote;
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerRequest = ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.PageHandlerPendingReceiver;

