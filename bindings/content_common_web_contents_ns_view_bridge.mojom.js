// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_contents_ns_view_bridge.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var content = content || {};
var mojo_base = mojo_base || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

remote_cocoa.mojom.SelectionDirectionSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.VisibilitySpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.DraggingInfoSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView = {};
remote_cocoa.mojom.WebContentsNSView.$interfaceName = 'remote_cocoa.mojom.WebContentsNSView';
remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost = {};
remote_cocoa.mojom.WebContentsNSViewHost.$interfaceName = 'remote_cocoa.mojom.WebContentsNSViewHost';
remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec = { $: {} };

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

// Struct: DraggingInfo
mojo.internal.Struct(
    remote_cocoa.mojom.DraggingInfoSpec, 'remote_cocoa.mojom.DraggingInfo', [
      mojo.internal.StructField('location_in_view', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location_in_screen', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('operation_mask', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: WebContentsNSView
mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_SetParentNSView_Params', [
      mojo.internal.StructField('parent_ns_view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_SetBounds_Params', [
      mojo.internal.StructField('bounds_in_superview', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_SetVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_TakeFocus_Params', [
      mojo.internal.StructField('reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_StartDrag_Params', [
      mojo.internal.StructField('drop_data', 0, 0, content.mojom.DropDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image', 16, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('image_offset', 24, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operation_mask', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_privileged', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_Destroy_Params', [
    ],
    [[0, 8]]);

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
      [parent_ns_view_id],
      false);
  }

  resetParentNSView() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec,
      null,
      [],
      false);
  }

  setBounds(bounds_in_superview) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec,
      null,
      [bounds_in_superview],
      false);
  }

  setVisible(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  makeFirstResponder() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  takeFocus(reverse) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec,
      null,
      [reverse],
      false);
  }

  startDrag(drop_data, source_origin, operation_mask, image, image_offset, is_privileged) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec,
      null,
      [drop_data, source_origin, operation_mask, image, image_offset, is_privileged],
      false);
  }

  destroy() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec,
      null,
      [],
      false);
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

remote_cocoa.mojom.WebContentsNSViewReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setParentNSView(params.parent_ns_view_id);
          break;
        }
        case 1: {
          const params = remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetParentNSView();
          break;
        }
        case 2: {
          const params = remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBounds(params.bounds_in_superview);
          break;
        }
        case 3: {
          const params = remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVisible(params.visible);
          break;
        }
        case 4: {
          const params = remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 5: {
          const params = remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.takeFocus(params.reverse);
          break;
        }
        case 6: {
          const params = remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startDrag(params.drop_data, params.source_origin, params.operation_mask, params.image, params.image_offset, params.is_privileged);
          break;
        }
        case 7: {
          const params = remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.destroy();
          break;
        }
      }
    }});
  }
};

remote_cocoa.mojom.WebContentsNSViewReceiver = remote_cocoa.mojom.WebContentsNSViewReceiver;

remote_cocoa.mojom.WebContentsNSViewPtr = remote_cocoa.mojom.WebContentsNSViewRemote;
remote_cocoa.mojom.WebContentsNSViewRequest = remote_cocoa.mojom.WebContentsNSViewPendingReceiver;


// Interface: WebContentsNSViewHost
mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_Params', [
      mojo.internal.StructField('direction', 0, 0, remote_cocoa.mojom.SelectionDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, remote_cocoa.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_Params', [
      mojo.internal.StructField('drop_data', 0, 0, content.mojom.DropDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_Params', [
      mojo.internal.StructField('dragging_info', 0, 0, remote_cocoa.mojom.DraggingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_Params', [
      mojo.internal.StructField('dragging_info', 0, 0, remote_cocoa.mojom.DraggingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_Params', [
      mojo.internal.StructField('dragging_info', 0, 0, remote_cocoa.mojom.DraggingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_Params', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drop_data', 8, 0, content.mojom.DropDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('download_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_origin', 24, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParams', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_Params', [
      mojo.internal.StructField('local_point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drag_operation', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [event],
      false);
  }

  onBecameFirstResponder(direction) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec,
      null,
      [direction],
      false);
  }

  onWindowVisibilityChanged(visibility) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  setDropData(drop_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec,
      null,
      [drop_data],
      false);
  }

  draggingEntered(dragging_info) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec,
      [dragging_info],
      false);
  }

  draggingExited() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec,
      null,
      [],
      false);
  }

  draggingUpdated(dragging_info) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec,
      [dragging_info],
      false);
  }

  performDragOperation(dragging_info) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec,
      [dragging_info],
      false);
  }

  dragPromisedFileTo(file_path, drop_data, download_url, source_origin) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec,
      [file_path, drop_data, download_url, source_origin],
      false);
  }

  endDrag(drag_operation, local_point, screen_point) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec,
      null,
      [drag_operation, local_point, screen_point],
      false);
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

remote_cocoa.mojom.WebContentsNSViewHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMouseEvent(params.event);
          break;
        }
        case 1: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBecameFirstResponder(params.direction);
          break;
        }
        case 2: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWindowVisibilityChanged(params.visibility);
          break;
        }
        case 3: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDropData(params.drop_data);
          break;
        }
        case 4: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec.$.decode(message.payload);
          const result = this.impl.draggingEntered(params.dragging_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec.$.decode(message.payload);
          const result = this.impl.draggingExited();
          break;
        }
        case 6: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.draggingUpdated(params.dragging_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.performDragOperation(params.dragging_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dragPromisedFileTo(params.file_path, params.drop_data, params.download_url, params.source_origin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec.$.decode(message.payload);
          const result = this.impl.endDrag(params.drag_operation, params.local_point, params.screen_point);
          break;
        }
      }
    }});
  }
};

remote_cocoa.mojom.WebContentsNSViewHostReceiver = remote_cocoa.mojom.WebContentsNSViewHostReceiver;

remote_cocoa.mojom.WebContentsNSViewHostPtr = remote_cocoa.mojom.WebContentsNSViewHostRemote;
remote_cocoa.mojom.WebContentsNSViewHostRequest = remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver;

