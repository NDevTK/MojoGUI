// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/most_relevant_tab_resumption/most_relevant_tab_resumption.mojom
// Module: ntp.most_relevant_tab_resumption.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.most_relevant_tab_resumption = ntp.most_relevant_tab_resumption || {};
ntp.most_relevant_tab_resumption.mojom = ntp.most_relevant_tab_resumption.mojom || {};


// Enum: ScoredURLUserAction
ntp.most_relevant_tab_resumption.mojom.ScoredURLUserAction = {
};

// Interface: PageHandler
ntp.most_relevant_tab_resumption.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp.most_relevant_tab_resumption.mojom.PageHandler';
  }

  getURLVisits() {
    // Method: GetURLVisits
    return new Promise((resolve) => {
      // Call: GetURLVisits()
      resolve({});
    });
  }

  dismissModule(url_visits) {
    // Method: DismissModule
    // Call: DismissModule(url_visits)
  }

  dismissURLVisit(url_visit) {
    // Method: DismissURLVisit
    // Call: DismissURLVisit(url_visit)
  }

  restoreModule(url_visits) {
    // Method: RestoreModule
    // Call: RestoreModule(url_visits)
  }

  restoreURLVisit(url_visit) {
    // Method: RestoreURLVisit
    // Call: RestoreURLVisit(url_visit)
  }

  recordAction(action, url_key, visit_request_id) {
    // Method: RecordAction
    // Call: RecordAction(action, url_key, visit_request_id)
  }

};

ntp.most_relevant_tab_resumption.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
