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
};

// Struct: TabDiscardsInfo
discards.mojom.TabDiscardsInfo = class {
  constructor(values = {}) {
    this.tab_url = values.tab_url !== undefined ? values.tab_url : "";
    this.discard_count = values.discard_count !== undefined ? values.discard_count : 0;
    this.discard_reason = values.discard_reason !== undefined ? values.discard_reason : null;
    this.utility_rank = values.utility_rank !== undefined ? values.utility_rank : 0;
    this.last_active_seconds = values.last_active_seconds !== undefined ? values.last_active_seconds : 0;
    this.id = values.id !== undefined ? values.id : 0;
    this.state_change_time = values.state_change_time !== undefined ? values.state_change_time : 0;
  }
};

// Struct: PageInfo
discards.mojom.PageInfo = class {
  constructor(values = {}) {
    this.main_frame_url = values.main_frame_url !== undefined ? values.main_frame_url : 0;
    this.opener_frame_id = values.opener_frame_id !== undefined ? values.opener_frame_id : 0;
    this.embedder_frame_id = values.embedder_frame_id !== undefined ? values.embedder_frame_id : 0;
    this.by = values.by !== undefined ? values.by : null;
    this.description_json = values.description_json !== undefined ? values.description_json : "";
  }
};

// Struct: FrameInfo
discards.mojom.FrameInfo = class {
  constructor(values = {}) {
    this.page_id = values.page_id !== undefined ? values.page_id : 0;
    this.not = values.not !== undefined ? values.not : null;
    this.description_json = values.description_json !== undefined ? values.description_json : 0;
  }
};

// Struct: ProcessInfo
discards.mojom.ProcessInfo = class {
  constructor(values = {}) {
    this.description_json = values.description_json !== undefined ? values.description_json : 0;
  }
};

// Struct: WorkerInfo
discards.mojom.WorkerInfo = class {
  constructor(values = {}) {
    this.description_json = values.description_json !== undefined ? values.description_json : 0;
  }
};

// Struct: FavIconInfo
discards.mojom.FavIconInfo = class {
  constructor(values = {}) {
    this.node_id = values.node_id !== undefined ? values.node_id : 0;
    this.icon_data = values.icon_data !== undefined ? values.icon_data : "";
  }
};

// Interface: DetailsProvider
discards.mojom.DetailsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'discards.mojom.DetailsProvider';
  }

  getTabDiscardsInfo() {
    // Method: GetTabDiscardsInfo
    return new Promise((resolve) => {
      // Call: GetTabDiscardsInfo()
      resolve({});
    });
  }

  setAutoDiscardable(tab_id, is_auto_discardable) {
    // Method: SetAutoDiscardable
    // Call: SetAutoDiscardable(tab_id, is_auto_discardable)
  }

  discardById(tab_id, reason) {
    // Method: DiscardById
    // Call: DiscardById(tab_id, reason)
  }

  freezeById(tab_id) {
    // Method: FreezeById
    // Call: FreezeById(tab_id)
  }

  loadById(tab_id) {
    // Method: LoadById
    // Call: LoadById(tab_id)
  }

  discard() {
    // Method: Discard
    // Call: Discard()
  }

  toggleBatterySaverMode() {
    // Method: ToggleBatterySaverMode
    // Call: ToggleBatterySaverMode()
  }

  refreshPerformanceTabCpuMeasurements() {
    // Method: RefreshPerformanceTabCpuMeasurements
    // Call: RefreshPerformanceTabCpuMeasurements()
  }

};

discards.mojom.DetailsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GraphChangeStream
discards.mojom.GraphChangeStreamPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'discards.mojom.GraphChangeStream';
  }

  frameCreated(frame) {
    // Method: FrameCreated
    // Call: FrameCreated(frame)
  }

  pageCreated(pages) {
    // Method: PageCreated
    // Call: PageCreated(pages)
  }

  processCreated(process) {
    // Method: ProcessCreated
    // Call: ProcessCreated(process)
  }

  workerCreated(worker) {
    // Method: WorkerCreated
    // Call: WorkerCreated(worker)
  }

  frameChanged(frame) {
    // Method: FrameChanged
    // Call: FrameChanged(frame)
  }

  pageChanged(page) {
    // Method: PageChanged
    // Call: PageChanged(page)
  }

  processChanged(process) {
    // Method: ProcessChanged
    // Call: ProcessChanged(process)
  }

  workerChanged(worker) {
    // Method: WorkerChanged
    // Call: WorkerChanged(worker)
  }

  favIconDataAvailable(favicon) {
    // Method: FavIconDataAvailable
    // Call: FavIconDataAvailable(favicon)
  }

  nodeDeleted(node_id) {
    // Method: NodeDeleted
    // Call: NodeDeleted(node_id)
  }

};

discards.mojom.GraphChangeStreamRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GraphDump
discards.mojom.GraphDumpPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'discards.mojom.GraphDump';
  }

  subscribeToChanges(change_subscriber) {
    // Method: SubscribeToChanges
    // Call: SubscribeToChanges(change_subscriber)
  }

  requestNodeDescriptions(node_ids) {
    // Method: RequestNodeDescriptions
    return new Promise((resolve) => {
      // Call: RequestNodeDescriptions(node_ids)
      resolve({});
    });
  }

};

discards.mojom.GraphDumpRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
