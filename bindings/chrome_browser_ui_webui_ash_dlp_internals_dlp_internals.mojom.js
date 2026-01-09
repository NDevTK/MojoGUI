// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/dlp_internals/dlp_internals.mojom
// Module: dlp_internals.mojom

'use strict';

// Module namespace
var dlp_internals = dlp_internals || {};
dlp_internals.mojom = dlp_internals.mojom || {};


// Enum: EndpointType
dlp_internals.mojom.EndpointType = {
  kDefault: 0,
  kUrl: 1,
  kClipboardHistory: 2,
  kUnknownVm: 3,
  kArc: 4,
  kBorealis: 5,
  kCrostini: 6,
  kPluginVm: 7,
};

// Enum: ContentRestriction
dlp_internals.mojom.ContentRestriction = {
  kScreenshot: 0,
  kPrivacyScreen: 1,
  kPrint: 2,
  kScreenShare: 3,
};

// Enum: Level
dlp_internals.mojom.Level = {
  kNotSet: 0,
  kReport: 1,
  kWarn: 2,
  kBlock: 3,
  kAllow: 4,
};

// Enum: Component
dlp_internals.mojom.Component = {
  kUndefinedComponent: 0,
  kArc: 1,
  kCrostini: 2,
  kPluginVm: 3,
  kUsb: 4,
  kDrive: 5,
  kOnedrive: 6,
};

// Enum: Restriction
dlp_internals.mojom.Restriction = {
  kUndefinedRestriction: 0,
  kClipboard: 1,
  kScreenshot: 2,
  kScreencast: 3,
  kPrinting: 4,
  kEprivacy: 5,
  kFiles: 6,
};

// Enum: Mode
dlp_internals.mojom.Mode = {
  kUndefinedMode: 0,
  kBlock: 1,
  kReport: 2,
  kWarn: 3,
  kWarnProceed: 4,
};

// Enum: UserType
dlp_internals.mojom.UserType = {
  kUndefinedUserType: 0,
  kRegular: 1,
  kManagedGuest: 2,
  kKiosk: 3,
};

// Struct: DataTransferEndpoint
dlp_internals.mojom.DataTransferEndpoint = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : 0;
    this.url = values.url !== undefined ? values.url : null;
  }
};

// Struct: ContentRestrictionInfo
dlp_internals.mojom.ContentRestrictionInfo = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : null;
  }
};

// Struct: RenderFrameHostInfo
dlp_internals.mojom.RenderFrameHostInfo = class {
  constructor(values = {}) {
    this.restrictions_info = values.restrictions_info !== undefined ? values.restrictions_info : [];
  }
};

// Struct: WebContentsInfo
dlp_internals.mojom.WebContentsInfo = class {
  constructor(values = {}) {
    this.frames_info = values.frames_info !== undefined ? values.frames_info : [];
  }
};

// Struct: EventDestination
dlp_internals.mojom.EventDestination = class {
  constructor(values = {}) {
  }
};

// Struct: DlpEvent
dlp_internals.mojom.DlpEvent = class {
  constructor(values = {}) {
  }
};

// Struct: FileDatabaseEntry
dlp_internals.mojom.FileDatabaseEntry = class {
  constructor(values = {}) {
    this.referrer_url = values.referrer_url !== undefined ? values.referrer_url : 0;
  }
};

// Interface: ReportingObserver
dlp_internals.mojom.ReportingObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'dlp_internals.mojom.ReportingObserver';
  }

  onReportEvent(event) {
    // Method: OnReportEvent
    // Call: OnReportEvent(event)
  }

};

dlp_internals.mojom.ReportingObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
dlp_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'dlp_internals.mojom.PageHandler';
  }

  getClipboardDataSource() {
    // Method: GetClipboardDataSource
    return new Promise((resolve) => {
      // Call: GetClipboardDataSource()
      resolve({});
    });
  }

  getContentRestrictionsInfo() {
    // Method: GetContentRestrictionsInfo
    return new Promise((resolve) => {
      // Call: GetContentRestrictionsInfo()
      resolve({});
    });
  }

  observeReporting(observer) {
    // Method: ObserveReporting
    // Call: ObserveReporting(observer)
  }

  getFilesDatabaseEntries() {
    // Method: GetFilesDatabaseEntries
    return new Promise((resolve) => {
      // Call: GetFilesDatabaseEntries()
      resolve({});
    });
  }

  getFileInode(file_name) {
    // Method: GetFileInode
    return new Promise((resolve) => {
      // Call: GetFileInode(file_name)
      resolve({});
    });
  }

};

dlp_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
