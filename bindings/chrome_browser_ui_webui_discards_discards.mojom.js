// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/discards.mojom
// Module: discards.mojom

'use strict';

// Module namespace
var discards = discards || {};
discards.mojom = discards.mojom || {};
var url = url || {};


// Enum: LifecycleUnitVisibility
discards.mojom.mojom.LifecycleUnitVisibility = {
  HIDDEN: 0,
  OCCLUDED: 1,
  VISIBLE: 2,
};
discards.mojom.mojom.LifecycleUnitVisibilitySpec = { $: mojo.internal.Enum() };

// Enum: CanFreeze
discards.mojom.mojom.CanFreeze = {
  YES: 0,
  VARIES: 1,
  NO: 2,
};
discards.mojom.mojom.CanFreezeSpec = { $: mojo.internal.Enum() };

// Struct: TabDiscardsInfo
discards.mojom.mojom.TabDiscardsInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.TabDiscardsInfo',
      packedSize: 96,
      fields: [
        { name: 'tab_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'visibility', packedOffset: 48, packedBitOffset: 0, type: discards.mojom.LifecycleUnitVisibilitySpec, nullable: false, minVersion: 0 },
        { name: 'loading_state', packedOffset: 52, packedBitOffset: 0, type: mojom.LifecycleUnitLoadingStateSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 56, packedBitOffset: 0, type: mojom.LifecycleUnitStateSpec, nullable: false, minVersion: 0 },
        { name: 'can_discard', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cannot_discard_reasons', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'can_freeze', packedOffset: 60, packedBitOffset: 0, type: discards.mojom.CanFreezeSpec, nullable: false, minVersion: 0 },
        { name: 'cannot_freeze_reasons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'discard_count', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'discard_reason', packedOffset: 68, packedBitOffset: 0, type: mojom.LifecycleUnitDiscardReasonSpec, nullable: false, minVersion: 0 },
        { name: 'utility_rank', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'last_active_seconds', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_auto_discardable', packedOffset: 84, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'site_engagement_score', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_focus', packedOffset: 84, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'state_change_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Struct: PageInfo
discards.mojom.mojom.PageInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.PageInfo',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'main_frame_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'opener_frame_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'embedder_frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'description_json', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: FrameInfo
discards.mojom.mojom.FrameInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.FrameInfo',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'page_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'parent_frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'process_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'description_json', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ProcessInfo
discards.mojom.mojom.ProcessInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.ProcessInfo',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'private_footprint_kb', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'description_json', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: WorkerInfo
discards.mojom.mojom.WorkerInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.WorkerInfo',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'process_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'client_frame_ids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'client_worker_ids', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'child_worker_ids', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'description_json', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: FavIconInfo
discards.mojom.mojom.FavIconInfoSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.FavIconInfo',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'icon_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: DetailsProvider
discards.mojom.mojom.DetailsProvider = {};

discards.mojom.mojom.DetailsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.mojom.DetailsProviderRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.DetailsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.mojom.DetailsProviderPendingReceiver,
      handle);
    this.$ = new discards.mojom.mojom.DetailsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.mojom.DetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTabDiscardsInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discards.mojom.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec,
      discards.mojom.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec,
      []);
  }

  setAutoDiscardable(tab_id, is_auto_discardable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec,
      null,
      [tab_id, is_auto_discardable]);
  }

  discardById(tab_id, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      discards.mojom.mojom.DetailsProvider_DiscardById_ParamsSpec,
      null,
      [tab_id, reason]);
  }

  freezeById(tab_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      discards.mojom.mojom.DetailsProvider_FreezeById_ParamsSpec,
      null,
      [tab_id]);
  }

  loadById(tab_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      discards.mojom.mojom.DetailsProvider_LoadById_ParamsSpec,
      null,
      [tab_id]);
  }

  discard() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      discards.mojom.mojom.DetailsProvider_Discard_ParamsSpec,
      null,
      []);
  }

  toggleBatterySaverMode() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      discards.mojom.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec,
      null,
      []);
  }

  refreshPerformanceTabCpuMeasurements() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      discards.mojom.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec,
      null,
      []);
  }

};

discards.mojom.mojom.DetailsProvider.getRemote = function() {
  let remote = new discards.mojom.mojom.DetailsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.DetailsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetTabDiscardsInfo
discards.mojom.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.GetTabDiscardsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

discards.mojom.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.GetTabDiscardsInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(discards.mojom.TabDiscardsInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAutoDiscardable
discards.mojom.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.SetAutoDiscardable_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_auto_discardable', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DiscardById
discards.mojom.mojom.DetailsProvider_DiscardById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.DiscardById_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 4, packedBitOffset: 0, type: mojom.LifecycleUnitDiscardReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FreezeById
discards.mojom.mojom.DetailsProvider_FreezeById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.FreezeById_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadById
discards.mojom.mojom.DetailsProvider_LoadById_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.LoadById_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Discard
discards.mojom.mojom.DetailsProvider_Discard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.Discard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ToggleBatterySaverMode
discards.mojom.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.ToggleBatterySaverMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RefreshPerformanceTabCpuMeasurements
discards.mojom.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.DetailsProvider.RefreshPerformanceTabCpuMeasurements_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
discards.mojom.mojom.DetailsProviderPtr = discards.mojom.mojom.DetailsProviderRemote;
discards.mojom.mojom.DetailsProviderRequest = discards.mojom.mojom.DetailsProviderPendingReceiver;


// Interface: GraphChangeStream
discards.mojom.mojom.GraphChangeStream = {};

discards.mojom.mojom.GraphChangeStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.mojom.GraphChangeStreamRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphChangeStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.mojom.GraphChangeStreamPendingReceiver,
      handle);
    this.$ = new discards.mojom.mojom.GraphChangeStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.mojom.GraphChangeStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  frameCreated(frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discards.mojom.mojom.GraphChangeStream_FrameCreated_ParamsSpec,
      null,
      [frame]);
  }

  pageCreated(pages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.mojom.GraphChangeStream_PageCreated_ParamsSpec,
      null,
      [pages]);
  }

  processCreated(process) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      discards.mojom.mojom.GraphChangeStream_ProcessCreated_ParamsSpec,
      null,
      [process]);
  }

  workerCreated(worker) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      discards.mojom.mojom.GraphChangeStream_WorkerCreated_ParamsSpec,
      null,
      [worker]);
  }

  frameChanged(frame) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      discards.mojom.mojom.GraphChangeStream_FrameChanged_ParamsSpec,
      null,
      [frame]);
  }

  pageChanged(page) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      discards.mojom.mojom.GraphChangeStream_PageChanged_ParamsSpec,
      null,
      [page]);
  }

  processChanged(process) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      discards.mojom.mojom.GraphChangeStream_ProcessChanged_ParamsSpec,
      null,
      [process]);
  }

  workerChanged(worker) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      discards.mojom.mojom.GraphChangeStream_WorkerChanged_ParamsSpec,
      null,
      [worker]);
  }

  favIconDataAvailable(favicon) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      discards.mojom.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec,
      null,
      [favicon]);
  }

  nodeDeleted(node_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      discards.mojom.mojom.GraphChangeStream_NodeDeleted_ParamsSpec,
      null,
      [node_id]);
  }

};

discards.mojom.mojom.GraphChangeStream.getRemote = function() {
  let remote = new discards.mojom.mojom.GraphChangeStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphChangeStream',
    'context');
  return remote.$;
};

// ParamsSpec for FrameCreated
discards.mojom.mojom.GraphChangeStream_FrameCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.FrameCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.FrameInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PageCreated
discards.mojom.mojom.GraphChangeStream_PageCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.PageCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'pages', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.PageInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProcessCreated
discards.mojom.mojom.GraphChangeStream_ProcessCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.ProcessCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'process', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.ProcessInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WorkerCreated
discards.mojom.mojom.GraphChangeStream_WorkerCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.WorkerCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'worker', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.WorkerInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FrameChanged
discards.mojom.mojom.GraphChangeStream_FrameChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.FrameChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.FrameInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PageChanged
discards.mojom.mojom.GraphChangeStream_PageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.PageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.PageInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProcessChanged
discards.mojom.mojom.GraphChangeStream_ProcessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.ProcessChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'process', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.ProcessInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WorkerChanged
discards.mojom.mojom.GraphChangeStream_WorkerChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.WorkerChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'worker', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.WorkerInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FavIconDataAvailable
discards.mojom.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.FavIconDataAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'favicon', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.FavIconInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NodeDeleted
discards.mojom.mojom.GraphChangeStream_NodeDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphChangeStream.NodeDeleted_Params',
      packedSize: 16,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
discards.mojom.mojom.GraphChangeStreamPtr = discards.mojom.mojom.GraphChangeStreamRemote;
discards.mojom.mojom.GraphChangeStreamRequest = discards.mojom.mojom.GraphChangeStreamPendingReceiver;


// Interface: GraphDump
discards.mojom.mojom.GraphDump = {};

discards.mojom.mojom.GraphDumpPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.mojom.GraphDumpRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphDump';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.mojom.GraphDumpPendingReceiver,
      handle);
    this.$ = new discards.mojom.mojom.GraphDumpRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.mojom.GraphDumpRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribeToChanges(change_subscriber) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discards.mojom.mojom.GraphDump_SubscribeToChanges_ParamsSpec,
      null,
      [change_subscriber]);
  }

  requestNodeDescriptions(node_ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec,
      discards.mojom.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec,
      [node_ids]);
  }

};

discards.mojom.mojom.GraphDump.getRemote = function() {
  let remote = new discards.mojom.mojom.GraphDumpRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphDump',
    'context');
  return remote.$;
};

// ParamsSpec for SubscribeToChanges
discards.mojom.mojom.GraphDump_SubscribeToChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphDump.SubscribeToChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'change_subscriber', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(discards.mojom.GraphChangeStreamRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestNodeDescriptions
discards.mojom.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphDump.RequestNodeDescriptions_Params',
      packedSize: 16,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

discards.mojom.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.GraphDump.RequestNodeDescriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'node_descriptions_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int64, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
discards.mojom.mojom.GraphDumpPtr = discards.mojom.mojom.GraphDumpRemote;
discards.mojom.mojom.GraphDumpRequest = discards.mojom.mojom.GraphDumpPendingReceiver;

