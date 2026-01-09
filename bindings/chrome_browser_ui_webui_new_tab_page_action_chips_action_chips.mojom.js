// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/action_chips/action_chips.mojom
// Module: action_chips.mojom

'use strict';

// Module namespace
var action_chips = action_chips || {};
action_chips.mojom = action_chips.mojom || {};


// Enum: ChipType
action_chips.mojom.ChipType = {
  kImage: 0,
  kDeepSearch: 1,
  kRecentTab: 2,
  kDeepDive: 3,
};

// Struct: TabInfo
action_chips.mojom.TabInfo = class {
  constructor(values = {}) {
    this.last_active_time = values.last_active_time !== undefined ? values.last_active_time : 0;
  }
};

// Struct: ActionChip
action_chips.mojom.ActionChip = class {
  constructor(values = {}) {
    this.tab = values.tab !== undefined ? values.tab : "";
  }
};

// Interface: ActionChipsHandler
action_chips.mojom.ActionChipsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'action_chips.mojom.ActionChipsHandler';
  }

  startActionChipsRetrieval() {
    // Method: StartActionChipsRetrieval
    // Call: StartActionChipsRetrieval()
  }

};

action_chips.mojom.ActionChipsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
action_chips.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'action_chips.mojom.Page';
  }

  onActionChipsChanged(action_chips) {
    // Method: OnActionChipsChanged
    // Call: OnActionChipsChanged(action_chips)
  }

};

action_chips.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ActionChipsHandlerFactory
action_chips.mojom.ActionChipsHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'action_chips.mojom.ActionChipsHandlerFactory';
  }

  createActionChipsHandler(handler, page) {
    // Method: CreateActionChipsHandler
    // Call: CreateActionChipsHandler(handler, page)
  }

};

action_chips.mojom.ActionChipsHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
