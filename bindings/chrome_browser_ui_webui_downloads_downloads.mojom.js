// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/downloads/downloads.mojom
// Module: downloads.mojom

'use strict';

// Module namespace
var downloads = downloads || {};
downloads.mojom = downloads.mojom || {};


// Enum: DangerType
downloads.mojom.DangerType = {
};

// Enum: TailoredWarningType
downloads.mojom.TailoredWarningType = {
};

// Enum: State
downloads.mojom.State = {
};

// Enum: SafeBrowsingState
downloads.mojom.SafeBrowsingState = {
};

// Struct: Data
downloads.mojom.Data = class {
  constructor(values = {}) {
    this.since_string = values.since_string !== undefined ? values.since_string : 0;
    this.progress = values.progress !== undefined ? values.progress : null;
    this.state = values.state !== undefined ? values.state : null;
    this.display_initiator_origin = values.display_initiator_origin !== undefined ? values.display_initiator_origin : "";
    this.has_safe_browsing_verdict = values.has_safe_browsing_verdict !== undefined ? values.has_safe_browsing_verdict : false;
  }
};

// Interface: PageHandlerFactory
downloads.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'downloads.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

downloads.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
downloads.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'downloads.mojom.PageHandler';
  }

  getDownloads(search_terms) {
    // Method: GetDownloads
    // Call: GetDownloads(search_terms)
  }

  openFileRequiringGesture(id) {
    // Method: OpenFileRequiringGesture
    // Call: OpenFileRequiringGesture(id)
  }

  drag(id) {
    // Method: Drag
    // Call: Drag(id)
  }

  saveSuspiciousRequiringGesture(id) {
    // Method: SaveSuspiciousRequiringGesture
    // Call: SaveSuspiciousRequiringGesture(id)
  }

  recordOpenBypassWarningDialog(id) {
    // Method: RecordOpenBypassWarningDialog
    // Call: RecordOpenBypassWarningDialog(id)
  }

  saveDangerousFromDialogRequiringGesture(id) {
    // Method: SaveDangerousFromDialogRequiringGesture
    // Call: SaveDangerousFromDialogRequiringGesture(id)
  }

  recordCancelBypassWarningDialog(id) {
    // Method: RecordCancelBypassWarningDialog
    // Call: RecordCancelBypassWarningDialog(id)
  }

  discardDangerous(id) {
    // Method: DiscardDangerous
    // Call: DiscardDangerous(id)
  }

  retryDownload(id) {
    // Method: RetryDownload
    // Call: RetryDownload(id)
  }

  show(id) {
    // Method: Show
    // Call: Show(id)
  }

  pause(id) {
    // Method: Pause
    // Call: Pause(id)
  }

  resume(id) {
    // Method: Resume
    // Call: Resume(id)
  }

  remove(id) {
    // Method: Remove
    // Call: Remove(id)
  }

  undo() {
    // Method: Undo
    // Call: Undo()
  }

  cancel(id) {
    // Method: Cancel
    // Call: Cancel(id)
  }

  clearAll() {
    // Method: ClearAll
    // Call: ClearAll()
  }

  openDownloadsFolderRequiringGesture() {
    // Method: OpenDownloadsFolderRequiringGesture
    // Call: OpenDownloadsFolderRequiringGesture()
  }

  openEsbSettings() {
    // Method: OpenEsbSettings
    // Call: OpenEsbSettings()
  }

  logEsbPromotionRowViewed() {
    // Method: LogEsbPromotionRowViewed
    // Call: LogEsbPromotionRowViewed()
  }

  openDuringScanningRequiringGesture(id) {
    // Method: OpenDuringScanningRequiringGesture
    // Call: OpenDuringScanningRequiringGesture(id)
  }

  reviewDangerousRequiringGesture(id) {
    // Method: ReviewDangerousRequiringGesture
    // Call: ReviewDangerousRequiringGesture(id)
  }

  deepScan(id) {
    // Method: DeepScan
    // Call: DeepScan(id)
  }

  bypassDeepScanRequiringGesture(id) {
    // Method: BypassDeepScanRequiringGesture
    // Call: BypassDeepScanRequiringGesture(id)
  }

  isEligibleForEsbPromo() {
    // Method: IsEligibleForEsbPromo
    return new Promise((resolve) => {
      // Call: IsEligibleForEsbPromo()
      resolve({});
    });
  }

};

downloads.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
downloads.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'downloads.mojom.Page';
  }

  removeItem(index) {
    // Method: RemoveItem
    // Call: RemoveItem(index)
  }

  updateItem(index, data) {
    // Method: UpdateItem
    // Call: UpdateItem(index, data)
  }

  insertItems(index, items) {
    // Method: InsertItems
    // Call: InsertItems(index, items)
  }

  clearAll() {
    // Method: ClearAll
    // Call: ClearAll()
  }

};

downloads.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
