// Auto-generated MojoJS binding
// Source: chromium_src/components/visitedlink/common/visitedlink.mojom
// Module: visitedlink.mojom

'use strict';

// Module namespace
var visitedlink = visitedlink || {};
visitedlink.mojom = visitedlink.mojom || {};


// Interface: VisitedLinkNotificationSink
visitedlink.mojom.VisitedLinkNotificationSinkPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'visitedlink.mojom.VisitedLinkNotificationSink';
  }

  updateVisitedLinks(table_region) {
    // Method: UpdateVisitedLinks
    // Call: UpdateVisitedLinks(table_region)
  }

  addVisitedLinks(link_hashes) {
    // Method: AddVisitedLinks
    // Call: AddVisitedLinks(link_hashes)
  }

  resetVisitedLinks(invalidate_cached_hashes) {
    // Method: ResetVisitedLinks
    // Call: ResetVisitedLinks(invalidate_cached_hashes)
  }

  updateOriginSalts(origin_salts) {
    // Method: UpdateOriginSalts
    // Call: UpdateOriginSalts(origin_salts)
  }

};

visitedlink.mojom.VisitedLinkNotificationSinkRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
