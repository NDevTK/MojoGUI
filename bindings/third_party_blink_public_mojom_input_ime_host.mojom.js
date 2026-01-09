// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/ime_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: EditorBoundsInfo
blink.mojom.EditorBoundsInfo = class {
  constructor(values = {}) {
    this.handwriting_bounds = values.handwriting_bounds !== undefined ? values.handwriting_bounds : null;
  }
};

// Struct: TextAppearanceInfo
blink.mojom.TextAppearanceInfo = class {
  constructor(values = {}) {
    this.text_color = values.text_color !== undefined ? values.text_color : null;
  }
};

// Struct: InputCursorAnchorInfo
blink.mojom.InputCursorAnchorInfo = class {
  constructor(values = {}) {
    this.visible_line_bounds = values.visible_line_bounds !== undefined ? values.visible_line_bounds : [];
    this.insertion_marker = values.insertion_marker !== undefined ? values.insertion_marker : null;
    this.update = values.update !== undefined ? values.update : null;
    this.requested = values.requested !== undefined ? values.requested : false;
  }
};

// Interface: ImeRenderWidgetHost
blink.mojom.ImeRenderWidgetHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ImeRenderWidgetHost';
  }

  updateCursorAnchorInfo(cursor_anchor_info) {
    // Method: UpdateCursorAnchorInfo
    // Call: UpdateCursorAnchorInfo(cursor_anchor_info)
  }

};

blink.mojom.ImeRenderWidgetHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
