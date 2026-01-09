// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_contents_ns_view_bridge.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: SelectionDirection
remote_cocoa.mojom.SelectionDirection = {
};

// Enum: Visibility
remote_cocoa.mojom.Visibility = {
};

// Struct: DraggingInfo
remote_cocoa.mojom.DraggingInfo = class {
  constructor(values = {}) {
    this.location_in_view = values.location_in_view !== undefined ? values.location_in_view : 0;
    this.location_in_screen = values.location_in_screen !== undefined ? values.location_in_screen : 0;
    this.operation_mask = values.operation_mask !== undefined ? values.operation_mask : 0;
  }
};

// Interface: WebContentsNSView
remote_cocoa.mojom.WebContentsNSViewPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.WebContentsNSView';
  }

  setParentNSView(parent_ns_view_id) {
    // Method: SetParentNSView
    // Call: SetParentNSView(parent_ns_view_id)
  }

  resetParentNSView() {
    // Method: ResetParentNSView
    // Call: ResetParentNSView()
  }

  setBounds(bounds_in_superview) {
    // Method: SetBounds
    // Call: SetBounds(bounds_in_superview)
  }

  setVisible(visible) {
    // Method: SetVisible
    // Call: SetVisible(visible)
  }

  makeFirstResponder() {
    // Method: MakeFirstResponder
    // Call: MakeFirstResponder()
  }

  takeFocus(reverse) {
    // Method: TakeFocus
    // Call: TakeFocus(reverse)
  }

  startDrag(drop_data, source_origin, operation_mask, image, image_offset, is_privileged) {
    // Method: StartDrag
    // Call: StartDrag(drop_data, source_origin, operation_mask, image, image_offset, is_privileged)
  }

  destroy() {
    // Method: Destroy
    // Call: Destroy()
  }

};

remote_cocoa.mojom.WebContentsNSViewRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebContentsNSViewHost
remote_cocoa.mojom.WebContentsNSViewHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.WebContentsNSViewHost';
  }

  onMouseEvent(event) {
    // Method: OnMouseEvent
    // Call: OnMouseEvent(event)
  }

  onBecameFirstResponder(direction) {
    // Method: OnBecameFirstResponder
    // Call: OnBecameFirstResponder(direction)
  }

  onWindowVisibilityChanged(visibility) {
    // Method: OnWindowVisibilityChanged
    // Call: OnWindowVisibilityChanged(visibility)
  }

  setDropData(drop_data) {
    // Method: SetDropData
    // Call: SetDropData(drop_data)
  }

  draggingEntered(dragging_info) {
    // Method: DraggingEntered
    return new Promise((resolve) => {
      // Call: DraggingEntered(dragging_info)
      resolve({});
    });
  }

  draggingExited() {
    // Method: DraggingExited
    // Call: DraggingExited()
  }

  draggingUpdated(dragging_info) {
    // Method: DraggingUpdated
    return new Promise((resolve) => {
      // Call: DraggingUpdated(dragging_info)
      resolve({});
    });
  }

  performDragOperation(dragging_info) {
    // Method: PerformDragOperation
    return new Promise((resolve) => {
      // Call: PerformDragOperation(dragging_info)
      resolve({});
    });
  }

  dragPromisedFileTo(file_path, drop_data, download_url, source_origin) {
    // Method: DragPromisedFileTo
    return new Promise((resolve) => {
      // Call: DragPromisedFileTo(file_path, drop_data, download_url, source_origin)
      resolve({});
    });
  }

  endDrag(drag_operation, local_point, screen_point) {
    // Method: EndDrag
    // Call: EndDrag(drag_operation, local_point, screen_point)
  }

};

remote_cocoa.mojom.WebContentsNSViewHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
