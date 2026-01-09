// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/find_in_page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: StopFindAction
blink.mojom.StopFindAction = {
};

// Enum: FindMatchUpdateType
blink.mojom.FindMatchUpdateType = {
};

// Struct: FindOptions
blink.mojom.FindOptions = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: FindInPage
blink.mojom.FindInPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FindInPage';
  }

  find(request_id, search_text, options) {
    // Method: Find
    // Call: Find(request_id, search_text, options)
  }

  stopFinding(action) {
    // Method: StopFinding
    // Call: StopFinding(action)
  }

  clearActiveFindMatch() {
    // Method: ClearActiveFindMatch
    // Call: ClearActiveFindMatch()
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  getNearestFindResult(point) {
    // Method: GetNearestFindResult
    return new Promise((resolve) => {
      // Call: GetNearestFindResult(point)
      resolve({});
    });
  }

  activateNearestFindResult(request_id, point) {
    // Method: ActivateNearestFindResult
    // Call: ActivateNearestFindResult(request_id, point)
  }

  findMatchRects(current_version) {
    // Method: FindMatchRects
    return new Promise((resolve) => {
      // Call: FindMatchRects(current_version)
      resolve({});
    });
  }

};

blink.mojom.FindInPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FindInPageClient
blink.mojom.FindInPageClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FindInPageClient';
  }

  setNumberOfMatches(request_id, number_of_matches, update_type) {
    // Method: SetNumberOfMatches
    // Call: SetNumberOfMatches(request_id, number_of_matches, update_type)
  }

  setActiveMatch(request_id, active_match_rect, active_match_ordinal, update_type) {
    // Method: SetActiveMatch
    // Call: SetActiveMatch(request_id, active_match_rect, active_match_ordinal, update_type)
  }

};

blink.mojom.FindInPageClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
