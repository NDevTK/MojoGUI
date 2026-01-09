// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_contents_ns_view_bridge.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: SelectionDirection
remote_cocoa.mojom.SelectionDirection = {
  kDirect: 0,
  kForward: 1,
  kReverse: 2,
};

// Enum: Visibility
remote_cocoa.mojom.Visibility = {
  kVisible: 0,
  kOccluded: 1,
  kHidden: 2,
};

// Interface: WebContentsNSView
remote_cocoa.mojom.WebContentsNSView = {};

remote_cocoa.mojom.WebContentsNSViewPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.WebContentsNSViewRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.WebContentsNSView';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.WebContentsNSViewPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.WebContentsNSViewRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.WebContentsNSViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParentNSView(parent_ns_view_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec,
      null,
      [parent_ns_view_id]);
  }

  resetParentNSView() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec,
      null,
      []);
  }

  setBounds(bounds_in_superview) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec,
      null,
      [bounds_in_superview]);
  }

  setVisible(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec,
      null,
      [visible]);
  }

  makeFirstResponder() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec,
      null,
      []);
  }

  takeFocus(reverse) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec,
      null,
      [reverse]);
  }

  startDrag(drop_data, source_origin, operation_mask, image, image_offset, is_privileged) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec,
      null,
      [drop_data, source_origin, operation_mask, image, image_offset, is_privileged]);
  }

  destroy() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec,
      null,
      []);
  }

};

remote_cocoa.mojom.WebContentsNSView.getRemote = function() {
  let remote = new remote_cocoa.mojom.WebContentsNSViewRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.WebContentsNSView',
    'context');
  return remote.$;
};

// ParamsSpec for SetParentNSView
remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.SetParentNSView_Params',
      packedSize: 16,
      fields: [
        { name: 'parent_ns_view_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetParentNSView
remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.ResetParentNSView_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBounds
remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.SetBounds_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds_in_superview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVisible
remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.SetVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MakeFirstResponder
remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.MakeFirstResponder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TakeFocus
remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.TakeFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'reverse', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDrag
remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.StartDrag_Params',
      packedSize: 56,
      fields: [
        { name: 'drop_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'operation_mask', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'image', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'image_offset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_privileged', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Destroy
remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSView.Destroy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.WebContentsNSViewPtr = remote_cocoa.mojom.WebContentsNSViewRemote;
remote_cocoa.mojom.WebContentsNSViewRequest = remote_cocoa.mojom.WebContentsNSViewPendingReceiver;


// Interface: WebContentsNSViewHost
remote_cocoa.mojom.WebContentsNSViewHost = {};

remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.WebContentsNSViewHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.WebContentsNSViewHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.WebContentsNSViewHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.WebContentsNSViewHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMouseEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec,
      null,
      [event]);
  }

  onBecameFirstResponder(direction) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec,
      null,
      [direction]);
  }

  onWindowVisibilityChanged(visibility) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec,
      null,
      [visibility]);
  }

  setDropData(drop_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec,
      null,
      [drop_data]);
  }

  draggingEntered(dragging_info) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec,
      [dragging_info]);
  }

  draggingExited() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec,
      null,
      []);
  }

  draggingUpdated(dragging_info) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec,
      [dragging_info]);
  }

  performDragOperation(dragging_info) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec,
      [dragging_info]);
  }

  dragPromisedFileTo(file_path, drop_data, download_url, source_origin) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec,
      [file_path, drop_data, download_url, source_origin]);
  }

  endDrag(drag_operation, local_point, screen_point) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec,
      null,
      [drag_operation, local_point, screen_point]);
  }

};

remote_cocoa.mojom.WebContentsNSViewHost.getRemote = function() {
  let remote = new remote_cocoa.mojom.WebContentsNSViewHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.WebContentsNSViewHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnMouseEvent
remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.OnMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBecameFirstResponder
remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.OnBecameFirstResponder_Params',
      packedSize: 16,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowVisibilityChanged
remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.OnWindowVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDropData
remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.SetDropData_Params',
      packedSize: 16,
      fields: [
        { name: 'drop_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DraggingEntered
remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.DraggingEntered_Params',
      packedSize: 16,
      fields: [
        { name: 'dragging_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.DraggingEntered_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DraggingExited
remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.DraggingExited_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DraggingUpdated
remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.DraggingUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'dragging_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.DraggingUpdated_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PerformDragOperation
remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.PerformDragOperation_Params',
      packedSize: 16,
      fields: [
        { name: 'dragging_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.PerformDragOperation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DragPromisedFileTo
remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.DragPromisedFileTo_Params',
      packedSize: 40,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'drop_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'download_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.DragPromisedFileTo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EndDrag
remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.WebContentsNSViewHost.EndDrag_Params',
      packedSize: 32,
      fields: [
        { name: 'drag_operation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'local_point', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'screen_point', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.WebContentsNSViewHostPtr = remote_cocoa.mojom.WebContentsNSViewHostRemote;
remote_cocoa.mojom.WebContentsNSViewHostRequest = remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver;

