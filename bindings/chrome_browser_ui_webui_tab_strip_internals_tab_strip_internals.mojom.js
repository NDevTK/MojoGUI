// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip_internals/tab_strip_internals.mojom
// Module: tab_strip_internals.mojom

'use strict';

// Module namespace
var tab_strip_internals = tab_strip_internals || {};
tab_strip_internals.mojom = tab_strip_internals.mojom || {};


// Enum: Type
tab_strip_internals.mojom.Type = {
};

// Enum: Layout
tab_strip_internals.mojom.Layout = {
  kVertical: 0,
  kHorizontal: 1,
};

// Struct: Container
tab_strip_internals.mojom.Container = class {
  constructor(values = {}) {
    this.tab_restore = values.tab_restore !== undefined ? values.tab_restore : null;
  }
};

// Struct: TabStripTree
tab_strip_internals.mojom.TabStripTree = class {
  constructor(values = {}) {
    this.windows = values.windows !== undefined ? values.windows : [];
  }
};

// Struct: WindowNode
tab_strip_internals.mojom.WindowNode = class {
  constructor(values = {}) {
    this.selection_model = values.selection_model !== undefined ? values.selection_model : null;
  }
};

// Struct: NodeId
tab_strip_internals.mojom.NodeId = class {
  constructor(values = {}) {
    this.kTab = values.kTab !== undefined ? values.kTab : null;
  }
};

// Struct: TabStripModel
tab_strip_internals.mojom.TabStripModel = class {
  constructor(values = {}) {
    this.TabStripCollection. = values.TabStripCollection. !== undefined ? values.TabStripCollection. : null;
    this.example = values.example !== undefined ? values.example : null;
    this.created = values.created !== undefined ? values.created : null;
    this.root = values.root !== undefined ? values.root : null;
  }
};

// Struct: Node
tab_strip_internals.mojom.Node = class {
  constructor(values = {}) {
    this.children = values.children !== undefined ? values.children : [];
  }
};

// Struct: Tab
tab_strip_internals.mojom.Tab = class {
  constructor(values = {}) {
    this.alert_states = values.alert_states !== undefined ? values.alert_states : false;
  }
};

// Struct: TabStripCollection
tab_strip_internals.mojom.TabStripCollection = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : null;
  }
};

// Struct: PinnedCollection
tab_strip_internals.mojom.PinnedCollection = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : null;
  }
};

// Struct: UnpinnedCollection
tab_strip_internals.mojom.UnpinnedCollection = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : null;
  }
};

// Struct: GroupCollection
tab_strip_internals.mojom.GroupCollection = class {
  constructor(values = {}) {
    this.visualData = values.visualData !== undefined ? values.visualData : null;
  }
};

// Struct: TabGroupVisualData
tab_strip_internals.mojom.TabGroupVisualData = class {
  constructor(values = {}) {
    this.is_collapsed = values.is_collapsed !== undefined ? values.is_collapsed : false;
  }
};

// Struct: SplitCollection
tab_strip_internals.mojom.SplitCollection = class {
  constructor(values = {}) {
    this.visualData = values.visualData !== undefined ? values.visualData : null;
  }
};

// Struct: SplitTabVisualData
tab_strip_internals.mojom.SplitTabVisualData = class {
  constructor(values = {}) {
    this.kVertical = values.kVertical !== undefined ? values.kVertical : null;
  }
};

// Struct: SelectionModel
tab_strip_internals.mojom.SelectionModel = class {
  constructor(values = {}) {
    this.selected_indices = values.selected_indices !== undefined ? values.selected_indices : 0;
  }
};

// Struct: TabRestoreData
tab_strip_internals.mojom.TabRestoreData = class {
  constructor(values = {}) {
    this.entries = values.entries !== undefined ? values.entries : [];
  }
};

// Struct: TabRestoreEntryBase
tab_strip_internals.mojom.TabRestoreEntryBase = class {
  constructor(values = {}) {
    this.timestamp = values.timestamp !== undefined ? values.timestamp : 0;
  }
};

// Struct: TabRestoreTab
tab_strip_internals.mojom.TabRestoreTab = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : 0;
  }
};

// Struct: TabRestoreGroup
tab_strip_internals.mojom.TabRestoreGroup = class {
  constructor(values = {}) {
    this.tabs = values.tabs !== undefined ? values.tabs : 0;
  }
};

// Struct: TabRestoreWindow
tab_strip_internals.mojom.TabRestoreWindow = class {
  constructor(values = {}) {
    this.tabs = values.tabs !== undefined ? values.tabs : 0;
  }
};

// Interface: PageHandlerFactory
tab_strip_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_strip_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

tab_strip_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
tab_strip_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_strip_internals.mojom.PageHandler';
  }

  getTabStripData() {
    // Method: GetTabStripData
    return new Promise((resolve) => {
      // Call: GetTabStripData()
      resolve({});
    });
  }

};

tab_strip_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
tab_strip_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_strip_internals.mojom.Page';
  }

  onTabStripUpdated(data) {
    // Method: OnTabStripUpdated
    // Call: OnTabStripUpdated(data)
  }

};

tab_strip_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
