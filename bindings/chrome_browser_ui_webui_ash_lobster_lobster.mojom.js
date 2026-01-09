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

// Interface: UntrustedLobsterPageHandler
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

