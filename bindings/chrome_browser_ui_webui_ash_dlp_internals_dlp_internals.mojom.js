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
dlp_internals.mojom.DataTransferEndpointSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.DataTransferEndpoint',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: dlp_internals.mojom.EndpointTypeSpec, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentRestrictionInfo
dlp_internals.mojom.ContentRestrictionInfoSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.ContentRestrictionInfo',
      packedSize: 32,
      fields: [
        { name: 'restriction', packedOffset: 8, packedBitOffset: 0, type: dlp_internals.mojom.ContentRestrictionSpec, nullable: false },
        { name: 'level', packedOffset: 16, packedBitOffset: 0, type: dlp_internals.mojom.LevelSpec, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RenderFrameHostInfo
dlp_internals.mojom.RenderFrameHostInfoSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.RenderFrameHostInfo',
      packedSize: 24,
      fields: [
        { name: 'last_committed_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'restrictions_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebContentsInfo
dlp_internals.mojom.WebContentsInfoSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.WebContentsInfo',
      packedSize: 32,
      fields: [
        { name: 'last_committed_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'restrictions_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'frames_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EventDestination
dlp_internals.mojom.EventDestinationSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.EventDestination',
      packedSize: 16,
      fields: [
        { name: 'kUndefinedComponent', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DlpEvent
dlp_internals.mojom.DlpEventSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.DlpEvent',
      packedSize: 16,
      fields: [
        { name: 'kUndefinedRestriction', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileDatabaseEntry
dlp_internals.mojom.FileDatabaseEntrySpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.FileDatabaseEntry',
      packedSize: 40,
      fields: [
        { name: 'inode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'crtime', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'source_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'referrer_url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ReportingObserver
dlp_internals.mojom.ReportingObserver = {};

dlp_internals.mojom.ReportingObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dlp_internals.mojom.ReportingObserverRemote = class {
  static get $interfaceName() {
    return 'dlp_internals.mojom.ReportingObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dlp_internals.mojom.ReportingObserverPendingReceiver,
      handle);
    this.$ = new dlp_internals.mojom.ReportingObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

dlp_internals.mojom.ReportingObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReportEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec,
      null,
      [event]);
  }

};

dlp_internals.mojom.ReportingObserver.getRemote = function() {
  let remote = new dlp_internals.mojom.ReportingObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dlp_internals.mojom.ReportingObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnReportEvent
dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.ReportingObserver.OnReportEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: dlp_internals.mojom.DlpEventSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
dlp_internals.mojom.ReportingObserverPtr = dlp_internals.mojom.ReportingObserverRemote;
dlp_internals.mojom.ReportingObserverRequest = dlp_internals.mojom.ReportingObserverPendingReceiver;


// Interface: PageHandler
dlp_internals.mojom.PageHandler = {};

dlp_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dlp_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'dlp_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dlp_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new dlp_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

dlp_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getClipboardDataSource() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec,
      []);
  }

  getContentRestrictionsInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec,
      []);
  }

  observeReporting(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec,
      null,
      [observer]);
  }

  getFilesDatabaseEntries() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec,
      []);
  }

  getFileInode(file_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec,
      [file_name]);
  }

};

dlp_internals.mojom.PageHandler.getRemote = function() {
  let remote = new dlp_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dlp_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetClipboardDataSource
dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetClipboardDataSource_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetClipboardDataSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: dlp_internals.mojom.DataTransferEndpointSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetContentRestrictionsInfo
dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetContentRestrictionsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetContentRestrictionsInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'web_contents_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveReporting
dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.ObserveReporting_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFilesDatabaseEntries
dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFilesDatabaseEntries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFilesDatabaseEntries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'db_entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFileInode
dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFileInode_Params',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFileInode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
dlp_internals.mojom.PageHandlerPtr = dlp_internals.mojom.PageHandlerRemote;
dlp_internals.mojom.PageHandlerRequest = dlp_internals.mojom.PageHandlerPendingReceiver;

