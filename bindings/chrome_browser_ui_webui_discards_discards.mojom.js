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
      discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setAutoDiscardable(tab_id, is_auto_discardable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec,
      null,
      null,
      [tab_id, is_auto_discardable],
      undefined,
      undefined
    );
  }

  discardById(tab_id, reason) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      discards.mojom.DetailsProvider_DiscardById_ParamsSpec,
      null,
      null,
      [tab_id, reason],
      undefined,
      undefined
    );
  }

  freezeById(tab_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      discards.mojom.DetailsProvider_FreezeById_ParamsSpec,
      null,
      null,
      [tab_id],
      undefined,
      undefined
    );
  }

  loadById(tab_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      discards.mojom.DetailsProvider_LoadById_ParamsSpec,
      null,
      null,
      [tab_id],
      undefined,
      undefined
    );
  }

  discard() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      discards.mojom.DetailsProvider_Discard_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  toggleBatterySaverMode() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  refreshPerformanceTabCpuMeasurements() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'is_auto_discardable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      null,
      [frame],
      undefined,
      undefined
    );
  }

  pageCreated(pages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.GraphChangeStream_PageCreated_ParamsSpec,
      null,
      null,
      [pages],
      undefined,
      undefined
    );
  }

  processCreated(process) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec,
      null,
      null,
      [process],
      undefined,
      undefined
    );
  }

  workerCreated(worker) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec,
      null,
      null,
      [worker],
      undefined,
      undefined
    );
  }

  frameChanged(frame) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec,
      null,
      null,
      [frame],
      undefined,
      undefined
    );
  }

  pageChanged(page) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      discards.mojom.GraphChangeStream_PageChanged_ParamsSpec,
      null,
      null,
      [page],
      undefined,
      undefined
    );
  }

  processChanged(process) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec,
      null,
      null,
      [process],
      undefined,
      undefined
    );
  }

  workerChanged(worker) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec,
      null,
      null,
      [worker],
      undefined,
      undefined
    );
  }

  favIconDataAvailable(favicon) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec,
      null,
      null,
      [favicon],
      undefined,
      undefined
    );
  }

  nodeDeleted(node_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec,
      null,
      null,
      [node_id],
      undefined,
      undefined
    );
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
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'pages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'process', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'worker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'process', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'worker', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'favicon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
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
      null,
      [change_subscriber],
      undefined,
      undefined
    );
  }

  requestNodeDescriptions(node_ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec,
      discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec,
      discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec,
      [node_ids],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
discards.mojom.GraphDumpPtr = discards.mojom.GraphDumpRemote;
discards.mojom.GraphDumpRequest = discards.mojom.GraphDumpPendingReceiver;

