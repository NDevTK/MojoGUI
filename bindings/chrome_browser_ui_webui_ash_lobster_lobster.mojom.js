// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/lobster/lobster.mojom
// Module: lobster.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var lobster = lobster || {};
lobster.mojom = lobster.mojom || {};
var url = url || {};
var gfx = gfx || {};

lobster.mojom.StatusCodeSpec = { $: mojo.internal.Enum() };
lobster.mojom.WebUIMetricEventSpec = { $: mojo.internal.Enum() };
lobster.mojom.ResponseSpec = { $: {} };
lobster.mojom.CandidateSpec = { $: {} };
lobster.mojom.ErrorSpec = { $: {} };
lobster.mojom.FeedbackPreviewSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler = {};
lobster.mojom.UntrustedLobsterPageHandler.$interfaceName = 'lobster.mojom.UntrustedLobsterPageHandler';
lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec = { $: {} };
lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec = { $: {} };

// Enum: StatusCode
lobster.mojom.StatusCode = {
  kUnknown: 0,
  kOk: 1,
  kBlockedOutputs: 2,
  kNoInternetConnection: 3,
  kResourceExhausted: 4,
  kInvalidArgument: 5,
  kBackendFailure: 6,
  kUnsupportedLanguage: 7,
  kRestrictedRegion: 8,
  MinVersion: 8,
};

// Enum: WebUIMetricEvent
lobster.mojom.WebUIMetricEvent = {
  kUnknown: 0,
  kQueryPageImpression: 1,
  kRequestInitialCandidates: 2,
  kRequestInitialCandidatesSuccess: 3,
  kRequestInitialCandidatesError: 4,
  kInitialCandidatesImpression: 5,
  kRequestMoreCandidates: 6,
  kRequestMoreCandidatesSuccess: 7,
  kRequestMoreCandidatesError: 8,
  kMoreCandidatesAppended: 9,
  kFeedbackThumbsUp: 10,
  kFeedbackThumbsDown: 11,
};

// Union: Response
mojo.internal.Union(
    lobster.mojom.ResponseSpec, 'lobster.mojom.Response', {
      'candidates': {
        'ordinal': 0,
        'type': mojo.internal.Array(lobster.mojom.CandidateSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': lobster.mojom.ErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: Candidate
mojo.internal.Struct(
    lobster.mojom.CandidateSpec, 'lobster.mojom.Candidate', [
      mojo.internal.StructField('data_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Error
mojo.internal.Struct(
    lobster.mojom.ErrorSpec, 'lobster.mojom.Error', [
      mojo.internal.StructField('code', 0, 0, lobster.mojom.StatusCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FeedbackPreview
mojo.internal.Struct(
    lobster.mojom.FeedbackPreviewSpec, 'lobster.mojom.FeedbackPreview', [
      mojo.internal.StructField('fields', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('preview_data_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedLobsterPageHandler
mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('num_candidates', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, lobster.mojom.ResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_Params', [
      mojo.internal.StructField('candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_Params', [
      mojo.internal.StructField('candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_Params', [
      mojo.internal.StructField('candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_Params', [
      mojo.internal.StructField('candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParams', [
      mojo.internal.StructField('preview', 0, 0, lobster.mojom.FeedbackPreviewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_Params', [
      mojo.internal.StructField('description', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('candidate_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_Params', [
      mojo.internal.StructField('metric_event', 0, 0, lobster.mojom.WebUIMetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

lobster.mojom.UntrustedLobsterPageHandlerRemote = class {
  static get $interfaceName() {
    return 'lobster.mojom.UntrustedLobsterPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver,
      handle);
    this.$ = new lobster.mojom.UntrustedLobsterPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestCandidates(query, num_candidates) {
    return this.$.requestCandidates(query, num_candidates);
  }
  downloadCandidate(candidate_id) {
    return this.$.downloadCandidate(candidate_id);
  }
  commitAsInsert(candidate_id) {
    return this.$.commitAsInsert(candidate_id);
  }
  commitAsDownload(candidate_id) {
    return this.$.commitAsDownload(candidate_id);
  }
  previewFeedback(candidate_id) {
    return this.$.previewFeedback(candidate_id);
  }
  submitFeedback(candidate_id, description) {
    return this.$.submitFeedback(candidate_id, description);
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  emitMetricEvent(metric_event) {
    return this.$.emitMetricEvent(metric_event);
  }
  openUrlInNewWindow(url) {
    return this.$.openUrlInNewWindow(url);
  }
};

lobster.mojom.UntrustedLobsterPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedLobsterPageHandler', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
  }

  requestCandidates(query, num_candidates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec,
      [query, num_candidates],
      false);
  }

  downloadCandidate(candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec,
      [candidate_id],
      false);
  }

  commitAsInsert(candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec,
      [candidate_id],
      false);
  }

  commitAsDownload(candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec,
      [candidate_id],
      false);
  }

  previewFeedback(candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec,
      [candidate_id],
      false);
  }

  submitFeedback(candidate_id, description) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec,
      [candidate_id, description],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  emitMetricEvent(metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event],
      false);
  }

  openUrlInNewWindow(url) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url],
      false);
  }

};

lobster.mojom.UntrustedLobsterPageHandler.getRemote = function() {
  let remote = new lobster.mojom.UntrustedLobsterPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lobster.mojom.UntrustedLobsterPageHandler',
    'context');
  return remote.$;
};

lobster.mojom.UntrustedLobsterPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedLobsterPageHandler', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
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
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec.$.structSpec);
          const result = this.impl.requestCandidates(params.query, params.num_candidates);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec.$.structSpec);
          const result = this.impl.downloadCandidate(params.candidate_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec.$.structSpec);
          const result = this.impl.commitAsInsert(params.candidate_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec.$.structSpec);
          const result = this.impl.commitAsDownload(params.candidate_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.previewFeedback(params.candidate_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec.$.structSpec);
          const result = this.impl.submitFeedback(params.candidate_id, params.description);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec.$.structSpec);
          const result = this.impl.showUI();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec.$.structSpec);
          const result = this.impl.closeUI();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec.$.structSpec);
          const result = this.impl.emitMetricEvent(params.metric_event);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec.$.structSpec);
          const result = this.impl.openUrlInNewWindow(params.url);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

lobster.mojom.UntrustedLobsterPageHandlerReceiver = lobster.mojom.UntrustedLobsterPageHandlerReceiver;

lobster.mojom.UntrustedLobsterPageHandlerPtr = lobster.mojom.UntrustedLobsterPageHandlerRemote;
lobster.mojom.UntrustedLobsterPageHandlerRequest = lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver;

