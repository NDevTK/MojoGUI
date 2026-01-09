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

};

arc.mojom.ImeInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
