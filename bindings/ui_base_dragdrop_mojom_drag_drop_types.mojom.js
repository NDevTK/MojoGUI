// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/dragdrop/mojom/drag_drop_types.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: DragEventSource
ui.mojom.mojom.DragEventSource = {
  kMouse: 0,
  kTouch: 1,
};
ui.mojom.mojom.DragEventSourceSpec = { $: mojo.internal.Enum() };

// Enum: DragOperation
ui.mojom.mojom.DragOperation = {
  kNone: 0,
  kCopy: 1,
  kLink: 2,
  kMove: 3,
};
ui.mojom.mojom.DragOperationSpec = { $: mojo.internal.Enum() };
