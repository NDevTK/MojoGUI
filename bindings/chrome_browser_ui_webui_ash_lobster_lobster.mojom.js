// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/lobster/lobster.mojom
// Module: lobster.mojom

'use strict';

// Module namespace
var lobster = lobster || {};
lobster.mojom = lobster.mojom || {};


// Enum: StatusCode
lobster.mojom.StatusCode = {
  kOk: 0,
  kBlockedOutputs: 1,
  kNoInternetConnection: 2,
  kResourceExhausted: 3,
  kInvalidArgument: 4,
  kBackendFailure: 5,
  kUnsupportedLanguage: 6,
  kRestrictedRegion: 7,
};
lobster.mojom.StatusCodeSpec = { $: mojo.internal.Enum() };

// Enum: WebUIMetricEvent
lobster.mojom.WebUIMetricEvent = {
  kQueryPageImpression: 0,
  kRequestInitialCandidates: 1,
  kRequestInitialCandidatesSuccess: 2,
  kRequestInitialCandidatesError: 3,
  kInitialCandidatesImpression: 4,
  kRequestMoreCandidates: 5,
  kRequestMoreCandidatesSuccess: 6,
  kRequestMoreCandidatesError: 7,
  kMoreCandidatesAppended: 8,
  kFeedbackThumbsUp: 9,
  kFeedbackThumbsDown: 10,
};
lobster.mojom.WebUIMetricEventSpec = { $: mojo.internal.Enum() };

// Union: Response
lobster.mojom.ResponseSpec = { $: mojo.internal.Union(
    'lobster.mojom.Response', {
      'candidates': {
        'ordinal': 0,
        'type': mojo.internal.Array(lobster.mojom.CandidateSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': lobster.mojom.ErrorSpec,
      }},
    })
};

// Struct: Candidate
lobster.mojom.CandidateSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.Candidate',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Error
lobster.mojom.ErrorSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.Error',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: lobster.mojom.StatusCodeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FeedbackPreview
lobster.mojom.FeedbackPreviewSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.FeedbackPreview',
      packedSize: 24,
      fields: [
        { name: 'fields', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'preview_data_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: UntrustedLobsterPageHandler
lobster.mojom.UntrustedLobsterPageHandler = {};

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
};

lobster.mojom.UntrustedLobsterPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestCandidates(query, num_candidates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec,
      [query, num_candidates]);
  }

  downloadCandidate(candidate_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec,
      [candidate_id]);
  }

  commitAsInsert(candidate_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec,
      [candidate_id]);
  }

  commitAsDownload(candidate_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec,
      [candidate_id]);
  }

  previewFeedback(candidate_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec,
      [candidate_id]);
  }

  submitFeedback(candidate_id, description) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec,
      lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec,
      [candidate_id, description]);
  }

  showUI() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec,
      null,
      []);
  }

  emitMetricEvent(metric_event) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec,
      null,
      [metric_event]);
  }

  openUrlInNewWindow(url) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec,
      null,
      [url]);
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

// ParamsSpec for RequestCandidates
lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.RequestCandidates_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'num_candidates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.RequestCandidates_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: lobster.mojom.ResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DownloadCandidate
lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.DownloadCandidate_Params',
      packedSize: 16,
      fields: [
        { name: 'candidate_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.DownloadCandidate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CommitAsInsert
lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.CommitAsInsert_Params',
      packedSize: 16,
      fields: [
        { name: 'candidate_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.CommitAsInsert_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CommitAsDownload
lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.CommitAsDownload_Params',
      packedSize: 16,
      fields: [
        { name: 'candidate_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.CommitAsDownload_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreviewFeedback
lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.PreviewFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'candidate_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.PreviewFeedback_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'preview', packedOffset: 0, packedBitOffset: 0, type: lobster.mojom.FeedbackPreviewSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubmitFeedback
lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.SubmitFeedback_Params',
      packedSize: 24,
      fields: [
        { name: 'candidate_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.SubmitFeedback_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowUI
lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CloseUI
lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.CloseUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EmitMetricEvent
lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.EmitMetricEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'metric_event', packedOffset: 0, packedBitOffset: 0, type: lobster.mojom.WebUIMetricEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenUrlInNewWindow
lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.UntrustedLobsterPageHandler.OpenUrlInNewWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
lobster.mojom.UntrustedLobsterPageHandlerPtr = lobster.mojom.UntrustedLobsterPageHandlerRemote;
lobster.mojom.UntrustedLobsterPageHandlerRequest = lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver;

