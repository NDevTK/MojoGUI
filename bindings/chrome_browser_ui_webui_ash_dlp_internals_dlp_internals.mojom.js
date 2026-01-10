// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/dlp_internals/dlp_internals.mojom
// Module: dlp_internals.mojom

'use strict';

// Module namespace
var dlp_internals = dlp_internals || {};
dlp_internals.mojom = dlp_internals.mojom || {};
var url = url || {};


// Enum: EndpointType
dlp_internals.mojom.mojom.EndpointType = {
  kDefault: 0,
  kUrl: 1,
  kClipboardHistory: 2,
  kUnknownVm: 3,
  kArc: 4,
  kBorealis: 5,
  kCrostini: 6,
  kPluginVm: 7,
};
dlp_internals.mojom.mojom.EndpointTypeSpec = { $: mojo.internal.Enum() };

// Enum: ContentRestriction
dlp_internals.mojom.mojom.ContentRestriction = {
  kScreenshot: 0,
  kPrivacyScreen: 1,
  kPrint: 2,
  kScreenShare: 3,
};
dlp_internals.mojom.mojom.ContentRestrictionSpec = { $: mojo.internal.Enum() };

// Enum: Level
dlp_internals.mojom.mojom.Level = {
  kNotSet: 0,
  kReport: 1,
  kWarn: 2,
  kBlock: 3,
  kAllow: 4,
};
dlp_internals.mojom.mojom.LevelSpec = { $: mojo.internal.Enum() };

// Enum: Component
dlp_internals.mojom.mojom.Component = {
  kUndefinedComponent: 0,
  kArc: 1,
  kCrostini: 2,
  kPluginVm: 3,
  kUsb: 4,
  kDrive: 5,
  kOnedrive: 6,
};
dlp_internals.mojom.mojom.ComponentSpec = { $: mojo.internal.Enum() };

// Enum: Restriction
dlp_internals.mojom.mojom.Restriction = {
  kUndefinedRestriction: 0,
  kClipboard: 1,
  kScreenshot: 2,
  kScreencast: 3,
  kPrinting: 4,
  kEprivacy: 5,
  kFiles: 6,
};
dlp_internals.mojom.mojom.RestrictionSpec = { $: mojo.internal.Enum() };

// Enum: Mode
dlp_internals.mojom.mojom.Mode = {
  kUndefinedMode: 0,
  kBlock: 1,
  kReport: 2,
  kWarn: 3,
  kWarnProceed: 4,
};
dlp_internals.mojom.mojom.ModeSpec = { $: mojo.internal.Enum() };

// Enum: UserType
dlp_internals.mojom.mojom.UserType = {
  kUndefinedUserType: 0,
  kRegular: 1,
  kManagedGuest: 2,
  kKiosk: 3,
};
dlp_internals.mojom.mojom.UserTypeSpec = { $: mojo.internal.Enum() };

// Struct: DataTransferEndpoint
dlp_internals.mojom.mojom.DataTransferEndpointSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.DataTransferEndpoint',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: dlp_internals.mojom.EndpointTypeSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ContentRestrictionInfo
dlp_internals.mojom.mojom.ContentRestrictionInfoSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.ContentRestrictionInfo',
      packedSize: 24,
      fields: [
        { name: 'restriction', packedOffset: 8, packedBitOffset: 0, type: dlp_internals.mojom.ContentRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'level', packedOffset: 12, packedBitOffset: 0, type: dlp_internals.mojom.LevelSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RenderFrameHostInfo
dlp_internals.mojom.mojom.RenderFrameHostInfoSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.RenderFrameHostInfo',
      packedSize: 24,
      fields: [
        { name: 'last_committed_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'restrictions_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(dlp_internals.mojom.ContentRestrictionInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebContentsInfo
dlp_internals.mojom.mojom.WebContentsInfoSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.WebContentsInfo',
      packedSize: 32,
      fields: [
        { name: 'last_committed_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'restrictions_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(dlp_internals.mojom.ContentRestrictionInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'frames_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(dlp_internals.mojom.RenderFrameHostInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: EventDestination
dlp_internals.mojom.mojom.EventDestinationSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.EventDestination',
      packedSize: 16,
      fields: [
        { name: 'kUndefinedComponent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DlpEvent
dlp_internals.mojom.mojom.DlpEventSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.DlpEvent',
      packedSize: 16,
      fields: [
        { name: 'kUndefinedRestriction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FileDatabaseEntry
dlp_internals.mojom.mojom.FileDatabaseEntrySpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.FileDatabaseEntry',
      packedSize: 48,
      fields: [
        { name: 'inode_$flag', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'inode_$value', originalFieldName: 'inode' } },
        { name: 'inode_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'inode_$flag', originalFieldName: 'inode' } },
        { name: 'crtime_$flag', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'crtime_$value', originalFieldName: 'crtime' } },
        { name: 'crtime_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'crtime_$flag', originalFieldName: 'crtime' } },
        { name: 'source_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'referrer_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: ReportingObserver
dlp_internals.mojom.mojom.ReportingObserver = {};

dlp_internals.mojom.mojom.ReportingObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dlp_internals.mojom.mojom.ReportingObserverRemote = class {
  static get $interfaceName() {
    return 'dlp_internals.mojom.ReportingObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dlp_internals.mojom.mojom.ReportingObserverPendingReceiver,
      handle);
    this.$ = new dlp_internals.mojom.mojom.ReportingObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

dlp_internals.mojom.mojom.ReportingObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReportEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      dlp_internals.mojom.mojom.ReportingObserver_OnReportEvent_ParamsSpec,
      null,
      [event]);
  }

};

dlp_internals.mojom.mojom.ReportingObserver.getRemote = function() {
  let remote = new dlp_internals.mojom.mojom.ReportingObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dlp_internals.mojom.ReportingObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnReportEvent
dlp_internals.mojom.mojom.ReportingObserver_OnReportEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.ReportingObserver.OnReportEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: dlp_internals.mojom.DlpEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
dlp_internals.mojom.mojom.ReportingObserverPtr = dlp_internals.mojom.mojom.ReportingObserverRemote;
dlp_internals.mojom.mojom.ReportingObserverRequest = dlp_internals.mojom.mojom.ReportingObserverPendingReceiver;


// Interface: PageHandler
dlp_internals.mojom.mojom.PageHandler = {};

dlp_internals.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dlp_internals.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'dlp_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dlp_internals.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new dlp_internals.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

dlp_internals.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getClipboardDataSource() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      dlp_internals.mojom.mojom.PageHandler_GetClipboardDataSource_ParamsSpec,
      dlp_internals.mojom.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec,
      []);
  }

  getContentRestrictionsInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      dlp_internals.mojom.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec,
      dlp_internals.mojom.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec,
      []);
  }

  observeReporting(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      dlp_internals.mojom.mojom.PageHandler_ObserveReporting_ParamsSpec,
      null,
      [observer]);
  }

  getFilesDatabaseEntries() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      dlp_internals.mojom.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec,
      dlp_internals.mojom.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec,
      []);
  }

  getFileInode(file_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      dlp_internals.mojom.mojom.PageHandler_GetFileInode_ParamsSpec,
      dlp_internals.mojom.mojom.PageHandler_GetFileInode_ResponseParamsSpec,
      [file_name]);
  }

};

dlp_internals.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new dlp_internals.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dlp_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetClipboardDataSource
dlp_internals.mojom.mojom.PageHandler_GetClipboardDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetClipboardDataSource_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

dlp_internals.mojom.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetClipboardDataSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: dlp_internals.mojom.DataTransferEndpointSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetContentRestrictionsInfo
dlp_internals.mojom.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetContentRestrictionsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

dlp_internals.mojom.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetContentRestrictionsInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'web_contents_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(dlp_internals.mojom.WebContentsInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveReporting
dlp_internals.mojom.mojom.PageHandler_ObserveReporting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.ObserveReporting_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFilesDatabaseEntries
dlp_internals.mojom.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFilesDatabaseEntries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

dlp_internals.mojom.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFilesDatabaseEntries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'db_entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(dlp_internals.mojom.FileDatabaseEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFileInode
dlp_internals.mojom.mojom.PageHandler_GetFileInode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFileInode_Params',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

dlp_internals.mojom.mojom.PageHandler_GetFileInode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'dlp_internals.mojom.PageHandler.GetFileInode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
dlp_internals.mojom.mojom.PageHandlerPtr = dlp_internals.mojom.mojom.PageHandlerRemote;
dlp_internals.mojom.mojom.PageHandlerRequest = dlp_internals.mojom.mojom.PageHandlerPendingReceiver;

