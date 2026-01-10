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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetParentNSView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParentNSView (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: ResetParentNSView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetParentNSView (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: SetBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBounds (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: SetVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisible (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: MakeFirstResponder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeFirstResponder (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: TakeFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakeFocus (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: StartDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDrag (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: Destroy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Destroy (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setParentNSView');
          const result = this.impl.setParentNSView(params.parent_ns_view_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetParentNSView');
          const result = this.impl.resetParentNSView();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBounds');
          const result = this.impl.setBounds(params.bounds_in_superview);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVisible');
          const result = this.impl.setVisible(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.makeFirstResponder');
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.takeFocus');
          const result = this.impl.takeFocus(params.reverse);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDrag');
          const result = this.impl.startDrag(params.drop_data, params.source_origin, params.operation_mask, params.image, params.image_offset, params.is_privileged);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.destroy');
          const result = this.impl.destroy();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnBecameFirstResponder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBecameFirstResponder (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnWindowVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowVisibilityChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: SetDropData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDropData (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: DraggingEntered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DraggingEntered (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: DraggingExited
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DraggingExited (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: DraggingUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DraggingUpdated (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: PerformDragOperation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformDragOperation (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: DragPromisedFileTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragPromisedFileTo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: EndDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndDrag (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMouseEvent');
          const result = this.impl.onMouseEvent(params.event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBecameFirstResponder');
          const result = this.impl.onBecameFirstResponder(params.direction);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowVisibilityChanged');
          const result = this.impl.onWindowVisibilityChanged(params.visibility);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDropData');
          const result = this.impl.setDropData(params.drop_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.draggingEntered');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.draggingExited');
          const result = this.impl.draggingExited();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.draggingUpdated');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.performDragOperation');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragPromisedFileTo');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.endDrag');
          const result = this.impl.endDrag(params.drag_operation, params.local_point, params.screen_point);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remote_cocoa.mojom.WebContentsNSViewHostReceiver = remote_cocoa.mojom.WebContentsNSViewHostReceiver;

remote_cocoa.mojom.WebContentsNSViewHostPtr = remote_cocoa.mojom.WebContentsNSViewHostRemote;
remote_cocoa.mojom.WebContentsNSViewHostRequest = remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver;

