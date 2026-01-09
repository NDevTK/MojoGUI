// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/popup_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Type
blink.mojom.Type = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};

// Struct: MenuItem
blink.mojom.MenuItem = class {
  constructor(values = {}) {
    this.kOption = values.kOption !== undefined ? values.kOption : null;
  }
};

// Interface: PopupMenuClient
blink.mojom.PopupMenuClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PopupMenuClient';
  }

  didAcceptIndices(indices) {
    // Method: DidAcceptIndices
    // Call: DidAcceptIndices(indices)
  }

  discarded(a) {
    // Method: discarded
    // Call: discarded(a)
  }

  didCancel() {
    // Method: DidCancel
    // Call: DidCancel()
  }

};

blink.mojom.PopupMenuClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
