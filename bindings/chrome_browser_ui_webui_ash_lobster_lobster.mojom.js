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

// Struct: Candidate
lobster.mojom.CandidateSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.Candidate',
      packedSize: 24,
      fields: [
        { name: 'data_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Error
lobster.mojom.ErrorSpec = {
  $: {
    structSpec: {
      name: 'lobster.mojom.Error',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
        { name: 'fields', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'preview_data_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
lobster.mojom.UntrustedLobsterPageHandlerPtr = lobster.mojom.UntrustedLobsterPageHandlerRemote;
lobster.mojom.UntrustedLobsterPageHandlerRequest = lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver;

