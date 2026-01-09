// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/input_method_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: ImeInfo
arc.mojom.ImeInfo = class {
  constructor(values = {}) {
    this.is_allowed_in_clamshell_mode = values.is_allowed_in_clamshell_mode !== undefined ? values.is_allowed_in_clamshell_mode : false;
  }
};

// Struct: TextInputState
arc.mojom.TextInputState = class {
  constructor(values = {}) {
    this.cursor_pos = values.cursor_pos !== undefined ? values.cursor_pos : 0;
    this.composition_text_range = values.composition_text_range !== undefined ? values.composition_text_range : 0;
  }
};

// Interface: InputConnection
arc.mojom.InputConnectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.InputConnection';
  }

};

arc.mojom.InputConnectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InputMethodManagerHost
arc.mojom.InputMethodManagerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.InputMethodManagerHost';
  }

};

arc.mojom.InputMethodManagerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InputMethodManagerInstance
arc.mojom.InputMethodManagerInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.InputMethodManagerInstance';
  }

};

arc.mojom.InputMethodManagerInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
