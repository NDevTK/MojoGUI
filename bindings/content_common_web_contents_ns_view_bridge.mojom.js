// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_contents_ns_view_bridge.mojom
// Module: remote_cocoa.mojom

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
  setParentNSView(parent_ns_view_id) {
    return this.$.setParentNSView(parent_ns_view_id);
  }
  resetParentNSView() {
    return this.$.resetParentNSView();
  }
  setBounds(bounds_in_superview) {
    return this.$.setBounds(bounds_in_superview);
  }
  setVisible(visible) {
    return this.$.setVisible(visible);
  }
  makeFirstResponder() {
    return this.$.makeFirstResponder();
  }
  takeFocus(reverse) {
    return this.$.takeFocus(reverse);
  }
  startDrag(drop_data, source_origin, operation_mask, image, image_offset, is_privileged) {
    return this.$.startDrag(drop_data, source_origin, operation_mask, image, image_offset, is_privileged);
  }
  destroy() {
    return this.$.destroy();
  }
};

remote_cocoa.mojom.WebContentsNSViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebContentsNSView', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setParentNSView(parent_ns_view_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec,
      null,
      [parent_ns_view_id],
      false);
  }

  resetParentNSView() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec,
      null,
      [],
      false);
  }

  setBounds(bounds_in_superview) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec,
      null,
      [bounds_in_superview],
      false);
  }

  setVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  makeFirstResponder() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  takeFocus(reverse) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec,
      null,
      [reverse],
      false);
  }

  startDrag(drop_data, source_origin, operation_mask, image, image_offset, is_privileged) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec,
      null,
      [drop_data, source_origin, operation_mask, image, image_offset, is_privileged],
      false);
  }

  destroy() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebContentsNSView', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec.$.structSpec);
          const result = this.impl.setParentNSView(params.parent_ns_view_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec.$.structSpec);
          const result = this.impl.resetParentNSView();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec.$.structSpec);
          const result = this.impl.setBounds(params.bounds_in_superview);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setVisible(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec.$.structSpec);
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec.$.structSpec);
          const result = this.impl.takeFocus(params.reverse);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec.$.structSpec);
          const result = this.impl.startDrag(params.drop_data, params.source_origin, params.operation_mask, params.image, params.image_offset, params.is_privileged);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec.$.structSpec);
          const result = this.impl.destroy();
          break;
        }
      }
      } catch (err) {}
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
  onMouseEvent(event) {
    return this.$.onMouseEvent(event);
  }
  onBecameFirstResponder(direction) {
    return this.$.onBecameFirstResponder(direction);
  }
  onWindowVisibilityChanged(visibility) {
    return this.$.onWindowVisibilityChanged(visibility);
  }
  setDropData(drop_data) {
    return this.$.setDropData(drop_data);
  }
  draggingEntered(dragging_info) {
    return this.$.draggingEntered(dragging_info);
  }
  draggingExited() {
    return this.$.draggingExited();
  }
  draggingUpdated(dragging_info) {
    return this.$.draggingUpdated(dragging_info);
  }
  performDragOperation(dragging_info) {
    return this.$.performDragOperation(dragging_info);
  }
  dragPromisedFileTo(file_path, drop_data, download_url, source_origin) {
    return this.$.dragPromisedFileTo(file_path, drop_data, download_url, source_origin);
  }
  endDrag(drag_operation, local_point, screen_point) {
    return this.$.endDrag(drag_operation, local_point, screen_point);
  }
};

remote_cocoa.mojom.WebContentsNSViewHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebContentsNSViewHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onMouseEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onBecameFirstResponder(direction) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec,
      null,
      [direction],
      false);
  }

  onWindowVisibilityChanged(visibility) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  setDropData(drop_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec,
      null,
      [drop_data],
      false);
  }

  draggingEntered(dragging_info) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec,
      [dragging_info],
      false);
  }

  draggingExited() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec,
      null,
      [],
      false);
  }

  draggingUpdated(dragging_info) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec,
      [dragging_info],
      false);
  }

  performDragOperation(dragging_info) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec,
      [dragging_info],
      false);
  }

  dragPromisedFileTo(file_path, drop_data, download_url, source_origin) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec,
      remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec,
      [file_path, drop_data, download_url, source_origin],
      false);
  }

  endDrag(drag_operation, local_point, screen_point) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebContentsNSViewHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onMouseEvent(params.event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec.$.structSpec);
          const result = this.impl.onBecameFirstResponder(params.direction);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowVisibilityChanged(params.visibility);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec.$.structSpec);
          const result = this.impl.setDropData(params.drop_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec.$.structSpec);
          const result = this.impl.draggingExited();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec.$.structSpec);
          const result = this.impl.endDrag(params.drag_operation, params.local_point, params.screen_point);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remote_cocoa.mojom.WebContentsNSViewHostReceiver = remote_cocoa.mojom.WebContentsNSViewHostReceiver;

remote_cocoa.mojom.WebContentsNSViewHostPtr = remote_cocoa.mojom.WebContentsNSViewHostRemote;
remote_cocoa.mojom.WebContentsNSViewHostRequest = remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver;

