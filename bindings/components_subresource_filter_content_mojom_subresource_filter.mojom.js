// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/content/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';

// Module namespace
var subresource_filter = subresource_filter || {};
subresource_filter.mojom = subresource_filter.mojom || {};


// Interface: SubresourceFilterAgent
subresource_filter.mojom.SubresourceFilterAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'subresource_filter.mojom.SubresourceFilterAgent';
  }

  activateForNextCommittedLoad(activation_state, ad_evidence) {
    // Method: ActivateForNextCommittedLoad
    // Call: ActivateForNextCommittedLoad(activation_state, ad_evidence)
  }

};

subresource_filter.mojom.SubresourceFilterAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SubresourceFilterHost
subresource_filter.mojom.SubresourceFilterHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'subresource_filter.mojom.SubresourceFilterHost';
  }

  didDisallowFirstSubresource() {
    // Method: DidDisallowFirstSubresource
    // Call: DidDisallowFirstSubresource()
  }

  frameIsAd() {
    // Method: FrameIsAd
    // Call: FrameIsAd()
  }

  frameWasCreatedByAdScript() {
    // Method: FrameWasCreatedByAdScript
    // Call: FrameWasCreatedByAdScript()
  }

  adScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token) {
    // Method: AdScriptDidCreateFencedFrame
    // Call: AdScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token)
  }

  setDocumentLoadStatistics(statistics) {
    // Method: SetDocumentLoadStatistics
    // Call: SetDocumentLoadStatistics(statistics)
  }

  onAdsViolationTriggered(violation) {
    // Method: OnAdsViolationTriggered
    // Call: OnAdsViolationTriggered(violation)
  }

};

subresource_filter.mojom.SubresourceFilterHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
