// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lcp_critical_path_predictor/lcp_critical_path_predictor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: LcpElement
blink.mojom.LcpElement = class {
  constructor(values = {}) {
    this.predicted_index = values.predicted_index !== undefined ? values.predicted_index : 0;
  }
};

// Struct: LCPCriticalPathPredictorNavigationTimeHint
blink.mojom.LCPCriticalPathPredictorNavigationTimeHint = class {
  constructor(values = {}) {
    this.lcp_element_locators_all = values.lcp_element_locators_all !== undefined ? values.lcp_element_locators_all : "";
    this.for_testing = values.for_testing !== undefined ? values.for_testing : false;
  }
};

// Interface: LCPCriticalPathPredictorHost
blink.mojom.LCPCriticalPathPredictorHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LCPCriticalPathPredictorHost';
  }

  onLcpUpdated(lcp_element) {
    // Method: OnLcpUpdated
    // Call: OnLcpUpdated(lcp_element)
  }

  onLcpTimingPredictedForTesting(element_locator) {
    // Method: OnLcpTimingPredictedForTesting
    // Call: OnLcpTimingPredictedForTesting(element_locator)
  }

  setLcpInfluencerScriptUrls(lcp_influencer_scripts) {
    // Method: SetLcpInfluencerScriptUrls
    // Call: SetLcpInfluencerScriptUrls(lcp_influencer_scripts)
  }

  addPreconnectOrigin(origin) {
    // Method: AddPreconnectOrigin
    // Call: AddPreconnectOrigin(origin)
  }

  notifyFetchedFont(font_url, hit) {
    // Method: NotifyFetchedFont
    // Call: NotifyFetchedFont(font_url, hit)
  }

  notifyFetchedSubresource(subresource_url, subresource_load_start, request_destination) {
    // Method: NotifyFetchedSubresource
    // Call: NotifyFetchedSubresource(subresource_url, subresource_load_start, request_destination)
  }

  setUnusedPreloads(unused_preloads) {
    // Method: SetUnusedPreloads
    // Call: SetUnusedPreloads(unused_preloads)
  }

};

blink.mojom.LCPCriticalPathPredictorHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
