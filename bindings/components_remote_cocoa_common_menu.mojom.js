// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/menu.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Struct: MenuItemCommonFields
remote_cocoa.mojom.MenuItemCommonFields = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : 0;
  }
};

// Struct: SubmenuMenuItem
remote_cocoa.mojom.SubmenuMenuItem = class {
  constructor(values = {}) {
    this.children = values.children !== undefined ? values.children : [];
  }
};

// Struct: MenuControllerParams
remote_cocoa.mojom.MenuControllerParams = class {
  constructor(values = {}) {
    this.iph_dot_color = values.iph_dot_color !== undefined ? values.iph_dot_color : 0;
  }
};

// Struct: ContextMenu
remote_cocoa.mojom.ContextMenu = class {
  constructor(values = {}) {
    this.items = values.items !== undefined ? values.items : [];
    this.anchor = values.anchor !== undefined ? values.anchor : 0;
    this.params = values.params !== undefined ? values.params : 0;
  }
};

// Interface: MenuHost
remote_cocoa.mojom.MenuHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.MenuHost';
  }

  commandActivated(command_id, event_flags) {
    // Method: CommandActivated
    // Call: CommandActivated(command_id, event_flags)
  }

  menuClosed() {
    // Method: MenuClosed
    // Call: MenuClosed()
  }

};

remote_cocoa.mojom.MenuHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Menu
remote_cocoa.mojom.MenuPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.Menu';
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

  updateMenuItem(command_id, enabled, visible, label) {
    // Method: UpdateMenuItem
    // Call: UpdateMenuItem(command_id, enabled, visible, label)
  }

};

remote_cocoa.mojom.MenuRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
