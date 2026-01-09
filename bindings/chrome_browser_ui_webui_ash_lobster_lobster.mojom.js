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
lobster.mojom.Candidate = class {
  constructor(values = {}) {
    this.data_url = values.data_url !== undefined ? values.data_url : 0;
  }
};

// Struct: Error
lobster.mojom.Error = class {
  constructor(values = {}) {
    this.message@1 = values.message@1 !== undefined ? values.message@1 : "";
  }
};

// Struct: FeedbackPreview
lobster.mojom.FeedbackPreview = class {
  constructor(values = {}) {
    this.preview_data_url = values.preview_data_url !== undefined ? values.preview_data_url : "";
  }
};

// Interface: UntrustedLobsterPageHandler
lobster.mojom.UntrustedLobsterPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'lobster.mojom.UntrustedLobsterPageHandler';
  }

  0(query, num_candidates) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(query, num_candidates)
      resolve({});
    });
  }

  1(candidate_id) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(candidate_id)
      resolve({});
    });
  }

  2(candidate_id) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(candidate_id)
      resolve({});
    });
  }

  3(candidate_id) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(candidate_id)
      resolve({});
    });
  }

  4(candidate_id) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(candidate_id)
      resolve({});
    });
  }

  5(candidate_id, description) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(candidate_id, description)
      resolve({});
    });
  }

  6() {
    // Method: 6
    // Call: 6()
  }

  7() {
    // Method: 7
    // Call: 7()
  }

  8(metric_event) {
    // Method: 8
    // Call: 8(metric_event)
  }

  9(url) {
    // Method: 9
    // Call: 9(url)
  }

};

lobster.mojom.UntrustedLobsterPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
