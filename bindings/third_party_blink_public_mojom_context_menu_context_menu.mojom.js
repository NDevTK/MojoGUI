// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/context_menu/context_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ContextMenuDataMediaType
blink.mojom.ContextMenuDataMediaType = {
};

// Enum: CustomContextMenuItemType
blink.mojom.CustomContextMenuItemType = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};

// Struct: Accelerator
blink.mojom.Accelerator = class {
  constructor(values = {}) {
    this.modifiers = values.modifiers !== undefined ? values.modifiers : 0;
  }
};

// Struct: FormRendererId
blink.mojom.FormRendererId = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Struct: FieldRendererId
blink.mojom.FieldRendererId = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Struct: CustomContextMenuItem
blink.mojom.CustomContextMenuItem = class {
  constructor(values = {}) {
    this.submenu = values.submenu !== undefined ? values.submenu : 0;
  }
};

// Struct: UntrustworthyContextMenuParams
blink.mojom.UntrustworthyContextMenuParams = class {
  constructor(values = {}) {
    this.unfiltered_link_url = values.unfiltered_link_url !== undefined ? values.unfiltered_link_url : 0;
    this.has_image_contents = values.has_image_contents !== undefined ? values.has_image_contents : false;
    this.plugin = values.plugin !== undefined ? values.plugin : null;
    this.suggested_filename = values.suggested_filename !== undefined ? values.suggested_filename : 0;
    this.dictionary_suggestions = values.dictionary_suggestions !== undefined ? values.dictionary_suggestions : "";
    this.referrer_policy = values.referrer_policy !== undefined ? values.referrer_policy : 0;
    this.url = values.url !== undefined ? values.url : null;
    this.example = values.example !== undefined ? values.example : null;
    this.window = values.window !== undefined ? values.window : null;
    this.selection_start_offset = values.selection_start_offset !== undefined ? values.selection_start_offset : 0;
    this.type = values.type !== undefined ? values.type : null;
    this.opened_from_interest_for = values.opened_from_interest_for !== undefined ? values.opened_from_interest_for : false;
    this.interest_for_node_id = values.interest_for_node_id !== undefined ? values.interest_for_node_id : 0;
    this.form_control_type = values.form_control_type !== undefined ? values.form_control_type : null;
    this.form_renderer_id = values.form_renderer_id !== undefined ? values.form_renderer_id : false;
  }
};

// Interface: ContextMenuClient
blink.mojom.ContextMenuClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ContextMenuClient';
  }

  customContextMenuAction(action) {
    // Method: CustomContextMenuAction
    // Call: CustomContextMenuAction(action)
  }

  contextMenuClosed(link_followed, impression) {
    // Method: ContextMenuClosed
    // Call: ContextMenuClosed(link_followed, impression)
  }

};

blink.mojom.ContextMenuClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
