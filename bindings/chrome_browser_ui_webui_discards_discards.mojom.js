// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/discards.mojom
// Module: discards.mojom

'use strict';

// Module namespace
var discards = discards || {};
discards.mojom = discards.mojom || {};


// Enum: LifecycleUnitVisibility
discards.mojom.LifecycleUnitVisibility = {
  HIDDEN: 0,
  OCCLUDED: 1,
  VISIBLE: 2,
};

// Enum: CanFreeze
discards.mojom.CanFreeze = {
  YES: 0,
  VARIES: 1,
  NO: 2,
};

// Struct: TabDiscardsInfo
discards.mojom.TabDiscardsInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.TabDiscardsInfo',
      packedSize: 144,
      fields: [
        { name: 'tab_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'visibility', packedOffset: 16, packedBitOffset: 0, type: discards.mojom.LifecycleUnitVisibilitySpec, nullable: false },
        { name: 'loading_state', packedOffset: 24, packedBitOffset: 0, type: mojom.LifecycleUnitLoadingStateSpec, nullable: false },
        { name: 'state', packedOffset: 32, packedBitOffset: 0, type: mojom.LifecycleUnitStateSpec, nullable: false },
        { name: 'can_discard', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cannot_discard_reasons', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'can_freeze', packedOffset: 56, packedBitOffset: 0, type: discards.mojom.CanFreezeSpec, nullable: false },
        { name: 'cannot_freeze_reasons', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'discard_count', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'discard_reason', packedOffset: 80, packedBitOffset: 0, type: mojom.LifecycleUnitDiscardReasonSpec, nullable: false },
        { name: 'utility_rank', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'last_active_seconds', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_auto_discardable', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'site_engagement_score', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'has_focus', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'state_change_time', packedOffset: 128, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageInfo
discards.mojom.PageInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.PageInfo',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'main_frame_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'opener_frame_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'embedder_frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'description_json', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FrameInfo
discards.mojom.FrameInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.FrameInfo',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'page_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'parent_frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'process_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'description_json', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProcessInfo
discards.mojom.ProcessInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.ProcessInfo',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false },
        { name: 'private_footprint_kb', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'description_json', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WorkerInfo
discards.mojom.WorkerInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.WorkerInfo',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'process_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'client_frame_ids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'client_worker_ids', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'child_worker_ids', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'description_json', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FavIconInfo
discards.mojom.FavIconInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.FavIconInfo',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'icon_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DetailsProvider
discards.mojom.DetailsProvider = {};

discards.mojom.DetailsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.DetailsProviderRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.DetailsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.DetailsProviderPendingReceiver,
      handle);
    this.$ = new discards.mojom.DetailsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.DetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTabDiscardsInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec,
      discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec,
      []);
  }

  setAutoDiscardable(tab_id, is_auto_discardable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec,
      null,
      [tab_id, is_auto_discardable]);
  }

  discardById(tab_id, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      discards.mojom.DetailsProvider_DiscardById_ParamsSpec,
      null,
      [tab_id, reason]);
  }

  freezeById(tab_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      discards.mojom.DetailsProvider_FreezeById_ParamsSpec,
      null,
      [tab_id]);
  }

  loadById(tab_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      discards.mojom.DetailsProvider_LoadById_ParamsSpec,
      null,
      [tab_id]);
  }

  discard() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      discards.mojom.DetailsProvider_Discard_ParamsSpec,
      null,
      []);
  }

  toggleBatterySaverMode() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec,
      null,
      []);
  }

  refreshPerformanceTabCpuMeasurements() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec,
      null,
      []);
  }

};

discards.mojom.DetailsProvider.getRemote = function() {
  let remote = new discards.mojom.DetailsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.DetailsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetTabDiscardsInfo
discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.GetTabDiscardsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.GetTabDiscardsInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAutoDiscardable
discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.SetAutoDiscardable_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_auto_discardable', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DiscardById
discards.mojom.DetailsProvider_DiscardById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.DiscardById_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojom.LifecycleUnitDiscardReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FreezeById
discards.mojom.DetailsProvider_FreezeById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.FreezeById_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadById
discards.mojom.DetailsProvider_LoadById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.LoadById_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Discard
discards.mojom.DetailsProvider_Discard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.Discard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ToggleBatterySaverMode
discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.ToggleBatterySaverMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RefreshPerformanceTabCpuMeasurements
discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.RefreshPerformanceTabCpuMeasurements_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
discards.mojom.DetailsProviderPtr = discards.mojom.DetailsProviderRemote;
discards.mojom.DetailsProviderRequest = discards.mojom.DetailsProviderPendingReceiver;


// Interface: GraphChangeStream
discards.mojom.GraphChangeStream = {};

discards.mojom.GraphChangeStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.GraphChangeStreamRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphChangeStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.GraphChangeStreamPendingReceiver,
      handle);
    this.$ = new discards.mojom.GraphChangeStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.GraphChangeStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  frameCreated(frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec,
      null,
      [frame]);
  }

  pageCreated(pages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.GraphChangeStream_PageCreated_ParamsSpec,
      null,
      [pages]);
  }

  processCreated(process) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec,
      null,
      [process]);
  }

  workerCreated(worker) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec,
      null,
      [worker]);
  }

  frameChanged(frame) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec,
      null,
      [frame]);
  }

  pageChanged(page) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      discards.mojom.GraphChangeStream_PageChanged_ParamsSpec,
      null,
      [page]);
  }

  processChanged(process) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec,
      null,
      [process]);
  }

  workerChanged(worker) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec,
      null,
      [worker]);
  }

  favIconDataAvailable(favicon) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec,
      null,
      [favicon]);
  }

  nodeDeleted(node_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec,
      null,
      [node_id]);
  }

};

discards.mojom.GraphChangeStream.getRemote = function() {
  let remote = new discards.mojom.GraphChangeStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphChangeStream',
    'context');
  return remote.$;
};

// ParamsSpec for FrameCreated
discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.FrameCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.FrameInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PageCreated
discards.mojom.GraphChangeStream_PageCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.PageCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'pages', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.PageInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ProcessCreated
discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.ProcessCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'process', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.ProcessInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WorkerCreated
discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.WorkerCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'worker', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.WorkerInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FrameChanged
discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.FrameChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.FrameInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PageChanged
discards.mojom.GraphChangeStream_PageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.PageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.PageInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ProcessChanged
discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.ProcessChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'process', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.ProcessInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WorkerChanged
discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.WorkerChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'worker', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.WorkerInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FavIconDataAvailable
discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.FavIconDataAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'favicon', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.FavIconInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NodeDeleted
discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.NodeDeleted_Params',
      packedSize: 16,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
discards.mojom.GraphChangeStreamPtr = discards.mojom.GraphChangeStreamRemote;
discards.mojom.GraphChangeStreamRequest = discards.mojom.GraphChangeStreamPendingReceiver;


// Interface: GraphDump
discards.mojom.GraphDump = {};

discards.mojom.GraphDumpPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.GraphDumpRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphDump';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.GraphDumpPendingReceiver,
      handle);
    this.$ = new discards.mojom.GraphDumpRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.GraphDumpRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribeToChanges(change_subscriber) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec,
      null,
      [change_subscriber]);
  }

  requestNodeDescriptions(node_ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec,
      discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec,
      [node_ids]);
  }

};

discards.mojom.GraphDump.getRemote = function() {
  let remote = new discards.mojom.GraphDumpRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphDump',
    'context');
  return remote.$;
};

// ParamsSpec for SubscribeToChanges
discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphDump.SubscribeToChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'change_subscriber', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestNodeDescriptions
discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphDump.RequestNodeDescriptions_Params',
      packedSize: 16,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphDump.RequestNodeDescriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'node_descriptions_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
discards.mojom.GraphDumpPtr = discards.mojom.GraphDumpRemote;
discards.mojom.GraphDumpRequest = discards.mojom.GraphDumpPendingReceiver;

