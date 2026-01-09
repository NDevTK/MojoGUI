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

  0(text, new_cursor_pos) {
    // Method: 0
    // Call: 0(text, new_cursor_pos)
  }

  1(before, after) {
    // Method: 1
    // Call: 1(before, after)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  getTextBeforeCursor() {
    // Method: getTextBeforeCursor
    // Call: getTextBeforeCursor()
  }

  getTextAfterCursor() {
    // Method: getTextAfterCursor
    // Call: getTextAfterCursor()
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

  4(text, new_cursor_pos, new_selection_range) {
    // Method: 4
    // Call: 4(text, new_cursor_pos, new_selection_range)
  }

  5(new_selection_range) {
    // Method: 5
    // Call: 5(new_selection_range)
  }

  6(key_event_data) {
    // Method: 6
    // Call: 6(key_event_data)
  }

  7(new_range) {
    // Method: 7
    // Call: 7(new_range)
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

  0(ime_id) {
    // Method: 0
    // Call: 0(ime_id)
  }

  2(ime_id) {
    // Method: 2
    // Call: 2(ime_id)
  }

  1(ime_infos) {
    // Method: 1
    // Call: 1(ime_infos)
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

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

  1(ime_id, enable) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(ime_id, enable)
      resolve({});
    });
  }

  2(ime_id) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(ime_id)
      resolve({});
    });
  }

  3(connection, initial_state) {
    // Method: 3
    // Call: 3(connection, initial_state)
  }

  4(state) {
    // Method: 4
    // Call: 4(state)
  }

  5() {
    // Method: 5
    // Call: 5()
  }

  6() {
    // Method: 6
    // Call: 6()
  }

};

arc.mojom.InputMethodManagerInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
