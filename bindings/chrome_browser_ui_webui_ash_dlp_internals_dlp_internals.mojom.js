// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/dlp_internals/dlp_internals.mojom
// Module: dlp_internals.mojom

'use strict';

// Module namespace
var dlp_internals = dlp_internals || {};
dlp_internals.mojom = dlp_internals.mojom || {};
var url = url || {};

dlp_internals.mojom.EndpointTypeSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.ContentRestrictionSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.LevelSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.ComponentSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.RestrictionSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.ModeSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.UserTypeSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.DataTransferEndpointSpec = { $: {} };
dlp_internals.mojom.ContentRestrictionInfoSpec = { $: {} };
dlp_internals.mojom.RenderFrameHostInfoSpec = { $: {} };
dlp_internals.mojom.WebContentsInfoSpec = { $: {} };
dlp_internals.mojom.EventDestinationSpec = { $: {} };
dlp_internals.mojom.DlpEventSpec = { $: {} };
dlp_internals.mojom.FileDatabaseEntrySpec = { $: {} };
dlp_internals.mojom.ReportingObserver = {};
dlp_internals.mojom.ReportingObserver.$interfaceName = 'dlp_internals.mojom.ReportingObserver';
dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler = {};
dlp_internals.mojom.PageHandler.$interfaceName = 'dlp_internals.mojom.PageHandler';
dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    dlp_internals.mojom.DataTransferEndpointSpec, 'dlp_internals.mojom.DataTransferEndpoint', [
      mojo.internal.StructField('type', 0, 0, dlp_internals.mojom.EndpointTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ContentRestrictionInfo
mojo.internal.Struct(
    dlp_internals.mojom.ContentRestrictionInfoSpec, 'dlp_internals.mojom.ContentRestrictionInfo', [
      mojo.internal.StructField('restriction', 0, 0, dlp_internals.mojom.ContentRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('level', 8, 0, dlp_internals.mojom.LevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RenderFrameHostInfo
mojo.internal.Struct(
    dlp_internals.mojom.RenderFrameHostInfoSpec, 'dlp_internals.mojom.RenderFrameHostInfo', [
      mojo.internal.StructField('last_committed_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restrictions_info', 8, 0, mojo.internal.Array(dlp_internals.mojom.ContentRestrictionInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebContentsInfo
mojo.internal.Struct(
    dlp_internals.mojom.WebContentsInfoSpec, 'dlp_internals.mojom.WebContentsInfo', [
      mojo.internal.StructField('last_committed_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restrictions_info', 8, 0, mojo.internal.Array(dlp_internals.mojom.ContentRestrictionInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frames_info', 16, 0, mojo.internal.Array(dlp_internals.mojom.RenderFrameHostInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EventDestination
mojo.internal.Struct(
    dlp_internals.mojom.EventDestinationSpec, 'dlp_internals.mojom.EventDestination', [
      mojo.internal.StructField('kUndefinedComponent', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DlpEvent
mojo.internal.Struct(
    dlp_internals.mojom.DlpEventSpec, 'dlp_internals.mojom.DlpEvent', [
      mojo.internal.StructField('kUndefinedRestriction', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileDatabaseEntry
mojo.internal.Struct(
    dlp_internals.mojom.FileDatabaseEntrySpec, 'dlp_internals.mojom.FileDatabaseEntry', [
      mojo.internal.StructField('inode_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'inode_$flag', originalFieldName: 'inode' }),
      mojo.internal.StructField('crtime_$value', 8, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'crtime_$flag', originalFieldName: 'crtime' }),
      mojo.internal.StructField('source_url', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('referrer_url', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('inode_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'inode_$value', originalFieldName: 'inode' }),
      mojo.internal.StructField('crtime_$flag', 32, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'crtime_$value', originalFieldName: 'crtime' }),
    ],
    [[0, 48]]);

// Interface: ReportingObserver
mojo.internal.Struct(
    dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec, 'dlp_internals.mojom.ReportingObserver_OnReportEvent_Params', [
      mojo.internal.StructField('event', 0, 0, dlp_internals.mojom.DlpEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [event],
      false);
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

dlp_internals.mojom.ReportingObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReportEvent(params.event);
          break;
        }
      }
    }});
  }
};

dlp_internals.mojom.ReportingObserverReceiver = dlp_internals.mojom.ReportingObserverReceiver;

dlp_internals.mojom.ReportingObserverPtr = dlp_internals.mojom.ReportingObserverRemote;
dlp_internals.mojom.ReportingObserverRequest = dlp_internals.mojom.ReportingObserverPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetClipboardDataSource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParams', [
      mojo.internal.StructField('source', 0, 0, dlp_internals.mojom.DataTransferEndpointSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParams', [
      mojo.internal.StructField('web_contents_info', 0, 0, mojo.internal.Array(dlp_internals.mojom.WebContentsInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec, 'dlp_internals.mojom.PageHandler_ObserveReporting_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(dlp_internals.mojom.ReportingObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParams', [
      mojo.internal.StructField('db_entries', 0, 0, mojo.internal.Array(dlp_internals.mojom.FileDatabaseEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetFileInode_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetFileInode_ResponseParams', [
      mojo.internal.StructField('inode', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  getContentRestrictionsInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec,
      [],
      false);
  }

  observeReporting(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec,
      null,
      [observer],
      false);
  }

  getFilesDatabaseEntries() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec,
      [],
      false);
  }

  getFileInode(file_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec,
      [file_name],
      false);
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

dlp_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getClipboardDataSource();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getContentRestrictionsInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeReporting(params.observer);
          break;
        }
        case 3: {
          const params = dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFilesDatabaseEntries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileInode(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

dlp_internals.mojom.PageHandlerReceiver = dlp_internals.mojom.PageHandlerReceiver;

dlp_internals.mojom.PageHandlerPtr = dlp_internals.mojom.PageHandlerRemote;
dlp_internals.mojom.PageHandlerRequest = dlp_internals.mojom.PageHandlerPendingReceiver;

