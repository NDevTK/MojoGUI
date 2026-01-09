// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/ime.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: TextInputType
arc.mojom.TextInputType = {
  TEXT: 0,
  PASSWORD: 1,
  SEARCH: 2,
  EMAIL: 3,
  NUMBER: 4,
  TELEPHONE: 5,
  URL: 6,
  DATE: 7,
  TIME: 8,
  DATETIME: 9,
};

// Enum: SegmentStyle
arc.mojom.SegmentStyle = {
  DEFAULT: 0,
  EMPHASIZED: 1,
  NONE: 2,
};

// Enum: CursorCoordinateSpace
arc.mojom.CursorCoordinateSpace = {
  0: 0,
  0: 1,
  0: 2,
};

// Struct: CompositionSegment
arc.mojom.CompositionSegment = class {
  constructor(values = {}) {
    this.end_offset = values.end_offset !== undefined ? values.end_offset : 0;
    this.style = values.style !== undefined ? values.style : false;
  }
};

// Struct: KeyEventData
arc.mojom.KeyEventData = class {
  constructor(values = {}) {
    this.is_repeat = values.is_repeat !== undefined ? values.is_repeat : 0;
  }
};

// Interface: ImeHost
arc.mojom.ImeHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ImeHost';
  }

  0(type, is_personalized_learning_allowed, flags) {
    // Method: 0
    // Call: 0(type, is_personalized_learning_allowed, flags)
  }

  8(rect, coordinateSpace) {
    // Method: 8
    // Call: 8(rect, coordinateSpace)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  9(rect, text_range, text_in_range, selection_range, coordinateSpace) {
    // Method: 9
    // Call: 9(rect, text_range, text_in_range, selection_range, coordinateSpace)
  }

  7(key_event_data) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(key_event_data)
      resolve({});
    });
  }

};

arc.mojom.ImeHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ImeInstance
arc.mojom.ImeInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ImeInstance';
  }

  6(host_remote) {
    // Method: 6
    // Call: 6(host_remote)
  }

  1(text, segments, selection_range) {
    // Method: 1
    // Call: 1(text, segments, selection_range)
  }

  7(selection) {
    // Method: 7
    // Call: 7(selection)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  end(the) {
    // Method: end
    // Call: end(the)
  }

  start(text) {
    // Method: start
    // Call: start(text)
  }

  3(text, new_cursor_position) {
    // Method: 3
    // Call: 3(text, new_cursor_position)
  }

  4(new_bounds, is_available) {
    // Method: 4
    // Call: 4(new_bounds, is_available)
  }

  5(before, after) {
    // Method: 5
    // Call: 5(before, after)
  }

  8(range) {
    // Method: 8
    // Call: 8(range)
  }

};

arc.mojom.ImeInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
